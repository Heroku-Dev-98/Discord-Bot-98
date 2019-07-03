module.exports = {
	name: 'login',
	description: 'Login to the bot account',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send('Logging in...').then(sent => {
			sent.edit('Logged In');
			console.log(`${message.author.username} used the >login command`);
		});
	},
};
