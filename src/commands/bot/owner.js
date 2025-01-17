const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `RedLord7`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `RedLord7#5508`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `aatankwadifoetus`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `geeknomadichunters.wordpress.com`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 