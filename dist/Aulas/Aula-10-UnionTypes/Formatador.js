function formatarID(id) {
    return `ID: ${id}`;
}
function processarID(id) {
    if (typeof id === "string") {
        return `ID textual: ${id.toUpperCase()}`;
    }
    return `ID numérico: ${id * 10}`;
}
const id1 = "abc123";
const id2 = 42;
console.log(formatarID(id1));
console.log(formatarID(id2));
console.log(processarID(id1));
console.log(processarID(id2));
function mostrarID(id) {
    console.log("ID recebido:", id);
}
mostrarID("texto");
mostrarID(123);
export {};
