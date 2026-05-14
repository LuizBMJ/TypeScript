export class Player {
    static players = [];
    name;
    level;
    health;
    constructor(name, level, health) {
        this.name = name;
        this.level = level;
        this.health = health;
        Player.players.push(this);
    }
    getName() {
        return this.name;
    }
    getHealth() {
        return this.health;
    }
    getLevel() {
        return this.level;
    }
    damage(damage, damager) {
        this.health -= damage;
        console.log(damager
            ? `${damager.name} causou dano em ${this.name}!`
            : `${this.name} sofreu dano!`);
        if (this.health <= 0) {
            this.health = 0;
            this.die();
            return;
        }
    }
    die(damager) {
        if (damager) {
            console.log(`${this.name} foi derrotado por ${damager.name}!`);
            this.level = 1;
            damager.level += 1;
            console.log(`${damager.name} subiu para o nível ${damager.level}!`);
        }
        else {
            console.log(`${this.name} foi derrotado!`);
        }
    }
}
const player1 = new Player("Jorge", 5, 100);
const player2 = new Player("Marya", 3, 80);
player1.getHealth();
player1.getLevel();
player1.damage(100, player2);
