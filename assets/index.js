document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('_7p1Ob3aI8bwK1rZO'); // Tu User ID

    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();

      emailjs.sendForm('service_d81x3ou', 'template_u0vsjo4', this)
        .then(function (response) {
          iziToast.success({
            title: 'Felicidades',
            message: 'Tu mensaje fue enviado correctamente!',
            position: 'topRight'
          });
          document.getElementById('contact-form').reset();
        })
        .catch(function (error) {
          iziToast.error({
            title: 'Error',
            message: 'Hubo un error al enviar tu mensaje',
            position: 'topRight'
          });
          console.error('EmailJS Error:', error);
        });
    });
  });