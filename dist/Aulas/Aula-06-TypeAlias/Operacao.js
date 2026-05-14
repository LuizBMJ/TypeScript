const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
function calcular(a, b, operacao) {
    return operacao(a, b);
}
console.log("10 + 5 =", calcular(10, 5, somar));
console.log("10 - 5 =", calcular(10, 5, subtrair));
console.log("10 * 5 =", calcular(10, 5, multiplicar));
export {};
