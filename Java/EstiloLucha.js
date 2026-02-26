const estilosLuchaDB = {

    "Tiro con arco": {
        descripcion: `
Obtienes una bonificación de +2 por las tiradas de ataque que haces con armas a distancia.
        `
    },

    "Lucha ciega": {
        descripcion: `
Tienes visión ciega con un alcance de 10 pies.
        `
    },

    "Defensa": {
        descripcion: `
Mientras usas armadura ligera, media o pesada, obtienes una bonificación de +1 para la clase de armadura.
        `
    },

    "Duelo": {
        descripcion: `
Cuando sostienes un arma cuerpo a cuerpo en una mano y ninguna otra, obtienes una bonificación de +2 para dañar las tiradas con esa arma.
        `
    },

    "Gran lucha con armas": {
        descripcion: `
Cuando lanzas daño para un ataque que haces con un arma cuerpo a cuerpo que estás sosteniendo con las dos manos, puedes tratar cualquier 1 o 2 en un dado de daño como un 3. El arma debe tener la propiedad de dos manos o versátil para obtener este beneficio.
        `
    },

    "Intercepción": {
        descripcion: `
Cuando una criatura que puedes ver golpea a otra criatura a menos de 5 pies de ti con una tirada de ataque, puedes tomar una reacción para reducir el daño infligido al objetivo en 1d10 más tu bonificación de competencia. Debes tener un Escudo o un arma Simple o Marcial para usar esta Reacción.
        `
    },

    "Protección": {
        descripcion: `
Cuando una criatura que puedes ver ataca a un objetivo distinto de ti que está a 5 pies de ti, puedes tomar una reacción para interponer tu escudo si estás sosteniendo uno. Impones una desventaja en la tirada de ataque desencadenante y en todas las demás tiradas de ataque contra el objetivo hasta el comienzo de tu siguiente turno si permaneces a menos de 5 pies del objetivo.
        `
    },

    "Lucha con armas arrojadizas": {
        descripcion: `
Cuando golpeas con una tirada de ataque a distancia usando un arma que tiene la propiedad Lanzada, obtienes una bonificación de +2 en la tirada de daño.
        `
    },

    "Lucha con dos armas": {
        descripcion: `
Cuando realizas un ataque adicional como resultado del uso de un arma que tiene la propiedad Luz, puedes agregar tu modificador de habilidad al daño de ese ataque si aún no lo estás agregando al daño.
        `
    },

    "Lucha desarmada": {
        descripcion: `
Cuando golpeas con tu Golpe desarmado y infliges daño, puedes infligir un daño contundente igual a 1d6 más tu modificador de fuerza en lugar del daño normal de un Golpe desarmado. Si no tienes armas ni un escudo cuando haces la tirada de ataque, el d6 se convierte en un d8.

Al comienzo de cada uno de tus turnos, puedes infligir un daño contundente de 1d4 a una criatura atrapada por ti.
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