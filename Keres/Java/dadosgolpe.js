document.addEventListener("DOMContentLoaded", function () {

    const STORAGE_KEY = "aidrasyl_dados";

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

    let inicializado = false;

    function inicializarSiHaceFalta() {

        if (inicializado) return;

        // 🔥 inicializar SIEMPRE una vez
        cargar();
        sincronizarConMaximos();
        renderDados();

        inicializado = true;
    }

    /* =========================
       CALCULAR MÁXIMOS
    ========================== */

    function calcularMaximos() {

        const maximos = {};

        const c1 = clase1.value;
        const n1 = parseInt(nivel1.value) || 0;

        const c2 = clase2.value;
        const n2 = parseInt(nivel2.value) || 0;

        if (c1 && dadosPorClase[c1] && n1 > 0) {
            const dado = dadosPorClase[c1];
            maximos[dado] = (maximos[dado] || 0) + n1;
        }

        if (c2 && dadosPorClase[c2] && n2 > 0) {
            const dado = dadosPorClase[c2];
            maximos[dado] = (maximos[dado] || 0) + n2;
        }

        return maximos;
    }

    /* =========================
       GUARDAR / CARGAR
    ========================== */

    function guardar() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reservas));
    }

    function cargar() {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (data) {
            reservas = data;
        } else {
            // 🔥 primera vez → llenar al máximo
            reservas = calcularMaximos();
            guardar();
        }
    }

    /* =========================
       SINCRONIZAR (clave)
    ========================== */

    function sincronizarConMaximos() {

        const maximos = calcularMaximos();

        Object.keys(maximos).forEach(dado => {

            if (!(dado in reservas)) {
                // nuevo tipo de dado → llenar al máximo
                reservas[dado] = maximos[dado];
            }

            // ❌ ELIMINADO: no rellenar automáticamente

            // ajustar si supera el máximo (por bajada de nivel)
            if (reservas[dado] > maximos[dado]) {
                reservas[dado] = maximos[dado];
            }
        });

        // eliminar dados que ya no existen
        Object.keys(reservas).forEach(dado => {
            if (!(dado in maximos)) {
                delete reservas[dado];
            }
        });
    }

    /* =========================
       RENDER
    ========================== */

    function renderDados() {

        dadosContainer.innerHTML = "";

        if (Object.keys(reservas).length === 0) {
            dadosContainer.innerHTML = "<div>Sin dados disponibles</div>";
            return;
        }

        // 🔥 botón reset
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "Restablecer Dados";
        resetBtn.type = "button";

        resetBtn.onclick = () => {
            reservas = calcularMaximos();
            guardar();
            renderDados();
        };

        dadosContainer.appendChild(resetBtn);

        Object.keys(reservas).forEach(dado => {

            const div = document.createElement("div");
            div.classList.add("dado-linea");

            div.innerHTML = `
                <span class="cantidad" id="reserva-${dado}">${reservas[dado]}</span>
                <span class="tipo">${dado.toUpperCase()}</span>
                <button type="button">Gastar</button>
            `;

            const boton = div.querySelector("button");

            boton.addEventListener("click", function () {
                if (reservas[dado] > 0) {
                    reservas[dado]--;
                    document.getElementById("reserva-" + dado).textContent = reservas[dado];
                    guardar();
                }
            });

            dadosContainer.appendChild(div);
        });
    }

    /* =========================
       ACTUALIZAR TODO
    ========================== */

    function actualizar() {

        if (!inicializado) return;

        sincronizarConMaximos();
        guardar();
        renderDados();
    }

    /* =========================
       EVENTOS
    ========================== */

    clase1.addEventListener("change", actualizar);
    clase2.addEventListener("change", actualizar);
    nivel1.addEventListener("input", actualizar);
    nivel2.addEventListener("input", actualizar);

    document.addEventListener("change", inicializarSiHaceFalta);

    setTimeout(() => {
        inicializarSiHaceFalta();
    }, 0);

});

