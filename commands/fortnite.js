const Discord = require('discord.js');
const fortnite = require('fortnitetracker-7days-stats');

exports.execute = (client, message, args) => {
	if(args.length < 2) {
		const nment = 'No player mentioned';
		message.channel.send(`**${nment}**`);
		return;
	}

	args.shift();
	var name = args.join(' ');
	name = name.trim();

	var url = 'https://fortnitetracker.com/profile/pc/'
                                + encodeURIComponent(name);
	message.channel.startTyping();

	fortnite.getStats(name, 'pc', (err, result) => {
		if(err) {
			const pnotfound = 'Player not found';
			message.channel.send(`**${pnotfound}**`);
			message.channel.stopTyping();
			return;
		}

		var msg = '';
		msg += '\nwins: ' + result.wins;
		msg += '\ngames: ' + result.matches;
		msg += '\nwinrate: ' + ~~result.wr + '%';
		msg += '\n\nkills: ' + result.kills;
		msg += '\nkd: ' + result.kd;
		var embed = new Discord.RichEmbed()
			.setAuthor(result.accountName, '', url)
			.setDescription(msg)
			.setColor(0x0094FF)
			.setURL(url)
			.setThumbnail(result.skinUrl);
		message.channel.stopTyping();
		message.channel.send(embed);
	});
};

exports.info = {
	name: 'fortnite',
	alias: ['fortnite7'],
	permission: 'default',
	type: 'general',
	guildOnly: false,
	help: 'Shows fortnite stats from the last 7 days for the specified user. ex: `.f7 MonsterMannen`',
};
