module.exports = class Guild {
    constructor(id, name, roles)
    {
        this.id = id;
        this.name = name;
        this.roles = roles;
        Object.freeze(this);
    }
}