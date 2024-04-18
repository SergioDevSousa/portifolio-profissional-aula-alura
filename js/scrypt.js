// Seu JavaScript de validação aqui
document.getElementById("contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja submetido normalmente

    
    // var nome = document.getElementById("nome").value;
    // var email = document.getElementById("email").value;
    // var assunto = document.getElementById("assunto").value;
    // var mensagem = document.getElementById("mensagem").value;

    var errorMessages = []

    
    if (nome === "") {
        errorMessages.push('Preencha o campo nome!');
    }
    if (email === "") {
        errorMessages.push('Email de preenchimento obrigatório!');
    } else if (!isValidEmail(email)) {
        errorMessages.push('Por favor, insira um e-mail válido!');
    }
    if (mensagem === "") {
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
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// const spriteWidth = 256; // Largura de cada quadro da animação
// const frames = 6; // Número total de quadros na imagem sprite
// let currentFrame = 0; // Quadro atual

// function animateSprite() {
//     const imageElement = document.getElementById("image");
//     const offset = -currentFrame * spriteWidth;
//     imageElement.style.backgroundPosition = `${offset}px 0px`;

//     currentFrame = (currentFrame + 1) % frames;
//     requestAnimationFrame(animateSprite);
// }

// animateSprite();
