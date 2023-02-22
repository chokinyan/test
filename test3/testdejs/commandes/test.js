require("ffmpeg-static");
const {SlashCommandBuilder, StringSelectMenuBuilder, ActionRow, ActionRowBuilder} = require("discord.js");
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
            const waw = new ActionRowBuilder()
                .setComponents(
                    new StringSelectMenuBuilder()
                    .setCustomId('select')
                    .setMinValues(1)
                    .setMaxValues(1)
                    .setPlaceholder("Rien n'a été selectionné")
                    .addOptions(
                        {
                            label : 'test',
                            description : 'test1',
                            value : 'test1'
                        },
                        {
                            label : 'test2',
                            description : 'test2',
                            value : 'test2'
                        }
                    ),
                );
            
            await interaction.reply({content :'test',components : [waw], ephemeral: true})
            //const selected = interaction.value;
            //console.log(interaction.customId);


        }
    },
};