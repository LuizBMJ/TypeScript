function printValue(value) {
    if (typeof value === "string") {
        console.log(`O valor é uma string: ${value}`);
    }
    else {
        console.log(`O valor é um número: ${value}`);
    }
}
printValue("Olá, mundo!");
printValue(42);
export {};
