// Configuración de la fecha de regreso
const fechaRegreso = new Date('2024-11-22T21:00:00').getTime(); // Reemplaza esta fecha con la fecha de regreso real

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaRegreso - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');

    if (timeRemaining <= 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("welcomeBack").style.display = "block";
    } else {
        // Actualizar el contador en pantalla
        const intervalo = setInterval(actualizarContador, 1000);
    }
   
}

// Actualiza el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlidePosition() {
  const carousel = document.querySelector('.carousel-images');
  carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function moveSlide(n) {
  currentSlide = (currentSlide + n + totalSlides) % totalSlides;
  updateSlidePosition();
}

// Auto-slide cada 5 segundos (opcional)
setInterval(() => {
  moveSlide(1);
}, 11500);
