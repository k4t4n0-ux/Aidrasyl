document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll(".menu-secciones button");
    const secciones = document.querySelectorAll(".seccion");

    function cambiarSeccion(nombre) {

        // ocultar todas
        secciones.forEach(sec => {
            sec.classList.remove("activa");
        });

        botones.forEach(btn => {
            btn.classList.remove("activo");
        });

        // activar la correcta
        const seccionActiva = document.querySelector(`.seccion[data-seccion="${nombre}"]`);
        const botonActivo = document.querySelector(`button[data-seccion="${nombre}"]`);

        if (seccionActiva) seccionActiva.classList.add("activa");
        if (botonActivo) botonActivo.classList.add("activo");
    }

    // listeners botones
    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            cambiarSeccion(btn.dataset.seccion);
        });
    });

    // 🔥 sección inicial
    cambiarSeccion("combate");

});

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("toggleMenu");
    const menu = document.getElementById("menuLateral");

    boton.addEventListener("click", () => {
        menu.classList.toggle("abierto");
    });
});

document.addEventListener("click", (e) => {
    const menu = document.getElementById("menuLateral");
    const boton = document.getElementById("toggleMenu");

    if (!menu.contains(e.target) && !boton.contains(e.target)) {
        menu.classList.remove("abierto");
    }
});