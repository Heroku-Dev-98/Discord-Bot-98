const Discord = require('discord.js');
module.exports = {
	name: 'user-info',
	description: 'User-Info',
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		const UserInfoEmbed = new Discord.RichEmbed()
			.setDescription('User Info:')
			.setThumbnail(`${message.author.displayAvatarURL}`)
			.setColor(0x0094FF)
			.addField('Username:', `${message.author.username}`, true)
			.addField('Tag:', `${message.author.tag}`, true)
			.addField('ID:', `${message.author.id}`, true);
		message.channel.send(UserInfoEmbed).catch(err => console.log(err));
	} };