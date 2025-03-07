// Array de feriados en Perú para el año 2025
const feriados2025 = [
    "2025-01-01", // Año Nuevo
    "2025-04-17", // Jueves Santo
    "2025-04-18", // Viernes Santo
    "2025-05-01", // Día del Trabajador
    "2025-06-29", // San Pedro y San Pablo
    "2025-07-28", // Independencia del Perú
    "2025-07-29", // Fiesta Nacional
    "2025-08-30", // Santa Rosa de Lima
    "2025-10-08", // Combate de Angamos
    "2025-11-01", // Día de Todos los Santos
    "2025-12-08", // Inmaculada Concepción
    "2025-12-25"  // Navidad
];

/**
 * Muestra el popup del calendario (donde se elige fisioterapeuta, fecha y dolencia)
 */
function showCalendar() {
    document.getElementById("calendar-popup").style.display = "block";
}

/**
 * Función que se ejecuta al presionar el botón "Confirmar"
 * Valida los campos, comprueba si la fecha elegida es un feriado y, según ello,
 * muestra un mensaje de disponibilidad y, en caso positivo, actualiza y muestra el popup de WhatsApp.
 */
function confirmarCita() {
    const fisioterapeuta = document.getElementById("fisioterapeuta").value;
    const fecha = document.getElementById("fecha").value;
    const dolencia = document.getElementById("dolencia").value;

    // Validación de campos
    if (!fisioterapeuta || !fecha || !dolencia) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Si la fecha seleccionada es un feriado, no hay disponibilidad
    if (feriados2025.includes(fecha)) {
        mostrarMensaje("El fisioterapeuta no está disponible", false);
        // Oculta el popup de WhatsApp en caso de no disponibilidad
        document.getElementById("whatsapp-popup").style.display = "none";
    } else {
        // Si la fecha no es feriado, se confirma la disponibilidad
        mostrarMensaje("El fisioterapeuta está disponible", true);
        // Actualiza el enlace de WhatsApp con los datos ingresados
        const whatsappLink = document.getElementById("whatsapp-link");
        whatsappLink.href = "https://chat.whatsapp.com/LyROmox4Poq159fyDFBCvx?text=" +
            encodeURIComponent("Hola, quiero agendar una cita con " + fisioterapeuta + " el " + fecha + " por " + dolencia);
        // Muestra el popup de WhatsApp para que el usuario se contacte
        document.getElementById("whatsapp-popup").style.display = "block";
    }
}

/**
 * Función para mostrar un mensaje de disponibilidad en pantalla.
 * Se crea un elemento que se posiciona de forma fija y se elimina automáticamente después de 3 segundos.
 * 
 * @param {string} mensaje - El mensaje a mostrar.
 * @param {boolean} disponible - Si es true, el mensaje tendrá fondo verde; si es false, fondo rojo.
 */
function mostrarMensaje(mensaje, disponible) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "availability-message";
    msgDiv.textContent = mensaje;
    msgDiv.style.backgroundColor = disponible ? "#4caf50" : "#ff4d4d"; // Verde si disponible, rojo si no.
    document.body.appendChild(msgDiv);
    setTimeout(() => {
        msgDiv.remove();
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    const row = document.querySelector('.communities-row');
    const container = document.querySelector('.container');
  
    // Agregar flechas de navegación
    const navArrows = document.createElement('div');
    navArrows.className = 'nav-arrows';
    navArrows.innerHTML = `
      <button class="nav-arrow prev-arrow">←</button>
      <button class="nav-arrow next-arrow">→</button>
    `;
    container.appendChild(navArrows);
  
    const prevArrow = container.querySelector('.prev-arrow');
    const nextArrow = container.querySelector('.next-arrow');
  
    // Función para deslizar
    const slideCards = (direction) => {
      const cardWidth = document.querySelector('.community-card').offsetWidth;
      const scrollAmount = cardWidth + 32; // 32px es el gap (2rem)
      row.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    };
  
    // Event listeners para las flechas
    prevArrow.addEventListener('click', () => slideCards('prev'));
    nextArrow.addEventListener('click', () => slideCards('next'));
  
    // Auto-scroll
    let autoScrollInterval;
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (row.scrollLeft + row.clientWidth >= row.scrollWidth) {
          row.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slideCards('next');
        }
      }, 5000); // Cambia cada 5 segundos
    };
  
    // Pausar auto-scroll cuando el usuario interactúa
    row.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    row.addEventListener('mouseleave', startAutoScroll);
  
    // Iniciar auto-scroll
    startAutoScroll();
  });

  function toggleFaq(element) {
    const faqItem = element.parentElement;
    // Alterna la clase "active" en el contenedor del FAQ
    faqItem.classList.toggle('active');
  }