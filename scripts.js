

$(document).ready(function() {
   
    $('form').on('submit', function(event) {
        event.preventDefault(); 
        alert('Obrigado por entrar em contato! Responderemos em breve.');
        $(this).trigger('reset'); 
    });
});