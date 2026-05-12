const ponto: [number, number] = [10, 20];

console.log("Ponto x:", ponto[0]);
console.log("Ponto y:", ponto[1]);

const usuario: [string, number, boolean] = ["Ana", 25, true];

console.log("Usuário:", usuario);

function mostrarCoordenada(coords: [number, number]): void {
  console.log(`X: ${coords[0]}, Y: ${coords[1]}`);
}

mostrarCoordenada(ponto);

const pares: [string, number][] = [
  ["um", 1],
  ["dois", 2],
  ["três", 3]
];

console.log("Pares:", pares);