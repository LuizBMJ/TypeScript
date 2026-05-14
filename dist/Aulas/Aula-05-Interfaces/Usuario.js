const usuario = {
    nome: "Carlos",
    email: "carlos@email.com",
    idade: 28
};
console.log("Usuário:", usuario);
function mostrarUsuario(u) {
    console.log(`Nome: ${u.nome}, Email: ${u.email}, Idade: ${u.idade}`);
}
mostrarUsuario(usuario);
export {};
