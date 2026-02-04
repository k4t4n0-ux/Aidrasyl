document.addEventListener("DOMContentLoaded", function() {

    const pgActualesInput = document.getElementById("pgActuales");
    const pgMaximosInput = document.getElementById("pgMaximos");
    const pgTemporalesInput = document.getElementById("pgTemporales");

    function obtenerValores() {
        const actuales = parseInt(pgActualesInput.value) || 0;
        const maximos = parseInt(pgMaximosInput.value) || 0;
        return { actuales, maximos };
    }

    function actualizarPG(nuevoValor) {

        if (nuevoValor < 0) nuevoValor = 0;

        pgActualesInput.value = nuevoValor;
    }

    window.restarPG = function(cantidad) {
        const { actuales } = obtenerValores();
        actualizarPG(actuales - cantidad);
    }

    window.sumarPG = function(cantidad) {
        const { actuales } = obtenerValores();
        actualizarPG(actuales + cantidad);
    }

    pgActualesInput.addEventListener("input", function () {
        const { actuales } = obtenerValores();
        actualizarPG(actuales);
    });

    function obtenerPGTemp() {
        return parseInt(pgTemporalesInput.value) || 0;
    }

    function actualizarPGTemp(nuevoValor) {
        if (nuevoValor < 0) nuevoValor = 0;
        pgTemporalesInput.value = nuevoValor;
    }

    window.restarPGTemp = function(cantidad) {
        const actuales = obtenerPGTemp();
        actualizarPGTemp(actuales - cantidad);
    }

    window.sumarPGTemp = function(cantidad) {
        const actuales = obtenerPGTemp();
        actualizarPGTemp(actuales + cantidad);
    }

});
