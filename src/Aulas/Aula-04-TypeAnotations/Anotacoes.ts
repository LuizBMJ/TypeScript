/// <reference lib="dom" />

let nome: string = "Jorge";
let idade: number = 25;
let ativo: boolean = true;

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);

let notas: number[] = [8.5, 9.0, 7.5, 10.0];
let frutas: Array<string> = ["maçã", "banana", "laranja"];

console.log("Notas:", notas);
console.log("Frutas:", frutas);

const pessoa: { nome: string; idade: number; cidade: string } = {
  nome: "Ana",
  idade: 30,
  cidade: "São Paulo"
};

console.log("Pessoa:", pessoa);

function saudar(nome: string): string {
  return `Olá, ${nome}!`;
}

function somar(a: number, b: number): number {
  return a + b;
}

console.log(saudar("Maria"));
console.log("Soma:", somar(5, 3));

let valor: any = "texto";
valor = 42;
valor = true;

console.log("Valor any:", valor);

let desconhecido: unknown = "hello";

if (typeof desconhecido === "string") {
  console.log("É string:", desconhecido.toUpperCase());
}

function log(mensagem: string): void {
  console.log("Log:", mensagem);
}

log("Mensagem de teste");