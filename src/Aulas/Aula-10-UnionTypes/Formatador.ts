type ID = string | number;

function formatarID(id: ID): string {
  return `ID: ${id}`;
}

function processarID(id: ID): string {
  if (typeof id === "string") {
    return `ID textual: ${id.toUpperCase()}`;
  }
  return `ID numérico: ${id * 10}`;
}

const id1: ID = "abc123";
const id2: ID = 42;

console.log(formatarID(id1));
console.log(formatarID(id2));

console.log(processarID(id1));
console.log(processarID(id2));

function mostrarID(id: ID): void {
  console.log("ID recebido:", id);
}

mostrarID("texto");
mostrarID(123);