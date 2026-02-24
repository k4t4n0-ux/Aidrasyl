function clampInputMin(input, min = 0) {
    let valor = parseInt(input.value);

    if (isNaN(valor) || valor < min) {
        input.value = min;
    }
}

function bloquearNegativos(id, min = 0) {
    const input = document.getElementById(id);
    if (!input) return;

    input.addEventListener("input", () => {
        clampInputMin(input, min);
    });
}

bloquearNegativos("velocidad", 0);