module.exports = {
	name: 'ping',
	description: 'check the bots ping',
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		message.channel.send('Pinging...').then(sent => {
			sent.edit(`Pong! ${sent.createdTimestamp - message.createdTimestamp}ms`);
			console.log(`${message.author.username} used the >ping command`);
		});
	},
};
