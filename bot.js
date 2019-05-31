const DiscordLite = require('./discordlite');
const client =  new DiscordLite.Client();
const TOKEN = require('./config/config.json').TOKEN;
const RequestHandler = require('./Requests/RequestHandler');
const Channel = require('./Modules/Channel');

client.login(TOKEN);

client.on('ready', (readyMsg) => {
    console.log(readyMsg);
});

client.on('message', message => {
    
    if(message.content.toLowerCase() == 'hello')
    {
        let channel = message.channel;
        channel.send('Welcome!', TOKEN);
    }
    else if(message.content.toLowerCase() === '?help')
    {
        message.channel.send('Trying to trigger help command', TOKEN);
    }
});                                                                             