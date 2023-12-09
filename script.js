document.addEventListener('DOMContentLoaded', function () {
    const tarjeta = document.getElementById('tarjeta');
    const cumplidoElement = document.getElementById('cumplido');
    const btnCargarFrase = document.getElementById('cargarFrase');
  
    let cumplidos = []; // Array para almacenar los cumplidos
  
    // Cargar cumplidos desde el archivo JSON
    function cargarCumplidos() {
      fetch('cumplidos.json')
        .then(response => response.json())
        .then(data => {
          cumplidos = data.cumplidos;
          mostrarCumplidoAleatorio();
        })
        .catch(error => console.error('Error cargando el archivo JSON:', error));
    }
  
    // Mostrar un cumplido aleatorio
    function mostrarCumplidoAleatorio() {
      const cumplidoIndex = Math.floor(Math.random() * cumplidos.length);
      cumplidoElement.textContent = cumplidos[cumplidoIndex];
    }
  
    // Cargar frase al hacer clic en el botón
    btnCargarFrase.addEventListener('click', function () {
      mostrarCumplidoAleatorio();
    });
  
    // Inicializar al cargar la página
    cargarCumplidos();
  });
  