const { Client, GatewayIntentBits, Collection, Partials } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildModeration,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.GuildMember, Partials.User],
});

client.commands = new Collection();
client.queue = new Map();
client.giveaways = new Map();

const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
  const files = fs.readdirSync(`./commands/${folder}`).filter(f => f.endsWith('.js'));
  for (const file of files) {
    const cmd = require(`./commands/${folder}/${file}`);
    if (cmd.name) client.commands.set(cmd.name, cmd);
  }
}

const eventFiles = fs.readdirSync('./events').filter(f => f.endsWith('.js'));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) client.once(event.name, (...a) => event.execute(...a, client));
  else            client.on(event.name,   (...a) => event.execute(...a, client));
}

client.login(process.env.TOKEN);;
