require("ffmpeg-static");
const {SlashCommandBuilder,ChannelType} = require("discord.js");
const {joinVoiceChannel, createAudioPlayer,createAudioResource, StreamType, AudioPlayerStatus} = require("@discordjs/voice");

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("deconnexion")
        .setDescription("déco le bot"),

    async excute(interaction){
        interaction.reply("A+");
    }
}