// Seu JavaScript de validação aqui
document.getElementById("contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja submetido normalmente

    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const errorMessages = []

    
    if (nome.trim() === " ") {
        errorMessages.push('Preencha o campo nome!');
    }
    if (email.trim() === " ") {
        errorMessages.push('Email de preenchimento obrigatório!');
    } else if (!isValidEmail(email)) {
        errorMessages.push('Por favor, insira um e-mail válido!');
    }
    if (mensagem.trim() === " ") {
        errorMessages.push('Escreva sua mensagem!');
    }

    if (errorMessages.length > 0) {
        event.preventDefault();
        alert(errorMessages.join('\n'));
    } else {
        SubmitEvent(); // Chame sua função de envio aqui
    }
    
});
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function enviarEmail() {
    var nome = encodeURIComponent(document.getElementById('nome').value);
    var email = encodeURIComponent(document.getElementById('email').value);
    var mensagem = encodeURIComponent(document.getElementById('mensagem').value);
    
    var mailtoLink = 'mailto:oxenttesergio@gmail.com' +
                     '?subject=' + encodeURIComponent('Assunto do Email') +
                     '&body=' + 'nome=' + nome + '&email=' + email + '&mensagem=' + mensagem;

    window.location.href = mailtoLink;
}
