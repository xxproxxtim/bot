const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');

client.on('ready', () => {
    createCmd(client, '830722201996492820')
})