document.addEventListener("DOMContentLoaded", function () {

    const nivel1 = document.getElementById("nivel1");
    const nivel2 = document.getElementById("nivel2");
    const nivelTotal = document.getElementById("nivelTotal");
    const competenciaInput = document.getElementById("competencia");

    function calcularCompetencia(nivel) {

        if (nivel >= 29) return 9;
        if (nivel >= 25) return 8;
        if (nivel >= 21) return 7;
        if (nivel >= 17) return 6;
        if (nivel >= 13) return 5;
        if (nivel >= 9) return 4;
        if (nivel >= 5) return 3;

        return 2;
    }

    function actualizarTodo() {

        const n1 = parseInt(nivel1.value) || 0;
        const n2 = parseInt(nivel2.value) || 0;

        if (n1 + n2 > 30) {
            n2 = 30 - n1;
            if (n2 < 0) n2 = 0;
            nivel2.value = n2;
        }

        const total = n1 + n2;

        nivelTotal.value = total;

        const bono = calcularCompetencia(total);
        competenciaInput.value = "+" + bono;
    }

    nivel1.addEventListener("input", actualizarTodo);
    nivel2.addEventListener("input", actualizarTodo);

    actualizarTodo();
});
