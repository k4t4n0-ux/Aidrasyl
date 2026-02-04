const pgActualesInput = document.getElementById("pgActuales");
const pgMaximosInput = document.getElementById("pgMaximos");
const pgTemporalesInput = document.getElementById("pgTemporales");

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

function obtenerPGTemp() {
    return parseInt(pgTemporalesInput.value) || 0;
}

function actualizarPGTemp(nuevoValor) {
    if (nuevoValor < 0) nuevoValor = 0;
    pgTemporalesInput.value = nuevoValor;
}

function restarPGTemp(cantidad) {
    const actuales = obtenerPGTemp();
    actualizarPGTemp(actuales - cantidad);
}

function sumarPGTemp(cantidad) {
    const actuales = obtenerPGTemp();
    actualizarPGTemp(actuales + cantidad);
}
