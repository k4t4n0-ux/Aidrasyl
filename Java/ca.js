document.addEventListener("DOMContentLoaded", function() {

    const caInput = document.getElementById("ca");
    const escudo = document.getElementById("escudo");

    function clampCA() {
        let valor = parseInt(caInput.value);
        if (isNaN(valor) || valor < 0) valor = 0;
        caInput.value = valor;
    }

    function actualizarEscudo() {
        clampCA();

        if (escudo.checked) {
            caInput.value = parseInt(caInput.value) + 2;
        } else {
            caInput.value = parseInt(caInput.value) - 2;
            if (caInput.value < 0) caInput.value = 0;
        }
    }

    escudo.addEventListener("change", actualizarEscudo);
    caInput.addEventListener("input", clampCA);

});