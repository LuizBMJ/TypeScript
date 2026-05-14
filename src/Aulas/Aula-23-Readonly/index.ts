
interface User {
  readonly id: string;
  name: string;
  age: number;
}

const user: User = { 
  id: "123",
  name: "Jorge",
  age: 17
}

Object.defineProperties(user, {
  id: {
    writable: false
  }
})

class Command {
  public readonly createdAt: Date;
  public name: string;

  constructor(name: string) {
    this.name = name;
    this.createdAt = new Date();
  }

  public run(){
    this.name = "Outro name";
  }
}

const command = new Command("ping")

interface Player {
  nick: string;
  health: number;
  shield: number;
  inventory: string[];
}

const player: Player = {
  nick: 'Lullkz',
  health: 39,
  shield: 11,
  inventory: ["potion", "knife", "book"]
}

function freeze<T extends object>(obj: T): Readonly<T>{
  return Object.freeze(obj);
}

const StaticPlayer = freeze(player);