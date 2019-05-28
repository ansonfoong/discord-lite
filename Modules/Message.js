class Message {

    constructor()
    {
        console.log("Message Object Instantiated.");
        this._author = null;
        this._content = null;
        this._id = null;
        this._timestamp = null;
        this._guild = null;
    }
    set author(author)
    {
        this._author = author;
    }
    set content(content)
    {
        this._content = content;
    }
    set id(id)
    {
        this._id = id;
    }
    set guild(guild)
    {
        this._guild = guild;
    }
    set timestamp(timestamp)
    {
        this._timestamp = timestamp;
    }
    
    get author()
    {
        return this._author;
    }
    get content()
    {
        return this._content;
    }
    get id()
    {
        return this._id;
    }
    get guild()
    {
        return this._guild;
    }
    get timestamp()
    {
        return this._timestamp;
    }
}

module.exports = Message;