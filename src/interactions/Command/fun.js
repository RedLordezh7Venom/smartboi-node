const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fun')
        .setDescription('Run fun commands')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Get information about the fun category commands')
        )

        // Meme Commands

        .addSubcommandGroup((group) =>
            group
                .setName('meme')
                .setDescription('Smartboi is Dank!')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('confused')
                        .setDescription('React with a Confused Nick Young meme')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('cleverrate')
                        .setDescription('See how clever you are')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('dinochrome')
                        .setDescription('Dinosaur in Chrome')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('epicgamerrate')
                        .setDescription('See how much of an epic gamer you are')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('howgay')
                        .setDescription('See how gay you are')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('roast')
                        .setDescription('Roast a nigga')
                        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('simprate')
                        .setDescription('SIMP!')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('stankrate')
                        .setDescription('See how stanky you are')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('rickroll')
                        .setDescription('Get rickrolled xD')
                )
        )

        // User Commands

        .addSubcommandGroup((group) =>
            group
                .setName('user')
                .setDescription('See fun user commands')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('hack')
                        .setDescription('Hack your friends or enemies! 100% real!!!')
                        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('hug')
                        .setDescription('Hug to a nigga')
                        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('kill')
                        .setDescription('Kill a Nigga')
                        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('lovemeter')
                        .setDescription('See how much you fit in with someone')
                        .addUserOption(option => option.setName('user1').setDescription('Select a user').setRequired(true))
                        .addUserOption(option => option.setName('user2').setDescription('Select a user').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('sudo')
                        .setDescription('Say something like someone else')
                        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
                        .addStringOption(option => option.setName('text').setDescription('Enter a text').setRequired(true))
                )
        )

        // Text Commands

        .addSubcommandGroup((group) =>
            group
                .setName('text')
                .setDescription('See fun text commands')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('ascii')
                        .setDescription('Make ascii text')
                        .addStringOption(option => option.setName('text').setDescription('Enter a text').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('gif')
                        .setDescription('Search a gif')
                        .addStringOption(option => option.setName('text').setDescription('Enter a text').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('reverse')
                        .setDescription('Reverse your text')
                        .addStringOption(option => option.setName('text').setDescription('Enter a text').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('say')
                        .setDescription('Wise words from Smartboi')
                        .addStringOption(option => option.setName('text').setDescription('Enter a text').setRequired(true))
                )
        )

        // Extra Commands

        .addSubcommandGroup((group) =>
            group
                .setName('extra')
                .setDescription('See extra fun commands')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('birdfact')
                        .setDescription('Get a random bird fact \n BIRD UP!!!!')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('catfact')
                        .setDescription('Get a random cat fact \n NEKO NEKO NYA NYA')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('dogfact')
                        .setDescription("Get a random dog fact \n OK MASTA LET'S KILL DA HOE!! BEEETCH ")
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('fact')
                        .setDescription('Get a random fact')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('koalafact')
                        .setDescription('Get a random koalafact ')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('pandafact')
                        .setDescription('Get a random pandafact \n PANDAPANDAPANDA')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('token')
                        .setDescription('You want my token? Sure!')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('worldclock')
                        .setDescription('Shows the world clock(s)')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('xmas')
                        .setDescription('See the number of days until Christmas')
                )
        ),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        client.loadSubcommands(client, interaction, args);
    },
};

 