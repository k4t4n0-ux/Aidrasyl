// =============================
// BASE DE DATOS DE ESPECIES
// =============================

const especiesDB = {

    "Aasimar": {
        tipo: "Humanoide",
        visionOscuridad: true,
        rasgos: {
            "Tamaño base Mediano o Pequeño": ``,
            "Velocidad base 30 pies": ``,
            "Resistencia Celestial":`Tienes resistencia al daño necrótico y al daño radiante.`,
            "Manos Curativas":`Como acción mágica, tocas una criatura y haces rodar una cantidad de d4 igual a tu bonificación de competencia. La criatura recupera una cantidad de puntos de vida igual al total acumulado. Una vez que uses este rasgo, no podrás usarlo nuevamente hasta que termines un Descanso Largo.`,
            "Portadir de Luz":`Ya sabes el truco Luz. Carisma es tu habilidad para lanzar hechizos.`,
            "Revelación Celestial.":`Cuando llegas al nivel de personaje 3, puedes transformarte como una acción de bonificación usando una de las siguientes opciones (elige la opción cada vez que transformes). La transformación dura 1 minuto o hasta finalizarla (no es necesario realizar ninguna acción). Una vez que te transformas, no podrás volver a hacerlo hasta que termines un Descanso Largo.
Una vez en cada uno de tus turnos antes de que finalice la transformación, puedes causar daño adicional a un objetivo cuando le infliges daño con un ataque o un hechizo. El daño adicional equivale a su bonificación de competencia, y el tipo de daño adicional es Necrótico para Sábana Santa Necrótica o Radiante para Alas Celestiales y Resplandor Interior.
Aquí están las opciones de transformación:`,
            "Alas Celestiales":`Dos alas espectrales brotan temporalmente de tu espalda. Hasta que finalice la transformación, tendrás una velocidad de vuelo igual a tu velocidad.`,
            "Resplandor interior":`La luz del oído irradia temporalmente desde los ojos y la boca. Mientras dure, arrojas Luz Brillante en un radio de 10 pies y Luz Dim durante 10 pies adicionales, y al final de cada uno de tus turnos, cada criatura dentro de 10 pies de ti recibe un daño Radiante igual a tu Bonificación de Competencia.`,
            "Sudario necrótico":`Tus ojos se convierten brevemente en charcos de oscuridad y las alas no voladoras brotan temporalmente de tu espalda. Las criaturas que no sean tus aliados a menos de 10 pies de ti deben tener éxito en un lanzamiento de salvación de Charisma (DC 8 más tu modificador de Charisma y bonificación de competencia) o tener la condición de Asustado hasta el final de tu siguiente turno.`
        }
        
    },


    "Dracónico": {
        tipo: "Humanoide",
        visionOscuridad: true,
        rasgos: {
            "Tamaño base Medio": ``,
            "Velocidad base 30 pies": ``,
            "Ascendencia dracónica": `Tu linaje proviene de un dragón progenitor. Elige el tipo de dragón de la tabla Ancestros dracónicos. Su elección afecta sus rasgos de arma de aliento y resistencia al daño, así como su apariencia.`,
            "Ancestros dracónicos": `Dragón	Tipo de daño.
Negro	Ácido.
Azul	Rayo.
Bronce	Rayo.
Cobre	Ácido.
Oro	Fuego.
Verde	Veneno.
Rojo	Fuego.
Plata	Frío.
Blanco	Frío.`,
            "Arma de aliento.": `Cuando realizas la acción de Ataque en tu turno, puedes reemplazar uno de tus ataques con una exhalación de energía mágica en un Cono de 15 pies o una Línea de 30 pies de ancho (elige la forma cada vez). Cada criatura en esa área debe realizar una tirada de salvación de destreza (DC 8 más su modificador de Constitución y bonificación de competencia). En una salvación fallida, una criatura recibe un daño de 1d10 del tipo determinado por su rasgo de ascendencia dracónica. En una salvación exitosa, una criatura recibe la mitad de daño. Este daño aumenta en 1d10 cuando alcanzas los niveles de carácter 5 (2d10), 11 (3d10) y 17 (4d10).
Puedes usar esta arma de aliento varias veces igual a tu bonificación de competencia y recuperas todos los usos gastados cuando terminas un descanso largo.`,
            "Resistencia al daño.": `Tienes resistencia al tipo de daño determinado por tu rasgo de ascendencia dracónica.`,
            "Vuelo dracónico.": ` Cuando alcanzas el nivel 5 de personaje, puedes canalizar magia dracónica para darte un vuelo temporal. Como acción de bonificación, te brotan alas espectrales en la espalda que duran 10 minutos o hasta que retraes las alas (no es necesario realizar ninguna acción) o tienes la condición de incapacitado. Durante ese tiempo, tienes una velocidad de vuelo igual a tu velocidad. Tus alas parecen estar hechas de la misma energía que tu arma de aliento. Una vez que uses este rasgo, no podrás usarlo nuevamente hasta que termines un Descanso Largo.`,            
        }
    },    
    "Enano": {
        tipo: "Humanoide",
        visionOscuridad: true,
        rasgos: {
            "Tamaño base Medio": ``,
            "Velocidad base 30 pies": ``,
            "Resiliencia enana.": `Tienes resistencia al daño por veneno. También tiene la ventaja de guardar los lanzamientos que realiza para evitar o poner fin a la condición de envenenamiento.`,
            "Dureza enana.": `Su máximo de puntos de vida aumenta en 1 y aumenta en 1 nuevamente cada vez que gana un nivel.`,
            "Astuto.": `Como acción adicional, obtienes Tremorsense con un alcance de 60 pies durante 10 minutos. Debes estar sobre una superficie de piedra o tocando una superficie de piedra para usar este Tremorsense. La piedra puede ser natural o trabajada.
Puede utilizar esta acción de bonificación varias veces igual a su bonificación de competencia y lo recuperará todo usos gastados al finalizar un Descanso Largo.`,
        }
    },    
    "Elfo": {
        tipo: "Humanoide",
        visionOscuridad: true,
        rasgos: {
            "Tamaño base Medio": ``,
            "Velocidad base 30 pies": ``,
            "Linaje élfico.": `Eres parte de un linaje que te otorga habilidades sobrenaturales. Elija un linaje de la tabla Linajes élficos. Obtienes el beneficio de nivel 1 de ese linaje.

Cuando alcanzas los niveles de personaje 3 y 5, aprendes un hechizo de nivel superior, como se muestra en la tabla. Siempre tienes ese hechizo preparado. Puedes lanzarlo una vez sin un espacio para hechizos y recuperas la capacidad de lanzarlo de esa manera cuando terminas un descanso largo. También puedes lanzar el hechizo usando cualquier espacio para hechizos que tengas del nivel apropiado.

Inteligencia, Sabiduría o Carisma es tu habilidad para lanzar hechizos para los hechizos que lanzas con este rasgo (elige la habilidad cuando seleccionas el linaje).`,
            "Ascendencia Fey.": `Tienes la ventaja de guardar los lanzamientos que realices para evitar o poner fin a la condición Charmed`,
            "Sentidos agudos.": `Tienes competencia en la habilidad Perspicacia, Percepción o Supervivencia.`,
            "Trance": `No necesitas dormir y la magia no puede hacerte dormir. Puedes terminar un Descanso Largo en 4 horas si pasas esas horas en una meditación en trance, durante la cual conservas la conciencia.`,
            "Linajes élficos": `Linaje	Nivel 1	Nivel 3	Nivel 5
Drow	El alcance de tu Darkvision aumenta a 120 pies. También conoces el Luces danzantes no puedo viajar.	Fuego de hadas	Oscuridad
Alto Elfo	Ya sabes el Prestidigitación no puedo viajar. Cada vez que termines un descanso largo, puedes reemplazar ese viaje cantrip con un viaje cantrip diferente de la lista de hechizos del Mago.	Detectar magia	Paso brumoso
Elfo de madera	Tu velocidad aumenta a 35 pies. También conoces el Artesanía druida no puedo viajar.	Jinete largo	Pase sin rastro
Elfo Lorwyn	Ya sabes el Látigo de espinas no puedo viajar. Siempre que termines un descanso largo, puedes reemplazar ese viaje cantrip con un viaje cantrip diferente de la lista de hechizos druidas.	Comando	Silencio
Elfo de Shadowmoor	El alcance de tu Darkvision aumenta a 120 pies. También conoces el Wisp estrellado no puedo viajar.	Heroísmo	Reposo suave`,

        }
    },    
    "Gnomo": {
        tipo: "Humanoide",
        visionOscuridad: true,
        rasgos: {
            "Tamaño base Pequeño": ``,
            "Velocidad base 30 pies": ``,
            "Astucia gnómica. ": `Tienes ventajas en lanzamientos de salvación de Inteligencia, Sabiduría y Carisma.`,
            "Linaje gnomo.": `Eres parte de un linaje que te otorga habilidades sobrenaturales. Elige una de las siguientes opciones; cualquiera que elijas, Inteligencia, Sabiduría o Carisma es tu habilidad para lanzar hechizos para los hechizos que lanzas con este rasgo (elige la habilidad cuando seleccionas el linaje):`,
            "Gnomo del bosque.": `Ya sabes el Ilusión menor no puedo viajar.
También siempre tienes el Habla con animales hechizo preparado. Puedes lanzarlo sin una ranura para hechizos varias veces igual a tu bonificación de competencia y recuperas todos los usos gastados cuando terminas un descanso largo. También puedes usar cualquier espacio para hechizos que tengas para lanzar el hechizo.`,
            "Gnomo de roca.": `Ya sabes el Reparando y Prestidigitación cantrips. Además, puedes dedicar 10 minutos a lanzar Prestidigitation para crear un pequeño dispositivo de relojería (CA 5,1 HP), como un juguete, un encendedor o una caja de música. Cuando creas el dispositivo, determinas su función eligiendo un efecto de Prestidigitación; el dispositivo produce ese efecto cada vez que usted u otra criatura realiza una acción de bonificación para activarlo con un toque. Si el efecto elegido tiene opciones dentro, elige una de esas opciones para el dispositivo cuando lo crea. Por ejemplo, si eliges el efecto de encendido-extinción del hechizo, determinas si el dispositivo enciende o apaga el fuego; el dispositivo no hace ambas cosas. Puedes tener tres de estos dispositivos a la vez, y cada uno se desmorona 8 horas después de su creación o cuando lo desmantelas con un toque como acción de Utilización.`,

        }
    },    
    "Goliat": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base Medio": ``,
            "Velocidad base 35 pies": ``,
            "Ascendencia gigante.": `Eres descendiente de Gigantes. Elija uno de los siguientes beneficios: una bendición sobrenatural de su ascendencia; puede utilizar el beneficio elegido varias veces igual a su bonificación de competencia y recuperará todos los usos gastados cuando termine un descanso prolongado:
La excursión de la nube (Gigante de la nube). Como acción adicional, te teletransportas mágicamente hasta 30 pies a un espacio desocupado que puedas ver.
Fire's Burn (Gigante del Fuego). Cuando golpeas un objetivo con una tirada de ataque y le infliges daño, también puedes infligir daño de fuego 1d10 a ese objetivo.
Frost's Chill (Gigante de las heladas). Cuando golpeas un objetivo con una tirada de ataque y le infliges daño, también puedes infligir daño en frío 1d6 a ese objetivo y reducir su velocidad en 10 pies hasta el comienzo de tu siguiente turno.
Hill's Tumble (Gigante de la colina). Cuando golpeas a una criatura grande o más pequeña con una tirada de ataque y le infliges daño, puedes darle a ese objetivo la condición de Prono.
La resistencia de Stone (Gigante de Piedra). Cuando recibes daño, puedes tomar una reacción para rodar 1d12. Agregue su modificador de Constitución al número obtenido y reduzca el daño en ese total.
Trueno de tormenta (Gigante de tormenta). Cuando recibes daño de una criatura a menos de 60 pies de ti, puedes tomar una reacción para infligir daño de 1d8 Thunder a esa criatura.`,
            "Forma grande.": ` A partir del nivel de personaje 5, puedes cambiar tu tamaño a Grande como acción adicional si estás en un espacio lo suficientemente grande. Esta transformación dura 10 minutos o hasta finalizarla (no es necesario realizar ninguna acción). Durante ese tiempo, tendrá la ventaja de realizar comprobaciones de fuerza y su velocidad aumentará en 10 pies. Una vez que uses este rasgo, no podrás usarlo nuevamente hasta que termines un Descanso Largo.`,
            "Construcción poderosa.": `Tiene ventajas en cualquier verificación de capacidad que realice para finalizar la condición Grappled. También cuenta como una talla más grande a la hora de determinar su capacidad de carga.`,
        }
    },    
    "Mediano": {
        tipo: "Humanoide",
        visionOscuridad: true,
        rasgos: {
            "Tamaño base Pequeño": ``,
            "Velocidad base 30 pies": ``,
            "Valiente": `Tienes la ventaja de guardar los lanzamientos que realizas para evitar o poner fin a la condición de miedo.`,
            "Ágilidad a medias.": `Puedes moverte por el espacio de cualquier criatura de tamaño mayor que tú, pero no puedes detenerte en el mismo espacio.`,
            "Suerte.":`Cuando sacas un 1 en el d20 de una prueba D20, puedes volver a tirar el dado y debes usar el nuevo rollo.`,
            "Naturalmente sigiloso.":`Puedes realizar la acción Ocultar incluso cuando estás oscurecido solo por una criatura que sea al menos un tamaño mayor que tú.`
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },    
    "Especie": {
        tipo: "Humanoide",
        visionOscuridad: false,
        rasgos: {
            "Tamaño base": ``,
            "Velocidad base": ``,
            "habilidad": ``,
        }
    },

};


