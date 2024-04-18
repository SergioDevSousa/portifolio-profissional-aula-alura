function SubmitEvent() {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    // Por exemplo, fazer uma requisição AJAX ou redirecionar para outra página após o envio
    // Exemplo de requisição AJAX (usando jQuery):
    $.ajax({
        url: 'mailto:oxenttesergio@gmail.com', // URL do servidor onde os dados serão processados
        method: 'POST',
        data: {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            assunto: document.getElementById("assunto").value,
            mensagem: document.getElementById("mensagem").value
        },
        success: function (response) {
            // Lógica para lidar com a resposta do servidor (por exemplo, exibir uma mensagem de sucesso)
            alert('Formulário enviado com sucesso!');
        },
        error: function (error) {
            // Lógica para lidar com erros (por exemplo, exibir uma mensagem de erro)
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
        }
    });
}
