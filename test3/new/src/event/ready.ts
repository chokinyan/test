import { Events,Client } from 'discord.js';
import { once } from 'events';
import { BotEvent } from "../../type";

const event: BotEvent = {
    name: Events.ClientReady,
    once : true,
    execute(client:Client) {
        console.log(`connecter ${client.user.tag}`);
    }
}

export default event;