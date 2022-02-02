const Discord = require('discord.js');
require ("dotenv").config()
const token = "OTM4MjYzMTU0MjIyMzA5NDc3.YfnvqA.pWQCdvQ9x9qpMPCI5DmtTlynCbc";
// allows the constant Discord to interact with the node modules
const client = new Discord.Client({
    // intents lets the discord bot know what to look out for
    intents: [
        "GUILDS", // guilds are discord servers essentially
        "GUILD_MESSAGES", 
        "GUILD_MEMBERS"
    ]
});

let bot = {
    client, 
    prefix: "n.",
    owners: [344998078467670019]
}
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)


// stores discord events 

module.exports = bot

/*
// sets up the discord bot 
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})
// logs to the console that the bot actually worked lol
*/

client.login(process.env.token)
// logs into the application 
