const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter) => {

    const closeinfo = inter.options.getString('close-text');

    const channel = client.channels.cache.find(c => c.id === "861221128373927957")
    if(channel === undefined) return

    if(db.get(`ticketChannel_${inter.channelId}`) != true){
        return await inter.reply(`Dit commando kan je enkel in een ticket kanaal doen!`)
    }

    await inter.reply(`Deze ticket is succesvol gesloten en zal zo worden verwijderd!`)

    const thanksEmbed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle('Gesloten')
        .setDescription(`Ticket gesloten door ${inter.user.username}`)
        .addField('Toevoeging', closeinfo)
        .addField(`Naam`, inter.channelId)
        .setColor('RANDOM')
        .setFooter(`Gesloten door ${inter.user.username}`)
    channel.send({ embeds: [thanksEmbed] })
    
    db.delete(`ticket_${inter.user.id}`)
    db.delete(`ticketChannel_${inter.channelId}`)
    
    setTimeout(() => {
        inter.channel.delete()
    }, 1000)
    
}

module.exports.help = {
    name: 'close'
}