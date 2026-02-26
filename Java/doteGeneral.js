const dotesDB = {

    "Agente de la Alianza de los Señores": {
        descripcion: `
Huelga inspiradora. Una vez por turno, cuando consigues un golpe crítico contra una criatura, puedes elegir un aliado a 30 pies de ti que pueda verte u oírte y que carezca de Inspiración Heroica. Ese aliado gana Inspiración Heroica.

Reafirmar honor. Cuando un enemigo que puedes ver inflige daño a un aliado tuyo que está a 5 pies de ti, tienes ventaja en tu próxima tirada de ataque contra ese enemigo antes del final de tu siguiente turno.
        `
    },

    "Agente Harper": {
        descripcion: `
Conoces la jerga de los ladrones.

Entrenamiento de instrumentos. Obtienes competencia con un instrumento musical de tu elección.

Melodía distraída. Cuando realizas la acción de Ayuda para ayudar en la tirada de ataque de un aliado, el enemigo que estás distrayendo puede estar a 30 pies de ti en lugar de a 5 pies, siempre que pueda verte u oírte.
        `
    },

    "Alerta": {
        descripcion: `
Competencia en Iniciativa. Cuando lanzas Iniciativa, puedes agregar tu Bono de Competencia al resultado.

Intercambio de iniciativas. Inmediatamente después de lanzar Iniciativa, puedes intercambiar tu resultado con el de un aliado dispuesto en el mismo combate. No puedes realizar este intercambio si tú o el aliado tienen la condición de Incapacitado.
        `
    },

    "Artesano": {
        descripcion: `
Competencia en herramientas. Obtienes competencia con tres herramientas artesanales diferentes de tu elección de la mesa de Elaboración Rápida.

Descuento. Cada vez que compras un artículo no mágico, recibes un descuento del 20 por ciento.

Elaboración rápida. Cuando terminas un descanso largo, puedes crear una pieza de equipo de la mesa de Elaboración Rápida, siempre que tengas las herramientas asociadas y seas competente con ellas. El artículo dura hasta que terminas otro descanso largo, momento en el cual se desmorona.

Herramientas de carpintero: Escalera, Antorcha
Herramientas de peletero: Estuche, Bolsa
Herramientas de albañil: Bloque y aparejo
Herramientas de alfarero: Jarra, Lámpara
Herramientas de herrero: Rodamientos de bolas, Cubo, Abrojos, Gancho de agarre, Olla de hierro
Herramientas de hojalatero: Campana, Pala, Caja de yesca
Herramientas del tejedor: Cesta, Cuerda, Red, Tienda
Herramientas del tallador de madera: Clava, Gran clava, Bastón
        `
    },

    "Atacante Salvaje": {
        descripcion: `
Has entrenado para infligir golpes particularmente dañinos. Una vez por turno, cuando golpeas un objetivo con un arma, puedes lanzar los dados de daño del arma dos veces y usar cualquiera de las tiradas contra el objetivo.
        `
    },

    "Afortunado": {
        descripcion: `
Puntos de suerte. Tienes una cantidad de puntos de suerte igual a tu Bono de Competencia y puedes gastar esos puntos en los beneficios siguientes. Recuperas todos los puntos gastados cuando terminas un descanso largo.

Ventaja. Cuando realizas una tirada de d20, puedes gastar 1 punto de suerte para darte ventaja en la tirada.

Desventaja. Cuando una criatura realiza una tirada de d20 para una tirada de ataque contra ti, puedes gastar 1 punto de suerte para imponer desventaja en esa tirada.
        `
    },

    "Cazador vampiro": {
        descripcion: `
Escape hábil. Tienes ventaja en las pruebas para escapar de restricciones no mágicas o de la condición Agarrado.

Barrio de vitalidad. Cuando recibes daño necrótico, puedes usar tu reacción para mitigar el daño. Tira un número de d6 igual a tu Bono de Competencia y súmalos. Reduce el daño necrótico recibido en ese total. Una vez que utilices este beneficio, no podrás volver a hacerlo hasta que termines un descanso corto o largo.
        `
    },

    "Chispa de fuego de hechizos": {
        descripcion: `
Absorción mágica. Una vez por turno, cuando recibes daño de un hechizo o efecto mágico, reduces el daño total recibido en 1d4. No puedes utilizar este beneficio si tienes la condición de Incapacitado.

Llama de fuego de hechizo. Aprendes el truco Llama Sagrada. Inteligencia, Sabiduría o Carisma es tu característica para este hechizo (eliges cuando seleccionas esta hazaña). También puedes lanzarlo como acción adicional un número de veces igual a tu Bono de Competencia, y recuperas todos los usos gastados cuando terminas un descanso largo.
        `
    },

    "Culto del Dragón Iniciado": {
        descripcion: `
Lengua de dragón. Ya conoces dracónico. Si ya conocías dracónico cuando seleccionas esta hazaña, aprendes un idioma adicional de tu elección del Manual del Jugador.

El terror del dragón. Puedes realizar una acción mágica para infundir terror en una criatura que puedas ver a 30 pies de ti. El objetivo debe superar una tirada de salvación de Sabiduría (CD 8 + tu modificador de Sabiduría + tu Bono de Competencia) o quedar Asustado hasta el final de su siguiente turno. Si supera la salvación o cuando el efecto termina, queda inmune durante 24 horas.

Inspirado en el miedo. Cuando haces que una criatura quede Asustada y eres la fuente de ese miedo, puedes obtener Inspiración Heroica si no la tienes. Una vez que uses este beneficio, no podrás volver a hacerlo hasta que termines un descanso corto o largo.
        `
    },

    "Curandero": {
        descripcion: `
Médico de batalla. Si tienes un kit de sanador, puedes gastar un uso y atender a una criatura a menos de 5 pies como acción. Esa criatura puede gastar uno de sus Dados de Golpe, tirar ese dado y recuperar puntos de vida iguales al resultado más tu Bono de Competencia.

Repeticiones curativas. Cada vez que tiras un dado para determinar la cantidad de puntos de vida restaurados con un hechizo o con Médico de batalla, puedes repetir el dado si obtienes un 1 y debes usar la nueva tirada.
        `
    },

    "Duro": {
        descripcion: `
Tu máximo de puntos de vida aumenta en una cantidad igual al doble de tu nivel de personaje cuando obtienes esta hazaña. Cada vez que obtienes un nivel posteriormente, tu máximo de puntos de vida aumenta en 2 adicionales.
        `
    },

    "El juguete del vampiro": {
        descripcion: `
Decantación. Cuando terminas un descanso largo, puedes crear una Poción de curación o una Antitoxina, siempre que tengas un vial o matraz vacío. Estos líquidos se evaporan cuando terminas otro descanso largo.

Retiro oportuno. Puedes usar una acción adicional para realizar la acción Correr o Desengancharte. Puedes utilizar este beneficio un número de veces igual a tu Bono de Competencia y recuperas todos los usos cuando terminas un descanso largo.

Conexión vampírica. El DM determina el destino de tu antiguo maestro vampiro. Mientras ambos estéis en el mismo plano de existencia, el vampiro puede comunicarse contigo telepáticamente y puedes permitir que perciba a través de tus sentidos.
        `
    },

    "Enclave Esmeralda Incipiente": {
        descripcion: `
Habla con animales. Siempre tienes el hechizo Hablar con los animales preparado y puedes lanzarlo con cualquier espacio de conjuro que tengas. Inteligencia, Sabiduría o Carisma es tu característica para este hechizo (eliges cuando seleccionas esta hazaña). Cuando lo lanzas como ritual, su duración es de 8 horas.

Equipo de etiqueta. Cuando realizas la acción de Ayuda, puedes intercambiar tu posición con un aliado dispuesto a menos de 5 pies como parte de esa misma acción. Este movimiento no provoca ataques de oportunidad. No puedes usar este beneficio si el aliado tiene la condición de Incapacitado.
        `
    },

    "Hábil": {
        descripcion: `
Obtienes competencia en cualquier combinación de tres habilidades o herramientas de tu elección.

Repetible. Puedes realizar esta hazaña más de una vez.
        `
    },

    "Hexer de Shadowmoor": {
        descripcion: `
Hex. Siempre tienes el hechizo Hex preparado. Inteligencia, Sabiduría o Carisma es tu característica para este hechizo (eliges cuando seleccionas esta hazaña). Puedes lanzarlo una vez sin gastar espacio de conjuro y recuperas esta capacidad cuando terminas un descanso largo. También puedes lanzarlo usando cualquier espacio de conjuro que tengas.

Magia de maldición. Cuando una criatura afectada por tu Hex te golpea con una tirada de ataque, recibe daño psíquico igual a tu Bono de Competencia. Una criatura solo puede recibir este daño una vez por turno.
        `
    },

    "Iniciado Mágico": {
        descripcion: `
Dos trucos. Aprendes dos trucos de la lista de hechizos de Clérigo, Druida o Mago. Inteligencia, Sabiduría o Carisma es tu característica para estos hechizos (eliges cuando seleccionas esta hazaña).

Hechizo de nivel 1. Elige un hechizo de nivel 1 de la misma lista. Siempre lo tienes preparado. Puedes lanzarlo una vez sin gastar espacio de conjuro y recuperas esta capacidad al finalizar un descanso largo. También puedes lanzarlo usando cualquier espacio de conjuro que tengas.

Cambio de hechizo. Cada vez que obtienes un nivel, puedes reemplazar uno de los hechizos elegidos por otro del mismo nivel de la lista seleccionada.

Repetible. Puedes realizar esta hazaña más de una vez, pero debes elegir una lista de hechizos diferente cada vez.
        `
    },

    "Juerguista incansable": {
        descripcion: `
Cuando un aliado que puedes ver a menos de 60 pies gasta Inspiración Heroica, puedes ganar Inspiración Heroica si no la tienes. Puedes usar este beneficio un número de veces igual a tu Bono de Competencia y recuperas todos los usos cuando terminas un descanso corto o largo.
        `
    },

    "Luchador de Taberna": {
        descripcion: `
Golpe desarmado mejorado. Cuando golpeas con tu Golpe desarmado e infliges daño, puedes causar daño contundente igual a 1d4 más tu modificador de Fuerza en lugar del daño normal.

Repeticiones de daño. Cuando tiras un dado de daño para tu Golpe desarmado y obtienes un 1, puedes repetirlo y debes usar el nuevo resultado.

Armamento improvisado. Tienes competencia con armas improvisadas.

Empujar. Cuando golpeas con un Golpe Desarmado como parte de la acción de Ataque en tu turno, puedes empujar al objetivo 5 pies. Solo una vez por turno.
        `
    },

    "Músico": {
        descripcion: `
Entrenamiento de instrumentos. Obtienes competencia con tres instrumentos musicales de tu elección.

Canción alentadora. Al terminar un descanso corto o largo, puedes tocar una canción en un instrumento con el que seas competente y otorgar Inspiración Heroica a un número de aliados igual a tu Bono de Competencia.
        `
    },

    "Niño del Sol": {
        descripcion: `
Ojos de Eirdu. Tú y tus aliados a menos de 10 pies tenéis ventaja en tiradas de salvación para evitar o terminar la condición Cegado.

Fuego feérico. Aprendes el hechizo Fuego feérico. Inteligencia, Sabiduría o Carisma es tu característica para este hechizo (eliges cuando seleccionas esta hazaña). Puedes lanzarlo una vez sin gastar espacio de conjuro y recuperas esta capacidad al finalizar un descanso largo. También puedes lanzarlo usando cualquier espacio de conjuro que tengas.

Cuando lanzas Fuego feérico sin gastar espacio de conjuro mediante este beneficio, recibir daño no puede romper tu concentración en el hechizo.
        `
    },

    "Tiro del Guantelete": {
        descripcion: `
Párate como uno. Cuando un aliado a menos de 5 pies vaya a ser empujado o derribado, puedes usar tu reacción para evitarlo. El aliado no puede tener la condición de Incapacitado.

Vigilante. Cuando realizas la acción Preparar, la siguiente tirada de ataque contra ti tiene desventaja antes del inicio de tu siguiente turno.
        `
    },

    "Torre del Dragón Púrpura": {
        descripcion: `
Súplica. Obtienes competencia en Perspicacia, Interpretación o Persuasión.

Grito de reunión. Cuando lanzas Iniciativa y no estás Incapacitado, puedes elegir un número de criaturas igual a tu Bono de Competencia que puedas ver a 30 pies. Esas criaturas obtienen Inspiración Heroica.

Una vez que utilices este beneficio, no podrás volver a hacerlo hasta que termines un descanso largo.
        `
    },

    "Zhentarim Ruffian": {
        descripcion: `
Apertura de explotación. Cuando tiras daño para un ataque de oportunidad, puedes tirar los dados de daño dos veces y usar cualquiera de las tiradas.

Familia primero. Si tienes Inspiración Heroica cuando lanzas Iniciativa, puedes gastarla para darte a ti y a tus aliados ventaja en esa tirada.
        `
    }

};

