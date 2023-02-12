const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("spam")
        .setDescription("coucou")
        .addNumberOption(option =>
            option.setName("cb ?")
            .setDescription("bonjour")
        ),

    async excute(interaction){
        return interaction.reply(`salut ${interaction.options.name}`)
    },
};