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
Competencia en las tiradas de salvación de Inteligencia y Constitución.
Elija 2 habilidades: Arcanos, Historia, Investigación, Medicina, Naturaleza, Percepción o Juego de manos.
Armas Simples. Herramientas de ladrón, herramientas de manitas y un tipo de herramientas de artesano de su elección. Armadura y Escudos Ligeros y Medianos.`,
                "Lanzamiento de hechizos":`Puedes usar las herramientas de artesano con las que tengas competencia como enfoque de lanzamiento de hechizos, y debes tener uno de esos enfoques en la mano cuando lanzas un hechizo de artífice.  La inteligencia es tu habilidad para lanzar hechizos para tus hechizos de Artífice.
Preparas una lista de hechizos disponibles. Ha nivel 1 elige 2 hechizos nivel 1. La lista aumenta conforme subas niveles de Artificiero. Los hechizos elegidos deben ser de un nivel para el cual tengas espacios para hechizos: Nv2:3 Nv3:4 Nv4:5 Nv5:6 Nv6:6 Nv7:7 Nv8:7 Nv9:9 Nv10:9 Nv11:10 Nv12:10 Nv13:11 Nv14:11 Nv15:12 Nv16:12 Nv17:14 Nv18:14 Nv19:15 Nv20:15. Si otra característica de Artificiero te da hechizos que siempre has preparado, esos hechizos no cuentan contra la cantidad de hechizos que puedes preparar con esta característica, pero esos hechizos cuentan como hechizos de Artificiero para ti. Cambiando tus hechizos preparados. Siempre que termines un descanso largo, puedes cambiar tu lista de hechizos preparados, reemplazando cualquiera de los hechizos allí con otros hechizos de Artíficiero para los cuales tienes espacios para hechizos.
Trucos. Conoces dos trucos de Artífice de tu elección. Cada vez que termines un descanso largo, puedes reemplazar uno de tus trucos de esta función con otro truco de Artífice de tu elección. Cuando alcanza los niveles 10 y 14 de Artificer, aprende truco de Artifice de su elección, como se muestra en la columna Cantrips de la tabla Características de Artificer.`,
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
                "Competencias": `Si obtienes esta clase como clase principal y no multi clase obtienes las siguientes competencias.
