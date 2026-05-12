

function main(value: string[] | Date) {
    if ("push" in value) {
        console.log("O valor é um array de strings:", value);
    } else {
        console.log("O valor é uma data:", value);
    }
}