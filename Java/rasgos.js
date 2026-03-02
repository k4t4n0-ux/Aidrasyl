document.addEventListener("DOMContentLoaded", function () {

    const contenedor = document.getElementById("bloqueRasgos");

    contenedor.innerHTML = `
        <div class="bloque-rasgos">
            <div class="rasgos-header">
                <span>Rasgos de Clase</span>
                <button type="button" class="toggle-rasgos">▼</button>
            </div>
            <div class="rasgos-contenido oculto"></div>
        </div>
    `;

    const contenido = contenedor.querySelector(".rasgos-contenido");
    const toggleBtn = contenedor.querySelector(".toggle-rasgos");

    toggleBtn.addEventListener("click", () => {
        contenido.classList.toggle("oculto");
        toggleBtn.textContent = contenido.classList.contains("oculto") ? "▼" : "▲";
    });

    // ===== BASE DE DATOS DE RASGOS =====

    const rasgosClases = {
        artificiero: {
            1: {
                "Competencias": "Si obtienes esta clase como clase principal y no multi clase obtienes las siguientes competencias. Competencia en las toradas de salvación de Inteligencia y Constitución. Elija 2 habilidades: Arcanos, Historia, Investigación, Medicina, Naturaleza, Percepción o Juego de manos. Armas Simples. Herramientas de ladrón, herramientas de manitas y un tipo de herramientas de artesano de su elección. Armadura y Escudos Ligeros y Medianos.",
                "Lanzamiento de hechizos":"",
                "La magia de Manitas":"Aprendes el truco Reparación. Como acción mágica mientras sostienes las herramientas de Manitas, puedes crear un elemento en un espacio desocupado a 5 pies de ti mismo, eligiendo el elemento de la siguiente lista. El artículo dura hasta que terminas un Descanso Largo, momento en el que desaparece.Puede usar esta función un número de veces igual a su modificador de Inteligencia (mínimo de una vez) y recuperará todos los usos gastados cuando termine un descanso prolongado.:",
                "":"Canicas, Matraz, Bolsa, Cesta, Gancho de agarre, Cuerda, Saco dormir, Trampa de caza, Saco, Campana, Jarra, Pala, Manta, Lámpara, Púas de Hierro, Polea y aparejo, Esposas, Cadena, Botella de Vidrio, Red, Yesero, Cubo, Aceite, Antorcha, Estrellas de púas, Papel, Vial, Vela, Pergamino, Palanca, Polo"

            }
        },

        barbaro: {
            1: {
                "Ira": "Puedes entrar en un estado de furia...",
                "Defensa sin Armadura": "Mientras no lleves armadura..."
            },
            2: {
                "Ataque Temerario": "Puedes atacar con ventaja..."
            },
            5: {
                "Ataque Extra": "Puedes atacar dos veces..."
            }
        },

        luchador: {
            1: {
                "Estilo de Combate": "Adoptas un estilo de combate especializado.",
                "Segunda Oleada": "Puedes recuperar puntos de golpe..."
            },
            5: {
                "Ataque Extra": "Puedes atacar dos veces cuando realizas la acción de Ataque."
            }
        }

    };

    const rasgosSubclases = {

        campeón: {
            3: {
                "Crítico Mejorado": "Tus ataques críticos ocurren con 19-20."
            }
        },

        maestro_de_batalla: {
            3: {
                "Dados de Superioridad": "Aprendes maniobras especiales..."
            }
        }

    };

    // ===== FUNCION PRINCIPAL =====

    function actualizarRasgos() {

        contenido.innerHTML = "";

        const clase1 = document.getElementById("clase").value;
        const nivel1 = parseInt(document.getElementById("nivel1").value) || 0;
        const subclase1 = document.getElementById("subclase").value;

        const clase2 = document.getElementById("clase2").value;
        const nivel2 = parseInt(document.getElementById("nivel2").value) || 0;
        const subclase2 = document.getElementById("subclase2").value;

        // Clase principal
        renderizarRasgosClase(clase1, nivel1);

        // Subclase principal
        renderizarRasgosSubclase(subclase1, nivel1);

        // Clase secundaria
        if (nivel2 > 0) {
            renderizarRasgosClase(clase2, nivel2);
            renderizarRasgosSubclase(subclase2, nivel2);
        }
    }

    function renderizarRasgosClase(clase, nivel) {

        if (!rasgosClases[clase]) return;

        const rasgos = rasgosClases[clase];

        Object.keys(rasgos).forEach(nivelRasgo => {

            if (nivel >= nivelRasgo) {

                Object.entries(rasgos[nivelRasgo]).forEach(([nombre, descripcion]) => {

                    crearRasgo(nombre, descripcion, `Nivel ${nivelRasgo}`);
                });

            }
        });
    }

    function renderizarRasgosSubclase(subclase, nivel) {

        if (!rasgosSubclases[subclase]) return;

        const rasgos = rasgosSubclases[subclase];

        Object.keys(rasgos).forEach(nivelRasgo => {

            if (nivel >= nivelRasgo) {

                Object.entries(rasgos[nivelRasgo]).forEach(([nombre, descripcion]) => {

                    crearRasgo(nombre, descripcion, `Subclase Nivel ${nivelRasgo}`);
                });

            }
        });
    }

    function crearRasgo(nombre, descripcion, etiquetaNivel) {

        const div = document.createElement("div");
        div.classList.add("rasgo-item");

        div.innerHTML = `
            <div class="rasgo-titulo">
                <strong>${nombre}</strong>
                <span class="rasgo-nivel">${etiquetaNivel}</span>
            </div>
            <div class="rasgo-descripcion">${descripcion}</div>
        `;

        contenido.appendChild(div);
    }

    // ===== EVENTOS =====

    ["clase", "subclase", "nivel1", "clase2", "subclase2", "nivel2"]
        .forEach(id => {
            document.getElementById(id).addEventListener("change", actualizarRasgos);
        });

});