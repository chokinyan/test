const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token,guildId,clientId } = require('./config.json');
const use_commands = require('./use_commands');
//------------------------------------------------------------------------------------------
use_commands.reset()
//------------------------------------------------------------------------------------------
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
//------------------------------------------------------------------------------------------
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commandes');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}
//------------------------------------------------------------------------------------------
client.once(Events.ClientReady, () => {
	console.log('Ready!');
});
//------------------------------------------------------------------------------------------
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);
    const test = require('./commandes/ping')

	if (!command) return;

	try {
		await command["excute"](interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

//------------------------------------------------------------------------------------------
client.login(token);