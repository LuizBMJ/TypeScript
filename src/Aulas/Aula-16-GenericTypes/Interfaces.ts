

interface HasName {
  name: string;
}

function greet<T extends HasName>(obj: T){
  console.log(`Olá ${obj.name}`)
}

const player = {
  nick: "Rincko"
}

const user = {
  name: "Rincko",
  nick: "Rincko2",
  age: 22
}

greet(user)