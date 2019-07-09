const Discord = require('discord.js');
const { prefix, token } = require('../config.json');

const client = new Discord.Client();

client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const RoleName = args[0];
	const Permission1 = args[1];
	const Permission2 = args[2];
	const Permission3 = args[3];
	const Permission4 = args[4];
	const Permission5 = args[5];
	const Permission6 = args[6];
	const Permission7 = args[7];
	const Permission8 = args[8];
	const Permission9 = args[9];
	const Permission10 = args[10];
	const Permission11 = args[11];
	const Permission12 = args[12];
	const Permission13 = args[13];
	const Permission14 = args[14];
	const Permission15 = args[15];
	const Permission16 = args[16];
	const Permission17 = args[17];
	const Permission18 = args[18];
	const Permission19 = args[19];
	const Permission20 = args[20];
	const Permission21 = args[21];
	const Permission22 = args[22];
	const Permission23 = args[23];
	const Permission24 = args[24];
	const Permission25 = args[25];
	const Permission26 = args[26];
	const Permission27 = args[27];
	if (command === 'create-role') {
		if (!message.member.permissions.has('ADMINISTRATOR', 'MANAGE_ROLES_OR_PERMISSIONS')) {
			const rInfoEmbed = new Discord.RichEmbed()
				.addField('You need to be an Administrator to use this command!')
				.setColor(0x0094FF);
			message.channel.send(rInfoEmbed).catch(err => console.log(err));
		}
		const UserInfoEmbed = new Discord.RichEmbed()
			.setColor(0x0094FF)
			.addField(`Please use the command ${prefix}c-role followed with the Name of the role, and Permissions. Example: ${prefix}c-role NAME-HERE PERMISSION(S)-HERE`)
			.addField('List of Permissions: (KEEP THE CAPS!)')
			.addField('ADMINISTRATOR READ_MESSAGES SEND_MESSAGES')
			.addField('MANAGE_EMOJIS MANAGE_MESSAGES MANAGE_ROLES_OR_PERMISSIONS')
			.addField('MANAGE_NICKNAMES KICK_MEMBERS BAN_MEMBERS')
			.addField('MANAGE_CHANNELS MANAGE_GUILD ADD_REACTIONS')
			.addField('CREATE_INSTANT_INVITE SEND_TTS_MESSAGES EMBED_LINKS')
			.addField('ATTACH_FILES READ_MESSAGE_HISTORY MENTION_EVERYONE')
			.addField('EXTERNAL_EMOJIS DEAFEN_MEMBERS SPEAK')
			.addField('CONNECT MUTE_MEMBERS MOVE_MEMBERS');
		message.channel.send(UserInfoEmbed).catch(err => console.log(err));
		console.log(`${message.author.username} used the ${prefix}create-role command`);
	} else if (command === 'c-role') {
		const Embed = new Discord.RichEmbed()
			.setColor(0x0094FF)
			.setTitle(`Is this correct? Use command ${prefix}Y or ${prefix}N`)
			.addField(`Role Name: ${RoleName}`)
			.addField('Permissions:')
			.addField(`${Permission1}`)
			.addField(`${Permission2}`)
			.addField(`${Permission3}`)
			.addField(`${Permission4}`)
			.addField(`${Permission5}`)
			.addField(`${Permission6}`)
			.addField(`${Permission7}`)
			.addField(`${Permission8}`)
			.addField(`${Permission9}`)
			.addField(`${Permission10}`)
			.addField(`${Permission11}`)
			.addField(`${Permission12}`)
			.addField(`${Permission13}`)
			.addField(`${Permission14}`)
			.addField(`${Permission15}`)
			.addField(`${Permission16}`)
			.addField(`${Permission17}`)
			.addField(`${Permission18}`)
			.addField(`${Permission19}`)
			.addField(`${Permission20}`)
			.addField(`${Permission21}`)
			.addField(`${Permission22}`)
			.addField(`${Permission23}`)
			.addField(`${Permission24}`)
			.addField(`${Permission25}`)
			.addField(`${Permission26}`)
			.addField(`${Permission27}`);
		message.channel.send(Embed).catch(err => console.log(err));
		console.log(`${message.author.username} used the ${prefix}c-role command`);
		if (command === 'y') {
			const serInfoEmbed = new Discord.RichEmbed()
				.setColor(0x0094FF)
				.addField(`Role: ${RoleName} Created`);
			message.channel.send(serInfoEmbed).catch(err => console.log(err));
			message.guild.createRole({ name: `${RoleName}`, permissions: [`${Permission1}`, `${Permission2}`, `${Permission3}`, `${Permission4}`, `${Permission5}`, `${Permission6}`, `${Permission7}`, `${Permission7}`, `${Permission8}`, `${Permission9}`, `${Permission10}`, `${Permission11}`, `${Permission12}`, `${Permission13}`, `${Permission14}`, `${Permission15}`, `${Permission16}`, `${Permission17}`, `${Permission18}`, `${Permission19}`, `${Permission20}`, `${Permission21}`, `${Permission22}`, `${Permission23}`, `${Permission24}`, `${Permission25}`, `${Permission26}`, `${Permission27}`] });
			console.log(`${message.author.username} used the ${prefix}y command`);
		} else if (command === 'n') {
			const serInfoEmbed = new Discord.RichEmbed()
				.setColor(0x0094FF)
				.addField('Canceled');
			message.channel.send(serInfoEmbed).catch(err => console.log(err));
			console.log(`${message.author.username} used the ${prefix}n command`);
		}
	}});

client.login(token);
