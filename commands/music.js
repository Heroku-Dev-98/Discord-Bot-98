const Discord = require('discord.js');
const { prefix, token, DefaultColor } = require('../config.json');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

const queue = new Map();

client.once('ready', () => {
	console.log('Music Running!');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnected!');
});

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);
	if (message.content.startsWith(`${prefix}play`)) {
		execute(message, serverQueue);
		console.log(`${message.author.username} used the ${prefix}play command`);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		skip(message, serverQueue);
		console.log(`${message.author.username} used the ${prefix}skip command`);
		return;
	} else if (message.content.startsWith(`${prefix}stop`)) {
		stop(message, serverQueue);
		console.log(`${message.author.username} used the ${prefix}stop command`);
		return;
	} else {
		const validcommandEmbed = new Discord.RichEmbed()
			.setColor(DefaultColor)
			.setTitle('You need to enter a valid command!')
			.setTimestamp();
		message.channel.send(validcommandEmbed);
	}
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) {
		const voicechannelneedEmbed = new Discord.RichEmbed()
			.setColor(DefaultColor)
			.setTitle('You need to be in a voice channel to play music!')
			.setTimestamp();
		message.channel.send(voicechannelneedEmbed);
	}
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		const needpermissionsEmbed = new Discord.RichEmbed()
			.setColor(DefaultColor)
			.setTitle('I need the permissions to join and speak in your voice channel!')
			.setTimestamp();
		message.channel.send(needpermissionsEmbed);
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			const errorEmbed = new Discord.RichEmbed()
				.setColor(DefaultColor)
				.setTitle('There was an error trying to execute that command!')
				.setTimestamp();
			message.channel.send(errorEmbed);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		const queqeaddEmbed = new Discord.RichEmbed()
			.setColor(DefaultColor)
			.setTitle(`${song.title} has been added to the queue!`)
			.setTimestamp();
		message.channel.send(queqeaddEmbed);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) {
		const nosongEmbed = new Discord.RichEmbed()
			.setColor(DefaultColor)
			.setTitle('There is no song that I could skip!')
			.setTimestamp();
		message.channel.send(nosongEmbed);
	}
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) {
		const voicechannelneededEmbed = new Discord.RichEmbed()
			.setColor(DefaultColor)
			.setTitle('You have to be in a voice channel to stop the music!')
			.setTimestamp();
		message.channel.send(voicechannelneededEmbed);
	}
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

client.login(token);