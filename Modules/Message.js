const Channel = require('./Channel');

class Message {

    constructor(author, content, id, timestamp, guild, channel)
    {
        console.log("Message Object Instantiated.");
        this._author = author;
        this._content = content;
        this._id = id;
        this._timestamp = timestamp;
        this._guild = guild;
        this._channel = channel;

    }
    
    get author() { return this._author; }
    get content() { return this._content;  }
    get id() { return this._id; }
    get guild() { return this._guild; }
    get timestamp() { return this._timestamp; }
    get channel() { return this._channel; }
}

module.exports = Message;