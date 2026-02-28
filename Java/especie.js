// =============================
// BASE DE DATOS DE ESPECIES
// =============================

const especiesDB = {

    "Humano": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Versatilidad Humana": `
Obtienes competencia en una habilidad de tu elección.
Además, ganas una dote de origen adicional.
            `,
            "Adaptabilidad": `
Aumenta una puntuación de característica a tu elección en 1.
            `
        }
    },

    "Elfo": {
        tipo: "Humanoide",
        visionOscuridad: true,
        rasgos: {
            "Visión en la Oscuridad": `
Puedes ver en la oscuridad hasta 60 pies como si fuera luz tenue.
            `,
            "Ascendencia Feérica": `
Tienes ventaja en tiradas contra ser Encantado y no puedes ser dormido mágicamente.
            `,
            "Trance": `
Solo necesitas 4 horas para completar un descanso largo.
            `
        }
    }

    // Puedes seguir ampliando aquí
};


// =============================
// CARGAR SELECT SUPERIOR
// =============================

const selectEspecie = document.getElementById("especieSelect");

if (selectEspecie) {
    Object.keys(especiesDB)
        .sort((a, b) => a.localeCompare(b))
        .forEach(nombre => {
            const option = document.createElement("option");
            option.value = nombre;
            option.textContent = nombre;
            selectEspecie.appendChild(option);
        });
}


// =============================
// BLOQUE DESPLEGABLE ESPECIE
// =============================

const bloqueEspecie = document.getElementById("bloqueEspecie");

if (bloqueEspecie) {

    bloqueEspecie.innerHTML = `
        <div class="dote-bloque-unico">

            <div class="dote-bloque-header">
                <strong id="tituloEspecie">Especie</strong>
                <button id="toggleEspecie">▼</button>
            </div>

            <div class="dote-bloque-body" id="contenidoEspecie">

                <div id="infoBaseEspecie"></div>

                <div id="listaRasgosEspecie"></div>

                <div class="dote-bloque-footer">
                    <button id="btnAgregarRasgoEspecie" class="btnAgregarDote">
                        + Añadir Rasgo
                    </button>
                </div>

                <div class="campo-personalizado">
                    <label>Habilidades personalizadas</label>
                    <textarea id="habilidadesPersonalizadasEspecie" rows="4"></textarea>
                </div>

            </div>
        </div>
    `;

    const toggle = document.getElementById("toggleEspecie");
    const contenido = document.getElementById("contenidoEspecie");
    const lista = document.getElementById("listaRasgosEspecie");
    const infoBase = document.getElementById("infoBaseEspecie");
    const btnAgregar = document.getElementById("btnAgregarRasgoEspecie");
    const titulo = document.getElementById("tituloEspecie");

    contenido.style.display = "none";

    toggle.addEventListener("click", () => {
        const abierta = contenido.style.display === "block";
        contenido.style.display = abierta ? "none" : "block";
        toggle.textContent = abierta ? "▼" : "▲";
    });

    // =============================
    // Cuando cambias especie arriba
    // =============================

    selectEspecie.addEventListener("change", () => {

        const nombre = selectEspecie.value;
        const especie = especiesDB[nombre];

        lista.innerHTML = "";
        infoBase.innerHTML = "";

        if (!especie) {
            titulo.textContent = "Especie";
            return;
        }

        titulo.textContent = `Especie (${nombre})`;

        infoBase.innerHTML = `
            <p><strong>Tipo:</strong> ${especie.tipo}</p>
            <p><strong>Visión en la Oscuridad:</strong> ${especie.visionOscuridad ? "Sí" : "No"}</p>
            <hr>
        `;

    });

    // =============================
    // Crear bloque de rasgo
    // =============================

    function crearBloqueRasgo() {

        const especieActual = especiesDB[selectEspecie.value];
        if (!especieActual) return;

        const contenedor = document.createElement("div");
        contenedor.classList.add("dote-item");

        contenedor.innerHTML = `
            <div class="dote-header">
                <strong class="tituloRasgo">Rasgo de Especie</strong>

                <div class="dote-header-botones">
                    <button class="toggleRasgo">▼</button>
                    <button class="btnEliminarRasgo">✖</button>
                </div>
            </div>

            <div class="dote-body">

                <select class="rasgoSelect">
                    <option value="">Seleccionar Rasgo</option>
                    ${Object.keys(especieActual.rasgos)
                        .map(r => `<option value="${r}">${r}</option>`)
                        .join("")}
                </select>

                <div class="rasgoInfo"></div>

            </div>
        `;

        const toggleR = contenedor.querySelector(".toggleRasgo");
        const body = contenedor.querySelector(".dote-body");
        const selectR = contenedor.querySelector(".rasgoSelect");
        const infoR = contenedor.querySelector(".rasgoInfo");
        const btnEliminar = contenedor.querySelector(".btnEliminarRasgo");
        const tituloR = contenedor.querySelector(".tituloRasgo");

        body.style.display = "none";

        toggleR.addEventListener("click", () => {
            const abierta = body.style.display === "block";
            body.style.display = abierta ? "none" : "block";
            toggleR.textContent = abierta ? "▼" : "▲";
        });

        selectR.addEventListener("change", () => {

            const nombreRasgo = selectR.value;

            if (!nombreRasgo) {
                infoR.innerHTML = "";
                tituloR.textContent = "Rasgo de Especie";
                return;
            }

            tituloR.textContent = `Rasgo (${nombreRasgo})`;

            infoR.innerHTML = `
                <hr>
                <p>${especieActual.rasgos[nombreRasgo]}</p>
            `;
        });

        btnEliminar.addEventListener("click", () => {
            contenedor.remove();
        });

        lista.appendChild(contenedor);
    }

    btnAgregar.addEventListener("click", crearBloqueRasgo);

}