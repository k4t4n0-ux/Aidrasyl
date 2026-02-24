document.addEventListener("DOMContentLoaded", function() {

    const pgActualesInput = document.getElementById("pgActuales");
    const pgMaximosInput = document.getElementById("pgMaximos");
    const pgTemporalesInput = document.getElementById("pgTemporales");

    /* =========================
       UTILIDADES
    ========================== */

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

    /* =========================
       PG ACTUALES
    ========================== */

    window.modificarPG = function(cantidad) {
        clampActual(getActual() + cantidad);
    };

    pgActualesInput.addEventListener("input", function() {
        clampActual(getActual());
    });

    /* =========================
       PG MÁXIMOS
    ========================== */

    window.modificarPGMax = function(cantidad) {
        clampMax(getMax() + cantidad);
    };

    pgMaximosInput.addEventListener("input", function() {
        clampMax(getMax());
    });

    /* =========================
       PG TEMPORALES
    ========================== */

    window.modificarPGTemp = function(cantidad) {
        let nuevo = getTemp() + cantidad;
        if (nuevo < 0) nuevo = 0;
        pgTemporalesInput.value = nuevo;
    };

    pgTemporalesInput.addEventListener("input", function() {
        let valor = parseInt(pgTemporalesInput.value);
        if (isNaN(valor) || valor < 0) {
            pgTemporalesInput.value = 0;
        }
    });

});