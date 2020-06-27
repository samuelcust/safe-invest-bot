const Discord = require('discord.js')
const client = new Discord.Client()

const asTable = require('as-table')

const { sortFunds, sortBenjaminGrahamFilter } = require('./src/index.js')

const PREFIX = '!'

client.on('ready', () => {
    console.log('The BOT is ready')
})

client.on('message', async message => {
    if(!message.content.startsWith(PREFIX)) return

    const args = message.content.slice(PREFIX.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if (command === 'funds') {
        const data = await sortFunds()
        message.reply(asTable(data))
    }

    if (command === 'indic') {
        const data = await sortBenjaminGrahamFilter()
        message.reply(asTable(data))
    }
})

client.login(process.env.TOKEN)
