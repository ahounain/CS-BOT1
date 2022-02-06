const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js")

module.exports = {
    name: "roler",
    category: "test",
    devOnly: true,
    run: async({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessasgeEmbed().setTitle("Select the role you want!").setDescription("Pick one from the buttons below").setColor("GREEN")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-938335092064006144").setStyle("PRIMARY").setLabel("test")
                ])
            ]
        })
    }
}