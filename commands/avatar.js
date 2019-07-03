module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp'],
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		if (!message.mentions.users.size) {
			return message.channel.send(`${message.author.displayAvatarURL}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.displayAvatarURL}`;
		});

		message.channel.send(avatarList).catch(err => console.log(err));
		// eslint-disable-next-line no-unused-vars
		const { prefix, token, DefaultColor, avatarURL } = require('../config.json');
	},
};
