const DiscordLite = require('./discordlite');
const client =  new DiscordLite.Client();
const token = "NTc4MTUyMjA2NjI1MTQ0ODQy.XO116g.rF1hlon8zA4nAsp0Amr1CbnFTbo"
client.login(token);

client.on('ready', (readyMsg) => {
    console.log(readyMsg);
});

client.on('message', message => {
    console.log(message);
})