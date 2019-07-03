module.exports = {
	name: 'beep',
	description: 'check the bots ping',
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		message.channel.send('Beeping...').then(sent => {
			sent.edit(`Boop! ${sent.createdTimestamp - message.createdTimestamp}ms`).catch(err => console.log(err));
			console.log(`${message.author.username} used the >beep command`);
		});
	},
};
