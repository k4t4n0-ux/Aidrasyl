document.addEventListener("DOMContentLoaded", function() {

    const dadosDisponiblesSpan = document.getElementById("dadosDisponibles");

    function obtenerDados() {
        return parseInt(dadosDisponiblesSpan.textContent) || 0;
    }

    function actualizarDados(nuevoValor) {
        if (nuevoValor < 0) nuevoValor = 0;
        dadosDisponiblesSpan.textContent = nuevoValor;
    }

    window.gastoDado = function() {
        const actuales = obtenerDados();
        if (actuales > 0) {
            actualizarDados(actuales - 1);
        }
    };

});
