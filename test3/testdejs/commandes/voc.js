require("ffmpeg-static");
const ytdl = require("ytdl-core")
const {SlashCommandBuilder,ChannelType} = require("discord.js");
const {joinVoiceChannel, createAudioPlayer,createAudioResource, StreamType, AudioPlayerStatus} = require("@discordjs/voice");
const fs = require('node:fs');
const path = require('node:path');
//--------------------------------------------------------------------------------------------------------------------------------
let listmp = [];
let listdir = [];
let soundlist = []
const commandsPath = path.join(__dirname, '../son');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.mp3'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
    listmp.push(file.replace(".mp3",''));
    listdir.push(filePath);
};
for(const xd of listmp){
    soundlist.push({name : `Play ${xd} sound` , value : listmp.indexOf(xd)+1 , path : listdir[listmp.indexOf(xd)]});
};
console.log(soundlist)
//----------------------------------------------------------------------------------------------------------------------------------

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
                soundlist[0],
            )
        ),

    async excute(interaction){
        interaction.reply("Je vais donc vous jouez une petite musique lez go !")
        const Player = createAudioPlayer();
        const voicechan = interaction.options.getChannel('channel');

        const ressource = createAudioResource("test3/testdejs/son/23.mp3");

        const voiceconn = joinVoiceChannel({
            channelId : voicechan.id,
            guildId :interaction.guildId,
            adapterCreator : interaction.guild.voiceAdapterCreator
        });
        
        const subcon = voiceconn.subscribe(Player);
        Player.play(ressource);
        Player.on(AudioPlayerStatus.Idle, () =>{
            const ressource = createAudioResource("test3/testdejs/son/23.mp3");
            Player.play(ressource);
        });

    }
};