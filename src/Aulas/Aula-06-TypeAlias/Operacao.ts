type Operacao = (a: number, b: number) => number;

const somar: Operacao = (a, b) => a + b;
const subtrair: Operacao = (a, b) => a - b;
const multiplicar: Operacao = (a, b) => a * b;

function calcular(a: number, b: number, operacao: Operacao): number {
  return operacao(a, b);
}

console.log("10 + 5 =", calcular(10, 5, somar));
console.log("10 - 5 =", calcular(10, 5, subtrair));
console.log("10 * 5 =", calcular(10, 5, multiplicar));