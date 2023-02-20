require("ffmpeg-static");
const {SlashCommandBuilder} = require("discord.js");
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
            await interaction.user.send({files :[{attachment :'test3/testdejs/gif/téléchargé.gif'}],content : `Bon meme si tu te demande pk je ressois ca et que tu t'en fout ba la zone n2 est fermer le délire a durée et na plus d'utilité`});
        }
    },
};