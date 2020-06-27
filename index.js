const Discord = require('discord.io')
const { table } = require('table')

const { sortFunds, sortBenjaminGrahamFilter } = './src/index.js'

const PREFIX = '!'

const bot = new Discord.Client({
    token: process.env.TOKEN,
    autorun: true,
})

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id)
})

bot.on('message', function(user, userID, channelID, message, event) {
    if(!message.startsWith(PREFIX)) return

    const args = message.slice(PREFIX.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if (command === 'funds') {
        bot.sendMessage({
            to: channelID,
            message: table(sortFunds()),
        })
    }

    if (command === 'indic') {
        bot.sendMessage({
            to: channelID,
            message: table(sortBenjaminGrahamFilter()),
        })
    }
})
