const Discord = require('discord.js');
const client = new Discord.Client();
const weather = require('weather-js');
// eslint-disable-next-line no-unused-vars
const { prefix, token, DefaultColor, avatarURL } = require('../config.json');
client.on('message', message => {
	client.on('error', console.error);
	const msg = message.content.toUpperCase();
	// eslint-disable-next-line no-unused-vars
	const sender = message.author.username;
	const cont = message.content.slice(prefix.length).split(' ');
	const args = cont.slice(1);
	if (msg.startsWith(`${prefix}RESTART`)) {

		weather.find({ search: args.join(' '), degreeType: 'F' }, function(err, result) {
			if (err) console.log(err);
			if (result.length === 0) {
				message.channel.send('Restarting...');
				console.log(`${message.author.username} used the >restart command`);
				return;
			}
		});
	}

});
client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);