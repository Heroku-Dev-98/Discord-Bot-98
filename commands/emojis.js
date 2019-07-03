const Discord = require('discord.js');
const client = new Discord.Client();
// eslint-disable-next-line no-unused-vars
const { prefix, token, DefaultColor, avatarURL } = require('../config.json');

client.on('message', message => {
	if (message.content === `${prefix}joy`) {
		message.react('😂');
	}
	if (message.content === `${prefix}yes/no`) {
		message.react('✅')
			.then(() => message.react('❌'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
	else if (message.content === `${prefix}fistbump`) {
		message.react('👊').catch(() => console.error('One of the emojis failed to react.'));
	}
	else if (message.content === `${prefix}fistbump2`) {
		message.react('🤜')
			.then(() => message.react('🤛'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
	else if (message.content === `${prefix}ok`) {
		message.react('👌').catch(() => console.error('One of the emojis failed to react.'));
	}
	else if (message.content === `${prefix}birthday`) {
		message.react('🎂')
			.then(() => message.react('🎁'))
			.then(() => message.react('🎈'))
			.then(() => message.react('🎉'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
	else if (message.content === `${prefix}school`) {
		message.react('😫')
			.then(() => message.react('📖'))
			.then(() => message.react('📚'))
			.then(() => message.react('✏'))
			.then(() => message.react('📝'))
			.then(() => message.react('✏'))
			.then(() => message.react('📝'))
			.then(() => message.react('✏'))
			.then(() => message.react('📝'))
			.then(() => message.react('🕐'))
			.then(() => message.react('🕥'))
			.then(() => message.react('🕚'))
			.then(() => message.react('✏'))
			.then(() => message.react('📝'))
			.then(() => message.react('😫'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.login(token);