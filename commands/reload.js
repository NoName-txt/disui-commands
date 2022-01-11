const Discord = require("discord.js");

exports.run = (client, message, args, lang) =>  {
    if(!client.owners.includes(message.author.id)) return;
    if(args[0] && args[1]) {
        client.reload(args[0],args[1])
        return message.channel.send("Reloaded.")
    }else{
        return message.channel.send("Example: m!reload cüzdan wallet.js")
    }
};


exports.conf = {
    enabled: true,
    name: "reload",
    aliases: ["yenile"]
};
