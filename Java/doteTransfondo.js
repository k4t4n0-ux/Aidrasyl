const dotesDB = {

    "Alerta": {
        descripcion: `
Competencia en iniciativas. Cuando lanza Iniciativa, puede agregar su Bono de Competencia a la lista.

Intercambio de iniciativas. Inmediatamente después de lanzar Iniciativa, puedes intercambiar tu Iniciativa con la Iniciativa de un aliado dispuesto en el mismo combate. No puedes realizar este intercambio si tú o el aliado tienes la condición de Incapacitado.
        `
    },

    "Artesano": {
        descripcion: `
Competencia en herramientas. Obtienes competencia con tres herramientas artesanales diferentes de tu elección de la mesa Fast Crafting.

Descuento. Cada vez que compras un artículo no mágico, recibes un descuento del 20 por ciento.

Elaboración rápida. Cuando terminas un descanso largo, puedes crear una pieza de equipo de la mesa de elaboración rápida, siempre que tengas las herramientas del artesano asociadas con ese artículo y domines esas herramientas. El artículo dura hasta que terminas otro Descanso Largo, momento en el cual el artículo se desmorona.

Herramientas de carpintero:	Escalera, Antorcha
Herramientas de peletero:	Estuche, bolsa
Herramientas de Mason:	Bloquear y abordar
Herramientas de alfarero:	Jarra, Lámpara
Herramientas de Smith:	Rodamientos de bolas, Cubo, Abrojos, Gancho de agarre, Olla de hierro
Herramientas de Tinker:	Campana, Pala, Caja de yesca
Herramientas del tejedor:	Cesta, Cuerda, Red, Tienda
Herramientas del tallador de madera:	Clava, Gran clava, Bastón
        `
    },

    "Curandero": {
        descripcion: `
Médico de batalla. Si tienes un kit de sanador, puedes gastar un uso de él y atender a una criatura a menos de 5 pies de ti mismo como acción de uso. Esa criatura puede gastar uno de sus dados de golpe. La criatura recupera una cantidad de puntos de vida igual a la tirada más tu bonificación de competencia.

Reenrolls curativos. Cada vez que sacas un dado para determinar la cantidad de puntos de vida que restauras con un hechizo o con el beneficio Battle Medic de esta hazaña, puedes volver a tirar el dado si saca un 1 y debes usar la nueva tirada.        `
    },

    "Afortunado": {
        descripcion: `
Puntos de suerte. Tiene una cantidad de puntos de suerte igual a su bono de competencia y puede gastar los puntos en los beneficios a continuación. Recuperas los puntos de suerte gastados cuando terminas un descanso prolongado.

Ventaja. Cuando sacas un d20 para una prueba D20, puedes gastar 1 punto de suerte para darte una ventaja en el rollo.

Desventaja. Cuando una criatura saca un d20 para atacar a ti, puedes gastar 1 punto de suerte para imponer desventaja en el rollo.
        `
    },

    "Curandero": {
        descripcion: `
Médico de batalla. Si tienes un kit de sanador, puedes gastar un uso y atender a una criatura a menos de 5 pies como acción. Esa criatura puede gastar uno de sus Dados de Golpe, tirar ese dado y recuperar puntos de vida iguales al resultado más tu Bono de Competencia.

Reenrolls curativos. Cada vez que tiras un dado para determinar la cantidad de puntos de vida restaurados con un hechizo o con Médico de batalla, puedes repetir el dado si obtienes un 1 y debes usar la nueva tirada.
        `
    },

    "Afortunado": {
        descripcion: `
Puntos de suerte. Tienes una cantidad de puntos de suerte igual a tu Bono de Competencia. Recuperas todos los puntos gastados cuando terminas un descanso largo.

Ventaja. Cuando realizas una tirada d20, puedes gastar 1 punto de suerte para darte ventaja.

Desventaja. Cuando una criatura tira un d20 para una tirada de ataque contra ti, puedes gastar 1 punto de suerte para imponer una desventaja en esa tirada.
        `
    },

    "Iniciado mágico": {
        descripcion: `
Dos Trucos. Aprendes dos trucos de tu elección del Clérigo, Druida, o Mago lista de hechizos. Inteligencia, Sabiduría o Carisma es tu habilidad para lanzar hechizos para los hechizos de esta hazaña (elige cuando seleccionas este dote).

Hechizo de nivel 1. Elija un hechizo de nivel 1 de la misma lista que seleccionó para los trucos de esta hazaña. Siempre tienes ese hechizo preparado. Puedes lanzarlo una vez sin un espacio para hechizos y recuperas la capacidad de lanzarlo de esa manera cuando terminas un descanso largo. También puedes lanzar el hechizo usando cualquier espacio para hechizos que tengas.

Cambio de hechizo. Cada vez que obtienes un nuevo nivel, puedes reemplazar uno de los hechizos que elegiste para esta hazaña con un hechizo diferente del mismo nivel de la lista de hechizos elegidos.

Repetible. Puedes realizar esta hazaña más de una vez, pero debes elegir una lista de hechizos diferente cada vez.
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
                <strong>Dote de Origen</strong>
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
            <p class="dote-descripcion">${dote.descripcion}</p>
        `;
    });
}