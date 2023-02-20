const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data : test = new SlashCommandBuilder()
    .setName("dissolution")
    .setDescription("dissolution")
    .addMentionableOption(option =>
        option.setName('casse_toi')
        .setDescription('A+')
        ),

    async excute(interaction){
        if(interaction.user.id != 489650864441524232){
            interaction.reply("not anable to do this command");
        }
        else{
            await interaction.options.getMentionable('casse_toi').send('salut o');
            interaction.options.getMentionable('casse_toi').kick();
            interaction.reply(`${interaction.options.getMentionable('casse_toi')} viens d'etre tej avec tout mon irespect`);
        }
    },
};