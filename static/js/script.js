// Array de feriados en Perú para el año 2025
const feriados2025 = [
  "2025-01-01", "2025-04-17", "2025-04-18", "2025-05-01", 
  "2025-06-29", "2025-07-28", "2025-07-29", "2025-08-30", 
  "2025-10-08", "2025-11-01", "2025-12-08", "2025-12-25"
];

// Funcionalidad del calendario
function showCalendar() {
  document.getElementById("calendar-popup").style.display = "block";
}

function confirmarCita() {
  const fisioterapeuta = document.getElementById("fisioterapeuta").value;
  const fecha = document.getElementById("fecha").value;
  const dolencia = document.getElementById("dolencia").value;

  if (!fisioterapeuta || !fecha || !dolencia) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (feriados2025.includes(fecha)) {
    mostrarMensaje("El fisioterapeuta no está disponible", false);
    document.getElementById("whatsapp-popup").style.display = "none";
  } else {
    mostrarMensaje("El fisioterapeuta está disponible", true);
    const whatsappLink = document.getElementById("whatsapp-link");
    whatsappLink.href = `https://chat.whatsapp.com/LyROmox4Poq159fyDFBCvx?text=${
      encodeURIComponent(`Hola, quiero agendar una cita con ${fisioterapeuta} el ${fecha} por ${dolencia}`)
    }`;
    document.getElementById("whatsapp-popup").style.display = "block";
  }
}

function mostrarMensaje(mensaje, disponible) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "availability-message";
  msgDiv.textContent = mensaje;
  msgDiv.style.backgroundColor = disponible ? "#4caf50" : "#ff4d4d";
  document.body.appendChild(msgDiv);
  setTimeout(() => msgDiv.remove(), 3000);
}

// Carrusel de comunidades
document.addEventListener('DOMContentLoaded', function() {
  const row = document.querySelector('.communities-row');
  const container = document.querySelector('.container');
  
  const navArrows = document.createElement('div');
  navArrows.className = 'nav-arrows';
  navArrows.innerHTML = `
    <button class="nav-arrow prev-arrow">←</button>
    <button class="nav-arrow next-arrow">→</button>
  `;
  container.appendChild(navArrows);

  const slideCards = (direction) => {
    const cardWidth = document.querySelector('.community-card').offsetWidth;
    row.scrollBy({ left: direction === 'next' ? cardWidth + 32 : -(cardWidth + 32), behavior: 'smooth' });
  };

  container.querySelector('.prev-arrow').addEventListener('click', () => slideCards('prev'));
  container.querySelector('.next-arrow').addEventListener('click', () => slideCards('next'));

  let autoScrollInterval = setInterval(() => {
    if (row.scrollLeft + row.clientWidth >= row.scrollWidth) {
      row.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slideCards('next');
    }
  }, 5000);

  row.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
  row.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(() => {
      if (row.scrollLeft + row.clientWidth >= row.scrollWidth) {
        row.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slideCards('next');
      }
    }, 5000);
  });
});

// FAQ
function toggleFaq(element) {
  element.parentElement.classList.toggle('active');
}

// Manejo del formulario principal con efecto de carga mejorado
document.querySelector('#formulario form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  const mensajeExito = document.getElementById('mensaje-exito');

  try {
    // Estado de carga
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="button-loading">
        Enviando...
        <div class="spinner"></div>
      </span>
    `;

    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'X-CSRFToken': document.querySelector('[name="csrf_token"]').value,
        'Accept': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.error || 'Error en el servidor');

    // Éxito
    mensajeExito.style.display = 'block';
    form.reset();
    mensajeExito.scrollIntoView({ behavior: 'smooth' });

    // Restaurar formulario después de 5 segundos
    setTimeout(() => {
      mensajeExito.style.display = 'none';
    }, 5000);

  } catch (error) {
    console.error('Error:', error);
    mostrarMensaje(error.message || 'Error al procesar la solicitud', false);
  } finally {
    // Restaurar botón
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
});