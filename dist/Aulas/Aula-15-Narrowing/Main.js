function main(value) {
    if ("push" in value) {
        console.log("O valor é um array de strings:", value);
        return;
    }
    console.log("O valor é uma data:", value);
}
main(["Olá", "mundo!"]);
main(new Date());
function handle(value) {
    if (!value) {
        console.log("O valor é nulo");
        return;
    }
    console.log("O valor é uma string:", value);
}
export {};
