# discord-lite
A lightweight wrapper for the Discord API

## Installing
> npm i discord.lt

```JS
const DiscordLite = require('discord.lt');
const client =  new DiscordLite.Client();

client.login('your bot token');

client.on('ready', (readyMsg) => {
    console.log(readyMsg);
});

client.on('message', message => {
    console.log(message);
})```
