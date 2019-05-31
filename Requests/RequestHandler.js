const request = require('request');
const fetch = require('node-fetch');
const Constants = require('../DataTypes/Constants');

class RequestHandler {
    constructor(token)
    {
        Object.defineProperty(this, 'token', {
            enumerable: false,
            value: token
        });

        Object.defineProperty(this, 'headers', {
            enumerable: false,
            value: {
                'Authorization' : 'Bot ' + this.token,
                'Content-Type' : 'application/json',
                'User-Agent' : 'request'
            }
        });
    }
    createMessage(message, channelID)
    {
        console.log("Hello?");
        console.log(this.token);
        console.log(message);
        console.log(channelID);
        let data = {
            "content": message,
            "tts": false
        }
        fetch(`https://discordapp.com/api/v6/channels/${channelID}/messages`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'User-Agent': 'request',
                'Authorization' : 'Bot ' + this.token,
                'Content-Type' : 'application/json'
            }
        })
    }
    async fetchChannel(id)
    {
        console.log(this.token);
        console.log("Hello?");
        let route = 'https://discordapp.com/api/v6/channels/' + id;
        
        const channelTextBody = await fetch(route, {
            method: 'GET',
            headers: {
                'Authorization' : 'Bot ' + this.token,
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

    async APIRequest(method, route, id)
    {
        if(method.toLowerCase() == Constants.GET) {
            if(route.toLowerCase() == Constants.GUILDS)
            {
                let guild = await fetch(Constants.GUILD_ENDPOINT + id, {
                    method: method,
                    headers: this.headers
                });
                return JSON.parse(await guild.text());
            }
        } 
        else if(method.toLowerCase() == 'post')
        {

        }
    }
}

module.exports = RequestHandler;