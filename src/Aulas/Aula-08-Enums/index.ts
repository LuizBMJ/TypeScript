enum DiaSemana {
  Segunda = "SEG",
  Terca = "TER",
  Quarta = "QUA",
  Quinta = "QUI",
  Sexta = "SEX",
  Sabado = "SAB",
  Domingo = "DOM"
}

function getProximoDia(dia: DiaSemana): DiaSemana {
  const dias = [
    DiaSemana.Segunda,
    DiaSemana.Terca,
    DiaSemana.Quarta,
    DiaSemana.Quinta,
    DiaSemana.Sexta,
    DiaSemana.Sabado,
    DiaSemana.Domingo
  ];
  const index = dias.indexOf(dia);
  return dias[(index + 1) % 7];
}

const hoje = DiaSemana.Quarta;

console.log("Hoje:", hoje);
console.log("Próximo:", getProximoDia(hoje));

console.log("Todos os dias:");
for (const dia of [
  DiaSemana.Segunda,
  DiaSemana.Terca,
  DiaSemana.Quarta,
  DiaSemana.Quinta,
  DiaSemana.Sexta,
  DiaSemana.Sabado,
  DiaSemana.Domingo
]) {
  console.log(`  ${dia}`);
}