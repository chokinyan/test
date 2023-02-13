const {SlashCommandBuilder,ChannelType} = require("discord.js");

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

    async execute(interaction){
        return interaction.reply("GG")
    }
};