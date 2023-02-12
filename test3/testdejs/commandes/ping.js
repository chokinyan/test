const {SlashCommandBuilder, Options} = require("discord.js");

module.exports = {
    data : new SlashCommandBuilder()
        .setName("ping")
        .setDescription("pong")
        .addStringOption(option =>
            option.setName("test")
                .setDescription("ce-ci est un test")
                .setRequired(true)
        ),

    async excute(interaction){
        const testo = undefined
        return interaction.reply(`Pong ${testo}`)
    },
};