const Discord = require("discord.js");
const prefix = "/";

module.exports = async(client, message) => {
    
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
   
    if(!message.content.startWitch(prefix)) reaturn
 
    const args = message.content.slice(prerfix.lenght).trim().split(/ +/g);
    const commande = args.shift();
    
    const cmd = cient.commands.get(commande);
    if(!cmd) return
    
    cmd.run(client, message, args);
}