const bloque = document.getElementById("bloqueDoteGeneral");

if (bloque) {

    bloque.innerHTML = `
        <div class="dote-bloque-unico">

            <div class="dote-bloque-header">
                <strong>Dotes Generals</strong>
            </div>

            <div id="listaDotes"></div>

            <div class="dote-bloque-footer">
                <button id="btnAgregarDote" class="btnAgregarDote">
                    + Añadir Dote
                </button>
            </div>

        </div>
    `;

    const listaDotes = document.getElementById("listaDotes");
    const btnAgregar = document.getElementById("btnAgregarDote");

    function crearBloqueDote() {

        const contenedor = document.createElement("div");
        contenedor.classList.add("dote-item");

        contenedor.innerHTML = `
            <div class="dote-header">
                <strong class="tituloDote">
                    Dote General
                </strong>

                <div class="dote-header-botones">
                    <button class="toggleDote">▼</button>
                    <button class="btnEliminarDote">✖</button>
                </div>
            </div>

            <div class="dote-body">
                <select class="doteSelect">
                    <option value="">Seleccionar Dote</option>
                    ${Object.keys(dotesDB)
                        .sort((a, b) => a.localeCompare(b))
                        .map(d => `<option value="${d}">${d}</option>`)
                        .join("")}
                </select>

                <div class="doteInfo"></div>
            </div>
        `;

        const toggle = contenedor.querySelector(".toggleDote");
        const body = contenedor.querySelector(".dote-body");
        const select = contenedor.querySelector(".doteSelect");
        const info = contenedor.querySelector(".doteInfo");
        const btnEliminar = contenedor.querySelector(".btnEliminarDote");
        const titulo = contenedor.querySelector(".tituloDote");

        body.style.display = "none";

        toggle.addEventListener("click", () => {
            const abierta = body.style.display === "block";
            body.style.display = abierta ? "none" : "block";
            toggle.textContent = abierta ? "▼" : "▲";
        });

        select.addEventListener("change", () => {

            const nombre = select.value;
            const dote = dotesDB[nombre];

            // Cambiar título dinámico
            if (nombre) {
                titulo.textContent = `Dote General (${nombre})`;
            } else {
                titulo.textContent = `Dote General`;
            }

            if (!dote) {
                info.innerHTML = "";
                return;
            }

            info.innerHTML = `
                <hr>
                <p class="dote-descripcion">${dote.descripcion}</p>
            `;
        });

        btnEliminar.addEventListener("click", () => {
            contenedor.remove();
        });

        listaDotes.appendChild(contenedor);
    }

    // Primera dote automática
    crearBloqueDote();

    btnAgregar.addEventListener("click", crearBloqueDote);
}