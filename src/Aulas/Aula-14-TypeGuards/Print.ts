
// typeof

function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(`O valor é uma string: ${value}`);
    } else {
        console.log(`O valor é um número: ${value}`);
    } 
}

printValue("Olá, mundo!");
printValue(42);