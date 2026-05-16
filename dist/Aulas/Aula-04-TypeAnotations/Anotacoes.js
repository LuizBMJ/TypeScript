let nome = "Jorge";
let idade = 25;
let ativo = true;
console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
let notas = [8.5, 9.0, 7.5, 10.0];
let frutas = ["maçã", "banana", "laranja"];
console.log("Notas:", notas);
console.log("Frutas:", frutas);
const pessoa = {
    nome: "Ana",
    idade: 30,
    cidade: "São Paulo"
};
console.log("Pessoa:", pessoa);
function saudar(nome) {
    return `Olá, ${nome}!`;
}
function somar(a, b) {
    return a + b;
}
console.log(saudar("Maria"));
console.log("Soma:", somar(5, 3));
let valor = "texto";
valor = 42;
valor = true;
console.log("Valor any:", valor);
let desconhecido = "hello";
if (typeof desconhecido === "string") {
    console.log("É string:", desconhecido.toUpperCase());
}
function log(mensagem) {
    console.log("Log:", mensagem);
}
log("Mensagem de teste");
export {};
