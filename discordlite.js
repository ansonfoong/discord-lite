const WebSocket = require('ws');
const EventEmitter = require('events');
// Discord Data Objects
const Message = require('./DataTypes/Message');
const User = require('./DataTypes/User');
const Channel = require('./DataTypes/Channel');
const Guild = require('./DataTypes/Guild');

// Utilities
const Constants = require('./DataTypes/Constants');
const RequestHandler = require('./Requests/RequestHandler');

class Client extends EventEmitter {
    constructor(options)
    {
        super();
    }

    login(token)
    {
        this.token = token;
        
        this.request = new RequestHandler(this.token);

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
        this.webSocket.onmessage = async msg => {
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
                let data = jsonData.d; // data contains all fields we need to initialize our message object.
                // Fetch channel data first via HTTP Request, initialize the channel object.
                const channel = await this.request.fetchChannel(data.channel_id);
                let messageChannel = new Channel(channel.id, channel.name, channel.type, channel.guild_id, channel.topic, this.token);
                
                // Fetch the Guild Object.
                let guild_data = await this.request.APIRequest(Constants.GET, Constants.GUILDS, data.guild_id);
                console.log(guild_data);
                let guild = new Guild(guild_data.id, guild_data.name, guild_data.roles);
                // Initialize User Object.
                let user = new User(data.author.username, data.author.id, 'https://cdn.discordapp.com/avatars/' + data.author.id + '/' + data.author.avatar + '.png', data.author.discriminator);
                
                // Initialize message object.
                let message = new Message(user, data.content, data.id, data.timestamp, guild, messageChannel);
                // Emit the message event and pass in the message object.
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