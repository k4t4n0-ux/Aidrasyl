document.addEventListener("DOMContentLoaded", function() {

    const claseSelect = document.getElementById("clase");
    const nivelInput = document.getElementById("nivel");

    const tipoDadoSpan = document.getElementById("tipoDado");
    const dadosDisponiblesSpan = document.getElementById("dadosDisponibles");
    const resultadoDadosSpan = document.getElementById("resultadoDados");

    const claseDadoMap = {
        mago: 6,
        psionico: 6,
        hechicero: 6,

        artificiero: 8,
        bardo: 8,
        clerigo: 8,
        druida: 8,
        monje: 8,
        picaro: 8,
        brujo: 8,

        cazador_sangre: 10,
        explorador: 10,
        paladin: 10,
        luchador: 10,

        barbaro: 12
    };

    let dadosEnReserva = 0;

    function actualizarDados() {

        const nivel = parseInt(nivelInput.value) || 0;
        const clase = claseSelect.value;

        const tipoDado = claseDadoMap[clase] || 6;

        dadosEnReserva = nivel;

        tipoDadoSpan.textContent = "D" + tipoDado;
        dadosDisponiblesSpan.textContent = dadosEnReserva;
    }

    // Cuando cambia nivel o clase
    nivelInput.addEventListener("input", actualizarDados);
    claseSelect.addEventListener("change", actualizarDados);

    window.tirarUnDado = function() {

        if (dadosEnReserva <= 0) return;

        const clase = claseSelect.value;
        const tipoDado = claseDadoMap[clase] || 6;

        const tirada = Math.floor(Math.random() * tipoDado) + 1;

        dadosEnReserva--;
        dadosDisponiblesSpan.textContent = dadosEnReserva;
        resultadoDadosSpan.textContent = tirada;
    };

});
