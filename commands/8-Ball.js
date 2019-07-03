const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
const client = new Discord.Client({
	disableEveryone: true,
});

client.on('message', message => {
	if (message.content.startsWith(`${prefix}8-ball`)) {
		const outcomes = [
			'I`m not sure if you should do that...',
			'Maybe...',
			'hrmm...',
			'nah!',
			'No Way!',
			'yeah, sure...',
			'meh...',
			'nope!',
			'No!',
			'Yes!',
			'Don`t!',
			'Sure!',
			'umm...No!',
		];
		const outcomesIndex = Math.round(Math.random() * outcomes.length);
		message.channel.send(outcomes[outcomesIndex]).catch(err => console.log(err));
		console.log(`${message.author.username} used the >8-Ball command`);
	}
});

client.login(token);