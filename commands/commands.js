const Discord = require('discord.js');
// eslint-disable-next-line no-unused-vars
const { prefix, token, DefaultColor, avatarURL } = require('../config.json');
module.exports = {
	name: 'commands',
	description: 'commands',
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		const embed = new Discord.RichEmbed()
			.setTitle('Commands:')
			.setThumbnail(`${avatarURL}`)
			.setColor(DefaultColor)
			.addField('Weather Commands:', `${prefix}weather (city) ${prefix}EAS`)
			.addField('Random Commands:', `${prefix}commands ${prefix}urban (word) ${prefix}dictionary (word) ${prefix}ping ${prefix}avatar ${prefix}invite-bot ${prefix}help`)
			.addField('Fun Commands:', `${prefix}8-ball (question) ${prefix}randomcat ${prefix}coinflip`)
			.addField('Info Commands:', `${prefix}bot-info ${prefix}server-info ${prefix}user-info ${prefix}prefix`)
			.addField('Emote Commands', `${prefix}server-emojis ${prefix}yes/no ${prefix}school ${prefix}birthday ${prefix}ok ${prefix}fistbump2 ${prefix}fistbump ${prefix}joy`)
			.addField('Music Commands:', `${prefix}play (song) ${prefix}skip ${prefix}stop ${prefix}dictionary (word) ${prefix}ping ${prefix}avatar ${prefix}invite-bot ${prefix}help ${prefix}speed ${prefix}beep ${prefix}login ${prefix}logout`)
			.addField('Other Commands:', `${prefix}messages ${prefix}commands ${prefix}urban (word) ${prefix}dictionary (word) ${prefix}ping ${prefix}avatar ${prefix}invite-bot ${prefix}help ${prefix}speed ${prefix}beep ${prefix}login ${prefix}logout`);
		message.channel.send(embed).catch(err => console.log(err));

	} };