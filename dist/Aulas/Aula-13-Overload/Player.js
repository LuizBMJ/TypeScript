class Player {
    name;
    nickname;
    health;
    constructor(name, arg) {
        this.name = name;
        if (typeof arg === "string") {
            this.nickname = arg;
            this.health = 100;
        }
        else {
            this.health = arg;
            this.nickname = "Unknown";
        }
    }
}
const player1 = new Player("Alice", "Warrior");
const player2 = new Player("Bob", 80);
export {};
