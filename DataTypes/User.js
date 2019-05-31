class User {
    constructor(username, id, avatarURL, discriminator)
    {
        this._username = username;
        this._id = id;
        this._avatarURL = avatarURL;
        this._discriminator = discriminator;
    }
    set username(username)
    {
        this._username = username;
    }
    set id(id)
    {
        this._id = id;
    }
    set avatarURL(url)
    {
        this._avatarURL = url;
    }
    set discriminator(disc)
    {
        this._discriminator = disc;
    }
    get username() { return this._username; }
    get id() { return this._id; }
    get avatarURL() { return this._avatarURL; }
    get discriminator() { return this._discriminator; }

}

module.exports = User;