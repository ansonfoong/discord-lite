module.exports = class Role {
    constructor(id, name, mentionable, position, color, hoist, managed)
    {
        this._id = id;
        this._name = name;
        this._mentionable = mentionable;
        this._position = position;
        this._color = color;
        this._hoist = hoist;
        this._managed = managed;

        Object.freeze(this);
    }

    get id() { return this._id; }
    get name() { return this._name; }
    get mentionable() { return this._mentionable; }
    get position() { return this._position; }
    get color() { return this._color; }
    get hoist() { return this._hoist; }
    get managed() { return this._managed; }
    
}