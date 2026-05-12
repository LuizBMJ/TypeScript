interface Usuario {
  nome: string;
  email: string;
  idade: number;
}

const usuario: Usuario = {
  nome: "Carlos",
  email: "carlos@email.com",
  idade: 28
};

console.log("Usuário:", usuario);

function mostrarUsuario(u: Usuario): void {
  console.log(`Nome: ${u.nome}, Email: ${u.email}, Idade: ${u.idade}`);
}

mostrarUsuario(usuario);