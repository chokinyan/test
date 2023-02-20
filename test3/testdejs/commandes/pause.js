require("ffmpeg-static");
const {SlashCommandBuilder} = require("discord.js");
const {AudioPlayer} = require("@discordjs/voice");
const voc = require("./voc");

module.exports = {
    data : test = new SlashCommandBuilder()
    .setName("pause")
    .setDescription("attend stp"),

    async excute(interaction){
        voc.excute(interaction = interaction,stop = false);
    },
};