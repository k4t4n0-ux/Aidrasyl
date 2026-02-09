document.addEventListener("DOMContentLoaded", function () {

    const dadosSpan = document.getElementById("dadosDisponibles");

    // Inicializar a 0 si está vacío
    if (!dadosSpan.textContent.trim()) {
        dadosSpan.textContent = "0";
    }

    function obtenerDados() {
        return parseInt(dadosSpan.textContent) || 0;
    }

    function setDados(valor) {
        if (valor < 0) valor = 0;
        dadosSpan.textContent = valor;
    }

    // Función global para el botón
    window.gastoDado = function () {
        const actuales = obtenerDados();
        if (actuales > 0) {
            setDados(actuales - 1);
        }
    };

});
