// Aula 06 - Type Alias

// Exercício 1: Type Alias básico
// Type alias cria um novo nome para um tipo
type ID = string | number;

let usuarioId1: ID = 123;
let usuarioId2: ID = "abc456";

console.log("ID numérico:", usuarioId1);
console.log("ID string:", usuarioId2);

// Exercício 2: Type Alias para objetos
// Similar à interface, mas com algumas diferenças
type Pessoa = {
  nome: string;
  idade: number;
  cidade?: string; // Propriedade opcional
};

const pessoa1: Pessoa = {
  nome: "Fernanda",
  idade: 32
};

const pessoa2: Pessoa = {
  nome: "Roberto",
  idade: 45,
  cidade: "São Paulo"
};

console.log("Pessoa 1:", pessoa1);
console.log("Pessoa 2:", pessoa2);

// Exercício 3: Type Alias com Union Types
// Podemos criar tipos que aceitam múltiplos formatos
type RespostaAPI = 
  | { status: "sucesso"; dados: any }
  | { status: "erro"; mensagem: string };

const resposta1: RespostaAPI = {
  status: "sucesso",
  dados: { id: 1, nome: "Teste" }
};

const resposta2: RespostaAPI = {
  status: "erro",
  mensagem: "Falha na conexão"
};

console.log("Resposta 1:", resposta1);
console.log("Resposta 2:", resposta2);

// Exercício 4: Type Alias para funções
type OperacaoMatematica = (a: number, b: number) => number;

const soma: OperacaoMatematica = (x, y) => x + y;
const subtracao: OperacaoMatematica = (x, y) => x - y;

console.log("Soma:", soma(10, 5));
console.log("Subtração:", subtracao(10, 5));

// Exercício 5: Type Alias com tipos primitivos e literais
// Podemos criar tipos com valores específicos (literal types)
type Direcao = "norte" | "sul" | "leste" | "oeste";
type StatusPagamento = "pendente" | "aprovado" | "rejeitado";

let direcaoAtual: Direcao = "norte";
let statusPedido: StatusPagamento = "pendente";

console.log("Direção:", direcaoAtual);
console.log("Status:", statusPedido);

// Exercício 6: Diferença entre Type Alias e Interface
// Type alias pode ser usado para tipos mais complexos
type Coordenadas = [number, number]; // Tupla
type StringOuNumero = string | number;

const ponto: Coordenadas = [10, 20];
const valor: StringOuNumero = 100;

console.log("Ponto:", ponto);
console.log("Valor:", valor);
