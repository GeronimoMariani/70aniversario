// ============================================
// MAIN - FUNCIONES GLOBALES
// ============================================

/**
 * Desplazarse suavemente a una sección
 * @param {string} sectionId - ID de la sección
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Actualizar estado del header al hacer scroll
 */
function updateHeaderOnScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
}

/**
 * Inicializar eventos
 */
function initializeEvents() {
    // Scroll event
    window.addEventListener('scroll', updateHeaderOnScroll);
    
    // Cerrar menú mobile al hacer clic en un link (si existe)
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Aquí puedes agregar lógica para cerrar el menú mobile si lo implementas
        });
    });
}

/**
 * Inicialización general
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeEvents();
    console.log('Sitio web del 70º Aniversario de Bomberos de Colón cargado correctamente');
});

// Manejar cambios de tamaño de ventana
window.addEventListener('resize', function() {
    // Aquí puedes agregar lógica responsive si es necesario
});
