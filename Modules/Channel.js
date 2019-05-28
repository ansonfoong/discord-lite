class Channel {

    constructor(id)
    {
        this._id = id;
    }

    set id(id) { this._id = id; }
    get id() { return this._id; }
}

module.exports = Channel;