const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('../config.json');


client.on('message', message => {
	if (message.content === '>server-emojis') {
		const emojiList = message.guild.emojis.map(e=>e.toString()).join(' ');
		message.channel.send(emojiList);
	}
});

client.login(token);