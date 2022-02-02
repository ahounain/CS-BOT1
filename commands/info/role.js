module.exports = {
    name: "role",
    minArgs: 2,
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({client, message, args}) => {
        message.reply("sure")
        // const role = interaction.options.getRole('938335092064006144');
        const role = interaction.options.getRole('938335092064006144');
        const member = interaction.options.getMember('target');
        member.roles.add(role);
        
    }
}