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
    }
}

module.exports = { Client };