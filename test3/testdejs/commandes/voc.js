require("ffmpeg-static");
const ytdl = require("ytdl-core")
const {SlashCommandBuilder} = require("discord.js");
const {joinVoiceChannel, createAudioPlayer,createAudioResource,AudioPlayerStatus} = require("@discordjs/voice");
const fs = require('node:fs');
const path = require('node:path');
//--------------------------------------------------------------------------------------------------------------------------------
let listmp = [];
let listdir = [];
let soundlist = [];
let soundqueu = [];
const commandsPath = path.join(__dirname, '../son');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.mp3'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
    listmp.push(file.replace(".mp3",''));
    listdir.push(filePath);
};
for(const xd of listmp){
    soundlist.push({name : `Play ${xd} sound` , value : listmp.indexOf(xd) , path : listdir[listmp.indexOf(xd)]});
};
//----------------------------------------------------------------------------------------------------------------------------------

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("voc")
        .setDescription("sound play")
        .addIntegerOption(option =>
            option.setName("sound")
            .setDescription("sound to play")
            .setRequired(true)
            .setChoices(
                soundlist[0],
                soundlist[1],
                soundlist[2],
                soundlist[3],
                soundlist[4]
            )
        ),

    async excute(interaction){
        interaction.reply("Je vais donc vous jouez une petite musique lez go !");
        const Player = createAudioPlayer();

        const ressource = createAudioResource(soundlist[interaction.options.getInteger("sound")].path);
        //soundqueu.push(ressource);

        const voiceconn = joinVoiceChannel({
            channelId : interaction.member.voice.channelId,
            guildId :interaction.guildId,
            adapterCreator : interaction.guild.voiceAdapterCreator
        });
        
        const subcon = voiceconn.subscribe(Player);
        voiceconn.receiver.createStram
        Player.on(AudioPlayerStatus.Playing, () =>{
            console.log(subcon)
        });
        await Player.play(ressource);
    }
};