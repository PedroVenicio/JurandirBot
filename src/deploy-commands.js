const { REST, Routes } = require('discord.js')
const { token, clientId, guildId } = require('../config.json')

const commands = [
	{
		name: 'ping',
		description: 'Teste de slash command, deve retornar com pong!',
	}
]

const rest = new REST({ version: 10 }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands }
		)

		console.log('Slash commands registrados!')
	} catch (error) {
		console.log(`Erro: ${error}`)
	}
})();