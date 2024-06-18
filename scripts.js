<script>
document.addEventListener('DOMContentLoaded', function () {
    function cambiarSeccion(seccion) {
        // Oculta todas las secciones
        document.querySelectorAll('section').forEach(function (el) {
            el.style.display = 'none';
        });
        // Muestra la sección seleccionada
        document.getElementById(seccion).style.display = 'block';
    }

    // Añade el event listener a cada enlace en la navegación
    document.querySelectorAll('nav a').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();  // Evita que el navegador salte a la sección
            var seccion = this.getAttribute('href').substring(1); // Obtiene el ID de la sección
            cambiarSeccion(seccion); // Cambia la sección visible
        });
    });

    // Muestra la sección de inicio por defecto al cargar la página
    cambiarSeccion('inicio');
});
.menu-toggle {
    display: none;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    nav ul {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: -100%;
        background: #0000ff;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
    }

    nav ul.active {
        left: 0;
    }

    nav ul li {
        margin-top: 20px;
    }
}

</script>
