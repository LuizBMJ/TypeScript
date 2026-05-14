

export class Player {
    private static players: Player[] = [];
    public name: string;
    private level: number;
    private health: number;
    
    constructor(name: string, level: number, health: number) {
        this.name = name;
        this.level = level;
        this.health = health;

        Player.players.push(this);
    }

    public getName(): string {
        return this.name;
    }

    public getHealth(): number {
        return this.health;
    }

    public getLevel(): number {
        return this.level;
    }

    public damage(damage: number, damager?: Player): void {
        this.health -= damage;

        console.log(damager
            ? `${damager.name} causou dano em ${this.name}!`
            : `${this.name} sofreu dano!`
        );

        if (this.health <= 0) {
            this.health = 0;
            this.die();
            return;
        }
    }

    private die(damager?: Player): void {
        if (damager) {
            console.log(`${this.name} foi derrotado por ${damager.name}!`);
          this.level = 1;
          damager.level += 1;
            console.log(`${damager.name} subiu para o nível ${damager.level}!`);
        } else {
            console.log(`${this.name} foi derrotado!`);
        }
    }
}

const player1 = new Player("Jorge", 5, 100);
const player2 = new Player("Marya", 3, 80);

player1.getHealth();
player1.getLevel();


player1.damage(100, player2);