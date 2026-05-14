function printValue(value) {
    if (typeof value === "string") {
        console.log(`O valor é uma string: ${value}`);
        return;
    }
    else if (typeof value === "number") {
        console.log(`O valor é um número: ${value}`);
        return;
    }
    else if (typeof value === "boolean") {
        console.log(`O valor é um booleano: ${value}`);
        return;
    }
}
export {};
