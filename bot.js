const DiscordLite = require('./discordlite');
const client =  new DiscordLite.Client();
const TOKEN = require('./config/config.json').TOKEN;

client.login(TOKEN);

client.on('ready', (readyMsg) => {
    console.log(readyMsg);
});

client.on('message', message => {
    console.log(message.content);
})