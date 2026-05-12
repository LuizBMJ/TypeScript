interface Funcionario {
  nome: string;
  salario: number;
}

interface Gerente {
  departamento: string;
  bonus: number;
}

type FuncionarioGerente = Funcionario & Gerente;

const gerente: FuncionarioGerente = {
  nome: "Roberto",
  salario: 8000,
  departamento: "Vendas",
  bonus: 2000
};

console.log("Gerente:", gerente);
console.log("Salário total:", gerente.salario + gerente.bonus);