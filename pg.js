const pgActualesInput = document.getElementById("pgActuales");
const pgMaximosInput = document.getElementById("pgMaximos");

function obtenerValores() {
    const actuales = parseInt(pgActualesInput.value) || 0;
    const maximos = parseInt(pgMaximosInput.value) || 0;
    return { actuales, maximos };
}

function actualizarPG(nuevoValor) {
    const { maximos } = obtenerValores();

    // Limitar entre 0 y máximo
    if (nuevoValor < 0) nuevoValor = 0;
    if (nuevoValor > maximos) nuevoValor = maximos;

    pgActualesInput.value = nuevoValor;
}

function restarPG(cantidad) {
    const { actuales } = obtenerValores();
    actualizarPG(actuales - cantidad);
}

function sumarPG(cantidad) {
    const { actuales } = obtenerValores();
    actualizarPG(actuales + cantidad);
}

// Control cuando el usuario escribe manualmente
pgActualesInput.addEventListener("input", function () {
    const { actuales } = obtenerValores();
    actualizarPG(actuales);
});
