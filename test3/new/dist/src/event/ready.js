"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const event = {
    name: discord_js_1.Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`connecter ${client.user.tag}`);
    }
};
exports.default = event;
