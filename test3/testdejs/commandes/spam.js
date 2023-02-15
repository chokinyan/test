const {SlashCommandBuilder} = require("discord.js");
// en sois ici c'est plus une commande de test que une commande de spam

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("spam")
        .setDescription("coucou"),

    async excute(interaction){
        interaction.reply(`salut ${interaction.user}`,ephemeral = true);
    },
};