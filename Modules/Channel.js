const RequestHandler = require('../Requests/RequestHandler');

class Channel {

    constructor(id)
    {
        this._id = id;
        this.request = new RequestHandler();
    }

    set id(id) { this._id = id; }
    get id() { return this._id; }

    init()
    {
        
    }

    send(message, token)
    {
        this.request.createMessage(message, this._id, token);
    }
}

module.exports = Channel;