Competencia en las tiradas de salvación de Fuerza y Constitución.
Elija 2: Manejo de animales, Atletismo, Intimidación, Naturaleza, Percepción o Supervivencia
Armas simples y marciales. Armadura y Escudos Ligeros y Medianos.`,
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

        bardo: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multi clase obtienes las siguientes competencias.
Competencia en las tiradas de salvación de Destreza y Carisma.
Elija 3 habilidades cualesquiera y Elija 3 instrumentos musicales
Armas simples y Armadura ligera`,
                "Lanzamiento de hechizos":`Puedes usar un instrumento musical como enfoque de lanzamiento de hechizos para tus hechizos de bardo. Carisma es tu habilidad para lanzar hechizos para tus hechizos de Bardo.
Preparas una lista de hechizos disponibles. Ha nivel 1 elige 4 hechizos nivel 1. La lista aumenta conforme subas niveles de Bardo. Los hechizos elegidos deben ser de un nivel para el cual tengas espacios para hechizos: Nv2:5 Nv3:6 Nv4:7 Nv5:9 Nv6:10 Nv7:11 Nv8:12 Nv9:14 Nv10:15 Nv11:16 Nv12:16 Nv13:17 Nv14:17 Nv15:18 Nv16:18 Nv17:19 Nv18:20 Nv19:21 Nv20:22. Si otra característica de Bardo te da hechizos que siempre has preparado, esos hechizos no cuentan contra la cantidad de hechizos que puedes preparar con esta característica, pero esos hechizos cuentan como hechizos de Bardo para ti. Cambiando tus hechizos preparados. Cada vez que obtienes un nivel de Bardo, puedes reemplazar un hechizo en tu lista con otro hechizo de Bardo para el cual tienes espacios para hechizos.
Trucos. Conoces dos trucos de tu elección de la lista de hechizos de Bardo. Siempre que ganes un nivel de Bardo, puedes reemplazar uno de tus trucos por otro de la lista de hechizos de Bardo. Cuando alcanza los niveles 4 y 10 de Bardo, aprendes otro truco de tu elección de la lista de hechizos de Bardo`,
"Inspiración Bárdica": `Como acción adicional, puedes inspirar a otra criatura a menos de 60 pies de ti que pueda verte u oírte. Esa criatura gana uno de tus dados de Inspiración Bárdica. Una criatura sólo puede tener una inspiración bárdica muerta a la vez.

Una vez dentro de la siguiente hora, cuando la criatura falla una prueba D20, la criatura puede tirar el dado de inspiración bárdica y agregar el número obtenido a la d20, lo que potencialmente convierte el fracaso en un éxito. Un dado de inspiración bárdica se gasta cuando se enrolla. 
Puedes conferir un dado de inspiración bárdica varias veces igual a tu modificador de carisma (mínimo de una vez) y recuperar todos los usos gastados cuando termines un descanso largo.
Su dadode Inspiración Bárdica cambia cuando alcanza ciertos niveles de Bardo. El dado se convierte en un d8 en el nivel 5, un d10 en el nivel 10 y un d12 en el nivel 15.`
            },
            2: {
                "Pericia":"Ganas Pericia en dos de tus competencias de habilidad de tu elección. Se recomiendan Interpretación y Persuasión si tienes competencia en ellas. En nivel 9 de Bardo, obtienes pericia en dos habilidades más de tu elección."
            },
            3: {
                "Maestro de todos los oficios":"Puede agregar la mitad de su bonificación de competencia (redondeada hacia abajo) a cualquier verificación de habilidad que realice y que utilice una habilidad que le falta y que de otro modo no utilice su bonificación de competencia."
            },
            5:{
                "Fuente de inspiración":`Ahora recuperas todos tus usos gastados de la inspiración bárdica cuando terminas un descanso corto o largo.
Además, puedes gastar un espacio de hechizo (no es necesario realizar ninguna acción) para recuperar un uso gastado de Inspiracion Bardica.`
            },
            7: {
                "Contraencanto":"Puedes usar notas musicales o palabras de poder para alterar los efectos que influyen en la mente. Si usted o una criatura a menos de 30 pies de usted falla un lanzamiento de salvación contra un efecto que aplica la condición Encantada o Asustada, puede tomar una Reacción para hacer que se vuelva a tirar  y la nueva tirada tiene una Ventaja."
            },
            10: {
                "Secretos Mágicos":"Has aprendido secretos de varias tradiciones mágicas. Siempre que alcances un nivel de Bardo (incluido este nivel) y el número de Hechizos preparados en la tabla Características de Bardo aumente, puedes elegir cualquiera de tus nuevos hechizos preparados del Bardo, Clérigo, Druida, și Mago listas de hechizos y los hechizos elegidos cuentan como hechizos de Bardo para usted (consulte la sección de una clase para ver su lista de hechizos). Además, siempre que reemplaces un hechizo preparado para esta clase, puedes reemplazarlo con un hechizo de esas listas."
            },
            18: {
                "Inspiración Superior":"Cuando tires la Iniciativa, recuperas los usos gastados de la Inspiración Bárdica hasta que tengas dos si tienes menos que eso."
            },
            19: {
                "Bendición épica":"Obtienes un Hazaña de bendición épica u otra hazaña de tu elección para la que califiques. Bendición del recuerdo de hechizos es recomendado."
            },
            20: {
                "Palabras de creación":"Has dominado dos de las Palabras de la Creación: las palabras de vida y muerte. Por lo tanto, siempre tienes el Palabra de poder: sanar y Palabra de poder: matar hechizos preparados. Cuando lanzas cualquiera de los hechizos, puedes apuntar a una segunda criatura con él si esa criatura está a 10 pies del primer objetivo."
            }
        },

        cazador_sangre: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes las siguientes competencias.
        Competencia en las tiradas de salvación de Destreza e Inteligencia.
        Elige 3 habilidades entre: Acrobacias, Arcanos, Atletismo, Historia, Perspicacia, Investigación, Religión o Supervivencia.
        Armaduras ligeras, medias y escudos. Armas simples y marciales. Herramientas de alquimista.`,

                "Perdición del Cazador": `Has sobrevivido al ritual de la Perdición del Cazador, que altera tu sangre y te vincula con la oscuridad.
        Tienes ventaja en tiradas de Sabiduría (Supervivencia) para rastrear feéricos, infernales y no muertos, y en tiradas de Inteligencia para recordar información sobre ellos.

        Además, puedes usar hemocraft (magia de sangre). La CD de tus habilidades es:
        8 + bonificador de competencia + modificador de Hemocraft (Inteligencia o Sabiduría).`,

                "Maldición de Sangre": `Puedes maldecir criaturas usando tu esencia vital. Conoces 1 Maldición de Sangre.
        Puedes amplificarla recibiendo daño necrótico igual a tu dado de hemocraft.

        Las criaturas sin sangre son inmunes salvo que la amplifiques.
        Usos: 1 por descanso corto o largo (aumenta a nivel 6, 13 y 17).`
            },

            2: {
                "Estilo de Combate": `Elige un estilo de combate:
        Arquería (+2 al ataque a distancia)
        Duelo (+2 daño con arma a una mano)
        Gran arma (repetir 1 o 2 en daño)
        Combate con dos armas (añades modificador al segundo ataque)`,

                "Rito Carmesí": `Como acción adicional puedes imbuir tu arma con energía elemental.
        Recibes daño necrótico igual a tu dado de hemocraft.

        Mientras esté activo:
        - El arma es mágica
        - Hace daño extra igual a tu dado de hemocraft

        Eliges un rito:
        Fuego, Frío o Rayo (más en niveles altos).`
            },

            3: {
                "Orden del Cazador": `Eliges una orden que define tu estilo:
        - Ghostslayer
        - Lycan
        - Mutant
        - Profane Soul

        Obtienes habilidades en nivel 3, 7, 11, 15 y 18.`
            },

            4: {
                "Mejora de característica": `Obtienes +2 a características o una dote.
        También en niveles 8, 12, 16 y 19.`
            },

            5: {
                "Ataque Extra": "Puedes atacar dos veces en tu turno al usar la acción de Ataque."
            },

            6: {
                "Marca de Castigo": `Cuando dañas a una criatura con un arma con rito activo, puedes marcarla.

        - Sabes su ubicación en el mismo plano
        - Si daña a alguien cercano, recibe daño psíquico igual a tu modificador de hemocraft

        Dura hasta cambiar de objetivo.
        Uso: 1 por descanso corto o largo.`
            },

            7: {
                "Mejora de Rito": "Tus Ritos Carmesí mejoran y obtienes beneficios adicionales según tu orden."
            },

            9: {
                "Psicometría Siniestra": `Ventaja en tiradas de Historia sobre objetos o lugares malditos.
        El DM puede darte visiones del pasado.`
            },

            10: {
                "Aumento Oscuro": `Tu velocidad aumenta en 5 pies.
        Obtienes bonificación a salvaciones de Fuerza, Destreza y Constitución igual a tu modificador de hemocraft (mínimo +1).`
            },

            13: {
                "Marca de Atadura": `Mejora tu Marca de Castigo:
        - Más daño psíquico
        - El objetivo no puede correr (Dash)
        - Si intenta teletransportarse recibe daño y puede fallar`
            },

            14: {
                "Alma Endurecida": "Ventaja contra efectos de Encantado y Asustado."
            },

            17: {
                "Maldición Mejorada": "Puedes usar Maldición de Sangre 4 veces por descanso."
            },

            20: {
                "Maestría Sanguina": `Una vez por turno puedes repetir tu dado de hemocraft.

        Además, cuando haces un crítico con un arma con rito activo, recuperas un uso de Maldición de Sangre.`
            }
        },

        clerigo: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes las siguientes competencias.
        Competencia en las tiradas de salvación de Sabiduría y Carisma.
        Elige 2 habilidades entre: Historia, Perspicacia, Medicina, Persuasión o Religión.
        Armas simples, armaduras ligeras y medias, y escudos.`,
                
                "Lanzamiento de hechizos": `Puedes usar un símbolo sagrado como enfoque de lanzamiento de hechizos para tus hechizos de clérigo. Sabiduría es tu habilidad para lanzar hechizos.
        Preparas una lista de hechizos disponibles. A nivel 1 eliges 4 hechizos de nivel 1. La lista aumenta conforme subes niveles de Clérigo: Nv2:5 Nv3:6 Nv4:7 Nv5:9 Nv6:10 Nv7:11 Nv8:12 Nv9:14 Nv10:15 Nv11:16 Nv12:16 Nv13:17 Nv14:17 Nv15:18 Nv16:18 Nv17:19 Nv18:20 Nv19:21 Nv20:22.
        Los hechizos deben ser de un nivel para el cual tengas espacios.
        Puedes cambiar tus hechizos preparados tras un descanso largo.

        Trucos: conoces 3 trucos de la lista de clérigo. Puedes cambiar uno al subir nivel. En nivel 4 y 10 aprendes uno adicional.`,

                "Orden divina": `Elige uno de los siguientes:
        Protector: obtienes competencia con armas marciales y armadura pesada.
        Taumaturgo: aprendes un truco adicional de clérigo y sumas tu modificador de Sabiduría (mínimo +1) a tiradas de Arcana o Religión.`
            },

            2: {
                "Canalizar divinidad": `Puedes canalizar energía divina para crear efectos mágicos. Tienes dos usos y recuperas uno en descanso corto y todos en descanso largo.

        Chispa divina: como acción, eliges una criatura a 30 pies. Lanzas 1d8 + Sabiduría para curar o hacer daño necrótico o radiante (salvación de Constitución para mitad de daño).

        Expulsar no muertos: criaturas no muertas a 30 pies hacen salvación de Sabiduría. Si fallan quedan asustadas e incapacitadas durante 1 minuto.

        El daño de Chispa divina aumenta: Nv7 (2d8), Nv13 (3d8), Nv18 (4d8).`
            },

            3: {
                "Subclase de clérigo": `Obtienes una subclase de clérigo que te otorga habilidades adicionales según tu nivel.`
            },

            5: {
                "Destruir no muertos": `Cuando usas Expulsar no muertos, tiras d8s iguales a tu modificador de Sabiduría (mínimo 1d8). Los no muertos que fallen reciben daño radiante igual al total.`
            },

            7: {
                "Golpes bendecidos": `Elige una opción:

        Golpe divino: una vez por turno, al impactar con un arma, haces +1d8 de daño necrótico o radiante.

        Lanzamiento potente: añades tu modificador de Sabiduría al daño de tus trucos de clérigo.`
            },

            10: {
                "Intervención divina": `Puedes invocar a tu deidad. Como acción, lanzas un hechizo de clérigo de nivel 5 o menor sin gastar espacio de hechizo ni componentes. Se recarga tras descanso largo.`
            },

            14: {
                "Golpes bendecidos mejorados": `Mejora tu elección:

        Golpe divino: pasa a 2d8 de daño adicional.

        Lanzamiento potente: al dañar con un truco, puedes dar puntos de golpe temporales a una criatura a 60 pies igual a el doble de tu modificador de Sabiduría.`
            },

            19: {
                "Bendición épica": `Obtienes una hazaña épica o una hazaña a tu elección. Se recomienda Bendición del destino.`
            },

            20: {
                "Intervención divina superior": `Puedes usar Intervención divina para lanzar Deseo. Si lo haces, no puedes usar esta habilidad hasta después de 2d4 descansos largos.`
            }
        },

        druida: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes las siguientes competencias.
        Competencia en las tiradas de salvación de Inteligencia y Sabiduría.
        Elige 2 habilidades entre: Arcana, Trato con Animales, Perspicacia, Medicina, Naturaleza, Percepción, Religión o Supervivencia.
        Armas simples, Kit de herboristería, Armadura ligera y Escudos.`,

                "Lanzamiento de hechizos": `Sabiduría es tu habilidad para lanzar hechizos de Druida. Puedes usar un enfoque druídico como enfoque de lanzamiento de hechizos.

        Preparas una lista de hechizos disponibles. A nivel 1 eliges 4 hechizos de nivel 1. La lista aumenta conforme subes niveles de Druida: Nv2:5 Nv3:6 Nv4:7 Nv5:9 Nv6:10 Nv7:11 Nv8:12 Nv9:14 Nv10:15 Nv11:16 Nv12:16 Nv13:17 Nv14:17 Nv15:18 Nv16:18 Nv17:19 Nv18:20 Nv19:21 Nv20:22.

        Los hechizos elegidos deben ser de un nivel para el cual tengas espacios de hechizo. Si otra característica te da hechizos siempre preparados, no cuentan contra este límite.

        Puedes cambiar tus hechizos preparados al terminar un descanso largo.

        Trucos: Conoces 2 trucos de la lista de Druida. Puedes cambiar uno al subir de nivel. En niveles 4 y 10 aprendes un truco adicional.`,

                "Druídico": `Conoces el idioma secreto Druídico. También siempre tienes preparado el hechizo Hablar con Animales.

        Puedes dejar mensajes ocultos en Druídico que solo otros druidas detectan automáticamente. Otros pueden notar su presencia con una tirada de Inteligencia (Investigación) CD 15, pero no descifrarlos sin magia.`,

                "Orden Primaria": `Elige una de las siguientes opciones:

        Mago de la Naturaleza: Aprendes un truco adicional de druida. Además, sumas tu modificador de Sabiduría (mínimo +1) a tiradas de Inteligencia (Arcana o Naturaleza).

        Guardián: Obtienes competencia con armas marciales y entrenamiento con armadura media.`
            },

            2: {
                "Forma Salvaje": `Como acción adicional, puedes transformarte en una bestia que conozcas. Permaneces en esa forma durante un número de horas igual a la mitad de tu nivel de druida, o hasta que la canceles, quedes incapacitado o mueras.

        Usos: Puedes usar esta habilidad 2 veces. Recuperas 1 uso en descanso corto y todos en descanso largo.

        Formas conocidas: Conoces 4 formas de bestia (CR 1/4 sin velocidad de vuelo). Puedes cambiarlas tras un descanso largo.

        Mientras estás transformado:
        - Ganas puntos de golpe temporales iguales a tu nivel de druida.
        - Usas estadísticas de la bestia, pero mantienes INT, SAB, CAR, competencias, rasgos y dotes.
        - No puedes lanzar hechizos.
        - Tu equipo se adapta o se fusiona con la forma.`,

                "Compañero Salvaje": `Puedes invocar un espíritu natural como familiar. Como acción mágica, puedes gastar un espacio de hechizo o un uso de Forma Salvaje para lanzar Encontrar Familiar sin componentes materiales.

        El familiar es feérico y desaparece al terminar un descanso largo.`
            },

            3: {
                "Subclase Druídica": `Eliges un Círculo Druídico (como Tierra, Luna, Mar o Estrellas). Obtienes sus características según tu nivel.`
            },

            5: {
                "Resurgir Salvaje": `Si no tienes usos de Forma Salvaje, puedes obtener uno gastando un espacio de hechizo (sin acción).

        También puedes gastar un uso de Forma Salvaje para obtener un espacio de hechizo de nivel 1. Solo puedes hacerlo una vez por descanso largo.`
            },

            7: {
                "Furia Elemental": `Elige una opción:

        Lanzamiento Potente: Añades tu modificador de Sabiduría al daño de tus trucos de druida.

        Golpe Primordial: Una vez por turno, al golpear, infliges +1d8 de daño (frío, fuego, rayo o trueno).`
            },

            15: {
                "Furia Elemental Mejorada": `Mejora la opción elegida:

        Lanzamiento Potente: Los trucos con alcance de al menos 10 pies aumentan su alcance en 300 pies.

        Golpe Primordial: El daño adicional aumenta a 2d8.`
            },

            18: {
                "Hechizos Bestiales": `Puedes lanzar hechizos mientras estás en Forma Salvaje, excepto aquellos con componentes materiales con coste.`
            },

            19: {
                "Bendición épica": `Obtienes una dote épica u otra dote para la que cumplas requisitos. Bendición del Viaje Dimensional es recomendada.`
            },

            20: {
                "Archidruida": `Obtienes los siguientes beneficios:

        Forma Salvaje Eterna: Cuando tiras iniciativa sin usos de Forma Salvaje, recuperas uno.

        Mago Natural: Puedes convertir usos de Forma Salvaje en espacios de hechizo (cada uso = 2 niveles de hechizo).

        Longevidad: Envejeces diez veces más lento.`
            }
        },
        luchador: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes las siguientes competencias.
        Competencia en las tiradas de salvación de Fuerza y Constitución.
        Elige 2: Acrobacias, Manejo de animales, Atletismo, Historia, Perspicacia, Intimidación, Persuasión, Percepción o Supervivencia.
        Armas simples y marciales. Armaduras ligeras, medias y pesadas, y escudos.`,

                "Estilo de combate": `Obtienes una dote de Estilo de Combate de tu elección. Se recomienda Defensa.
        Cada vez que obtienes un nivel de Luchador, puedes reemplazar el estilo elegido por otro.`,

                "Segundo aliento": `Tienes una reserva limitada de resistencia física y mental. Como acción adicional, puedes recuperar puntos de golpe iguales a 1d10 + tu nivel de Luchador.
        Puedes usar esta característica dos veces. Recuperas un uso tras un descanso corto y todos tras un descanso largo.
        Obtienes más usos en niveles superiores según la tabla de Luchador.`,

                "Dominio de armas": `Tu entrenamiento te permite usar las propiedades de dominio de 3 tipos de armas simples o marciales de tu elección.
        Cada vez que terminas un descanso largo, puedes cambiar una de estas armas.
        Obtienes acceso a más dominios según subes de nivel.`
            },

            2: {
                "Acción impetuosa": `Puedes superar tus límites momentáneamente. En tu turno, puedes realizar una acción adicional, excepto la acción de magia.
        Tras usar esta característica, debes terminar un descanso corto o largo para volver a usarla.
        A nivel 17 puedes usarla dos veces antes de descansar, pero solo una vez por turno.`,

                "Mente táctica": `Cuando fallas una prueba de habilidad, puedes gastar un uso de Segundo Aliento para intentar convertirlo en éxito.
        En lugar de recuperar vida, tiras 1d10 y sumas el resultado a la tirada.
        Si aún fallas, no gastas el uso de Segundo Aliento.`
            },

            3: {
                "Subclase de guerrero": `Obtienes una subclase de Luchador de tu elección.
        Las opciones incluyen: Banneret, Battle Master, Champion, Eldritch Knight y Psi Warrior.
        Obtienes sus habilidades según tu nivel de Luchador.`
            },

            4: {
                "Mejora de característica": `Obtienes 2 puntos para mejorar características o una dote para la que califiques.
        También se obtiene en niveles 6, 8, 12, 14 y 16.`
            },

            5: {
                "Ataque extra": `Puedes atacar dos veces en lugar de una cuando realizas la acción de Ataque.`,

                "Desplazamiento táctico": `Cuando usas Segundo Aliento como acción adicional, puedes moverte hasta la mitad de tu velocidad sin provocar ataques de oportunidad.`
            },

            9: {
                "Indomable": `Si fallas una tirada de salvación, puedes repetirla con un bonificador igual a tu nivel de Luchador.
        Debes usar el nuevo resultado.
        Usos: 1 (nivel 9), 2 (nivel 13), 3 (nivel 17). Se recupera tras descanso largo.`,

                "Maestro táctico": `Cuando atacas con un arma cuyo dominio puedes usar, puedes reemplazar esa propiedad por Empujar, Debilitar o Ralentizar para ese ataque.`
            },

            11: {
                "Dos ataques extra": `Puedes atacar tres veces en lugar de una cuando realizas la acción de Ataque.`
            },

            13: {
                "Ataques estudiados": `Aprendes de cada ataque. Si fallas un ataque contra una criatura, tienes ventaja en tu siguiente ataque contra ella antes del final de tu siguiente turno.`
            },

            19: {
                "Bendición épica": `Obtienes una dote de Bendición Épica u otra dote para la que califiques.`
            },

            20: {
                "Tres ataques extra": `Puedes atacar cuatro veces en lugar de una cuando realizas la acción de Ataque.`
            }
        },

        monje: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes las siguientes competencias.
        Competencia en tiradas de salvación de Fuerza y Destreza.
        Elige 2: Acrobacias, Atletismo, Historia, Perspicacia, Religión o Sigilo.
        Competencia con herramientas: un tipo de herramientas de artesano o instrumento musical.
        Armas simples y armas marciales con la propiedad Ligera. Sin armaduras ni escudos.`,

                "Artes marciales": `Tu entrenamiento te otorga dominio del combate sin armas y con armas de monje (armas cuerpo a cuerpo simples y armas marciales con la propiedad Ligera).
        Obtienes los siguientes beneficios si no llevas armadura ni escudo:
        Golpe adicional. Puedes hacer un ataque desarmado como acción adicional.
        Dado de artes marciales. Puedes usar 1d6 en lugar del daño normal de tus ataques desarmados o armas de monje. Este dado mejora con niveles.
        Ataques ágiles. Puedes usar Destreza en lugar de Fuerza para las tiradas de ataque y daño. También puedes usar Destreza para calcular la CD de agarrar o empujar.`,

                "Defensa sin armadura": "Si no llevas armadura ni escudo, tu CA es 10 + tu modificador de Destreza + tu modificador de Sabiduría."
            },

            2: {
                "Foco del monje": `Obtienes Puntos de Foco iguales a tu nivel de monje (según tabla). Puedes gastarlos para usar habilidades especiales. Recuperas todos al terminar un descanso corto o largo.
        CD de habilidades: 8 + tu modificador de Sabiduría + tu bonificador de competencia.

        Ráfaga de golpes. Gastas 1 punto para hacer dos ataques desarmados como acción adicional.
        Defensa paciente. Puedes Desengancharte como acción adicional o gastar 1 punto para Desengancharte y Esquivar.
        Paso del viento. Puedes Correr como acción adicional o gastar 1 punto para Desengancharte y Correr, duplicando tu salto.`,

                "Movimiento sin armadura": "Tu velocidad aumenta en 10 pies mientras no lleves armadura ni escudo.",

                "Metabolismo sobrenatural": `Cuando tiras iniciativa, puedes recuperar todos los Puntos de Foco. Además, tiras tu dado de artes marciales y recuperas PV igual a tu nivel + el resultado.
        Solo puedes usar esto una vez por descanso largo.`
            },

            3: {
                "Desviar ataques": `Cuando un ataque te golpea y hace daño contundente, cortante o perforante, puedes usar tu reacción para reducir el daño en 1d10 + tu Destreza + tu nivel.
        Si reduces el daño a 0, puedes gastar 1 punto de foco para redirigirlo a otra criatura cercana.`,

                "Subclase de monje": "Eliges una subclase (Guerrero de la Misericordia, Sombras, Elementos o Mano Abierta)."
            },

            4: {
                "Mejora de característica": "Obtienes +2 a características o una dote. También en niveles 8, 12 y 16.",
                "Caída lenta": "Puedes usar tu reacción para reducir daño de caída en 5 × tu nivel."
            },

            5: {
                "Ataque extra": "Puedes atacar dos veces con la acción de Ataque.",
                "Golpe aturdidor": `Una vez por turno, al golpear, puedes gastar 1 punto de foco.
        El objetivo hace salvación de Constitución:
        Fallo: queda Aturdido.
        Éxito: velocidad reducida a la mitad y el siguiente ataque contra él tiene ventaja.`
            },

            6: {
                "Golpes potenciados": "Tus ataques desarmados pueden hacer daño de Fuerza en lugar de su tipo normal."
            },

            7: {
                "Evasión": "Si superas una salvación de Destreza para mitad de daño, no recibes daño. Si fallas, recibes la mitad."
            },

            8: {
                "Mejora de característica": "Obtienes otra mejora de característica o dote."
            },

            9: {
                "Movimiento acrobático": "Puedes moverte por superficies verticales y líquidos durante tu turno sin caer."
            },

            10: {
                "Foco mejorado": `Tus habilidades mejoran:
        Ráfaga de golpes: haces 3 ataques en vez de 2.
        Defensa paciente: ganas PV temporales (2 dados de artes marciales).
        Paso del viento: puedes mover a un aliado contigo sin provocar ataques de oportunidad.`,

                "Autorestauración": "Al final de tu turno puedes eliminar Encantado, Asustado o Envenenado. No sufres agotamiento por falta de comida o agua."
            },

            11: {
                "Subclase": "Obtienes una característica adicional de tu subclase."
            },

            12: {
                "Mejora de característica": "Obtienes otra mejora de característica o dote."
            },

            13: {
                "Desviar energía": "Ahora puedes usar Desviar ataques contra cualquier tipo de daño."
            },

            14: {
                "Superviviente disciplinado": `Obtienes competencia en todas las tiradas de salvación.
        Si fallas una, puedes gastar 1 punto de foco para repetirla.`
            },

            15: {
                "Foco perfecto": "Al tirar iniciativa, si tienes 3 o menos puntos de foco, subes hasta 4."
            },

            16: {
                "Mejora de característica": "Obtienes otra mejora de característica o dote."
            },

            17: {
                "Subclase": "Obtienes otra característica de tu subclase."
            },

            18: {
                "Defensa superior": `Puedes gastar 3 puntos de foco para obtener resistencia a todo daño excepto Fuerza durante 1 minuto.`
            },

            19: {
                "Don épico": "Obtienes una dote épica u otra dote para la que cumplas requisitos."
            },

            20: {
                "Cuerpo y mente": "Has perfeccionado tu cuerpo y mente a niveles extraordinarios."
            }
        },
        paladin: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes las siguientes competencias.
        Competencia en tiradas de salvación de Sabiduría y Carisma.
        Elige 2 habilidades: Atletismo, Perspicacia, Intimidación, Medicina, Persuasión o Religión.
        Armas simples y marciales. Armaduras ligeras, medias, pesadas y escudos.`,

                "Imposición de manos": `Tu toque bendecido puede curar heridas. Tienes una reserva de poder curativo que se repone al finalizar un descanso largo. Con esa reserva puedes restaurar una cantidad total de puntos de golpe igual a cinco veces tu nivel de Paladín.
        Como acción adicional, puedes tocar a una criatura (incluyéndote a ti mismo) y restaurar una cantidad de puntos de golpe hasta el máximo disponible.
        También puedes gastar 5 puntos de la reserva para eliminar la condición Envenenado.`,

                "Lanzamiento de hechizos": `Has aprendido a lanzar hechizos mediante oración y meditación. El Carisma es tu característica para lanzar hechizos.
        Preparas una lista de hechizos disponibles. A nivel 1 eliges 2 hechizos de nivel 1. La lista aumenta conforme subes niveles: Nv2:3 Nv3:4 Nv4:5 Nv5:6 Nv6:6 Nv7:7 Nv8:7 Nv9:9 Nv10:9 Nv11:10 Nv12:10 Nv13:11 Nv14:11 Nv15:12 Nv16:12 Nv17:14 Nv18:14 Nv19:15 Nv20:15.
        Puedes cambiar un hechizo preparado al finalizar un descanso largo.
        Puedes usar un símbolo sagrado como foco de lanzamiento de hechizos.`,

                "Dominio de armas": `Puedes usar las propiedades de maestría de dos tipos de armas con las que tengas competencia.
        Puedes cambiar estas armas al finalizar un descanso largo.`
            },

            2: {
                "Estilo de combate": `Obtienes un Estilo de Combate de tu elección.
        Alternativamente puedes elegir Guerrero Bendecido: aprendes dos trucos de Clérigo que cuentan como hechizos de Paladín y usan Carisma. Puedes cambiarlos al subir de nivel.`,

                "Castigo de paladín": `Siempre tienes preparado el hechizo Castigo Divino.
        Puedes lanzarlo sin gastar un espacio de conjuro una vez por descanso largo.`
            },

            3: {
                "Canalizar divinidad": `Puedes canalizar energía divina para crear efectos mágicos.
        Tienes 2 usos. Recuperas uno en descanso corto y todos en descanso largo. Obtienes un uso adicional en nivel 11.

        Sentido divino: Como acción adicional detectas Celestiales, Infernales y No Muertos a 60 pies durante 10 minutos, así como lugares u objetos consagrados o profanados.`,

                "Juramento de paladín": `Eliges una subclase de Paladín que define tu juramento y te otorga habilidades adicionales.

        Subclases disponibles:
        Juramento de Devoción
        Juramento de Gloria
        Juramento de los Ancestros
        Juramento de los Genios Nobles
        Juramento de Venganza`
            },

            4: {
                "Mejora de característica": `Obtienes +2 a características o una dote.
        Se repite en niveles 8, 12 y 16.`
            },

            5: {
                "Ataque extra": `Puedes atacar dos veces en lugar de una cuando realizas la acción de ataque.`,

                "Corcel fiel": `Siempre tienes preparado el hechizo Encontrar Corcel.
        Puedes lanzarlo una vez sin gastar espacio de conjuro por descanso largo.`
            },

            6: {
                "Aura de protección": `Generas un aura de 10 pies.
        Tú y aliados dentro del aura suman tu modificador de Carisma (mínimo +1) a sus tiradas de salvación.`
            },

            7: {},

            8: {
                "Mejora de característica": `Obtienes +2 a características o una dote.`
            },

            9: {
                "Rechazar enemigos": `Como acción mágica puedes gastar Canalizar Divinidad.
        Afectas criaturas iguales a tu modificador de Carisma a 60 pies. Deben superar una salvación de Sabiduría o quedan Asustadas durante 1 minuto o hasta recibir daño.
        Mientras estén así, solo pueden moverse, hacer acción o acción adicional en su turno.`
            },

            10: {
                "Aura de coraje": `Tú y tus aliados sois inmunes a la condición Asustado dentro de tu aura.`
            },

            11: {
                "Golpes radiantes": `Tus ataques cuerpo a cuerpo infligen 1d8 de daño radiante adicional.`
            },

            12: {
                "Mejora de característica": `Obtienes +2 a características o una dote.`
            },

            13: {},

            14: {
                "Toque restaurador": `Cuando usas Imposición de manos, puedes eliminar condiciones: Cegado, Encantado, Sordo, Asustado, Paralizado o Aturdido.
        Cada condición cuesta 5 puntos de la reserva.`
            },

            15: {},

            16: {
                "Mejora de característica": `Obtienes +2 a características o una dote.`
            },

            17: {},

            18: {
                "Expansión de aura": `Tu Aura de Protección ahora tiene un alcance de 30 pies.`
            },

            19: {
                "Bendición épica": `Obtienes una dote de Bendición Épica u otra dote válida.`
            },

            20: {
                "Rasgo de subclase": `Obtienes la habilidad final de tu subclase de Paladín.`
            }
        },
        explorador: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes las siguientes competencias.
        Competencia en tiradas de salvación de Fuerza y Destreza.
        Elige 3 habilidades: Trato con Animales, Atletismo, Perspicacia, Investigación, Naturaleza, Percepción, Sigilo o Supervivencia.
        Armas simples y marciales. Armaduras ligeras y medias y escudos.`,

                "Lanzamiento de hechizos": `Has aprendido a canalizar la magia de la naturaleza.
        Sabiduría es tu característica para lanzar hechizos.

        Preparas una lista de hechizos disponibles. A nivel 1 eliges 2 hechizos de nivel 1. La lista aumenta conforme subes niveles:
        Nv2:3 Nv3:4 Nv4:5 Nv5:6 Nv6:6 Nv7:7 Nv8:7 Nv9:9 Nv10:9 Nv11:10 Nv12:10 Nv13:11 Nv14:11 Nv15:12 Nv16:12 Nv17:14 Nv18:14 Nv19:15 Nv20:15.

        Los hechizos deben ser de un nivel para el cual tengas espacios.
        Puedes cambiar un hechizo preparado al terminar un descanso largo.

        Puedes usar un enfoque druídico como foco de lanzamiento.`,

                "Enemigo predilecto": `Siempre tienes preparado el hechizo Marca del cazador.
        Puedes lanzarlo dos veces sin gastar espacio de conjuro, recuperando usos tras un descanso largo.
        El número de usos aumenta según tu nivel.`,

                "Maestría en armas": `Puedes usar las propiedades de maestría de dos tipos de armas con las que tengas competencia.
        Puedes cambiar estas armas tras un descanso largo.`
            },

            2: {
                "Explorador experto": `Gracias a tus viajes obtienes:
        Pericia: Elige una habilidad en la que tengas competencia y ganas Pericia.
        Idiomas: Aprendes dos idiomas adicionales.`,

                "Estilo de combate": `Obtienes un estilo de combate de tu elección.

        Guerrero druídico: Aprendes dos trucos de druida. Usas Sabiduría para lanzarlos y cuentan como hechizos de explorador. Puedes cambiarlos al subir de nivel.`
            },

            3: {
                "Subclase de explorador": `Eliges una subclase:
        Maestro de Bestias, Errante Feérico, Acechador Sombrío, Cazador o Caminante Invernal.
        Obtienes sus habilidades según tu nivel.`
            },

            4: {
                "Mejora de característica": `Obtienes +2 a características o una dote.
        También en niveles 8, 12 y 16.`
            },

            5: {
                "Ataque extra": `Puedes atacar dos veces en lugar de una cuando realizas la acción de ataque.`
            },

            6: {
                "Errante": `Tu velocidad aumenta en 10 pies si no llevas armadura pesada.
        Obtienes velocidad de escalada y nado igual a tu velocidad.`
            },

            9: {
                "Pericia": `Elige dos habilidades adicionales en las que tengas competencia. Obtienes Pericia en ellas.`
            },

            10: {
                "Incansable": `Obtienes los siguientes beneficios:

        Puntos de golpe temporales: Como acción mágica obtienes 1d8 + modificador de Sabiduría en puntos temporales. Usos iguales a tu modificador de Sabiduría.

        Reducir agotamiento: Al terminar un descanso corto reduces tu nivel de agotamiento en 1.`
            },

            13: {
                "Cazador implacable": `Recibir daño no rompe tu concentración en Marca del cazador.`
            },

            14: {
                "Velo de la naturaleza": `Como acción adicional te vuelves invisible hasta el final de tu siguiente turno.
        Usos iguales a tu modificador de Sabiduría.`
            },

            17: {
                "Cazador preciso": `Tienes ventaja en ataques contra la criatura afectada por tu Marca del cazador.`
            },

            18: {
                "Sentidos ferales": `Obtienes visión ciega con un alcance de 30 pies.`
            },

            19: {
                "Bendición épica": `Obtienes una dote de Bendición Épica u otra dote para la que califiques.`
            },

            20: {
                "Asesino de enemigos": `El dado de daño de Marca del cazador pasa a ser 1d10 en lugar de 1d6.`
            }
        },

        picaro: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes las siguientes competencias.
        Competencia en tiradas de salvación de Destreza e Inteligencia.
        Elige 4: Acrobacias, Atletismo, Engaño, Perspicacia, Intimidación, Investigación, Percepción, Persuasión, Juego de manos o Sigilo.
        Armas simples y armas marciales con propiedad Sutil o Ligera.
        Herramientas de ladrón.
        Armadura ligera.`,
                
                "Pericia": `Obtienes Pericia en dos de tus habilidades en las que seas competente. Se recomienda Juego de manos y Sigilo si las tienes.
        En nivel 6 obtienes Pericia en dos habilidades adicionales.`,

                "Ataque furtivo": `Sabes golpear con precisión y aprovechar distracciones. Una vez por turno puedes hacer 1d6 de daño adicional a una criatura que golpees si tienes ventaja en la tirada de ataque y usas un arma Sutil o a distancia.

        No necesitas ventaja si un aliado está a 5 pies del objetivo, no está incapacitado y tú no tienes desventaja.

        El daño aumenta según tu nivel de Picaro.`,

                "Jerga de ladrones": `Conoces el lenguaje secreto de los ladrones y otro idioma adicional de tu elección.`,

                "Dominio de armas": `Puedes usar las propiedades de dominio de dos armas en las que seas competente, como dagas o arcos cortos.
        Puedes cambiar estas armas tras un descanso largo.`
            },

            2: {
                "Acción astuta": `Tu agilidad te permite actuar rápido. En tu turno puedes usar como acción adicional:
        Correr, Destrabarte o Esconderte.`
            },

            3: {
                "Apuntar con precisión": `Como acción adicional, obtienes ventaja en tu próxima tirada de ataque este turno.
        Solo puedes usarlo si no te has movido, y después tu velocidad se vuelve 0 hasta el final del turno.`
            },

            4: {
                "Mejora de característica": `Obtienes 2 puntos para mejorar características o una dote para la que cumplas requisitos.
        También en niveles 8, 10, 12 y 16.`
            },

            5: {
                "Golpe astuto": `Puedes modificar tu Ataque Furtivo con efectos especiales sacrificando dados:

        Veneno (1d6): el objetivo hace salvación de Constitución o queda envenenado 1 minuto.
        Derribo (1d6): salvación de Destreza o queda tumbado.
        Retirada (1d6): te mueves hasta la mitad de tu velocidad sin provocar ataques de oportunidad.`,

                "Esquiva asombrosa": `Cuando un enemigo que ves te golpea, puedes usar tu reacción para reducir el daño a la mitad.`
            },

            6: {
                "Pericia adicional": `Obtienes Pericia en dos habilidades más.`
            },

            7: {
                "Evasión": `Si haces una tirada de salvación de Destreza para recibir la mitad de daño:
        Recibes 0 si tienes éxito, y la mitad si fallas.
        No funciona si estás incapacitado.`,

                "Talento fiable": `Si haces una tirada con una habilidad o herramienta en la que seas competente, cualquier resultado de 9 o menos cuenta como 10.`
            },

            8: {
                "Mejora de característica": "Igual que nivel 4."
            },

            11: {
                "Golpe astuto mejorado": `Puedes aplicar dos efectos de Golpe astuto a la vez pagando el coste de dados de ambos.`
            },

            14: {
                "Golpes retorcidos": `Nuevos efectos para Golpe astuto:

        Aturdir (2d6): el objetivo solo puede moverse o hacer acción o acción adicional en su turno.
        Dejar inconsciente (6d6): salvación o queda inconsciente 1 minuto o hasta recibir daño.
        Cegar (3d6): salvación o queda cegado hasta el final de su siguiente turno.`
            },

            15: {
                "Mente escurridiza": `Obtienes competencia en tiradas de salvación de Sabiduría y Carisma.`
            },

            18: {
                "Escurridizo": `Ningún ataque tiene ventaja contra ti salvo que estés incapacitado.`
            },

            19: {
                "Bendición épica": `Obtienes una dote de Bendición Épica u otra dote válida.`
            },

            20: {
                "Golpe de suerte": `Si fallas una tirada de d20, puedes convertirla en un 20.
        Solo una vez por descanso corto o largo.`
            }
        },

        hechicero: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes las siguientes competencias.
        Competencia en tiradas de salvación de Constitución y Carisma.
        Elige 2: Arcanos, Engaño, Perspicacia, Intimidación, Persuasión o Religión.
        Armas simples.
        Sin armadura.`,

                "Lanzamiento de hechizos": `Usas Carisma para lanzar hechizos y puedes usar un enfoque arcano.

        Trucos: conoces 4. Puedes cambiarlos al subir nivel. Aprendes más en nivel 4 y 10.

        Hechizos preparados: empiezas con 2 de nivel 1 y aumentan con el nivel.
        Puedes cambiarlos al subir nivel.

        Recuperas espacios de hechizo tras descanso largo.`,

                "Hechicería innata": `Como acción adicional, puedes desatar tu magia durante 1 minuto:

        +1 a la CD de salvación de tus hechizos.
        Ventaja en tiradas de ataque de hechizos.

        Puedes usarlo 2 veces y recuperas usos en descanso largo.`
            },

            2: {
                "Fuente de magia": `Obtienes Puntos de Hechicería (2 al inicio).

        Puedes usarlos para:
        - Convertir espacios de hechizo en puntos.
        - Crear espacios de hechizo (máx nivel 5).

        Costes:
        Nivel 1: 2 puntos
        Nivel 2: 3 puntos
        Nivel 3: 5 puntos
        Nivel 4: 6 puntos
        Nivel 5: 7 puntos

        Recuperas todos los puntos tras descanso largo.`,

                "Metamagia": `Obtienes 2 opciones de Metamagia.

        Permiten modificar tus hechizos gastando Puntos de Hechicería.

        Solo puedes usar una por hechizo (salvo que se indique lo contrario).

        Puedes cambiar opciones al subir nivel.
        Obtienes más en nivel 10 y 17.`
            },

            3: {
                "Subclase de Hechicero": `Obtienes una subclase.
        Ejemplos: Hechicería dracónica, magia salvaje, aberrante, etc.`
            },

            4: {
                "Mejora de característica": `Obtienes 2 puntos o una dote.
        También en niveles 8, 12 y 16.`
            },

            5: {
                "Restauración hechicera": `En descanso corto recuperas Puntos de Hechicería hasta la mitad de tu nivel (redondeado hacia abajo).
        Solo una vez por descanso largo.`
            },

            7: {
                "Encarnación de hechicería": `Si no tienes usos de Hechicería innata, puedes activarla gastando 2 puntos.

        Además, mientras está activa, puedes usar hasta 2 Metamagias en un mismo hechizo.`
            },

            10: {
                "Metamagia adicional": `Obtienes 2 opciones más de Metamagia.`
            },

            17: {
                "Metamagia adicional": `Obtienes 2 opciones más de Metamagia.`
            },

            19: {
                "Bendición épica": `Obtienes una dote épica u otra dote válida.`
            },

            20: {
                "Apoteosis arcana": `Mientras Hechicería innata esté activa, puedes usar una Metamagia por turno sin gastar Puntos de Hechicería.`
            }
        },

        brujo: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes las siguientes competencias.
        Competencia en tiradas de salvación de Sabiduría y Carisma.
        Elige 2 habilidades entre: Arcano, Engaño, Historia, Intimidación, Investigación, Naturaleza o Religión.
        Armas simples y armadura ligera`,

                "Magia de pacto": `Has hecho un pacto con una entidad misteriosa que te otorga poder mágico.

        Trucos. Conoces 2 trucos de la lista de hechizos de brujo. Cada vez que subes de nivel puedes cambiar uno. En nivel 4 y 10 aprendes otro truco.

        Espacios de hechizo. Todos tus espacios son del mismo nivel y se recuperan en descanso corto o largo.

        Hechizos preparados. A nivel 1 eliges 2 hechizos. La lista aumenta según nivel:
        Nv2:3 Nv3:4 Nv4:5 Nv5:6 Nv6:7 Nv7:8 Nv8:9 Nv9:10 Nv10:10 Nv11:11 Nv12:11 Nv13:12 Nv14:12 Nv15:13 Nv16:13 Nv17:14 Nv18:14 Nv19:15 Nv20:15.
        Los hechizos deben ser de un nivel que puedas lanzar.

        Puedes cambiar un hechizo cada vez que subes de nivel.

        Carisma es tu habilidad de lanzamiento de hechizos.
        Puedes usar un foco arcano como enfoque.`,

                "Invocaciones sobrenaturales": `Has descubierto invocaciones eldritch, fragmentos de conocimiento prohibido que te otorgan habilidades mágicas permanentes.

        Obtienes 1 invocación a tu elección.

        Cada vez que subes de nivel puedes cambiar una invocación por otra.
        Obtienes más invocaciones según tu nivel.

        No puedes elegir la misma invocación más de una vez salvo que se indique lo contrario.`
            },

            2: {
                "Astucia mágica": `Puedes realizar un ritual esotérico durante 1 minuto para recuperar espacios de hechizo gastados.

        Recuperas hasta la mitad de tus espacios máximos (redondeado hacia arriba).

        Una vez lo usas, no puedes volver a hacerlo hasta terminar un descanso largo.`
            },

            3: {
                "Subclase de brujo": `Obtienes una subclase de brujo, representando tu patrón (como Archifata, Infernal, Celestial o Gran Primigenio).

        Obtienes habilidades adicionales según tu subclase conforme subes de nivel.`
            },

            4: {
                "Mejora de característica": `Obtienes una mejora de característica o una dote.

        También obtienes esta mejora en niveles 8, 12 y 16.`
            },

            9: {
                "Contactar patrón": `Ahora puedes comunicarte directamente con tu patrón.

        Siempre tienes preparado el hechizo Contactar con otro plano.

        Puedes lanzarlo sin gastar espacio de hechizo para contactar con tu patrón y superas automáticamente la tirada de salvación.

        Tras usarlo así, debes terminar un descanso largo para volver a usarlo.`
            },

            11: {
                "Arcano místico": `Tu patrón te otorga un secreto mágico.

        Elige un hechizo de nivel 6 de brujo. Puedes lanzarlo una vez sin gastar espacio de hechizo.

        Recuperas su uso tras descanso largo.

        En niveles 13, 15 y 17 obtienes más arcanos (niveles 7, 8 y 9).

        Puedes cambiar estos hechizos al subir de nivel.`
            },

            19: {
                "Bendición épica": `Obtienes una dote épica u otra dote para la que cumplas requisitos.

        Se recomienda Bendición del destino.`
            },

            20: {
                "Maestro sobrenatural": `Cuando usas Astucia mágica, recuperas todos tus espacios de hechizo en lugar de solo la mitad.`
            }
        },
        mago: {
            1: {
                "Competencias": `Si obtienes esta clase como clase principal y no multiclase obtienes:
        Competencia en tiradas de salvación de Inteligencia y Sabiduría.
        Elige 2 habilidades entre: Arcanos, Historia, Perspicacia, Investigación, Medicina, Naturaleza o Religión.
        Armas simples. Sin armadura.`,

                "Lanzamiento de hechizos": `Inteligencia es tu habilidad para lanzar hechizos.
        Usas un libro de hechizos.

        Trucos: Conoces 3 trucos. Tras cada descanso largo puedes cambiar uno. En nivel 4 y 10 aprendes otro.

        Libro de hechizos: Empiezas con 6 hechizos de nivel 1.
        Cada nivel añades 2 hechizos nuevos de un nivel que puedas lanzar.

        Hechizos preparados: Preparas 4 hechizos al nivel 1 desde tu libro.
        La lista aumenta con el nivel: Nv2:5 Nv3:6 Nv4:7 Nv5:9 Nv6:10 Nv7:11 Nv8:12 Nv9:14 Nv10:15 Nv11:16 Nv12:16 Nv13:17 Nv14:18 Nv15:19 Nv16:21 Nv17:22 Nv18:23 Nv19:24 Nv20:25.

        Puedes cambiar los hechizos preparados tras un descanso largo.`,

                "Adepto ritual": `Puedes lanzar hechizos como ritual si tienen la etiqueta Ritual y están en tu libro, sin necesidad de tenerlos preparados.`,

                "Recuperación arcana": `Tras un descanso corto recuperas espacios de hechizo con un nivel total igual a la mitad de tu nivel de mago (redondeado hacia arriba).
        No puedes recuperar espacios de nivel 6 o superior.
        Solo una vez por descanso largo.`,

                "Libro de hechizos": `Puedes copiar hechizos a tu libro.
        Coste: 2 horas y 50 GP por nivel del hechizo.

        Copiar desde tu propio libro a otro: 1 hora y 10 GP por nivel.

        Si pierdes el libro, puedes reconstruirlo con los hechizos preparados.`
            },

            2: {
                "Erudito": `Elige una habilidad en la que seas competente (Arcanos, Historia, Investigación, Medicina, Naturaleza o Religión).
        Obtienes Pericia en esa habilidad.`
            },

            3: {
                "Subclase": `Eliges una tradición arcana (subclase), que te otorga habilidades adicionales según tu nivel.`
            },

            4: {
                "Mejora de característica": `Obtienes una mejora de característica o dote. También en niveles 8, 12 y 16.`
            },

            5: {
                "Memorizar hechizo": `Tras un descanso corto puedes cambiar un hechizo preparado por otro de tu libro.`
            },

            10: {
                "Rasgo de subclase": `Obtienes una nueva habilidad de tu subclase.`
            },

            18: {
                "Maestría de hechizos": `Elige un hechizo de nivel 1 y uno de nivel 2 de tu libro.
        Siempre los tienes preparados y puedes lanzarlos sin gastar espacios.

        Puedes cambiarlos tras un descanso largo.`
            },

            19: {
                "Bendición épica": `Obtienes una dote de bendición épica u otra dote para la que cumplas requisitos.`
            },

            20: {
                "Hechizos característicos": `Elige 2 hechizos de nivel 3 de tu libro.
        Siempre están preparados y puedes lanzarlos una vez gratis por descanso corto o largo.`
            }
        },
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

        camino_del_berserker: {
            3: {
                "Frenesí": "Si usas Reckless Attack mientras tu Rage está activo, infliges daño adicional al primer objetivo que golpees en tu turno con un ataque basado en la Fuerza. Para determinar el daño adicional, enrolle una cantidad de d6 igual a su bonificación de daño por ira y agréguelos. El daño tiene el mismo tipo que el arma o Golpe Desarmado utilizado para el ataque."
            },
            6: {
                "Rabia sin sentido":"Tienes inmunidad a las condiciones encantadas y asustadas mientras tu ira está activa. Si estás encantado o asustado cuando entras en tu ira, la condición termina contigo."
            },
            10: {
                "Represalias":"Cuando recibes daño de una criatura que está a 5 pies de ti, puedes tomar una reacción para realizar un ataque cuerpo a cuerpo contra esa criatura, usando un arma o un ataque desarmado."
            },
            14: {
                "Presencia intimidante":`Como acción adicional, puedes infundir terror en los demás con tu presencia amenazadora y tu poder primordial. Cuando lo hagas, cada criatura de tu elección en una Emanación de 30 pies que se origina en ti debe realizar un lanzamiento de salvación de Sabiduría (DC 8 más tu modificador de Fuerza y Bono de Competencia). En una salvación fallida, una criatura tiene la condición de Asustado durante 1 minuto. Al final de cada uno de los giros de la criatura asustada, la criatura repite la salvación, poniendo fin al efecto sobre sí misma en el éxito.
Una vez que uses esta función, no podrás usarla nuevamente hasta que termines un Descanso Largo a menos que gastes el uso de tu Rabia (no es necesario realizar ninguna acción) para restaurarla.`
            },
        },

        camino_del_corazón_salvaje: {
            3: {
                "Altavoz de animales": "Puedes lanzar el Sentido de bestia y Habla con animales hechizos pero sólo como Rituales. La sabiduría es tu habilidad para lanzar hechizos para ellos.",
                "La ira de la naturaleza":`Your Rage aprovecha el poder primordial de los animales. Cada vez que activas tu Rage, obtienes una de las siguientes opciones de tu elección.
Oso. Mientras tu Rage está activo, tienes Resistencia a todo tipo de daño excepto Fuerza, Necrótico, Psíquico y Radiante.
Águila. Cuando activas tu Rage, puedes realizar las acciones Disengage y Dash como parte de esa acción de bonificación. Mientras tu Rage esté activo, puedes realizar una acción de bonificación para realizar ambas acciones.
Lobo. Mientras tu Rage está activo, tus aliados tienen ventaja en las tiradas de ataque contra cualquier enemigo tuyo a menos de 5 pies de ti.`
            },
            6: {
                "Aspecto de lo salvaje":`Obtienes una de las siguientes opciones de tu elección. Siempre que termines un Descanso Largo, podrás cambiar tu elección.
Búho. Tienes Darkvision con un alcance de 60 pies. Si ya tienes Darkvision, su alcance aumenta en 60 pies.
Pantera. Tienes una velocidad de ascenso igual a tu velocidad.
Salmón. Tienes una velocidad de natación igual a tu velocidad.`
            },
            10: {
                "Orador de Naturaleza":"Puedes lanzar el Comuna con la Naturaleza hechizo pero sólo como Ritual. La sabiduría es tu habilidad para lanzar hechizos."
            },
            14: {
                "El poder de la naturaleza":`Cada vez que activas tu Rage, obtienes una de las siguientes opciones de tu elección.
Halcón. Mientras tu Rage está activo, tienes una velocidad de vuelo igual a tu velocidad si no llevas ninguna armadura.
León. Mientras tu Rage está activo, cualquiera de tus enemigos a menos de 5 pies de ti tiene desventajas en las tiradas de ataque contra objetivos distintos a ti u otro bárbaro que tenga esta opción activa.
Carnero. Mientras tu ira está activa, puedes hacer que una criatura grande o más pequeña tenga la condición de propensa cuando la golpeas con un ataque cuerpo a cuerpo.`
            }
        },

        camino_del_árbol_mundo: {
            3: {
                "Vitalidad del Árbol":`Your Rage aprovecha la fuerza vital del Árbol del Mundo. Obtienes los siguientes beneficios.
Aumento de vitalidad. Cuando activas tu Rage, obtienes una cantidad de puntos de vida temporales igual a tu nivel bárbaro.
Fuerza vivificante. Al comienzo de cada uno de tus turnos mientras tu Rage está activo, puedes elegir otra criatura a menos de 10 pies de ti mismo para ganar puntos de vida temporales. Para determinar la cantidad de puntos de vida temporales, obtenga una cantidad de d6 iguales a su bonificación de daño por ira y agréguelos. Si alguno de estos puntos de vida temporales permanece cuando termina tu ira, desaparecen.`
            },
            6: {
                "Ramas del Árbol":"Cada vez que una criatura que puedas ver comienza su turno a 30 pies de ti mientras tu Rabia está activa, puedes tomar una Reacción para convocar ramas espectrales del Árbol del Mundo a su alrededor. El objetivo debe tener éxito en un lanzamiento de ahorro de fuerza (DC 8 más su modificador de fuerza y bonificación de competencia) o ser teletransportado a un espacio desocupado que pueda ver a menos de 5 pies de usted mismo o en el espacio desocupado más cercano que pueda ver. Después de que el objetivo se teletransporte, puedes reducir su velocidad a 0 hasta el final del turno actual."
            },
            10: {
                "Raíces que golpean":"Durante tu turno, tu alcance es 10 pies mayor con cualquier arma cuerpo a cuerpo que tenga la propiedad Pesada o Versátil, ya que los zarcillos del Árbol del Mundo se extienden desde ti. Cuando golpeas con un arma de este tipo en tu turno, puedes activar la propiedad de dominio Empujar o Derribar además de una propiedad de dominio diferente que estás usando con esa arma."
            },
            14: {
                "Viaja a lo largo del Árbol":"Cuando activas tu Rage y como acción adicional mientras tu Rage está activo, puedes teletransportarte hasta 60 pies a un espacio desocupado que puedas ver. Además, una vez por Rage, puedes aumentar el alcance de ese teletransporte a 150 pies. Cuando lo hagas, también podrás criar hasta seis criaturas dispuestas que se encuentren a 10 pies de ti. Cada criatura se teletransporta a un espacio desocupado de su elección dentro de los 10 pies de su espacio de destino."
            }
        },
        camino_del_fanático: {
            3: {
                "Furia Divina":"Puedes canalizar el poder divino en tus golpes. En cada uno de tus turnos mientras tu Rage está activo, la primera criatura que golpees con un arma o un Golpe Desarmado recibe un daño adicional igual a 1d6 más la mitad de tu nivel Bárbaro (redondeado hacia abajo). El daño extra es Necrótico o Radiante; eliges el tipo cada vez que infliges el daño.",
                "Guerrero de los Dioses":`Una entidad divina ayuda a garantizar que puedas continuar la lucha. Tienes un grupo de cuatro d12 que puedes gastar para curarte. Como acción de bonificación, puedes gastar dados del grupo, tirarlos y recuperar una cantidad de puntos de vida igual al total de la tirada.
Tu grupo recupera todos los dados gastados cuando terminas un descanso largo.
El número máximo de dados del grupo aumenta en uno cuando alcanzas los niveles bárbaros 6 (5 dados), 12 (6 dados) y 17 (7 dados).`
            },
            6: {
                "Enfoque fanático":"Una vez por Rage activo, si fallas en un lanzamiento de salvación, puedes volver a tirarlo con una bonificación igual a tu bonificación de Rage Damage y debes usar la nueva tirada."
            },
            10: {
                "Presencia celosa":`Como acción adicional, desatas un grito de batalla infundido con energía divina. Hasta otras diez criaturas de tu elección dentro de los 60 pies de ti obtienen ventaja en tiradas de ataque y lanzamientos de salvación hasta el comienzo de tu siguiente turno.
Una vez que uses esta función, no podrás usarla nuevamente hasta que termines un Descanso Largo a menos que gastes el uso de tu Rabia (no es necesario realizar ninguna acción) para restaurarla.`
            },
            14: {
                "La ira de los dioses":`Cuando activas tu Rage, puedes asumir la forma de un guerrero divino. Este formulario dura 1 minuto o hasta que bajes a 0 puntos de vida. Una vez que utilice esta función, no podrá volver a hacerlo hasta que finalice un descanso prolongado.
Mientras esté en esta forma, obtendrá los beneficios a continuación.
Vuelo. Tienes una velocidad de vuelo igual a tu velocidad y puedes flotar.
Resistencia. Tienes resistencia al daño necrótico, psíquico y radiante.
Revivificación. Cuando una criatura a 30 pies de ti cae a 0 puntos de vida, puedes tomar una reacción para gastar el uso de tu ira y, en su lugar, cambiar los puntos de vida del objetivo a un número igual a tu nivel bárbaro.`
            }
        },
        colegio_de_la_danza: {
            3: {
                "Pasos Deslumbrantes": `Mientras no lleves armadura ni escudo, obtienes los siguientes beneficios:

        Virtuoso de la danza. Tienes ventaja en pruebas de Carisma (Interpretación) relacionadas con bailar.

        Defensa sin armadura. Tu CA base es 10 + tu modificador de Destreza + tu modificador de Carisma.

        Golpes ágiles. Cuando gastas un uso de Inspiración Bárdica como parte de una acción, acción adicional o reacción, puedes realizar un ataque desarmado como parte de esa misma acción.

        Daño bárdico. Puedes usar Destreza en lugar de Fuerza para ataques desarmados. El daño puede ser contundente igual a tu dado de Inspiración Bárdica + tu modificador de Destreza, sin gastar el dado.`
            },

            6: {
                "Movimiento Inspirador": `Cuando un enemigo que puedas ver termina su turno a 5 pies de ti, puedes usar tu reacción y gastar un uso de Inspiración Bárdica para moverte hasta la mitad de tu velocidad.

        Luego, un aliado a 30 pies puede usar su reacción para hacer lo mismo.

        Este movimiento no provoca ataques de oportunidad.`,

                "Pasos en Tándem": `Cuando tiras iniciativa, puedes gastar un uso de Inspiración Bárdica si no estás incapacitado.

        Tira el dado de Inspiración Bárdica; tú y todos los aliados a 30 pies que puedan verte u oírte añadís ese resultado a la iniciativa.`
            },

            14: {
                "Evasión Guiada": `Cuando un efecto te permite hacer una salvación de Destreza para recibir la mitad de daño, no recibes daño si tienes éxito, y solo la mitad si fallas.

        Si criaturas a 5 pies de ti están sujetas al mismo efecto, pueden beneficiarse también.

        No puedes usar esta habilidad si estás incapacitado.`
            }
        },

        colegio_del_glamour: {
            3: {
                "Magia cautivadora": `Siempre tienes preparados los hechizos Encantar persona e Imagen múltiple.

        Además, inmediatamente después de lanzar un conjuro de Encantamiento o Ilusión usando un espacio de conjuro, puedes hacer que una criatura que puedas ver a 60 p de ti realice una tirada de salvación de Sabiduría contra tu CD de conjuros.

        Si falla, queda Encantada o Asustada (a tu elección) durante 1 minuto. Puede repetir la tirada al final de cada uno de sus turnos, terminando el efecto con éxito.

        Una vez usas este beneficio, no puedes volver a usarlo hasta terminar un descanso largo. También puedes recuperar su uso gastando un uso de Inspiración Bárdica (sin acción).`,

                "Manto de inspiración": `Puedes tejer magia feérica en una canción o danza para vigorizar a otros. Como acción adicional, puedes gastar un uso de Inspiración Bárdica y tirar el dado correspondiente.

        Elige un número de criaturas a 60 p de ti igual a tu modificador de Carisma (mínimo 1). Cada una gana puntos de golpe temporales iguales al doble del resultado obtenido.

        Además, cada una puede usar su reacción para moverse hasta su velocidad sin provocar ataques de oportunidad.`
            },

            6: {
                "Manto de majestad": `Siempre tienes preparado el hechizo Orden.

        Como acción adicional, puedes lanzar Orden sin gastar espacio de conjuro y adoptas una apariencia sobrenatural durante 1 minuto o hasta que pierdas la concentración.

        Durante este tiempo, puedes lanzar Orden como acción adicional sin gastar espacios de conjuro.

        Las criaturas Encantadas por ti fallan automáticamente sus tiradas de salvación contra este hechizo.

        Una vez usas esta habilidad, no puedes volver a usarla hasta terminar un descanso largo. También puedes recuperar su uso gastando un espacio de conjuro de nivel 3 o superior (sin acción).`
            },

            14: {
                "Majestad inquebrantable": `Como acción adicional, puedes adoptar una presencia majestuosa mágica durante 1 minuto o hasta que quedes incapacitado.

        Durante este tiempo, cuando una criatura te impacta con una tirada de ataque por primera vez en un turno, debe superar una tirada de salvación de Carisma contra tu CD de conjuros o el ataque falla, ya que retrocede ante tu majestad.

        Una vez usas esta habilidad, no puedes volver a usarla hasta terminar un descanso corto o largo.`
            }
        },
        colegio_del_saber: {
            3: {
                "Competencias adicionales": `Obtienes competencia en tres habilidades a tu elección.`,

                "Palabras cortantes": `Aprendes a usar tu ingenio para distraer, confundir y debilitar sobrenaturalmente la confianza y competencia de otros.

        Cuando una criatura que puedas ver a 60 p de ti realiza una tirada de daño o tiene éxito en una prueba de característica o tirada de ataque, puedes usar tu reacción para gastar un uso de tu Inspiración Bárdica.

        Tira tu dado de Inspiración Bárdica y resta el resultado de la tirada de la criatura, reduciendo el daño o potencialmente convirtiendo el éxito en un fallo.`
            },

            6: {
                "Descubrimientos mágicos": `Aprendes dos conjuros a tu elección. Estos conjuros pueden proceder de las listas de Clérigo, Druida o Mago, o cualquier combinación de ellas.

        El conjuro elegido debe ser un truco o un conjuro para el que tengas espacios de conjuro.

        Siempre tienes estos conjuros preparados, y cada vez que subes de nivel como Bardo puedes sustituir uno de ellos por otro que cumpla los mismos requisitos.`
            },

            14: {
                "Habilidad incomparable": `Cuando realizas una prueba de característica o una tirada de ataque y fallas, puedes gastar un uso de Inspiración Bárdica.

        Tira el dado de Inspiración Bárdica y suma el resultado al d20, pudiendo convertir el fallo en un éxito.

        Si aun así fallas, no gastas el uso de Inspiración Bárdica.`
            }
        },
        colegio_de_la_luna: {
            3: {
                "Inspiración de la Luna": `El poder primigenio y cambiante de la luna fluye a través de ti, otorgándote los siguientes beneficios.

        Eclipse inspirado. Cuando realizas una acción adicional para otorgar a una criatura un dado de Inspiración Bárdica, puedes obtener la condición de Invisible y teletransportarte hasta 30 p a un espacio desocupado que puedas ver como parte de esa misma acción adicional. Esta invisibilidad dura hasta el inicio de tu siguiente turno y termina antes si realizas una tirada de ataque, infliges daño o lanzas un conjuro.

        Vitalidad lunar. Una vez por turno, cuando restauras Puntos de Golpe a una criatura con un conjuro, puedes gastar un dado de Inspiración Bárdica y aumentar la cantidad de Puntos de Golpe restaurados en una cantidad igual al resultado del dado. La Velocidad de la criatura también aumenta en 10 p hasta el final de su siguiente turno.`,

                "Conocimiento primigenio": `Aprendes druídico y un truco de la lista de conjuros de Druida. Este truco cuenta como un conjuro de Bardo para ti, pero no cuenta contra el número de trucos que conoces. Cada vez que subes de nivel como Bardo, puedes sustituir este truco por otro truco de la lista de Druida.

        Además, elige una de las siguientes habilidades: Trato con animales, Perspicacia, Medicina, Naturaleza, Percepción o Supervivencia. Obtienes competencia en esa habilidad.`
            },

            6: {
                "Bendición de la luz lunar": `Siempre tienes preparado el conjuro Rayo de luna.

        Cuando lanzas Rayo de luna, puedes modificar el conjuro para que emitas un brillo tenue mientras esté activo. Mientras brillas, emites luz tenue en un radio de 5 p, y cada vez que una criatura falla su tirada de salvación contra los efectos de este Rayo de luna, otra criatura a tu elección que puedas ver a 60 p de ti recupera 2d4 Puntos de Golpe.

        Una vez utilizas esta capacidad para modificar Rayo de luna, no puedes volver a hacerlo hasta que completes un descanso prolongado.`
            },

            14: {
                "Esplendor del ocaso": `Te impregnas del poder de la luna, mejorando tu Inspiración de la Luna de las siguientes maneras.

        Sombra de la luna nueva. Cuando usas Eclipse inspirado, la criatura que recibe el dado de Inspiración Bárdica también puede obtener la condición de Invisible y usar inmediatamente su Reacción para teletransportarse hasta 30 p a un espacio desocupado que pueda ver. La criatura permanece Invisible hasta el inicio de su siguiente turno.

        Vigor de la luna llena. Cuando usas Vitalidad lunar, puedes tirar 1d6 y usar ese resultado en lugar de gastar un dado de Inspiración Bárdica.`
            }
        },
        colegio_del_valor: {
            3: {
                "Inspiración de Combate":`Puedes usar tu ingenio para cambiar el curso de la batalla. Una criatura que tenga un dado de Inspiración de Bardo tuyo puede usarlo para uno de los siguientes efectos:

        Defensa. Cuando la criatura es impactada por una tirada de ataque, puede usar su Reacción para tirar el dado de Inspiración de Bardo y añadir el número obtenido a su CA contra ese ataque, pudiendo hacer que falle.

        Ofensiva. Justo después de que la criatura impacte a un objetivo con una tirada de ataque, puede tirar el dado de Inspiración de Bardo y añadir el número obtenido al daño del ataque contra ese objetivo.`,

                "Entrenamiento Marcial":`Obtienes competencia con armas marciales y entrenamiento con armaduras intermedias y escudos.

        Además, puedes usar un arma simple o marcial como Enfoque de lanzamiento de conjuros para lanzar hechizos de tu lista de bardo.`
            },

            6: {
                "Ataque Extra":`Puedes atacar dos veces en lugar de una cada vez que realizas la acción de Ataque en tu turno.

        Además, puedes lanzar uno de tus trucos que tenga un tiempo de lanzamiento de una acción en lugar de uno de esos ataques.`
            },

            14: {
                "Magia de Batalla":`Después de lanzar un hechizo que tenga un tiempo de lanzamiento de una acción, puedes realizar un ataque con un arma como acción adicional.`
            }
        },
        dominio_del_conocimiento: {
            3: {
                "Bendiciones del Conocimiento":`Obtienes competencia con un tipo de Herramientas Artesanales de tu elección y en dos de las siguientes habilidades a tu elección: Arcano, Historia, Naturaleza o Religión. Tienes Pericia en esas dos habilidades.`,
                
                "Hechizos del Dominio del Conocimiento":`Cuando alcanzas un nivel de Clérigo especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados.

        Nivel de clérigo    Hechizos preparados
        3    Orden, Comprender idiomas*, Detectar magia*, Detectar pensamientos*, Identificar*, Punzada mental*
        5    Disipar magia, No detección, Lenguas*
        7    Ojo arcano*, Destierro, Confusión
        9    Saber legendario*, Escudriñar*, Estática sináptica

        *Hechizo de la escuela de Adivinación`,
                
                "Magia Mental":`Como acción mágica, puedes gastar un uso de tu Canalizar Divinidad para manifestar tu conocimiento mágico. Elige un hechizo de la escuela de Adivinación de la tabla de Hechizos del Dominio del Conocimiento que tengas preparado. Como parte de esa acción, lanzas ese hechizo sin gastar un espacio de hechizo ni necesitar componentes materiales.`
            },

            6: {
                "Mente Desatada":`Obtienes telepatía con un alcance de 60 p. Cuando usas esta telepatía, puedes contactar simultáneamente con un número de criaturas igual a tu modificador de Sabiduría (mínimo de una).

        Además, obtienes competencia en tiradas de salvación de Inteligencia. Si ya tienes esta competencia, en su lugar obtienes competencia en tiradas de salvación de otra característica en la que no la tengas.`
            },

            17: {
                "Presciencia Divina":`Como acción adicional, expandes mágicamente tu mente hacia el futuro. Durante 1 hora, tienes Ventaja en las pruebas de d20.

        Una vez que uses esta característica, no podrás volver a usarla hasta que termines un descanso prolongado. También puedes recuperar su uso gastando un espacio de hechizo de nivel 6 o superior (no requiere acción).`
            }
        },
        dominio_de_la_vida: {
            3: {
                "Discípulo de la Vida":`Cuando un hechizo que lanzas usando un espacio de hechizo restaura puntos de vida a una criatura, esa criatura recupera puntos de vida adicionales en el turno en que lanzas el hechizo. Los puntos de vida adicionales son iguales a 2 + el nivel del espacio de hechizo.`,
                
                "Hechizos del Dominio de la Vida":`Tu conexión con este dominio divino garantiza que siempre tengas ciertos hechizos preparados. Cuando alcanzas un nivel de Clérigo especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados.

        Nivel de clérigo    Hechizos preparados
        3    Auxilio, Bendecir, Curar heridas, Restauración menor
        5    Palabra curativa masiva, Reanimar
        7    Aura de vida, Guardián de la muerte
        9    Restauración mayor, Curar heridas en masa`,
                
                "Preservar Vida":`Como acción mágica, presentas tu símbolo sagrado y gastas un uso de tu Canalizar Divinidad para evocar energía curativa que puede restaurar una cantidad de puntos de vida igual a cinco veces tu nivel de Clérigo.

        Elige criaturas heridas dentro de 30 p de ti (puedes incluirte a ti mismo) y reparte esos puntos de vida entre ellas. Esta característica no puede restaurar a una criatura por encima de la mitad de sus puntos de vida máximos.`
            },

            6: {
                "Sanador Bendecido":`Los hechizos de curación que lanzas sobre otros también te curan a ti. Inmediatamente después de lanzar un hechizo usando un espacio de hechizo que restaure puntos de vida a una o más criaturas distintas de ti, recuperas puntos de vida iguales a 2 + el nivel del espacio de hechizo.`
            },

            17: {
                "Curación Suprema":`Cuando normalmente tirarías uno o más dados para restaurar puntos de vida a una criatura con un hechizo o Canalizar Divinidad, no tires esos dados para la curación; en su lugar, usa el valor máximo posible de cada dado.

        Por ejemplo, en lugar de restaurar 2d6 puntos de vida a una criatura con un hechizo, restauras 12.`
            }
        },

        dominio_de_la_luz: {
            3: {
                "Hechizos del Dominio de la Luz":`Tu conexión con este dominio divino asegura que siempre tengas ciertos hechizos preparados. Cuando alcanzas un nivel de Clérigo especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados.
        Nivel de clérigo	Hechizos preparados
        3	Manos ardientes, Fuego feérico, Rayo abrasador, Ver invisibilidad
        5	Luz del día, Bola de fuego
        7	Ojo arcano, Muro de fuego
        9	Golpe de llama, Adivinación`,
                
                "Resplandor del Alba":`Como acción mágica, presentas tu símbolo sagrado y gastas un uso de tu Canalizar Divinidad para emitir un destello de luz en una emanación de 30 p desde ti. Cualquier Oscuridad mágica —como la creada por el hechizo Oscuridad— en esa área se disipa. Además, cada criatura a tu elección en esa área debe hacer una tirada de salvación de Constitución, recibiendo daño radiante igual a 2d10 más tu nivel de Clérigo si falla, o la mitad del daño si tiene éxito.`,
                
                "Destello Protector":`Cuando una criatura que puedas ver a 30 p de ti realiza una tirada de ataque, puedes usar tu Reacción para imponer Desventaja en esa tirada, haciendo que una luz intensa interfiera antes de que impacte o falle.
        Puedes usar esta característica un número de veces igual a tu modificador de Sabiduría (mínimo de una vez). Recuperas todos los usos al finalizar un descanso prolongado.`
            },

            6: {
                "Destello Protector Mejorado":`Recuperas todos los usos de tu Destello Protector cuando terminas un descanso corto o prolongado.
        Además, cada vez que usas Destello Protector, puedes otorgar al objetivo del ataque desencadenante una cantidad de puntos de golpe temporales igual a 2d6 más tu modificador de Sabiduría.`
            },

            17: {
                "Corona de Luz":`Como acción mágica, haces que emanes un aura de luz solar que dura 1 minuto o hasta que la canceles (sin acción requerida). Emites luz brillante en un radio de 60 p y luz tenue durante 30 p adicionales.
        Tus enemigos en la luz brillante tienen Desventaja en las tiradas de salvación contra tu Resplandor del Alba y cualquier hechizo que inflija daño de fuego o radiante.
        Puedes usar esta característica un número de veces igual a tu modificador de Sabiduría (mínimo de una vez), y recuperas todos los usos al finalizar un descanso prolongado.`
            }
        },

        dominio_del_engaño: {
            3: {
                "Bendición del Embaucador":`Como acción mágica, puedes elegirte a ti mismo o a una criatura voluntaria a 30 p de ti para que tenga Ventaja en las pruebas de Destreza (Sigilo). Esta bendición dura hasta que termines un descanso prolongado o hasta que vuelvas a usar esta característica.`,
                
                "Hechizos del Dominio del Engaño":`Tu conexión con este dominio divino asegura que siempre tengas ciertos hechizos preparados. Cuando alcanzas un nivel de Clérigo especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados.
        Nivel de clérigo	Hechizos preparados
        3	Encantar persona, Disfrazarse, Invisibilidad, Pasar sin rastro
        5	Patrón hipnótico, No detección
        7	Confusión, Puerta dimensional
        9	Dominar persona, Modificar memoria`,
                
                "Invocar Duplicidad":`Como acción adicional, puedes gastar un uso de tu Canalizar Divinidad para crear una ilusión visual perfecta de ti mismo en un espacio desocupado que puedas ver a 30 p de ti. La ilusión es intangible y no ocupa su espacio. Dura 1 minuto, pero termina antes si la cancelas (sin acción requerida) o si tienes la condición de Incapacitado. La ilusión está animada y imita tus expresiones y gestos. Mientras persista, obtienes los siguientes beneficios.

        Lanzar hechizos. Puedes lanzar hechizos como si estuvieras en el espacio de la ilusión, pero debes usar tus propios sentidos.

        Distracción. Cuando tanto tú como tu ilusión estáis a 5 p de una criatura que pueda ver la ilusión, tienes Ventaja en las tiradas de ataque contra esa criatura debido a lo distractora que resulta la ilusión.

        Mover. Como acción adicional, puedes mover la ilusión hasta 30 p a un espacio desocupado que puedas ver dentro de 120 p de ti.`
            },

            6: {
                "Transposición del Embaucador":`Siempre que uses una acción adicional para crear o mover la ilusión de tu Invocar Duplicidad, puedes teletransportarte intercambiando tu posición con la de la ilusión.`
            },

            17: {
                "Duplicidad Mejorada":`La ilusión de tu Invocar Duplicidad se vuelve más poderosa de las siguientes formas.

        Distracción compartida. Cuando tú y tus aliados realizáis tiradas de ataque contra una criatura a 5 p de la ilusión, esas tiradas tienen Ventaja.

        Ilusión sanadora. Cuando la ilusión termina, tú o una criatura a tu elección a 5 p de ella recupera una cantidad de puntos de golpe igual a tu nivel de Clérigo.`
            }
        },
        dominio_de_la_guerra: {
            3: {
                "Golpe Guiado":`Cuando tú o una criatura a 30 p de ti falla una tirada de ataque, puedes gastar un uso de tu Canalizar Divinidad para darle a esa tirada un bonificador de +10, pudiendo convertir el fallo en impacto. Cuando usas esta característica para beneficiar la tirada de ataque de otra criatura, debes usar tu Reacción para hacerlo.`,
                
                "Hechizos del Dominio de la Guerra":`Tu conexión con este dominio divino asegura que siempre tengas ciertos hechizos preparados. Cuando alcanzas un nivel de Clérigo especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados.
        Nivel de clérigo	Hechizos preparados
        3	Rayo guiador, Arma mágica, Escudo de fe, Arma espiritual
        5	Manto del cruzado, Guardianes espirituales
        7	Escudo de fuego, Libertad de movimiento
        9	Inmovilizar monstruo, Golpe de viento acerado`,
                
                "Sacerdote de Guerra":`Como acción adicional, puedes realizar un ataque con un arma o un ataque desarmado. Puedes usar esta acción adicional un número de veces igual a tu modificador de Sabiduría (mínimo de una vez). Recuperas todos los usos al finalizar un descanso corto o prolongado.`
            },

            6: {
                "Bendición del Dios de la Guerra":`Puedes gastar un uso de tu Canalizar Divinidad para lanzar Escudo de fe o Arma espiritual sin gastar un espacio de hechizo. Cuando lanzas cualquiera de estos hechizos de esta manera, no requieren Concentración. En su lugar, el hechizo dura 1 minuto, pero termina antes si vuelves a lanzar ese hechizo, tienes la condición de Incapacitado o mueres.`
            },

            17: {
                "Avatar de la Batalla":`Obtienes Resistencia al daño contundente, perforante y cortante.`
            }
        },
        círculo_de_la_tierra: {
            3: {
                "Hechizos del Círculo de la Tierra":`Cada vez que terminas un descanso prolongado, eliges un tipo de terreno: árido, polar, templado o tropical. Consulta la tabla correspondiente al tipo elegido; tienes preparados los hechizos listados para tu nivel de Druida y niveles inferiores.

        Terreno Árido
        Nivel de druida	Hechizos del círculo
        3	Difuminar, Manos ardientes, Rayo de fuego
        5	Bola de fuego
        7	Marchitar
        9	Muro de piedra

        Terreno Polar
        Nivel de druida	Hechizos del círculo
        3	Nube de niebla, Inmovilizar persona, Rayo de escarcha
        5	Tormenta de aguanieve
        7	Tormenta de hielo
        9	Cono de frío

        Terreno Templado
        Nivel de druida	Hechizos del círculo
        3	Paso brumoso, Toque eléctrico, Dormir
        5	Rayo
        7	Libertad de movimiento
        9	Paso arbóreo

        Terreno Tropical
        Nivel de druida	Hechizos del círculo
        3	Salpicadura ácida, Rayo de enfermedad, Telaraña
        5	Nube apestosa
        7	Polimorfar
        9	Plaga de insectos`,
                "Ayuda de la Tierra":`Como acción mágica, puedes gastar un uso de tu Forma Salvaje y elegir un punto a menos de 60 p de ti. Flores que otorgan vitalidad y espinas que drenan vida aparecen momentáneamente en una esfera de radio 10 p centrada en ese punto. Cada criatura de tu elección en la esfera debe hacer una tirada de salvación de Constitución contra tu CD de hechizo, recibiendo 2d6 de daño necrótico si falla, o la mitad si tiene éxito. Una criatura de tu elección en esa zona recupera 2d6 puntos de vida.

        El daño y la curación aumentan en 1d6 cuando alcanzas nivel de druida 10 (3d6) y 14 (4d6).`
            },
            6: {
                "Recuperación Natural":`Puedes lanzar uno de los hechizos de nivel 1 o superior que tengas preparado de tu rasgo de Hechizos del Círculo sin gastar un espacio de hechizo, y debes terminar un descanso prolongado antes de poder hacerlo de nuevo.

        Además, cuando terminas un descanso corto, puedes elegir espacios de hechizo gastados para recuperar. Los espacios pueden tener un nivel combinado igual o menor a la mitad de tu nivel de druida (redondeando hacia arriba), y ninguno puede ser de nivel 6 o superior. Por ejemplo, si eres druida de nivel 6, puedes recuperar hasta tres niveles en espacios de hechizo. Puedes recuperar un espacio de nivel 3, uno de nivel 2 y uno de nivel 1, o tres espacios de nivel 1. Una vez recuperas espacios con este rasgo, no puedes hacerlo de nuevo hasta terminar un descanso prolongado.`
            },
            10: {
                "Protección de la Naturaleza":`Eres inmune a la condición de envenenado, y tienes resistencia a un tipo de daño asociado con tu elección actual de terreno en Hechizos del Círculo, como se muestra en la tabla.

        Tipo de terreno	Resistencia
        Árido	Fuego
        Polar	Frío
        Templado	Rayo
        Tropical	Veneno`
            },
            14: {
                "Santuario de la Naturaleza":`Como acción mágica, puedes gastar un uso de tu Forma Salvaje y hacer que árboles y enredaderas espectrales aparezcan en un cubo de 15 p en el suelo a menos de 120 p de ti. Permanecen durante 1 minuto o hasta que tengas la condición incapacitado o mueras. Tú y tus aliados tenéis cobertura media mientras estéis en esa zona, y tus aliados obtienen la resistencia actual de tu Protección de la Naturaleza mientras permanezcan allí.

        Como acción adicional, puedes mover el cubo hasta 60 p a un punto del suelo a menos de 120 p de ti.`
            }
        },
        círculo_de_la_luna: {
            3: {
                "Formas del Círculo":`Puedes canalizar magia lunar cuando adoptas una forma de Forma Salvaje, obteniendo los siguientes beneficios.

        Nivel de Desafío. El nivel de desafío máximo de la forma es igual a tu nivel de druida dividido entre 3 (redondeando hacia abajo).

        Clase de Armadura. Hasta que abandones la forma, tu CA es igual a 13 + tu modificador de Sabiduría si ese total es mayor que la CA de la bestia.

        Puntos de Golpe Temporales. Obtienes una cantidad de puntos de golpe temporales igual a tres veces tu nivel de druida.`,
                "Hechizos del Círculo de la Luna":`Cuando alcanzas un nivel de druida especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados.

        Además, puedes lanzar los hechizos de este rasgo mientras estás en Forma Salvaje.

        Nivel de druida	Hechizos preparados
        3	Curar heridas, Rayo lunar, Chispa estelar
        5	Conjurar animales
        7	Fuente de luz lunar
        9	Curación masiva`
            },
            6: {
                "Formas del Círculo Mejoradas":`Mientras estás en Forma Salvaje, obtienes los siguientes beneficios.

        Resplandor Lunar. Cada uno de tus ataques en Forma Salvaje puede infligir su tipo de daño normal o daño radiante. Tomas esta decisión cada vez que impactas con esos ataques.

        Resistencia Mejorada. Puedes añadir tu modificador de Sabiduría a tus tiradas de salvación de Constitución.`
            },
            10: {
                "Paso de Luz Lunar":`Te transportas mágicamente, reapareciendo en medio de un estallido de luz lunar. Como acción adicional, te teletransportas hasta 30 p a un espacio desocupado que puedas ver, y tienes ventaja en la siguiente tirada de ataque que hagas antes del final de este turno.

        Puedes usar este rasgo un número de veces igual a tu modificador de Sabiduría (mínimo de una vez), y recuperas todos los usos gastados cuando terminas un descanso prolongado. También puedes recuperar usos gastando un espacio de hechizo de nivel 2 o superior por cada uso que quieras recuperar (no requiere acción).`
            },
            14: {
                "Forma Lunar":`El poder de la luna te impregna, otorgándote los siguientes beneficios.

        Resplandor Lunar Mejorado. Una vez por turno, puedes infligir 2d10 de daño radiante adicional a un objetivo al que impactes con un ataque en Forma Salvaje.

        Luz Lunar Compartida. Siempre que uses Paso de Luz Lunar, también puedes teletransportar a una criatura voluntaria. Esa criatura debe estar a menos de 10 p de ti, y la teletransportas a un espacio desocupado que puedas ver a menos de 10 p de tu destino.`
            }
        },

        círculo_del_mar: {
            3: {
                "Hechizos del Círculo del Mar":`Cuando alcanzas un nivel de Druida especificado en la tabla de Hechizos del Círculo del Mar, a partir de entonces siempre tendrás preparados los hechizos enumerados.
        Nivel de druida	Hechizos preparados
        3	Nube de niebla, Ráfaga de viento, Rayo de escarcha, Onda atronadora
        5	Rayo, Respirar bajo el agua
        7	Controlar agua, Tormenta de hielo
        9	Conjurar elemental, Inmovilizar monstruo`,

                "Ira del Mar":`Como acción adicional, puedes gastar un uso de tu Forma Salvaje para manifestar una emanación de 5 p que toma la forma de rocío oceánico que te rodea durante 10 minutos. Termina antes si la cancelas (no requiere acción), la vuelves a manifestar o si tienes la condición de incapacitado.

        Cuando manifiestas la emanación y como acción adicional en tus turnos posteriores, puedes elegir otra criatura que puedas ver dentro de la emanación. El objetivo debe superar una tirada de salvación de Constitución contra tu CD de salvación de hechizos o recibe daño de frío y, si la criatura es Grande o más pequeña, es empujada hasta 15 p lejos de ti. Para determinar este daño, tira un número de d6 igual a tu modificador de Sabiduría (mínimo de un dado).`
            },

            6: {
                "Afinidad Acuática":`El tamaño de la emanación creada por tu Ira del Mar aumenta a 10 p.

        Además, obtienes una velocidad de nado igual a tu velocidad.`
            },

            10: {
                "Nacido de la Tormenta":`Tu Ira del Mar otorga dos beneficios adicionales mientras está activa.

        Vuelo. Obtienes una velocidad de vuelo igual a tu velocidad.

        Resistencia. Obtienes resistencia al daño de frío, rayo y trueno.`
            },

            14: {
                "Don Oceánico":`En lugar de manifestar la emanación de Ira del Mar alrededor de ti, puedes manifestarla alrededor de una criatura voluntaria a 60 p de ti. Esa criatura obtiene todos los beneficios de la emanación y usa tu CD de salvación de hechizos y tu modificador de Sabiduría.

        Además, puedes manifestar la emanación tanto alrededor de esa criatura como de ti mismo si gastas dos usos de tu Forma Salvaje en lugar de uno al manifestarla.`
            }
        },
        círculo_de_las_estrellas: {
            3: {
                "Mapa Estelar":`Has creado un mapa estelar como parte de tus estudios celestiales. Es un objeto diminuto y puedes usarlo como enfoque de lanzamiento de hechizos para tus hechizos de Druida. Determinas su forma tirando en la tabla de Mapa Estelar o eligiendo una.

        Mientras sostienes el mapa, tienes preparados los hechizos Guía y Proyectil guiado, y puedes lanzar Proyectil guiado sin gastar un espacio de hechizo. Puedes lanzarlo de esta forma un número de veces igual a tu modificador de Sabiduría (mínimo de una vez), y recuperas todos los usos gastados cuando terminas un descanso prolongado.

        Si pierdes el mapa, puedes realizar una ceremonia de 1 hora para crear mágicamente un reemplazo. Esta ceremonia puede realizarse durante un descanso corto o prolongado, y destruye el mapa anterior.

        1 Pergamino con representaciones de constelaciones
        2 Tableta de piedra con pequeños agujeros perforados
        3 Piel de oso lechuza con símbolos estelares grabados
        4 Colección de mapas encuadernados en una cubierta de ébano
        5 Cristal grabado con patrones de estrellas
        6 Disco de cristal con constelaciones grabadas`,

                "Forma Estrellada":`Como acción adicional, puedes gastar un uso de tu Forma Salvaje para adoptar una forma estrellada en lugar de transformarte.

        Mientras estás en tu forma estrellada, mantienes tus estadísticas de juego, pero tu cuerpo se vuelve luminoso, tus articulaciones brillan como estrellas y líneas resplandecientes las conectan como en un mapa estelar. Esta forma emite luz brillante en un radio de 10 p y luz tenue durante 10 p adicionales. La forma dura 10 minutos. Termina antes si la cancelas (no requiere acción), si tienes la condición de incapacitado o si usas esta característica de nuevo.

        Cada vez que adoptas tu forma estrellada, eliges cuál de las siguientes constelaciones aparece en tu cuerpo; tu elección te otorga ciertos beneficios mientras dure la forma.

        Arquero. Aparece una constelación de un arquero sobre ti. Cuando activas esta forma y como acción adicional en tus turnos posteriores mientras dure, puedes hacer un ataque de hechizo a distancia, lanzando una flecha luminosa contra una criatura a 60 p de ti. Si impacta, inflige daño radiante igual a 1d8 más tu modificador de Sabiduría.

        Cáliz. Aparece una constelación de un cáliz que otorga vida sobre ti. Siempre que lanzas un hechizo usando un espacio de hechizo que restaure puntos de vida a una criatura, tú u otra criatura a 30 p de ti puede recuperar puntos de vida iguales a 1d8 más tu modificador de Sabiduría.

        Dragón. Aparece una constelación de un sabio dragón sobre ti. Cuando haces una prueba de Inteligencia o Sabiduría, o una tirada de salvación de Constitución para mantener la concentración, puedes tratar una tirada de 9 o menos en el d20 como si fuera un 10.`
            },

            6: {
                "Presagio Cósmico":`Siempre que terminas un descanso prolongado, puedes consultar tu Mapa Estelar para recibir presagios y tirar un dado. Hasta que termines tu siguiente descanso prolongado, obtienes acceso a una Reacción especial dependiendo de si sacas un número par o impar:

        Bien (Par). Cuando una criatura que puedes ver a 30 p de ti va a realizar una prueba de d20, puedes usar tu Reacción para tirar 1d6 y sumar el resultado al total.

        Mal (Impar). Cuando una criatura que puedes ver a 30 p de ti va a realizar una prueba de d20, puedes usar tu Reacción para tirar 1d6 y restar el resultado al total.

        Puedes usar esta Reacción un número de veces igual a tu modificador de Sabiduría (mínimo de una vez), y recuperas todos los usos gastados cuando terminas un descanso prolongado.`
            },

            10: {
                "Constelaciones Centelleantes":`Las constelaciones de tu Forma Estrellada mejoran. El 1d8 del Arquero y del Cáliz pasa a ser 2d8, y mientras el Dragón esté activo, obtienes una velocidad de vuelo de 20 p y puedes mantenerte en el aire.

        Además, al comienzo de cada uno de tus turnos mientras estás en tu Forma Estrellada, puedes cambiar qué constelación brilla en tu cuerpo.`
            },

            14: {
                "Lleno de Estrellas":`Mientras estás en tu Forma Estrellada, te vuelves parcialmente incorpóreo, obteniendo resistencia al daño contundente, perforante y cortante.`
            }
        },
        banneret: {
            3: {
                "Emisario Caballeresco": `
        Conoces cómo comportarte con gracia como un noble embajador. Obtienes los siguientes beneficios.

        Comprensión. Puedes lanzar el hechizo Comprender idiomas, pero solo como Ritual. Carisma es tu característica de lanzamiento de conjuros para este hechizo.

        Políglota. Aprendes un idioma de las tablas de idiomas del Manual del Jugador o del capítulo 2 de este libro. Cuando terminas un Descanso Largo, puedes reemplazar un idioma aprendido con este beneficio por otro idioma que hayas oído, visto en lengua de signos o leído en las últimas 24 horas.

        Bien Hablado. Obtienes competencia en una de las siguientes habilidades a tu elección: Perspicacia, Intimidación, Persuasión o Interpretación.
                `,

                "Recuperación en Grupo": `
        Cuando usas tu Segundo Aliento para recuperar Puntos de Vida, puedes elegir un número de aliados dentro de una Emanación de 30 p que se origina en ti, hasta un número de aliados igual a tu modificador de Carisma (mínimo de uno).

        Cada uno de esos aliados recupera una cantidad de Puntos de Vida igual a 1d4 más tu nivel de Guerrero.

        Una vez que usas esta capacidad, no puedes volver a usarla hasta que termines un Descanso Corto o Largo.
                `
            },

            7: {
                "Tácticas de Equipo": `
        Cuando usas Recuperación en Grupo, cada aliado elegido tiene Ventaja en las pruebas de d20 hasta el inicio de tu siguiente turno.
                `
            },

            10: {
                "Arrebato de Inspiración": `
        Cuando usas tu Surto de Acción, puedes elegir aliados dentro de una Emanación de 30 p que se origina en ti, hasta un número de aliados igual a tu modificador de Carisma (mínimo de uno).

        Cada uno de esos aliados puede usar inmediatamente su Reacción para elegir una de las siguientes opciones:

        Ataque. El aliado realiza un ataque con un arma o un Golpe Desarmado.

        Movimiento. El aliado se mueve hasta la mitad de su Velocidad sin provocar Ataques de Oportunidad.
                `
            },

            15: {
                "Resiliencia Compartida": `
        Cuando un aliado que puedes ver a 60 p de ti falla una tirada de salvación, puedes usar tu Reacción para gastar un uso de tu característica Indomable.

        El aliado repite la tirada de salvación con una bonificación igual a tu nivel de Guerrero, y debe usar el nuevo resultado.
                `
            },

            18: {
                "Comandante Inspirador": `
        Obtienes los siguientes beneficios.

        Reagrupación Potenciada. El área de efecto tanto de Recuperación en Grupo como de Arrebato de Inspiración pasa a ser una Emanación de 60 p.

        Valentía Inquebrantable. Eres inmune a las condiciones de Hechizado y Asustado.
                `
            }
        },
        campéon: {
            3: {
                "Crítico Mejorado": `
        Tus tiradas de ataque con armas y Golpes Desarmados pueden obtener un Golpe Crítico con un resultado de 19 o 20 en el d20.
                `,

                "Atleta Destacado": `
        Gracias a tu atletismo, tienes Ventaja en las tiradas de Iniciativa y en las pruebas de Fuerza (Atletismo).

        Además, inmediatamente después de obtener un Golpe Crítico, puedes moverte hasta la mitad de tu Velocidad sin provocar Ataques de Oportunidad.
                `
            },

            7: {
                "Estilo de Combate Adicional": `
        Obtienes otro dote de Estilo de Combate a tu elección.
                `
            },

            10: {
                "Guerrero Heroico": `
        La emoción del combate te impulsa hacia la victoria. Durante el combate, puedes darte Inspiración Heroica siempre que comiences tu turno sin tenerla.
                `
            },

            15: {
                "Crítico Superior": `
        Tus tiradas de ataque con armas y Golpes Desarmados ahora pueden obtener un Golpe Crítico con un resultado de 18-20 en el d20.
                `
            },

            18: {
                "Superviviente": `
        Alcanzas la cúspide de la resistencia en batalla, obteniendo los siguientes beneficios.

        Desafiar a la Muerte. Tienes Ventaja en las tiradas de salvación contra la muerte. Además, cuando sacas 18-20 en una tirada de salvación contra la muerte, cuentas como si hubieras sacado un 20.

        Arenga Heroica. Al inicio de cada uno de tus turnos, recuperas una cantidad de Puntos de Vida igual a 5 más tu modificador de Constitución si estás Ensangrentado y tienes al menos 1 Punto de Vida.
                `
            }
        },
        caballero_arcano: {
            3: {
                "Lanzamiento de Conjuros": `
        Has aprendido a lanzar hechizos. Consulta el capítulo 7 para las reglas de lanzamiento de conjuros. La información siguiente detalla cómo usas esas reglas como Caballero del Eldritch.

        Trucos. Conoces dos trucos de tu elección de la lista de conjuros de Mago. Se recomiendan Rayo de Escarcha y Toque Electrizante. Cada vez que ganas un nivel de Guerrero, puedes reemplazar uno de estos trucos por otro de la lista de Mago.

        Cuando alcanzas nivel de Guerrero 10, aprendes otro truco de Mago a tu elección.

        Espacios de Hechizo. La tabla de Lanzamiento de Conjuros del Caballero del Eldritch muestra cuántos espacios de hechizo tienes para lanzar conjuros de nivel 1 o superior. Recuperas todos los espacios gastados cuando terminas un Descanso Largo.

        Hechizos Preparados de Nivel 1+. Preparas una lista de hechizos de nivel 1 o superior disponibles para lanzar con esta característica. Para empezar, elige tres hechizos de nivel 1 de la lista de Mago. Se recomiendan Manos Ardientes, Salto y Escudo.

        El número de hechizos en tu lista aumenta a medida que subes niveles de Guerrero, como se muestra en la columna de Hechizos Preparados de la tabla del Caballero del Eldritch. Cada vez que ese número aumenta, eliges hechizos adicionales de la lista de Mago hasta igualar el número de la tabla. Los hechizos deben ser de un nivel para el que tengas espacios disponibles. Por ejemplo, si eres Guerrero nivel 7, tu lista puede incluir cinco hechizos de Mago de niveles 1 y 2 en cualquier combinación.

        Cambio de Hechizos Preparados. Cada vez que subes un nivel de Guerrero, puedes reemplazar un hechizo de tu lista por otro hechizo de Mago para el que tengas espacios.

        Característica de Lanzamiento de Conjuros. Inteligencia es tu característica de lanzamiento de conjuros para tus hechizos de Mago.

        Foco de Conjuros. Puedes usar un Foco Arcano como foco de lanzamiento para tus hechizos de Mago.
                `,

                "Vínculo de Guerra": `
        Aprendes un ritual que crea un vínculo mágico entre tú y un arma. Realizas el ritual durante 1 hora, que puede hacerse durante un Descanso Corto. El arma debe permanecer a tu alcance durante todo el ritual.

        Al finalizar, la tocas y forjas el vínculo. El vínculo falla si otro Guerrero está vinculado a esa arma o si el arma es un objeto mágico al que otra persona esté sintonizada.

        Una vez vinculada, no puedes ser desarmado de ese arma a menos que tengas la condición de Incapacitado. Si está en el mismo plano de existencia, puedes invocar esa arma como Acción Adicional, haciendo que se teletransporte instantáneamente a tu mano.

        Puedes tener hasta dos armas vinculadas, pero solo puedes invocar una a la vez como Acción Adicional. Si intentas vincular una tercera arma, debes romper el vínculo con una de las otras dos.
                `
            },

            7: {
                "Magia de Guerra": `
        Cuando realizas la acción de Ataque en tu turno, puedes reemplazar uno de los ataques por el lanzamiento de uno de tus trucos de Mago que tenga tiempo de lanzamiento de una acción.
                `
            },

            10: {
                "Golpe Eldritch": `
        Aprendes a hacer que tus ataques debiliten la capacidad de una criatura para resistir tus hechizos. Cuando impactas a una criatura con un ataque con arma, esa criatura tiene Desventaja en la siguiente tirada de salvación que haga contra un hechizo tuyo antes del final de tu siguiente turno.
                `
            },

            15: {
                "Carga Arcana": `
        Cuando usas tu Surto de Acción, puedes teletransportarte hasta 30 p a un espacio desocupado que puedas ver. Puedes hacerlo antes o después de la acción adicional.
                `
            },

            18: {
                "Magia de Guerra Mejorada": `
        Cuando realizas la acción de Ataque en tu turno, puedes reemplazar dos de los ataques por el lanzamiento de un hechizo de Mago de nivel 1 o nivel 2 que tenga tiempo de lanzamiento de una acción.
                `
            }
        },

        guerrero_psi: {
            3: {
                "Poder Psiónico": `Llevas dentro de ti una reserva de energía psiónica. Se representa mediante tus Dados de Energía Psiónica, que alimentan las capacidades de esta subclase. La tabla de Dados de Energía Psiónica del Psi Warrior muestra el tamaño del dado y la cantidad que tienes según tu nivel de Guerrero.

        Dados de Energía Psiónica del Psi Warrior
        Nivel de Guerrero | Tamaño del dado | Cantidad
        3 | d6 | 4
        5 | d8 | 6
        9 | d8 | 8
        11 | d10 | 8
        13 | d10 | 10
        17 | d12 | 12

        Todas las habilidades de esta subclase usan únicamente estos dados. Algunas de tus capacidades los consumen según se indique, y no puedes usarlas si ya no te quedan dados disponibles.

        Recuperas 1 dado gastado al terminar un descanso corto y todos al terminar un descanso largo.

        Campo protector. Cuando tú o otra criatura que puedas ver a 30 p de ti recibe daño, puedes usar tu reacción para gastar un dado psiónico, lanzarlo y reducir el daño recibido en el resultado + tu modificador de Inteligencia (mínimo 1).

        Golpe psiónico. Una vez por turno, inmediatamente después de impactar a un objetivo a 30 p o menos con un ataque con arma, puedes gastar un dado psiónico para infligir daño de fuerza igual al resultado + tu modificador de Inteligencia.

        Movimiento telequinético. Como acción mágica, eliges un objetivo que puedas ver a 30 p o menos: un objeto suelto (Grande o menor) o una criatura voluntaria. Lo mueves hasta 30 p a un espacio libre que puedas ver. Si es un objeto Pequeño, puedes colocarlo o tomarlo en tu mano.

        Tras usar esta acción, no puedes volver a hacerlo hasta un descanso corto o largo, a menos que gastes un dado psiónico (sin acción).`
            },

            7: {
                "Adeptos Telequinéticos": `Has perfeccionado nuevas formas de usar tus poderes mentales.

        Salto psiónico. Como acción adicional, obtienes una velocidad de vuelo igual al doble de tu velocidad hasta el final del turno actual. Después no puedes volver a usarlo hasta un descanso corto o largo, a menos que gastes un dado psiónico.

        Empuje telequinético. Cuando infliges daño con tu Golpe psiónico, puedes obligar al objetivo a hacer una tirada de salvación de Fuerza (CD 8 + tu modificador de Inteligencia + tu bonificador de competencia). Si falla, puedes darle la condición de derribado o moverlo hasta 10 p en horizontal.`
            },

            10: {
                "Mente Protegida": `Tienes resistencia al daño psíquico. Además, si empiezas tu turno con la condición de hechizado o asustado, puedes gastar un dado psiónico (sin acción) para finalizar esos efectos sobre ti.`
            },

            15: {
                "Baluarte de Fuerza": `Puedes proteger a otros con fuerza telequinética. Como acción adicional, eliges criaturas dentro de 30 p de ti, incluido tú mismo, hasta un número igual a tu modificador de Inteligencia (mínimo 1). Cada una obtiene media cobertura durante 1 minuto o hasta que quedes incapacitado.

        Tras usar esta habilidad, no puedes volver a usarla hasta un descanso largo, a menos que gastes un dado psiónico (sin acción).`
            },

            18: {
                "Maestro Telequinético": `Siempre tienes el hechizo de telequinesis preparado. Puedes lanzarlo sin componentes ni espacio de conjuro, usando Inteligencia como atributo de lanzamiento.

        Mientras mantienes la concentración, en cada uno de tus turnos (incluido el turno en que lo lanzas), puedes realizar un ataque con arma como acción adicional.

        Tras lanzarlo de esta forma, no puedes volver a hacerlo hasta un descanso largo, a menos que gastes un dado psiónico (sin acción).`
            }
        },
        maestro_de_la_batalla: {
            3: {
                "Superioridad en Combate": `Tu experiencia en el campo de batalla ha refinado tus técnicas de lucha. Aprendes maniobras alimentadas por dados especiales llamados Dados de Superioridad.

        Maniobras. Aprendes tres maniobras de tu elección de la sección de “Opciones de Maniobra”. Muchas maniobras mejoran un ataque de alguna forma. Solo puedes usar una maniobra por ataque.

        Aprendes dos maniobras adicionales cuando alcanzas niveles de Guerrero 7, 10 y 15. Cada vez que aprendes nuevas maniobras, puedes reemplazar una que ya conoces por otra.

        Dados de Superioridad. Tienes cuatro Dados de Superioridad, que son d8. Un Dado de Superioridad se gasta cuando lo usas. Recuperas todos los dados gastados tras un descanso corto o largo.

        Ganas un dado adicional al alcanzar niveles de Guerrero 7 (cinco dados en total) y 15 (seis dados en total).

        Tiradas de salvación. Si una maniobra requiere una tirada de salvación, la CD es 8 + tu modificador de Fuerza o Destreza (a tu elección) + tu bonificador de competencia.`,

                "Estudiante de Guerra": `Obtienes competencia con un tipo de Herramientas Artesanales de tu elección y competencia en una habilidad de tu elección entre las disponibles para Guerrero en nivel 1.`
            },

            7: {
                "Conoce a tu Enemigo": `Como acción adicional, puedes analizar a una criatura que puedas ver a 30 p de ti; descubres si tiene inmunidades, resistencias o vulnerabilidades, y cuáles son.

        Una vez usado este rasgo, no puedes volver a usarlo hasta un descanso largo. También puedes recuperar un uso gastando un Dado de Superioridad (sin acción).`
            },

            10: {
                "Superioridad en Combate Mejorada": `Tu Dado de Superioridad pasa a ser un d10.`
            },

            15: {
                "Implacable": `Una vez por turno, cuando uses una maniobra, puedes tirar 1d8 y usar el resultado en lugar de gastar un Dado de Superioridad.`
            },

            18: {
                "Superioridad en Combate Definitiva": `Tu Dado de Superioridad pasa a ser un d12.`
            }
        },

        guerrero_de_la_misericordia: {
            3: {
                "Mano del Daño": `
        Una vez por turno, cuando golpeas a una criatura con un Golpe Desarmado y le infliges daño, puedes gastar 1 Punto de Foco para infligir daño Necrótico adicional igual a una tirada de tu dado de Artes Marciales más tu modificador de Sabiduría.
                `,

                "Mano de la Curación": `
        Como acción mágica, puedes gastar 1 Punto de Foco para tocar a una criatura y restaurar una cantidad de Puntos de Vida igual a una tirada de tu dado de Artes Marciales más tu modificador de Sabiduría.

        Cuando usas tu Ráfaga de Golpes, puedes reemplazar uno de los Golpes Desarmados con el uso de esta característica sin gastar Punto de Foco para la curación.
                `,

                "Instrumentos de la Misericordia": `
        Obtienes competencia en las habilidades de Perspicacia y Medicina, y competencia con el Kit de Herboristería.
                `
            },

            6: {
                "Toque del Médico": `
        Tus capacidades de Mano del Daño y Mano de la Curación mejoran de la siguiente forma:

        Mano del Daño. Cuando usas Mano del Daño sobre una criatura, también puedes hacer que esa criatura sufra la condición de Envenenado hasta el final de tu siguiente turno.

        Mano de la Curación. Cuando usas Mano de la Curación, también puedes terminar una de las siguientes condiciones en la criatura que sanas: Cegado, Ensordecido, Paralizado, Envenenado o Aturdido.
                `
            },

            11: {
                "Ráfaga de Curación y Daño": `
        Cuando usas Ráfaga de Golpes, puedes reemplazar cada uno de los Golpes Desarmados con el uso de Mano de la Curación sin gastar Puntos de Foco para la curación.

        Además, cuando haces un Golpe Desarmado con Ráfaga de Golpes y infliges daño, puedes usar Mano del Daño con ese golpe sin gastar Punto de Foco para Mano del Daño. Aun así, solo puedes usar Mano del Daño una vez por turno.

        Puedes usar estos beneficios un número total de veces igual a tu modificador de Sabiduría (mínimo de una vez). Recuperas todos los usos gastados cuando terminas un Descanso Largo.
                `
            },

            17: {
                "Mano de la Misericordia Definitiva": `
        Tu dominio de la energía vital abre la puerta a la misericordia definitiva. Como acción mágica, puedes tocar el cadáver de una criatura que haya muerto en las últimas 24 horas y gastar 5 Puntos de Foco. La criatura vuelve a la vida con una cantidad de Puntos de Vida igual a 4d10 más tu modificador de Sabiduría.

        Si la criatura murió con alguna de las siguientes condiciones, revive sin ellas: Cegado, Ensordecido, Paralizado, Envenenado y Aturdido.

        Una vez uses esta característica, no puedes volver a usarla hasta terminar un Descanso Largo.
                `
            }
        },
        guerrero_de_las_sombra: {
            3: {
                "Artes de las Sombras": `
        Has aprendido a canalizar el poder del Shadowfell, obteniendo los siguientes beneficios:

        Oscuridad. Puedes gastar 1 Punto de Foco para lanzar el hechizo Oscuridad sin componentes materiales. Puedes ver dentro del área del hechizo cuando lo lanzas con esta característica. Mientras el hechizo esté activo, puedes mover el área de Oscuridad a un espacio a 60 p de ti al inicio de cada uno de tus turnos.

        Visión en la Oscuridad. Obtienes Visión en la Oscuridad con un alcance de 60 p. Si ya tienes Visión en la Oscuridad, su alcance aumenta en 60 p.

        Figmentos Sombríos. Conoces el hechizo Ilusión Menor. La Sabiduría es tu característica de lanzamiento de conjuros para este hechizo.
                `
            },

            6: {
                "Paso de las Sombras": `
        Mientras estés completamente en Luz Tenue u Oscuridad, puedes usar una Acción adicional para teletransportarte hasta 60 p a un espacio desocupado que puedas ver y que también esté en Luz Tenue u Oscuridad. Después, tienes Ventaja en el siguiente ataque cuerpo a cuerpo que realices antes de que termine el turno actual.
                `
            },

            11: {
                "Paso de las Sombras Mejorado": `
        Puedes canalizar tu conexión con el Shadowfell para potenciar tu teletransporte. Cuando uses tu Paso de las Sombras, puedes gastar 1 Punto de Foco para eliminar el requisito de empezar y terminar en Luz Tenue u Oscuridad para ese uso de la característica.

        Como parte de esta Acción adicional, puedes realizar un Golpe Desarmado inmediatamente después de teletransportarte.
                `
            },

            17: {
                "Capa de Sombras": `
        Como acción mágica, mientras estés completamente en Luz Tenue u Oscuridad, puedes gastar 3 Puntos de Foco para envolverte en sombras durante 1 minuto, hasta que tengas la condición de Incapacitado, o hasta que termines tu turno en Luz Brillante.

        Mientras estés envuelto en estas sombras, obtienes los siguientes beneficios:

        Invisibilidad. Tienes la condición de Invisible.

        Parcialmente Incorpóreo. Puedes moverte a través de espacios ocupados como si fueran terreno difícil. Si terminas tu turno en uno de esos espacios, eres desplazado al último espacio desocupado en el que estuviste.

        Ráfaga de Sombras. Puedes usar tu Ráfaga de Golpes sin gastar Puntos de Foco.
                `
            }
        },
        guerrero_de_los_elemento: {
            3: {
                "Afinación Elemental": `Al inicio de tu turno, puedes gastar 1 Punto de Enfoque para imbuirte de energía elemental. La energía dura 10 minutos o hasta que tengas la condición de Incapacitado. Obtienes los siguientes beneficios mientras esta característica está activa.

        Alcance. Cuando realizas un Golpe sin Armas, tu alcance es 10 p mayor de lo normal, ya que la energía elemental se extiende desde ti.

        Golpes Elementales. Siempre que impactas con tu Golpe sin Armas, puedes hacer que inflija daño a tu elección de Ácido, Frío, Fuego, Relámpago o Trueno en lugar de su tipo de daño normal. Cuando infliges uno de estos tipos de daño, también puedes obligar al objetivo a realizar una tirada de salvación de Fuerza. Si falla, puedes mover al objetivo hasta 10 p hacia ti o alejándolo de ti, mientras la energía elemental lo rodea.`,

                "Sintonizar Elementos": `Conoces el hechizo Elementalismo. Sabiduría es tu característica de lanzamiento de conjuros para él.`
            },

            6: {
                "Explosión Elemental": `Como acción mágica, puedes gastar 2 Puntos de Enfoque para provocar una explosión de energía elemental en una Esfera de radio 20 p centrada en un punto a 120 p de ti. Elige un tipo de daño: Ácido, Frío, Fuego, Relámpago o Trueno.

        Cada criatura en la Esfera debe realizar una tirada de salvación de Destreza. Si falla, recibe daño del tipo elegido igual a tres tiradas de tu dado de Artes Marciales. Si la supera, recibe la mitad de daño.`
            },

            11: {
                "Paso de los Elementos": `Mientras tu Afinación Elemental esté activa, también tienes una Velocidad de Vuelo y una Velocidad de Nado iguales a tu Velocidad.`
            },

            17: {
                "Cumbre Elemental": `Mientras tu Afinación Elemental esté activa, obtienes además los siguientes beneficios.

        Resistencia al Daño. Obtienes resistencia a uno de los siguientes tipos de daño a tu elección: Ácido, Frío, Fuego, Relámpago o Trueno. Al inicio de cada uno de tus turnos, puedes cambiar esta elección.

        Paso Destructivo. Cuando usas tu Paso del Viento, tu Velocidad aumenta en 20 p hasta el final del turno. Durante ese tiempo, cualquier criatura de tu elección recibe daño igual a una tirada de tu dado de Artes Marciales cuando entras en una casilla a 5 p de ella. El tipo de daño es Ácido, Frío, Fuego, Relámpago o Trueno a tu elección. Una criatura solo puede recibir este daño una vez por turno.

        Golpes Potenciados. Una vez en cada uno de tus turnos, puedes infligir daño adicional a un objetivo igual a una tirada de tu dado de Artes Marciales cuando lo impactas con un Golpe sin Armas. El tipo de daño adicional es el mismo que el del ataque.`
            }
        },
        guerrero_de_la_mano_abierta: {
            3: {
                "Técnica de Mano Abierta": `Siempre que impactas a una criatura con un ataque otorgado por tu Ráfaga de Golpes, puedes imponer uno de los siguientes efectos en ese objetivo.

        Desajuste. El objetivo no puede realizar Ataques de Oportunidad hasta el inicio de su siguiente turno.

        Empuje. El objetivo debe superar una tirada de salvación de Fuerza o ser empujado hasta 15 p alejándose de ti.

        Derribo. El objetivo debe superar una tirada de salvación de Destreza o quedar con la condición de Derribado.`,

                "Curación Corporal": `Obtienes la capacidad de curarte a ti mismo. Como acción adicional, puedes tirar tu dado de Artes Marciales. Recuperas una cantidad de Puntos de Golpe igual al resultado más tu modificador de Sabiduría (mínimo de 1 Punto de Golpe recuperado).

        Puedes usar esta característica un número de veces igual a tu modificador de Sabiduría (mínimo de una vez), y recuperas todos los usos gastados cuando terminas un Descanso Largo.`
            },

            11: {
                "Paso Ágil": `Cuando realizas una acción adicional distinta a Paso del Viento, también puedes usar Paso del Viento inmediatamente después de esa acción adicional.`
            },

            17: {
                "Palma Vibrante": `Obtienes la capacidad de crear vibraciones letales en el cuerpo de una criatura. Cuando impactas a una criatura con un Golpe sin Armas, puedes gastar 4 Puntos de Enfoque para iniciar estas vibraciones imperceptibles, que duran un número de días igual a tu nivel de Monje. Las vibraciones son inofensivas a menos que uses una acción para terminarlas.

        Alternativamente, cuando realizas la acción de Ataque en tu turno, puedes renunciar a uno de los ataques para terminar las vibraciones. Para finalizarlas, tú y el objetivo debéis estar en el mismo plano de existencia. Cuando las terminas, el objetivo debe realizar una tirada de salvación de Constitución, recibiendo 10d12 de daño de Fuerza si falla, o la mitad si tiene éxito.

        Solo puedes tener una criatura afectada por esta característica a la vez. Puedes terminar las vibraciones de forma inofensiva (sin acción requerida).`
            }
        },
        juramento_de_devoción: {
            3: {
                "Hechizos del Juramento de Devoción": `La magia de tu juramento garantiza que siempre tengas ciertos conjuros listos; cuando alcanzas un nivel de Paladín especificado en la tabla de Hechizos del Juramento de Devoción, a partir de entonces siempre tendrás esos conjuros preparados.

        Nivel de Paladín	Hechizos
        3	Protección contra el mal y el bien, Escudo de fe
        5	Ayuda, Zona de verdad
        9	Atalaya de esperanza, Disipar magia
        13	Libertad de movimiento, Guardián de la fe
        17	Comuna, Golpe flamígero`,
                "Arma Sagrada": `Cuando realizas la acción de Atacar, puedes gastar un uso de tu Canalizar Divinidad para imbuir un arma cuerpo a cuerpo que estés sosteniendo con energía positiva. Durante 10 minutos o hasta que vuelvas a usar esta característica, añades tu modificador de Carisma a las tiradas de ataque que hagas con esa arma (bono mínimo de +1), y cada vez que impactas con ella, haces que inflija su tipo de daño normal o Daño Radiante.

        El arma también emite Luz brillante en un radio de 20 p y Luz tenue 20 p más allá de ese radio.

        Puedes finalizar este efecto antes de tiempo (sin acción). Este efecto también termina si no estás sosteniendo el arma.`
            },
            7: {
                "Aura de Devoción": `Tú y tus aliados tenéis Inmunidad a la condición de Hechizado mientras estéis dentro de tu Aura de Protección. Si un aliado Hechizado entra en el aura, esa condición no tiene efecto sobre él mientras permanezca allí.`
            },
            15: {
                "Golpe de Protección": `Tu Golpe Divino mágico ahora irradia energía protectora. Siempre que lanzas Golpe Divino, tú y tus aliados tenéis Media Cobertura mientras estéis dentro de tu Aura de Protección.

        El aura mantiene este beneficio hasta el inicio de tu siguiente turno.`
            },
            20: {
                "Nimbo Sagrado": `Como acción adicional, puedes imbuir tu Aura de Protección con poder sagrado, otorgando los beneficios siguientes durante 10 minutos o hasta que los finalices (sin acción). Una vez usas esta característica, no puedes volver a usarla hasta que termines un descanso prolongado. También puedes recuperar su uso gastando un espacio de conjuro de nivel 5 (sin acción).

        Bendición Sagrada. Tienes Ventaja en cualquier tirada de salvación que te obligue a realizar un Demonio o un No Muerto.

        Daño Radiante. Siempre que un enemigo comienza su turno dentro del aura, esa criatura recibe daño radiante igual a tu modificador de Carisma + tu Bonificador de Competencia.

        Luz del Sol. El aura está llena de Luz brillante que es luz solar.`
            }
        },
        juramento_de_gloria: {
            3: {
                "Golpe inspirador": `Inmediatamente después de lanzar Golpe Divino, puedes gastar un uso de tu Canalizar Divinidad y distribuir Puntos de Golpe temporales entre criaturas a tu elección a 30 p de ti, lo que puede incluirte a ti.

        El número total de Puntos de Golpe temporales es igual a 2d8 + tu nivel de Paladín, y puedes repartirlos entre las criaturas elegidas como desees.`,

                "Hechizos del juramento de gloria": `La magia de tu juramento asegura que siempre tengas ciertos conjuros preparados; cuando alcanzas un nivel de Paladín especificado en la tabla, a partir de entonces siempre tendrás preparados los conjuros indicados.

        Nivel de paladín	Conjuros
        3	Rayo guiado, Heroísmo
        5	Mejorar característica, Arma mágica
        9	Acelerar, Protección contra energía
        13	Compulsión, Libertad de movimiento
        17	Leyenda arcana, Presencia regia de Yolande`,

                "Atleta incomparable": `Como acción adicional, puedes gastar un uso de tu Canalizar Divinidad para mejorar tu capacidad atlética.

        Durante 1 hora, tienes ventaja en pruebas de Fuerza (Atletismo) y Destreza (Acrobacias), y la distancia de tus saltos de longitud y altura aumenta en 10 p (esta distancia adicional consume movimiento con normalidad).`
            },

            7: {
                "Aura de presteza": `Tu Velocidad aumenta en 10 p.

        Además, cuando un aliado entra en tu Aura de Protección por primera vez en un turno o comienza su turno allí, su Velocidad aumenta en 10 p hasta el final de su siguiente turno.`
            },

            15: {
                "Defensa gloriosa": `Puedes convertir la defensa en un contraataque repentino.

        Cuando tú u otra criatura que puedas ver a 10 p de ti es impactada por una tirada de ataque, puedes usar tu Reacción para otorgar un bono a la CA del objetivo contra ese ataque, pudiendo hacer que falle. El bono es igual a tu modificador de Carisma (mínimo +1).

        Si el ataque falla, puedes realizar un ataque con arma contra el atacante como parte de esta misma Reacción, siempre que esté dentro del alcance de tu arma.

        Puedes usar esta capacidad un número de veces igual a tu modificador de Carisma (mínimo una vez), y recuperas todos los usos tras un descanso prolongado.`
            },

            20: {
                "Leyenda viviente": `Puedes potenciarte con las leyendas —sean ciertas o exageradas— de tus hazañas.

        Como acción adicional, obtienes los siguientes beneficios durante 10 minutos. Una vez usas esta capacidad, no puedes volver a usarla hasta terminar un descanso prolongado. También puedes recuperar su uso gastando un espacio de conjuro de nivel 5 (no requiere acción).

        Carismático. Estás bendecido con una presencia sobrenatural y tienes ventaja en todas las pruebas de Carisma.

        Repetir salvación. Si fallas una tirada de salvación, puedes usar tu Reacción para repetirla. Debes usar el nuevo resultado.

        Golpe infalible. Una vez en cada uno de tus turnos, cuando realizas una tirada de ataque con arma y fallas, puedes hacer que ese ataque impacte en su lugar.`
            }
        },

        juramento_de_los_ancestros: {
            3: {
                "Ira de la naturaleza": `Como acción mágica, puedes gastar uno de tus usos de Canalizar Divinidad para invocar enredaderas espectrales alrededor de criaturas cercanas.

        Cada criatura a tu elección que puedas ver a 15 p de ti debe superar una tirada de salvación de Fuerza o quedar Restringida durante 1 minuto. Una criatura Restringida repite la tirada al final de cada uno de sus turnos, terminando el efecto con un éxito.`,

                "Hechizos del juramento de los ancestros": `La magia de tu juramento asegura que siempre tengas ciertos conjuros preparados; cuando alcanzas un nivel de Paladín especificado en la tabla, a partir de entonces siempre tendrás preparados los conjuros indicados.

        Nivel de paladín	Conjuros
        3	Golpe apresador, Hablar con animales
        5	Paso brumoso, Rayo de luna
        9	Crecimiento vegetal, Protección contra energía
        13	Tormenta de hielo, Piel de piedra
        17	Comunión con la naturaleza, Paso arbóreo`
            },

            7: {
                "Aura de protección arcana": `La magia antigua recae sobre ti con tanta fuerza que forma una protección sobrenatural que atenúa energías más allá del Plano Material.

        Tú y tus aliados tenéis Resistencia al daño necrótico, psíquico y radiante mientras estéis dentro de tu Aura de Protección.`
            },

            15: {
                "Centinela imperecedero": `Cuando eres reducido a 0 Puntos de Golpe y no mueres instantáneamente, puedes quedarte en 1 Punto de Golpe en su lugar, y recuperar una cantidad de Puntos de Golpe igual a tres veces tu nivel de Paladín.

        Una vez usas esta capacidad, no puedes volver a usarla hasta completar un descanso prolongado.

        Además, no puedes envejecer mágicamente y dejas de envejecer de forma visible.`
            },

            20: {
                "Campeón ancestral": `Como acción adicional, puedes imbuir tu Aura de Protección con poder primigenio, obteniendo los siguientes beneficios durante 1 minuto o hasta que los finalices (no requiere acción).

        Una vez usas esta capacidad, no puedes volver a usarla hasta completar un descanso prolongado. También puedes recuperar su uso gastando un espacio de conjuro de nivel 5 (no requiere acción).

        Debilitar desafío. Los enemigos dentro del aura tienen desventaja en tiradas de salvación contra tus conjuros y opciones de Canalizar Divinidad.

        Regeneración. Al inicio de cada uno de tus turnos, recuperas 10 Puntos de Golpe.

        Conjuros rápidos. Siempre que lances un conjuro con un tiempo de lanzamiento de una acción, puedes lanzarlo usando una acción adicional en su lugar.`
            }
        },

        juramento_de_genios_nobles: {
            3: {
                "Golpe Elemental":`Inmediatamente después de lanzar Golpe Divino, puedes gastar un uso de tu Canalizar Divinidad e invocar uno de los siguientes efectos.

        Aplastamiento del dao. La tierra se alza alrededor del objetivo de tu Golpe Divino. El objetivo queda Agarrado (CD de escape igual a tu CD de salvación de hechizos). Mientras está Agarrado, el objetivo también tiene la condición de Restringido.

        Huida del djinni. Te teletransportas a un espacio desocupado que puedas ver a 30 p de ti y adoptas una forma semiincorpórea que dura hasta el final de tu siguiente turno. Mientras estás en esta forma, tienes Resistencia al daño contundente, perforante y cortante, e Inmunidad a las condiciones de Agarrado, Derribado y Restringido.

        Furia del efreeti. El objetivo de tu Golpe Divino recibe 2d4 de daño de fuego adicional, y el fuego salta del objetivo a otra criatura que puedas ver a 30 p de ti. La segunda criatura también recibe 2d4 de daño de fuego.

        Oleada del marid. El objetivo de tu Golpe Divino y cada criatura a tu elección en una emanación de 10 p desde ti deben hacer una tirada de salvación de Fuerza contra tu CD de salvación de hechizos. Si fallan, son empujadas 15 p directamente lejos de ti y quedan Derribadas.`,

                "Hechizos de genio":`Cuando alcanzas un nivel de Paladín especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados.
        Nivel de paladín	Hechizos
        3	Orbe cromático, Elementalismo, Golpe atronador
        5	Imagen múltiple, Fuerza fantasmal
        9	Vuelo, Forma gaseosa
        13	Conjurar elementales menores, Invocar elemental
        17	Golpe desterrador, Contactar con otro plano`,

                "Esplendor del genio":`Cuando no llevas armadura, tu Clase de Armadura base es igual a 10 + tu modificador de Destreza + tu modificador de Carisma. Puedes usar escudo y seguir obteniendo este beneficio.

        También obtienes competencia en una de las siguientes habilidades a tu elección: Acrobacias, Intimidación, Interpretación o Persuasión.`
            },

            7: {
                "Aura de protección elemental":`Elige uno de los siguientes tipos de daño: ácido, frío, fuego, relámpago o trueno. Tú y tus aliados tenéis Resistencia a ese tipo de daño mientras estéis dentro de tu Aura de Protección.

        Al inicio de cada uno de tus turnos, puedes cambiar el tipo de daño afectado por esta característica a otro de la lista (no requiere acción).`
            },

            15: {
                "Reprensión elemental":`Cuando eres impactado por una tirada de ataque, puedes usar tu Reacción para reducir a la mitad el daño del ataque contra ti (redondeando hacia abajo) y obligar al atacante a hacer una tirada de salvación de Destreza contra tu CD de salvación de hechizos. Si falla, recibe 2d10 + tu modificador de Carisma de daño de uno de los siguientes tipos (a tu elección): ácido, frío, fuego, relámpago o trueno. Si tiene éxito, recibe la mitad del daño.

        Puedes usar esta característica un número de veces igual a tu modificador de Carisma (mínimo de una vez), y recuperas todos los usos al finalizar un descanso prolongado.`
            },

            20: {
                "Vástago noble":`Como acción adicional, obtienes los siguientes beneficios durante 10 minutos o hasta que los finalices (no requiere acción). Una vez usas esta característica, no puedes volver a usarla hasta terminar un descanso prolongado. También puedes recuperar su uso gastando un espacio de hechizo de nivel 5 (no requiere acción).

        Vuelo. Tienes una velocidad de vuelo de 60 p y puedes mantenerte flotando.

        Deseo menor. Cuando tú o un aliado dentro de tu Aura de Protección falla una tirada de d20, puedes usar tu Reacción para hacer que tenga éxito en su lugar.`
            }
        },
        juramento_de_venganza: {
            3: {
                "Hechizos del Juramento de Venganza":`La magia de tu juramento asegura que siempre tengas ciertos hechizos preparados; cuando alcanzas un nivel de Paladín especificado en la tabla de Hechizos del Juramento de Venganza, a partir de entonces siempre tendrás preparados los hechizos enumerados.
        Nivel de paladín	Hechizos
        3	Perdición, Marca del cazador
        5	Inmovilizar persona, Paso brumoso
        9	Aceleración, Protección contra la energía
        13	Destierro, Puerta dimensional
        17	Inmovilizar monstruo, Esclarecimiento`,
                "Voto de enemistad":`Cuando realizas la acción de Ataque, puedes gastar un uso de tu Canalizar Divinidad para pronunciar un voto de enemistad contra una criatura que puedas ver a 30 p de ti. Tienes Ventaja en las tiradas de ataque contra la criatura durante 1 minuto o hasta que vuelvas a usar esta característica.

        Si la criatura cae a 0 puntos de golpe antes de que el voto termine, puedes transferir el voto a una criatura diferente a 30 p de ti (no requiere acción).`
            },
            7: {
                "Vengador implacable":`Tu enfoque sobrenatural te ayuda a cerrar la retirada de un enemigo. Cuando impactas a una criatura con un Ataque de Oportunidad, puedes reducir la Velocidad de la criatura a 0 hasta el final del turno actual. Luego puedes moverte hasta la mitad de tu Velocidad como parte de la misma Reacción. Este movimiento no provoca Ataques de Oportunidad.`
            },
            15: {
                "Alma de venganza":`Inmediatamente después de que una criatura bajo el efecto de tu Voto de Enemistad impacte o falle con una tirada de ataque, puedes usar tu Reacción para realizar un ataque cuerpo a cuerpo contra esa criatura si está a tu alcance.`
            },
            20: {
                "Ángel vengador":`Como acción adicional, obtienes los siguientes beneficios durante 10 minutos o hasta que los finalices (no requiere acción). Una vez que uses esta característica, no podrás usarla de nuevo hasta que completes un descanso prolongado. También puedes recuperar su uso gastando un espacio de hechizo de nivel 5 (no requiere acción).

        Vuelo. Brotan alas espectrales de tu espalda y obtienes una Velocidad de vuelo de 60 p, pudiendo mantenerte en el aire.

        Aura aterradora. Siempre que un enemigo comience su turno en tu Aura de Protección, esa criatura debe superar una tirada de salvación de Sabiduría o sufrir la condición de Asustado durante 1 minuto o hasta que reciba daño. Las tiradas de ataque contra la criatura Asustada tienen Ventaja.`
            }
        },
        vagabundo_feérico: {
            3: {
                "Golpes aterradores":`Puedes potenciar los golpes de tus armas con magia que hiere la mente, extraída de los oscuros rincones del Feywild. Cuando impactas a una criatura con un arma, puedes infligir 1d4 de daño psíquico adicional al objetivo, que solo puede recibir este daño adicional una vez por turno. El daño adicional aumenta a 1d6 cuando alcanzas el nivel 11 de Explorador.`,
                
                "Hechizos del Errante Feérico":`Cuando alcanzas un nivel de Explorador especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos indicados.
        Nivel de explorador	Hechizo
        3	Encantar persona
        5	Paso brumoso
        9	Invocar feérico
        13	Puerta dimensional
        17	Engañar

        También posees una bendición feérica. Elígela de la tabla de Dones del Feywild o determínala aleatoriamente.

        Dones del Feywild
        1d6	Don
        1	Mariposas ilusorias revolotean a tu alrededor mientras realizas un descanso corto o largo.
        2	Florecen flores de tu cabello cada amanecer.
        3	Desprendes un leve aroma a canela, lavanda, nuez moscada u otra hierba o especia reconfortante.
        4	Tu sombra baila cuando nadie la mira directamente.
        5	De tu cabeza brotan cuernos o astas.
        6	Tu piel y cabello cambian de color cada amanecer.`,

                "Encanto de otro mundo":`Cada vez que realizas una prueba de Carisma, obtienes un bonificador a la tirada igual a tu modificador de Sabiduría (mínimo de +1).

        También obtienes competencia en una de las siguientes habilidades a tu elección: Engaño, Interpretación o Persuasión.`
            },

            7: {
                "Giro cautivador":`La magia del Feywild protege tu mente. Tienes ventaja en las tiradas de salvación para evitar o terminar las condiciones de encantado o asustado.

        Además, cada vez que tú o una criatura que puedas ver a 120 p de ti tenga éxito en una tirada de salvación para evitar o terminar las condiciones de encantado o asustado, puedes usar tu reacción para forzar a otra criatura que puedas ver a 120 p de ti a realizar una tirada de salvación de Sabiduría contra la CD de tus hechizos. Si falla, el objetivo queda encantado o asustado (a tu elección) durante 1 minuto. El objetivo repite la tirada al final de cada uno de sus turnos, terminando el efecto con un éxito.`
            },

            11: {
                "Refuerzos feéricos":`Puedes lanzar Invocar feérico sin componentes materiales. También puedes lanzarlo una vez sin gastar un espacio de hechizo, y recuperas esta capacidad cuando terminas un descanso largo.

        Cada vez que comienzas a lanzar el hechizo, puedes modificarlo para que no requiera concentración. Si lo haces, la duración del hechizo pasa a ser de 1 minuto para ese lanzamiento.`
            },

            15: {
                "Errante brumoso":`Puedes lanzar Paso brumoso sin gastar un espacio de hechizo. Puedes hacerlo un número de veces igual a tu modificador de Sabiduría (mínimo de una vez), y recuperas todos los usos gastados cuando terminas un descanso largo.

        Además, cada vez que lanzas Paso brumoso, puedes llevar contigo a una criatura voluntaria que puedas ver a 5 p de ti. Esa criatura se teletransporta a un espacio desocupado de tu elección a 5 p de tu espacio de destino.`
            }
        },

        acechador_de_la_penumbra: {
            3: {
                "Emboscador temible":`Has dominado el arte de crear emboscadas aterradoras, otorgándote los siguientes beneficios.

        Salto del emboscador. Al inicio de tu primer turno de cada combate, tu velocidad aumenta en 10 p hasta el final de ese turno.

        Golpe temible. Cuando atacas a una criatura y la impactas con un arma, puedes infligir 2d6 de daño psíquico adicional. Puedes usar este beneficio solo una vez por turno, puedes usarlo un número de veces igual a tu modificador de Sabiduría (mínimo de una vez), y recuperas todos los usos gastados cuando terminas un descanso largo.

        Bonificador a iniciativa. Cuando tiras iniciativa, puedes añadir tu modificador de Sabiduría a la tirada.`,

                "Hechizos del Acechador de la Penumbra":`Cuando alcanzas un nivel de Explorador especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos indicados.
        Nivel de explorador	Hechizos
        3	Disfrazarse
        5	Truco de la cuerda
        9	Miedo
        13	Invisibilidad superior
        17	Apariencia`,

                "Vista umbral":`Obtienes visión en la oscuridad con un alcance de 60 p. Si ya tienes visión en la oscuridad cuando obtienes esta característica, su alcance aumenta en 60 p.

        También eres hábil evitando criaturas que dependen de la visión en la oscuridad. Mientras estés completamente en la oscuridad, tienes la condición de invisible para cualquier criatura que dependa de la visión en la oscuridad para verte en esa oscuridad.`
            },

            7: {
                "Mente de hierro":`Has perfeccionado tu capacidad para resistir poderes que alteran la mente. Obtienes competencia en tiradas de salvación de Sabiduría. Si ya tienes esta competencia, en su lugar obtienes competencia en tiradas de salvación de Inteligencia o Carisma (a tu elección).`
            },

            11: {
                "Ráfaga del acechador":`El daño psíquico de tu Golpe temible pasa a ser 2d8. Además, cuando usas el efecto de Golpe temible de tu rasgo Emboscador temible, puedes usar uno de los siguientes efectos adicionales.

        Golpe repentino. Puedes realizar otro ataque con la misma arma contra una criatura diferente que esté a 5 p del objetivo original y dentro del alcance del arma.

        Miedo en masa. El objetivo y cada criatura a 10 p de él deben realizar una tirada de salvación de Sabiduría contra la CD de tus hechizos. Si fallan, una criatura queda asustada hasta el inicio de tu siguiente turno.`
            },

            15: {
                "Esquiva sombría":`Cuando una criatura realiza una tirada de ataque contra ti, puedes usar tu reacción para imponer desventaja en esa tirada. Tanto si el ataque impacta como si falla, puedes teletransportarte hasta 30 p a un espacio desocupado que puedas ver.`
            }
        },
        maestro_de_bestias: {
            3: {
                "Compañero Primordial": `Llamas mágicamente a una bestia primordial, que se vincula contigo mediante energía natural. Elige su forma: Bestia de la Tierra, Bestia del Mar o Bestia del Cielo. También determinas su apariencia, como un animal apropiado a su forma, pero siempre con marcas sobrenaturales.

        La bestia aparece en un espacio desocupado a 5p de ti.

        En combate, actúa durante tu turno. Puede moverse y usar su Reacción por sí misma, pero solo realiza la acción de Esquivar a menos que le ordenes otra cosa.

        Como Acción adicional, puedes ordenarla a realizar una acción de su bloque de estadísticas.

        Además, cuando tomas la acción de Ataque, puedes sustituir uno de tus ataques para ordenar a la bestia que use su acción Ataque de Bestia.

        Si estás incapacitado, la bestia actúa por sí sola y no está limitada a Esquivar.

        Si la bestia muere, puedes gastar un espacio de conjuro como Acción mágica para devolverla a la vida tras 1 minuto con todos sus Puntos de Golpe.

        Al terminar un Descanso Largo, puedes invocar una nueva bestia que aparece a 5p de ti.`,

                "Bestia de la Tierra / Mar / Cielo": `Invocas una criatura primordial que adopta una de estas formas:

        —

        BESTIA DE LA TIERRA  
        Mediana, Bestia, Neutral  
        CA: 13 + tu modificador de Sabiduría  
        PG: 5 + 5 × tu nivel de explorador  
        Velocidad: 40p, Escalada 40p  
        FUE 14 (+2) DES 14 (+2) CON 15 (+2) INT 8 (-1) SAB 14 (+2) CAR 11 (+0)

        Sentidos: Visión en la oscuridad 60p, Percepción pasiva 12  
        Idiomas: Entiende los idiomas que conoces  
        CR: Ninguno (PB = tu bonificador de competencia)

        Rasgos:  
        Vínculo Primordial. Añade tu bonificador de competencia a tiradas de la bestia.

        Acciones:  
        Ataque de Bestia. Ataque cuerpo a cuerpo: bonificador igual a tu ataque de conjuro, alcance 5p. Impacto: 1d8 + 2 + tu modificador de Sabiduría daño contundente, perforante o cortante (a elegir al invocar).  
        Si se mueve al menos 20p en línea recta antes de impactar, añade 1d6 daño adicional y el objetivo cae derribado si es Grande o menor.

        —

        BESTIA DEL CIELO  
        Pequeña, Bestia, Neutral  
        CA: 13 + tu modificador de Sabiduría  
        PG: 4 + 4 × tu nivel de explorador  
        Velocidad: 10p, Vuelo 60p  
        FUE 6 (-2) DES 16 (+3) CON 13 (+1) INT 8 (-1) SAB 14 (+2) CAR 11 (+0)

        Sentidos: Visión en la oscuridad 60p, Percepción pasiva 12  
        Idiomas: Entiende los idiomas que conoces  
        CR: Ninguno (PB = tu bonificador de competencia)

        Rasgos:  
        Vuelo Ágil. No provoca ataques de oportunidad al volar fuera del alcance.

        Vínculo Primordial. Añade tu bonificador de competencia a tiradas de la bestia.

        Acciones:  
        Ataque de Bestia. Ataque cuerpo a cuerpo: bonificador igual a tu ataque de conjuro, alcance 5p. Impacto: 1d4 + 3 + tu modificador de Sabiduría daño cortante.

        —

        BESTIA DEL MAR  
        Mediana, Bestia, Neutral  
        CA: 13 + tu modificador de Sabiduría  
        PG: 5 + 5 × tu nivel de explorador  
        Velocidad: 5p, Nado 60p  
        FUE 14 (+2) DES 14 (+2) CON 15 (+2) INT 8 (-1) SAB 14 (+2) CAR 11 (+0)

        Sentidos: Visión en la oscuridad 90p, Percepción pasiva 12  
        Idiomas: Entiende los idiomas que conoces  
        CR: Ninguno (PB = tu bonificador de competencia)

        Rasgos:  
        Anfibio. Puede respirar aire y agua.  
        Vínculo Primordial. Añade tu bonificador de competencia a tiradas de la bestia.

        Acciones:  
        Ataque de Bestia. Ataque cuerpo a cuerpo: bonificador igual a tu ataque de conjuro, alcance 5p. Impacto: 1d6 + 2 + tu modificador de Sabiduría daño contundente o perforante (a elegir al invocar), y el objetivo queda agarrado (escape CD = tu CD de conjuro).`
            },

            7: {
                "Entrenamiento Excepcional": `Cuando ordenas a tu Compañero Primordial usar su acción, también puede realizar como acción adicional Correr, Desplazarse sin provocar ataques de oportunidad, Esquivar o Ayudar.

        Además, cuando impacta con un ataque, puedes elegir que su daño sea de Fuerza o su tipo normal.` 
            },

            11: {
                "Furia Bestial": `Cuando ordenas a tu bestia usar Ataque de Bestia, puede realizarlo dos veces.

        Además, la primera vez en cada turno que golpea a una criatura afectada por Marca del Cazador, inflige daño de Fuerza adicional igual al bono del hechizo.` 
            },

            15: {
                "Compartir Hechizos": `Cuando lanzas un conjuro que te tenga como objetivo, también puede afectar a tu Compañero Primordial si está a 30p de ti.`
            }
        },
        cazador: {
            3: {
                "Conocimiento del cazador":`Puedes recurrir a las fuerzas de la naturaleza para revelar ciertas fortalezas y debilidades de tu presa. Mientras una criatura esté marcada por tu Marca del cazador, sabes si la criatura tiene Inmunidades, Resistencias o Vulnerabilidades, y si las tiene, sabes cuáles son.`,

                "Presa del cazador":`Obtienes una de las siguientes opciones de rasgo a tu elección. Siempre que termines un descanso corto o largo, puedes reemplazar la opción elegida por la otra.

        Asesino de colosos. Tu tenacidad puede desgastar incluso a los enemigos más resistentes. Cuando impactas a una criatura con un arma, el arma inflige 1d8 de daño adicional al objetivo si le faltan puntos de golpe. Solo puedes infligir este daño adicional una vez por turno.

        Destructor de hordas. Una vez en cada uno de tus turnos cuando realizas un ataque con un arma, puedes hacer otro ataque con la misma arma contra una criatura diferente que esté a 5 p del objetivo original, dentro del alcance del arma, y a la que no hayas atacado este turno.`
            },

            7: {
                "Tácticas defensivas":`Obtienes una de las siguientes opciones de rasgo a tu elección. Siempre que termines un descanso corto o largo, puedes reemplazar la opción elegida por la otra.

        Escapar de la horda. Los ataques de oportunidad tienen desventaja contra ti.

        Defensa contra múltiples ataques. Cuando una criatura te impacta con una tirada de ataque, esa criatura tiene desventaja en todas las demás tiradas de ataque contra ti este turno.`
            },

            11: {
                "Presa superior del cazador":`Una vez por turno, cuando infliges daño a una criatura marcada por tu Marca del cazador, también puedes infligir el daño adicional de ese hechizo a una criatura diferente que puedas ver a 30 p de la primera criatura.`
            },

            15: {
                "Defensa superior del cazador":`Cuando recibes daño, puedes usar tu reacción para otorgarte resistencia a ese daño y a cualquier otro daño del mismo tipo hasta el final del turno actual.`
            }
        },

        caminante_de_invierno: {
            3: {
                "Explorador gélido":`Obtienes los siguientes beneficios.

        Frío mordiente. El daño de tus ataques con arma, tus hechizos de Explorador y tus rasgos de Explorador ignora la Resistencia al daño por frío.

        Resistencia al frío. Tienes Resistencia al daño por frío.

        Golpes polares. Cuando impactas a una criatura con una tirada de ataque usando un arma, puedes infligir 1d4 de daño por frío adicional al objetivo, que solo puede recibir este daño adicional una vez por turno. Cuando alcanzas nivel 11 de Explorador, este daño adicional aumenta a 1d6.`,

                "Escarcha del cazador":`El hielo cubre tanto a ti como a tu presa, protegiéndote y entorpeciéndola. Cuando lanzas Marca del cazador, obtienes Puntos de Golpe Temporales iguales a 1d10 más tu nivel de Explorador.

        Además, mientras una criatura esté marcada por tu Marca del cazador, no puede realizar la acción de Retirarse.`,

                "Hechizos del Caminante Invernal":`Cuando alcanzas un nivel de Explorador especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos indicados.
        Nivel de explorador	Hechizos
        3	Cuchillo de hielo
        5	Inmovilizar persona
        9	Quitar maldición
        13	Tormenta de hielo
        17	Cono de frío`
            },

            7: {
                "Alma fortalecedora":`Tu experiencia sobreviviendo a entornos extremos te permite fortalecer a tus aliados además de a ti mismo. Como acción mágica, elige un número de criaturas que puedas ver igual a tu modificador de Sabiduría (mínimo de una). Cada criatura elegida recupera puntos de golpe iguales a 1d10 más tu nivel de Explorador y tiene ventaja en tiradas de salvación para evitar o terminar la condición de asustado durante 1 hora.

        Una vez que uses este rasgo, no puedes volver a usarlo hasta que termines un descanso largo.`
            },

            11: {
                "Retribución helada":`Cuando una criatura te impacta con una tirada de ataque, puedes usar tu reacción para forzar a esa criatura a realizar una tirada de salvación de Sabiduría contra la CD de tus hechizos. Si falla, el objetivo queda aturdido hasta el final de tu siguiente turno. Mientras esté aturdido, su velocidad se reduce a 0 p.

        Puedes usar este rasgo un número de veces igual a tu modificador de Sabiduría (mínimo de una), y recuperas todos los usos gastados cuando terminas un descanso largo.`
            },

            15: {
                "Aparición congelada":`Cuando lanzas Marca del cazador, puedes adoptar una forma fantasmal y nevada. Esta forma dura hasta que el hechizo termina, y mientras estés en esta forma obtienes los siguientes beneficios. Una vez que uses este rasgo, no puedes volver a usarlo hasta que termines un descanso largo a menos que gastes un espacio de hechizo de nivel 4 o superior (no requiere acción).

        Alma congelada. Tienes Inmunidad al daño por frío. Cuando adoptas esta forma por primera vez y al inicio de cada uno de tus turnos posteriores, cada criatura a tu elección en una emanación de 15 p desde ti recibe 2d4 de daño por frío.

        Parcialmente incorpóreo. Tienes Inmunidad a las condiciones agarrado, derribado y restringido. Puedes moverte a través de criaturas y objetos como si fueran terreno difícil, pero recibes 1d10 de daño de fuerza si terminas tu turno dentro de una criatura u objeto. Si la forma termina mientras estás dentro de una criatura u objeto, eres desplazado al espacio desocupado más cercano.`
            }
        },

        embaucador_arcano: {
            3: {
                "Lanzamiento de conjuros":`Has aprendido a lanzar hechizos. Consulta el capítulo 7 para las reglas de lanzamiento de conjuros. La siguiente información detalla cómo usas esas reglas como Embaucador Arcano.

        Trucos. Conoces tres trucos: Mano de mago y otros dos trucos de tu elección de la lista de hechizos de Mago. Se recomiendan Astilla mental e Ilusión menor.

        Cada vez que subes un nivel de Pícaro, puedes reemplazar uno de tus trucos, excepto Mano de mago, por otro truco de Mago de tu elección.

        Cuando alcanzas nivel 10 de Pícaro, aprendes otro truco de Mago de tu elección.

        Espacios de hechizo. La tabla de Lanzamiento de Conjuros del Embaucador Arcano muestra cuántos espacios de hechizo tienes para lanzar tus hechizos de nivel 1 o superior. Recuperas todos los espacios gastados al finalizar un descanso largo.

        Hechizos preparados de nivel 1+. Preparas una lista de hechizos de nivel 1 o superior disponibles para lanzar con este rasgo. Para empezar, elige tres hechizos de nivel 1 de Mago. Se recomiendan Encantar persona, Disfrazarse y Nube de niebla.

        El número de hechizos en tu lista aumenta a medida que subes niveles de Pícaro, como se muestra en la tabla. Cuando ese número aumenta, elige hechizos adicionales de Mago hasta igualar el total indicado. Los hechizos elegidos deben ser de un nivel para el cual tengas espacios de hechizo.

        Cambio de hechizos preparados. Cada vez que subes un nivel de Pícaro, puedes reemplazar un hechizo de tu lista por otro hechizo de Mago para el que tengas espacios de hechizo.

        Característica de lanzamiento. Inteligencia es tu característica para lanzar hechizos de Mago.

        Foco de lanzamiento. Puedes usar un foco arcano como foco de lanzamiento para tus hechizos de Mago.`,

                "Juego de manos con Mano de mago":`Cuando lanzas Mano de mago, puedes hacerlo como acción adicional, y puedes hacer la mano espectral Invisible. Puedes controlar la mano como acción adicional y, a través de ella, puedes realizar pruebas de Destreza (Juego de manos).`
            },

            9: {
                "Emboscada mágica":`Si tienes la condición de Invisible cuando lanzas un hechizo sobre una criatura, esta tiene desventaja en cualquier tirada de salvación que realice contra el hechizo en ese mismo turno.`
            },

            13: {
                "Embaucador versátil":`Obtienes la capacidad de distraer objetivos con tu Mano de mago. Cuando usas la opción Derribar de tu Golpe Astuto sobre una criatura, también puedes usar esa opción sobre otra criatura a 5 p de la mano espectral.`
            },

            17: {
                "Ladrón de conjuros":`Obtienes la capacidad de robar mágicamente el conocimiento de cómo lanzar un hechizo de otro lanzador de conjuros.

        Inmediatamente después de que una criatura lance un hechizo que te tenga como objetivo o te incluya en su área, puedes usar tu reacción para obligarla a hacer una tirada de salvación de Inteligencia. La CD es igual a la de tus hechizos. Si falla, anulas el efecto del hechizo sobre ti y robas el conocimiento del hechizo si es de nivel 1 o superior y de un nivel que puedas lanzar. Durante las siguientes 8 horas, tienes el hechizo preparado. La criatura no puede lanzarlo hasta que pasen 8 horas.

        Una vez que robas un hechizo con este rasgo, no puedes volver a usarlo hasta que termines un descanso largo.`
            }
        },

        asesino: {
            3: {
                "Asesinar":`Eres experto en emboscar a un objetivo, lo que te otorga los siguientes beneficios.

        Iniciativa. Tienes ventaja en las tiradas de Iniciativa.

        Golpes sorpresivos. Durante la primera ronda de cada combate, tienes ventaja en las tiradas de ataque contra cualquier criatura que no haya tenido turno. Si tu Ataque furtivo impacta a un objetivo durante esa ronda, el objetivo recibe daño adicional del tipo del arma igual a tu nivel de Pícaro.`,

                "Herramientas del asesino":`Obtienes un kit de disfraz y un kit de envenenador, y tienes competencia con ellos.`
            },

            9: {
                "Experto en infiltración":`Eres experto en las siguientes técnicas que ayudan a tus infiltraciones.

        Mimetismo magistral. Puedes imitar perfectamente el habla, la escritura o ambas de otra persona si has pasado al menos 1 hora estudiándola.

        Puntería en movimiento. Tu velocidad no se reduce a 0 al usar Apuntar con calma.`
            },

            13: {
                "Armas envenenadas":`Cuando usas la opción Veneno de tu Golpe Astuto, el objetivo también recibe 2d6 de daño por veneno cada vez que falla la tirada de salvación. Este daño ignora la resistencia al daño por veneno.`
            },

            17: {
                "Golpe mortal":`Cuando impactas con tu Ataque furtivo en la primera ronda de un combate, el objetivo debe superar una tirada de salvación de Constitución (CD 8 + tu modificador de Destreza + tu bonificador de competencia) o el daño del ataque se duplica contra el objetivo.`
            }
        },

        descendiente_de_los_tres: {
            3: {
                "Sed de Sangre": `Cuando un enemigo que puedes ver a 30 p de ti recibe daño y queda Ensangrentado tras recibir ese daño pero no muere directamente, puedes usar tu Reacción para teletransportarte a un espacio desocupado que puedas ver a 5 p de ese enemigo. Después puedes realizar un ataque cuerpo a cuerpo. Puedes usar esta característica un número de veces igual a tu modificador de Inteligencia (mínimo de una vez), y recuperas todos los usos gastados cuando terminas un Descanso Largo.`,

                "Lealtad Tenebrosa": `Elige uno de los Tres Oscuros: Bane, Bhaal o Myrkul. Obtienes Resistencia a un tipo de daño y la capacidad de lanzar un truco, según la tabla siguiente; Inteligencia es tu característica de lanzamiento de conjuros para este truco. Cuando terminas un Descanso Largo, puedes cambiar tu elección.

        Bane → Psíquico → Ilusión menor  
        Bhaal → Veneno → Guardia de espadas  
        Myrkul → Necrótico → Toque helado`
            },

            9: {
                "Golpe del Terror": `Obtienes la siguiente opción de Golpe Astuto.

        Aterrorizar (Coste: 1d6). El objetivo debe superar una tirada de salvación de Sabiduría o queda con la condición de Asustado durante 1 minuto. Mientras esté asustado de esta forma, tienes Ventaja en las tiradas de ataque contra ese objetivo. El objetivo repite la tirada al final de cada uno de sus turnos, terminando el efecto en caso de éxito.`
            },

            13: {
                "Aura de Malevolencia": `Emites un poder maligno asociado a uno de los Tres Oscuros. Cuando usas Sed de Sangre y te teletransportas, cada criatura de tu elección dentro de 10 p de cualquiera de los espacios (el que dejaste o el de destino) recibe daño igual a tu modificador de Inteligencia; el tipo de daño es el mismo que la Resistencia obtenida con Lealtad Tenebrosa. Este daño ignora Resistencias.`
            },

            17: {
                "Encarnación del Terror": `Obtienes los siguientes beneficios.

        Habilidad de Asesino. Recuperas un uso gastado de Sed de Sangre cuando terminas un Descanso Corto.

        Intención Mortal. Cuando tiras el daño de Ataque Furtivo, puedes tratar un resultado de 1 o 2 en los dados como si fuera 3.`
            }
        },

        cuchillos_de_alma: {
            3: {
                "Poder Psiónico": `Llevas dentro un manantial de energía psiónica. Se representa mediante tus Dados de Energía Psiónica, que alimentan ciertas capacidades de esta subclase. La tabla de Dados de Energía del Soulknife muestra el número de dados que tienes cuando alcanzas ciertos niveles de Pícaro y su tamaño.

        Tabla de Dados de Energía del Soulknife  
        Nivel de Pícaro | Tamaño del dado | Número  
        3 | D6 | 4  
        5 | D8 | 6  
        9 | D8 | 8  
        11 | D10 | 8  
        13 | D10 | 10  
        17 | D12 | 12  

        Las características de esta subclase que usan un Dado de Energía Psiónica solo utilizan estos dados. Algunas de tus habilidades consumen un dado, tal y como se indica en su descripción, y no puedes usarlas si ya no te quedan dados disponibles.

        Recuperas 1 dado gastado cuando terminas un Descanso Corto, y todos cuando terminas un Descanso Largo.

        Impulso Psiónico. Si fallas una prueba de característica usando una habilidad o herramienta en la que eres competente, puedes tirar 1 Dado de Energía Psiónica y sumar el resultado, pudiendo convertir el fallo en éxito. El dado solo se gasta si la prueba pasa gracias a este efecto.

        Susurros Psíquicos. Puedes establecer comunicación telepática. Como acción mágica, elige una o más criaturas que puedas ver, hasta un número igual a tu bonificador de competencia, y tira 1 Dado de Energía Psiónica. Durante tantas horas como el resultado, puedes comunicarte telepáticamente con esas criaturas siempre que estéis a 1 milla o menos. Una criatura puede terminar el enlace en cualquier momento (sin acción).`
            },

            3: {
                "Cuchillas Psíquicas": `Puedes manifestar cuchillas de energía psíquica. Siempre que realizas la acción de Ataque o un Ataque de Oportunidad, puedes crear una Cuchilla Psíquica en tu mano libre y atacar con ella.

        Arma:
        - Categoría: arma cuerpo a cuerpo simple  
        - Daño: 1d6 Psíquico + modificador  
        - Propiedades: Sutileza, Lanzada (60/120 p)  
        - Maestría: Vex  

        La cuchilla desaparece tras impactar o fallar y no deja rastro.

        Después de atacar, puedes hacer un segundo ataque con otra cuchilla como acción adicional si tienes la otra mano libre. Este segundo ataque inflige 1d4 en lugar de 1d6.`
            },

            9: {
                "Almas de la Cuchilla": `Ahora puedes usar estas técnicas:

        Golpes Guiados. Si fallas una tirada de ataque con tu Cuchilla Psíquica, puedes tirar 1 Dado de Energía Psiónica y sumarlo. Si impacta gracias a esto, el dado se gasta.

        Teletransporte Psíquico. Como acción adicional, manifiestas una Cuchilla Psíquica, gastas 1 Dado de Energía Psiónica y lo tiras. Luego lanzas la cuchilla a un espacio desocupado que puedas ver a una distancia igual a 10 veces el resultado en p. Después te teletransportas a ese lugar y la cuchilla desaparece.`
            },

            13: {
                "Velo Psíquico": `Puedes envolver tu mente en estática psíquica. Como acción mágica, obtienes la condición de Invisible durante 1 hora o hasta que la canceles (sin acción). Este efecto termina si infliges daño o fuerzas una tirada de salvación.

        Una vez usado, no puedes volver a usarlo hasta un Descanso Largo, a menos que gastes 1 Dado de Energía Psiónica (sin acción) para restaurarlo.`
            },

            17: {
                "Desgarro Mental": `Puedes atravesar la mente de una criatura con tus cuchillas psíquicas. Cuando infliges daño de Ataque Furtivo con ellas, puedes obligar al objetivo a realizar una tirada de salvación de Sabiduría (CD 8 + modificador de Destreza + bonificador de competencia). Si falla, queda Aturdido durante 1 minuto. El objetivo repite la tirada al final de cada turno, terminando el efecto con éxito.

        Una vez usado, no puedes volver a usarlo hasta un Descanso Largo, a menos que gastes 3 Dados de Energía Psiónica (sin acción).`
            }
        },

        ladrón: {
            3: {
                "Manos Rápidas": `Como acción adicional puedes realizar una de las siguientes opciones:

        Juego de manos. Realizar una prueba de Destreza (Juego de manos) para abrir cerraduras o desarmar trampas con herramientas de ladrón, o para robar un objeto.

        Usar un objeto. Realizar la acción de Utilizar, o la acción mágica para usar un objeto mágico que lo requiera.`,

                "Trabajo en Segundas Plantas": `Has entrenado para acceder a lugares especialmente difíciles, obteniendo los siguientes beneficios:

        Escalador. Obtienes una velocidad de escalada igual a tu velocidad.

        Saltador. Puedes calcular la distancia de tus saltos usando Destreza en lugar de Fuerza.`
            },

            9: {
                "Sigilo Supremo": `Obtienes la siguiente opción de Golpe Astuto:

        Ataque Sigiloso (Coste: 1d6). Si tienes la condición de Invisible tras la acción de Ocultarte, este ataque no te hace perder dicha condición si terminas el turno detrás de Cobertura de Tres Cuartos o Cobertura Total.`
            },

            13: {
                "Uso de Objetos Mágicos": `Has aprendido a maximizar el uso de objetos mágicos, obteniendo los siguientes beneficios:

        Sintonización. Puedes sintonizarte con hasta cuatro objetos mágicos a la vez.

        Cargas. Siempre que uses una propiedad de un objeto mágico que consuma cargas, tira 1d6. Con un resultado de 6, usas la propiedad sin gastar cargas.

        Pergaminos. Puedes usar cualquier Pergamino de Hechizo, usando Inteligencia como característica de lanzamiento. Si el hechizo es un truco o de nivel 1, puedes lanzarlo de forma fiable. Si es de nivel superior, debes superar una prueba de Inteligencia (Arcanos) CD 10 + nivel del hechizo. Si la superas, lo lanzas; si fallas, el pergamino se desintegra.`
            },

            17: {
                "Reflejos del Ladrón": `Eres experto en emboscadas y escapes rápidos. Puedes realizar dos turnos durante la primera ronda de cualquier combate. Realizas el primero a tu Iniciativa normal y el segundo a tu Iniciativa menos 10.`
            }
        },

        hechicería_aberrante: {
            3: {
                "Hechizos Psiónicos": `Cuando alcanzas un nivel de Hechicero indicado en la tabla de Hechizos Psiónicos, a partir de ese momento siempre tienes esos hechizos preparados.

        Hechizos Psiónicos
        Nivel de Hechicero | Hechizos
        3 | Brazos de Hadar, Calmar Emociones, Detectar Pensamientos, Susurros Disonantes, Hoja Mental
        5 | Hambre de Hadar, Enviar
        7 | Tentáculos Negros de Evard, Invocar Aberración
        9 | Lazo Telepático de Rary, Telequinesis`,

                "Habla Telepática": `Puedes formar un vínculo telepático entre tu mente y la de otra criatura. Como acción adicional, eliges una criatura que puedas ver a 30 p de ti. Tú y esa criatura podéis comunicaros telepáticamente mientras ambos estéis a una distancia en millas igual a tu modificador de Carisma (mínimo de 1 milla). Para entenderos, ambos debéis usar mentalmente un idioma que el otro conozca.

        El vínculo telepático dura tantos minutos como tu nivel de Hechicero. Termina antes si lo usas para enlazarte con otra criatura.`
            },

            6: {
                "Hechicería Psiónica": `Cuando lanzas un hechizo de nivel 1 o superior de tus Hechizos Psiónicos, puedes lanzarlo gastando un espacio de conjuro normalmente o gastando Puntos de Hechicería igual al nivel del hechizo. Si lo lanzas con Puntos de Hechicería, no requiere componentes verbales ni somáticos, y tampoco requiere componentes materiales a menos que sean consumidos o tengan coste indicado en el hechizo.`,

                "Defensas Psíquicas": `Tienes resistencia al daño psíquico y ventaja en las tiradas de salvación para evitar o terminar las condiciones de Hechizado o Asustado.`
            },

            14: {
                "Revelación en la Carne": `Puedes liberar la verdad aberrante que hay en tu interior. Como acción adicional, puedes gastar 1 o más Puntos de Hechicería para alterar mágicamente tu cuerpo durante 10 minutos. Por cada punto gastado eliges uno de los siguientes beneficios, que duran hasta que termine el efecto:

        Adaptación Acuática. Ganas velocidad de nado igual al doble de tu velocidad y puedes respirar bajo el agua. Te crecen branquias o membranas entre los dedos.

        Vuelo Brillante. Ganas velocidad de vuelo igual a tu velocidad y puedes mantenerte flotando. Tu piel brilla con mucosidad o luz alienígena.

        Visión de lo Invisible. Puedes ver criaturas invisibles a 60 p que no estén tras cobertura total.

        Movimiento Vermiforme. Tu cuerpo se vuelve flexible y viscoso. Puedes moverte por espacios de 1 pulgada y gastar 5 p de movimiento para escapar de ataduras no mágicas o de la condición de agarrado.`
            },

            18: {
                "Implosión Retorcida": `Puedes desatar una anomalía que distorsiona el espacio. Como acción mágica, te teletransportas a un espacio desocupado que puedas ver a 120 p.

        Justo después de desaparecer, cada criatura a 30 p del punto que dejaste debe hacer una tirada de salvación de Fuerza contra tu CD de salvación de conjuros. Si falla, recibe 3d10 de daño de fuerza y es arrastrada en línea recta hacia el espacio que dejaste, terminando en el espacio desocupado más cercano posible. Si tiene éxito, recibe la mitad del daño.

        Una vez usado, no puedes volver a usarlo hasta un Descanso Largo, a menos que gastes 5 Puntos de Hechicería (sin acción) para recuperarlo.`
            }
        },

        hechicería_de_relojería: {
            3: {
                "Hechizos de Relojería": `
        Cuando alcanzas un nivel de Hechicero especificado en la tabla, a partir de entonces siempre tendrás preparados los hechizos enumerados.

        Hechizos de Relojería
        Nivel de Hechicero	Hechizos
        3	Intervención, Alarma, Restauración Menor, Protección contra el Bien y el Mal
        5	Disipar Magia, Protección contra la Energía
        7	Libertad de Movimiento, Invocar Constructo
        9	Restauración Mayor, Muro de Fuerza
                `,

                "Manifestaciones del Orden": `
        Además, consulta la tabla de Manifestaciones del Orden y elige o determina aleatoriamente cómo se manifiesta tu conexión con el orden cuando lanzas cualquier hechizo de Hechicero.

        Manifestaciones del Orden
        1d6	Manifestación
        1	Ruedas dentadas espectrales flotan detrás de ti.
        2	Las manecillas de un reloj giran en tus ojos.
        3	Tu piel brilla con un tono cobrizo.
        4	Ecuaciones flotantes y formas geométricas se superponen sobre tu cuerpo.
        5	Tu foco de lanzamiento de hechizos adopta la forma de un mecanismo de relojería diminuto.
        6	El tictac de engranajes o el sonido de un reloj puede ser escuchado por ti y por aquellos afectados por tu magia.
                `,
                "Restablecer el Equilibrio": `
        Tu conexión con el plano del orden absoluto te permite igualar momentos caóticos. Cuando una criatura que puedas ver a 60 p de ti esté a punto de hacer una tirada de d20 con ventaja o desventaja, puedes usar tu reacción para hacer que la tirada no se vea afectada por ventaja ni desventaja.

        Puedes usar este rasgo un número de veces igual a tu modificador de Carisma (mínimo 1), y recuperas todos los usos gastados al terminar un descanso prolongado.
                `
            },

            6: {
                "Bastión de la Ley": `
        Puedes canalizar la gran ecuación de la existencia para imbuir a una criatura con un escudo brillante de orden. Como acción mágica, puedes gastar de 1 a 5 Puntos de Hechicería para crear una protección mágica alrededor de ti o de otra criatura que puedas ver a 30 p de ti. La protección se representa con un número de d8 igual a los Puntos de Hechicería gastados.

        Cuando la criatura protegida sufre daño, puede gastar uno o varios de esos dados, lanzarlos y reducir el daño recibido en el total obtenido.

        La protección dura hasta que termines un descanso prolongado o hasta que vuelvas a usar este rasgo.
                `
            },

            14: {
                "Trance del Orden": `
        Obtienes la capacidad de alinear tu conciencia con los cálculos infinitos de Mechanus. Como acción adicional, entras en este estado durante 1 minuto. Durante este tiempo, las tiradas de ataque contra ti no pueden beneficiarse de ventaja, y siempre que hagas una tirada de d20, puedes tratar cualquier resultado de 9 o menos como un 10.

        Una vez usas este rasgo, no puedes volver a usarlo hasta terminar un descanso prolongado, a menos que gastes 5 Puntos de Hechicería (sin acción) para restaurarlo.
                `
            },

            18: {
                "Cavalcada de Relojería": `
        Puedes invocar brevemente espíritus del orden para eliminar el caos a tu alrededor. Como acción mágica, invocas espíritus en un cubo de 30 p originado en ti. Los espíritus parecen modrones u otros constructos a tu elección. Son intangibles e invulnerables.

        Los espíritus producen los siguientes efectos dentro del cubo antes de desaparecer:

        Sanar. Los espíritus restauran hasta 100 puntos de vida, repartidos como elijas entre cualquier número de criaturas dentro del cubo.

        Reparar. Todos los objetos dañados completamente dentro del cubo se reparan al instante.

        Disipar. Todos los hechizos de nivel 6 o inferior terminan en criaturas y objetos de tu elección dentro del cubo.

        Una vez usas este rasgo, no puedes volver a usarlo hasta terminar un descanso prolongado, a menos que gastes 7 Puntos de Hechicería (sin acción) para restaurarlo.
                `
            }
        },

        hechicería_dracónica: {
            3: {
                "Resistencia Dracónica": `La magia en tu cuerpo manifiesta rasgos físicos de tu don dracónico. Tu máximo de Puntos de Golpe aumenta en 3, y aumenta en 1 cada vez que ganas un nivel adicional de Hechicero.

        Partes de ti también están cubiertas por escamas similares a las de un dragón. Mientras no lleves armadura, tu Clase de Armadura base es igual a 10 + tu modificador de Destreza y Carisma.`,

                "Hechizos Dracónicos": `Cuando alcanzas un nivel de Hechicero especificado en la tabla de Hechizos Dracónicos, a partir de entonces siempre tendrás preparados los hechizos enumerados.

        Hechizos Dracónicos
        Nivel de Hechicero	Hechizos
        3	Alterar el cuerpo, Orbe cromático, Ordenar, Aliento de dragón
        5	Miedo, Volar
        7	Ojo arcano, Monstruo encantado
        9	Conocimiento legendario, Invocar dragón`,

                "Manifiesto de lo Dracónico": `Además, consulta la tabla Manifestaciones Dracónicas y elige o determina aleatoriamente una forma en la que tu conexión con lo dracónico se manifiesta cuando lanzas cualquier hechizo de Hechicero.

        Manifestaciones Dracónicas
        1d6	Manifestación
        1	Escamas espectrales recorren tu piel.
        2	Ojos con iris reptiliano.
        3	Un leve calor o frío emana de tu cuerpo.
        4	Sombras con forma de dragón te rodean brevemente.
        5	Tu voz resuena como un eco bestial.
        6	Chispas elementales aparecen al lanzar magia.`
            },

            6: {
                "Afinidad Elemental": `Tu magia dracónica tiene afinidad con un tipo de daño asociado a dragones. Elige uno de esos tipos: Ácido, Frío, Fuego, Relámpago o Veneno.

        Tienes Resistencia a ese tipo de daño, y cuando lanzas un hechizo que inflige daño de ese tipo, puedes añadir tu modificador de Carisma a una tirada de daño de ese hechizo.`
            },

            14: {
                "Alas de Dragón": `Como acción adicional, puedes hacer que unas alas dracónicas aparezcan en tu espalda. Las alas duran 1 hora o hasta que las deshagas (sin acción).

        Durante la duración, tienes una velocidad de vuelo de 60 p.`,

            },

            18: {
                "Compañero Dragón": `Puedes lanzar Invocar Dragón sin componente material. También puedes lanzarlo una vez sin gastar un espacio de hechizo, y recuperas esta capacidad cuando terminas un Descanso Largo.

        Cuando comienzas a lanzar este hechizo, puedes modificarlo para que no requiera concentración. Si lo haces, la duración del hechizo pasa a ser de 1 minuto para esa conjuración.`
            }
        },

        hechicería_de_fuego_mágico: {
            3: {
                "Estallido de Fuego de Hechizo": `Cuando gastas al menos 1 Punto de Hechicería como parte de una acción mágica o una acción adicional en tu turno, puedes liberar uno de los siguientes efectos mágicos de tu elección. Solo puedes hacerlo una vez por turno.

        Llamas Fortificantes. Tú o una criatura que puedas ver a menos de 30 p de ti gana Puntos de Golpe Temporales iguales a 1d4 + tu modificador de Carisma.

        Fuego Radiante. Una criatura que puedas ver a menos de 30 p de ti recibe 1d4 de daño de Fuego o Radiante (a tu elección).`,

                "Hechizos de Fuego de Hechizo": `Cuando alcanzas un nivel de Hechicero especificado en la tabla de Hechizos de Fuego de Hechizo, a partir de entonces siempre tendrás preparados los hechizos enumerados.

        Hechizos de Fuego de Hechizo
        Nivel de Hechicero	Hechizos
        3	Curar heridas, Rayo guiador, Restauración menor, Rayo abrasador
        5	Aura de vitalidad, Disipar magia
        7	Escudo de fuego, Muro de fuego
        9	Restauración mayor, Golpe flamígero`
            },

            6: {
                "Absorber Hechizos": `Siempre tienes preparada Contraconjuro.

        Además, siempre que el objetivo falle la tirada de salvación contra un Contraconjuro que lances, recuperas 1d4 Puntos de Hechicería.`
            },

            14: {
                "Fuego de Hechizo Perfeccionado": `Tu Estallido de Fuego de Hechizo mejora. Añades tu nivel de Hechicero a los Puntos de Golpe Temporales obtenidos de Llamas Fortificantes, y el daño de tu Fuego Radiante aumenta a 1d8.`
            },

            18: {
                "Corona de Fuego de Hechizo": `Cuando usas Hechicería Innata, puedes alterarla e imbuirte de la esencia del fuego de hechizo, obteniendo los siguientes beneficios mientras esta activación de Hechicería Innata esté activa. Una vez uses este rasgo para alterar Hechicería Innata, no puedes volver a usarlo hasta que termines un Descanso Largo, a menos que gastes 5 Puntos de Hechicería (sin acción) para restaurarlo.

        Fuerza Vital Ardiente. Una vez por turno, cuando seas impactado por una tirada de ataque, puedes gastar un número de Dados de Golpe, hasta un máximo igual a tu modificador de Carisma (mínimo de uno). Tira esos dados y reduce el daño recibido por ese ataque en el total obtenido.

        Vuelo. Obtienes una velocidad de vuelo de 60 p y puedes mantenerte flotando.

        Evasión Mágica. Cuando seas objetivo de un hechizo o efecto mágico que permita una tirada de salvación para recibir solo la mitad del daño, en su lugar no recibes daño si la superas y solo recibes la mitad si la fallas. No puedes usar este beneficio si tienes la condición de Incapacitado.`
            }
        },

        hechicería_de_magia_salvaje: {
            3: {
                "Oleada de Magia Salvaje": `Tu lanzamiento de conjuros puede liberar estallidos de magia incontrolada. Una vez por turno, puedes lanzar 1d20 inmediatamente después de lanzar un hechizo de Hechicero usando un espacio de conjuro. Si obtienes un 20, tira en la tabla de Oleada de Magia Salvaje para crear un efecto mágico.

        Si el efecto es un hechizo, es demasiado caótico para ser afectado por tu Metamagia.`,

                "Mareas del Caos": `Puedes manipular el caos para obtener Ventaja en una tirada de D20 antes de lanzarla. Una vez lo hagas, no puedes volver a usar esta función hasta que lances un hechizo de Hechicero con un espacio de conjuro o termines un Descanso Largo.

        Si lanzas un hechizo de Hechicero con un espacio de conjuro antes de terminar un Descanso Largo, debes tirar en la tabla de Oleada de Magia Salvaje.`,

                "Hechizos de Magia Salvaje": `Cuando alcanzas un nivel de Hechicero indicado en la tabla, siempre tienes preparados los siguientes hechizos.

        Nivel de Hechicero — Hechizos
        3 — Crecimiento de plantas, Detección de magia, Dormir, Mano de mago
        5 — Invisibilidad, Acelerar
        7 — Confusión, Polimorfar
        9 — Animar objetos, Telequinesis`
            },

            6: {
                "Doblar la Suerte": `Tienes la capacidad de retorcer el destino con tu magia salvaje. Inmediatamente después de que otra criatura que puedas ver dentro de 60 p tire un D20, puedes usar tu Reacción y gastar 1 Punto de Hechicería para lanzar 1d4 y aplicar el resultado como bonificación o penalización (a tu elección) a la tirada.`
            },

            14: {
                "Caos Controlado": `Obtienes cierto control sobre las oleadas de tu magia salvaje. Siempre que tires en la tabla de Oleada de Magia Salvaje, puedes tirar dos veces y elegir el resultado que prefieras.`
            },

            18: {
                "Oleada Domada": `Inmediatamente después de lanzar un hechizo de Hechicero usando un espacio de conjuro, puedes elegir un efecto de la tabla de Oleada de Magia Salvaje en lugar de tirarlo. No puedes elegir la última fila de la tabla, y si el efecto elegido implica tiradas, debes realizarlas.

        Una vez uses esta función, no puedes volver a usarla hasta terminar un Descanso Largo.`
            },

            "Tabla de Oleada de Magia Salvaje": {
                "1-4": "Durante el próximo minuto, tira en esta tabla al inicio de cada uno de tus turnos, ignorando este resultado en tiradas posteriores.",
                "5-8": "Aparece una criatura amistosa en un espacio libre a 60 p de ti. El DM controla a la criatura y desaparece tras 1 minuto. 1d4: 1 Duodrón, 2 Flumph, 3 Monodrón, 4 Unicornio.",
                "9-12": "Durante 1 minuto, recuperas 5 Puntos de Vida al inicio de cada turno.",
                "13-16": "Las criaturas tienen Desventaja en la siguiente tirada de salvación contra un hechizo tuyo en el próximo minuto.",
                "17-20": "Efecto aleatorio durante 1 minuto: música etérea, crecimiento de tamaño, barba de plumas, gritar al hablar, mariposas ilusorias, ojo en la frente (Percepción con Ventaja), burbujas rosas al hablar, piel azul 24 horas.",
                "21-24": "Durante 1 minuto, tus conjuros de acción pasan a ser de Acción Adicional.",
                "25-28": "Te transportas al Plano Astral hasta el final de tu siguiente turno.",
                "29-32": "El siguiente hechizo que haga daño usa el máximo posible en sus dados.",
                "33-36": "Resistencia a todo daño durante 1 minuto.",
                "37-40": "Te conviertes en una planta en maceta hasta tu siguiente turno (Incapacitado, Vulnerabilidad a todo daño).",
                "41-44": "Puedes teletransportarte hasta 20 p como Acción Adicional durante 1 minuto.",
                "45-48": "Tú y hasta 3 criaturas a 30 p ganan Invisibilidad durante 1 minuto (termina al atacar, dañar o lanzar hechizo).",
                "49-52": "Escudo espectral: +2 a la CA e inmunidad a Misil Mágico durante 1 minuto.",
                "53-56": "Ganas una acción adicional en este turno.",
                "57-60": "Lanzas un hechizo aleatorio sin Concentración: Confusión, Bola de Fuego, Nube de Niebla, Volar, Grasa, Levitación, Misiles Mágicos nivel 5, Imagen Espejada, Polimorfar (puedes ser Cabra), Ver invisibilidad.",
                "61-64": "Objetos inflamables que toques arden durante 1 minuto.",
                "65-68": "Si mueres en la próxima hora, revives como por Reencarnar.",
                "69-72": "Estado de Miedo hasta el final de tu siguiente turno.",
                "73-76": "Te teletransportas hasta 60 p.",
                "77-80": "Una criatura aleatoria a 60 p tiene envenenado durante 1d4 horas.",
                "81-84": "Emites luz brillante en 30 p; criaturas cercanas pueden quedar cegadas.",
                "85-88": "Hasta 3 criaturas a 30 p reciben 1d10 necrótico y recuperas vida igual al daño.",
                "89-92": "Hasta 3 criaturas a 30 p reciben 4d10 relámpago.",
                "93-96": "Todas las criaturas a 30 p tienen Vulnerabilidad a daño perforante durante 1 minuto.",
                "97-00": "Tira 1d6: 1 te curas 2d10, 2 cura a un aliado a 300 p 2d10, 3 recuperas espacio de conjuro, 4 aliado recupera espacio, 5 recuperas Puntos de Hechicería, 6 todos efectos de 17-20 se aplican."
            }
        },

        patron_archfey: {
            3: {
                "Hechizos del Archifey": `La magia de tu patrón asegura que siempre tengas ciertos conjuros preparados. Cuando alcanzas un nivel de Brujo indicado en la tabla, siempre tienes preparados los siguientes hechizos.

        Nivel de Brujo — Hechizos
        3 — Emociones tranquilas, Fuego feérico, Paso brumoso, Fuerza fantasmal, Dormir
        5 — Parpadeo, Crecimiento vegetal
        7 — Dominar bestia, Invisibilidad superior
        9 — Dominar persona, Simulación`,

                "Pasos del Fey": `Tu patrón te concede la capacidad de moverte entre los límites de los planos. Puedes lanzar Paso brumoso sin gastar un espacio de conjuro un número de veces igual a tu modificador de Carisma (mínimo de una vez), y recuperas todos los usos al terminar un Descanso Largo.

        Además, cuando lanzas ese conjuro, puedes elegir uno de los siguientes efectos adicionales.

        Paso refrescante. Inmediatamente después de teletransportarte, tú o una criatura que veas dentro de 10 p ganas 1d10 Puntos de Golpe temporales.

        Paso burlón. Las criaturas a 5 p del espacio que abandonas deben superar una tirada de salvación de Sabiduría contra tu CD de conjuros o tendrán Desventaja en las tiradas de ataque contra criaturas que no seas tú hasta el inicio de tu siguiente turno.`
            },

            6: {
                "Escape Brumoso": `Puedes lanzar Paso brumoso como Reacción cuando recibes daño.

        Además, se añaden los siguientes efectos a tus opciones de Pasos del Fey:

        Paso desaparecido. Tienes el estado de Invisible hasta el inicio de tu siguiente turno o hasta que realices un ataque, inflijas daño o lances un hechizo.

        Paso aterrador. Las criaturas a 5 p del espacio que abandonas o apareces (a tu elección) deben superar una tirada de salvación de Sabiduría contra tu CD de conjuros o reciben 2d10 de daño Psíquico.`
            },

            10: {
                "Defensas Seductoras": `Tu patrón te enseña a proteger tu mente y tu cuerpo. Eres inmune al estado de Hechizado.

        Además, inmediatamente después de que una criatura que puedas ver te impacte con una tirada de ataque, puedes usar tu Reacción para reducir a la mitad el daño recibido (redondeando hacia abajo), y puedes obligar al atacante a realizar una tirada de salvación de Sabiduría contra tu CD de conjuros. Si falla, recibe daño psíquico igual al daño que tú recibes.

        Una vez uses esta Reacción, no puedes volver a usarla hasta terminar un Descanso Largo, a menos que gastes un espacio de Pacto de Magia (sin acción) para restaurarla.`
            },

            14: {
                "Magia Hechizante": `Tu patrón te concede la capacidad de entrelazar tu magia con la teletransportación. Inmediatamente después de lanzar un conjuro de Encantamiento o Ilusión usando una acción y un espacio de conjuro, puedes lanzar Paso brumoso como parte de la misma acción y sin gastar espacio de conjuro.`
            }
        },

        patron_celestial: {
            3: {
                "Hechizos Celestiales": `La magia de tu patrón asegura que siempre tengas ciertos conjuros preparados. Cuando alcanzas un nivel de Brujo indicado en la tabla, siempre tienes preparados los siguientes hechizos.

        Nivel de Brujo — Hechizos
        3 — Ayuda, Curar heridas, Rayo guiado, Restauración menor, Luz, Llama sagrada
        5 — Luz del día, Reanimar
        7 — Guardia de la fe, Muro de fuego
        9 — Restauración mayor, Invocar celestial`,

                "Luz Curativa": `Ganas la capacidad de canalizar energía celestial para sanar heridas. Tienes una reserva de d6s para este efecto. El número de dados en la reserva es igual a 1 + tu nivel de Brujo.

        Como Acción Adicional, puedes curarte a ti mismo o a una criatura que veas dentro de 60 p, gastando dados de la reserva. El máximo de dados que puedes gastar de una vez es igual a tu modificador de Carisma (mínimo de uno). Lanza los dados gastados y restaura tantos Puntos de Golpe como el total obtenido.

        Recuperas todos los dados gastados cuando terminas un Descanso Largo.`
            },

            6: {
                "Alma Radiante": `Tu vínculo con tu patrón te permite actuar como conducto de energía radiante. Tienes resistencia al daño Radiante. Una vez por turno, cuando un hechizo que lanzas inflige daño Radiante o de Fuego, puedes añadir tu modificador de Carisma al daño contra uno de los objetivos del hechizo.`
            },

            10: {
                "Resiliencia Celestial": `Ganas Puntos de Golpe temporales cuando usas tu rasgo de Astucia Mágica o terminas un Descanso Corto o Largo. Estos Puntos de Golpe temporales son iguales a tu nivel de Brujo + tu modificador de Carisma.

        Además, elige hasta cinco criaturas que puedas ver cuando obtengas estos puntos. Cada una de ellas gana Puntos de Golpe temporales iguales a la mitad de tu nivel de Brujo + tu modificador de Carisma.`
            },

            14: {
                "Venganza Abrasadora": `Cuando tú o un aliado dentro de 60 p vaya a hacer una tirada de salvación contra la muerte, puedes liberar energía radiante para salvar a la criatura. La criatura recupera Puntos de Golpe iguales a la mitad de su máximo y puede terminar el estado Derribado sobre sí misma.

        Cada criatura de tu elección dentro de 30 p de la criatura afectada recibe daño Radiante igual a 2d8 + tu modificador de Carisma, y queda Cegada hasta el final del turno actual.

        Una vez uses este rasgo, no puedes volver a usarlo hasta terminar un Descanso Largo.`
            }
        },

        patrón_demoníaco: {
            3: {
                "Bendición del Oscuro": `Cuando reduces a un enemigo a 0 Puntos de Golpe, obtienes Puntos de Golpe temporales iguales a tu modificador de Carisma + tu nivel de Brujo (mínimo de 1). También obtienes este beneficio si otra criatura dentro de 10 p de ti reduce a un enemigo a 0 Puntos de Golpe.`,

                "Hechizos del Demonio": `La magia de tu patrón asegura que siempre tengas ciertos conjuros preparados. Cuando alcanzas un nivel de Brujo indicado en la tabla, siempre tienes preparados los siguientes hechizos.

        Nivel de Brujo — Hechizos
        3 — Manos ardientes, Ordenar, Rayo abrasador, Sugerencia
        5 — Bola de fuego, Nube apestosa
        7 — Escudo de fuego, Muro de fuego
        9 — Geas, Plaga de insectos`
            },

            6: {
                "Suerte del Oscuro": `Puedes invocar a tu patrón infernal para alterar el destino a tu favor. Cuando hagas una tirada de característica o una tirada de salvación, puedes usar este rasgo para añadir 1d10 a la tirada. Puedes hacerlo después de ver el resultado, pero antes de que se apliquen sus efectos.

        Puedes usar este rasgo un número de veces igual a tu modificador de Carisma (mínimo de una vez), pero solo una vez por tirada. Recuperas todos los usos al terminar un Descanso Largo.`
            },

            10: {
                "Resistencia Infernal": `Elige un tipo de daño (excepto Fuerza) cuando termines un Descanso Corto o Largo. Tienes resistencia a ese tipo de daño hasta que vuelvas a cambiarlo con este rasgo.`
            },

            14: {
                "Arrojar al Infierno": `Una vez por turno cuando impactas a una criatura con una tirada de ataque, puedes intentar transportarla instantáneamente a través de los Planos Inferiores. La criatura debe superar una tirada de salvación de Carisma contra tu CD de conjuros o desaparece y es arrastrada por un paisaje de pesadilla.

        La criatura recibe 8d10 de daño Psíquico si no es un infernal, y queda con el estado de Incapacitado hasta el final de tu siguiente turno. Después vuelve al espacio que ocupaba o al espacio libre más cercano.

        Una vez uses este rasgo, no puedes volver a usarlo hasta terminar un Descanso Largo, a menos que gastes un espacio de Magia de Pacto (sin acción) para restaurarlo.`
            }
        },

        patrón_del_gran_antiguo: {
            3: {
                "Mente Despierta": `Puedes formar un vínculo telepático entre tu mente y la mente de otra criatura. Como Acción Adicional, elige una criatura que puedas ver dentro de 30 p de ti. Tú y la criatura elegida podéis comunicaros telepáticamente mientras ambos estéis a una distancia de un número de millas igual a tu modificador de Carisma (mínimo de 1 milla).

        Para entenderos, ambos debéis conocer mentalmente un idioma que el otro conozca.

        El vínculo telepático dura un número de minutos igual a tu nivel de Brujo. Termina antes si vuelves a usar este rasgo con otra criatura.`,

                "Hechizos del Gran Antiguo": `La magia de tu patrón asegura que siempre tengas ciertos conjuros preparados. Cuando alcanzas un nivel de Brujo indicado en la tabla, siempre tienes preparados los siguientes hechizos.

        Nivel de Brujo — Hechizos
        3 — Detectar pensamientos, Susurros disonantes, Fuerza fantasmal, Risa horrible de Tasha
        5 — Clarividencia, Hambre de Hadar
        7 — Confusión, Invocar aberración
        9 — Modificar memoria, Telequinesis`,

                "Hechizos Psíquicos": `Cuando lanzas un hechizo de Brujo que inflige daño, puedes cambiar su tipo de daño a Psíquico. Además, cuando lanzas un hechizo de Brujo de Encantamiento o Ilusión, puedes hacerlo sin componentes Verbales ni Somáticos.`
            },

            6: {
                "Combatiente Clarividente": `Cuando formas un vínculo telepático con una criatura usando tu Mente Despierta, puedes obligarla a hacer una tirada de salvación de Sabiduría contra tu CD de conjuros. Si falla, la criatura tiene Desventaja en las tiradas de ataque contra ti, y tú tienes Ventaja en las tiradas de ataque contra esa criatura mientras dure el vínculo.

        Una vez uses este rasgo, no puedes volver a usarlo hasta terminar un Descanso Corto o Largo, a menos que gastes un espacio de Magia de Pacto (sin acción) para restaurarlo.`
            },

            10: {
                "Maldición Eldritch": `Tu patrón alienígena te concede una maldición poderosa. Siempre tienes preparado el hechizo Maldición.

        Cuando lanzas Maldición y eliges una característica, el objetivo también tiene Desventaja en las tiradas de salvación asociadas a esa característica mientras dure el hechizo.`,

                "Escudo del Pensamiento": `Tus pensamientos no pueden ser leídos por telepatía ni otros medios a menos que tú lo permitas. Tienes resistencia al daño Psíquico, y siempre que una criatura te inflige daño Psíquico, esa criatura recibe la misma cantidad de daño que tú recibes.`
            },

            14: {
                "Crear Esbirro": `Cuando lanzas Invocar aberración, puedes modificarlo para que no requiera Concentración. Si lo haces, la duración pasa a ser de 1 minuto.

        Además, la aberración invocada obtiene Puntos de Golpe temporales iguales a tu nivel de Brujo + tu modificador de Carisma.

        La primera vez en cada turno que la aberración golpea a una criatura afectada por tu Maldición, inflige daño Psíquico adicional igual al bonificador de daño de ese hechizo.`
            }
        },

        abjurador: {
            3: {
                "Erudito de la Abjuración": `Elige dos conjuros de Mago de la escuela de Abjuración, cada uno de nivel 2 o inferior, y añádelos a tu libro de conjuros gratis.

        Además, cada vez que obtienes acceso a un nuevo nivel de espacios de conjuro en esta clase, puedes añadir un conjuro de Mago de la escuela de Abjuración a tu libro de conjuros gratis. El conjuro debe ser de un nivel para el que tengas espacios.`,

                "Barrera Arcana": `Puedes tejer magia a tu alrededor para protegerte. Cuando lanzas un conjuro de Abjuración usando un espacio de conjuro, puedes crear simultáneamente una barrera mágica sobre ti que dura hasta terminar un Descanso Largo.

        La barrera tiene un máximo de Puntos de Golpe igual a 2 veces tu nivel de Mago + tu modificador de Inteligencia.

        Cuando recibes daño, la barrera lo absorbe primero. Si tienes Resistencias o Vulnerabilidades, se aplican antes de reducir los Puntos de Golpe de la barrera.

        Si el daño reduce la barrera a 0, tú recibes el daño restante. Mientras esté a 0, no puede absorber daño, pero su magia permanece.

        Cada vez que lanzas un conjuro de Abjuración usando un espacio, la barrera recupera Puntos de Golpe iguales a 2 veces el nivel del espacio usado.

        Alternativamente, como Acción adicional, puedes gastar un espacio de conjuro para restaurar la barrera por el doble del nivel del espacio gastado.

        Una vez creada, no puedes volver a crearla hasta terminar un Descanso Largo.`
            },

            6: {
                "Barrera Proyectada": `Cuando una criatura que veas a 30p recibe daño, puedes usar tu Reacción para hacer que tu Barrera Arcana absorba ese daño.

        Si esto reduce la barrera a 0, la criatura recibe el daño restante.

        Las Resistencias o Vulnerabilidades del objetivo se aplican antes de reducir la barrera.`
            },

            10: {
                "Rompehechizos": `Siempre tienes preparados los conjuros Contraconjuro y Disipar Magia.

        Además, puedes lanzar Disipar Magia como Acción adicional y añades tu Bonificador de Competencia a la tirada del conjuro.

        Cuando lanzas cualquiera de estos conjuros usando un espacio de conjuro, el espacio no se gasta si el conjuro no tiene éxito.`
            },

            14: {
                "Resistencia a la Magia": `Tienes Ventaja en las tiradas de salvación contra conjuros.

        Además, tienes Resistencia al daño causado por conjuros.`
            }
        },

        cantante_de_espadas: {
            3: {
                "Canción de la Hoja": `Como Acción adicional, invocas una magia élfica llamada Canción de la Hoja, siempre que no lleves armadura ni escudo.

        La Canción de la Hoja dura 1 minuto y termina antes si quedas incapacitado, si te pones armadura o escudo, o si usas dos manos para atacar con un arma. Puedes terminarla antes (sin acción).

        Mientras está activa, obtienes los siguientes beneficios:

        Agilidad. Obtienes un bono a la CA igual a tu modificador de Inteligencia (mínimo +1), y tu Velocidad aumenta en 10p. Además, tienes Ventaja en pruebas de Acrobacias (Destreza).

        Estilo de Hoja. Cuando atacas con un arma con la que tienes competencia, puedes usar tu modificador de Inteligencia en lugar de Fuerza o Destreza para tiradas de ataque y daño.

        Concentración. Cuando hagas una tirada de salvación de Constitución para mantener Concentración, puedes añadir tu modificador de Inteligencia al resultado.

        Puedes usar esta habilidad un número de veces igual a tu modificador de Inteligencia (mínimo 1). Recuperas todos los usos en un Descanso Largo, y recuperas 1 uso al usar Recuperación Arcana.`,

                "Entrenamiento en Guerra y Canto": `Obtienes competencia con todas las armas marciales cuerpo a cuerpo que no tengan la propiedad Dos Manos ni Pesada.

        Puedes usar un arma cuerpo a cuerpo con la que tengas competencia como foco de lanzamiento de conjuros de Mago.

        Además, eliges una competencia en una de las siguientes habilidades: Acrobacias, Atletismo, Interpretación o Persuasión.`
            },

            6: {
                "Ataque Extra": `Puedes atacar dos veces en lugar de una cuando realizas la acción de Ataque en tu turno.

        Además, puedes sustituir uno de esos ataques por el lanzamiento de un truco de Mago cuyo tiempo de lanzamiento sea de 1 acción.`
            },

            10: {
                "Canción de Defensa": `Cuando recibes daño mientras la Canción de la Hoja está activa, puedes usar tu Reacción para gastar un espacio de conjuro y reducir el daño recibido en una cantidad igual a 5 veces el nivel del espacio gastado.`
            },

            14: {
                "Canción de Victoria": `Después de lanzar un conjuro con tiempo de lanzamiento de 1 acción, puedes realizar un ataque con arma como Acción adicional.`
            }
        },

        adivino: {
            3: {
                "Erudito de la Adivinación": `Elige dos conjuros de Mago de la escuela de Adivinación, cada uno de nivel 2 o inferior, y añádelos a tu libro de conjuros gratis.

        Además, cada vez que obtienes acceso a un nuevo nivel de espacios de conjuro en esta clase, puedes añadir un conjuro de Mago de la escuela de Adivinación a tu libro de conjuros gratis. El conjuro debe ser de un nivel para el que tengas espacios.`,

                "Presagio": `Las visiones del futuro empiezan a presionar tu mente.

        Cada vez que terminas un Descanso Largo, tira 2d20 y anota los resultados. Puedes sustituir cualquier tirada de un d20 (tanto tuya como de una criatura que puedas ver) por uno de estos resultados.

        Debes decidirlo antes de la tirada, y solo puedes reemplazar una tirada por turno.

        Cada resultado solo puede usarse una vez. Cuando terminas un Descanso Largo, pierdes los resultados no usados.`
            },

            6: {
                "Adivinación Experta": `Lanzar conjuros de Adivinación te resulta tan sencillo que apenas consume tus recursos mágicos.

        Cuando lanzas un conjuro de Adivinación usando un espacio de nivel 2 o superior, recuperas un espacio de conjuro gastado.

        El espacio recuperado debe ser de un nivel inferior al usado y no puede ser superior a nivel 5.`
            },

            10: {
                "Tercer Ojo": `Puedes aumentar tus capacidades de percepción. Como Acción adicional, eliges uno de los siguientes beneficios, que dura hasta que termines un Descanso Corto o Largo:

        Visión en la Oscuridad. Obtienes Visión en la Oscuridad a 120p.

        Comprensión Superior. Puedes leer cualquier idioma.

        Ver Invisibilidad. Puedes lanzar Ver Invisibilidad sin gastar un espacio de conjuro.

        No puedes volver a usar esta característica hasta terminar un Descanso Corto o Largo.`
            },

            14: {
                "Presagio Mayor": `Tus visiones se intensifican y son más precisas.

        Cuando uses tu rasgo Presagio, tiras 3d20 en lugar de 2.`
            }
        },

        orden_de_los_matafantasmas: {
            3: {
                "Rito del Alba":`Cuando te unes a esta orden en nivel 3, aprendes el Rito del Alba como parte de tu Rasgo de Rito Carmesí. Cuando activas el Rito del Alba, el daño adicional que inflige tu rito es daño radiante. Además, mientras ese rito esté activo en tu arma, obtienes los siguientes beneficios:

        Tu arma emite luz brillante en un radio de 20 p.
        Tienes resistencia al daño necrótico.
        Cuando impactas a una criatura no muerta con un arma en la que el Rito del Alba está activo, tiras un dado adicional de hemocraft al determinar el daño extra del rito.`,

                "Especialista en maldiciones":`A partir de nivel 3, aprendes a dominar las maldiciones de sangre. Obtienes un uso adicional de tu rasgo Maldición de Sangre. Además, tus maldiciones de sangre pueden afectar a cualquier criatura, tenga sangre o no.`
            },

            7: {
                "Paso Etéreo":`Al alcanzar el nivel 7, al inicio de tu turno, puedes entrar mágicamente en el velo entre planos siempre que no estés incapacitado. Puedes moverte a través de criaturas y objetos como si fueran terreno difícil, así como ver y afectar criaturas y objetos en el Plano Etéreo. Recibes 1d10 de daño de fuerza si terminas tu turno dentro de un objeto.

        Este rasgo dura un número de asaltos igual a tu modificador de Hemocraft (mínimo 1 asalto). Si estás dentro de un objeto cuando termina, eres expulsado inmediatamente al espacio desocupado más cercano y recibes daño de fuerza igual al doble del número de p que te hayas movido.

        Una vez usas este rasgo, debes terminar un descanso corto o largo antes de volver a usarlo. Puedes usar Paso Etéreo dos veces entre descansos a partir del nivel 15.`
            },

            11: {
                "Marca de Desgarro":`A partir de nivel 11, tu Marca de Castigo expone un fragmento de la esencia de tu enemigo, dejándolo vulnerable a tu Rasgo de Rito Carmesí. Siempre que impactas a una criatura con un arma en la que tengas un rito carmesí activo, tiras un dado adicional de hemocraft al determinar el daño extra del rito. Además, si una criatura marcada tiene el rasgo Movimiento Incorpóreo o uno similar, no puede atravesar criaturas u objetos mientras esté marcada.`
            },

            15: {
                "Maldición de Sangre del Exorcista":`En nivel 15, perfeccionas tu hemocraft para arrancar la corrupción de las mentes y cuerpos de tus aliados, y castigar a los responsables. Obtienes la Maldición de Sangre del Exorcista para tu rasgo Maldición de Sangre. Esto no cuenta para el número de maldiciones de sangre que conoces.`
            },

            18: {
                "Revivir del Rito":`Al alcanzar nivel 18, aprendes a proteger tu vida menguante reabsorbiendo la energía que alimenta tus armas. Si tienes uno o más ritos carmesí activos y eres reducido a 0 puntos de golpe pero no mueres instantáneamente, puedes elegir que todos tus ritos carmesí activos finalicen y, en su lugar, quedarte con 1 punto de golpe.`
            }
        },

        orden_del_licántropo: {
            3: {
                "Sentidos Agudizados":`Cuando eliges este arquetipo en nivel 3, obtienes los sentidos mejorados de un depredador natural. Tienes ventaja en las pruebas de Sabiduría (Percepción) que dependan del oído o el olfato.`,
                
                "Transformación Híbrida":`También en nivel 3, aprendes a controlar la maldición de licantropía que corre por tus venas. Como acción adicional, te transformas en una forma híbrida special durante hasta 1 hora. Puedes hablar, usar equipo y llevar armadura mientras estás en esta forma, y puedes volver a tu forma normal como acción adicional. Vuelves automáticamente a tu forma normal si quedas inconsciente o mueres.

        Este rasgo reemplaza las reglas de licantropía del Manual de Monstruos. Una vez usas este rasgo, debes terminar un descanso corto o largo antes de volver a usarlo. Mientras estás transformado, obtienes los siguientes beneficios:

        Fuerza Feral. Tienes ventaja en pruebas de Fuerza y tiradas de salvación de Fuerza, y obtienes un bonificador de +1 al daño cuerpo a cuerpo. Este bonificador aumenta a +2 en nivel 11 y a +3 en nivel 18.

        Piel Resistente. Tienes resistencia al daño contundente, perforante y cortante de ataques no mágicos que no sean realizados con armas plateadas. Además, mientras no lleves armadura pesada, obtienes un bonificador de +1 a la CA.

        Ataques Depredadores. Puedes aplicar tu rasgo Rito Carmesí a tus ataques desarmados, tratándolos como un arma. Puedes usar Destreza en lugar de Fuerza para las tiradas de ataque y daño de tus ataques desarmados, que infligen 1d6 de daño contundente o cortante (a tu elección). Este daño aumenta a 1d8 en nivel 11.
        Además, cuando usas la acción de Ataque para hacer un ataque desarmado, puedes hacer un ataque desarmado adicional como acción adicional.

        Sed de Sangre. Si comienzas tu turno con menos puntos de golpe que la mitad de tu máximo, debes superar una tirada de salvación de Sabiduría CD 8 o moverte directamente hacia la criatura más cercana y usar la acción de Ataque contra ella. Si estás concentrando un hechizo o bajo un efecto que impide la concentración, fallas automáticamente esta tirada.
        Si tienes el rasgo Ataque Extra, puedes elegir usarlo durante este ataque frenético. Si hay más de una criatura igualmente cercana, determina el objetivo al azar. Una vez resuelto el ataque, recuperas el control de ti mismo.`
            },

            7: {
                "Destreza del Acechador":`En nivel 7, tu velocidad aumenta en 10 p, y añades 10 p a tu distancia de salto largo y 3 p a tu salto alto. Tu forma híbrida también obtiene el siguiente beneficio:

        Ataques Depredadores Mejorados. Obtienes un bonificador de +1 a las tiradas de ataque con tus ataques desarmados. Este bonificador aumenta a +2 en nivel 11 y a +3 en nivel 18. Además, cuando tienes un rito carmesí activo en tus ataques desarmados mientras estás en forma híbrida, estos ataques se consideran mágicos para superar resistencias e inmunidades a ataques y daño no mágicos.`
            },

            11: {
                "Transformación Avanzada":`En nivel 11, aprendes a desatar y controlar más de la bestia interior. Puedes usar tu rasgo Transformación Híbrida dos veces, recuperando todos los usos tras un descanso corto o largo. Tu forma híbrida también obtiene el siguiente beneficio:

        Regeneración Licántropa. Al inicio de cada uno de tus turnos, si tienes al menos 1 punto de golpe pero menos de la mitad de tu máximo, recuperas puntos de golpe iguales a 1 + tu modificador de Constitución (mínimo 1). Si estás en forma híbrida, obtienes estos puntos antes de realizar la tirada de salvación por tu sed de sangre.`
            },

            15: {
                "Marca del Voraz":`A partir de nivel 15, tienes ventaja en la tirada de salvación contra tu sed de sangre mientras estás en forma híbrida. Además, tu Marca de Castigo puede ahora vincular a un enemigo a tu ferocidad de cazador. Mientras estás en forma híbrida, tienes ventaja en las tiradas de ataque contra una criatura marcada por ti.`
            },

            18: {
                "Maestría de Transformación Híbrida":`En nivel 18, has dominado a tu depredador interior. Puedes usar tu rasgo Transformación Híbrida un número ilimitado de veces, y tu forma híbrida dura hasta que decidas volver a tu forma normal, quedes inconsciente o mueras.

        También obtienes la Maldición de Sangre del Aullido para tu rasgo Maldición de Sangre. Esto no cuenta para el número de maldiciones de sangre que conoces.`
            }
        },

        orden_del_mutante: {
            3: {
                "Mutagénica":`Cuando eliges este arquetipo en nivel 3, aprendes a dominar fórmulas alquímicas prohibidas —conocidas como mutágenos— que pueden alterar temporalmente tus capacidades mentales y físicas.

        Como acción adicional, consumes un mutágeno, cuyos efectos y efectos secundarios duran hasta que termines un descanso corto o largo, a menos que se indique lo contrario. Mientras uno o más mutágenos te estén afectando, puedes usar una acción para concentrarte y purgar todos los mutágenos de tu sistema, terminando sus efectos y efectos secundarios.

        Los mutágenos están diseñados para la biología específica del personaje que los crea, y no tienen efecto en otras criaturas. Además, son inestables por naturaleza, perdiendo su potencia con el tiempo y volviéndose inertes si no se usan antes de terminar tu siguiente descanso corto o largo.

        Nivel de Blood Hunter	Mutágenos creados	Fórmulas conocidas
        3	1	4
        7	2	5
        11	2	6
        15	3	7
        18	3	8

        Fórmulas. La cantidad de mutágenos que puedes crear al terminar un descanso y el número de fórmulas que conoces aumenta a medida que subes de nivel en Blood Hunter, como se muestra en la tabla anterior. Además, cuando aprendes una nueva fórmula de mutágeno, puedes reemplazar una que ya conozcas por otra nueva. Comienzas eligiendo cuatro fórmulas de mutágeno y puedes crear un mutágeno al terminar un descanso corto o largo.`
            },
            7: {
                "Metabolismo Extraño":`Cuando alcanzas nivel 7, tu cuerpo comienza a adaptarse a toxinas y venenos, ignorando sus efectos corruptores. Obtienes inmunidad al daño por veneno y a la condición envenenado.

        Además, puedes activar una descarga de adrenalina que te permite resistir temporalmente los efectos negativos de un mutágeno. Como acción adicional, puedes ignorar el efecto secundario negativo de un mutágeno que te esté afectando durante 1 minuto. Una vez que lo haces, no puedes volver a hacerlo hasta terminar un descanso largo.`
            },
            11: {
                "Marca del Axioma":`En nivel 11, tu hemocraft mutagénico permite que tu Marca de Castigo revele la verdadera naturaleza de un enemigo. Cualquier ilusión o invisibilidad activa sobre una criatura cuando la marcas termina, y la criatura no puede beneficiarse de invisibilidad o efectos de ilusión mientras esté marcada por ti.

        Si una criatura marcada por ti está en una forma alternativa (mediante el conjuro Polimorfar, la acción Cambiar Forma o el rasgo Cambiaformas, la habilidad Forma Salvaje u otros efectos similares), debe superar una tirada de salvación de Sabiduría o volver a su forma verdadera y quedar aturdida hasta el final de tu siguiente turno.

        Cada vez que una criatura marcada intente alterar su forma, debe superar una tirada de salvación de Sabiduría o el intento falla y queda aturdida hasta el final de tu siguiente turno.`
            },
            15: {
                "Maldición de Sangre de Corrosión":`A partir de nivel 15, tu maldición de sangre puede infundir el cuerpo de una criatura con toxinas terribles. Obtienes la Maldición de Sangre de la Corrosión para tu rasgo Maleficio de Sangre. Esto no cuenta contra tu número de maldiciones de sangre conocidas.`
            },
            18: {
                "Mutación Exaltada":`En nivel 18, tu cuerpo se ha adaptado para producir mutágenos de forma natural en momentos de necesidad. Como acción adicional, eliges un mutágeno que te esté afectando actualmente. Sus efectos y efectos secundarios terminan, y puedes hacer que inmediatamente un mutágeno cuya fórmula conozcas surta efecto en su lugar.

        Puedes usar esta característica un número de veces igual a tu modificador de Hemocraft (mínimo de una vez). Recuperas todos los usos gastados al terminar un descanso largo.`
            }
        },

        orden_del_alma_profana: {
            3: {
                "Patrón de Otro Mundo":`Cuando alcanzas el nivel 3, haces un pacto con una entidad de otro mundo de tu elección:

        Patrón de Otro Mundo	Fuente
        El Archifey, el Infernal o el Gran Antiguo	PHB
        El Imperecedero	SCAG
        El Celestial o la Hoja Maldita	XGE
        El Insondable o el Genio	TCE
        El No Muerto	VRGR

        La elección que hagas mejora algunas de las características de tu subclase, como se indica a continuación.`,
                
                "Magia de Pacto":`Cuando alcanzas el nivel 3, puedes potenciar tus técnicas de combate con la capacidad de lanzar hechizos. Los hechizos que puedes aprender se encuentran en la lista de hechizos de brujo.

        Trucos. Aprendes dos trucos de tu elección de la lista de hechizos de brujo. Aprendes un truco adicional de brujo a nivel 10.

        Espacios de hechizo. La tabla de lanzamiento de conjuros del Alma Profana muestra cuántos espacios de hechizo tienes. Todos tus espacios son del mismo nivel. Recuperas todos los espacios gastados al finalizar un descanso corto o largo.

        Hechizos conocidos de nivel 1+. A nivel 3, conoces dos hechizos de nivel 1 de tu elección de la lista de brujo.

        A medida que subes de nivel, aprendes más hechizos según la tabla. También puedes cambiar uno de tus hechizos conocidos al subir de nivel, siempre que sea de un nivel que puedas lanzar.

        Característica de lanzamiento. Tu característica de hemocraft (Inteligencia o Sabiduría) es tu característica para lanzar estos hechizos.

        CD de salvación = 8 + bonificador por competencia + modificador de hemocraft  
        Modificador de ataque = bonificador por competencia + modificador de hemocraft`,

                "Foco del Rito":`A partir de nivel 3, tu arma se convierte en un conducto del poder de tu pacto. Mientras tengas un rito carmesí activo, puedes usar tu arma como foco de lanzamiento de hechizos y obtienes un beneficio según tu patrón:

        El Archifey. La criatura dañada brilla tenuemente hasta el final de tu siguiente turno y no se beneficia de cobertura ni invisibilidad.

        El Celestial. Como acción adicional, gastas un uso de Maldición de Sangre para curar a una criatura a 60 p de ti, recuperando 1 dado de hemocraft + tu modificador (mínimo +1).

        El Insondable. Puedes respirar bajo el agua. Además, una vez por turno, reduces en 10 p la velocidad de una criatura dañada hasta el inicio de tu siguiente turno.

        El Infernal. Con el Rito de la Llama, si sacas 1 o 2 en el daño extra, puedes repetir la tirada.

        El Genio. Como acción adicional, obtienes velocidad de vuelo de 30 p durante un número de asaltos igual a tu modificador de hemocraft.

        El Gran Antiguo. En un crítico, la criatura y otras a 10 p quedan asustadas hasta el final de tu siguiente turno.

        La Hoja Maldita. Tras aplicar una maldición de sangre, el siguiente golpe inflige daño adicional igual a tu bonificador por competencia.

        El No Muerto. Cuando recibes daño necrótico, puedes usar tu reacción para reducirlo a la mitad.

        El Imperecedero. Cuando reduces a 0 PV a una criatura hostil, recuperas 1 dado de hemocraft en puntos de vida.`
            },

            7: {
                "Frenesí Místico":"Cuando usas tu acción para lanzar un truco, puedes hacer un ataque con arma como acción adicional.",

                "Arcano Revelado":`Tu patrón te otorga un hechizo según tu pacto. Puedes lanzarlo usando un espacio de pacto y no puedes volver a hacerlo hasta terminar un descanso largo.

        El Archifey: Desenfoque  
        El Celestial: Restauración menor  
        El Insondable: Ráfaga de viento  
        El Infernal: Rayo abrasador  
        El Genio: Fuerza fantasmal  
        El Gran Antiguo: Detectar pensamientos  
        La Hoja Maldita: Golpe marcial  
        El No Muerto: Ceguera/Sordera  
        El Imperecedero: Silencio`
            },

            11: {
                "Marca de la Cicatriz Debilitante":"Una criatura marcada por ti tiene desventaja en las tiradas de salvación contra tus hechizos de brujo."
            },

            15: {
                "Arcano Liberado":`Tu patrón te otorga un hechizo adicional que puedes lanzar sin gastar espacio de hechizo. No puedes volver a usarlo hasta terminar un descanso largo.

        El Archifey: Lentitud  
        El Celestial: Revivificar  
        El Insondable: Rayo relampagueante  
        El Infernal: Bola de fuego  
        El Genio: Protección contra la energía  
        El Gran Antiguo: Prisa  
        La Hoja Maldita: Parpadeo  
        El No Muerto: Hablar con los muertos  
        El Imperecedero: Imponer maldición`
            },

            18: {
                "Maldición de Sangre del Devorador de Almas":"Obtienes la Maldición de Sangre del Devorador de Almas. No cuenta para tu número de maldiciones conocidas."
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