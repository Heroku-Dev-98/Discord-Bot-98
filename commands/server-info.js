const Discord = require('discord.js');
module.exports = {
	name: 'server-info',
	description: 'Bot Info',
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		const serverinfo = new Discord.RichEmbed()
			.setColor(0x0094FF)
			.setTitle('Server Info')
			.setThumbnail(`${message.guild.iconURL}`)
			.addField(`Server Name: ${message.guild.name}`)
			.addField(`Total Members: ${message.guild.memberCount}`)
			.setTimestamp;
		message.channel.send(serverinfo).catch(err => console.log(err));
		console.log(`${message.author.username} used the >server-info command`);
	} };
