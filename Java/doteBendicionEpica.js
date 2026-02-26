const bendicionesEpicasDB = {

    "Bendición de la Salud": {
        descripcion: `
Tu máximo de puntos de vida aumenta en 40. 
Además, cada vez que recuperas puntos de vida mediante un descanso largo, recuperas todos tus puntos de vida.
        `
    },

    "Bendición de la Fortaleza": {
        descripcion: `
Tu puntuación de Fuerza aumenta en 2, hasta un máximo de 30.
        `
    },

    "Bendición de la Agilidad": {
        descripcion: `
Tu puntuación de Destreza aumenta en 2, hasta un máximo de 30.
        `
    },

    "Bendición de la Resiliencia": {
        descripcion: `
Tu puntuación de Constitución aumenta en 2, hasta un máximo de 30.
        `
    },

    "Bendición de la Sabiduría": {
        descripcion: `
Tu puntuación de Sabiduría aumenta en 2, hasta un máximo de 30.
        `
    },

    "Bendición del Intelecto": {
        descripcion: `
Tu puntuación de Inteligencia aumenta en 2, hasta un máximo de 30.
        `
    },

    "Bendición del Carisma": {
        descripcion: `
Tu puntuación de Carisma aumenta en 2, hasta un máximo de 30.
        `
    },

    "Bendición de la Recuperación": {
        descripcion: `
Como acción adicional, puedes recuperar puntos de vida iguales a la mitad de tus puntos de vida máximos.
Una vez que uses este beneficio, no puedes volver a usarlo hasta terminar un descanso largo.
        `
    },

    "Bendición de la Velocidad": {
        descripcion: `
Tu velocidad aumenta en 30 pies.
        `
    },

    "Bendición del Destino": {
        descripcion: `
Cuando fallas una tirada de ataque, prueba de característica o tirada de salvación, puedes repetirla.
Una vez que uses este beneficio, no puedes volver a usarlo hasta terminar un descanso corto o largo.
        `
    }

};

const bloqueBendicion = document.getElementById("bloqueDoteBendicionEpica");

if (bloqueBendicion) {

    bloqueBendicion.innerHTML = `
        <div class="dote-bloque-unico">

            <div class="dote-bloque-header">
                <strong>Bendiciones Épicas</strong>
            </div>

            <div id="listaBendicionesEpicas"></div>

            <div class="dote-bloque-footer">
                <button id="btnAgregarBendicionEpica" class="btnAgregarDote">
                    + Añadir Bendición
                </button>
            </div>

        </div>
    `;

    const lista = document.getElementById("listaBendicionesEpicas");
    const btnAgregar = document.getElementById("btnAgregarBendicionEpica");

    function crearBloqueBendicion() {

        const contenedor = document.createElement("div");
        contenedor.classList.add("dote-item");

        contenedor.innerHTML = `
            <div class="dote-header">
                <strong class="tituloBendicion">
                    Bendición Épica
                </strong>

                <div class="dote-header-botones">
                    <button class="toggleBendicion">▼</button>
                    <button class="btnEliminarBendicion">✖</button>
                </div>
            </div>

            <div class="dote-body">
                <select class="bendicionSelect">
                    <option value="">Seleccionar Bendición</option>
                    ${Object.keys(bendicionesEpicasDB)
                        .sort((a, b) => a.localeCompare(b))
                        .map(b => `<option value="${b}">${b}</option>`)
                        .join("")}
                </select>

                <div class="bendicionInfo"></div>
            </div>
        `;

        const toggle = contenedor.querySelector(".toggleBendicion");
        const body = contenedor.querySelector(".dote-body");
        const select = contenedor.querySelector(".bendicionSelect");
        const info = contenedor.querySelector(".bendicionInfo");
        const btnEliminar = contenedor.querySelector(".btnEliminarBendicion");
        const titulo = contenedor.querySelector(".tituloBendicion");

        body.style.display = "none";

        toggle.addEventListener("click", () => {
            const abierta = body.style.display === "block";
            body.style.display = abierta ? "none" : "block";
            toggle.textContent = abierta ? "▼" : "▲";
        });

        select.addEventListener("change", () => {

            const nombre = select.value;
            const bendicion = bendicionesEpicasDB[nombre];

            if (nombre) {
                titulo.textContent = `Bendición Épica (${nombre})`;
            } else {
                titulo.textContent = `Bendición Épica`;
            }

            if (!bendicion) {
                info.innerHTML = "";
                return;
            }

            info.innerHTML = `
                <hr>
                <p class="dote-descripcion">${bendicion.descripcion}</p>
            `;
        });

        btnEliminar.addEventListener("click", () => {
            contenedor.remove();
        });

        lista.appendChild(contenedor);
    }

    // Una inicial automática
    crearBloqueBendicion();

    btnAgregar.addEventListener("click", crearBloqueBendicion);
}