const Discord = require('discord.js');
const { prefix, token, DefaultColor, avatarURL } = require('../config.json');

const client = new Discord.Client();

client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === 'commands') {
		if (!message.member.permissions.has('ADMINISTRATOR')) {
			const Adminembed = new Discord.RichEmbed()
				.setTitle('Commands:')
				.setThumbnail(avatarURL)
				.setColor(DefaultColor)
				.addField('Weather Commands:', `${prefix}weather (city) ${prefix}EAS`)
				.addField('Random Commands:', `${prefix}commands ${prefix}urban (word) ${prefix}dictionary (word) ${prefix}ping ${prefix}avatar ${prefix}invite-bot ${prefix}help`)
				.addField('Fun Commands:', `${prefix}rps-help ${prefix}rps (paper, rock, or scissors) ${prefix}copy${prefix}8-ball (question) ${prefix}randomcat ${prefix}coinflip`)
				.addField('Info Commands:', `${prefix}bot-info ${prefix}server-info ${prefix}user-info ${prefix}prefix`)
				.addField('Economy Commands:', `${prefix}balance ${prefix}inventory ${prefix}transfer (user & amount) ${prefix}buy ${prefix}items ${prefix}leaderboard`)
				.addField('Emote Commands', `${prefix}server-emojis ${prefix}yes/no ${prefix}school ${prefix}birthday ${prefix}ok ${prefix}fistbump2 ${prefix}fistbump ${prefix}joy`)
				.addField('Music Commands:', `${prefix}play ${prefix}skip ${prefix}stop ${prefix}volume (number) ${prefix}current-track ${prefix}queqe ${prefix}pause ${prefix}resume ${prefix}skip-all ${prefix}skip-to`)
				.addField('Other Commands:', `${prefix}messages ${prefix}commands ${prefix}urban (word) ${prefix}dictionary (word) ${prefix}ping ${prefix}avatar ${prefix}invite-bot ${prefix}help ${prefix}speed ${prefix}beep ${prefix}login ${prefix}logout`)
				.addField('Moderator Commands:', `${prefix}create-role`)
				.setTimestamp()
				.setFooter(`${message.author.username}`);
			message.channel.send(Adminembed).catch(err => console.log(err));
		} else {
			const embed = new Discord.RichEmbed()
				.setTitle('Commands:')
				.setThumbnail(avatarURL)
				.setColor(DefaultColor)
				.addField('Weather Commands:', `${prefix}weather (city) ${prefix}EAS`)
				.addField('Random Commands:', `${prefix}commands ${prefix}urban (word) ${prefix}dictionary (word) ${prefix}ping ${prefix}avatar ${prefix}invite-bot ${prefix}help`)
				.addField('Fun Commands:', `${prefix}rps-help ${prefix}rps (paper, rock, or scissors) ${prefix}copy${prefix}8-ball (question) ${prefix}randomcat ${prefix}coinflip`)
				.addField('Info Commands:', `${prefix}bot-info ${prefix}server-info ${prefix}user-info ${prefix}prefix`)
				.addField('Economy Commands:', `${prefix}balance ${prefix}inventory ${prefix}transfer (user & amount) ${prefix}buy ${prefix}items ${prefix}leaderboard`)
				.addField('Emote Commands', `${prefix}server-emojis ${prefix}yes/no ${prefix}school ${prefix}birthday ${prefix}ok ${prefix}fistbump2 ${prefix}fistbump ${prefix}joy`)
				.addField('Music Commands:', `${prefix}play ${prefix}skip ${prefix}stop ${prefix}volume (number) ${prefix}current-track ${prefix}queqe ${prefix}pause ${prefix}resume ${prefix}skip-all ${prefix}skip-to`)
				.addField('Other Commands:', `${prefix}messages ${prefix}commands ${prefix}urban (word) ${prefix}dictionary (word) ${prefix}ping ${prefix}avatar ${prefix}invite-bot ${prefix}help ${prefix}speed ${prefix}beep ${prefix}login ${prefix}logout`)
				.setTimestamp()
				.setFooter(`${message.author.username}`);
			message.channel.send(embed).catch(err => console.log(err));
		}

	}
});
client.login(token);
