const Discord = require('discord.js');
require ("dotenv").config()
const token = "OTM4MjYzMTU0MjIyMzA5NDc3.YfnvqA.pWQCdvQ9x9qpMPCI5DmtTlynCbc";
// allows the constant Discord to interact with the node modules
const client = new Discord.Client({
    // intents lets the discord bot know what to look out for
    intents: [
        "GUILDS", // guilds are discord servers essentially
        "GUILD_MESSAGES"
    ]
});
// sets up the discord bot 
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})
// logs to the console that the bot actually worked lol

client.login(process.env.token)
// logs into the application 
