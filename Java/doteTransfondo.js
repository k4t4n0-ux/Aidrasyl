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

    "Iniciado Mágico": {
        descripcion: `
Dos Trucos. Aprendes dos trucos de tu elección del Clérigo, Druida, o Mago lista de hechizos. Inteligencia, Sabiduría o Carisma es tu habilidad para lanzar hechizos para los hechizos de esta hazaña (elige cuando seleccionas este dote).

Hechizo de nivel 1. Elija un hechizo de nivel 1 de la misma lista que seleccionó para los trucos de esta hazaña. Siempre tienes ese hechizo preparado. Puedes lanzarlo una vez sin un espacio para hechizos y recuperas la capacidad de lanzarlo de esa manera cuando terminas un descanso largo. También puedes lanzar el hechizo usando cualquier espacio para hechizos que tengas.

Cambio de hechizo. Cada vez que obtienes un nuevo nivel, puedes reemplazar uno de los hechizos que elegiste para esta hazaña con un hechizo diferente del mismo nivel de la lista de hechizos elegidos.

Repetible. Puedes realizar esta hazaña más de una vez, pero debes elegir una lista de hechizos diferente cada vez.
        `
    },

    "Músico": {
        descripcion: `
Entrenamiento de instrumentos. Obtienes competencia con tres instrumentos musicales de tu elección.

Canción alentadora. Al terminar un descanso corto o largo, puedes tocar una canción en un instrumento musical con el que tengas competencia y dar inspiración heroica a los aliados que escuchen la canción. La cantidad de aliados a los que puede afectar de esta manera es igual a su bonificación de competencia.
        `
    },

    "Atacante Salvaje": {
        descripcion: `
Has entrenado para lidiar con golpes particularmente dañinos. Una vez por turno, cuando golpeas un objetivo con un arma, puedes lanzar los dados de daño del arma dos veces y usar cualquiera de las tiradas contra el objetivo.
        `
    },

    "Hábil": {
        descripcion: `
Obtienes competencia en cualquier combinación de tres habilidades o herramientas de tu elección.

Repetible. Puedes realizar esta hazaña más de una vez.
        `
    },

    "Luchador de Taberna": {
        descripcion: `
Golpe desarmado mejorado. Cuando golpeas con tu Golpe desarmado y infliges daño, puedes infligir un daño contundente igual a 1d4 más tu modificador de fuerza en lugar del daño normal de un Golpe desarmado.

Rerolls de daños. Siempre que enrolle un dado de daño para su Golpe desarmado, puede volver a enrollar el dado si tira un 1 y debe usar el nuevo dado.

Armamento improvisado. Tienes competencia con armas improvisadas.

Empujar. Cuando golpeas a una criatura con un Golpe Desarmado como parte de la acción de Ataque en tu turno, puedes causar daño al objetivo y también empujarlo a 5 pies de distancia de ti. Puedes utilizar este beneficio sólo una vez por turno.
        `
    },

    "Duro": {
        descripcion: `
Tu máximo de puntos de vida aumenta en una cantidad igual al doble de tu nivel de personaje cuando obtienes esta hazaña. Cada vez que obtienes un nivel de personaje a partir de entonces, tu máximo de puntos de vida aumenta en 2 puntos de vida adicionales.
        `
    },

    "Culto del Dragón Iniciado": {
        descripcion: `
Lengua de dragón. Ya conoces a Draconic. Si ya conoce Draconic cuando selecciona esta hazaña, aprenderá un idioma de su elección en las tablas de idiomas del Manual del jugador.

El terror del dragón. Puedes realizar una acción mágica para infundir terror en una criatura que puedas ver a 30 pies de ti mismo. El objetivo debe tener éxito en un lanzamiento de salvación de Sabiduría (DC 8 más su modificador de Sabiduría y bonificación de competencia) o tener la condición de Asustado hasta el final de su siguiente turno. Si el objetivo tiene éxito en la guardada o cuando el efecto termina para un objetivo, el objetivo es inmune a este efecto durante 24 horas.

Inspirado en el miedo. Cuando haces que una criatura tenga la condición de Asustado y eres la fuente de su miedo, puedes obtener Inspiración Heroica si te falta. Una vez que utilice este beneficio, no podrá volver a utilizarlo hasta que termine un descanso corto o largo.
        `
    },

    "Enclave esmeralda incipiente": {
        descripcion: `
Habla con animales. Siempre tienes el Habla con animales hechizo preparado y puedes lanzarlo con cualquier ranura para hechizos que tengas. Inteligencia, Sabiduría o Carisma es tu habilidad para lanzar hechizos para este hechizo (elige cuando seleccionas esta hazaña). Cuando lanzas este hechizo como Ritual, su duración es de 8 horas.

Equipo de etiqueta. Cuando realiza la acción de Ayuda, puede cambiar de lugar con un aliado dispuesto a menos de 5 pies de usted como parte de esa misma acción. Este movimiento no provoca ataques de oportunidad. No puedes utilizar este beneficio si el aliado tiene la condición de Incapacitado.
        `
    },

    "Agente Harper": {
        descripcion: `
Conoces jerga de los ladrones.

Entrenamiento de instrumentos. Obtienes competencia con un instrumento musical de tu elección.

Melodía distraída. Cuando realizas la acción de Ayuda para ayudar en la tirada de ataque de un aliado, el enemigo que estás distrayendo puede estar a 30 pies de ti, en lugar de a 5 pies de ti, siempre que el enemigo pueda verte u oírte.
        `
    },

    "Agente de la Alianza de los Señores": {
        descripcion: `
Huelga inspiradora. Una vez por turno, cuando consigues un golpe crítico contra una criatura, puedes elegir un aliado a 30 pies de ti mismo que pueda verte u oírte y que carezca de inspiración heroica. Ese aliado gana inspiración heroica.

Reafirmar Honor. Cuando un enemigo que puedes ver inflige daño a un aliado tuyo que está a 5 pies de ti, tienes ventaja en tu próxima tirada de ataque contra ese enemigo antes del final de tu siguiente turno.
        `
    },

    "Hábil": {
        descripcion: `
Obtienes competencia en cualquier combinación de tres habilidades o herramientas de tu elección.

Repetible. Puedes realizar esta hazaña más de una vez.
        `
    },

    "Torre del Dragón Púrpura": {
        descripcion: `
Súplica. Obtienes competencia en una de las siguientes habilidades: Perspicacia, Rendimiento o Persuasión.

Grito de reunión. Cuando lanzas Iniciativa y no tienes la condición Incapacitada, puedes elegir una cantidad de criaturas igual a tu Bono de Competencia que puedes ver a 30 pies de ti mismo. Esas criaturas obtienen inspiración heroica.

Una vez que utilice este beneficio, no podrá volver a hacerlo hasta que termine un descanso prolongado.
        `
    },

    "Chispa de fuego de hechizos": {
        descripcion: `
Absorción mágica. Una vez por turno, cuando recibes daño de un hechizo o efecto mágico, reduces el daño total recibido en 1d4. No puedes utilizar este beneficio si tienes la condición de Incapacitado.

Llama de fuego de hechizo. Aprendes el truco Llama Sagrada. Inteligencia, Sabiduría o Carisma es tu habilidad para este hechizo (elige cuando seleccionas esta hazaña). También puedes usar este truco como una acción adicional varias veces igual a su bonificación de competencia y recuperará todos los usos gastados cuando termine un descanso prolongado.
        `
    },

    "Tiro del Guantelete": {
        descripcion: `
Párate como uno. Cuando un aliado a menos de 5 pies de usted es sometido a un efecto que lo empujaría o tiraría, puede tomar una reacción para evitar que ese aliado sea empujado o tirado. Para recibir este beneficio, el aliado no puede tener la condición de Incapacitado.

Vigilante. Cuando realizas la acción Listo, la siguiente tirada de ataque realizada en tu contra tiene una desventaja antes del inicio de tu siguiente turno.
        `
    },

    "Zhentarim Ruffian": {
        descripcion: `
Apertura de explotación. Cuando lanzas daño para un ataque de oportunidad, puedes tirar los dados de daño dos veces y usar cualquiera de las tiradas contra el objetivo.

Familia primero. Si tiene inspiración heroica cuando lanza la Iniciativa, puede gastarla para darse a usted y a sus aliados una ventaja en esa lista de Iniciativa.
        `
    },

    "Niño del Sol": {
        descripcion: `
Ojos de Eirdu. Usted y sus aliados a menos de 10 pies de distancia tienen la ventaja de salvar lanzamientos realizados para evitar o poner fin a la condición de cegado.

Fuego de hadas. Aprendes el Fuego de hadas hechizo. Inteligencia, Sabiduría o Carisma es tu habilidad para lanzar hechizos para este hechizo (elige cuando seleccionas esta hazaña). Puedes lanzarlo una vez sin un espacio para hechizos y recuperas la capacidad de lanzarlo de esa manera cuando terminas un descanso largo. También puedes lanzar el hechizo usando cualquier espacio para hechizos que tengas.

Cuando lanzas Fuego de hadas sin una ranura para hechizos que utilice este beneficio, recibir daño no puede romper su concentración en el hechizo.
        `
    },

    "Hexer de Shadowmoor": {
        descripcion: `
Hex. Siempre tienes el Hex hechizo preparado. Inteligencia, Sabiduría o Carisma es tu habilidad para lanzar hechizos para este hechizo (elige cuando seleccionas esta hazaña). Puedes lanzarlo una vez sin un espacio para hechizos y recuperas la capacidad de lanzarlo de esa manera cuando terminas un descanso largo. También puedes lanzar el hechizo usando cualquier espacio para hechizos que tengas.

Magia de maldición. Cuando una criatura con la que has maldecido Hex te golpea con una tirada de ataque, la criatura recibe un daño psíquico igual a tu bonificación de competencia. Una criatura recibe este daño sólo una vez por turno.
        `
    },

    "Juerguista incansable": {
        descripcion: `
Cuando un aliado que puedes ver a menos de 60 pies de ti mismo gasta Inspiración Heroica, puedes ganar Inspiración Heroica si te falta. Puede utilizar este beneficio varias veces igual a su bonificación de competencia y recuperará todos los usos gastados cuando termine un descanso corto o largo.
        `
    },

    "Cazador vampiro": {
        descripcion: `
Escape hábil. Tiene ventajas en los cheques para escapar de restricciones no mágicas o de la condición Grappled.

Barrio de Vitalidad. Cuando recibe daño necrótico, puede realizar una reacción para mitigar el daño. Gira un número de d6 igual a tu Bono de Competencia y agrégalos. Reduce el daño necrótico que recibes en este total. Una vez que utilice este beneficio, no podrá volver a utilizarlo hasta que termine un descanso corto o largo.
        `
    },

    "El juguete del vampiro": {
        descripcion: `
Decantando. Cuando terminas un descanso largo, puedes crear uno Poción de curación o una Antitoxina, siempre y cuando tengas un vial o matraz vacío. Estos líquidos se evaporan cuando terminas otro Descanso Largo.

Retiro oportuno. Puede realizar una acción de bonificación para realizar la acción Dash o la acción Desactivar. Puede utilizar este beneficio varias veces igual a su bonificación de competencia y recuperará todos los usos gastados cuando termine un descanso prolongado.

Conexión vampírica. El DM determina el destino de tu antiguo maestro vampiro. Mientras usted y su antiguo maestro vampiro están en el mismo plano de existencia, el vampiro puede comunicarse con usted telepáticamente y usted puede optar por permitir que el vampiro perciba a través de sus sentidos.
        `
    },

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