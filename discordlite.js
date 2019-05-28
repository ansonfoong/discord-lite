const WebSocket = require('ws');
const EventEmitter = require('events');
const Message = require('./Modules/Message');
const User = require('./Modules/User');

class Client extends EventEmitter {
    constructor(options)
    {
        super();
        console.log("Instantiating!");
    }

    login(token)
    {
        this.token = token;
        this.webSocket = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json")
        this.identify = {
            token : this.token,
            properties : {
                $os: "linux",
                $browser: "disco",
                $device: "disco"
            },
            compress: false,
            large_threshold: 250,
            shard: [0,1],
            presence: {
                status: "online",
                afk: false
            }
        }
        this.webSocket.onopen = () => {
            let payload = {
                op: 2,
                d: this.identify
            }
            this.webSocket.send(JSON.stringify(payload));
        }
        this.webSocket.onmessage = msg => {
            let jsonData = JSON.parse(msg.data);
            let opcode = jsonData.op;

            if(opcode == 10) // Sent to the client immediately upon connecting. We need to start sending heartbeats in intervals.
            {
                let interval = jsonData.d.heartbeat_interval;
                this.heartbeat(interval);
            }
            else {
                
            }

            let EVENT = jsonData.t;
            console.log(EVENT);
            if(EVENT == 'READY')
                this.emit('ready', 'bot successfully logged in.');
            else if(EVENT == 'MESSAGE_CREATE')
            {
                let message = new Message();
                

                let data = jsonData.d;
                let user = new User(data.author.username, data.author.id, 'https://cdn.discordapp.com/avatars/' + data.author.id + '/' + data.author.avatar + '.png', data.author.discriminator);
                
                message.author = user;
                message.content = data.content;
                message.id = data.id; // set the ID of the message.x
                message.guild = data.guild_id; // Set the guild id for now, we will fetch the GUILD info later.
                message.timestamp = data.timestamp;

                this.emit('message', message);
            }
        }
    }
    heartbeat(interval)
    {
        const payload = {
            op: 1,
            d: null
        }
        setInterval(() => {
            console.log("Sending...");
            this.webSocket.send(JSON.stringify(payload));
        }, interval);
    }
}

module.exports = { Client };