// =============================
// SELECT SUPERIOR
// =============================

const selectEspecie = document.getElementById("especieSelect");

if (selectEspecie) {
    Object.keys(especiesDB)
        .sort((a, b) => a.localeCompare(b))
        .forEach(nombre => {
            const option = document.createElement("option");
            option.value = nombre;
            option.textContent = nombre;
            selectEspecie.appendChild(option);
        });
}


// =============================
// BLOQUE ESPECIE
// =============================

const bloqueEspecie = document.getElementById("bloqueEspecie");

if (bloqueEspecie) {

    bloqueEspecie.innerHTML = `
        <div class="dote-bloque-unico">

            <div class="dote-bloque-header">
                <strong id="tituloEspecie">Especie</strong>
                <button id="toggleEspecie">▼</button>
            </div>

            <div class="dote-bloque-body" id="contenidoEspecie">

                <div id="infoBaseEspecie"></div>

                <div class="campo-resistencias">
                    <label>Resistencias e Inmunidades</label>
                    <textarea id="resistenciasEspecie"
                            class="autoResize"
                            rows="1"
                            placeholder="Ej: Resistencia al fuego, Inmunidad al veneno...">
                    </textarea>
                </div>

                <hr>

                <div id="listaRasgosEspecie"></div>

            </div>
        </div>
    `;

    const toggle = document.getElementById("toggleEspecie");
    const contenido = document.getElementById("contenidoEspecie");
    const infoBase = document.getElementById("infoBaseEspecie");
    const lista = document.getElementById("listaRasgosEspecie");
    const titulo = document.getElementById("tituloEspecie");

    contenido.style.display = "none";

    toggle.addEventListener("click", () => {
        const abierta = contenido.style.display === "block";
        contenido.style.display = abierta ? "none" : "block";
        toggle.textContent = abierta ? "▼" : "▲";
    });

    // =============================
    // CAMBIO DE ESPECIE
    // =============================

    selectEspecie.addEventListener("change", () => {

        const nombre = selectEspecie.value;
        const especie = especiesDB[nombre];

        lista.innerHTML = "";
        infoBase.innerHTML = "";

        if (!especie) {
            titulo.textContent = "Especie";
            return;
        }

        titulo.textContent = `Especie (${nombre})`;

        // Información base
        infoBase.innerHTML = `
            <p><strong>Tipo:</strong> ${especie.tipo}</p>
            <p><strong>Visión en la Oscuridad:</strong> ${especie.visionOscuridad ? "Sí" : "No"}</p>
        `;

        // Mostrar TODOS los rasgos automáticamente
        Object.entries(especie.rasgos).forEach(([nombreRasgo, descripcion]) => {

            const bloqueRasgo = document.createElement("div");
            bloqueRasgo.classList.add("rasgo-especie");

            const descripcionFormateada = descripcion
                .split("\n")
                .filter(linea => linea.trim() !== "")
                .map(linea => `<p>${linea.trim()}</p>`)
                .join("");

            bloqueRasgo.innerHTML = `
                <h4>${nombreRasgo}</h4>
                ${descripcionFormateada}
            `;

            lista.appendChild(bloqueRasgo);
        });

    });

}

document.addEventListener("input", function (e) {
    if (e.target.classList.contains("autoResize")) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }
});