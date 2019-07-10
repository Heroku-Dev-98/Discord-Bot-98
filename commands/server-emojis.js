const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
	if (message.content === '>server-emojis') {
		const emojiList = message.guild.emojis.map(e=>e.toString()).join(' ');
		message.channel.send(emojiList);
	}
});

client.login(process.env.token);