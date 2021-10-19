const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter) => {

    const tickttoevoeging = inter.options.getString('text');
    const option = inter.options.getString('perms');

    const channel = client.channels.cache.find(c => c.id === "880905698777628742")
    if(channel === undefined) return

    if(db.get(`ticket_${inter.user.id}`) === true){
        return await inter.reply(`Je mag geen ticket aanmaken omdat je er al een open hebt!`)
    }

    if(option === 'supportteam'){
        const everyoneRole = inter.guild.roles.cache.find(x => x.name === "@everyone").id;
        inter.guild.channels.create(`ticket-${inter.user.username}`, { type: 'text',
        permissionOverwrites: [
        {
            id: inter.guild.roles.everyone,
            deny: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES]
        },
        {
            id: inter.user.id,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
        {
            id: '861221117092036638',
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
    ], }).then(async c => {

        const openEmbed = new Discord.MessageEmbed()
            .setDescription(`Je ticket is succesvol aangemaakt! ${c}`)
        await inter.reply({ embeds: [openEmbed] })

        const thanksEmbed = new Discord.MessageEmbed()
            .setDescription(`Bedankt voor het aanmaken van een ticket!\nOns team zal je zo snel mogelijk helpen!`)
            .setTimestamp()
            .addField('Toevoeging', tickttoevoeging)
            .setFooter(`Gemaakt door ${inter.user.username}`)
        c.send({ content: `<@!${inter.user.id}> iemand ons staff-team komt je helpen!`, embeds: [thanksEmbed] })

        db.set(`ticket_${inter.user.id}`, true)
        db.set(`ticketChannel_${c.id}`, true)

    })
    }

    if(option === 'hcteam'){
        const everyoneRole = inter.guild.roles.cache.find(x => x.name === "@everyone").id;
        inter.guild.channels.create(`ticket-${inter.user.username}`, { type: 'text',
        permissionOverwrites: [
        {
            id: inter.guild.roles.everyone,
            deny: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES]
        },
        {
            id: inter.user.id,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
        {
            id: '869587748871356457',
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
    ], }).then(async c => {

        const openEmbed = new Discord.MessageEmbed()
            .setDescription(`Je ticket is succesvol aangemaakt! ${c}`)
        await inter.reply({ embeds: [openEmbed] })

        const thanksEmbed = new Discord.MessageEmbed()
            .setDescription(`Bedankt voor het aanmaken van een ticket!\nOns team zal je zo snel mogelijk helpen!`)
            .setTimestamp()
            .addField('Toevoeging', tickttoevoeging)
            .setFooter(`Gemaakt door ${inter.user.username}`)
        c.send({ content: `<@!${inter.user.id}> iemand ons staff-team komt je helpen!`, embeds: [thanksEmbed] })

        db.set(`ticket_${inter.user.id}`, true)
        db.set(`ticketChannel_${c.id}`, true)

    })
    }

    if(option === 'managementteam'){
        const everyoneRole = inter.guild.roles.cache.find(x => x.name === "@everyone").id;
        inter.guild.channels.create(`ticket-${inter.user.username}`, { type: 'text',
        permissionOverwrites: [
        {
            id: inter.guild.roles.everyone,
            deny: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES]
        },
        {
            id: inter.user.id,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
        {
            id: '862365488969285653',
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
    ], }).then(async c => {

        const openEmbed = new Discord.MessageEmbed()
            .setDescription(`Je ticket is succesvol aangemaakt! ${c}`)
        await inter.reply({ embeds: [openEmbed] })

        const thanksEmbed = new Discord.MessageEmbed()
            .setDescription(`Bedankt voor het aanmaken van een ticket!\nOns team zal je zo snel mogelijk helpen!`)
            .setTimestamp()
            .addField('Toevoeging', tickttoevoeging)
            .setFooter(`Gemaakt door ${inter.user.username}`)
        c.send({ content: `<@!${inter.user.id}> iemand ons staff-team komt je helpen!`, embeds: [thanksEmbed] })

        db.set(`ticket_${inter.user.id}`, true)
        db.set(`ticketChannel_${c.id}`, true)

    })
    }

    if(option === 'developerteam'){
        const everyoneRole = inter.guild.roles.cache.find(x => x.name === "@everyone").id;
        inter.guild.channels.create(`ticket-${inter.user.username}`, { type: 'text',
        permissionOverwrites: [
        {
            id: inter.guild.roles.everyone,
            deny: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES]
        },
        {
            id: inter.user.id,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
        {
            id: '892328363371429898',
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
        {
            id: '881105444469374976',
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
        {
            id: '892098619073769512',
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
    ], }).then(async c => {

        const openEmbed = new Discord.MessageEmbed()
            .setDescription(`Je ticket is succesvol aangemaakt! ${c}`)
        await inter.reply({ embeds: [openEmbed] })

        const thanksEmbed = new Discord.MessageEmbed()
            .setDescription(`Bedankt voor het aanmaken van een ticket!\nOns team zal je zo snel mogelijk helpen!`)
            .setTimestamp()
            .addField('Toevoeging', tickttoevoeging)
            .setFooter(`Gemaakt door ${inter.user.username}`)
        c.send({ content: `<@!${inter.user.id}> iemand ons staff-team komt je helpen!`, embeds: [thanksEmbed] })

        db.set(`ticket_${inter.user.id}`, true)
        db.set(`ticketChannel_${c.id}`, true)

    })
    }

    if(option === 'creatorteam'){
        const everyoneRole = inter.guild.roles.cache.find(x => x.name === "@everyone").id;
        inter.guild.channels.create(`ticket-${inter.user.username}`, { type: 'text',
        permissionOverwrites: [
        {
            id: inter.guild.roles.everyone,
            deny: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES]
        },
        {
            id: inter.user.id,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
        {
            id: '850449363595034665',
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
        {
            id: '848618422844522527',
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.ATTACH_FILES]
        },
    ], }).then(async c => {

        const openEmbed = new Discord.MessageEmbed()
            .setDescription(`Je ticket is succesvol aangemaakt! ${c}`)
        await inter.reply({ embeds: [openEmbed] })

        const thanksEmbed = new Discord.MessageEmbed()
            .setDescription(`Bedankt voor het aanmaken van een ticket!\nOns team zal je zo snel mogelijk helpen!`)
            .setTimestamp()
            .setColor('RANDOM')
            .addField('Toevoeging', tickttoevoeging)
            .setFooter(`Gemaakt door ${inter.user.username}`)
        c.send({ content: `<@!${inter.user.id}> iemand ons staff-team komt je helpen!`, embeds: [thanksEmbed] })

        db.set(`ticket_${inter.user.id}`, true)
        db.set(`ticketChannel_${c.id}`, true)

    })
    }

}

module.exports.help = {
    name: 'new'
}