const DiscordLite = require('./discordlite');
const client =  new DiscordLite.Client();
const TOKEN = require('./config/config.json').TOKEN;

client.login(TOKEN);

client.on('ready', (readyMsg) => {
    console.log(readyMsg);
});

client.on('message', message => {
    
    if(message.content.toLowerCase() == 'hello')
    {
        let channel = message.channel;
        channel.send('Welcome!');
    }
    else if(message.content.toLowerCase() === '?help')
    {
        message.channel.send('Trying to trigger help command');
    }
    else {
        console.log(message);
    }
});                                                                             