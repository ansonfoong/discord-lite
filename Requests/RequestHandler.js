const request = require('request');
const fetch = require('node-fetch');

class RequestHandler {
    constructor()
    {

    }
    APIRequest()
    {

    }
    createMessage(message, channelID, token)
    {
        
        let data = {
            "content": message,
            "tts": false
        }
        fetch(`https://discordapp.com/api/v6/channels/${channelID}/messages`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'User-Agent': 'request',
                'Authorization' : 'Bot ' + token,
                'Content-Type' : 'application/json'
            }
        })
    }
    async fetchChannel(id, token)
    {
        console.log("Hello?");
        let route = 'https://discordapp.com/api/v6/channels/' + id;
        
        const channelTextBody = await fetch(route, {
            method: 'GET',
            headers: {
                'Authorization' : 'Bot ' + token,
                'Content-Type' : 'application/json',
                'User-Agent' : 'request'
            }
        });
        const JSONChannelObject = JSON.parse(await channelTextBody.text());
        console.log(JSONChannelObject);
        const channel = {
            id : JSONChannelObject.id,
            name: JSONChannelObject.name,
            type: JSONChannelObject.type,
            guild_id: JSONChannelObject.guild_id,
            topic: JSONChannelObject.topic
        }
        return channel;
    }
}

module.exports = RequestHandler;