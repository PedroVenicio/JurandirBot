const { Client, IntentsBitField } = require('discord.js');
const { token } = require('./../config.json');

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	]
});

client.on('clientReady', (c) => {
	console.log(`🐕 ${c.user.tag} está online`);
});

client.login(token);

const prefix = 'J!'

client.on('messageCreate', (msg) => {
	console.log('1 - entrou na interaction ')
	if (msg.content === `${prefix}ping`){
		msg.reply('Pong 🏓!')
	}
})

client.on('interactionCreate', (interaction) => {
	console.log('ENTRA NA INTERACTION UMA VEZ')
	if (!interaction.isChatInputCommand()) return;

	console.log('ENTRA AQUI PELAMOR')
})



