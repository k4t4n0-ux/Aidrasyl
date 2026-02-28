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
            "Revelación Celestial.":` 
Cuando llegas al nivel de personaje 3, puedes transformarte como una acción de bonificación usando una de las siguientes opciones (elige la opción cada vez que transformes). La transformación dura 1 minuto o hasta finalizarla (no es necesario realizar ninguna acción). Una vez que te transformas, no podrás volver a hacerlo hasta que termines un Descanso Largo.

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
            "habilidad": `Ancestros dracónicos
Dragón	Tipo de daño
Negro	Ácido
Azul	Rayo
Latón	Fuego
Bronce	Rayo
Cobre	Ácido
Oro	Fuego
Verde	Veneno
Rojo	Fuego
Plata	Frío
Blanco	Frío`,
            "Arma de aliento.": `Cuando realizas la acción de Ataque en tu turno, puedes reemplazar uno de tus ataques con una exhalación de energía mágica en un Cono de 15 pies o una Línea de 30 pies de ancho (elige la forma cada vez). Cada criatura en esa área debe realizar una tirada de salvación de destreza (DC 8 más su modificador de Constitución y bonificación de competencia). En una salvación fallida, una criatura recibe un daño de 1d10 del tipo determinado por su rasgo de ascendencia dracónica. En una salvación exitosa, una criatura recibe la mitad de daño. Este daño aumenta en 1d10 cuando alcanzas los niveles de carácter 5 (2d10), 11 (3d10) y 17 (4d10).

Puedes usar esta arma de aliento varias veces igual a tu bonificación de competencia y recuperas todos los usos gastados cuando terminas un descanso largo.`,
            "Resistencia al daño.": `Tienes resistencia al tipo de daño determinado por tu rasgo de ascendencia dracónica.`,
            "Vuelo dracónico.": ` Cuando alcanzas el nivel 5 de personaje, puedes canalizar magia dracónica para darte un vuelo temporal. Como acción de bonificación, te brotan alas espectrales en la espalda que duran 10 minutos o hasta que retraes las alas (no es necesario realizar ninguna acción) o tienes la condición de incapacitado. Durante ese tiempo, tienes una velocidad de vuelo igual a tu velocidad. Tus alas parecen estar hechas de la misma energía que tu arma de aliento. Una vez que uses este rasgo, no podrás usarlo nuevamente hasta que termines un Descanso Largo.`,            
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

            bloqueRasgo.innerHTML = `
                <h4>${nombreRasgo}</h4>
                <p>${descripcion}</p>
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