
$(document).ready(function() {
    // Função para exibir um alerta quando o formulário é enviado
    $('form').on('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        alert('Obrigado por entrar em contato! Responderemos em breve.');
        $(this).trigger('reset'); // Limpa o formulário após o envio
    });
});
