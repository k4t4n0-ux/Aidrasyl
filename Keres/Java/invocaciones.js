document.addEventListener("DOMContentLoaded", () => {
    crearSistemaDotes({
        contenedorId: "bloqueInvocaciones",
        titulo: "Otros",
        tipoTexto: "Otro",
        db: invocacionesDB,
        storageKey: "invocaciones"
    });
});

const invocacionesDB = {

    "Invocaciones: Agonizing Blast": {
        descripcion: `
Requisito previo: Brujo nivel 2+, truco de brujo que haga daño.

Elige uno de tus trucos de brujo que inflija daño. Puedes añadir tu modificador de Carisma a las tiradas de daño de ese hechizo.

Repetible. Puedes elegir esta invocación varias veces, cada vez con un truco diferente.
        `
    },

    "Invocaciones: Armor of Shadows": {
        descripcion: `
Puedes lanzar Armadura de mago sobre ti mismo sin gastar un espacio de conjuro.
        `
    },

    "Invocaciones: Ascendant Step": {
        descripcion: `
Requisito previo: Brujo nivel 5+

Puedes lanzar Levitar sobre ti mismo sin gastar un espacio de conjuro.
        `
    },

    "Invocaciones: Devil’s Sight": {
        descripcion: `
Requisito previo: Brujo nivel 2+

Puedes ver con normalidad en luz tenue y oscuridad, tanto mágica como no mágica, hasta 120 pies.
        `
    },

    "Invocaciones: Devouring Blade": {
        descripcion: `
Requisito previo: Brujo nivel 12+, invocación Hoja sedienta

El Ataque Extra de Hoja sedienta te concede dos ataques adicionales en lugar de uno.
        `
    },

    "Invocaciones: Eldritch Mind": {
        descripcion: `
Tienes ventaja en tiradas de salvación de Constitución para mantener la concentración.
        `
    },

    "Invocaciones: Eldritch Smite": {
        descripcion: `
Requisito previo: Brujo nivel 5+, Pacto de la hoja

Una vez por turno, cuando impactas con tu arma de pacto, puedes gastar un espacio de conjuro para hacer 1d8 de daño de fuerza adicional +1d8 por nivel del espacio.
Además, puedes derribar al objetivo si es Grande o menor.
        `
    },

    "Invocaciones: Eldritch Spear": {
        descripcion: `
Requisito previo: Brujo nivel 2+, truco que haga daño

Elige un truco con alcance de al menos 10 pies. Su alcance aumenta en 30 pies por nivel de brujo.

Repetible. Puedes elegir esta invocación varias veces con distintos trucos.
        `
    },

    "Invocaciones: Fiendish Vigor": {
        descripcion: `
Requisito previo: Brujo nivel 2+

Puedes lanzar Falsa vida sin gastar espacio de conjuro. Obtienes automáticamente el valor máximo de puntos temporales.
        `
    },

    "Invocaciones: Gaze of Two Minds": {
        descripcion: `
Requisito previo: Brujo nivel 5+

Como acción adicional, puedes tocar una criatura voluntaria y ver a través de sus sentidos hasta el final de tu siguiente turno.

Puedes mantener la conexión con acciones adicionales mientras esté en el mismo plano.

Puedes lanzar hechizos desde tu posición o la suya si está a 60 pies.
        `
    },

    "Invocaciones: Gift of the Depths": {
        descripcion: `
Requisito previo: Brujo nivel 5+

Puedes respirar bajo el agua y obtienes velocidad de nado igual a tu velocidad.

Puedes lanzar Respirar bajo el agua una vez sin gastar espacio, recuperándolo tras descanso largo.
        `
    },

    "Invocaciones: Gift of the Protectors": {
        descripcion: `
Requisito previo: Brujo nivel 9+, Pacto del tomo

Una página aparece en tu libro. Criaturas pueden escribir su nombre.

Si bajan a 0 PV sin morir, quedan en 1 PV en su lugar.

Solo se puede usar una vez por descanso largo.
        `
    },

    "Invocaciones: Investment of the Chain Master": {
        descripcion: `
Requisito previo: Brujo nivel 5+, Pacto de la cadena

Tu familiar obtiene:
- Velocidad de vuelo o nado (40 pies)
- Puede atacar como acción adicional
- Puede cambiar daño a necrótico o radiante
- Usa tu CD de hechizos
- Puedes darle resistencia con reacción
        `
    },

    "Invocaciones: Lessons of the First Ones": {
        descripcion: `
Requisito previo: Brujo nivel 2+

Obtienes una dote de origen.

Repetible.
        `
    },

    "Invocaciones: Lifedrinker": {
        descripcion: `
Requisito previo: Brujo nivel 9+, Pacto de la hoja

Una vez por turno haces +1d6 de daño (necrótico, psíquico o radiante).

Puedes gastar un dado de golpe para curarte.
        `
    },

    "Invocaciones: Mask of Many Faces": {
        descripcion: `
Requisito previo: Brujo nivel 2+

Puedes lanzar Disfrazarse sin gastar espacio de conjuro.
        `
    },

    "Invocaciones: Master of Myriad Forms": {
        descripcion: `
Requisito previo: Brujo nivel 5+

Puedes lanzar Alterar el propio aspecto sin gastar espacio.
        `
    },

    "Invocaciones: Misty Visions": {
        descripcion: `
Requisito previo: Brujo nivel 2+

Puedes lanzar Imagen silenciosa sin gastar espacio.
        `
    },

    "Invocaciones: One with Shadows": {
        descripcion: `
Requisito previo: Brujo nivel 5+

En luz tenue u oscuridad puedes volverte invisible sin gastar espacio.
        `
    },

    "Invocaciones: Otherworldly Leap": {
        descripcion: `
Requisito previo: Brujo nivel 2+

Puedes lanzar Salto sin gastar espacio.
        `
    },

    "Invocaciones: Pact of the Blade": {
        descripcion: `
Invocas un arma de pacto.

Puedes usar Carisma para ataques y daño.
Puedes cambiar su tipo de daño a necrótico, psíquico o radiante.

Funciona como foco de hechizos.
        `
    },

    "Invocaciones: Pact of the Chain": {
        descripcion: `
Aprendes Encontrar familiar sin gastar espacio.

Puedes invocar formas especiales (diablillo, pseudodragón, etc.).

Puedes permitir que el familiar ataque usando tu acción.
        `
    },

    "Invocaciones: Pact of the Tome": {
        descripcion: `
Obtienes un Libro de Sombras.

Te da:
- 3 trucos de cualquier clase
- 2 rituales de nivel 1
- Funciona como foco de hechizos
        `
    },

    "Invocaciones: Repelling Blast": {
        descripcion: `
Requisito previo: Brujo nivel 2+, truco con ataque

Cuando impactas, empujas 10 pies al objetivo.

Repetible.
        `
    },

    "Invocaciones: Thirsting Blade": {
        descripcion: `
Requisito previo: Brujo nivel 5+, Pacto de la hoja

Obtienes Ataque Extra con tu arma de pacto.
        `
    },

    "Invocaciones: Visions of Distant Realms": {
        descripcion: `
Requisito previo: Brujo nivel 9+

Puedes lanzar Ojo arcano sin gastar espacio.
        `
    },

    "Invocaciones: Whispers of the Grave": {
        descripcion: `
Requisito previo: Brujo nivel 7+

Puedes lanzar Hablar con los muertos sin gastar espacio.
        `
    },

    "Invocaciones: Witch Sight": {
        descripcion: `
Requisito previo: Brujo nivel 15+

Obtienes visión verdadera de 30 pies.
        `
    },
    "Maniobra: Emboscada": {
        descripcion: `
Cuando haces una tirada de Destreza (Sigilo) o una tirada de Iniciativa, puedes gastar un dado de superioridad y añadirlo a la tirada, a menos que tengas la condición de incapacitado.
        `
    },

    "Maniobra: Cebo y Cambio": {
        descripcion: `
Cuando estás a 5 pies de una criatura en tu turno, puedes gastar un dado de superioridad y cambiarte de lugar con esa criatura, siempre que te muevas al menos 5 pies y la criatura sea voluntaria y no esté incapacitada. Este movimiento no provoca ataques de oportunidad.

Tira el dado de superioridad. Hasta el inicio de tu siguiente turno, tú o la otra criatura (a tu elección) obtiene una bonificación a la CA igual al resultado.
        `
    },

    "Maniobra:Ataque del Comandante": {
        descripcion: `
Cuando realizas la acción de Ataque en tu turno, puedes sustituir uno de tus ataques para dirigir a un aliado a atacar. Elige una criatura voluntaria que pueda verte u oírte y gasta un dado de superioridad.

Esa criatura puede usar su reacción inmediatamente para hacer un ataque con arma o desarmado, añadiendo el dado de superioridad al daño si impacta.
        `
    },

    "Maniobra: Presencia Imponente": {
        descripcion: `
Cuando haces una prueba de Carisma (Intimidación, Interpretación o Persuasión), puedes gastar un dado de superioridad y añadirlo a la tirada.
        `
    },

    "Maniobra: Ataque Desarmante": {
        descripcion: `
Cuando impactas a una criatura con un ataque, puedes gastar un dado de superioridad para intentar desarmarla. Añade el dado al daño.

El objetivo debe superar una tirada de Fuerza o soltar un objeto que esté sosteniendo.
        `
    },

    "Maniobra: Ataque Distractor": {
        descripcion: `
Cuando impactas a una criatura, puedes gastar un dado de superioridad para distraerla. Añade el dado al daño.

El siguiente ataque contra esa criatura antes del inicio de tu siguiente turno tiene ventaja si no lo haces tú.
        `
    },

    "Maniobra: Juego de Pies Evasivo": {
        descripcion: `
Como acción adicional, puedes gastar un dado de superioridad y usar Desplazarse (Disengage).

Además, tira el dado y añade el resultado a tu CA hasta el inicio de tu siguiente turno.
        `
    },

    "Maniobra: Ataque de Finta": {
        descripcion: `
Como acción adicional, puedes gastar un dado de superioridad para fintar contra una criatura a 5 pies.

Tienes ventaja en tu siguiente ataque contra ella este turno. Si impactas, añade el dado al daño.
        `
    },

    "Maniobra: Ataque Provocador": {
        descripcion: `
Cuando impactas a una criatura, puedes gastar un dado de superioridad para provocarla.

Añade el dado al daño. El objetivo debe superar una tirada de Sabiduría o tendrá desventaja al atacar a otros que no seas tú.
        `
    },

    "Maniobra: Ataque en Estocada": {
        descripcion: `
Como acción adicional, puedes gastar un dado de superioridad y usar Correr (Dash).

Si te mueves al menos 5 pies en línea recta antes de un ataque cuerpo a cuerpo, puedes añadir el dado al daño.
        `
    },

    "Maniobra: Ataque de Maniobra": {
        descripcion: `
Cuando impactas a una criatura, puedes gastar un dado de superioridad para permitir que un aliado se mueva.

Ese aliado puede usar su reacción para moverse hasta la mitad de su velocidad sin provocar ataques de oportunidad del objetivo.
        `
    },

    "Maniobra: Ataque Amenazante": {
        descripcion: `
Cuando impactas a una criatura, puedes gastar un dado de superioridad para intentar asustarla.

Añade el dado al daño. El objetivo debe superar una tirada de Sabiduría o quedará asustado hasta el final de tu siguiente turno.
        `
    },

    "Maniobra: Parada": {
        descripcion: `
Cuando una criatura te impacta con un ataque cuerpo a cuerpo, puedes usar tu reacción y gastar un dado de superioridad.

Reduces el daño recibido en el resultado del dado + tu modificador de Fuerza o Destreza.
        `
    },

    "Maniobra: Ataque Preciso": {
        descripcion: `
Cuando fallas un ataque, puedes gastar un dado de superioridad, tirarlo y añadirlo a la tirada de ataque.
        `
    },

    "Maniobra: Ataque Empujón": {
        descripcion: `
Cuando impactas a una criatura, puedes gastar un dado de superioridad para empujarla.

Añade el dado al daño. Si es Grande o menor, debe superar una tirada de Fuerza o ser empujada hasta 15 pies.
        `
    },

    "Maniobra: Arenga": {
        descripcion: `
Como acción adicional, puedes gastar un dado de superioridad para apoyar a un aliado a 30 pies.

Ese aliado obtiene puntos de vida temporales iguales al dado + la mitad de tu nivel de guerrero.
        `
    },

    "Maniobra: Respuesta": {
        descripcion: `
Cuando una criatura falla un ataque cuerpo a cuerpo contra ti, puedes usar tu reacción y gastar un dado de superioridad.

Realizas un ataque contra esa criatura. Si impactas, añades el dado al daño.
        `
    },

    "Maniobra: Ataque Barrido": {
        descripcion: `
Cuando impactas a una criatura con un ataque cuerpo a cuerpo, puedes gastar un dado de superioridad para intentar dañar a otra criatura cercana.

Si la tirada de ataque también impacta a la segunda criatura, recibe daño igual al dado.
        `
    },

    "Maniobra: Evaluación Táctica": {
        descripcion: `
Cuando haces una prueba de Inteligencia (Historia o Investigación) o Sabiduría (Perspicacia), puedes gastar un dado de superioridad y añadirlo a la tirada.
        `
    },

    "Maniobra: Ataque Derribo": {
        descripcion: `
Cuando impactas a una criatura, puedes gastar un dado de superioridad para intentar derribarla.

Añade el dado al daño. Si es Grande o menor, debe superar una tirada de Fuerza o caer derribada.
        `
    },

    "Metamagia: Conjuro Cuidadoso": {
        descripcion: `
    Coste: 1 punto de hechicería

    Cuando lanzas un conjuro que obliga a otras criaturas a hacer una tirada de salvación, puedes proteger a algunas de ellas. Gasta 1 punto de hechicería y elige un número de criaturas hasta tu modificador de Carisma (mínimo una).

    Las criaturas elegidas superan automáticamente la tirada de salvación y no reciben daño si normalmente recibirían la mitad al superar la tirada.
        `
    },

    "Metamagia: Conjuro Distante": {
        descripcion: `
    Coste: 1 punto de hechicería

    Cuando lanzas un conjuro con alcance de al menos 5 pies, puedes duplicar su alcance.

    Si el conjuro es de toque, pasa a tener un alcance de 30 pies.
        `
    },

    "Metamagia: Conjuro Potenciado": {
        descripcion: `
    Coste: 1 punto de hechicería

    Cuando tiras daño para un conjuro, puedes volver a tirar un número de dados de daño hasta tu modificador de Carisma (mínimo uno). Debes usar los nuevos resultados.

    Puedes usar esta opción incluso si ya has usado otra Metamagia en el mismo conjuro.
        `
    },

    "Metamagia: Conjuro Extendido": {
        descripcion: `
    Coste: 1 punto de hechicería

    Cuando lanzas un conjuro con duración de al menos 1 minuto, puedes duplicar su duración (máximo 24 horas).

    Si requiere concentración, tienes ventaja en las tiradas para mantenerla.
        `
    },

    "Metamagia: Conjuro Intensificado": {
        descripcion: `
    Coste: 2 puntos de hechicería

    Cuando lanzas un conjuro que obliga a una criatura a hacer una tirada de salvación, puedes dar desventaja a uno de los objetivos en esa tirada.
        `
    },

    "Metamagia: Conjuro Acelerado": {
        descripcion: `
    Coste: 2 puntos de hechicería

    Cuando lanzas un conjuro que requiere una acción, puedes cambiarlo a acción adicional.

    No puedes usar esto si ya has lanzado un conjuro de nivel 1 o superior en este turno, ni lanzar uno después.
        `
    },

    "Metamagia: Conjuro Buscador": {
        descripcion: `
    Coste: 1 punto de hechicería

    Si haces una tirada de ataque con un conjuro y fallas, puedes repetir la tirada.

    Debes usar el nuevo resultado.

    Puedes usarlo aunque ya hayas aplicado otra Metamagia.
        `
    },

    "Metamagia: Conjuro Sutil": {
        descripcion: `
    Coste: 1 punto de hechicería

    Puedes lanzar el conjuro sin componentes verbales, somáticos ni materiales (excepto los consumidos o con coste).
        `
    },

    "Metamagia: Conjuro Transmutado": {
        descripcion: `
    Coste: 1 punto de hechicería

    Cuando lanzas un conjuro que inflige daño, puedes cambiar su tipo entre:

    Ácido, Frío, Fuego, Rayo, Veneno o Trueno.
        `
    },

    "Metamagia: Conjuro Gemelo": {
        descripcion: `
    Coste: 1 punto de hechicería

    Cuando lanzas un conjuro que puede afectar a más criaturas usando un nivel superior, puedes gastar 1 punto para aumentar su nivel efectivo en 1.
        `
    },

    "Maleficio de Sangre: Ansiedad": {
        descripcion: `
    Como acción adicional, hostigas la mente o el cuerpo de una criatura a 30 pies.

    Hasta el final de tu siguiente turno, tienes ventaja en pruebas de Carisma (Intimidación) contra ella.

    Amplificar: la siguiente tirada de salvación de Sabiduría que haga antes de que termine tiene desventaja.
        `
    },

    "Maleficio de Sangre: Ligadura": {
        descripcion: `
    Como acción adicional, intentas inmovilizar a una criatura Grande o menor a 30 pies.

    Debe superar una salvación de Fuerza o su velocidad se reduce a 0 y no puede usar reacciones hasta el final de tu siguiente turno.

    Amplificar: dura 1 minuto, afecta a cualquier tamaño y puede repetir la salvación al final de cada turno.
        `
    },

    "Maleficio de Sangre: Agonía Hinchada": {
        descripcion: `
    Como acción adicional, maldices a una criatura a 30 pies.

    Tiene desventaja en pruebas de Fuerza y Destreza, y recibe 1d8 de daño necrótico si hace más de un ataque en su turno.

    Amplificar: dura 1 minuto y puede repetir salvación de Constitución al final de cada turno.
        `
    },

    "Maleficio de Sangre: Corrosión": {
        descripcion: `
    Requisito: nivel 15, Orden del Mutante

    Como acción adicional, envenenas a una criatura a 30 pies.

    Puede repetir salvación de Constitución al final de cada turno.

    Amplificar: recibe 4d6 de daño necrótico al aplicarse y cada vez que falle la salvación.
        `
    },

    "Maleficio de Sangre: Exorcista": {
        descripcion: `
    Requisito: nivel 15, Orden del Cazador de Fantasmas

    Como acción adicional, eliges una criatura a 30 pies que esté encantada, asustada o poseída.

    El efecto termina inmediatamente.

    Amplificar: quien causó el efecto recibe 3d6 de daño psíquico y puede quedar aturdido.
        `
    },

    "Maleficio de Sangre: Exposición": {
        descripcion: `
    Cuando una criatura a 30 pies recibe daño, puedes usar tu reacción.

    Pierde resistencias a ese tipo de daño hasta el final de su siguiente turno.

    Amplificar: pierde inmunidad en su lugar, pero gana resistencia hasta el final de su siguiente turno.
        `
    },

    "Maleficio de Sangre: Sin Ojos": {
        descripcion: `
    Cuando una criatura a 30 pies hace un ataque, puedes usar tu reacción.

    Tira tu dado de hemocraft y réstalo a su tirada de ataque.

    Amplificar: se aplica a todos sus ataques ese turno.
        `
    },

    "Maleficio de Sangre: Marioneta Caída": {
        descripcion: `
    Cuando una criatura a 30 pies cae a 0 PV, puedes usar tu reacción.

    Hace inmediatamente un ataque contra un objetivo que elijas.

    Amplificar: puede moverse antes y obtiene bonificador al ataque.
        `
    },

    "Maleficio de Sangre: Aullido": {
        descripcion: `
    Requisito: nivel 18, Orden del Licántropo

    Como acción, emites un aullido aterrador.

    Criaturas a 30 pies deben superar salvación de Sabiduría o quedan asustadas.

    Si fallan por 5+, quedan aturdidas.

    Amplificar: el alcance aumenta a 60 pies.
        `
    },

    "Maleficio de Sangre: Marcado": {
        descripcion: `
    Como acción adicional, marcas a una criatura a 30 pies.

    Hasta el final de tu turno, haces daño extra con tu rito carmesí.

    Amplificar: tu siguiente ataque contra ella tiene ventaja.
        `
    },

    "Maleficio de Sangre: Mente Turbia": {
        descripcion: `
    Como acción adicional, maldices a una criatura concentrándose.

    Tiene desventaja en la siguiente salvación de Constitución para mantener concentración.

    Amplificar: desventaja en todas hasta el final de tu siguiente turno.
        `
    },

    "Maleficio de Sangre: Devorador de Almas": {
        descripcion: `
    Requisito: nivel 18, Orden del Alma Profana

    Cuando una criatura muere a 30 pies, puedes usar tu reacción.

    Hasta tu siguiente turno:
    - Tienes ventaja en ataques
    - Resistencia a todo el daño

    Amplificar: recuperas un espacio de conjuro de brujo.
        `
    },

    "Mutágeno: Éter": {
        descripcion: `
    Requisito: nivel 11

    Obtienes una velocidad de vuelo de 20 pies durante 1 hora.

    Sin embargo, tienes desventaja en pruebas de Fuerza y Destreza durante este tiempo.
        `
    },

    "Mutágeno: Atractivo": {
        descripcion: `
    Tu piel y voz se vuelven maleables.

    Tienes ventaja en pruebas de Carisma.

    Sin embargo, tienes desventaja en tiradas de iniciativa.
        `
    },

    "Mutágeno: Celeridad": {
        descripcion: `
    Tu Destreza aumenta en +3, así como su máximo.

    Sin embargo, tienes desventaja en tiradas de salvación de Sabiduría.

    A nivel 11: +4  
    A nivel 18: +5
        `
    },

    "Mutágeno: Elocuente": {
        descripcion: `
    Tienes ventaja en pruebas de Inteligencia.

    Sin embargo, tienes desventaja en pruebas de Sabiduría.
        `
    },

    "Mutágeno: Crueldad": {
        descripcion: `
    Requisito: nivel 11

    Cuando usas la acción de Ataque, puedes hacer un ataque adicional como acción adicional.

    Sin embargo, tienes desventaja en tiradas de salvación de Inteligencia, Sabiduría y Carisma.
        `
    },

    "Mutágeno: Destreza": {
        descripcion: `
    Tienes ventaja en pruebas de Destreza.

    Sin embargo, tienes desventaja en pruebas de Sabiduría.
        `
    },

    "Mutágeno: Brasas": {
        descripcion: `
    Tienes resistencia al daño de fuego.

    Sin embargo, tienes vulnerabilidad al daño de frío.
        `
    },

    "Mutágeno: Gélido": {
        descripcion: `
    Tienes resistencia al daño de frío.

    Sin embargo, tienes vulnerabilidad al daño de fuego.
        `
    },

    "Mutágeno: Impermeable": {
        descripcion: `
    Tienes resistencia al daño perforante.

    Sin embargo, tienes vulnerabilidad al daño cortante.
        `
    },

    "Mutágeno: Movilidad": {
        descripcion: `
    Eres inmune a las condiciones agarrado y restringido.

    Sin embargo, tienes desventaja en pruebas de Fuerza.

    A nivel 11: también eres inmune a paralizado.
        `
    },

    "Mutágeno: Ojo Nocturno": {
        descripcion: `
    Obtienes visión en la oscuridad de 60 pies.

    Si ya la tienes, aumenta en 60 pies.

    Sin embargo, tienes desventaja en ataques y en Percepción basada en vista bajo luz solar directa.
        `
    },

    "Mutágeno: Perspicaz": {
        descripcion: `
    Tienes ventaja en pruebas de Sabiduría.

    Sin embargo, tienes desventaja en pruebas de Carisma.
        `
    },

    "Mutágeno: Potencia": {
        descripcion: `
    Tu Fuerza aumenta en +3, así como su máximo.

    Sin embargo, tienes desventaja en tiradas de salvación de Destreza.

    A nivel 11: +4  
    A nivel 18: +5
        `
    },

    "Mutágeno: Precisión": {
        descripcion: `
    Requisito: nivel 11

    Tus ataques con arma hacen crítico con 19-20.

    Sin embargo, tienes desventaja en tiradas de salvación de Fuerza.
        `
    },

    "Mutágeno: Rapidez": {
        descripcion: `
    Tu velocidad aumenta en 10 pies.

    Sin embargo, tienes desventaja en pruebas de Inteligencia.

    A nivel 15: +5 pies adicionales.
        `
    },

    "Mutágeno: Reconstrucción": {
        descripcion: `
    Requisito: nivel 7

    Durante 1 hora, al inicio de cada turno, si tienes menos de la mitad de tus PV, recuperas PV igual a tu bonificador de competencia.

    Sin embargo, tu velocidad se reduce en 10 pies.
        `
    },

    "Mutágeno: Sagacidad": {
        descripcion: `
    Tu Inteligencia aumenta en +3, así como su máximo.

    Sin embargo, tienes desventaja en tiradas de salvación de Carisma.

    A nivel 11: +4  
    A nivel 18: +5
        `
    },

    "Mutágeno: Blindado": {
        descripcion: `
    Tienes resistencia al daño cortante.

    Sin embargo, tienes vulnerabilidad al daño contundente.
        `
    },

    "Mutágeno: Inquebrantable": {
        descripcion: `
    Tienes resistencia al daño contundente.

    Sin embargo, tienes vulnerabilidad al daño perforante.
        `
    },

    "Mutágeno: Carmesí": {
        descripcion: `
    Obtienes un uso adicional de tu Rasgo Maldición de Sangre.

    Sin embargo, tienes desventaja en tiradas de salvación contra la muerte.
        `
    },
};

