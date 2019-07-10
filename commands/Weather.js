//	NOTE: If you are getting an error because something is 'undefined' every once and a while, change line 72 to " if (result === undefined || result.length === 0) {
const Discord = require('discord.js');
const client = new Discord.Client();
const weather = require('weather-js');
// eslint-disable-next-line no-unused-vars
const errorMessage = 'Please enter a valid location';
client.on('error', console.error);
client.on('message', message => {
	client.on('error', console.error);
	const msg = message.content.toUpperCase();
	// eslint-disable-next-line no-unused-vars
	const sender = message.author.username;
	const cont = message.content.slice(process.env.prefix.length).split(' ');
	const args = cont.slice(1);
	client.on('error', console.error);
	if (msg.startsWith(`${process.env.prefix}WEATHER`)) {

		weather.find({ search: args.join(' '), degreeType: 'F' }, function(err, result) {
			if (err) console.log(err);
			if (result === undefined || result.length === 0) {
				message.channel.send(`${errorMessage}`);
				return;
			}
			const current = result[0].current;
			const location = result[0].location;
			const embed = new Discord.RichEmbed()
				.setDescription(`**${current.skytext}**`)
				.setAuthor(`Weather for ${current.observationpoint}`)
				.setThumbnail(current.imageUrl)
				.setColor(0x0094FF)
				.addField('Timezone', `UTC${location.timezone}`, true)
				.addField('Degree Type', location.degreetype, true)
				.addField('Temperature', `${current.temperature} Degrees`, true)
				.addField('Feels Like', `${current.feelslike} Degrees`, true)
				.addField('Winds', current.winddisplay, true)
				.addField('Humidity', `${current.humidity}%`, true);
			message.channel.send(embed).catch(err => console.log(err));

		});
		console.log(`${message.author.username} used the >weather command`);
	}

});
client.login(process.env.token);