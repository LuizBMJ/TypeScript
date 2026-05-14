const alunos = [
    {
        nome: "Ana",
        matricula: "2024001",
        temBolsa: true,
        valorBolsa: 500
    },
    {
        nome: "Carlos",
        matricula: "2024002",
        temBolsa: false,
        valorBolsa: 0
    }
];
console.log("Alunos:");
alunos.forEach(aluno => {
    const bolsaTexto = aluno.temBolsa ? `R$ ${aluno.valorBolsa}` : "Sem bolsa";
    console.log(`  ${aluno.nome} - ${aluno.matricula} - ${bolsaTexto}`);
});
export {};
