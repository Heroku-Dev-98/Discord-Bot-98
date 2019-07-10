const Discord = require('discord.js');
module.exports = {
	name: 'bot-info',
	description: 'Discord Weather Info',
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		const BotInfoEmbed = new Discord.RichEmbed()
			.setDescription('Bot-Info:')
			.setThumbnail(process.env.avatarURL)
			.setColor(process.env.DefaultColor)
			.addField('Language:', 'JavaScript')
			.addField('Node.js:', 'v11.11.0')
			.addField('Npm:', '6.7.0',)
			.addField('Author:', 'Brahaha#1435')
			.addField('License:', 'ISC')
			.addField('Microsoft Windows:', 'Version 10.0.17134.706')
			.addField('Git Bash:', '2.21.0')
			.addField('Heroku:', '7.22.9')
			.addField('Discord-Weather:', '8.9.3');
		message.channel.send(BotInfoEmbed).catch(err => console.log(err));
	} };
