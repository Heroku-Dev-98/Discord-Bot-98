const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', message => {
	const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === 'commands') {
		if (message.member.permissions.has('ADMINISTRATOR')) {
			const Adminembed = new Discord.RichEmbed()
				.setTitle('Commands:')
				.setThumbnail(process.env.avatarURL)
				.setColor(process.env.DefaultColor)
				.addField('Weather Commands:', `${process.env.prefix}weather (city) ${process.env.prefix}EAS`)
				.addField('Random Commands:', `${process.env.prefix}commands ${process.env.prefix}urban (word) ${process.env.prefix}dictionary (word) ${process.env.prefix}ping ${process.env.prefix}avatar ${process.env.prefix}invite-bot ${process.env.prefix}help`)
				.addField('Fun Commands:', `${process.env.prefix}rps-help ${process.env.prefix}rps (paper, rock, or scissors) ${process.env.prefix}copy${process.env.prefix}8-ball (question) ${process.env.prefix}randomcat ${process.env.prefix}coinflip`)
				.addField('Info Commands:', `${process.env.prefix}bot-info ${process.env.prefix}server-info ${process.env.prefix}user-info ${process.env.prefix}process.env.prefix`)
				.addField('Economy Commands:', `${process.env.prefix}balance ${process.env.prefix}inventory ${process.env.prefix}transfer (user & amount) ${process.env.prefix}buy ${process.env.prefix}items ${process.env.prefix}leaderboard`)
				.addField('Emote Commands', `${process.env.prefix}server-emojis ${process.env.prefix}yes/no ${process.env.prefix}school ${process.env.prefix}birthday ${process.env.prefix}ok ${process.env.prefix}fistbump2 ${process.env.prefix}fistbump ${process.env.prefix}joy`)
				.addField('Music Commands:', `${process.env.prefix}play ${process.env.prefix}skip ${process.env.prefix}stop ${process.env.prefix}volume (number) ${process.env.prefix}current-track ${process.env.prefix}queqe ${process.env.prefix}pause ${process.env.prefix}resume ${process.env.prefix}skip-all ${process.env.prefix}skip-to`)
				.addField('Other Commands:', `${process.env.prefix}messages ${process.env.prefix}commands ${process.env.prefix}urban (word) ${process.env.prefix}dictionary (word) ${process.env.prefix}ping ${process.env.prefix}avatar ${process.env.prefix}invite-bot ${process.env.prefix}help ${process.env.prefix}speed ${process.env.prefix}beep ${process.env.prefix}login ${process.env.prefix}logout`)
				.addField('Moderator Commands:', `${process.env.prefix}create-role ${process.env.prefix}ban ${process.env.prefix}kick`)
				.setTimestamp()
				.setFooter(`${message.author.username}`);
			message.channel.send(Adminembed).catch(err => console.log(err));
		} else {
			const embed = new Discord.RichEmbed()
				.setTitle('Commands:')
				.setThumbnail(process.env.avatarURL)
				.setColor(process.env.DefaultColor)
				.addField('Weather Commands:', `${process.env.prefix}weather (city) ${process.env.prefix}EAS`)
				.addField('Random Commands:', `${process.env.prefix}commands ${process.env.prefix}urban (word) ${process.env.prefix}dictionary (word) ${process.env.prefix}ping ${process.env.prefix}avatar ${process.env.prefix}invite-bot ${process.env.prefix}help`)
				.addField('Fun Commands:', `${process.env.prefix}rps-help ${process.env.prefix}rps (paper, rock, or scissors) ${process.env.prefix}copy${process.env.prefix}8-ball (question) ${process.env.prefix}randomcat ${process.env.prefix}coinflip`)
				.addField('Info Commands:', `${process.env.prefix}bot-info ${process.env.prefix}server-info ${process.env.prefix}user-info ${process.env.prefix}process.env.prefix`)
				.addField('Economy Commands:', `${process.env.prefix}balance ${process.env.prefix}inventory ${process.env.prefix}transfer (user & amount) ${process.env.prefix}buy ${process.env.prefix}items ${process.env.prefix}leaderboard`)
				.addField('Emote Commands', `${process.env.prefix}server-emojis ${process.env.prefix}yes/no ${process.env.prefix}school ${process.env.prefix}birthday ${process.env.prefix}ok ${process.env.prefix}fistbump2 ${process.env.prefix}fistbump ${process.env.prefix}joy`)
				.addField('Music Commands:', `${process.env.prefix}play ${process.env.prefix}skip ${process.env.prefix}stop ${process.env.prefix}volume (number) ${process.env.prefix}current-track ${process.env.prefix}queqe ${process.env.prefix}pause ${process.env.prefix}resume ${process.env.prefix}skip-all ${process.env.prefix}skip-to`)
				.addField('Other Commands:', `${process.env.prefix}messages ${process.env.prefix}commands ${process.env.prefix}urban (word) ${process.env.prefix}dictionary (word) ${process.env.prefix}ping ${process.env.prefix}avatar ${process.env.prefix}invite-bot ${process.env.prefix}help ${process.env.prefix}speed ${process.env.prefix}beep ${process.env.prefix}login ${process.env.prefix}logout`)
				.setTimestamp()
				.setFooter(`${message.author.username}`);
			message.channel.send(embed).catch(err => console.log(err));
		}

	}
});
client.login(process.env.token);
