const Discord = require('discord.js');
const bot = new Discord.Client();
var mcount = 0;
var m = 0;
// eslint-disable-next-line no-unused-vars
var mmm = 0;

bot.on('message', message => {
	if (!message.content.startsWith(process.env.prefix) || message.author.bot) {
		mcount.m++;
		m.mmm++;
	} else if (message.content === `${process.env.prefix}messages`) {
		message.channel.send(`Total Messages: ${mcount}`);
	}
});
bot.login(process.env.token);
bot.on('ready', () => {
	console.log(`Total Messages: ${mcount}`);
});