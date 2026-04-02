// Seleccionamos el buttom y el body
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Verificamos si ya habia una preferencia guardada
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = 'Modo Claro';
}

// Evento al hacer clic
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Actualizamos texto boton según el modo activo
    if (body.classList.contains('dark')) {
        toggleBtn.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = 'Modo Oscuro';
        localStorage.setItem('theme', 'light');
    }
}); 
