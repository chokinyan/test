//documentation : https://discord.js.org/#/
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits} = require('discord.js');
const { token} = require('../testdejs/donné & autre/config.json');
const test = require('./reponse')
const use_commands = require('./use_commands');
//------------------------------------------------------------------------------------------
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildBans,GatewayIntentBits.DirectMessages,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.AutoModerationConfiguration,GatewayIntentBits.AutoModerationExecution,GatewayIntentBits.DirectMessageReactions,GatewayIntentBits.DirectMessageTyping,GatewayIntentBits.GuildEmojisAndStickers,GatewayIntentBits.GuildIntegrations,GatewayIntentBits.GuildInvites,GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildMessageReactions,GatewayIntentBits.GuildMessageTyping,GatewayIntentBits.GuildPresences,GatewayIntentBits.GuildScheduledEvents,GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.GuildWebhooks]});
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
	use_commands.reset(client.guilds.cache.map(guild => guild.id));
	console.log(`ready ${client.user}`);
});
//1074436303908778096
//------------------------------------------------------------------------------------------
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);
	console.log(interaction)

	if (!command) return;

	try {
		await command["excute"](interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!'});
	}
});

client.on(Events.GuildMemberAdd, async member => {
	if(member.id != 443151996770320405){
	const channel = member.guild.channels.cache.find(channel => channel.name === "bienvenue");
	console.log(`${member}`)
	}
	else{
		const channel = member.guild.channels.cache.find(channel => channel.name === "général");
		channel.send(`QUOI HaltJetzt SALE NOIR D'IMPOSTEUR RENTRE DANS TON SALE PAYS`);
	}
});

client.on(Events.MessageCreate , async message => {
	if (message.author.bot) return;
	else{
			test.reponse(message,client)
		}
});

//------------------------------------------------------------------------------------------
client.login(token).then((token) => {
	client.user.setPresence({activities:[{name : 'utile pour etre coder mtn '}],status : 'dnd'});
});