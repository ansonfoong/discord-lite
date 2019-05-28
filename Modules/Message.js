class Message {

    constructor()
    {
        console.log("Message Object Instantiated.");
        this._author = null;
        this._content = null;
        this._id = null;
    }

    set author(author)
    {
        this._author =  author;
    }
    
    set content(content)
    {
        this._content = content;
    }

    set id(id)
    {
        this._id = id;
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
}

module.exports = Message;