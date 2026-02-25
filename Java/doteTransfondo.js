const dotesDB = {

    "Alerta": {
        descripcion: `
Competencia en iniciativas. Cuando lanzas Iniciativa, puedes agregar tu Bono de Competencia.

Intercambio de iniciativas. Inmediatamente después de lanzar Iniciativa, puedes intercambiar tu resultado con el de un aliado dispuesto en el mismo combate. No puedes hacerlo si tú o el aliado estáis Incapacitados.
        `
    },

    "Artesano": {
        descripcion: `
Competencia con tres herramientas artesanales de tu elección.

Descuento. Obtienes un 20% de descuento en objetos no mágicos.

Elaboración rápida. Al terminar un Descanso Largo puedes crear una pieza de equipo si dominas las herramientas asociadas. El objeto dura hasta tu siguiente Descanso Largo.

Elaboración rápida:
• Carpintero: Escalera, Antorcha
• Peletero: Estuche, Bolsa
• Mason: Bloque y aparejo
• Alfarero: Jarra, Lámpara
• Herrero: Rodamientos, Cubo, Abrojos, Gancho, Olla
• Tinker: Campana, Pala, Caja de Yesca
• Tejedor: Cesta, Cuerda, Red, Tienda
• Tallador madera: Garrote, Gran Garrote, Bastón
        `
    },

    "Curandero": {
        descripcion: `
Médico de batalla. Como acción, puedes gastar un uso de un kit de sanador para que una criatura a 5 pies gaste un Dado de Golpe y recupere el resultado + tu Bono de Competencia.

Repeticiones curativas. Cuando tires un dado para restaurar puntos de golpe, puedes repetir un 1.
        `
    },

    "Afortunado": {
        descripcion: `
Puntos de suerte iguales a tu Bono de Competencia (se recuperan tras Descanso Largo).

Ventaja. Gasta 1 punto para obtener ventaja en una tirada d20.

Desventaja. Gasta 1 punto para imponer desventaja a un ataque contra ti.
        `
    },

    "Iniciado Mágico": {
        descripcion: `
Dos trucos de la lista de Clérigo, Druida o Mago.

Hechizo de nivel 1 preparado permanentemente (1 uso gratuito por Descanso Largo).

Puedes lanzarlo también con espacios de conjuro.

Cambio de hechizo al subir nivel.

Repetible con listas distintas.
        `
    },

    "Músico": {
        descripcion: `
Competencia con tres instrumentos musicales.

Canción alentadora. Al finalizar un descanso, otorgas Inspiración Heroica a aliados iguales a tu Bono de Competencia.
        `
    },

    "Atacante Salvaje": {
        descripcion: `
Una vez por turno, cuando golpeas con un arma, puedes tirar los dados de daño dos veces y elegir el resultado.
        `
    },

    "Hábil": {
        descripcion: `
Obtienes competencia en tres habilidades o herramientas.

Repetible.
        `
    },

    "Luchador de Taberna": {
        descripcion: `
Golpe desarmado 1d4 + Fuerza.

Repite resultados de 1 en daño desarmado.

Competencia con armas improvisadas.

Empujar 5 pies tras Golpe Desarmado (1 vez por turno).
        `
    },

    "Duro": {
        descripcion: `
Tu máximo de PG aumenta en el doble de tu nivel actual.

Ganas +2 PG adicionales cada nivel posterior.
        `
    },

    "Culto del Dragón Iniciado": {
        descripcion: `
Lengua dracónica adicional si ya la conoces.

Terror del dragón (CD 8 + Sabiduría + Competencia).

Inspiración al causar miedo (1 vez por descanso).
        `
    },

    "Enclave Esmeralda Incipiente": {
        descripcion: `
Habla con Animales siempre preparado.

Equipo de etiqueta: puedes intercambiar posición al usar Ayuda sin provocar OA.
        `
    },

    "Agente Harper": {
        descripcion: `
Conoces Thieves’ Cant.

Competencia con un instrumento musical.

Melodía que distrae: puedes usar Ayuda a 30 pies si el enemigo puede verte u oírte.
        `
    },

    "Agente de la Alianza de los Señores": {
        descripcion: `
Golpe crítico otorga Inspiración Heroica a un aliado.

Reafirmar Honor: ventaja contra quien dañe a un aliado cercano.
        `
    },

    "Torre del Dragón Púrpura": {
        descripcion: `
Competencia en Perspicacia, Interpretación o Persuasión.

Grito de reunión: al lanzar Iniciativa, otorgas Inspiración Heroica a criaturas iguales a tu Bono de Competencia.
        `
    },

    "Chispa de Fuego de Hechizos": {
        descripcion: `
Reduce daño mágico en 1d4 (1 vez por turno).

Aprendes Llama Sagrada y puedes lanzarla como acción adicional PB veces por Descanso Largo.
        `
    },

    "Tiro del Guantelete": {
        descripcion: `
Reacción para evitar que empujen o tiren a un aliado cercano.

Vigilante: tras acción Listo, el siguiente ataque contra ti tiene desventaja.
        `
    },

    "Mercenario Zhentarim": {
        descripcion: `
Daño de Ataque de Oportunidad: tira dos veces y elige.

Familia primero: si tienes Inspiración al lanzar Iniciativa, tú y aliados tienen ventaja.
        `
    },

    "Niño del Sol": {
        descripcion: `
Ventaja contra Cegado a 10 pies.

Aprendes Fuego Feérico (1 uso gratuito por descanso).

El daño no rompe concentración al usar el beneficio gratuito.
        `
    },

    "Hexer de Shadowmoor": {
        descripcion: `
Hex siempre preparado (1 uso gratuito por descanso).

Magia de maldición: criaturas malditas que te golpeen reciben daño psíquico igual a tu Bono de Competencia.
        `
    },

    "Juerguista Incansable": {
        descripcion: `
Cuando un aliado gasta Inspiración Heroica, puedes obtenerla.

Usos iguales a tu Bono de Competencia por descanso.
        `
    },

    "Cazador Vampiro": {
        descripcion: `
Ventaja para escapar de restricciones no mágicas o Grappled.

Reacción: reduce daño necrótico en PB d6 (1 vez por descanso).
        `
    },

    "El Juguete del Vampiro": {
        descripcion: `
Puedes crear una Poción de Curación o Antitoxina tras Descanso Largo (desaparece al siguiente descanso).

Acción adicional para Dash o Desactivar PB veces por descanso.

Conexión vampírica determinada por el DM.
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