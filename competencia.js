document.addEventListener("DOMContentLoaded", function() {

    const nivelInput = document.getElementById("nivel");
    const competenciaInput = document.getElementById("competencia");

    function calcularCompetencia(nivel) {

        if (nivel >= 29) return 9;
        if (nivel >= 25) return 8;
        if (nivel >= 21) return 7;
        if (nivel >= 17) return 6;
        if (nivel >= 13) return 5;
        if (nivel >= 9) return 4;
        if (nivel >= 5) return 3;

        return 2; // nivel 1-4
    }

    function actualizarCompetencia() {

        const nivel = parseInt(nivelInput.value) || 1;
        const bono = calcularCompetencia(nivel);

        competenciaInput.value = "+" + bono;
    }

    nivelInput.addEventListener("input", actualizarCompetencia);

    actualizarCompetencia(); // inicializar al cargar
});
