const {SlashCommandBuilder,MessageAttachment} = require("discord.js");
// en sois ici c'est plus une commande de test que une commande de spam

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("avenir")
        .setDescription("tu vas faire quoi"),

    async excute(interaction){
        interaction.reply({files : [{ attachment: "test3/testdejs/video/avenir.mp4" }] });
    },
};