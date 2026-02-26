const dotesDB = {

    "Iniciado Mágico": {
        descripcion: "Aprendes dos trucos de tu elección de la lista de hechizos de Clérigo, Druida o Mago. Inteligencia, Sabiduría o Carisma es tu característica para lanzar estos hechizos (eliges al seleccionar esta dote).",
        descripcion2: "Elige un hechizo de nivel 1 de la misma lista que seleccionaste para los trucos. Siempre tienes ese hechizo preparado. Puedes lanzarlo una vez sin gastar espacio de conjuro y recuperas esta capacidad al finalizar un descanso largo. También puedes lanzarlo usando cualquier espacio de conjuro que tengas.",
        descripcion3: "Cada vez que obtienes un nivel, puedes reemplazar uno de los hechizos elegidos por otro diferente del mismo nivel de la lista seleccionada.",
        descripcion4: "Puedes escoger esta dote más de una vez, pero debes elegir una lista de hechizos diferente cada vez."

    },

    "Resistente": {
        descripcion: `
Aumenta una característica a tu elección en 1.

Obtienes competencia en las tiradas de salvación de esa característica.
        `
    },

    "Alerta": {
        descripcion: `
Competencia en iniciativas.
Cuando lanzas Iniciativa, puedes agregar tu Bono de Competencia al resultado.

Intercambio de iniciativas.
Inmediatamente después de lanzar Iniciativa, puedes intercambiar tu resultado con el de un aliado dispuesto en el mismo combate. No puedes realizar este intercambio si tú o el aliado tienen la condición Incapacitado.
        `
    },

    "Artesano": {
        descripcion: `
Competencia en herramientas.
Obtienes competencia con tres herramientas artesanales diferentes de tu elección de la mesa Fast Crafting.

Descuento.
Cada vez que compras un artículo no mágico, recibes un descuento del 20%.

Elaboración rápida.
Cuando terminas un descanso largo, puedes crear una pieza de equipo de la mesa de elaboración rápida, siempre que tengas las herramientas asociadas y seas competente con ellas. El artículo dura hasta que terminas otro descanso largo, momento en el cual se desmorona.

Elaboración rápida:
Herramientas de carpintero: Escalera, Antorcha
Herramientas de peletero: Estuche, Bolsa
Herramientas de Mason: Bloquear y abordar
Herramientas de alfarero: Jarra, Lámpara
Herramientas de Smith: Rodamientos de bolas, Cubo, Abrojos, Gancho de agarre, Olla de hierro
Herramientas de Tinker: Campana, Pala, Caja de Yesca
Herramientas del tejedor: Cesta, Cuerda, Red, Tienda
Herramientas del tallador de madera: Garrote, Gran Garrote, Bastón
        `
    },

    "Curandero": {
        descripcion: `
Médico de batalla.
Si tienes un kit de sanador, puedes gastar un uso y atender a una criatura a menos de 5 pies como acción. Esa criatura puede gastar uno de sus Dados de Golpe, tirar ese dado y recuperar puntos de vida iguales al resultado más tu Bono de Competencia.

Reenrolls curativos.
Cada vez que tiras un dado para determinar la cantidad de puntos de vida restaurados con un hechizo o con Médico de batalla, puedes repetir el dado si obtienes un 1 y debes usar la nueva tirada.
        `
    },

    "Afortunado": {
        descripcion: `
Puntos de suerte.
Tienes una cantidad de puntos de suerte igual a tu Bono de Competencia. Recuperas todos los puntos gastados cuando terminas un descanso largo.

Ventaja.
Cuando realizas una tirada d20, puedes gastar 1 punto de suerte para darte ventaja.

Desventaja.
Cuando una criatura realiza una tirada d20 para atacarte, puedes gastar 1 punto de suerte para imponer desventaja.
        `
    },

    "Músico": {
        descripcion: `
Entrenamiento de instrumentos.
Obtienes competencia con tres instrumentos musicales de tu elección.

Canción alentadora.
Al terminar un descanso corto o largo, puedes tocar una canción en un instrumento con el que seas competente y otorgar Inspiración Heroica a aliados que la escuchen. El número de aliados es igual a tu Bono de Competencia.
        `
    },

    "Atacante Salvaje": {
        descripcion: `
Has entrenado para realizar golpes particularmente dañinos.

Una vez por turno, cuando golpeas a un objetivo con un arma, puedes lanzar los dados de daño del arma dos veces y usar cualquiera de las tiradas.
        `
    },

    "Hábil": {
        descripcion: `
Obtienes competencia en cualquier combinación de tres habilidades o herramientas de tu elección.

Repetible.
Puedes escoger esta dote más de una vez.
        `
    },

    "Luchador de Taberna": {
        descripcion: `
Golpe desarmado mejorado.
Cuando golpeas con tu Golpe desarmado e infliges daño, puedes causar daño contundente igual a 1d4 más tu modificador de Fuerza en lugar del daño normal.

Rerolls de daño.
Si al tirar daño desarmado obtienes un 1, puedes repetir el dado y debes usar el nuevo resultado.

Armamento improvisado.
Obtienes competencia con armas improvisadas.

Empujar.
Cuando golpeas con un Golpe Desarmado como parte de la acción Ataque, puedes empujar al objetivo 5 pies. Solo una vez por turno.
        `
    },

    "Duro": {
        descripcion: `
Tu máximo de puntos de vida aumenta en una cantidad igual al doble de tu nivel cuando eliges esta dote.

Cada vez que subes de nivel posteriormente, tu máximo de puntos de vida aumenta en 2 puntos adicionales.
        `
    }

};

const bloque = document.getElementById("bloqueDoteTransfondo");

if (bloque) {

    bloque.innerHTML = `
        <div class="dote-container">

            <div class="dote-header">
                <strong>Dote de Transfondo</strong>
                <button class="toggleDote">▼</button>
            </div>

            <div class="dote-body">
                <select class="doteSelect">
                    <option value="">Seleccionar Dote</option>
                    ${Object.keys(dotesDB)
                        .map(d => `<option value="${d}">${d}</option>`)
                        .join("")}
                </select>

                <div class="doteInfo"></div>
            </div>

        </div>
    `;

    const toggle = bloque.querySelector(".toggleDote");
    const body = bloque.querySelector(".dote-body");
    const select = bloque.querySelector(".doteSelect");
    const info = bloque.querySelector(".doteInfo");

    // Empieza cerrada
    body.style.display = "none";

    toggle.addEventListener("click", () => {
        const abierta = body.style.display === "block";
        body.style.display = abierta ? "none" : "block";
        toggle.textContent = abierta ? "▼" : "▲";
    });

    select.addEventListener("change", () => {

        const dote = dotesDB[select.value];

        if (!dote) {
            info.innerHTML = "";
            return;
        }

        info.innerHTML = `
            <hr>
            <p>${dote.descripcion}</p>
        `;
    });
}