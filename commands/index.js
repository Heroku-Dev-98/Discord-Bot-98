const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
const bot = new Discord.Client();
var mcount = 0;
var m = 0;
// eslint-disable-next-line no-unused-vars
var mmm = 0;

bot.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) {
		mcount.m++;
		m.mmm++;
	}
});
bot.on('ready', () => {
	console.log(`Total Messages: ${mcount}-${m}`);
});
bot.login(token);