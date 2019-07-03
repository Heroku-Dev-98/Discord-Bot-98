const Discord = require('discord.js');
module.exports = {
	name: 'copy',
	description: 'Args',
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		const serverinfo = new Discord.RichEmbed()
			.setColor(0x0094FF)
			.addField(args[0])
			.addField(args[1])
			.addField(args[2])
			.addField(args[3])
			.addField(args[4])
			.addField(args[5])
			.addField(args[6])
			.addField(args[7])
			.addField(args[8])
			.addField(args[9])
			.addField(args[10])
			.addField(args[11])
			.addField(args[12])
			.addField(args[13])
			.addField(args[14])
			.addField(args[15])
			.addField(args[16])
			.addField(args[17])
			.setTimestamp;
		message.channel.send(serverinfo).catch(err => console.log(err));
		console.log(`${message.author.username} used the >copy command`);
	} };
