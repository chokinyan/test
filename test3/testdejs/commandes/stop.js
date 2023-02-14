require("ffmpeg-static");
const {SlashCommandBuilder} = require("discord.js");
const {AudioPlayer} = require("@discordjs/voice");

module.exports = {
    data : test = new SlashCommandBuilder()
    .setName("stop")
    .setDescription("ferme ta gueule le bot"),

    async excute(interaction){
        interaction.reply("ok pas besoin d'etre aussi violent je ferme ma guelle");
        waw = new AudioPlayer();
        waw.stop();
    },
};