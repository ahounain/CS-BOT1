const Discord = require("discord.js");
require ("dotenv").config()

// allows the constant Discord to interact with the node modules
const client = new Discord.Client({
    // intents lets the discord bot know what to look out for
    intents: [
        "GUILDS", // guilds are discord servers essentially
        "GUILD_MESSAGES", 
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client, 
    prefix: "!",
    owners: [344998078467670019]
}

const guildId = "938266492682784818"

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.slashcommands = new Discord.Collection();

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadslashcommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadslashcommands(bot, false)

client.on("ready", async () => {
    const guild = client.guilds.cache.get(guildId)
    if (!guild) {
        console.error("Target guild not found")
        
        await guild.commands.set([...client.slashcommands.values()])
        console.log(`Successfully loaded in ${client.slashcommands.size}`)
        process.exit(0)
    }
})


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
