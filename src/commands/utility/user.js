const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('user').setDescription('Informações sobre o usuário'),
	async execute(interaction) {
		await interaction.reply(
			`Comando rodado por ${interaction.user.username}, que entrou no server em ${interaction.member.joinedAt}.`,
		);
	},
};