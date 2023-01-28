import { Client,GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { readdirSync } from 'fs';
import { join} from 'path';



dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent
    ]


});

const handlersDirs = join(__dirname, "./handlers");

readdirSync(handlersDirs).forEach(file =>{
    require(`${handlersDirs}/${file}`)(client);
})



client.login(process.env.TOKEN)