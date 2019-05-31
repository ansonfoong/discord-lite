const RequestHandler = require('../Requests/RequestHandler');

class Channel {

    constructor(id, name, type, guild_id, topic, token)
    {
        this._id = id;
        this._name = name;
        this._type = type;
        this._guild_id = guild_id;
        this._topic = topic;
        this.request = new RequestHandler(token);
        Object.defineProperty(this, 'token', {
            value: token
        });
    }

    set id(id) { this._id = id; }
    get id() { return this._id; }

    set name(name) { this._name = name; }
    get name() { return this._name; }

    set type(type) { this._type = type; }
    get type() { return this._type; }

    set guild_id(id) { this._guild_id = id; }
    get guild_id() { return this._guild_id; }

    set topic(topic) { this._topic = topic; }
    get topic() { return this._topic; }
    
    send(message, token)
    {
        this.request.createMessage(message, this._id);
    }
}

module.exports = Channel;