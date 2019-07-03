module.exports = {
	name: 'logout',
	description: 'Logout of the bot account',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send('Logging out...').then(sent => {
			sent.edit('Logged out');
			console.log(`${message.author.username} used the >logout command`);
		});
	},
};
