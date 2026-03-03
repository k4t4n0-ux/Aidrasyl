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
                "Furia":`Como acción adicional si no llevas una armadura pesada.
Puedes ingresar tu Rage la cantidad de veces que se muestra para tu nivel de Barbarian en la columna Rages de la tabla Características de Barbarian. Recuperas un uso gastado cuando terminas un descanso corto y recuperas todos los usos gastados cuando terminas un descanso largo.
Mientras está activo, tu Rage sigue las reglas a continuación.
Resistencia al daño. Tienes resistencia al daño contundente, perforante y cortante.
Daño por ira. Cuando realizas un ataque usando Strength— con un arma o un Strike— desarmado y infliges daño al objetivo, obtienes una bonificación al daño que aumenta a medida que ganas niveles como bárbaro, como se muestra en la columna Daño de ira de la tabla Características bárbaras.
Ventaja de fuerza. Tienes ventajas en controles de fuerza y lanzamientos de ahorro de fuerza.
Sin concentración ni hechizos. No puedes mantener la concentración y no puedes lanzar hechizos.
Duración. The Rage dura hasta el final de tu siguiente turno y termina temprano si te pones una armadura pesada o tienes la condición de incapacitado. Si tu Rage todavía está activo en tu siguiente turno, puedes extender el Rage por otra ronda haciendo una de las siguientes cosas:
Haz una tirada de ataque contra un enemigo.
Obliga a un enemigo a realizar un tiro salvador.
Realice una acción adicional para extender su ira.
Cada vez que se extiende Rage, dura hasta el final de tu siguiente turno. Puedes mantener un Rage por hasta 10 minutos.`,
                "Defensa sin Armadura": "Si bien no llevas ninguna armadura, tu clase de armadura base es igual a 10 más tus modificadores de destreza y constitución. Puedes usar un Escudo y aun así obtener este beneficio.",
                "Dominio de armas":`Tu entrenamiento con armas te permite usar el propiedades de dominio de 2 armas cuerpo a cuerpo simples o marciales de tu elección, como Greataxes y Handaxes. Siempre que termines un descanso prolongado, podrás practicar ejercicios con armas y cambiar una de esas opciones de armas.
Obtienes la capacidad de usar las propiedades de dominio de una arma extra en los niveles de barbaro 4 (3) y 10 (4).`
            },
            2: {
                "Sentido de peligro": "Obtienes una extraña sensación de cuando las cosas no son como deberían ser, lo que te da una ventaja cuando esquivas peligros. Tienes ventaja sobre los lanzamientos de ahorro de destreza a menos que tengas la condición de incapacitado.",
                "Ataque imprudente":"Puedes dejar de lado toda preocupación por la defensa para atacar con mayor ferocidad. Cuando haces que tu primer ataque avance en tu turno, puedes decidir atacar imprudentemente. Hacerlo te da ventaja en las tiradas de ataque usando Fuerza hasta el comienzo de tu siguiente turno, pero las tiradas de ataque en tu contra tienen ventaja durante ese tiempo."
            },
            3: {
                "Conocimiento primordial":`Obtienes competencia en otra habilidad de tu elección de la lista de habilidades disponible para los bárbaros en el nivel 1.
Además, mientras tu Rage está activo, puedes canalizar el poder primario cuando intentas ciertas tareas; Siempre que realizas una verificación de habilidad usando una de las siguientes habilidades, puedes realizarla como una verificación de fuerza incluso si normalmente usa una habilidad diferente: acrobacia, intimidación, percepción, sigilo o supervivencia. Cuando usas esta habilidad, tu Fuerza representa el poder primordial que corre a través de ti, perfeccionando tu agilidad, porte y sentidos.`
            },
            4: {
                "Mejora de la puntuación de habilidad":"Obtienes 2 puntos a mejorar las caracteristicas o un dote de tu elección para el cual calificas. Obtienes esta característica nuevamente en los niveles 8, 12 y 16 de Barbaro."
            },
            5: {
                "Ataque Extra":"Puedes atacar dos veces en lugar de una cada vez que realices la acción de Ataque en tu turno.",
                "Movimiento rápido":"Tu velocidad aumenta en 10 pies mientras no llevas armadura pesada."
            },
            7: {
                "Instinto salvaje":"Tus instintos están tan perfeccionados que tienes ventajas en las listas de Iniciativa.",
                "Salto instintivo":"Como parte de la acción de bonificación que realizas para ingresar a tu Rage, puedes moverte hasta la mitad de tu velocidad."
            },
            9: {
                "Golpe Brutal":`Si usa Reckless Attack, puede renunciar a cualquier ventaja en una tirada de ataque basada en la fuerza de su elección en su turno. La tirada de ataque elegida no debe tener desventajas. Si la tirada de ataque elegida golpea, el objetivo recibe un daño 1d10 adicional del mismo tipo infligido por el arma o el Golpe desarmado, y puedes causar un efecto de Golpe Brutal de tu elección.
Golpe contundente. El objetivo se empuja 15 pies de distancia de usted. Luego puedes mover hasta la mitad de tu velocidad directamente hacia el objetivo sin provocar ataques de oportunidad.
Golpe en el tendón de la corva. La velocidad del objetivo se reduce en 15 pies hasta el inicio de tu siguiente turno. Un objetivo puede verse afectado por un solo golpe en el tendón de la corva a la vez — el más reciente.`
            },
            11: {
                "Rabia implacable":`Tu ira puede mantenerte luchando a pesar de las graves heridas. Si bajas a 0 puntos de vida mientras tu rabia está activa y no mueres directamente, puedes realizar un lanzamiento de salvación de DC 10 Constitution. Si lo logras, tus puntos de vida cambian a un número igual al doble de tu nivel bárbaro.
Cada vez que utiliza esta función después de la primera, la CD aumenta en 5. Cuando terminas un descanso corto o largo, el CD se restablece a 10.`
            },
            13: {
                "Golpe brutal mejorado":`Has perfeccionado nuevas formas de atacar furiosamente. Los siguientes efectos se encuentran ahora entre sus opciones de Brutal Strike.
Golpe asombroso. El objetivo tiene una desventaja en el siguiente lanzamiento de salvación que realiza y no puede realizar ataques de oportunidad hasta el comienzo del siguiente turno.
Golpe de ruptura. Antes del inicio de tu siguiente turno, la siguiente tirada de ataque realizada por otra criatura contra el objetivo obtiene una bonificación de +5 en la tirada. Una tirada de ataque sólo puede obtener una bonificación de Golpe de Soltura.`
            },
            15: {
                "Rabia persistente":`Cuando lanzas Iniciativa, puedes recuperar todos los usos gastados de Rage. Después de recuperar el uso de Rage de esta manera, no podrás volver a hacerlo hasta que termines un descanso largo.
Además, tu Rage es tan feroz que ahora dura 10 minutos sin necesidad de hacer nada para extenderlo de una ronda a otra. Tu ira termina temprano si tienes la condición Inconsciente (no solo la condición Incapacitada) o te pones una armadura pesada.`
            },
            17: {
                "Golpe brutal mejorado":"El daño adicional de tu Brutal Strike aumenta a 2d10. Además, puedes usar dos efectos Brutal Strike diferentes cada vez que uses tu función Brutal Strike."
            },
            18: {
                "Poder indomable":"Si su total para una verificación de Fuerza o un lanzamiento de salvación de Fuerza es menor que su puntaje de Fuerza, puede usar ese puntaje en lugar del total."
            },
            19: {
                "Bendición épica":"Obtienes una dote de Dendición Épica u otra dote de tu elección para la que califiques."
            },
            20: {
                "Campeón Primario":"Encarnas el poder primordial. Tus puntuaciones de Fuerza y Constitución aumentan en 4, hasta un máximo de 25."
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
                "Herramientas del Comercio":` Competencia en herramientas. Obtienes competencia con los suministros de Alchemist y el kit de herboristería. Si ya tienes una de estas competencias, obtienes competencia con otro tipo de Herramientas Artesanales de tu elección (o con otros dos tipos si tienes ambas).
Elaboración de pociones. Cuando preparas una poción usando las reglas de elaboración de la Guía del Dungeon Master, la cantidad de tiempo necesaria para elaborarla se reduce a la mitad.`,
                "Hechizos de alquimista.":`Cuando alcanzas un nivel de Artífice especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados.
Nivel de artífice	Hechizos
3	Palabra curativa, Rayo de enfermedad
5	Esfera llameante, Flecha ácida de Melf
9	Forma gaseosa, Palabra curativa masiva
13	Sala de muerte, Esfera vitriólica
17	Matanza de nubes, Levantar muerto`,
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
                "Sabio Alquímico":"Cada vez que lanzas un hechizo usando los suministros de tu alquimista como enfoque de lanzamiento de hechizos, obtienes una bonificación por una tirada del hechizo. Esa tirada debe restaurar los puntos de vida o ser una tirada de daño que inflija daño por ácido, fuego o veneno. El bono es igual a tu modificador de Inteligencia (bono mínimo de +1)."
            },
            9: {
                "Reactivos Restaurativos":"Puedes lanzar Restauración menor sin gastar un espacio para hechizos y sin preparar el hechizo, siempre que utilices los suministros de Alchemist como enfoque de lanzamiento de hechizos. Puede hacerlo un número de veces igual a su modificador de Inteligencia (mínimo de una vez) y recuperará todos los usos gastados cuando termine un descanso prolongado."
            },
            15: {
                "Dominio Químico":`Erupción alquímica. Cuando lanzas un hechizo Artífice que inflige daño con ácido, fuego o veneno a un objetivo, también puedes infligir daño con fuerza 2d8 a ese objetivo. Puedes utilizar este beneficio sólo una vez en cada uno de tus turnos.
Resistencia química. Obtienes resistencia al daño por ácido y al daño por veneno. También obtienes inmunidad a la condición de envenenado.
Caldero conjurado. Puedes lanzar El caldero burbujeante de Tasha sin gastar un espacio de hechizo, sin preparar el hechizo y sin componentes materiales, siempre que utilice los suministros de Alchemist como enfoque de lanzamiento de hechizos. Una vez que uses esta función, no podrás usarla nuevamente hasta que termines un descanso prolongado.`
            }
        },

        armero: {
            3: {
                "Herramientas del Comercio":`Entrenamiento de armadura. Obtienes entrenamiento con armadura pesada.
Competencia en herramientas. Obtienes competencia con Smith's Tools. Si ya tiene este dominio de herramientas, obtendrá dominio con otro tipo de herramientas artesanales de su elección.
Elaboración de armaduras. Cuando creas una armadura mágica o no mágica, la cantidad de tiempo necesaria para crearla se reduce a la mitad.`,
                "Hechizos de Armero":`Cuando alcanza un nivel de Artífice especificado en la tabla de Hechizos de Armero, a partir de entonces siempre tendrá preparados los hechizos enumerados.
Nivel de artífice	Hechizos
3	Misil mágico, Onda de trueno
5	Imagen espejo, Destrozar
9	Patrón hipnótico, Perno relámpago
13	Escudo de fuego, Mayor invisibilidad
17	Muro de paso, Muro de fuerza`,
                "Armadura Arcana":`Como acción mágica mientras tienes las Herramientas de Smith en la mano, puedes convertir una armadura que lleves en Armadura Arcana. La armadura sigue siendo Armadura Arcana hasta que te pones otra armadura o mueres.
Sin requisito de fuerza. Si la armadura normalmente tiene un requisito de Fuerza, la Armadura Arcana carece de este requisito para usted.
Quick Don y Doff. Puedes ponerte o quitarte la armadura como acción de Utilización. La armadura no se puede quitar contra tu voluntad.
Enfoque de lanzamiento de hechizos. Puedes usar la Armadura Arcana como Enfoque de Lanzamiento de Hechizos para tus hechizos de Artífice.`,
                "Modelo de Armadura":`Puedes personalizar tu Armadura Arcana. Cuando lo hagas, elige uno de los siguientes modelos de armadura: Dreadnaught, Guardian o Infiltrator. El modelo que elijas te brinda beneficios especiales mientras lo usas.
Cada modelo incluye un arma especial. Cuando atacas con esa arma, puedes agregar tu modificador de Inteligencia, en lugar de tu modificador de Fuerza o Destreza, a las tiradas de ataque y daño.
Puedes cambiar el modelo de armadura cada vez que termines un descanso corto o largo si tienes las herramientas de Smith a mano.
Acorazado.
Diseñas tu armadura para convertirte en un gigante imponente en la batalla. Tiene las siguientes características:
Demolidor de fuerza. Una bola de demolición arcana o un mazo se proyecta desde tu armadura. El demolidor cuenta como un arma cuerpo a cuerpo simple con la propiedad Reach y causa daño 1d10 Force en un golpe. Si golpeas a una criatura que es al menos un tamaño más pequeña que tú con el demolisher, puedes empujar a la criatura hasta 10 pies inmediatamente lejos de ti mismo o tirar de la criatura hasta 10 pies hacia ti mismo.
Estatura gigante. Como acción adicional, transformas y agrandas tu armadura durante 1 minuto. Mientras dure, su alcance aumentará en 5 pies y, si es más pequeño que Grande, se volverá Grande, junto con cualquier cosa que use. Si no hay suficiente espacio para aumentar tu tamaño, tu tamaño no cambia. Puede utilizar esta acción de bonificación varias veces igual a su modificador de Inteligencia (mínimo de una vez). Recuperas todos los usos gastados cuando terminas un descanso largo.
Guardián.
Diseñas tu armadura para que esté en la primera línea del conflicto. Tiene las siguientes características:
Pulso de trueno. Puedes disparar explosiones de conmoción cerebral con golpes de tu armadura. El pulso cuenta como un arma cuerpo a cuerpo simple y causa daño de trueno 1d8 en un golpe. Una criatura golpeada por el pulso tiene desventajas en las tiradas de ataque contra objetivos distintos a ti hasta el comienzo de tu siguiente turno.
Campo defensivo. Mientras esté ensangrentado, puede realizar una acción de bonificación para obtener puntos de vida temporales iguales a su nivel de artífice. Pierdes estos puntos de vida temporales si te quitas la armadura.
Infiltrado.
Personalizas tu armadura para emprendimientos más sutiles. Tiene las siguientes características:
Lanzador de rayos. Aparece un nodo en forma de gema en tu armadura, desde el cual puedes disparar rayos. El lanzador cuenta como un arma de alcance simple con un alcance normal de 90 pies y un largo alcance de 300 pies, y causa daño de 1d6 Lightning en un impacto. Una vez en cada uno de tus turnos, cuando golpeas a una criatura con el lanzador, puedes infligir un daño adicional de 1d6 Lightning a ese objetivo.
Pasos motorizados. Tu velocidad aumenta en 5 pies.
Campo de amortiguación. Tiene ventajas en los cheques de destreza (sigilo). Si la armadura impone Desventaja en tales controles, la Ventaja y la Desventaja se cancelan entre sí, como de costumbre.`
            },
            5: {
                "Ataque Extra":"Puedes atacar dos veces en lugar de una cada vez que realices la acción de Ataque en tu turno."
            },
            9: {
                "Armero mejorado":`Replicación de armaduras. Aprende un plan adicional para su función Replicar artículo mágico y debe estar en la categoría Armadura. Si reemplazas ese plan, debes reemplazarlo con otro plan Armor.
Además, puedes crear un elemento adicional con esa función, y el elemento también debe estar en la categoría Armadura.
Arsenal mejorado. Obtienes una bonificación de +1 para atacar y dañar tiradas realizadas con el arma especial de tu modelo Arcane Armor.`
            },
            15: {
                "Armadura Perfeccionada":`Su Arcane Armor obtiene beneficios adicionales según su modelo, como se detalla a continuación.
Acorazado. El daño de su Force Demolisher aumenta a daño 2d6 Force.
Además, cuando usas tu estatura gigante, tu alcance aumenta en 10 pies, tu tamaño puede aumentar a grande o enorme (tu elección) y tienes ventajas en controles de fuerza y lanzamientos de ahorro de fuerza durante todo el tiempo.
Guardián. El daño muerto de tu Thunder Pulse aumenta a 1d10 de daño Thunder.
Además, cuando una criatura enorme o más pequeña que puedas ver termina su turno a 30 pies de ti, puedes tomar una reacción para forzar mágicamente a esa criatura a realizar un lanzamiento de salvación de fuerza contra tu hechizo para salvar a DC. En una salvación fallida, arrastras a la criatura hasta 25 pies directamente hacia ti hasta un espacio desocupado. Si llevas el objetivo a un espacio a menos de 5 pies de ti mismo, puedes realizar un ataque con arma cuerpo a cuerpo contra él como parte de esta Reacción.
Puedes tomar esta reacción un número de veces igual a tu modificador de Inteligencia (mínimo de una vez) y recuperar todos los usos gastados cuando termines un descanso prolongado.
Infiltrado. El daño de su Lightning Launcher aumenta a 2d6 de daño Lightning. Cualquier criatura que reciba daño Lightning de tu Lanzador de Rayos brilla con luz mágica hasta el comienzo de tu próximo turno. La criatura reluciente arroja Dim Light en un radio de 5 pies y tiene una desventaja de que el ataque rueda contra ti, ya que la luz la sacude si te ataca.
Además, como acción de bonificación, puedes obtener una velocidad de vuelo igual al doble de tu velocidad hasta el final del turno actual. Puedes realizar esta acción de bonificación varias veces igual a tu modificador de Inteligencia (mínimo de una vez) y recuperar todos los usos gastados cuando termines un descanso prolongado.`
            }
        },

        artillero: {
            3: {
                "Herramientas del Comercio":`Armamento a distancia. Obtienes competencia con armas a distancia marcial.
Competencia en herramientas. Obtienes competencia con Woodcarver's Tools. Si ya tiene esta competencia, obtendrá competencia con otro tipo de herramientas artesanales de su elección.
Elaboración de varitas. Cuando creas una Varita mágica, la cantidad de tiempo necesaria para crearla se reduce a la mitad.`,
                "Hechizos de Artillero":`Cuando alcanza un nivel de Artífice especificado en la tabla de Hechizos de Artillero, a partir de entonces siempre tendrá preparados los hechizos enumerados.
Nivel de artífice	Hechizos
3	Escudo, Onda de trueno
5	Rayo abrasador, Destrozar
9	Bola de fuego, Muro de viento
13	Tormenta de hielo, Muro de fuego
17	Cono de frío, Muro de fuerza`,
                "Cañón Eldritch":`Usando las herramientas de Smith o las herramientas de Woodcarver, puedes realizar una acción mágica para crear un cañón Eldritch pequeño o pequeño en un espacio desocupado sobre una superficie horizontal a 5 pies de ti mismo. Las estadísticas del juego del cañón aparecen a continuación. Usted determina su apariencia, incluso si lo lleva o no (y su elección de piernas o ruedas, para este último). Desaparece si se reduce a 0 puntos de vida o después de 1 hora. Puedes descartarlo temprano como una acción mágica.
Una vez que creas un cañón, no puedes volver a hacerlo hasta que termines un descanso largo o gastes un espacio de hechizo para crear uno. Sólo puedes tener un cañón a la vez y no puedes crear uno mientras ya lo tengas.

Cañón sobrenatural
Objeto pequeño o diminuto
Clasa armorului: 18
Puncte de lovire: 5 x tu nivel de Artífice (lanzar la reparación del cañón le devuelve 2d6 puntos de vida)
Inmunidades: Veneno, Psíquico
Activar cañón (requiere que estés a menos de 60 pies del cañón): Como acción de bonificación, ordenas al cañón que use la opción Lanzallamas, Balista de fuerza o Protector a continuación; puedes indicarle al cañón que se mueva hasta 15 pies antes o después de esa opción:
Lanzallamas: El cañón exhala fuego en un cono de 15 pies. Cada criatura en esa área realiza un lanzamiento de salvación de Dexterity contra tu hechizo salva a DC, recibiendo daño de Fuego 2d8 en una salvación fallida o la mitad de daño en una exitosa. Los objetos inflamables en el Cono que no se usan ni se transportan comienzan a arder.
Balista de fuerza: Realiza un ataque de hechizo a distancia que se origina desde el cañón hacia una criatura u objeto a menos de 120 pies de ella. En un golpe, el objetivo recibe daño de Fuerza 2d8 y, si el objetivo es una criatura, se empuja hasta 5 pies de distancia del cañón.
Protector: El cañón emite una ráfaga de energía positiva que le otorga a sí mismo y a cada criatura de su elección a menos de 10 pies de él una cantidad de puntos de vida temporales igual a 1d8 más su modificador de inteligencia (mínimo de 1).`,
            },
            5: {
                "Arma de fuego arcana":`Cuando termines un descanso largo, puedes usar las herramientas de Woodcarver para tallar sellos especiales en un arma de caña, bastón, varita o alcance marcial y así convertirla en tu arma de fuego arcana. Los sigilos desaparecen del objeto si luego los tallas en un objeto diferente. Por lo demás, los sigilos duran indefinidamente.
Puedes usar tu arma de fuego arcana como enfoque de lanzamiento de hechizos para tus hechizos de artífice. Cuando lanzas un hechizo de Artífice a través del arma de fuego, tira 1d8 y obtienes una bonificación por una de las tiradas de daño del hechizo igual al número lanzado.`
            },
            9: {
                "Cañón explosivo":`Cada Cañón Eldritch que creas ahora es más destructivo. Obtienes los siguientes beneficios.
Detonar. Cuando tu cañón sufre daño, puedes tomar una reacción para ordenarle que detone si estás a menos de 60 pies de él. Hacerlo destruye el cañón y obliga a cada criatura a 20 pies de él a realizar un lanzamiento de salvación de Dexterity contra tu hechizo para salvar a DC, recibiendo daño de 3d10 Force en una salvación fallida o la mitad de daño en una exitosa.
Potencia de fuego. Las tiradas de daño del cañón y el número de puntos de vida temporales otorgados por Protector aumentan en 1d8.`
            },
            15: {
                "Posición Fortificada":`Eres un maestro en formar emplazamientos bien defendidos usando tu Cañón Eldritch. Obtienes los siguientes beneficios.
Doble potencia de fuego. Ahora puedes tener dos cañones al mismo tiempo y puedes crear dos con la misma acción mágica. (Si gastas una ranura para hechizos para crear el primer cañón, debes gastar otra ranura para hechizos para crear el segundo) Puedes activar ambos con la misma Acción de Bonificación, ordenándoles que utilicen la misma opción de activación o diferentes. No puedes crear un tercer cañón mientras tengas dos.
Proyección de campo brillante. Tú y tus aliados tenéis media cobertura a menos de 10 pies de vuestro cañón Eldritch.`
            }
        },

        batalla_smith: {
            3: {
                "Herramientas del Comercio":`Competencia en herramientas. Obtienes competencia con Smith's Tools. Si ya tiene esta competencia, obtendrá competencia con otro tipo de herramientas artesanales de su elección.
Elaboración de armas. Cuando creas un arma mágica o no mágica, la cantidad de tiempo necesaria para fabricarla se reduce a la mitad.`,
                "Hchizos de Battle Smith":`Cuando alcanzas un nivel de Artífice especificado en la tabla de Hechizos de Battle Smith, a partir de entonces siempre tendrás preparados los hechizos enumerados.
Nivel de artífice	Hechizos
3	Heroísmo, Escudo
5	Golpe brillante, Vínculo de protección
9	Aura de vitalidad, Prestidigitación
13	Aura de pureza, Escudo de fuego
17	Golpe de destierro, Heridas de curación masiva`,
                "Listo para la batalla":`Tu entrenamiento de combate y tus experimentos con magia han dado sus frutos de dos maneras.
Empoderamiento Arcano. Cuando atacas con un arma mágica, puedes usar tu modificador de Inteligencia, en lugar de tu modificador de Fuerza o Destreza, para las tiradas de ataque y daño.
Conocimiento de armas. Obtienes competencia con las armas marciales. Puedes usar un arma con la que tengas competencia como enfoque de lanzamiento de hechizos para tus hechizos de Artífice.`,
                "Defensor de Acero":`Tus retoques te han llevado un compañero, un Steel Defender (ver el bloque de estadísticas). Determinas la apariencia del defensor y si tiene dos o cuatro piernas; Tus elecciones no afectan las estadísticas del juego del defensor.
El defensor es amigable contigo y tus aliados y te obedece. Desaparece si mueres.
El defensor en combate. En combate, el defensor actúa durante tu turno. Puede moverse y realizar su reacción por sí solo, pero la única acción que realiza es la acción de esquivar a menos que realice una acción de bonificación para ordenarle que realice una acción. Si tienes la condición de Incapacitado, el defensor actúa por sí solo y no se limita a la acción de Dodge.
Restaurar o reemplazar al defensor. Si el defensor ha muerto en la última hora, puedes realizar una acción mágica para tocarlo y gastar un espacio de hechizo. El defensor vuelve a la vida después de 1 minuto con todos sus puntos de vida restablecidos.
Siempre que termines un descanso largo, puedes crear un nuevo defensor si tienes las herramientas de Smith en la mano. Si ya tienes un defensor de esta función, el primero desaparece.

Defensor de acero
Construcción media
Clasa armorului: 12 + tu modificador de Inteligencia
Puncte de lovire: HP 5 + cinco veces tu nivel de Artífice (el defensor tiene un número de Hit Dice [d8s] igual a tu nivel de Artífice)
Velocidad: Velocidad 40 pies.
STR (Mod/Guardar)	DEX (Mod/Guardar)	CON (Mod/Guardar)	INT (Mod/Guardar)	WIS (Mod/Guardar)	CHA (Mod/Guardar)
14 (+2/+2)	12 (+1/+1)	14 (+2/+2)	4 (−3/-3)	10 (+0/+0)	6 (-2/-2)
Inmunidades: Veneno; Encantado, Agotamiento, Envenenado
Sentidos: Darkvision 60 pies., Percepción Pasiva 10
Idiomas: Entiende los idiomas que conoces
Calificación del desafío: Ninguno (XP 0; PB equivale a su bonificación de competencia)
Rasgos
Enlace de acero. Agregue su bonificación de competencia a cualquier verificación de habilidad o lanzamiento de ahorro que realice Steel Defender.
Acciones
Rend potenciado por la fuerza. Rollo de ataque cuerpo a cuerpo: La bonificación es igual a tu modificador de ataque de hechizo, alcanza los 5 pies. Golpe: 1d8 + 2 más tu modificador de Inteligencia Fuerza el daño.
Reparación (3/Día). El defensor, o un constructo u objeto que pueda ver a menos de 5 pies de él, recupera una cantidad de puntos de vida igual a 2d8 más su modificador de Inteligencia.
Reacciones
Desviar ataque. Activador: Una criatura que el defensor puede ver a menos de 5 pies de ella hace una tirada de ataque dirigida a una criatura diferente. Respuesta: La criatura desencadenante hace que el ataque avance con Desventaja.`
            },
            5: {
                "Ataque Extra":"Puedes atacar dos veces en lugar de una cada vez que realices la acción de Ataque en tu turno. Puedes renunciar a uno de tus ataques cuando realizas la acción de Ataque para ordenarle a tu Steel Defender que realice la acción Force-Empowered Rend."
            },
            9: {
                "Sacudida Arcana":`Cuando golpeas un objetivo con una tirada de ataque usando un arma mágica o tu Steel Defender golpea un objetivo, puedes canalizar energía mágica a través del golpe para crear uno de los siguientes efectos:
Energía destructiva. El objetivo recibe un daño adicional de Fuerza 2d6.
Energía Restaurativa. Elija una criatura u objeto que pueda ver a menos de 30 pies del objetivo. La energía curativa fluye hacia el receptor elegido, devolviéndole 2d6 puntos de vida.
Puedes usar esta energía un número de veces igual a tu modificador de Inteligencia (mínimo de una vez), pero no puedes hacerlo más de una vez por turno. Recuperas todos los usos gastados cuando terminas un descanso largo.`
            },
            15: {
                "Defensor mejorado":`Tu Arcane Jolt y Steel Defender se han vuelto más poderosos, otorgando estos beneficios.
Sacudida mejorada. Tanto el daño adicional como la curación de tu Arcane Jolt aumentan a 4d6.
Deflexión mejorada. Siempre que tu Steel Defender usa su Deflect Attack, el atacante recibe un daño de Fuerza igual a 1d4 más tu modificador de Inteligencia.`
            }
        },

        cartógrafo: {
            3: {
                "Herramientas del Comercio":`Competencia en herramientas. Obtiene competencia con los suministros de calígrafo y las herramientas de cartógrafo. Si ya tienes una de estas competencias, obtienes competencia con otro tipo de Herramientas Artesanales de tu elección (o con otros dos tipos si tienes ambas).
Elaboración de pergaminos. Cuando escribes un Pergamino de hechizos usando las reglas de creación en el Manual del jugador, la cantidad de tiempo necesaria para crearlo se reduce a la mitad.`,
                "Hechizos de cartógrafo":`Cuando alcanza un nivel de Artífice especificado en la tabla de Hechizos de Cartógrafo, a partir de entonces siempre tendrá preparados los hechizos enumerados.
Nivel de artífice	Hechizos
3	Fuego de hadas, Perno guía, Palabra curativa
5	Localizar objeto, Pico mental
9	Llame a Lightning, Clarividencia
13	Desterramiento, Localizar criatura
17	Gritando, Círculo de Teletransportación`,
                "Atlas del aventurero":`Siempre que termines un Descanso Largo mientras sostienes las Herramientas del Cartógrafo, puedes usar esa herramienta para crear un conjunto de mapas mágicos tocando al menos dos criaturas (una de las cuales puede ser tú mismo), hasta un número máximo de criaturas igual a 1 más tu Modificador de Inteligencia (mínimo de dos criaturas). Cada objetivo recibe un mapa mágico, que se actualiza constantemente para mostrar la posición relativa de todos los poseedores del mapa, pero es ilegible para todos los demás. Los mapas duran hasta que mueras o hasta que uses esta función nuevamente, momento en el cual cualquier mapa existente creado por esta función desaparece inmediatamente.
Mientras lleva el mapa, un objetivo obtiene los siguientes beneficios.
Conciencia. El objetivo añade 1d4 a sus tiradas de Iniciativa.
Posicionamiento. El objetivo conoce la ubicación de todos los demás poseedores de mapas que se encuentran en el mismo plano de existencia que él. Al lanzar un hechizo o crear otro efecto que requiera poder ver el objetivo del efecto, un titular de mapa puede apuntar a otro titular de mapa independientemente de la vista o la cobertura, siempre que el otro titular de mapa todavía esté dentro del rango del efecto.`,
                "Mapeo de Magia":`Cartografía iluminada. Puedes lanzar Fuego de hadas sin gastar un espacio para hechizos, delinear a las criaturas afectadas como si estuvieran en tinta. Puedes hacerlo un número de veces igual a tu modificador de Inteligencia (mínimo de una vez) y recuperas todos los usos gastados cuando terminas un Descanso Largo.
Salto de portal. En tu turno, puedes gastar una cantidad de movimiento igual a la mitad de tu velocidad (redondear hacia abajo) para teletransportarte a un espacio desocupado que puedes ver a 10 pies de ti mismo o a 5 pies de una criatura que está a 30 pies de ti y sosteniendo uno de los mapas del Atlas de tu Aventurero. No puedes utilizar este beneficio si tu velocidad es 0.`
            },
            5: {
                "Precisión Guiada":`Una vez por turno, cada vez que lanzas un hechizo de tu lista de hechizos de cartógrafo o golpeas a una criatura afectada por tu Fuego de hadas con una tirada de ataque, puedes agregar tu modificador de Inteligencia a una tirada de daño del hechizo o ataque.
Además, recibir daño no puede hacer que pierda la concentración Fuego de hadas.`
            },
            9: {
                "Movimiento Ingenioso":"Cuando usas tu Flash of Genius, tú o una criatura voluntaria de tu elección que puedas ver a menos de 30 pies de ti mismo puedes teletransportarte hasta 30 pies a un espacio desocupado que puedas ver como parte de esa misma Reacción."
            },
            15: {
                "Atlas Superior":`El Atlas de tu Aventurero mejora, obteniendo los siguientes beneficios.
Refugio seguro. Cuando un titular de un mapa se reduce a 0 puntos de vida pero no se mata directamente, esa criatura puede destruir su mapa. En cambio, los puntos de vida de la criatura cambian a un número igual al doble de tu nivel de Artífice, y la criatura es teletransportada a un espacio desocupado a menos de 5 pies de ti u otro titular de mapa de su elección.
Camino infalible. Si eres uno de los poseedores de mapas del Atlas de tu Aventurero, puedes lanzar Encuentra el camino sin gastar una ranura para hechizos, sin preparar el hechizo y sin necesidad de componentes del hechizo. Una vez que utilices este beneficio, no podrás volver a usarlo hasta que termines un descanso prolongado.`
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