require("ffmpeg-static");
const {SlashCommandBuilder} = require("discord.js");
const {AudioPlayer} = require("@discordjs/voice");
const voc = require("./voc");

module.exports = {
    data : test = new SlashCommandBuilder()
    .setName("test")
    .setDescription("creator bod exclu for test"),

    async excute(interaction){
        if(interaction.user.id != 489650864441524232){
            interaction.reply("not anable to do this command");
        }
        else{
            interaction.reply(`${interaction.client.ws.ping}`);
        }
    },
};