const Discord = require('discord.js');
// eslint-disable-next-line no-unused-vars
const { prefix, token, DefaultColor, avatarURL } = require('../config.json');
module.exports = {
	name: 'invite-bot',
	description: 'TX Bot Invite Link',
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		const invitebotEmbed = new Discord.RichEmbed()
			.setColor(0x0094FF)
			.setTitle('Invite link:')
			.setThumbnail(`${avatarURL}`)
			.addField('https://discordapp.com/api/oauth2/authorize?client_id=583366572530204683&permissions=2146958833&scope=bot')
			.setTimestamp;
		message.channel.send({ invitebotEmbed });
		console.log(`${message.author.username} used the >invite-bot command`);
	} };
