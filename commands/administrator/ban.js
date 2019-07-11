const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', async message => {
	const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if(command === 'kick') {
		if(!message.member.roles.some(r=>['Administrator', 'Moderator'].includes(r.name)))
		{return message.reply('Sorry, you don\'t have permissions to use this!');}
		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
		if(!member)
		{return message.reply('Please mention a valid member of this server');}
		if(!member.kickable)
		{return message.reply('I cannot kick this user! Do they have a higher role? Do I have kick permissions?');}

		// slice(1) removes the first part, which here should be the user mention or ID
		// join(' ') takes all the various parts to make it a single string.
		let reason = args.slice(1).join(' ');
		if(!reason) reason = 'No reason provided';

		// Now, time for a swift kick in the nuts!
		await member.kick(reason)
			.catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
		message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

	}

	if(command === 'ban') {
		if(!message.member.roles.some(r=>['Administrator'].includes(r.name)))
		{return message.reply('Sorry, you don\'t have permissions to use this!');}

		let member = message.mentions.members.first();
		if(!member)
		{return message.reply('Please mention a valid member of this server');}
		if(!member.bannable)
		{return message.reply('I cannot ban this user! Do they have a higher role? Do I have ban permissions?');}

		let reason = args.slice(1).join(' ');
		if(!reason) reason = 'No reason provided';

		await member.ban(reason)
			.catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
		message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
	}
});