const estilosLuchaDB = {

    "Combate con Dos Armas": {
        descripcion: `
Cuando luchas con dos armas, puedes añadir tu modificador de característica al daño del segundo ataque.
        `
    },

    "Defensa": {
        descripcion: `
Mientras lleves armadura, obtienes un +1 a tu Clase de Armadura.
        `
    },

    "Duelo": {
        descripcion: `
Cuando empuñas un arma cuerpo a cuerpo en una mano y no usas otra arma, obtienes un +2 a las tiradas de daño con esa arma.
        `
    },

    "Gran Arma": {
        descripcion: `
Cuando obtienes un 1 o 2 en un dado de daño de un ataque realizado con un arma cuerpo a cuerpo que estés empuñando con dos manos, puedes repetir el dado y debes usar el nuevo resultado.
        `
    },

    "Intercepción": {
        descripcion: `
Cuando una criatura que puedes ver golpea a un objetivo que no seas tú y que esté a 5 pies de ti, puedes usar tu reacción para reducir el daño en 1d10 + tu Bono de Competencia. Debes estar empuñando un arma o escudo.
        `
    },

    "Protección": {
        descripcion: `
Cuando una criatura que puedes ver ataca a un objetivo que no seas tú y que esté a 5 pies de ti, puedes usar tu reacción para imponer desventaja en la tirada de ataque. Debes estar empuñando un escudo.
        `
    },

    "Tiro con Arco": {
        descripcion: `
Obtienes un +2 a las tiradas de ataque que realices con armas a distancia.
        `
    }

};

const bloqueEstilos = document.getElementById("bloqueEstilosLucha");

if (bloqueEstilos) {

    bloqueEstilos.innerHTML = `
        <div class="dote-bloque-unico">

            <div class="dote-bloque-header">
                <strong>Estilos de Lucha</strong>
            </div>

            <div id="listaEstilosLucha"></div>

            <div class="dote-bloque-footer">
                <button id="btnAgregarEstiloLucha" class="btnAgregarDote">
                    + Añadir Estilo
                </button>
            </div>

        </div>
    `;

    const lista = document.getElementById("listaEstilosLucha");
    const btnAgregar = document.getElementById("btnAgregarEstiloLucha");

    function crearBloqueEstilo() {

        const contenedor = document.createElement("div");
        contenedor.classList.add("dote-item");

        contenedor.innerHTML = `
            <div class="dote-header">
                <strong class="tituloEstilo">
                    Estilo de Lucha
                </strong>

                <div class="dote-header-botones">
                    <button class="toggleEstilo">▼</button>
                    <button class="btnEliminarEstilo">✖</button>
                </div>
            </div>

            <div class="dote-body">
                <select class="estiloSelect">
                    <option value="">Seleccionar Estilo</option>
                    ${Object.keys(estilosLuchaDB)
                        .sort((a, b) => a.localeCompare(b))
                        .map(e => `<option value="${e}">${e}</option>`)
                        .join("")}
                </select>

                <div class="estiloInfo"></div>
            </div>
        `;

        const toggle = contenedor.querySelector(".toggleEstilo");
        const body = contenedor.querySelector(".dote-body");
        const select = contenedor.querySelector(".estiloSelect");
        const info = contenedor.querySelector(".estiloInfo");
        const btnEliminar = contenedor.querySelector(".btnEliminarEstilo");
        const titulo = contenedor.querySelector(".tituloEstilo");

        body.style.display = "none";

        toggle.addEventListener("click", () => {
            const abierta = body.style.display === "block";
            body.style.display = abierta ? "none" : "block";
            toggle.textContent = abierta ? "▼" : "▲";
        });

        select.addEventListener("change", () => {

            const nombre = select.value;
            const estilo = estilosLuchaDB[nombre];

            if (nombre) {
                titulo.textContent = `Estilo de Lucha (${nombre})`;
            } else {
                titulo.textContent = `Estilo de Lucha`;
            }

            if (!estilo) {
                info.innerHTML = "";
                return;
            }

            info.innerHTML = `
                <hr>
                <p class="dote-descripcion">${estilo.descripcion}</p>
            `;
        });

        btnEliminar.addEventListener("click", () => {
            contenedor.remove();
        });

        lista.appendChild(contenedor);
    }

    // Uno inicial automático
    crearBloqueEstilo();

    btnAgregar.addEventListener("click", crearBloqueEstilo);
}