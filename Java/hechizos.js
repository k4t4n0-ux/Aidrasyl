document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("bloquehechizos");
    if (!contenedor) return;

    /* =====================================================
       CONFIGURACIÓN
    ===================================================== */

    const multiplicadores = {

        // 0.33
        barbaro: 0.33,
        luchador: 0.33,
        monje: 0.33,
        picaro: 0.33,

        // 0.5
        artificiero: 0.5,
        paladin: 0.5,
        explorador: 0.5,

        // 1
        bardo: 1,
        clerigo: 1,
        druida: 1,
        hechicero: 1,
        mago: 1,
        psionico: 1
    };

    const clasesEspeciales = ["brujo", "cazador_sangre"];

    const tablaEspacios = {
        1:[2],2:[3],3:[4,2],4:[4,3],5:[4,3,2],6:[4,3,3],
        7:[4,3,3,1],8:[4,3,3,2],9:[4,3,3,3,1],10:[4,3,3,3,2],
        11:[4,3,3,3,2,1],12:[4,3,3,3,2,1],
        13:[4,3,3,3,2,1,1],14:[4,3,3,3,2,1,1],
        15:[4,3,3,3,2,1,1,1],16:[4,3,3,3,2,1,1,1],
        17:[4,3,3,3,2,1,1,1,1],
        18:[4,3,3,3,3,1,1,1,1],
        19:[4,3,3,3,3,2,1,1,1],
        20:[4,3,3,3,3,2,2,1,1]
    };

    /* =====================================================
       UTILIDADES
    ===================================================== */

    function getCompetencia() {
        const el = document.getElementById("competencia");
        return el ? parseInt(el.value.replace("+","")) || 0 : 0;
    }

    function getMod(stat) {
        const input = document.querySelector(`[data-stat="${stat}"]`);
        if (!input) return 0;
        const v = parseInt(input.value) || 10;
        return Math.floor((v - 10) / 2);
    }

    function obtenerClases() {

        const clasePrincipal = document.getElementById("clase")?.value;
        const nivelPrincipal = parseInt(document.getElementById("nivel1")?.value) || 0;

        const claseSecundaria = document.getElementById("clase2")?.value;
        const nivelSecundaria = parseInt(document.getElementById("nivel2")?.value) || 0;

        return [
            { clase: clasePrincipal, nivel: nivelPrincipal },
            { clase: claseSecundaria, nivel: nivelSecundaria }
        ].filter(c => c.clase && c.nivel > 0);
    }

    function calcularNivelLanzador() {

        let total = 0;

        const clases = obtenerClases();

        clases.forEach(c => {

            if (clasesEspeciales.includes(c.clase)) return;

            const mult = multiplicadores[c.clase] ?? 1;
            total += c.nivel * mult;
        });

        return Math.floor(total);
    }

    /* =====================================================
       GENERAR ESPACIOS
    ===================================================== */

    function generarEspacios(nivel) {

        contenedor.innerHTML = "";

        if (nivel < 1 || !tablaEspacios[nivel]) return;

        const titulo = document.createElement("h3");
        titulo.textContent = `Nivel de Lanzador: ${nivel}`;
        contenedor.appendChild(titulo);

        tablaEspacios[nivel].forEach((cantidad, i) => {

            const nivelHechizo = i + 1;

            const fila = document.createElement("div");
            fila.className = "fila-espacios";

            const label = document.createElement("span");
            label.textContent = `Nivel ${nivelHechizo}: `;
            fila.appendChild(label);

            for (let j = 0; j < cantidad; j++) {
                const check = document.createElement("input");
                check.type = "checkbox";
                fila.appendChild(check);
            }

            contenedor.appendChild(fila);
        });
    }

    /* =====================================================
       PANEL CD Y ATAQUE
    ===================================================== */

    const panel = document.createElement("div");
    panel.innerHTML = `
        <hr>
        <label>Característica Lanzamiento</label>
        <select id="statHechizos">
            <option>Inteligencia</option>
            <option>Sabiduria</option>
            <option>Carisma</option>
        </select>

        <div>CD Salvación: <span id="cdHechizos">10</span></div>
        <div>Bonif. Ataque: <span id="ataqueHechizos">+0</span></div>
    `;

    contenedor.after(panel);

    function actualizarCD() {

        const stat = document.getElementById("statHechizos").value;
        const mod = getMod(stat);
        const competencia = getCompetencia();

        const cd = 8 + competencia + mod;
        const ataque = competencia + mod;

        document.getElementById("cdHechizos").textContent = cd;
        document.getElementById("ataqueHechizos").textContent =
            ataque >= 0 ? "+" + ataque : ataque;
    }

    /* =====================================================
       ACTUALIZACIÓN GLOBAL
    ===================================================== */

    function actualizarHechizos() {

        const nivelLanzador = calcularNivelLanzador();
        generarEspacios(nivelLanzador);
        actualizarCD();
    }

    document.addEventListener("input", actualizarHechizos);
    document.addEventListener("change", actualizarHechizos);

    actualizarHechizos();
});