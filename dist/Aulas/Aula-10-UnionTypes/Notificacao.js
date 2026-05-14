function enviar(notificacao) {
    switch (notificacao.tipo) {
        case "email":
            console.log(`Email para ${notificacao.destinatario}: ${notificacao.mensagem}`);
            break;
        case "push":
            console.log(`Push - ${notificacao.titulo}: ${notificacao.corpo}`);
            break;
        case "sms":
            console.log(`SMS para ${notificacao.telefone}: ${notificacao.texto}`);
            break;
    }
}
const email = {
    tipo: "email",
    destinatario: "joao@email.com",
    mensagem: "Olá, seja bem-vindo!"
};
const push = {
    tipo: "push",
    titulo: "Nova mensagem",
    corpo: "Você tem uma nova mensagem"
};
const sms = {
    tipo: "sms",
    telefone: "11999999999",
    texto: "Seu código é 1234"
};
enviar(email);
enviar(push);
enviar(sms);
export {};
