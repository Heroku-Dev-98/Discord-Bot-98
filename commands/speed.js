module.exports = {
	name: 'speed',
	description: 'check the bots ping',
	// eslint-disable-next-line no-unused-vars
	execute(client, kayn, REGIONS, config, message, args, con, guilds) {
		message.channel.send('Testing...').then(sent => {
			sent.edit(`Bam! ${sent.createdTimestamp - message.createdTimestamp}ms`).catch(err => console.log(err));
			console.log(`${message.author.username} used the >speed command`);
		});
	},
};