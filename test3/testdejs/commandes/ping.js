const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data : new SlashCommandBuilder()
        .setName("ping")
        .setDescription("pong")
        .addStringOption(option =>
            option.setName("test")
                .setDescription("ce-ci est un test")
        ),

    async excute(interaction){
        const testo = interaction.option.getString()
        return interaction.reply(`Pong ${testo}`)
    },
};