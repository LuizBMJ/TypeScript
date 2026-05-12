function somar(a: number, b: number): number {
  return a + b;
}

function subtrair(a: number, b: number): number {
  return a - b;
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

function dividir(a: number, b: number): number | string {
  if (b === 0) {
    return "Erro: divisão por zero";
  }
  return a / b;
}

console.log("10 + 5 =", somar(10, 5));
console.log("10 - 5 =", subtrair(10, 5));
console.log("10 * 5 =", multiplicar(10, 5));
console.log("10 / 5 =", dividir(10, 5));
console.log("10 / 0 =", dividir(10, 0));