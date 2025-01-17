const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
            name: "📃┆Changelogs",
                value: '6/6/2023 - Updated the bot to the latest version of discord.js (v14) \n**Bugs**- \n"*AI Integration is still being worked upon *", \n "Better bot setups", \n "Better GUI", \n "Better error handling for commands" \n **Features**- \n "Bot completely in slash commands", \n "New Activities", \n "New server stats", \n "Auto setups", \n "Scheduled Events logs", \n"Embed layout improvements", \n "An advanced embed builder", \n "**Beta Testing is Currently ongoing**", \n "All users who use the bot in beta version can use extensive commands"',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 