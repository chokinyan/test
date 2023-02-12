const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data : new SlashCommandBuilder()
        .setName("ping")
        .setDescription("pong")
        .addStringOption(option =>
            option.setName("test")
            .setDescription("ce-ci est un test")
            .setRequired(false)
            ),

    async excute(interaction){
        return interaction.reply(`Pong ${7}`)
    },
};