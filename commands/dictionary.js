const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');
const client = new Discord.Client();
// eslint-disable-next-line no-unused-vars


client.once('ready', () => {
	console.log('Urban Running!');
});

client.on('message', async message => {
	if (!message.content.startsWith(process.env.prefix) || message.author.bot) return;

	const args = message.content.slice(process.env.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'randomcat') {
		const { body } = await fetch('https://aws.random.cat/meow').then(response => response.json());

		message.channel.send(body.file);
	} else if (command === 'urban' || command === 'dictionary') {
		if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });

		const { body } = await fetch.get(`https://api.urbandictionary.com/v0/define${query}`).then(response => response.json());

		if (!body.list.length) {
			return message.channel.send(`No results found for ${args.join(' ')}`);
		}

		message.channel.send(body.list[0].definition).catch(err => console.log(err));
	}
});

client.login(process.env.token);