const Discord = require("discord.js");
require("dotenv").config()

// allows the constant Discord to interact with the node modules
const client = new Discord.Client({
    // intents lets the discord bot know what to look out for
    intents: [
        "GUILDS", // guilds are discord servers essentially
        "GUILD_MESSAGES", 
        "GUILD_MEMBERS"
    ]
})

/*let bot = {
    client, 
    prefix: "!",
    owners: [344998078467670019]
}
*/
client.slashcommands = new Discord.Collection();
let bot = {
    client,
}




//client.commands = new Discord.Collection();
//client.events = new Discord.Collection();


//client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
//client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadslashcommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)

//client.loadEvents(bot, false)
//client.loadCommands(bot, false)
client.loadslashcommands(bot, false)

const guildId = "938266492682784818"

client.on("ready", async () => {
    console.log(`Loading ${client.slashcommands.size} slash commands`)

    const guild = client.guilds.cache.get(guildId)
    if (!guild) {
        console.error("Target guild not found")
    }    
    await guild.commands.set([...client.slashcommands.values()])
    console.log(`Successfully loaded in ${client.slashcommands.size}`)
    process.exit(0)
    
})



client.login(process.env.token)
// logs into the application 
