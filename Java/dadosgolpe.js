document.addEventListener("DOMContentLoaded", function () {

    const clase1 = document.getElementById("clase");
    const nivel1 = document.getElementById("nivel1");

    const clase2 = document.getElementById("clase2");
    const nivel2 = document.getElementById("nivel2");

    const dadosContainer = document.getElementById("dadosContainer");

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

    let reservas = {};

    function actualizarDados() {

        reservas = {};

        const c1 = clase1.value;
        const n1 = parseInt(nivel1.value) || 0;

        const c2 = clase2.value;
        const n2 = parseInt(nivel2.value) || 0;

        if (c1 && dadosPorClase[c1]) {
            const dado = dadosPorClase[c1];
            reservas[dado] = (reservas[dado] || 0) + n1;
        }

        if (c2 && dadosPorClase[c2] && n2 > 0) {
            const dado = dadosPorClase[c2];
            reservas[dado] = (reservas[dado] || 0) + n2;
        }

        renderDados();
    }

    function renderDados() {
        dadosContainer.innerHTML = "";

        Object.keys(reservas).forEach(dado => {

            const div = document.createElement("div");
            div.innerHTML = `
                <span>${dado}</span>
                <span id="reserva-${dado}">${reservas[dado]}</span>
                <button onclick="gastarDado('${dado}')">Gastar</button>
            `;

            dadosContainer.appendChild(div);
        });
    }

    window.gastarDado = function(dado) {

        if (reservas[dado] > 0) {
            reservas[dado]--;
            document.getElementById("reserva-" + dado).textContent = reservas[dado];
        }
    }

    clase1.addEventListener("change", actualizarDados);
    clase2.addEventListener("change", actualizarDados);
    nivel1.addEventListener("input", actualizarDados);
    nivel2.addEventListener("input", actualizarDados);

    actualizarDados();
});
