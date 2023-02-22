const {SlashCommandBuilder} = require("discord.js");
const puppeteer = require('puppeteer');
const {identifiant,mdp} = require('../donné & autre/config.json');
const {finish} = require('../donné & autre/objet_mess_return');
const testa = finish.map(x => x);
console.log(testa);

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("message")
        .setDescription("donne le message")
        .addStringOption(option =>
            option.setName('message')
            .setDescription("objet du message a afficher ( 1 page only )")
            .setChoices(...testa)
            .setRequired(true)
        ),

    async excute(interaction){
        
        interaction.reply("test");
    },
};

