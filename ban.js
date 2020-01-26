const Discord = require('discord.js');

module.exports.run = async(client, message, args) =>{
    
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`Vous n'avez pas la permission !`);
    
    if(message.mentions.user.size ===0) {
        return message.channel.send(`Vous devez mentionner un utilisateur !`);
    }
    let ban = message.guild.member(message.mentions.user.firt());
    
    if(!ban) {
        return message.channel.send('Je n'ai pas trouvé l'utilisateur !');
    }
    
     if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`Le bot n'a pas la permission !`)
    
    
    ban.ban().then(member => {
        
        message.channel.send(`${member.user.username} est ban ! Par ${message.author.username} le code du bot est fait par Jvais#5020`);
        message.mentions.users.first().send(`Vous êtes banni du server **${message.guild.name}** par ${message.author.username} le code du bot est fait par Jvais#5020`).catch(console.error);
    )};
};

moduls.exports.help = {
    name: "ban"
};