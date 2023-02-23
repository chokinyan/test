const {SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder} = require("discord.js");
const puppeteer = require('puppeteer');
const {identifiant,mdp} = require('../donné & autre/config.json');
const {testz} = require('../donné & autre/objet_mess_return');
const waw = [{label : "ezrezrzerez" , value : "zrbnzFIOBZFBQZIFB"},{label : "4zeezez" , value : "sqsqsqsq"}];





module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("message")
        .setDescription("donne le message"),

    async excute(interaction){
        interaction.reply({content : "Veuillez patienter le temps de la connexion"});
        const mess = (await testz()).map(x => x);
        const choix = new ActionRowBuilder()
            .setComponents(
                new StringSelectMenuBuilder()
                .setCustomId('message')
                .setPlaceholder("Choisi l'objet du message a afficher")
                .setOptions(mess)
            );
        await interaction.editReply({content : "testetsest",components : [choix]});
        //await interaction.editReply({content : `${await testz()}`});
    },

    async excomp(interaction){
        //await interaction.update({content : "1 v 1 ?"});
        console.log(4668796);
    }
};

