document.addEventListener("DOMContentLoaded", function () {

    const claseSelect = document.getElementById("clase");
    const nivelInput = document.getElementById("nivel");

    const tipoDadoSpan = document.getElementById("tipoDado");
    const dadosSpan = document.getElementById("dadosDisponibles");

    // Tabla de dados por clase
    const dadosPorClase = {
        artificiero: "d8",
        barbaro: "d12",
        bardo: "d8",
        clerigo: "d8",
        druida: "d8",
        luchador: "d10",
        monje: "d8",
        paladin: "d10",
        explorador: "d10",
        picaro: "d8",
        hechicero: "d6",
        brujo: "d8",
        mago: "d6",
        cazador_sangre: "d10",
        psionico: "d8"
    };

    function actualizarDados() {
        const clase = claseSelect.value;
        const nivel = parseInt(nivelInput.value) || 0;

        // Actualizar tipo de dado
        if (dadosPorClase[clase]) {
            tipoDadoSpan.textContent = dadosPorClase[clase];
        } else {
            tipoDadoSpan.textContent = "—";
        }

        // Actualizar reserva = nivel
        dadosSpan.textContent = nivel > 0 ? nivel : 0;
    }

    // Función para gastar dado
    window.gastoDado = function () {
        let actuales = parseInt(dadosSpan.textContent) || 0;
        if (actuales > 0) {
            dadosSpan.textContent = actuales - 1;
        }
    };

    // Eventos
    claseSelect.addEventListener("change", actualizarDados);
    nivelInput.addEventListener("input", actualizarDados);

    // Inicializar al cargar
    actualizarDados();
});
