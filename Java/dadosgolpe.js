document.addEventListener("DOMContentLoaded", function() {

    const nivelInput = document.getElementById("nivel");
    const dadosDisponiblesSpan = document.getElementById("dadosDisponibles");
    const tipoDadoSpan = document.getElementById("tipoDado");

    let dadosDisponibles = 0;

    function actualizarDadosPorNivel() {
        const nivel = parseInt(nivelInput.value) || 1;
        dadosDisponibles = nivel; // En D&D normal: 1 dado por nivel
        dadosDisponiblesSpan.textContent = dadosDisponibles;
    }

    // GASTAR DADO
    window.gastoDado = function() {
        if (dadosDisponibles > 0) {
            dadosDisponibles--;
            dadosDisponiblesSpan.textContent = dadosDisponibles;
        }
    };

    // Cuando cambie el nivel
    nivelInput.addEventListener("input", actualizarDadosPorNivel);

    // Inicializar al cargar
    actualizarDadosPorNivel();

});
