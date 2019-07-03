const Discord = require('discord.js');
const client = new Discord.Client();
const { Users, CurrencyShop } = require('./dbObjects');
const { Op } = require('sequelize');
const currency = new Discord.Collection();
const { prefix, token } = require('../config.json');
Reflect.defineProperty(currency, 'add', {
	value: function add(id, amount) {
		const user = currency.get(id);
		if (user) {
			user.balance += Number(amount);
			return user.save();
		}
		const newUser = Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);
		return newUser;
	},
});

Reflect.defineProperty(currency, 'getBalance', {
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});

client.once('ready', () => {
	const storedBalances = Users.findAll();
	storedBalances.forEach(b => currency.set(b.user_id, b));
});
client.on('message', message => {
	if (message.author.bot) return;
	currency.add(message.author.id, 1);
	var mcount = 0;
	mcount + 1;
	client.once('ready', () => {
		console.log(+mcount + ' Total Messages ');
	});


	if (!message.content.startsWith(prefix)) return;
	const input = message.content.slice(prefix.length).trim();
	if (!input.length) return;
	const [, command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);

	if (command === 'balance') {
		const target = message.mentions.users.first() || message.author;
		return message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}`);
	}
	else if (command === 'inventory') {
		const target = message.mentions.users.first() || message.author;
		const user = Users.findOne({ where: { user_id: target.id } });
		const items = user.getItems();
		if (!items.length) return message.channel.send(`${target.tag} has nothing!`);


		if (!items.length) return message.channel.send(`${target.tag} has nothing!`);
		return message.channel.send(`${target.tag} currently has ${items.map(t => `${t.amount} ${t.item.name}`).join(', ')}`);
	}
	else if (command === 'transfer') {
		const currentAmount = currency.getBalance(message.author.id);
		const transferAmount = commandArgs.split(/ +/).find(arg => !/<@!?\d+>/.test(arg));
		const transferTarget = message.mentions.users.first();

		if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount`);
		if (transferAmount > currentAmount) return message.channel.send(`Sorry ${message.author} you don't have that much.`);
		if (transferAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}`);

		currency.add(message.author.id, -transferAmount);
		currency.add(transferTarget.id, transferAmount);

		return message.channel.send(`Successfully transferred ${transferAmount} to ${transferTarget.tag}. Your current balance is ${currency.getBalance(message.author.id)}💰`);
	}
	else if (command === 'buy') {
		const item = CurrencyShop.findOne({ where: { name: { [Op.like]: commandArgs } } });
		if (!item) return message.channel.send('That item doesn\'t exist.');
		if (item.cost > currency.getBalance(message.author.id)) {
			return message.channel.send(`You don't have enough currency, ${message.author}`);
		}

		const user = Users.findOne({ where: { user_id: message.author.id } });
		currency.add(message.author.id, -item.cost);
		user.addItem(item);

		message.channel.send(`You've bought a ${item.name}`);
	} else if (command === 'shop') {
		const items = CurrencyShop.findAll();
		return message.channel.send(items.map(i => `${i.name}: ${i.cost}`).join('\n'), { code: true });
	}
	else if (command === 'stats') {
		message.reply(+client.users.size + ' Total Users  ');
		message.reply(+client.guilds.size + ' Total Servers  ');
		message.reply(+client.channels.size + ' Total Channels  ');
	}
	else if (command === 'leaderboard') {
		return message.channel.send(
			currency.sort((a, b) => b.balance - a.balance)
				.filter(user => client.users.has(user.user_id))
				.first(10)
				.map((user, position) => `(${position + 1}) ${(client.users.get(user.user_id).tag)}: ${user.balance}`)
				.join('\n'),
			{ code: true }
		);
	}
});
client.login(token);