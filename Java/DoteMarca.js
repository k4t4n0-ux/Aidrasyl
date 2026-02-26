const dotesMarcaDB = {

    "Marca de la Sombra": {
        descripcion: `
Obtienes competencia en Sigilo.

Una vez por turno, cuando impactas a una criatura que no te haya detectado, infliges daño adicional igual a tu Bono de Competencia.
        `
    },

    "Marca del Guardián": {
        descripcion: `
Cuando una criatura a 5 pies de ti sea objetivo de un ataque, puedes usar tu reacción para imponer desventaja en la tirada de ataque.

Puedes usar este beneficio un número de veces igual a tu Bono de Competencia y recuperas todos los usos al finalizar un descanso largo.
        `
    },

    "Marca del Conquistador": {
        descripcion: `
Cuando reduces a una criatura a 0 puntos de vida, obtienes Inspiración Heroica si no la tienes.

Además, tienes ventaja en la siguiente tirada de ataque que realices antes del final de tu siguiente turno.
        `
    },

    "Marca Arcana": {
        descripcion: `
Aprendes un truco de la lista de Mago.

La característica para lanzarlo es Inteligencia, Sabiduría o Carisma (eliges al seleccionar esta dote).

Puedes lanzar ese truco como acción adicional un número de veces igual a tu Bono de Competencia, recuperando todos los usos al finalizar un descanso largo.
        `
    },

    "Marca de la Vitalidad": {
        descripcion: `
Tu máximo de puntos de vida aumenta en una cantidad igual a tu nivel de personaje.

Cada vez que obtienes un nivel, tu máximo de puntos de vida aumenta en 1 adicional.
        `
    }

};

const bloqueMarca = document.getElementById("bloqueDoteMarca");

if (bloqueMarca) {

    bloqueMarca.innerHTML = `
        <div class="dote-bloque-unico">

            <div class="dote-bloque-header">
                <strong>Dotes de Marca</strong>
            </div>

            <div id="listaDotesMarca"></div>

            <div class="dote-bloque-footer">
                <button id="btnAgregarDoteMarca" class="btnAgregarDote">
                    + Añadir Marca
                </button>
            </div>

        </div>
    `;

    const lista = document.getElementById("listaDotesMarca");
    const btnAgregar = document.getElementById("btnAgregarDoteMarca");

    function crearBloqueMarca() {

        const contenedor = document.createElement("div");
        contenedor.classList.add("dote-item");

        contenedor.innerHTML = `
            <div class="dote-header">
                <strong class="tituloMarca">
                    Dote de Marca
                </strong>

                <div class="dote-header-botones">
                    <button class="toggleMarca">▼</button>
                    <button class="btnEliminarMarca">✖</button>
                </div>
            </div>

            <div class="dote-body">
                <select class="marcaSelect">
                    <option value="">Seleccionar Marca</option>
                    ${Object.keys(dotesMarcaDB)
                        .sort((a, b) => a.localeCompare(b))
                        .map(m => `<option value="${m}">${m}</option>`)
                        .join("")}
                </select>

                <div class="marcaInfo"></div>
            </div>
        `;

        const toggle = contenedor.querySelector(".toggleMarca");
        const body = contenedor.querySelector(".dote-body");
        const select = contenedor.querySelector(".marcaSelect");
        const info = contenedor.querySelector(".marcaInfo");
        const btnEliminar = contenedor.querySelector(".btnEliminarMarca");
        const titulo = contenedor.querySelector(".tituloMarca");

        body.style.display = "none";

        toggle.addEventListener("click", () => {
            const abierta = body.style.display === "block";
            body.style.display = abierta ? "none" : "block";
            toggle.textContent = abierta ? "▼" : "▲";
        });

        select.addEventListener("change", () => {

            const nombre = select.value;
            const marca = dotesMarcaDB[nombre];

            if (nombre) {
                titulo.textContent = `Dote de Marca (${nombre})`;
            } else {
                titulo.textContent = `Dote de Marca`;
            }

            if (!marca) {
                info.innerHTML = "";
                return;
            }

            info.innerHTML = `
                <hr>
                <p class="dote-descripcion">${marca.descripcion}</p>
            `;
        });

        btnEliminar.addEventListener("click", () => {
            contenedor.remove();
        });

        lista.appendChild(contenedor);
    }

    // Una inicial automática
    crearBloqueMarca();

    btnAgregar.addEventListener("click", crearBloqueMarca);
}