document.addEventListener("DOMContentLoaded", function() {

    const pgActualesInput = document.getElementById("pgActuales");
    const pgMaximosInput = document.getElementById("pgMaximos");
    const pgTemporalesInput = document.getElementById("pgTemporales");

    /* =========================
       UTILIDADES
    ========================== */

    function dispararCambio(el) {
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function getMax() {
        return parseInt(pgMaximosInput.value) || 0;
    }

    function getActual() {
        return parseInt(pgActualesInput.value) || 0;
    }

    function getTemp() {
        return parseInt(pgTemporalesInput.value) || 0;
    }

    function clampActual(valor) {
        const max = getMax();

        if (valor < 0) valor = 0;
        if (valor > max) valor = max;

        pgActualesInput.value = valor;
    }

    function clampMax(valor) {
        if (valor < 0) valor = 0;

        pgMaximosInput.value = valor;

        // Si bajas los máximos y los actuales lo superan → ajustar
        if (getActual() > valor) {
            pgActualesInput.value = valor;
        }
    }

    window.modificarPG = function(cantidad) {
        clampActual(getActual() + cantidad);
        dispararCambio(pgActualesInput);
    };

    window.modificarPGMax = function(cantidad) {
        clampMax(getMax() + cantidad);
        dispararCambio(pgMaximosInput);
    };

    window.modificarPGTemp = function(cantidad) {
        let nuevo = getTemp() + cantidad;
        if (nuevo < 0) nuevo = 0;

        pgTemporalesInput.value = nuevo;
        dispararCambio(pgTemporalesInput);
    };
});