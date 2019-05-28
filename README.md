# discord-lite
A lightweight wrapper for the Discord API

## Installing
1) Clone repo
2) Make sure repo is in same directory of your bot (TEMPORARY)
3) Set up your token in a config file if project is public.
4) Copy the example and paste it down below.

```JS
const DiscordLite = require('./discordlite');
const client =  new DiscordLite.Client();
const TOKEN = require('your bot token');

client.login(TOKEN);

client.on('ready', (readyMsg) => {
    console.log(readyMsg);
});

client.on('message', message => {
    console.log(message);
})```
