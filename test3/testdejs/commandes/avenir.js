const {SlashCommandBuilder,EmbedBuilder} = require("discord.js");
// en sois ici c'est plus une commande de test que une commande de spam

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("avenir")
        .setDescription("tu vas faire quoi"),

    async excute(interaction){
        interaction.reply({embeds : [new EmbedBuilder().setDescription("ton avenir").setTitle("voici où est ton avenir").setAuthor({
            name : interaction.user.tag,
            iconURL : interaction.user.defaultAvatarURL,
        })
        .setColor('White')
    ],
})
    },
};