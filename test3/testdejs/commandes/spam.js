const {SlashCommandBuilder} = require("discord.js");
// en sois ici c'est plus une commande de test que une commande de spam

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("spam")
        .setDescription("coucou")
        .addMentionableOption(option =>
            option.setName("spammed")
            .setDescription("qui spam")
            .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('combien')
            .setDescription("on le spam cb de fois")
            .setRequired(true)
            .setMinValue(1)
            ),

    async excute(interaction){
        interaction.reply("salut on va commencer un potentiel délir", ephemeral = true);
        for(let i = 0; i < interaction.options.getInteger('combien'); i++){
            interaction.channel.send(`salut ${interaction.options.getMentionable('spammed')}`);
        };
    },
};