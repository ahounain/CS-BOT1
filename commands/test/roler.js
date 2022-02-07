const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js")

module.exports = {
    name: "roler",
    category: "test",
    devOnly: true,
    owners: ["344998078467670019"],
    run: async({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select the role you want!").setDescription("Pick one from the buttons below").setColor("GREEN")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-938335092064006144").setStyle("PRIMARY").setLabel("test1")
                    
                ]),
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-939712103017771068").setStyle("DANGER").setLabel("test2")
                ]),
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-939712722189299722").setStyle("SUCCESS").setLabel("test3")
                ]),
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-939712755416588320").setStyle("SECONDARY").setLabel("test4")
                ]),
            ]
        })
    }
}