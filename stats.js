const Discord = require('discord.js');
const moment = require('moment')

module.exports.run = async(client, message, args) =>{
    
    const membre = message.mention.members.first() || message.member;
    //if(!mmbre) return message.channel.send(`Veuiller mentionner un utillisateur !`);
    message.channel.send({
        embed: {
            color: 0xe4333,
            title: `Stastiques de l'utilisateur **$(membre.user.tag)**`,
            thumbnail: {
                url: membre.user.displayAvartarURL
            },
            fields: [
                {
                name: "> ID :",
                value: membre.id
                },
                {
                    name: "Crée le :",
                    value: moment.utc(membre.user.createAt).format("LL")
                },
                {
                    name: "Jeu :",
                    value: '${membre.user.presence.game ? `$(membre.user.presence.game.name): "Aucun jeu"}'
                },
                {
                    name: "Rejoin le :"
                    value! moment.utc(membrejoinedAt).format("LL")
                }
                },
                footer: {
                     text: `infomations de l'utilisateur $(membre.user.username)`
                }
            }
        }
    })

}

module.exports.help ={
    name: "stats"
}