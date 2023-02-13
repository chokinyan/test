const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("spam")
        .setDescription("coucou"),

    async excute(interaction){
        return interaction.reply(`salut ${interaction.channel.deletable}`)
    },
};