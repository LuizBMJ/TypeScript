// Aula 07 - Tuplas

// Exercício 1: Tupla básica
// Uma tupla é um array com tipos fixos e conhecidos para cada posição
let coordenadas: [number, number] = [10, 20];

console.log("Coordenadas x, y:", coordenadas);

// Exercício 2: Tupla com diferentes tipos
// Cada posição da tupla pode ter um tipo diferente
let usuario: [string, number, boolean] = ["Alice", 25, true];

console.log("Usuário [nome, idade, ativo]:", usuario);

// Exercício 3: Acessando elementos da tupla
// Podemos acessar elementos individuais pelo índice
const nomeUsuario = usuario[0]; // string
const idadeUsuario = usuario[1]; // number
const statusUsuario = usuario[2]; // boolean

console.log(`Nome: ${nomeUsuario}, Idade: ${idadeUsuario}, Ativo: ${statusUsuario}`);

// Exercício 4: Tupla com spread (rest elements)
// Podemos ter um elemento rest no final da tupla
let tuplaComRest: [string, ...number[]] = ["números", 1, 2, 3, 4, 5];

console.log("Tupla com rest:", tuplaComRest);

// Exercício 5: Elementos opcionais na tupla (TypeScript 4.0+)
// Podemos marcar elementos como opcionais usando ?
let tuplaOpcional: [string, number?] = ["teste"];
// Ou com o número:
tuplaOpcional = ["teste", 42];

console.log("Tupla opcional:", tuplaOpcional);

// Exercício 6: Usando tuplas em funções
// Funções podem retornar tuplas para múltiplos valores
function obterMinMax(numeros: number[]): [number, number] {
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);
  return [min, max];
}

const [minimo, maximo] = obterMinMax([3, 7, 2, 9, 1, 5]);
console.log(`Mínimo: ${minimo}, Máximo: ${maximo}`);

// Exercício 7: Tupla nomeada (usando type alias para dar nomes aos elementos)
type Ponto3D = [x: number, y: number, z: number];

const ponto3d: Ponto3D = [10, 20, 30];
console.log("Ponto 3D:", ponto3d);

// Exercício 8: Destruturamento de tuplas
const dados: [string, number] = ["João", 30];
const [nome, idade] = dados;

console.log(`Nome: ${nome}, Idade: ${idade}`);
