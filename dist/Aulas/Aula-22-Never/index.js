function throwError(message) {
    throw new Error(message);
}
function main() {
    throwError("Ocorreu um erro");
    try {
    }
    catch (err) {
        console.log("Algo saiu errado");
    }
    const name = "Rincko";
    console.log(name);
}
main();
function main02(x) {
    if (typeof x === "string") {
    }
    if (typeof x === "number") {
    }
}
main02({});
export {};
