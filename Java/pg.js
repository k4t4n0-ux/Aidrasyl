document.addEventListener("DOMContentLoaded", function() {

    const pgActualesInput = document.getElementById("pgActuales");
    const pgMaximosInput = document.getElementById("pgMaximos");
    const pgTemporalesInput = document.getElementById("pgTemporales");

    // Inicializar PG actuales al máximo al cargar
    pgActualesInput.value = pgMaximosInput.value;

    // Si cambia el máximo, ajustar actuales si se pasa
    pgMaximosInput.addEventListener("change", function() {
        if (parseInt(pgActualesInput.value) > parseInt(pgMaximosInput.value)) {
            pgActualesInput.value = pgMaximosInput.value;
        }
    });

    function modificarPG(cantidad) {
        let actual = parseInt(pgActualesInput.value);
        let maximo = parseInt(pgMaximosInput.value);

        actual += cantidad;

        // Limitar entre 0 y máximo
        if (actual < 0) actual = 0;
        if (actual > maximo) actual = maximo;

        pgActualesInput.value = actual;
    }

    window.restarPG = function(cantidad) {
        modificarPG(-cantidad);
    }

    window.sumarPG = function(cantidad) {
        modificarPG(cantidad);
    }

    pgActualesInput.addEventListener("input", function() {
        const actual = parseInt(pgActualesInput.value) || 0;
        const maximo = parseInt(pgMaximosInput.value) || 0;
        if (actual > maximo) {
            pgActualesInput.value = maximo;
        }
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
