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
                "Competencias": `Si obtienes esta clase como clase principal y no multi clase obtienes las siguientes competencias.
                Competencia en las toradas de salvación de Inteligencia y Constitución.
                Elija 2 habilidades: Arcanos, Historia, Investigación, Medicina, Naturaleza, Percepción o Juego de manos.
                Armas Simples. Herramientas de ladrón, herramientas de manitas y un tipo de herramientas de artesano de su elección. Armadura y Escudos Ligeros y Medianos.`,
                "Lanzamiento de hechizos":"",
                "La magia de Manitas":`Aprendes el truco Reparación.
                Como acción mágica mientras sostienes las herramientas de Manitas, puedes crear un elemento en un espacio desocupado a 5 pies de ti mismo, eligiendo el elemento de la siguiente lista. El artículo dura hasta que terminas un Descanso Largo, momento en el que desaparece.
                Puede usar esta función un número de veces igual a su modificador de Inteligencia (mínimo de una vez) y recuperará todos los usos gastados cuando termine un descanso prolongado.:
                Canicas, Matraz, Bolsa, Cesta, Gancho de agarre, Cuerda, Saco dormir, Trampa de caza, Saco, Campana, Jarra, Pala, Manta, Lámpara, Púas de Hierro, Polea y aparejo, Esposas, Cadena, Botella de Vidrio, Red, Yesero, Cubo, Aceite, Antorcha, Estrellas de púas, Papel, Vial, Vela, Pergamino, Palanca, Polo`
            },
            2: {
                "Réplica de objeto mágico":`
                Planes conocidos. Cuando obtenga esta función, elija cuatro planes para aprender de la tabla Planes de elementos mágicos (nivel de artífice 2+). Siempre que obtenga un nivel de Artífice, puede reemplazar uno de los planes que conoce con un nuevo plan para el cual califica.
                Aprende otro plan de su elección cuando alcanzaz los niveles de Artificiero 6, 10, 14, 18, como se muestra en la columna Planes conocidos de la tabla Características del Artífice. Cuando eliges un plan para aprender, lo eliges de cualquier tabla de Planes de elementos mágicos para la que califiques.
                Creando un artículo. Cuando terminas un descanso largo, puedes crear uno o dos objetos mágicos diferentes si tienes las herramientas de Tinker en la mano. Cada elemento se basa en uno de los planes que conoce para esta función.
                Si un elemento creado requiere Sintonización, puedes sintonizarte con él en el instante en que lo creas. Si decide sintonizar el elemento más adelante, debe hacerlo utilizando el proceso normal de Sintonización.
                Cuando alcanza ciertos niveles de Artífice especificados en la columna Elementos mágicos de la tabla Características del Artífice, la cantidad de objetos mágicos que puede crear al final de un Descanso prolongado aumenta. Cada elemento que cree debe basarse en un plan diferente que conozca.
                No puedes tener más objetos mágicos de esta función que el número que se muestra en la columna Objetos mágicos de la tabla Funciones del artífice para tu nivel. Si intentas exceder tu número máximo de objetos mágicos para esta función, el elemento más antiguo desaparece y luego aparece el nuevo elemento.
                Duración. Un objeto mágico creado por esta característica funciona como el objeto mágico normal, excepto que su magia no es permanente; cuando mueres, el objeto mágico desaparece después de 1d4 días. Si reemplazas un plan que conoces con un plan nuevo, cualquier elemento mágico creado con el plan reemplazado desaparece inmediatamente.
                Si un elemento que creó con esta función es un contenedor, como una bolsa de sujeción, y desaparece, su contenido aparece inofensivamente dentro y alrededor de su espacio.
                Enfoque de lanzamiento de hechizoos. Puedes usar cualquier Varita o Arma creada por esta función como enfoque de lanzamiento de hechizos en lugar de usar un conjunto de herramientas de artesano.
                Planes de artículos mágicos.
                Objeto mágico común que no es una poción, un pergamino o una maldición (puedes aprender esta opción varias veces y debes seleccionar un elemento diferente cada vez; cada elemento seleccionado cuenta como un plan diferente).
                Jarra de alquimia. Bolsa de Holding. Tapa de respiración de agua. Gafas de noche. Herramienta múltiple (requiere sintonía). Disparo repetido (requiere sintonía). Arma que regresa. Cuerda de escalada. Envío de piedras. Escudo +1. Varita de Detección Mágica. Varita de secretos. Varita del Mago de Guerra +1 (requiere sintonía). Arma +1. Envolturas de poder desarmado +1.`,
            },
            4: {
                "Mejora de la puntuación de habilidad":"Obtienes 2 puntos a mejorar las caracteristicas o un dote de tu elección para el cual calificas. Obtienes esta característica nuevamente en los niveles 8, 12 y 16 de Artificer."
            },
            6: {
                "Planes de artículos mágicos":"Armadura +1. Botas de tipo élfico. Botas del camino sinuoso (requiere sintonía). Capa de Elvenkind (requiere sintonía). Capa de la Manta Raya. Arma deslumbrante (requiere sintonía). Ojos encantadores (requiere sintonía). Ojos de visualización minuciosa. Guantes de robo. Yelmo de Conciencia. Linterna de revelación. Afilador mental (requiere sintonía). Collar de Adaptación (requiere sintonía). Tuberías de inquietante. Escudo de repulsión. Anillo de natación. Anillo de Caminata por el Agua. Escudo centinela. Anillo de repostaje de hechizos (requiere sintonía). Varita de misiles mágicos. Varita de Web (requiere sintonía). Arma de advertencia (requiere sintonía).",
                "Tinker de objetos mágicos":`Su función Replicar artículo mágico obtiene las siguientes opciones.
                Cargar artículo mágico. Como acción de bonificación, puedes tocar un objeto mágico a menos de 5 pies de ti mismo que creaste con Replicate Magic Item y que usa cargos. Gastas una ranura para hechizos de nivel 1+ y recargas el artículo. El número de cargas que recupera el artículo es igual al nivel de ranura de hechizo gastada.
                Drenar artículo mágico. Como acción adicional, puedes tocar un objeto mágico a 5 pies de ti mismo que creaste con Replicate Magic Item y hacer que el objeto desaparezca, convirtiendo su energía mágica en una ranura para hechizos. La ranura es de nivel 1 si el artículo es común o de nivel 2 si el artículo es poco común o raro. Una vez que uses esta función, no podrás volver a hacerlo hasta que termines un descanso prolongado. Cualquier ranura para hechizos que crees con esta función desaparece cuando terminas un descanso largo.
                Transmutar artículo mágico. Como acción mágica, puedes tocar un objeto mágico a 5 pies de ti mismo que creaste con Replicate Magic Item y transformarlo en un objeto mágico diferente. El elemento resultante debe basarse en un plan de elemento mágico que conozcas. Una vez que uses esta función, no podrás volver a hacerlo hasta que termines un descanso prolongado.`,
            },
            7: {
                "Flash de genio":`Cuando usted o una criatura que puede ver a menos de 30 pies de usted falla una verificación de habilidad o un lanzamiento de salvación, puede tomar una reacción para agregar una bonificación a la tirada, lo que podría provocar que tenga éxito. La bonificación es igual a tu modificador de Inteligencia (mínimo de +1).
                Puedes tomar esta Reacción un número de veces igual a tu modificador de Inteligencia (mínimo de una vez). Recuperas todos los usos gastados cuando terminas un descanso largo.`,
            },
            10: {
                "Planes de artículos mágicos":`Artículo maravilloso poco común que no está maldito (puedes aprender esta opción varias veces y debes seleccionar un elemento diferente cada vez; cada elemento seleccionado cuenta como un plan diferente).
                Armadura de Resistencia. Daga del veneno. Cadena élfica. Anillo de plumas cayendo. Anillo de salto. Anillo de blindaje mental. Escudo +2. Varita del Mago de Guerra +2. Arma +2. Envolturas de poder desarmado +2.`,
                "Adepto al artículo mágico":"Ahora puedes sintonizar hasta cuatro objetos mágicos a la vez.",
            },
            11: {
                "Artículo para almacenar hechizos":`Cada vez que terminas un Descanso Largo, puedes tocar un arma simple o marcial o un elemento que puedes usar como enfoque de lanzamiento de hechizos, y guardas un hechizo en él, eligiendo un hechizo Artífice de nivel 1, 2 o 3 que tenga un lanzamiento. tiempo de una acción y no requiere un componente Material que sea consumido por el hechizo (no es necesario tener el hechizo preparado).
                Mientras sostiene el objeto, una criatura puede realizar una acción mágica para producir el efecto del hechizo a partir de él, utilizando su modificador de habilidad de lanzamiento de hechizos. Si el hechizo requiere Concentración, la criatura debe concentrarse. Una vez que una criatura ha usado el objeto para producir el efecto del hechizo, el objeto no puede usarse de esta manera nuevamente hasta el comienzo del siguiente turno de la criatura.
                El hechizo permanece en el objeto hasta que se haya usado un número de veces igual al doble de su modificador de Inteligencia (mínimo de dos veces) o hasta que use esta función nuevamente para almacenar un hechizo en un objeto.`,
            },
            14: {
                "Planes de artículos mágicos":`Artículo raro y maravilloso que no está maldito (puedes aprender esta opción varias veces y debes seleccionar un elemento diferente cada vez; cada elemento seleccionado cuenta como un plan diferente).
                Armadura +2. Escudo para atrapar flechas (requiere sintonía). Lengua de llama (requiere sintonía). Anillo de acción libre (requiere sintonía). Anillo de Protección (requiere sintonía). Anillo del carnero (requiere sintonía).`,
                "Artículo Avanzado":`
                Sabio de objetos mágicos. Ahora puedes sintonizar hasta cinco objetos mágicos a la vez. 
                Gernio renovado. Cuando terminas un descanso corto, recuperas un uso gastado de tu función Flash de genio.` ,
            },
            18: {
                "Maestro de Objetos Mágicos":"Ahora puedes sintonizar hasta seis objetos mágicos a la vez."
            },
            19: {
                "Bendición épica":"Obtienes una dote de Dendición Épica u otra dote de tu elección para la que califiques."
            },
            20: {
                "Alma del Arte":`
                Engañar a la muerte. Si te reducen a 0 puntos de vida pero no te matan directamente, puedes desintegrar cualquier cantidad de objetos mágicos poco comunes o raros creados por tu función Replicar objeto mágico. Si lo haces, tus puntos de vida cambian a un número igual a 20 veces la cantidad de objetos mágicos desintegrados.
                Orientación mágica. Cuando terminas un descanso corto, recuperas todos los usos gastados de tu destello de genio si tienes sintonía con al menos un objeto mágico.`
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

        alquimista: {
            3: {
                "Herramientas del Comercio":" Obtienes competencia con los suministros de Alchemist y el kit de herboristería. Si ya tienes una de estas competencias, obtienes competencia con otro tipo de Herramientas Artesanales de tu elección (o con otros dos tipos si tienes ambas). Cuando preparas una poción usando las reglas de elaboración de la Guía del Dungeon Master, la cantidad de tiempo necesaria para elaborarla se reduce a la mitad.",
                "Hechizos de alquimista.":"Cuando alcanzas un nivel de Artífice especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados. Nivel 3: 	Palabra curativa, Rayo de enfermedad. Nivel 5: 	Esfera llameante, Flecha ácida de Melf. Nivel 9: Forma gaseosa, Palabra curativa masiva. Nivel 13: Sala de muerte, Esfera vitriólica. Nivel 17: 	Matanza de nubes, Levantar muerto",
                "Elixir experimental":`Siempre que termines un descanso prolongado mientras sostienes los suministros de Alchemist, puedes usar esa herramienta para producir mágicamente dos elixires. Para cada elixir, gire sobre la mesa de Elixir experimental para conocer el efecto del elixir, que se activa cuando alguien bebe el elixir. El elixir aparece en un vial y desaparece cuando se bebe o se vierte el elixir. Si queda algún elixir al finalizar un descanso prolongado, el elixir y su vial desaparecen.
Bebiendo un elixir. Como acción adicional, una criatura puede beber el elixir o administrarlo a otra criatura a menos de 5 pies de sí misma. Creando elixires adicionales. Como acción mágica mientras sostienes los suministros de Alchemist, puedes gastar un espacio de hechizo para crear otro elixir. Cuando lo haces, eliges su efecto de la mesa Experimental Elixir en lugar de rodar. Cuando alcanzas ciertos niveles de Artífice, puedes hacer un elixir adicional al final de cada Descanso Largo: un total de tres en el nivel 5, cuatro en el nivel 9 y cinco en el nivel 15.
1 Curación. El bebedor recupera una cantidad de puntos de vida igual a 2d8 más su modificador de Inteligencia. La cantidad de puntos de vida restaurados aumenta en 1d8 cuando alcanza los niveles de artífice 9 (3d8) y 15 (4d8).
2 Rapidez. La velocidad del bebedor aumenta en 10 pies durante 1 hora. Esta bonificación aumenta cuando alcanzas los niveles de Artífice 9 (15 pies) y 15 (20 pies).
3 Resiliencia. El bebedor obtiene una bonificación de +1 a AC durante 10 minutos. La duración aumenta cuando se alcanzan los niveles de Artífice 9 (1 hora) y 15 (8 horas).
4 Audacia. El bebedor puede tirar 1d4 y sumar el número tirado a cada tirada de ataque y lanzamiento de salvación que realiza durante el siguiente minuto. La duración aumenta cuando se alcanzan los niveles de Artífice 9 (10 minutos) y 15 (1 hora).
5 Vuelo. El bebedor gana una velocidad de vuelo de 10 pies durante 10 minutos. La velocidad de vuelo aumenta cuando alcanzas los niveles de Artífice 9 (20 pies) y 15 (30 pies).
6 Determinas el efecto del elixir eligiendo una de las otras filas de esta tabla.
`,
            },
            5: {
                "":""
            },
            9: {
                "":""
            },
            15: {
                "":""
            }
        },

        armero: {
            3: {
                "":"",
                "Hechizos de alquimista.":"Cuando alcanzas un nivel de Artífice especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados. Nivel 3: Nivel 5: Nivel 9: Nivel 13: Nivel 17: ",
                "":"",
            },
            5: {
                "":""
            },
            9: {
                "":""
            },
            15: {
                "":""
            }
        },

        artillero: {
            3: {
                "":"",
                "Hechizos de alquimista.":"Cuando alcanzas un nivel de Artífice especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados. Nivel 3: Nivel 5: Nivel 9: Nivel 13: Nivel 17: ",
                "":"",
            },
            5: {
                "":""
            },
            9: {
                "":""
            },
            15: {
                "":""
            }
        },

        batalla_smith: {
            3: {
                "":"",
                "Hechizos de alquimista.":"Cuando alcanzas un nivel de Artífice especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados. Nivel 3: Nivel 5: Nivel 9: Nivel 13: Nivel 17: ",
                "":"",
            },
            5: {
                "":""
            },
            9: {
                "":""
            },
            15: {
                "":""
            }
        },

        cartógrafo: {
            3: {
                "":"",
                "Hechizos de alquimista.":"Cuando alcanzas un nivel de Artífice especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados. Nivel 3: Nivel 5: Nivel 9: Nivel 13: Nivel 17: ",
                "":"",
            },
            5: {
                "":""
            },
            9: {
                "":""
            },
            15: {
                "":""
            }
        },

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

        const header = document.createElement("div");
        header.classList.add("rasgo-titulo");

        const titulo = document.createElement("strong");
        titulo.textContent = nombre;

        const nivel = document.createElement("span");
        nivel.classList.add("rasgo-nivel");
        nivel.textContent = etiquetaNivel;

        header.appendChild(titulo);
        header.appendChild(nivel);

        const texto = document.createElement("div");
        texto.classList.add("rasgo-texto");
        texto.textContent = descripcion; // 🔥 IMPORTANTE

        div.appendChild(header);
        div.appendChild(texto);

        contenido.appendChild(div);
    }

    // ===== EVENTOS =====

    ["clase", "subclase", "nivel1", "clase2", "subclase2", "nivel2"]
        .forEach(id => {
            document.getElementById(id).addEventListener("change", actualizarRasgos);
        });

});