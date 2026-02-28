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

};


// =============================
// SELECT SUPERIOR
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
// BLOQUE ESPECIE
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

                <div class="campo-resistencias">
                    <label>Resistencias</label>
                    <input type="text" id="resistenciasEspecie">

                    <label>Inmunidades</label>
                    <input type="text" id="inmunidadesEspecie">
                </div>

                <hr>

                <div id="listaRasgosEspecie"></div>

            </div>
        </div>
    `;

    const toggle = document.getElementById("toggleEspecie");
    const contenido = document.getElementById("contenidoEspecie");
    const infoBase = document.getElementById("infoBaseEspecie");
    const lista = document.getElementById("listaRasgosEspecie");
    const titulo = document.getElementById("tituloEspecie");

    contenido.style.display = "none";

    toggle.addEventListener("click", () => {
        const abierta = contenido.style.display === "block";
        contenido.style.display = abierta ? "none" : "block";
        toggle.textContent = abierta ? "▼" : "▲";
    });

    // =============================
    // CAMBIO DE ESPECIE
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

        // Información base
        infoBase.innerHTML = `
            <p><strong>Tipo:</strong> ${especie.tipo}</p>
            <p><strong>Visión en la Oscuridad:</strong> ${especie.visionOscuridad ? "Sí" : "No"}</p>
        `;

        // Mostrar TODOS los rasgos automáticamente
        Object.entries(especie.rasgos).forEach(([nombreRasgo, descripcion]) => {

            const bloqueRasgo = document.createElement("div");
            bloqueRasgo.classList.add("rasgo-especie");

            bloqueRasgo.innerHTML = `
                <h4>${nombreRasgo}</h4>
                <p>${descripcion}</p>
            `;

            lista.appendChild(bloqueRasgo);
        });

    });

}