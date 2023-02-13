const { createReadStream } = require('node:fs');
const { join } = require('node:path');
const {SlashCommandBuilder,ChannelType} = require("discord.js");
const {joinVoiceChannel, createAudioPlayer,createAudioResource, StreamType} = require("@discordjs/voice");

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("voc")
        .setDescription("test du voc join")
        .addChannelOption(option => 
            option.setName("channel")
            .setDescription("Le channel et puis c'est un truc de test la pk je dois ecrire une description")
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildVoice)
            )
        .addIntegerOption(option =>
            option.setName("waw")
            .setDescription("test")
            .setRequired(true)
            .addChoices(
                { name : '5' , value : 5},
                {name : '17' , value : 17},
                {name : '23' , value : 23}
            )
        ),

    async excute(interaction){
        const Player = createAudioPlayer();
        const voicechan = interaction.options.getChannel('channel');

        const resource = createAudioResource(join(__dirname, 'file.mp3'))

        Player.play(ressource)

        const voiceconn = joinVoiceChannel({
            channelId : voicechan.id,
            guildId :interaction.guildId,
            adapterCreator : interaction.guild.voiceAdapterCreator,
            selfMute : false
        });
        const subcon = voiceconn.subscribe(Player);

        


    }
};