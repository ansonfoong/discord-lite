const WebSocket = require('ws');

class Client {
    constructor(options)
    {
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
        console.log("Logging in with " + token);
        this.webSocket.onopen = () => {
            console.log("Handshaking");
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
                console.log(jsonData);
            }
        }
    }
    heartbeat(interval)
    {
        console.log(interval);
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