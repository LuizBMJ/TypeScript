// Aula 09 - Interseções (Intersection Types)

// Exercício 1: Intersection básico
// O operador & cria um tipo que combina múltiplos tipos
// O resultado é um tipo que possui todas as propriedades de todos os tipos combinados
type TemNome = {
  nome: string;
};

type TemIdade = {
  idade: number;
};

type Pessoa = TemNome & TemIdade;

const pessoa1: Pessoa = {
  nome: "Juliana",
  idade: 28
};

console.log("Pessoa (interseção):", pessoa1);

// Exercício 2: Interseção de interfaces
// Podemos fazer interseção de interfaces também
interface Animal {
  nome: string;
  idade: number;
}

interface Voador {
  alturaMaxima: number;
  voar(): void;
}

type Ave = Animal & Voador;

const papagaio: Ave = {
  nome: "Papagaio",
  idade: 2,
  alturaMaxima: 100,
  voar() {
    console.log("A ave está voando!");
  }
};

console.log("Ave:", papagaio);
papagaio.voar();

// Exercício 3: Interseção com tipos primitivos
// Quando fazemos interseção de tipos primitivos incompatíveis, obtemos 'never'
type NumeroOuString = string | number;
type ApenasString = string;

// Essa interseção resulta em 'string' (pois string está em ambos)
type Resultado = NumeroOuString & ApenasString;

const valor: Resultado = "sou uma string";
console.log("Resultado da interseção:", valor);

// Exercício 4: Interseção com propriedades conflitantes
// Se as propriedades têm tipos diferentes, a interseção tenta combiná-las
interface A {
  propriedade: string;
}

interface B {
  propriedade: string;
}

interface C {
  propriedade: number;
}

type AB = A & B; // propriedade continua sendo string
type AC = A & C; // propriedade vira string & number (que é never)

const objAB: AB = { propriedade: "teste" };
console.log("A & B:", objAB);

// Exercício 5: Usando interseção para estender objetos
type BaseUsuario = {
  id: number;
  email: string;
};

type Permissoes = {
  podeLer: boolean;
  podeEscrever: boolean;
  podeExcluir: boolean;
};

type UsuarioAdmin = BaseUsuario & Permissoes & { tipo: "admin" };

const admin: UsuarioAdmin = {
  id: 1,
  email: "admin@email.com",
  podeLer: true,
  podeEscrever: true,
  podeExcluir: true,
  tipo: "admin"
};

console.log("Usuário Admin:", admin);

// Exercício 6: Interseção com union types
type Erro = {
  codigo: number;
  mensagem: string;
};

type Sucesso = {
  dados: any;
};

// Resposta pode ser erro OU sucesso
type RespostaAPI = (Erro | Sucesso) & { timestamp: Date };

const respostaErro: RespostaAPI = {
  codigo: 404,
  mensagem: "Não encontrado",
  timestamp: new Date()
};

const respostaSucesso: RespostaAPI = {
  dados: { id: 1 },
  timestamp: new Date()
};

console.log("Resposta erro:", respostaErro);
console.log("Resposta sucesso:", respostaSucesso);
