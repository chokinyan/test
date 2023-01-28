const config = require("./config");
const Discord = require("discord.js");
//-----------------------------------------------------------------
const loadcom = require("./loader/load");
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents:intents});
//-----------------------------------------------------------------

bot.commands = new Discord.Collection();

bot.login(config.token);
bot.on("ready",async()=> {
    console.log("il est pret")
});

loadcom(bot);

bot.on("messageCreate",async => {

    if(message.content === "!ping") return bot.commands.get("ping").run(bot,message)
});

