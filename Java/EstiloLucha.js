const estilosLuchaDB = {

    "Tiro con arco": {
        descripcion: `
Obtienes una bonificación de +2 a las tiradas de ataque que realizas con armas a distancia.
        `
    },

    "Lucha ciega": {
        descripcion: `
Tienes visión ciega con un alcance de 10 pies.
        `
    },

    "Defensa": {
        descripcion: `
Mientras llevas armadura ligera, media o pesada, obtienes una bonificación de +1 a la Clase de Armadura.
        `
    },

    "Duelo": {
        descripcion: `
Cuando empuñas un arma cuerpo a cuerpo en una mano y ninguna otra arma, obtienes una bonificación de +2 a las tiradas de daño con esa arma.
        `
    },

    "Gran lucha con armas": {
        descripcion: `
Cuando tiras daño para un ataque que realizas con un arma cuerpo a cuerpo que empuñas con las dos manos, puedes tratar cualquier 1 o 2 en un dado de daño como un 3. El arma debe tener la propiedad Dos Manos o Versátil para beneficiarse de este efecto.
        `
    },

    "Intercepción": {
        descripcion: `
Cuando una criatura que puedes ver impacta a otra criatura a menos de 5 pies de ti con una tirada de ataque, puedes usar tu reacción para reducir el daño infligido al objetivo en 1d10 más tu bonificación por competencia. Debes empuñar un escudo o un arma simple o marcial para usar esta reacción.
        `
    },

    "Protección": {
        descripcion: `
Cuando una criatura que puedes ver ataca a un objetivo distinto de ti que está a 5 pies de ti, puedes usar tu reacción para interponer tu escudo si estás empuñando uno. Impones desventaja en la tirada de ataque desencadenante y en todas las demás tiradas de ataque contra el objetivo hasta el comienzo de tu siguiente turno, siempre que permanezcas a menos de 5 pies del objetivo.
        `
    },

    "Lucha con armas arrojadizas": {
        descripcion: `
Cuando impactas con una tirada de ataque a distancia usando un arma que tenga la propiedad Lanzada, obtienes una bonificación de +2 a la tirada de daño.
        `
    },

    "Lucha con dos armas": {
        descripcion: `
Cuando realizas un ataque adicional como resultado de usar un arma que tenga la propiedad Ligera, puedes añadir tu modificador de característica al daño de ese ataque si aún no lo estás añadiendo.
        `
    },

    "Lucha desarmada": {
        descripcion: `
Cuando impactas con tu Golpe desarmado e infliges daño, puedes causar daño contundente igual a 1d6 más tu modificador de Fuerza en lugar del daño normal de un Golpe desarmado. Si no empuñas armas ni un escudo cuando realizas la tirada de ataque, el d6 se convierte en un d8.

Al comienzo de cada uno de tus turnos, puedes infligir 1d4 de daño contundente a una criatura agarrada por ti.
        `
    },

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