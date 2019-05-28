const request = require('request');
const fetch = require('node-fetch');

class RequestHandler {
    constructor()
    {

    }
    APIRequest()
    {

    }
    createMessage(message, token)
    {
        
        let data = {
            "content": message,
            "tts": false
        }
        fetch('https://discordapp.com/api/v6/channels/533070839806165025/messages', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'User-Agent': 'request',
                'Authorization' : 'Bot ' + token,
                'Content-Type' : 'application/json'
            }
        })
    }
}

module.exports = RequestHandler;