const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = async (client, inter, args) => {

    if(!message.member.permissions.has("BAN_MEMBER")) return message.reply("Jij kan dit niet.");

    if(!args[0]) return message.reply("Je hebt geen gebruiker op gegeven.");

    if(!args[1]) return message.reply("Je hebt geen reden op gegeven.");

    var warnUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id)

    var reason = agrs[1].slice(1).join(" ");

    if(!warnUser) return message.reply("Kan de gebruiker niet vinden.");

    const warns = JSON.parse(fs.readFileSync("../warnings.json", "UTF8"));

    if(!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    }

    warns[warnUser.id].warns++;

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser.user.username} (${warnUser.id})
        **Warning door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns.toString());
    
    const channel = message.member.guild.channels.cache.get("861221128373927957");

    if(!channel) return;

    channel.send({embeds: [embed]});

    fs.writeFile("../warnings.json", JSON.stringify(warns), (err) => {
        if(err) console.log(err);
    });

}

module.exports.help = {
    name: 'warn',
    aliases: []
}