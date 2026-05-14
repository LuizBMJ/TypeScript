const user = {
    id: "123",
    name: "Jorge",
    age: 17
};
Object.defineProperties(user, {
    id: {
        writable: false
    }
});
class Command {
    createdAt;
    name;
    constructor(name) {
        this.name = name;
        this.createdAt = new Date();
    }
    run() {
        this.name = "Outro name";
    }
}
const command = new Command("ping");
const player = {
    nick: 'Lullkz',
    health: 39,
    shield: 11,
    inventory: ["potion", "knife", "book"]
};
function freeze(obj) {
    return Object.freeze(obj);
}
const StaticPlayer = freeze(player);
export {};