const bloqueInvocaciones = document.getElementById("bloqueInvocaciones");

if (bloqueInvocaciones) {

    bloqueInvocaciones.innerHTML = `
        <div class="dote-bloque-unico">

            <div class="dote-bloque-header">
                <strong>Invocaciones</strong>
            </div>

            <div id="listaInvocaciones"></div>

            <div class="dote-bloque-footer">
                <button id="btnAgregarInvocacion" class="btnAgregarDote">
                    + Añadir Invocación
                </button>
            </div>

        </div>
    `;

    const lista = document.getElementById("listaInvocaciones");
    const btnAgregar = document.getElementById("btnAgregarInvocacion");

    function crearBloqueInvocacion() {

        const contenedor = document.createElement("div");
        contenedor.classList.add("dote-item");

        contenedor.innerHTML = `
            <div class="dote-header">
                <strong class="tituloDote">
                    Invocación
                </strong>

                <div class="dote-header-botones">
                    <button class="toggleDote">▼</button>
                    <button class="btnEliminarDote">✖</button>
                </div>
            </div>

            <div class="dote-body">
                <select class="doteSelect">
                    <option value="">Seleccionar Invocación</option>
                    ${Object.keys(invocacionesDB)
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
            const inv = invocacionesDB[nombre];

            titulo.textContent = nombre ? `Invocación (${nombre})` : `Invocación`;

            if (!inv) {
                info.innerHTML = "";
                return;
            }

            info.innerHTML = `
                <hr>
                <p class="dote-descripcion">${inv.descripcion}</p>
            `;
        });

        btnEliminar.addEventListener("click", () => {
            contenedor.remove();
        });

        lista.appendChild(contenedor);
    }

    crearBloqueInvocacion();
    btnAgregar.addEventListener("click", crearBloqueInvocacion);
}