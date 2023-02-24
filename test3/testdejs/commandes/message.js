const {SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder} = require("discord.js");
const puppeteer = require('puppeteer');
const {identifiant,mdp} = require('../donné & autre/config.json');
const {testz} = require('../donné & autre/objet_mess_return');
//const waw = [{label : "ezrezrzerez" , value : "zrbnzFIOBZFBQZIFB"},{label : "4zeezez" , value : "sqsqsqsq"}];





module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("message")
        .setDescription("donne le message"),

    async excute(interaction){
        interaction.reply({content : "Veuillez patienter le temps de la connexion"});
        const choix = new ActionRowBuilder()
            .setComponents(
                new StringSelectMenuBuilder()
                .setCustomId('message')
                .setPlaceholder("Choisi l'objet du message a afficher")
                .setOptions((await testz())[0])
            );
        await interaction.editReply({content : "testetsest",components : [choix]});
        //await interaction.editReply({content : `${await testz()}`});
    },

    async excomp(interaction){
        await interaction.update({content : "recuperation du message"});
        const mess = (await testz())[1];
        await interaction.update({content : mess[interaction.values]});
        //console.log(4668796);
    }
};

