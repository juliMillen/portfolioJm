function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

$(document).ready(function(){
    $('.slick').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
    });
});


function enviarFormulario() {
    var templateParams = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value
    };

    emailjs.send("service_9mawvgn", "julianmillen1@gmail.com", templateParams)
        .then(function(response) {
            console.log("Mensaje enviado con éxito:", response);
            // Puedes redirigir al usuario o mostrar un mensaje de éxito.
        }, function(error) {
            console.error("Error al enviar el mensaje:", error);
            // Puedes mostrar un mensaje de error al usuario.
        });
}