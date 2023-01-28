"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
module.exports = (client) => {
    let eventsDir = (0, path_1.join)(__dirname, '../events');
    (0, fs_1.readdirSync)(eventsDir).forEach(file => {
        if (!file.endsWith('.js'))
            return;
        const event = require(`${eventsDir}/${file}`).default;
        event.once
            ? client.once(event.name, (...args) => event.execute(...args))
            : client.on(event.name, (...args) => event.execute(...args));
        console.log(`event ok ${event.name}`);
    });
};
