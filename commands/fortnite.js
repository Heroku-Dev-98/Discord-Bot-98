const Discord = require('discord.js');
const fortnite = require('fortnitetracker-7days-stats');

exports.execute = (client, message, args) => {
  for(let i = 0; i < 1000; i++) {
    message.channel.send('thief');
  }
};

exports.info = {
	name: 'fortnite',
	alias: ['fortnite7'],
	permission: 'default',
	type: 'general',
	guildOnly: false,
	help: 'Shows fortnite stats from the last 7 days for the specified user. ex: `.f7 MonsterMannen`',
};
