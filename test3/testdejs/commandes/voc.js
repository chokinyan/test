const {SlashCommandBuilder,ChannelType} = require("discord.js");
const {joinVoiceChannel, getVoiceConnection} = require("@discordjs/voice");

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("voc")
        .setDescription("test du voc join")
        .addChannelOption(option => 
            option.setName("channel")
            .setDescription("Le channel et puis c'est un truc de test la pk je dois ecrire une description")
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildVoice)
            ),

    async excute(interaction){
        const voicechan = interaction.options.getChannel('channel') 
        const voiceconn = joinVoiceChannel({
            channelId : voicechan.id,
            guildId :interaction.guildId,
            adapterCreator : interaction.guild.voiceAdapterCreator
        });
        
    }
};