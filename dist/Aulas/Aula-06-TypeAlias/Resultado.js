function buscar(id) {
    if (id > 0) {
        return { sucesso: true, dados: `Usuário ${id}` };
    }
    return { sucesso: false, erro: "ID inválido" };
}
const ok = buscar(1);
const fail = buscar(-1);
console.log("OK:", ok);
console.log("Fail:", fail);
if (ok.sucesso) {
    console.log("Dados:", ok.dados);
}
else {
    console.log("Erro:", ok.erro);
}
export {};
