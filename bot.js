const DiscordLite = require('./discordlite');
const client =  new DiscordLite.Client();
const TOKEN = require('./config/config.json').TOKEN;
const RequestHandler = require('./Requests/RequestHandler');

client.login(TOKEN);

client.on('ready', (readyMsg) => {
    console.log(readyMsg);
});

client.on('message', message => {
    
    let req = new RequestHandler();

    if(message.content.toLowerCase() == 'hello')
        req.createMessage('Welcome!', TOKEN);

})