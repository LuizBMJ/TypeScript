const produto1 = {
    id: 1,
    nome: "Notebook",
    preco: 3500,
    codigo: "NOTE001"
};
const produto2 = {
    id: 2,
    nome: "Mouse",
    preco: 150,
    descricao: "Mouse sem fio",
    codigo: "MOUSE002"
};
console.log("Produto 1:", produto1);
console.log("Produto 2:", produto2);
produto1.descricao = "Novo produto";
produto1.nome = "Notebook Gamer";
console.log("Atualizado:", produto1);
export {};
