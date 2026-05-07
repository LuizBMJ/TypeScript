// Aula 05 - Interfaces

// Exercício 1: Interface básica
// Uma interface define a estrutura de um objeto
interface Usuario {
  nome: string;
  idade: number;
  email: string;
}

const usuario1: Usuario = {
  nome: "Carlos",
  idade: 28,
  email: "carlos@email.com"
};

console.log("Usuário 1:", usuario1);

// Exercício 2: Propriedades opcionais (usando ?)
// Propriedades marcadas com ? podem ou não estar presentes
interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao?: string; // Propriedade opcional
}

const produto1: Produto = {
  id: 1,
  nome: "Notebook",
  preco: 3500
  // descricao é opcional, então não precisamos informar
};

const produto2: Produto = {
  id: 2,
  nome: "Mouse",
  preco: 150,
  descricao: "Mouse gamer com RGB"
};

console.log("Produto 1:", produto1);
console.log("Produto 2:", produto2);

// Exercício 3: Propriedades readonly
// Propriedades readonly não podem ser alteradas após a inicialização
interface Configuracao {
  readonly id: number;
  nome: string;
}

const config: Configuracao = {
  id: 1,
  nome: "Padrão"
};

// config.id = 2; // Erro: Cannot assign to 'id' because it is a read-only property
config.nome = "Nova Config"; // Isso é permitido

console.log("Configuração:", config);

// Exercício 4: Extensão de interfaces (herança)
// Uma interface pode estender outra usando a palavra-chave 'extends'
interface Animal {
  nome: string;
  idade: number;
}

interface Cachorro extends Animal {
  raca: string;
  latir(): void;
}

const meuCachorro: Cachorro = {
  nome: "Rex",
  idade: 3,
  raca: "Labrador",
  latir() {
    console.log("Au au!");
  }
};

console.log("Cachorro:", meuCachorro);
meuCachorro.latir();

// Exercício 5: Interface para funções
// Podemos definir a assinatura de uma função usando interface
interface Calculo {
  (a: number, b: number): number;
}

const somar: Calculo = (x, y) => x + y;
const multiplicar: Calculo = (x, y) => x * y;

console.log("Soma:", somar(5, 3));
console.log("Multiplicação:", multiplicar(5, 3));

// Exercício 6: Interface com index signature
// Permite definir tipos para propriedades dinâmicas
interface Dicionario {
  [key: string]: string;
}

const traducoes: Dicionario = {
  "hello": "olá",
  "world": "mundo",
  "typescript": "typescript"
};

console.log("Traduções:", traducoes);
