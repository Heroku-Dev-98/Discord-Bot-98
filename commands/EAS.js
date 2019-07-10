// eslint-disable-next-line no-unused-vars

module.exports = {
	name: 'eas',
	description: 'EAS-info (Emergency-Alert-System)',
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		message.channel.send({ embed: {
			color: `${process.env.DefaultColor}`,
			title: '',
			thumbnail: {
				url: process.env.avatarURL,
			},
			fields: [
				{
					name: 'EAS-Info:',
					value: 'The EAS, (Emergency-Alert-System is a Nationwide program to warn against Tsunamis, Hurricanes, and other disasters)',
				},
			],
			image: {
				url: '',
			},
			timestamp: new Date(),
			footer: {
				text: `${message.author.username}`,
				icon_url: '',
			},
		},
		});
	} };
