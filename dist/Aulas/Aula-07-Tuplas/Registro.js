function criarRegistro(nome, idade, aprovado) {
    return [nome, idade, aprovado];
}
function mostrarRegistro(reg) {
    console.log(`Nome: ${reg[0]}, Idade: ${reg[1]}, Aprovado: ${reg[2]}`);
}
const aluno1 = criarRegistro("João", 20, true);
const aluno2 = criarRegistro("Maria", 18, false);
mostrarRegistro(aluno1);
mostrarRegistro(aluno2);
const [nome, idade, status] = aluno1;
console.log(`${nome} tem ${idade} anos e foi ${status ? "aprovado" : "reprovado"}`);
export {};
