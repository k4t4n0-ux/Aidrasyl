document.addEventListener("DOMContentLoaded", function() {

    const pgActualesInput = document.getElementById("pgActuales");
    const pgMaximosInput = document.getElementById("pgMaximos");
    const pgTemporalesInput = document.getElementById("pgTemporales");

    /* =========================
       FUNCIONES PG ACTUALES
    ========================== */

    function obtenerPGMaximos() {
        return parseInt(pgMaximosInput.value) || 0;
    }

    function obtenerPGActuales() {
        return parseInt(pgActualesInput.value) || 0;
    }

    function actualizarPG(valor) {
        const max = obtenerPGMaximos();

        if (valor < 0) valor = 0;
        if (valor > max) valor = max;

        pgActualesInput.value = valor;
    }

    // FUNCIÓN GLOBAL para los botones
    window.modificarPG = function(cantidad) {
        const actuales = obtenerPGActuales();
        actualizarPG(actuales + cantidad);
    };

    // Si alguien intenta escribir manualmente
    pgActualesInput.addEventListener("input", function () {
        actualizarPG(obtenerPGActuales());
    });


    /* =========================
       FUNCIONES PG TEMPORALES
    ========================== */

    function obtenerPGTemp() {
        return parseInt(pgTemporalesInput.value) || 0;
    }

    function actualizarPGTemp(valor) {
        if (valor < 0) valor = 0;
        pgTemporalesInput.value = valor;
    }

    window.modificarPGTemp = function(cantidad) {
        const actuales = obtenerPGTemp();
        actualizarPGTemp(actuales + cantidad);
    };

});
