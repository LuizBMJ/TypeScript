// Aula 10 - Union Types

// Exercício 1: Union Type básico
// O operador | cria um tipo que pode ser um de vários tipos
let id: string | number;

id = 123; // Válido
console.log("ID numérico:", id);

id = "abc456"; // Válido
console.log("ID string:", id);

// Exercício 2: Union types em funções
// Uma função pode aceitar parâmetros de múltiplos tipos
function formatarId(id: string | number): string {
  return `ID: ${id}`;
}

console.log(formatarId(100));
console.log(formatarId("xyz"));

// Exercício 3: Type narrowing com typeof
// Precisamos restringir o tipo antes de usar métodos específicos
function processarValor(valor: string | number): string {
  if (typeof valor === "string") {
    return valor.toUpperCase(); // Aqui o TypeScript sabe que é string
  } else {
    return valor.toFixed(2); // Aqui o TypeScript sabe que é number
  }
}

console.log("String processada:", processarValor("typescript"));
console.log("Número processado:", processarValor(123.456));

// Exercício 4: Union types com literais (Literal Union Types)
// Podemos criar tipos com valores específicos
type StatusPedido = "pendente" | "processando" | "enviado" | "entregue";

function verificarPedido(status: StatusPedido): string {
  switch (status) {
    case "pendente":
      return "Seu pedido está pendente.";
    case "processando":
      return "Seu pedido está sendo processado.";
    case "enviado":
      return "Seu pedido foi enviado!";
    case "entregue":
      return "Seu pedido foi entregue!";
  }
}

console.log(verificarPedido("enviado"));
console.log(verificarPedido("pendente"));

// Exercício 5: Discriminated Unions (Uniões Discriminadas)
// Um padrão poderoso usando uma propriedade comum (discriminante)
type FormaGeometrica = 
  | { tipo: "circulo"; raio: number }
  | { tipo: "retangulo"; largura: number; altura: number }
  | { tipo: "triangulo"; base: number; altura: number };

function calcularArea(forma: FormaGeometrica): number {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.raio ** 2;
    case "retangulo":
      return forma.largura * forma.altura;
    case "triangulo":
      return (forma.base * forma.altura) / 2;
  }
}

console.log("Área do círculo:", calcularArea({ tipo: "circulo", raio: 5 }).toFixed(2));
console.log("Área do retângulo:", calcularArea({ tipo: "retangulo", largura: 10, altura: 5 }));
console.log("Área do triângulo:", calcularArea({ tipo: "triangulo", base: 8, altura: 6 }));

// Exercício 6: Union types com arrays
// Arrays que podem conter múltiplos tipos
let valores: (string | number)[] = [1, "dois", 3, "quatro"];

console.log("Valores mistos:", valores);

// Exercício 7: Verificando se um valor é de um tipo específico
function isString(valor: any): valor is string {
  return typeof valor === "string";
}

const teste1: any = "texto";
const teste2: any = 123;

console.log("teste1 é string?", isString(teste1));
console.log("teste2 é string?", isString(teste2));
