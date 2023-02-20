require("ffmpeg-static");
const {SlashCommandBuilder,ChannelType} = require("discord.js");
const puppeteer = require('puppeteer');
const {identifiant,mdp} = require('../config.json');
let listmess = [];
let listauto = [];

module.exports = {
    data : test = new SlashCommandBuilder()
        .setName("comb")
        .setDescription("test co"),

    async excute(interaction){
        const browser = await puppeteer.launch({executablePath : 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe' ,headless : true ,slowMo: 10 ,product : 'chrome'});
        const page = await browser.newPage();
        const keyboard = page.keyboard
        await page.goto("https://www.monbureaunumerique.fr/");
        await page.setViewport({width: 1000, height: 1000});
        //-----------------------------------------------------------------------------------------------
        /* choix du lieux */
        await page.click(".fo-connect__link");
        await page.waitForSelector('.form__label',{visible : 'visible'});
        await page.click('.form__label');
        await page.click('#button-submit',{delay : 50});
        while (page.url() == "https://cas.monbureaunumerique.fr/login?service=https%3A%2F%2Fwww.monbureaunumerique.fr%2Fsg.do%3FPROC%3DIDENTIFICATION_FRONT&submit=Valider"){
            await page.click('.form__label');
            await page.click('#button-submit',{delay : 50})
        };
        //------------------------------------------------------------------------------------------------
        /* connexion */
        await page.waitForSelector('#bouton_eleve',{visible : 'visible'});
        await page.click('#bouton_eleve',{delay : 50});
        await page.click('#username');
        await keyboard.sendCharacter(identifiant);
        await page.click('#password');
        await keyboard.sendCharacter(mdp);
        //console.log("arfzafzafe");
        await page.click('#bouton_valider',{delay : 50});
        if (page.url() == "https://cas.monbureaunumerique.fr/saml/SAMLAssertionConsumer"){
            await page.click("body > main > div > div > div > div > div > div > div > div > div.msg__content > p:nth-child(4) > strong > a");
        }
        else{
            await page.waitForSelector('body > div.header > div.header__set > div.header__set2 > nav > div > button');
            await page.click('body > div.header > div.header__set > div.header__set2 > nav > div > button');
            await page.click("body > div.header > div.header__set > div.header__set2 > nav > div > div > ul > li:nth-child(1) > a");;

        }

        //await page.screenshot({path : "test3/testdejs/video/test.png"});

        await page.click("body > div.header > nav > ul.services-shortcut > li:nth-child(2) > a");
        const searchValue = await page.$x('//*[@id="js_boite_reception"]');
        const test = await  page.$$eval('li',element => element.map(x => x.className));
        let ok = [];
        for (let i = 0;i<test.length;i++){
          if(test[i]== "row row--full list-enhanced1__item"){
            ok.push(test[i]);
          };
        };
        for (let x=1;x<ok.length;x++){
          
          listauto.push(await page.$eval(`#js_boite_reception > li:nth-child(${x}) > div.col--xs-3.col--full > span > span:nth-child(7)`,(e => e.textContent)));
        };
        //#js_boite_reception > li:nth-child(1) > div.col.col--xs-5 > span.text-ellipsis > a
        //#js_boite_reception > li:nth-child(2) > div.col--xs-3.col--full > span > span:nth-child(7)
        console.log(listauto);
    
    
        console.log("fini");

        await browser.close();
        for(x of listauto){
            interaction.channel.send(`auteur : ${x}`);
        };

        //interaction.channel.send({files : [{ attachment: "test3/testdejs/video/test.png" }]});
        
    }
}