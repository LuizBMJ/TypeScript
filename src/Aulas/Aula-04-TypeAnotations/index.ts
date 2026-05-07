/// <reference lib="dom" />
// Aula 04 - Anotações de Tipo (Type Annotations)

// Exercício 1: Anotações básicas de tipo
// Aqui definimos variáveis com tipos específicos usando anotação de tipo
let nome: string = "Maria";
let idade: number = 30;
let estaAtivo: boolean = true;

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${estaAtivo}`);

// Exercício 2: Anotação de tipo em arrays
// Podemos definir arrays de duas formas: usando o sufixo [] ou o tipo Array<>
let numeros: number[] = [1, 2, 3, 4, 5];
let frutas: Array<string> = ["maçã", "banana", "laranja"];

console.log("Números:", numeros);
console.log("Frutas:", frutas);

// Exercício 3: Anotação de tipo em funções
// Definimos os tipos dos parâmetros e do valor de retorno
function somar(a: number, b: number): number {
  return a + b;
}

function cumprimentar(nome: string): string {
  return `Olá, ${nome}!`;
}

console.log("Soma:", somar(10, 20));
console.log(cumprimentar("João"));

// Exercício 4: Tipo any (evitar o uso, mas existe)
// O tipo any desativa a verificação de tipo do TypeScript
let valorQualquer: any = "pode ser qualquer coisa";
valorQualquer = 42;
valorQualquer = true;

console.log("Valor any:", valorQualquer);

// Exercício 5: Tipo unknown (mais seguro que any)
// Precisamos verificar o tipo antes de usar
let valorDesconhecido: unknown = "texto";

if (typeof valorDesconhecido === "string") {
  console.log("É uma string:", valorDesconhecido.toUpperCase());
}

// Exercício 6: Tipo void (geralmente usado em funções sem retorno)
function exibirMensagem(mensagem: string): void {
  console.log(mensagem);
}

exibirMensagem("Esta função não retorna nada");

// Exercício 7: Tipo never (para funções que nunca retornam)
function lancarErro(mensagem: string): never {
  throw new Error(mensagem);
}

// Exercício 8: Anotação de tipo em objetos
let pessoa: { nome: string; idade: number } = {
  nome: "Ana",
  idade: 25
};

console.log("Pessoa:", pessoa);
