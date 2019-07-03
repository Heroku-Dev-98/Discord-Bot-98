const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'stats',
	description: 'Discord Weather Stats',
	// eslint-disable-next-line no-unused-vars
	execute(kayn, REGIONS, config, message, args, con, guilds) {
		const StatsEmbed = new Discord.RichEmbed()
			.setColor(0x0094FF)
			.addField('Total Users:', client.users.size, true)
			.addField('Total Servers:', client.guilds.size, true)
			.addField('Total Channels:', client.channels.size, true);
		message.channel.send(StatsEmbed).catch(err => console.log(err));
	},
};