const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter) => {

    const closeinfo = inter.options.getString('close-text');

    if(db.get(`ticketChannel_${inter.channelId}`) != true){
        return await inter.reply(`Dit commando kan je enkel in een ticket kanaal doen!`)
    }

    await inter.reply(`Deze ticket is succesvol gesloten en zal zo worden verwijderd!`)

    const thanksEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle('Gesloten')
            .setDescription('Ticket gesloten!')
            .addField('Toevoeging', closeinfo)
            .setColor('RANDOM')
    inter.user.send({ embeds: [thanksEmbed] })
    
    db.delete(`ticket_${inter.user.id}`)
    db.delete(`ticketChannel_${inter.channelId}`)
    
    setTimeout(() => {
        inter.channel.delete()
    }, 1000)
    
}

module.exports.help = {
    name: 'close'
}