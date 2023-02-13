const ffmpeg = require("ffmpeg");
const { Client, Collection, Events, GatewayIntentBits,VoiceChannel,MessageEmbed,Discord} = require('discord.js');
const { token,guildId,clientId } = require('./config.json');
const {joinVoiceChannel, createAudioPlayer,createAudioResource, StreamType} = require("@discordjs/voice");

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.AutoModerationExecution,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks
                                    ] });

client.once(Events.ClientReady, () => {
	console.log(`ready !`);
});

const Player = createAudioPlayer();

client.on("messageCreate", async message => {
    if (message.content.startsWith("djs!play")) {
      const file = message.attachments.first();
      const channel = message.member.voice.channel;
  
      if (!channel || !file) return message.channel.send("....................");
      const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
      });
  
      try {
        connection;
        connection.subscribe(Player);
  
        const resource = createAudioResource(file.url, {
          inputType: StreamType.Arbitrary
        });
  
        Player.play(resource);
        message.channel.send({
          content: "> playing: `" + file.name + "`, size: `" + file.size + "B`"
        });
       } catch (error) {
        message.channel.send({ content: error.message || "Error" });
      }
    }
  });

client.login(token);