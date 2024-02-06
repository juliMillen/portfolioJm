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


document.getElementById('downloadLink').addEventListener('click', function(event) {
    this.href= "style/img/cv-JulianMillen.pdf"
    //abre el enlace en otra pestaña
    this.target= "_blank"
  });
  

function enviarFormulario() {
    var templateParams = {
        nombre: document.getElementsByName('nombre')[0].value,
        email: document.getElementsByName('email')[0].value,
        mensaje: document.getElementsByName('mensaje')[0].value
    };

    emailjs.send("service_9mawvgn", "julimillen@gmail.com", templateParams)
        .then(function(response) {
            console.log("Mensaje enviado con éxito:", response);
            // redirigir al usuario o mostrar un mensaje de éxito.
        }, function(error) {
            console.error("Error al enviar el mensaje:", error);
            // mostrar un mensaje de error al usuario.
        });
}