// Aula 08 - Enums

// Exercício 1: Enum numérico básico
// Por padrão, enums numéricos começam em 0 e incrementam automaticamente
enum Status {
  Pendente,   // 0
  Processando, // 1
  Concluido,   // 2
  Falhou       // 3
}

let statusPedido: Status = Status.Pendente;
console.log("Status do pedido:", statusPedido); // 0
console.log("Nome do status:", Status[statusPedido]); // "Pendente"

// Exercício 2: Enum numérico com valores iniciais personalizados
// Podemos definir o valor inicial ou valores específicos para cada item
enum CodigoHTTP {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500
}

console.log("Código OK:", CodigoHTTP.OK);
console.log("Código Not Found:", CodigoHTTP.NotFound);

// Exercício 3: String Enum
// Enums de string são mais legíveis quando depuramos o código
enum Direcao {
  Norte = "NORTE",
  Sul = "SUL",
  Leste = "LESTE",
  Oeste = "OESTE"
}

let direcaoAtual: Direcao = Direcao.Norte;
console.log("Direção atual:", direcaoAtual);

// Exercício 4: Enum em estruturas condicionais
function verificarStatus(status: Status): string {
  switch (status) {
    case Status.Pendente:
      return "O pedido está pendente.";
    case Status.Processando:
      return "O pedido está sendo processado.";
    case Status.Concluido:
      return "O pedido foi concluído com sucesso!";
    case Status.Falhou:
      return "Houve uma falha no processamento do pedido.";
    default:
      return "Status desconhecido.";
  }
}

console.log(verificarStatus(Status.Concluido));
console.log(verificarStatus(Status.Falhou));

// Exercício 5: Enum com valores calculados
enum Tamanho {
  Pequeno = 10,
  Medio = Pequeno * 2, // 20
  Grande = Medio * 2    // 40
}

console.log("Tamanhos:", Tamanho.Pequeno, Tamanho.Medio, Tamanho.Grande);

// Exercício 6: Const Enum
// Const enums são removidos durante a compilação e melhoram a performance
const enum Cores {
  Vermelho = "VERMELHO",
  Verde = "VERDE",
  Azul = "AZUL"
}

const corFavorita = Cores.Azul;
console.log("Cor favorita:", corFavorita);

// Exercício 7: Iterando sobre um Enum (apenas para enums numéricos)
// Podemos listar todos os valores de um enum numérico
console.log("Valores do enum Status:");
for (const valor in Status) {
  // Enums numéricos têm tanto chaves numéricas quanto string
  if (isNaN(Number(valor))) {
    console.log(`${valor}: ${Status[valor as any]}`);
  }
}
