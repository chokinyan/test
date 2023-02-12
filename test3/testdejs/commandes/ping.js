const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data : new SlashCommandBuilder()
        .setName("ping")
        .setDescription("pong"),

    async excute(interaction){
        return interaction.reply(`Pong`)
    },
};