

class Player {
  public name: string;
  public nickname: string;
  public health: number;

  constructor(name: string, nickname: string)
  constructor(name: string, health: number)
  constructor(name: string, arg: string | number) {
    this.name = name;
    if (typeof arg === "string") {
      this.nickname = arg;
      this.health = 100; // Valor padrão para health
    } else {
      this.health = arg;
      this.nickname = "Unknown"; // Valor padrão para nickname
    }
  }
}

const player1 = new Player("Alice", "Warrior");
const player2 = new Player("Bob", 80);
