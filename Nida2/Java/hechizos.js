const STORAGE_KEY = "nida2_hechizos";

document.addEventListener("DOMContentLoaded", () => {

const bloque = document.getElementById("bloquehechizos");
if (!bloque) return;

/* =========================================================
   📊 CONFIGURACIÓN CLASES
========================================================= */

const clasesCompletas = ["bardo","clerigo","druida","hechicero","mago","psionico"];
const clasesMedias = ["artificiero","paladin","explorador"];
const clasesTercio = ["luchador","picaro"];

const subclasesTercioValidas = ["asesino"];
const subclasesCazadorBrujo = ["orden_del_profano"];

/* =========================================================
   📊 TABLAS
========================================================= */

const tablaEspacios = {
1:[2],2:[3],3:[4,2],4:[4,3],5:[4,3,2],6:[4,3,3],
7:[4,3,3,1],8:[4,3,3,2],9:[4,3,3,3,1],10:[4,3,3,3,2],
11:[4,3,3,3,2,1],12:[4,3,3,3,2,1],
13:[4,3,3,3,2,1,1],14:[4,3,3,3,2,1,1],
15:[4,3,3,3,2,1,1,1],16:[4,3,3,3,2,1,1,1],
17:[4,3,3,3,2,1,1,1,1],
18:[4,3,3,3,3,1,1,1,1],
19:[4,3,3,3,3,2,1,1,1],
20:[4,3,3,3,3,2,2,1,1]
};

const tablaBrujo = {
1:{espacios:1,nivel:1},2:{espacios:2,nivel:1},
3:{espacios:2,nivel:2},4:{espacios:2,nivel:2},
5:{espacios:2,nivel:3},6:{espacios:2,nivel:3},
7:{espacios:2,nivel:4},8:{espacios:2,nivel:4},
9:{espacios:2,nivel:5},10:{espacios:2,nivel:5},
11:{espacios:3,nivel:5},12:{espacios:3,nivel:5},
13:{espacios:3,nivel:5},14:{espacios:3,nivel:5},
15:{espacios:3,nivel:5},16:{espacios:3,nivel:5},
17:{espacios:4,nivel:5},18:{espacios:4,nivel:5},
19:{espacios:4,nivel:5},20:{espacios:4,nivel:5}
};

const tablaCazadorBrujo = {
3:{espacios:1,nivel:1},
4:{espacios:1,nivel:1},
5:{espacios:1,nivel:1},
6:{espacios:2,nivel:1},
7:{espacios:2,nivel:2},
8:{espacios:2,nivel:2},
9:{espacios:2,nivel:2},
10:{espacios:2,nivel:2},
11:{espacios:2,nivel:2},
12:{espacios:2,nivel:2},
13:{espacios:2,nivel:3},
14:{espacios:2,nivel:3},
15:{espacios:2,nivel:3},
16:{espacios:2,nivel:3},
17:{espacios:2,nivel:3},
18:{espacios:2,nivel:3},
19:{espacios:2,nivel:4},
20:{espacios:2,nivel:4}
};

const tablaMediaHomebrew = {
1:[2,0,0,0,0],
2:[2,0,0,0,0],
3:[3,0,0,0,0],
4:[3,0,0,0,0],
5:[4,2,0,0,0],
6:[4,2,0,0,0],
7:[4,3,0,0,0],
8:[4,3,0,0,0],
9:[4,3,2,0,0],
10:[4,3,2,0,0],
11:[4,3,3,0,0],
12:[4,3,3,0,0],
13:[4,3,3,1,0],
14:[4,3,3,1,0],
15:[4,3,3,2,0],
16:[4,3,3,2,0],
17:[4,3,3,3,1],
18:[4,3,3,3,1],
19:[4,3,3,3,2],
20:[4,3,3,3,2]
};
const tablaTercioHomebrew = {
3:[2,0,0,0],
4:[3,0,0,0],
5:[3,0,0,0],
6:[3,0,0,0],
7:[4,2,0,0],
8:[4,2,0,0],
9:[4,2,0,0],
10:[4,3,0,0],
11:[4,3,0,0],
12:[4,3,0,0],
13:[4,3,2,0],
14:[4,3,2,0],
15:[4,3,2,0],
16:[4,3,3,0],
17:[4,3,3,0],
18:[4,3,3,0],
19:[4,3,3,1],
20:[4,3,3,1]
};

/* =========================================================
   📚 BASE DE CONJUROS
========================================================= */

const baseConjuros = {
    "Salpicadura ácida": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Creas una burbuja ácida en un punto dentro del alcance, donde explota en una esfera de radio de 5 pies. Cada criatura en esa esfera debe tener éxito en un lanzamiento de salvación de Destreza o recibir daño ácido 1d6.",
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 cuando se alcanzan los niveles 5 (2d6), 11 (3d6) y 17 (4d6)."
        }
    },

    "Protección contra armas": {
        nivel: 0,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Cada vez que una criatura realiza una tirada de ataque contra ti antes de que termine el hechizo, el atacante resta 1d4 de la tirada de ataque.",
        ]
    },

    "Toque frío": {
        nivel: 0,
        escuela: "Nigromancia",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Canalizando el frío de la tumba, realiza un ataque cuerpo a cuerpo contra un objetivo a su alcance. En un golpe, el objetivo recibe daño necrótico 1d10 y no puede recuperar puntos de vida hasta el final del siguiente turno."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 cuando se alcanzan los niveles 5 (2d10), 11 (3d10) y 17 (4d10)."
        }
    },

    "Luces danzantes": {
        nivel: 0,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (un poco de fósforo)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas hasta cuatro luces del tamaño de una antorcha dentro del alcance, haciéndolas aparecer como antorchas, linternas u orbes brillantes que flotan durante todo el tiempo. Alternativamente, combinas las cuatro luces en una forma media brillante que es vagamente humana. Cualquiera que sea la forma que elijas, cada luz arroja luz tenue en un radio de 10 pies.",
            "Como acción adicional, puedes mover las luces hasta 60 pies a un espacio dentro del alcance. Una luz debe estar a menos de 20 pies de otra luz creada por este hechizo, y una luz desaparece si excede el alcance del hechizo."
        ]
    },

    "Artesanía druida": {
        nivel: 0,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Susurrando a los espíritus de la naturaleza, creas uno de los siguientes efectos dentro del alcance.",
            "Sensor meteorológico. Creas un efecto sensorial pequeño e inofensivo que predice cuál será el clima en tu ubicación durante las próximas 24 horas. El efecto podría manifestarse como un orbe dorado para cielos despejados, una nube para la lluvia, copos de nieve que caen para la nieve, etc. Este efecto persiste durante 1 ronda.",
            "Florecer. Instantáneamente haces florecer una flor, abrir una vaina de semilla o florecer un capullo de hoja.",
            "Efecto sensorial. Creas un efecto sensorial inofensivo, como la caída de hojas, hadas espectrales bailando, una suave brisa, el sonido de un animal o el leve olor a zorrillo. El efecto debe caber en un cubo de 5 pies.",
            "Juego de fuego. Enciendes o apagas una vela, una antorcha o una fogata."
        ]
    },

    "Explosión sobrenatural": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas un rayo de energía crepitante. Realiza un ataque de hechizo a distancia contra una criatura u objeto dentro del alcance. En un golpe, el objetivo recibe daño de fuerza 1d10."
        ],
        escalado: {
            efecto: "El hechizo crea dos haces en el nivel 5, tres haces en el nivel 11 y cuatro haces en el nivel 17. Puedes dirigir los rayos hacia el mismo objetivo o hacia otros diferentes. Haz una tirada de ataque separada para cada rayo."
        }
    },

    "Elementalismo": {
        nivel: 0,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Ejerces control sobre los elementos, creando uno de los siguientes efectos dentro del alcance.",
            "Aire Convocado. Creas una brisa lo suficientemente fuerte como para ondular la tela, remover el polvo, susurrar hojas y cerrar puertas y contraventanas abiertas, todo en un cubo de 5 pies. Las puertas y contraventanas que alguien o algo mantiene abiertas no se ven afectadas.",
            "Tierra Convocada. Creas una fina capa de polvo o arena que cubre las superficies en un área de 5 pies cuadrados, o haces que aparezca una sola palabra en tu letra en un trozo de tierra o arena.",
            "Fuego Convocado. Creas una fina nube de brasas inofensivas y humo colorido y perfumado en un cubo de 5 pies. Tú eliges el color y el aroma, y las brasas pueden encender velas, antorchas o lámparas en esa zona. El aroma del humo persiste durante 1 minuto.",
            "Agua Convocada. Creas un chorro de niebla fría que humedece ligeramente a criaturas y objetos en un cubo de 5 pies. Alternativamente, creas 1 taza de agua limpia en un recipiente abierto o en una superficie, y el agua se evapora en 1 minuto.",
            "Esculpir elemento. Provocas que la suciedad, la arena, el fuego, el humo, la niebla o el agua que pueden caber en un cubo de 1 pie asuman una forma tosca (como la de una criatura) durante 1 hora."
        ]
    },

    "Rayo de fuego": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas una mota de fuego a una criatura u objeto dentro del alcance. Realiza un ataque de hechizo a distancia contra el objetivo. En un golpe, el objetivo recibe daño de fuego 1d10. Un objeto inflamable golpeado por este hechizo comienza a arder si no está siendo llevado o portado."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 cuando se alcanzan los niveles 5 (2d10), 11 (3d10) y 17 (4d10)."
        }
    },

    "Amigos": {
        nivel: 0,
        escuela: "Encantamiento",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "10p",
        componentes: "S, M (maquillaje)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Emanas mágicamente un sentido de amistad hacia una criatura que puedas ver dentro del alcance. El objetivo debe tener éxito en un lanzamiento de salvación de Sabiduría o tener la condición Encantado durante la duración. El objetivo tiene éxito automáticamente si no es humanoide, si estás luchando contra él, o si has lanzado este hechizo sobre él en las últimas 24 horas.",
            "El hechizo termina temprano si el objetivo recibe daño o si realizas una tirada de ataque, causas daño, o fuerzas a alguien a hacer un lanzamiento de salvación. Cuando el hechizo termina, el objetivo sabe que fue encantado por ti."
        ]
    },

    "Guía": {
        nivel: 0,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Tocas una criatura dispuesta y eliges una habilidad. Hasta que el hechizo termine, la criatura suma 1d4 a cualquier prueba de habilidad usando la habilidad elegida."
        ]
    },

    "Luz": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, M (una luciérnaga o musgo fosforescente)",
        duracion: "1 hora",
        efecto: [
            "Tocas un objeto Grande o más pequeño que no esté siendo llevado o portado por otra persona. Hasta que el hechizo termine, el objeto emite luz brillante en un radio de 20 pies y luz tenue para 20 pies adicionales. La luz puede tener el color que desees.",
            "Cubrir el objeto con algo opaco bloquea la luz. El hechizo termina si lo lanzas de nuevo."
        ]
    },

    "Mano de mago": {
        nivel: 0,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "1 minuto",
        efecto: [
            "Una mano espectral y flotante aparece en un punto que elijas dentro del alcance. La mano dura durante la duración. La mano desaparece si alguna vez está a más de 30 pies de distancia de ti o si lanzas este hechizo de nuevo.",
            "Cuando lanzas el hechizo, puedes usar la mano para manipular un objeto, abrir una puerta o contenedor desbloqueado, guardar o recuperar un objeto de un contenedor abierto, o verter el contenido de una vial.",
            "Como acción de magia en tus turnos posteriores, puedes controlar la mano de nuevo. Como parte de esa acción, puedes mover la mano hasta 30 pies.",
            "La mano no puede atacar, activar objetos mágicos o llevar más de 10 libras."
        ]
    },

    "Reparación": {
        nivel: 0,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "Toque",
        componentes: "V, S, M (dos imanes)",
        duracion: "Instantáneo",
        efecto: [
            "Este hechizo repara un único quiebre o desgarro en un objeto que tocas, como un eslabón de cadena roto, dos mitades de una llave rota, una capa rasgada, o una odre de vino con fugas. Mientras el quiebre o desgarro no sea más grande de 1 pie en ninguna dimensión, lo repares, dejando sin rastro del daño anterior.",
            "Este hechizo puede reparar físicamente un objeto mágico, pero no puede restaurar magia a tal objeto."
        ]
    },

    "Mensaje": {
        nivel: 0,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "S, M (un alambre de cobre)",
        duracion: "1 ronda",
        efecto: [
            "Señalas hacia una criatura dentro del alcance y susurras un mensaje. El objetivo (y solo el objetivo) escucha el mensaje y puede responder en un susurro que solo tú puedas escuchar.",
            "Puedes lanzar este hechizo a través de objetos sólidos si estás familiarizado con el objetivo y sabes que está más allá de la barrera. Silencio mágico; 1 pie de piedra, metal o madera; o una fina lámina de plomo bloquea el hechizo."
        ]
    },

    "Esquirla mental": {
        nivel: 0,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V",
        duracion: "1 ronda",
        efecto: [
            "Intentas dividir temporalmente la mente de una criatura que puedas ver dentro del alcance. El objetivo debe tener éxito en un lanzamiento de salvación de Inteligencia o recibir daño psíquico 1d6 y restar 1d4 del próximo lanzamiento de salvación que realice antes del final de tu siguiente turno."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 cuando se alcanzan los niveles 5 (2d6), 11 (3d6) y 17 (4d6)."
        }
    },

    "Ilusión menor": {
        nivel: 0,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "S, M (un poco de lana)",
        duracion: "1 minuto",
        efecto: [
            "Creas un sonido o una imagen de un objeto dentro del alcance que dura la duración. Mira las descripciones a continuación para los efectos de cada uno. La ilusión termina si lanzas este hechizo de nuevo.",
            "Si una criatura toma una acción de Examen para examinar el sonido o imagen, la criatura puede determinar que es una ilusión con una prueba exitosa de Inteligencia (Investigación) contra tu CD de salvación de hechizo. Si una criatura discrepa la ilusión por lo que es, la ilusión se vuelve pálida para la criatura.",
            "Sonido. Si creas un sonido, su volumen puede variar desde un susurro a un grito. Puede ser tu voz, la voz de alguien más, el rugido de un león, un redoble de tambores, o cualquier otro sonido que elijas. El sonido continúa sin inhibición durante la duración, o puedes hacer sonidos discretos en diferentes momentos antes de que el hechizo termine.",
            "Imagen. Si creas una imagen de un objeto—como una silla, huellas cubiertas de barro, o un pequeño cofre—no debe ser más grande de un cubo de 5 pies. La imagen no puede crear sonido, luz, olor, o ningún otro efecto sensorial. La interacción física con la imagen la revela como ilusión, ya que las cosas pueden pasar a través de ella."
        ]
    },

    "Pulverización de veneno": {
        nivel: 0,
        escuela: "Nigromancia",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Pulverizas niebla tóxica a una criatura dentro del alcance. Realiza un ataque de hechizo a distancia contra el objetivo. En un golpe, el objetivo recibe daño de veneno 1d12."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d12 cuando se alcanzan los niveles 5 (2d12), 11 (3d12) y 17 (4d12)."
        }
    },

    "Prestidigitación": {
        nivel: 0,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "10p",
        componentes: "V, S",
        duracion: "Hasta 1 hora",
        efecto: [
            "Creas un efecto mágico dentro del alcance. Elige el efecto de las opciones a continuación. Si lanzas este hechizo varias veces, puedes tener hasta tres de sus efectos no instantáneos activos a la vez.",
            "Efecto sensorial. Creas un efecto sensorial instantáneo e inofensivo, como una lluvia de chispas, una ráfaga de viento, notas musicales tenues, u un olor extraño.",
            "Juego de fuego. Enciendes o apagas instantáneamente una vela, una antorcha, o una pequeña hoguera.",
            "Limpiar o ensuciar. Limpias o ensucias instantáneamente un objeto no más grande de 1 pie cúbico.",
            "Sensación menor. Enfrías, calientas, o das sabor a hasta 1 pie cúbico de material no viviente durante 1 hora.",
            "Marca mágica. Haces que un color, una pequeña marca, o un símbolo aparezca en un objeto o superficie durante 1 hora.",
            "Creación menor. Creas un objeto mágico o una imagen ilusoria sin magia que puede caber en tu mano. Dura hasta el final de tu siguiente turno. Un objeto no puede causar daño y no tiene valor monetario."
        ]
    },

    "Producir llama": {
        nivel: 0,
        escuela: "Conjuración",
        tipo: "ataque",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "10 minutos",
        efecto: [
            "Una llama parpadeante aparece en tu mano y permanece allí durante la duración. Mientras esté allí, la llama no emite calor e ignora nada, y emite luz brillante en un radio de 20 pies y luz tenue para 20 pies adicionales. El hechizo termina si lo lanzas de nuevo.",
            "Hasta que el hechizo termine, puedes tomar una acción de magia para lanzar fuego a una criatura u objeto a 60 pies de ti. Realiza un ataque de hechizo a distancia. En un golpe, el objetivo recibe daño de fuego 1d8."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 cuando se alcanzan los niveles 5 (2d8), 11 (3d8) y 17 (4d8)."
        }
    },

    "Rayo de escarcha": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Un haz gélido de luz blanca azulada se dirige hacia una criatura dentro del alcance. Realiza un ataque de hechizo a distancia contra el objetivo. En un golpe, recibe daño de frío 1d8 y su velocidad se reduce 10 pies hasta el inicio de tu siguiente turno."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 cuando se alcanzan los niveles 5 (2d8), 11 (3d8) y 17 (4d8)."
        }
    },

    "Resistencia": {
        nivel: 0,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Tocas una criatura dispuesta y eliges un tipo de daño: Ácido, Contundente, Frío, Fuego, Rayo, Necrótico, Perforante, Veneno, Radiante, Cortante, o Trueno. Cuando la criatura recibe daño del tipo elegido antes de que el hechizo termine, la criatura reduce el daño total recibido en 1d4. Una criatura solo puede beneficiarse de este hechizo una vez por turno."
        ]
    },

    "Llama sagrada": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Radiancia similar a llamas desciende sobre una criatura que puedas ver dentro del alcance. El objetivo debe tener éxito en un lanzamiento de salvación de Destreza o recibir daño radiante 1d8. El objetivo no obtiene beneficio de Cobertura Media o Cobertura Tres Cuartos para esta salvación."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 cuando se alcanzan los niveles 5 (2d8), 11 (3d8) y 17 (4d8)."
        }
    },

    "Shillelagh": {
        nivel: 0,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S, M (muérdago)",
        duracion: "1 minuto",
        efecto: [
            "Un club o un báculo que sostienes está imbuido con el poder de la naturaleza. Durante la duración, puedes usar tu habilidad de lanzamiento de hechizos en lugar de Fuerza para las tiradas de ataque y daño de ataques de combate usando esa arma, y el dado de daño del arma se convierte en d8. Si el ataque causa daño, puede ser daño de fuerza o el tipo de daño normal del arma (tu elección).",
            "El hechizo termina temprano si lo lanzas de nuevo o si sueltas el arma."
        ],
        escalado: {
            efecto: "El dado de daño cambia cuando se alcanzan los niveles 5 (d10), 11 (d12) y 17 (2d6)."
        }
    },

    "Agarre de choque": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Rayos emergen de ti hacia una criatura que intentas tocar. Realiza un ataque de hechizo de combate contra el objetivo. En un golpe, el objetivo recibe daño de rayo 1d8, y no puede hacer Ataques de Oportunidad hasta el inicio de su siguiente turno."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 cuando se alcanzan los niveles 5 (2d8), 11 (3d8) y 17 (4d8)."
        }
    },

    "Explosión Sobrenatural": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas energía sobrenatural a una criatura u objeto dentro del alcance. Realiza un ataque de hechizo a distancia contra el objetivo. En un golpe, el objetivo recibe daño 1d8 de un tipo que elijas: Ácido, Frío, Fuego, Rayo, Veneno, Psíquico, o Trueno.",
            "Si sacas un 8 en d8 para este hechizo, puedes tirar otro d8 y sumarlo al daño. Cuando lanzas este hechizo, el número máximo de estos d8 que puedes sumar al daño del hechizo es igual a tu modificador de habilidad de lanzamiento de hechizos."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 cuando se alcanzan los niveles 5 (2d8), 11 (3d8) y 17 (4d8)."
        }
    },

    "Salva a los Moribundos": {
        nivel: 0,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "15p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Elige una criatura dentro del alcance que tenga 0 Puntos de Golpe y no esté muerta. La criatura se vuelve Estable."
        ],
        escalado: {
            efecto: "El alcance se duplica cuando alcanzas los niveles 5 (30 pies), 11 (60 pies) y 17 (120 pies)."
        }
    },

    "Brisa estrellada": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas una mota de luz a una criatura u objeto dentro del alcance. Realiza un ataque de hechizo a distancia contra el objetivo. En un golpe, el objetivo recibe daño radiante 1d8, y hasta el final de tu siguiente turno, emite luz tenue en un radio de 10 pies y no puede beneficiarse de la condición Invisible."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 cuando se alcanzan los niveles 5 (2d8), 11 (3d8) y 17 (4d8)."
        }
    },

    "Taumaturgia": {
        nivel: 0,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V",
        duracion: "Hasta 1 hora",
        efecto: [
            "Manifiestas una maravilla menor dentro del alcance. Creas uno de los efectos a continuación dentro del alcance. Si lanzas este hechizo varias veces, puedes tener hasta tres de sus efectos de 1 minuto activos a la vez.",
            "Ojos alterados. Alteras la apariencia de tus ojos durante 1 minuto.",
            "Voz estruendosa. Tu voz retumba hasta tres veces más fuerte que lo normal durante 1 minuto. Durante la duración, tienes Ventaja en pruebas de Carisma (Intimidación).",
            "Juego de fuego. Haces que las llamas parpadeen, brillen, se oscurezcan, o cambien de color durante 1 minuto.",
            "Mano invisible. Instantáneamente haces que una puerta o ventana desbloqueada vuele abierta o se cierre de golpe.",
            "Sonido fantasmal. Creas un sonido instantáneo que origina de un punto que elijas dentro del alcance, como un retumbo de trueno, el grito de un cuervo, o susurros siniestros.",
            "Temblores. Haces que temblores inofensivos en el terreno duren 1 minuto."
        ]
    },

    "Látigo de espinas": {
        nivel: 0,
        escuela: "Transmutación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (el tallo de una planta espinosa)",
        duracion: "Instantáneo",
        efecto: [
            "Creas un látigo similar a una vid cubierto de espinas que se lanza a tu orden hacia una criatura en el alcance. Realiza un ataque de hechizo de combate contra el objetivo. En un golpe, el objetivo recibe daño perforante 1d6, y si es Grande o más pequeño, puedes atraerlo hasta 10 pies más cerca de ti."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 cuando se alcanzan los niveles 5 (2d6), 11 (3d6) y 17 (4d6)."
        }
    },

    "Estruendo de trueno": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "S",
        duracion: "Instantáneo",
        efecto: [
            "Cada criatura en una emanación de 5 pies originada desde ti debe tener éxito en un lanzamiento de salvación de Constitución o recibir daño de trueno 1d6. El sonido atronador del hechizo puede escucharse hasta 100 pies de distancia."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 cuando se alcanzan los niveles 5 (2d6), 11 (3d6) y 17 (4d6)."
        }
    },

    "Tocar a los Muertos": {
        nivel: 0,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Señalas a una criatura que puedas ver dentro del alcance, y la campaña de una campana lúgubre es audible a 10 pies del objetivo. El objetivo debe tener éxito en un lanzamiento de salvación de Sabiduría o recibir daño necrótico 1d8. Si el objetivo le faltan Puntos de Golpe, recibe daño necrótico 1d12 en su lugar."
        ],
        escalado: {
            efecto: "El daño aumenta en un dado cuando se alcanzan los niveles 5 (2d8 o 2d12), 11 (3d8 o 3d12) y 17 (4d8 o 4d12)."
        }
    },

    "Golpe verdadero": {
        nivel: 0,
        escuela: "Adivinación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "S, M (un arma con la que tengas competencia y que cueste 1+ PM)",
        duracion: "Instantáneo",
        efecto: [
            "Guiado por un destello de intuición mágica, realizas un ataque con el arma usada en el lanzamiento del hechizo. El ataque usa tu habilidad de lanzamiento de hechizos para las tiradas de ataque y daño en lugar de usar Fuerza o Destreza. Si el ataque causa daño, puede ser daño radiante o el tipo de daño normal del arma (tu elección)."
        ],
        escalado: {
            efecto: "Tanto si causas daño radiante o el tipo de daño normal del arma, el ataque causa daño radiante adicional cuando alcanzas los niveles 5 (1d6), 11 (2d6) y 17 (3d6)."
        }
    },

    "Burla viciosa": {
        nivel: 0,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Desatas una serie de insultos impregnados de encantamientos sutiles a una criatura que puedas ver u oír dentro del alcance. El objetivo debe tener éxito en un lanzamiento de salvación de Sabiduría o recibir daño psíquico 1d6 y tener Desventaja en la próxima tirada de ataque que realice antes del final de su siguiente turno."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 cuando se alcanzan los niveles 5 (2d6), 11 (3d6) y 17 (4d6)."
        }
    },

    "Palabra de radiancia": {
        nivel: 0,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, M (un símbolo de rayos de sol)",
        duracion: "Instantáneo",
        efecto: [
            "Radiancia ardiente estalla de ti en una emanación de 5 pies. Cada criatura de tu elección que puedas ver en ella debe tener éxito en un lanzamiento de salvación de Constitución o recibir daño radiante 1d6."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 cuando se alcanzan los niveles 5 (2d6), 11 (3d6) y 17 (4d6)."
        }
    },

    "Alarma": {
        nivel: 1,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "1 minuto o Ritual",
        rango: "30p",
        componentes: "V, S, M (una campana y hilo de plata)",
        duracion: "8 horas",
        efecto: [
            "Estableces una alarma contra intrusiones. Elige una puerta, ventana o área dentro del alcance que no sea más grande de un cubo de 20p. Hasta que el hechizo termine, una alarma te alerta siempre que una criatura toque o entre en el área protegida. Cuando lanzas el hechizo, puedes designar criaturas que no activen la alarma. También eliges si la alarma es audible o mental.",
            "Alarma audible: La alarma produce el sonido de una campana de mano durante 10 segundos dentro de 60p del área protegida.",
            "Alarma mental: Eres alertado por un ping mental si estás dentro de 1 milla del área protegida. Este ping te despierta si estás durmiendo."
        ]
    },

    "Amistad Animal": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (un bocado de comida)",
        duracion: "24 horas",
        efecto: [
            "Apuntas a una Bestia que puedas ver dentro del alcance. El objetivo debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Encantada durante la duración. Si tú o uno de tus aliados inflige daño al objetivo, el hechizo termina."
        ],
        escalado: {
            efecto: "Puedes apuntar a una Bestia adicional para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Armadura de Agatías": {
        nivel: 1,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S, M (un trozo de cristal azul)",
        duracion: "1 hora",
        efecto: [
            "Una escarcha mágica protectora te rodea. Ganas 5 Puntos de Golpe temporales. Si una criatura te golpea con un ataque cuerpo a cuerpo antes de que el hechizo termine, la criatura recibe 5 de daño de frío. El hechizo termina anticipadamente si no tienes Puntos de Golpe temporales."
        ],
        escalado: {
            efecto: "Los Puntos de Golpe temporales y el daño de frío aumentan en 5 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Brazos de Hadar": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Invocando a Hadar, haces que zarcillos broten de ti. Cada criatura en una emanación de 10p originada desde ti realiza una tirada de salvación de Fuerza. Si falla, una criatura recibe daño necrótico 2d6 y no puede tomar Reacciones hasta el inicio de su siguiente turno. Si tiene éxito, una criatura recibe la mitad del daño."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Perdición": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (una gota de sangre)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Hasta tres criaturas de tu elección que puedas ver dentro del alcance deben realizar cada una una tirada de salvación de Carisma. Siempre que un objetivo que falla en esta salvación realiza una tirada de ataque o una tirada de salvación antes de que el hechizo termine, el objetivo debe restar 1d4 de la tirada de ataque o salvación."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Bendición": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (un Símbolo Sagrado que cuesta 5+ MO)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Bendices hasta tres criaturas dentro del alcance. Siempre que un objetivo realiza una tirada de ataque o una tirada de salvación antes de que el hechizo termine, el objetivo suma 1d4 a la tirada de ataque o salvación."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Manos ardientes": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Una fina lámina de llamas brota de ti. Cada criatura en un cono de 15p realiza una tirada de salvación de Destreza, recibiendo daño de fuego 3d6 si falla o la mitad si tiene éxito.",
            "Los objetos inflamables en el cono que no estén siendo llevados o portados comienzan a arder."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Encantar persona": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "1 hora",
        efecto: [
            "Un humanoide que puedas ver dentro del alcance realiza una tirada de salvación de Sabiduría. Lo hace con Ventaja si tú o tus aliados luchan contra él. Si falla, el objetivo tiene la condición Encantado hasta que el hechizo termine o hasta que tú o tus aliados lo dañen. La criatura Encantada te es Amigable. Cuando el hechizo termina, el objetivo sabe que fue Encantado por ti."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Orbe cromático": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (un diamante que cuesta 50+ MO)",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas un orbe de energía a un objetivo dentro del alcance. Elige Ácido, Frío, Fuego, Rayo, Veneno o Trueno como el tipo de orbe que creas, y luego realiza un ataque de hechizo a distancia contra el objetivo. Si golpeas, el objetivo recibe daño 3d8 del tipo elegido.",
            "Si sacas el mismo número en dos o más d8, el orbe salta a un objetivo diferente de tu elección dentro de 30p del objetivo. Realiza una tirada de ataque contra el nuevo objetivo, y haz una nueva tirada de daño."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 1. El orbe puede saltar un máximo de veces igual al nivel del espacio gastado, y una criatura solo puede ser apuntada una vez por cada lanzamiento de este hechizo."
        }
    },

    "Lluvia de color": {
        nivel: 1,
        escuela: "Ilusión",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (un poco de arena colorida)",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas un deslumbrante despliegue de luz intermitente y colorida. Cada criatura en un cono de 15p originado desde ti debe tener éxito en una tirada de salvación de Constitución o tener la condición Cegado hasta el final de tu siguiente turno."
        ]
    },

    "Orden": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Hablas una orden de una palabra a una criatura que puedas ver dentro del alcance. El objetivo debe tener éxito en una tirada de salvación de Sabiduría o seguir la orden en su siguiente turno. Elige la orden de estas opciones:",
            "Acerca. El objetivo se mueve hacia ti por la ruta más corta y directa, terminando su turno si se mueve dentro de 5p de ti.",
            "Suelta. El objetivo suelta lo que lleva y luego termina su turno.",
            "Huye. El objetivo gasta su turno moviéndose lejos de ti por el medio más rápido disponible.",
            "Arrástrate. El objetivo tiene la condición Tendido y luego termina su turno.",
            "Detente. En su turno, el objetivo no se mueve y no realiza ninguna acción ni Acción adicional."
        ],
        escalado: {
            efecto: "Puedes afectar una criatura adicional para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Duelo obligado": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción adicional",
        rango: "30p",
        componentes: "V",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Intentas obligar a una criatura a un duelo. Una criatura que puedas ver dentro del alcance realiza una tirada de salvación de Sabiduría. Si falla, el objetivo tiene Desventaja en tiradas de ataque contra criaturas que no sean tú, y no puede moverse voluntariamente a un espacio que esté más de 30p lejos de ti.",
            "El hechizo termina si realizas una tirada de ataque contra una criatura que no sea el objetivo, si lanzas un hechizo en un enemigo que no sea el objetivo, si un aliado tuyo daña el objetivo, o si terminas tu turno más de 30p lejos del objetivo."
        ]
    },

    "Entender idiomas": {
        nivel: 1,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Yo mismo",
        componentes: "V, S, M (un poco de hollín y sal)",
        duracion: "1 hora",
        efecto: [
            "Durante la duración, entiendes el significado literal de cualquier idioma que escuches o veas firmado. También entiendes cualquier lenguaje escrito que veas, pero debes estar tocando la superficie en la que estén escritas las palabras. Tarda alrededor de 1 minuto leer una página de texto. Este hechizo no descodifica símbolos o mensajes secretos."
        ]
    },

    "Crear o destruir agua": {
        nivel: 1,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (una mezcla de agua y arena)",
        duracion: "Instantáneo",
        efecto: [
            "Haces uno de los siguientes:",
            "Crear agua: Creas hasta 40 litros de agua limpia dentro del alcance en un recipiente abierto. Alternativamente, el agua cae como lluvia en un cubo de 30p dentro del alcance, extinguiendo las llamas expuestas allí.",
            "Destruir agua: Destruyes hasta 40 litros de agua en un recipiente abierto dentro del alcance. Alternativamente, destruyes la niebla en un cubo de 30p dentro del alcance."
        ],
        escalado: {
            efecto: "Creas o destruyes 40 litros adicionales de agua, o el tamaño del cubo aumenta 5p, para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Curar Heridas": {
        nivel: 1,
        escuela: "Abjuración",
        tipo: "curacion",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Una criatura que tocas recupera Puntos de Golpe iguales a 2d8 plus tu modificador de habilidad de lanzamiento de hechizos."
        ],
        escalado: {
            efecto: "La curación aumenta en 2d8 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Detectar el mal y el bien": {
        nivel: 1,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Durante la duración, sientes la ubicación de cualquier Aberración, Celestial, Elemental, Feérico, Demonio o No-muerto dentro de 30p de ti. También sientes si el hechizo Consagración está activo allí y, si es así, dónde.",
            "El hechizo está bloqueado por 1p de piedra, tierra o madera; 1 pulgada (2,5 cm) de metal; o una fina lámina de plomo."
        ]
    },

    "Detectar magia": {
        nivel: 1,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Durante la duración, sientes la presencia de efectos mágicos dentro de 30p de ti. Si sientes tales efectos, puedes tomar la acción de Magia para ver un aura débil alrededor de cualquier criatura u objeto visible en el área que tenga magia, y si un efecto fue creado por un hechizo, aprendes la escuela de magia del hechizo.",
            "El hechizo está bloqueado por 1p de piedra, tierra o madera; 1 pulgada (2,5 cm) de metal; o una fina lámina de plomo."
        ]
    },

    "Detectar veneno y enfermedad": {
        nivel: 1,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Yo mismo",
        componentes: "V, S, M (una hoja de tejo)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Durante la duración, sientes la ubicación de venenos, criaturas venenosas o ponzoñosas, y contagios mágicos dentro de 30p de ti. Sientes el tipo de veneno, criatura o contagio en cada caso.",
            "El hechizo está bloqueado por 1p de piedra, tierra o madera; 1 pulgada (2,5 cm) de metal; o una fina lámina de plomo."
        ]
    },

    "Disfrazarse": {
        nivel: 1,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "1 hora",
        efecto: [
            "Te haces parecer diferente, incluyendo tu ropa, armadura, armas y otras pertenencias en tu persona, hasta que el hechizo termine. Puedes parecer 1p más o menos alto y puedes parecer más pesado o más ligero. Debes adoptar una forma que tenga el mismo arreglo básico de extremidades que tienes. De lo contrario, la medida de la ilusión depende de ti.",
            "Los cambios causados por este hechizo no resisten la inspección física. Por ejemplo, si usas este hechizo para agregar un sombrero a tu disfraz, los objetos atraviesan el sombrero, y cualquiera que lo toque no sentiría nada.",
            "Para discernir que estás disfrazado, una criatura debe tomar la acción de Examinar para inspeccionar tu apariencia y tener éxito en una prueba de Inteligencia (Investigación) contra tu CD de salvación de hechizo."
        ]
    },

    "Susurros discordantes": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Una criatura de tu elección que puedas ver dentro del alcance escucha una melodía discordante en su mente. El objetivo realiza una tirada de salvación de Sabiduría. Si falla, recibe daño psíquico 3d6 y debe usar inmediatamente su Reacción, si está disponible, para alejarse de ti lo más posible, usando la ruta más segura. Si tiene éxito, el objetivo recibe la mitad del daño."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Favor divino": {
        nivel: 1,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "1 minuto",
        efecto: [
            "Hasta que el hechizo termine, tus ataques con armas infligen daño radiante adicional 1d4 en un golpe."
        ]
    },

    "Castigo divino": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear un objetivo con un arma de combate o un ataque desarmado",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "El objetivo recibe daño radiante adicional 2d8 del ataque. El daño aumenta en 1d8 si el objetivo es un Demonio o un No-muerto."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Golpe envolvente": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear una criatura con un arma",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Cuando golpeas el objetivo, aparecen zarcillos agarradores en él, y realiza una tirada de salvación de Fuerza. Una criatura Grande o más grande tiene Ventaja en esta salvación. Si falla, el objetivo tiene la condición Restringido hasta que el hechizo termine. Si tiene éxito, los zarcillos se marchitan y el hechizo termina.",
            "Mientras está Restringido, el objetivo recibe daño perforante 1d6 al inicio de cada uno de sus turnos. El objetivo o una criatura dentro del alcance del mismo puede tomar una acción para realizar una prueba de Fuerza (Atletismo) contra tu CD de salvación de hechizo. Si tiene éxito, el hechizo termina."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Enredar": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Plantas agarradoras brotan del suelo en un cuadrado de 20p dentro del alcance. Durante la duración, estas plantas convierten el terreno en el área en Terreno difícil. Desaparecen cuando el hechizo termina.",
            "Cada criatura (que no seas tú) en el área cuando lanzas el hechizo debe tener éxito en una tirada de salvación de Fuerza o tener la condición Restringida hasta que el hechizo termine. Una criatura Restringida puede tomar una acción para realizar una prueba de Fuerza (Atletismo) contra tu CD de salvación de hechizo. Si tiene éxito, se libera de las plantas agarradoras y ya no está Restringida por ellas."
        ]
    },

    "Retirada expedita": {
        nivel: 1,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Tomas la acción de Carrera, y hasta que el hechizo termine, puedes tomar esa acción de nuevo como una Acción adicional."
        ]
    },

    "Fuego feérico": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Los objetos en un cubo de 20p dentro del alcance están delineados en luz azul, verde o violeta (tu elección). Cada criatura en el cubo también está delineada si falla una tirada de salvación de Destreza. Durante la duración, los objetos y las criaturas afectadas emiten Luz tenue en un radio de 10p y no pueden beneficiarse de la condición Invisible.",
            "Las tiradas de ataque contra una criatura u objeto afectado tienen Ventaja si el atacante puede verlo."
        ]
    },

    "Vida falsa": {
        nivel: 1,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una gota de alcohol)",
        duracion: "Instantáneo",
        efecto: [
            "Ganas Puntos de Golpe temporales 2d4 + 4."
        ],
        escalado: {
            efecto: "Ganas 5 Puntos de Golpe temporales adicionales para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Caída de pluma": {
        nivel: 1,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Reacción, que realizas cuando tú o una criatura que puedas ver dentro de 60p de ti cae",
        rango: "60p",
        componentes: "V, M (una pequeña pluma o trozo de plumón)",
        duracion: "1 minuto",
        efecto: [
            "Elige hasta cinco criaturas cayendo dentro del alcance. La velocidad de descenso de una criatura se ralentiza a 60p por ronda hasta que el hechizo termine. Si una criatura aterriza antes de que el hechizo termine, la criatura no recibe daño de la caída, y el hechizo termina para esa criatura."
        ]
    },

    "Encontrar familiar": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "1 hora o Ritual",
        rango: "10p",
        componentes: "V, S, M (incienso ardiente que cuesta 10+ MO, que el hechizo consume)",
        duracion: "Instantáneo",
        efecto: [
            "Ganas el servicio de un familiar, un espíritu que adopta la forma de un animal de tu elección: Murciélago, Gato, Rana, Halcón, Lagarto, Pulpo, Búho, Rata, Cuervo, Araña, Comadreja, u otra Bestia que tenga una Clase de Desafío de 0. Apareciendo en un espacio desocupado dentro del alcance, el familiar tiene las estadísticas de la forma elegida.",
            "Conexión telepática: Mientras tu familiar esté dentro de 100p de ti, puedes comunicarte con él telepáticamente. Además, como Acción de Bonificación, puedes ver a través de los ojos del familiar y oír lo que oye hasta el comienzo de tu próximo turno, obteniendo los beneficios de cualquier sentido especial que tenga.",
            "Finalmente, cuando lanzas un hechizo con un alcance de toque, tu familiar puede entregar el toque. Tu familiar debe estar a menos de 100p de ti, y debe usar una Reacción para entregar el toque cuando lances el hechizo.",
            "Combate: El familiar es un aliado para ti y tus aliados. Tira su propia Iniciativa y actúa en su propio turno. Un familiar no puede atacar, pero puede tomar otras acciones normalmente.",
            "Desaparición de lo Familiar: Cuando lo Familiar cae a 0 Puntos de Golpe, desaparece. Reaparece después de que lances este hechizo de nuevo. Como una acción de Magia, puedes desterrar temporalmente a lo Familiar a una dimensión de bolsillo. Alternativamente, puedes desterrarlo para siempre. Como una acción de Magia mientras está temporalmente desterrado, puedes hacer que reaparezca en un espacio desocupado a 30p de ti. Cada vez que lo Familiar cae a 0 Puntos de Golpe o desaparece en la dimensión de bolsillo, deja atrás en su espacio cualquier cosa que estuviera usando o llevando.",
            "Solo un familiar: No puedes tener más de un familiar a la vez. Si lanzas este hechizo mientras tienes un familiar, en su lugar haces que adopte una nueva forma elegible."
        ]
    },

    "Nube de niebla": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Creas una esfera de radio 20p de niebla centrada en un punto dentro del alcance. La esfera está Fuertemente oscurecida. Dura durante la duración o hasta que un fuerte viento disperse la niebla."
        ],
        escalado: {
            efecto: "El radio de la niebla aumenta 20p para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Baya de bondad": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "curacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una ramita de muérdago)",
        duracion: "24 horas",
        efecto: [
            "Diez bayas mágicas aparecen en tu mano durante la duración. Una criatura puede tomar una Acción adicional para comer una baya. Comer una baya restaura 1 Punto de Golpe, y la baya proporciona suficiente nutrición para mantener a una criatura durante un día.",
            "Las bayas no comidas desaparecen cuando el hechizo termina."
        ]
    },

    "Grasa": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un poco de piel de cerdo o mantequilla)",
        duracion: "1 minuto",
        efecto: [
            "Una grasa inflamable cubre el suelo en un cuadrado de 10p centrado en un punto dentro del alcance y lo convierte en Terreno difícil durante la duración.",
            "Cuando aparece la grasa, cada criatura permanente en su área debe tener éxito en una tirada de salvación de Destreza o tener la condición Tendida. Una criatura que entra en el área o termina su turno allí también debe tener éxito en esa salvación o caer Tendida."
        ]
    },

    "Rayo guía": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "1 ronda",
        efecto: [
            "Lanzas un rayo de luz hacia una criatura dentro del alcance. Realiza un ataque de hechizo a distancia contra el objetivo. Si golpeas, recibe daño radiante 4d6, y la siguiente tirada de ataque realizada contra él antes del final de tu siguiente turno tiene Ventaja."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Granizo de espinas": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear una criatura con un arma a distancia",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Mientras golpeas la criatura, este hechizo crea una lluvia de espinas que brota de tu arma a distancia o munición. El objetivo del ataque y cada criatura dentro de 5p de él realizan una tirada de salvación de Destreza, recibiendo daño perforante 1d10 si falla o la mitad si tiene éxito."
        ],
        escalado: {
                efecto: "El daño aumenta en 1d10 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Palabra de curación": {
        nivel: 1,
        escuela: "Abjuración",
        tipo: "curacion",
        tiempo: "Acción adicional",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Una criatura de tu elección que puedas ver dentro del alcance recupera Puntos de Golpe igual a 2d4 + tu modificador de habilidad de lanzamiento de hechizos."
        ],
        escalado: {
            efecto: "La curación aumenta en 2d4 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Represalia infernal": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Reacción, que realizas en respuesta a recibir daño de una criatura que puedas ver dentro de 60p de ti",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "La criatura que te dañó está momentáneamente rodeada de llamas verdes. Realiza una tirada de salvación de Destreza, recibiendo daño de fuego 2d10 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Heroísmo": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una criatura dispuesta que tocas es imbuida de valentía. Hasta que el hechizo termine, la criatura es inmune a la condición Asustado y gana Puntos de Golpe temporales iguales a tu modificador de habilidad de lanzamiento de hechizos al inicio de cada uno de sus turnos."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Maldición": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción adicional",
        rango: "90p",
        componentes: "V, S, M (el ojo petrificado de un tritón)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Maldices a una criatura que puedas ver dentro del alcance. Hasta que el hechizo termine, inflige daño necrótico adicional 1d6 al objetivo siempre que lo golpees con una tirada de ataque. Además, elige una habilidad cuando lanzas el hechizo. El objetivo tiene Desventaja en pruebas de habilidad realizadas con la habilidad elegida.",
            "Si el objetivo cae a 0 Puntos de Golpe antes de que este hechizo termine, puedes tomar una Acción adicional en un turno posterior para maldecir a una nueva criatura."
        ],
        escalado: {
            efecto: "Tu Concentración puede durar más con un espacio de hechizo de nivel 2 (hasta 4 horas), 3–4 (hasta 8 horas) o 5+ (24 horas)."
        }
    },

    "Marca del cazador": {
        nivel: 1,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "90p",
        componentes: "V",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Marcas mágicamente una criatura que puedas ver dentro del alcance como tu presa. Hasta que el hechizo termine, inflige daño de fuerza adicional 1d6 al objetivo siempre que lo golpees con una tirada de ataque. También tienes Ventaja en cualquier prueba de Sabiduría (Percepción o Supervivencia) que realices para encontrarlo.",
            "Si el objetivo cae a 0 Puntos de Golpe antes de que este hechizo termine, puedes tomar una Acción adicional para mover la marca a una nueva criatura que puedas ver dentro del alcance."
        ],
        escalado: {
            efecto: "Tu Concentración puede durar más con un espacio de hechizo de nivel 3–4 (hasta 8 horas) o 5+ (hasta 24 horas)."
        }
    },

    "Cuchillo de hielo": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "60p",
        componentes: "S, M (una gota de agua o un trozo de hielo)",
        duracion: "Instantáneo",
        efecto: [
            "Creas un trozo de hielo y lo lanzas a una criatura dentro del alcance. Realiza un ataque de hechizo a distancia contra el objetivo. Si golpeas, el objetivo recibe daño perforante 1d10. Es un golpe o falla, el trozo explota. El objetivo y cada criatura dentro de 5p de él deben tener éxito en una tirada de salvación de Destreza o recibir daño de frío 2d6."
        ],
        escalado: {
            efecto: "El daño de frío aumenta en 1d6 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Identificar": {
        nivel: 1,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "1 minuto o Ritual",
        rango: "Toque",
        componentes: "V, S, M (una perla que cuesta 100+ MO)",
        duracion: "Instantáneo",
        efecto: [
            "Tocas un objeto durante el lanzamiento del hechizo. Si el objeto es un objeto mágico u otro objeto mágico, aprendes sus propiedades y cómo usarlas, si requiere Sintonización, y cuántas cargas tiene, si es que tiene alguna. Aprendes si hay hechizos activos afectando el objeto y cuáles son. Si el objeto fue creado por un hechizo, aprendes el nombre de ese hechizo.",
            "Si en su lugar tocas una criatura durante el lanzamiento, aprendes qué hechizos activos, si es que hay alguno, la están afectando actualmente."
        ]
    },

    "Escritura ilusoria": {
        nivel: 1,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "1 minuto o Ritual",
        rango: "Toque",
        componentes: "S, M (tinta que cuesta 10+ MO, que el hechizo consume)",
        duracion: "10 días",
        efecto: [
            "Escribes en pergamino, papel u otro material adecuado y lo imbuyes con una ilusión que dura durante el tiempo de duración. Para ti y cualquier criatura que designes cuando lances el conjuro, la escritura aparece normal, parece estar escrita con tu mano y transmite cualquier significado que pretendieras al escribir el texto. Para todos los demás, la escritura aparece como si estuviera escrita en una escritura desconocida o mágica que es ininteligible. Alternativamente, la ilusión puede alterar el significado, la caligrafía y el idioma del texto, aunque el idioma debe ser uno que conozcas.",           "Si el hechizo se disipa, tanto la escritura original como la ilusión desaparecen.",
            "Si el hechizo es disipado, el guion original y la ilusión desaparecen.",
            "Una criatura que tenga Visión Verdadera puede leer el mensaje oculto."
        ]
    },

    "Infligir heridas": {
        nivel: 1,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Una criatura que tocas realiza una tirada de salvación de Constitución, recibiendo daño necrótico 2d10 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Salto": {
        nivel: 1,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Toque",
        componentes: "V, S, M (la pata trasera de un saltamontes)",
        duracion: "1 minuto",
        efecto: [
            "Tocas una criatura dispuesta. Una vez en cada uno de sus turnos hasta que el hechizo termine, esa criatura puede saltar hasta 30p gastando 10p de movimiento."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Paso largo": {
        nivel: 1,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un poco de suciedad)",
        duracion: "1 hora",
        efecto: [
            "Tocas una criatura. La velocidad del objetivo aumenta 10p hasta que el hechizo termine."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Armadura de mago": {
        nivel: 1,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un trozo de cuero curado)",
        duracion: "8 horas",
        efecto: [
            "Tocas una criatura dispuesta que no esté usando armadura. Hasta que el hechizo termine, la CA base del objetivo se convierte en 13 más su modificador de Destreza. El hechizo termina anticipadamente si el objetivo se coloca una armadura."
        ]
    },

    "Misil Mágico": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Creas tres dardos brillantes de fuerza mágica. Cada dardo golpea a una criatura de tu elección que puedas ver dentro del alcance. Un dardo inflige daño de Fuerza 1d4 + 1 a su objetivo. Los dardos golpean simultáneamente, y puedes dirigirlos para golpear una criatura o varias."
        ],
        escalado: {
            efecto: "El hechizo crea un dardo adicional para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Protección del mal y el bien": {
        nivel: 1,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un frasco de agua bendita que cuesta 25+ MO, que el hechizo consume)",
        duracion: "Concentración hasta 10 minutos",
        efecto: [
            "Hasta que el hechizo termine, una criatura dispuesta que tocas está protegida contra criaturas que son Aberraciones, Celestiales, Elementales, Feéricos, Demonios o No-muertos. La protección otorga varios beneficios. Las criaturas de esos tipos tienen Desventaja en tiradas de ataque contra el objetivo. El objetivo tampoco puede ser poseído por ellos ni ganar las condiciones Encantado o Asustado de ellos."
        ]
    },

    "Purificar comida y bebida": {
        nivel: 1,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "10p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Eliminas veneno y podredumbre de comida y bebida no mágica en una esfera de radio 5p centrada en un punto dentro del alcance."
        ]
    },

    "Rayo de enfermedad": {
        nivel: 1,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas un rayo verdoso a una criatura dentro del alcance. Realiza un ataque de hechizo a distancia contra el objetivo. Si golpeas, el objetivo recibe daño de veneno 2d8 y tiene la condición Envenenada hasta el final de tu siguiente turno."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Santuario": {
        nivel: 1,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "30p",
        componentes: "V, S, M (un trozo de vidrio de un espejo)",
        duracion: "1 minuto",
        efecto: [
            "Proteges una criatura dentro del alcance. Hasta que el hechizo termine, cualquier criatura que apunte a la criatura protegida con una tirada de ataque o un hechizo de daño debe tener éxito en una tirada de salvación de Sabiduría o elegir un nuevo objetivo o perder el ataque o hechizo. Este hechizo no protege a la criatura protegida de áreas de efecto.",
            "El hechizo termina si la criatura protegida realiza una tirada de ataque, lanza un hechizo o causa daño."
        ]
    },

    "Golpe abrasador": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear un objetivo con un arma de combate o un ataque desarmado",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "1 minuto",
        efecto: [
            "Mientras golpeas el objetivo, recibe daño de fuego adicional 1d6 del ataque. Al inicio de cada uno de sus turnos hasta que el hechizo termine, el objetivo recibe daño de fuego 1d6 y luego realiza una tirada de salvación de Constitución. Si falla, el hechizo continúa. Si tiene éxito, el hechizo termina."
        ],
        escalado: {
            efecto: "Todo el daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Escudo": {
        nivel: 1,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Reacción, que realizas cuando eres golpeado por una tirada de ataque o apuntado por el hechizo Misil mágico",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "1 ronda",
        efecto: [
            "Una barrera imperceptible de fuerza mágica te protege. Hasta el inicio de tu siguiente turno, tienes un bonificación +5 a la CA, incluyendo contra el ataque desencadenante, y no recibes daño de Misil mágico."
        ]
    },

    "Escudo de fe": {
        nivel: 1,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "60p",
        componentes: "V, S, M (un rollo de oración)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Un campo brillante rodea a una criatura de tu elección dentro del alcance, otorgándole un bonificación +2 a la CA durante la duración."
        ]
    },

    "Imagen silenciosa": {
        nivel: 1,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un poco de lana)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Creas la imagen de un objeto, una criatura o algún otro fenómeno visible que no sea más grande de un cubo de 15p. La imagen aparece en un punto dentro del alcance y dura durante la duración. La imagen es puramente visual; no va acompañada de sonido, olor u otros efectos sensoriales.",
            "Como una acción de Magia, puedes hacer que la imagen se mueva a cualquier punto dentro del alcance. A medida que la imagen cambia de ubicación, puedes alterar su apariencia para que sus movimientos parezcan naturales para la imagen.",
            "La interacción física con la imagen la revela como ilusión. Una criatura que toma la acción de Examinar la imagen puede determinar que es una ilusión con una prueba exitosa de Inteligencia (Investigación) contra tu CD de salvación de hechizo."
        ]
    },

    "Dormir": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un poco de arena o pétalos de rosa)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Cada criatura de tu elección en una esfera de radio 5p centrada en un punto dentro del alcance debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Incapacitada hasta el final de su siguiente turno, momento en el cual debe repetir la salvación. Si el objetivo falla la segunda salvación, el objetivo tiene la condición Inconsciente durante la duración. El hechizo termina en un objetivo si recibe daño o alguien dentro de 5p de él toma una acción para sacudirlo.",
            "Las criaturas que no duermen, como los elfos, o que tienen Inmunidad a la condición Agotamiento tienen éxito automático en las salvaciones contra este hechizo."
        ]
    },

    "Hablar con animales": {
        nivel: 1,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "10 minutos",
        efecto: [
            "Durante la duración, puedes comprender y comunicarte verbalmente con Bestias, y puedes usar cualquiera de las opciones de habilidad de la acción Influencia con ellas.",
            "La mayoría de las Bestias tienen poco que decir sobre temas que no se relacionan con la supervivencia o la compañía, pero como mínimo, una Bestia puede darte información sobre ubicaciones cercanas y monstruos, incluyendo lo que ha percibido en el pasado día."
        ]
    },

    "Llamarada de Fuego Mágico": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Desatas una ráfaga de fuego brillante. Realiza un ataque de hechizo a distancia contra un objetivo dentro del alcance; el objetivo no gana beneficio de Cobertura Media o Cobertura Tres Cuartos para esta tirada de ataque. En un golpe, el objetivo recibe daño Radiante 2d10."
        ],
        escalado: {
            efecto: "Creas una ráfaga adicional para cada nivel de espacio de hechizo superior a 1. Puedes dirigir las ráfagas hacia el mismo objetivo o hacia otros diferentes. Haz una tirada de ataque separada para cada ráfaga."
        }
    },

    "La risa horrible de Tasha": {
        nivel: 1,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (un tarta y una pluma)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una criatura de tu elección que puedas ver dentro del alcance realiza una tirada de salvación de Sabiduría. Si falla, tiene las condiciones Tendida e Incapacitada durante la duración. Durante ese tiempo, ríe de forma incontrolable si es capaz de reír, y no puede terminar la condición Tendida en sí misma.",
            "Al final de cada uno de sus turnos y cada vez que recibe daño, realiza otra tirada de salvación de Sabiduría. El objetivo tiene Ventaja en la salvación si es desencadenada por daño. Si tiene éxito, el hechizo termina."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Disco flotante de Tenser": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "30p",
        componentes: "V, S, M (una gota de mercurio)",
        duracion: "1 hora",
        efecto: [
            "Este hechizo crea un plano circular y horizontal de fuerza, de 3p de diámetro, que flota 3p por encima del suelo en un espacio desocupado de tu elección que puedas ver dentro del alcance. El disco permanece durante la duración y puede sostener hasta 500 libras. Si se coloca más peso, el hechizo termina y todo en el disco cae al suelo.",
            "El disco es inmóvil mientras estés dentro de 20p de él. Si te alejas más de 20p, el disco te sigue para permanecer dentro de 20p de ti. Puede atravesar terreno desigual, subir o bajar escaleras pero no puede cruzar un cambio de elevación de más de 10p. Por ejemplo, el disco no puede moverse a través de un foso de 10 pies de profundidad, ni podría salir de dicho foso si se creara en el fondo.",
            "Si te mueves más de 100 pies del disco (normalmente porque no puede moverse alrededor de un obstáculo para seguirte), el hechizo termina."
        ]
    },

    "Golpe de trueno": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear un objetivo con un arma de combate o un ataque desarmado",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Tu golpe suena con trueno que es audible dentro de 300p de ti, y el objetivo recibe daño adicional 2d6 de trueno del ataque. Además, si el objetivo es una criatura, debe tener éxito en una tirada de salvación de Fuerza o ser empujado 10p lejos de ti y tener la condición Tendida."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Onda de trueno": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Desatas una onda de energía de trueno. Cada criatura en un cubo de 15p originado desde ti realiza una tirada de salvación de Constitución. Si falla, una criatura recibe daño de trueno 2d8 y es empujada 10p lejos de ti. Si tiene éxito, una criatura recibe la mitad del daño.",
            "Además, los objetos no asegurados que están completamente dentro del cubo son empujados 10p lejos de ti, y un sonido ensordecedor es audible dentro de 300p."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Sirviente invisible": {
        nivel: 1,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "60p",
        componentes: "V, S, M (un poco de cuerda y de madera)",
        duracion: "1 hora",
        efecto: [
            "Este hechizo crea una fuerza Invisible, sin mente, sin forma, Mediana que realiza tareas simples bajo tu comando hasta que el hechizo termina. El sirviente surge en existencia en un espacio desocupado en el suelo dentro del alcance. Tiene CA 10, 1 Punto de Golpe, y Fuerza 2, y no puede atacar. Si cae a 0 Puntos de Golpe, el hechizo termina.",
            "Una vez en cada uno de tus turnos como una Acción adicional, puedes dar comandos mentalmente al sirviente para que se mueva hasta 15p e interactúe con un objeto. El sirviente puede realizar tareas simples que un humano podría hacer, como traer cosas, limpiar, reparar, doblar ropa, encender fuegos, servir comida y verter bebidas.",
            "Si le ordenas al sirviente que realice una tarea que lo aleje más de 60p de ti, el hechizo termina."
        ]
    },

    "Rechazo Mágico": {
        nivel: 1,
        escuela: "Abjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (una mano de arcilla en miniatura)",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas una fuerza mágica desorientadora hacia una criatura dentro del alcance. El objetivo realiza una tirada de salvación de Constitución; los Constructos y No-muertos tienen éxito automático en esta salvación.",
            "Con una salvación fallida, el objetivo recibe daño de Fuerza 2d4, su Velocidad se reduce a la mitad hasta el inicio de tu siguiente turno, y en su próximo turno, solo puede realizar una Acción o una Acción adicional (pero no ambas). Con una salvación exitosa, el objetivo recibe solo la mitad del daño."
        ],
        escalado: {
            efecto: "El daño aumenta en 2d4 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Rayo de bruja": {
        nivel: 1,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (una rama golpeada por rayo)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Un haz de energía crepitante sale hacia una criatura dentro del alcance, formando un arco sostenido de rayo entre ti y el objetivo. Realiza un ataque de hechizo a distancia contra él. Si golpeas, el objetivo recibe daño de rayo 2d12.",
            "En cada uno de tus turnos posteriores, puedes tomar una Acción adicional para infligir daño de rayo 1d12 al objetivo automáticamente, incluso si el primer ataque fallo.",
            "El hechizo termina si el objetivo alguna vez está fuera del alcance del hechizo o si tiene Cobertura total contra ti."
        ],
        escalado: {
            efecto: "El daño inicial aumenta en 1d12 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Golpe furioso": {
        nivel: 1,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear una criatura con un arma de combate o un ataque desarmado",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "1 minuto",
        efecto: [
            "El objetivo recibe daño necrótico adicional 1d6 del ataque, y debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Asustada hasta que el hechizo termine. Al final de cada uno de sus turnos, el objetivo Asustado repite la salvación, terminando el hechizo en sí mismo si tiene éxito."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 1."
        }
    },

    "Ayuda": {
        nivel: 2,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (una tira de tela blanca)",
        duracion: "8 horas",
        efecto: [
            "Elige hasta tres criaturas dentro del alcance. El máximo de Puntos de Golpe de cada objetivo y sus Puntos de Golpe actuales aumentan en 5 durante la duración."
        ],
        escalado: {
            efecto: "Los Puntos de Golpe de cada objetivo aumentan en 5 adicionales para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Alterarse": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Alteras tu forma física. Elige una de las siguientes opciones. Sus efectos duran durante la duración, momento en el cual puedes tomar una acción de Magia para reemplazar la opción elegida por una diferente.",
            "Adaptación Acuática. Te brotan branquias y crece membrana entre tus dedos. Puedes respirar bajo el agua y ganas una Velocidad de nado igual a tu Velocidad.",
            "Cambiar Apariencia. Alteras tu apariencia. Decides cómo te ves, incluyendo tu altura, peso, rasgos faciales, sonido de tu voz, largo del cabello, coloración y otras características distintivas. Puedes parecer un miembro de otra especie, aunque ninguna de tus estadísticas cambia. No puedes aparecer como una criatura de diferente tamaño, y tu forma básica permanece igual.",
            "Armas Naturales. Te crecen garras (Cortante), colmillos (Perforante), cuernos (Perforante) u cascos (Contundente). Cuando usas tu Ataque desarmado para infligir daño con ese nuevo crecimiento, inflige daño 1d6 del tipo entre paréntesis en lugar del daño normal de tu Ataque desarmado, y usas tu modificador de habilidad de lanzamiento de hechizos para las tiradas de ataque y daño en lugar de Fuerza."
        ]
    },

    "Mensajero Animal": {
        nivel: 2,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción o Ritual",
        rango: "30p",
        componentes: "V, S, M (un bocado de comida)",
        duracion: "24 horas",
        efecto: [
            "Una Bestia Diminuta de tu elección que puedas ver dentro del alcance debe tener éxito en una tirada de salvación de Carisma o intentará entregar un mensaje para ti (si la Clase de Desafío del objetivo no es 0, tiene éxito automático). Especificas una ubicación que has visitado y un destinatario que coincida con una descripción general, como 'una persona vestida con el uniforme de la guardia de la ciudad' o 'un enano pelirrojo usando un sombrero puntiagudo'. También comunicas un mensaje de hasta veinticinco palabras. La Bestia viaja durante la duración hacia la ubicación especificada, cubriendo alrededor de 25 millas (40 km) por 24 horas o 50 millas si la Bestia puede volar.",
            "Cuando la Bestia llega, entrega tu mensaje a la criatura que describiste, imitando tu comunicación. Si la Bestia no llega a su destino antes de que el hechizo termine, el mensaje se pierde y la Bestia regresa a donde lanzaste el hechizo."
        ],
        escalado: {
            efecto: "La duración del hechizo aumenta 48 horas para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Cerradura Arcana": {
        nivel: 2,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (polvo de oro que cuesta 25+ MO, que el hechizo consume)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Tocas una puerta, ventana, puerta, contenedor u escotilla cerrada y la cierras mágicamente durante la duración. Esta cerradura no puede ser abierta por ningún medio no mágico. Tú y cualquier criatura que designes cuando lances el hechizo puedes abrir y cerrar el objeto a pesar de la cerradura. También puedes establecer una contraseña que, cuando se hable dentro de 5p del objeto, lo desbloquee durante 1 minuto."
        ]
    },

    "Vigor Arcano": {
        nivel: 2,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Aprovechas tu fuerza de vida para curarte a ti mismo. Lanza uno o dos de tus Dados de Golpe no gastados y recupera Puntos de Golpe iguales al total del lanzamiento más tu modificador de habilidad de lanzamiento de hechizos. Esos dados se gastan entonces."
        ],
        escalado: {
            efecto: "El número de Dados de Golpe no gastados que puedes lanzar aumenta en uno para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Augurio": {
        nivel: 2,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "1 minuto o Ritual",
        rango: "Yo mismo",
        componentes: "V, S, M (palos, huesos, cartas u otros tokens adivinatorios especialmente marcados que cuesta 25+ MO)",
        duracion: "Instantáneo",
        efecto: [
            "Recibes un presagio de una entidad de otro mundo sobre los resultados de un curso de acción que planeas tomar dentro de los próximos 30 minutos. El DM elige el presagio de las opciones de presagios: Bueno, Malo, Bueno y Malo, o Indiferencia.",
            "El hechizo no cuenta circunstancias, como otros hechizos, que podrían cambiar los resultados.",
            "Si lanzas el hechizo más de una vez antes de terminar un Descanso Largo, hay una oportunidad acumulativa del 25 por ciento para cada lanzamiento después del primero de que no obtengas respuesta."
        ]
    },

    "Piel de Corteza": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Toque",
        componentes: "V, S, M (un puñado de corteza)",
        duracion: "1 hora",
        efecto: [
            "Tocas una criatura dispuesta. Hasta que el hechizo termine, la piel del objetivo asume una apariencia similar a la corteza, y el objetivo tiene una Clase de Armadura de 17 si su CA es menor que esa."
        ]
    },

    "Sentido de Bestia": {
        nivel: 2,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Toque",
        componentes: "S",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Tocas una Bestia dispuesta. Durante la duración, puedes percibir a través de los sentidos de la Bestia así como de los tuyos propios. Cuando percibes a través de los sentidos de la Bestia, te beneficias de cualquier sentido especial que tenga."
        ]
    },

    "Ceguera/Sordera": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V",
        duracion: "1 minuto",
        efecto: [
            "Una criatura que puedas ver dentro del alcance debe tener éxito en una tirada de salvación de Constitución o tener la condición Cegada o Sorda (tu elección) durante la duración. Al final de cada uno de sus turnos, el objetivo repite la salvación, terminando el hechizo en sí mismo en caso de éxito."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Desenfoque": {
        nivel: 2,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Tu cuerpo se vuelve borroso. Durante la duración, cualquier criatura tiene Desventaja en tiradas de ataque contra ti. Un atacante es inmune a este efecto si te percibe con Visión en la Oscuridad o Visión Verdadera."
        ]
    },

    "Calmar Emociones": {
        nivel: 2,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Cada Humanoide en una Esfera de radio 20p centrada en un punto que elijas dentro del alcance debe tener éxito en una tirada de salvación de Carisma o ser afectado por uno de los siguientes efectos (tú eliges para cada criatura):",
            "La criatura tiene Inmunidad a las condiciones Encantada y Asustada hasta que el hechizo termine. Si la criatura ya estaba Encantada o Asustada, esas condiciones se suprimen durante la duración.",
            "La criatura se vuelve Indiferente hacia criaturas de tu elección hacia las que sea Hostil. Esta indiferencia termina si el objetivo recibe daño o presencia a sus aliados recibiendo daño. Cuando el hechizo termina, la actitud de la criatura vuelve a lo normal."
        ]
    },

    "Nube de dagas": {
        nivel: 2,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (una astilla de cristal)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Conjuras dagas giratorias en un Cubo de 5p centrado en un punto dentro del alcance. Cada criatura en esa área recibe daño cortante 4d4. Una criatura también recibe este daño si entra en el Cubo, termina su turno allí, o si el Cubo se mueve hacia su espacio. Una criatura recibe este daño solo una vez por turno.",
            "En tus turnos posteriores, puedes tomar una Acción de Magia para teletransportar el Cubo hasta 30p."
        ],
        escalado: {
            efecto: "El daño aumenta en 2d4 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Llama perpetua": {
        nivel: 2,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (polvo de rubí que cuesta 50+ MO, que el hechizo consume)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Una llama brota de un objeto que tocas. El efecto emite Luz brillante en un radio de 20p y Luz tenue para 20p adicionales. Se ve como una llama normal, pero no crea calor y no consume combustible. La llama puede ser cubierta u ocultada pero no sofocada ni extinguida."
        ]
    },

    "Cordón de flechas": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (una trenza ornamental)",
        duracion: "8 horas",
        efecto: [
            "Tocas hasta cuatro Flechas o Pernos no mágicos y los plantas en el suelo en tu espacio. Hasta que el hechizo termine, la munición no puede ser arrancada físicamente. Siempre que una criatura que no seas tú entra en un espacio dentro de 30p de la munición por primera vez en un turno o termina su turno allí, un proyectil vuela hacia arriba para golpearlo. La criatura debe tener éxito en una tirada de salvación de Destreza o recibir daño perforante 2d4. El proyectil es entonces destruido. El hechizo termina cuando ninguna munición permanece plantada en el suelo. Cuando lanzas este hechizo, puedes designar criaturas que elijas, y el hechizo las ignora."
        ],
        escalado: {
            efecto: "La cantidad de munición que puede ser afectada aumenta en dos para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Corona de locura": {
        nivel: 2,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una criatura que puedas ver dentro del alcance debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Encantada durante la duración. La criatura tiene éxito automático si no es humanoide.",
            "Una corona espectral aparece en la cabeza del objetivo Encantado, y debe usar su acción antes de moverse en cada uno de sus turnos para hacer un ataque de combate contra una criatura que no sea él mismo que mentalmente elijas. El objetivo puede actuar normalmente en su turno si no eliges ninguna criatura o si ninguna criatura está dentro de su alcance. El objetivo repite la salvación al final de cada uno de sus turnos, terminando el hechizo en sí mismo en caso de éxito.",
            "En tus turnos posteriores, debes tomar una Acción de Magia para mantener el control del objetivo, o el hechizo termina."
        ]
    },

    "Oscuridad": {
        nivel: 2,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, M (pelaje de murciélago y un trozo de carbón)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Durante la duración, la Oscuridad mágica se extiende desde un punto dentro del alcance y llena una Esfera de radio 15p. Visión en la Oscuridad no puede ver a través de ella, y la luz no mágica no puede iluminarla.",
            "Alternativamente, lanzas el hechizo en un objeto que no está siendo llevado o portado, causando que la Oscuridad llene una Emanación de 15p originada desde ese objeto. Cubrir ese objeto con algo opaco, como un cuenco o casco, bloquea la Oscuridad.",
            "Si algún área de este hechizo se superpone con un área de Luz brillante o Luz tenue creada por un hechizo de nivel 2 o inferior, ese otro hechizo es disipado."
        ]
    },

    "Visión en la oscuridad": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (una zanahoria seca)",
        duracion: "8 horas",
        efecto: [
            "Durante la duración, una criatura dispuesta que tocas tiene Visión en la Oscuridad con un alcance de 150p."
        ]
    },

    "Armadura de muerte": {
        nivel: 2,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un ónice que cuesta 50+ MO, que el hechizo consume)",
        duracion: "1 hora",
        efecto: [
            "Durante la duración, un aura tintada rodea una criatura que tocas. El objetivo tiene Ventaja en tiradas de salvación de muerte, y una vez por turno, cuando una criatura dentro de 5p del objetivo lo golpea con una tirada de ataque de combate, el atacante recibe daño necrótico 2d4."
        ]
    },

    "Homúnculos útiles de Deryan": {
        nivel: 2,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Yo mismo",
        componentes: "V, S, M (piedras preciosas en polvo que cuesta 100+ MO, que el hechizo consume, y un conjunto de Herramientas de Artesano con las que tienes competencia)",
        duracion: "8 horas",
        efecto: [
            "Convocas un grupo de espíritus útiles, que dura durante la duración. Los espíritus aparecen como homúnculos u otro Constructo de tu elección pero son intangibles e invulnerables, y se considera que tienen competencia en la habilidad Arcanos y con el conjunto de Herramientas de Artesano usado en el lanzamiento del hechizo.",
            "Si estás fabricando un objeto, los espíritus funcionan como un asistente único para tu fabricación, reduciendo a la mitad el tiempo de fabricación."
        ]
    },

    "Detectar pensamientos": {
        nivel: 2,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (1 moneda de cobre)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Activas uno de los efectos a continuación. Hasta que el hechizo termine, puedes activar cualquiera de los dos efectos como una Acción de Magia en tus turnos posteriores.",
            "Sentir pensamientos. Sientes la presencia de pensamientos dentro de 30p de ti que pertenecen a criaturas que conocen idiomas o son telepáticas. No lees los pensamientos, pero sabes que una criatura pensante está presente. El hechizo está bloqueado por 1 pies (0.3 metros) de piedra, suciedad o madera; una pulgada (2.5 centímetros) de metal; o una fina lámina de plomo.",
            "Leer pensamientos. Apunta a una criatura que puedas ver dentro de 30p de ti o una criatura dentro de 30p de ti que detectaste con la opción Sentir pensamientos. Aprendes qué está más en la mente del objetivo ahora. Si el objetivo no conoce ningún idioma y no es telepático, no aprendes nada. Como una Acción de Magia en tu siguiente turno, puedes intentar indagar más profundo en la mente del objetivo. Si indagas más profundo, el objetivo realiza una tirada de salvación de Sabiduría. Con una salvación fallida, disciernen el razonamiento del objetivo, emociones y algo que se cierne en su mente (como una preocupación, amor u odio). Con una salvación exitosa, el hechizo termina. De cualquier manera, el objetivo sabe que estás indagando en su mente, y hasta que apartes tu atención de la mente del objetivo, el objetivo puede tomar una acción en su turno para hacer una prueba de Inteligencia (Arcanos) contra tu CD de salvación de hechizo, terminando el hechizo en caso de éxito."
        ]
    },

    "Aliento de dragón": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción adicional",
        rango: "Toque",
        componentes: "V, S, M (un pimiento picante)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Tocas una criatura dispuesta, y eliges Ácido, Frío, Fuego, Rayo o Veneno. Hasta que el hechizo termine, el objetivo puede tomar una Acción de Magia para exhalar un Cono de 15p. Cada criatura en esa área realiza una tirada de salvación de Destreza, recibiendo daño 3d6 del tipo elegido si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Elusión de Elminster": {
        nivel: 2,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Salvaguardas arcanas te protegen contra la magia durante la duración. Tienes Ventaja en tiradas de salvación contra hechizos y efectos mágicos. Además, si tienes éxito en una tirada de salvación contra un hechizo o efecto mágico y normalmente recibirías la mitad del daño, en su lugar no recibes daño."
        ]
    },

    "Mejorar habilidad": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (pelaje o una pluma)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Tocas una criatura y eliges Fuerza, Destreza, Inteligencia, Sabiduría o Carisma. Durante la duración, el objetivo tiene Ventaja en pruebas de habilidad usando la habilidad elegida."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 2. Puedes elegir una habilidad diferente para cada objetivo."
        }
    },

    "Ampliar/Reducir": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "9p",
        componentes: "V, S, M (un poco de polvo de hierro)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Durante la duración, el hechizo amplía o reduce una criatura u objeto que puedas ver dentro del alcance. Un objeto apuntado no debe ser llevado ni portado. Si el objetivo es una criatura que no es dispuesta, puede hacer una tirada de salvación de Constitución. En una salvación exitosa, el hechizo no tiene efecto.",
            "Todo lo que una criatura apuntada está usando y llevando cambia de tamaño con ella. Cualquier objeto que suelte regresa a su tamaño normal inmediatamente. Un arma lanzada o proyectil regresa a su tamaño normal inmediatamente después de golpear o fallar un objetivo.",
            "Ampliar. El tamaño del objetivo aumenta en una categoría: De Mediano a Grande, por ejemplo. El objetivo también tiene Ventaja en pruebas de Fuerza y tiradas de salvación de Fuerza. Los ataques del objetivo con sus armas ampliadas o Ataques Desarmados infligen daño adicional 1d4 en un golpe.",
            "Reducir. El tamaño del objetivo disminuye en una categoría: De Mediano a Pequeño, por ejemplo. El objetivo también tiene Desventaja en pruebas de Fuerza y tiradas de salvación de Fuerza. Los ataques del objetivo con sus armas reducidas o Ataques Desarmados infligen daño 1d4 menos en un golpe (esto no puede reducir el daño por debajo de 1)."
        ]
    },

    "Hechizar": {
        nivel: 2,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Tejes una serie de palabras distrayentes, causando que criaturas de tu elección que puedas ver dentro del alcance realicen una tirada de salvación de Sabiduría. Cualquier criatura con la que tú o tus aliados estén luchando tiene éxito automático en esta salvación. Con una salvación fallida, un objetivo tiene una penalización −10 a pruebas de Sabiduría (Percepción) y Percepción Pasiva hasta que el hechizo termine."
        ]
    },

    "Encontrar montura": {
        nivel: 2,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Convocas un ser de otro mundo que aparece como una montura leal en un espacio desocupado de tu elección dentro del alcance. Esta criatura usa el bloque de estadísticas de Montura de otro mundo. Si ya tienes una montura de este hechizo, la montura es reemplazada por la nueva.",
            "La montura se parece a un animal Grande y montable de tu elección, como un caballo, un camello, un lobo dire o un alce. Siempre que lanzas el hechizo, elige el tipo de criatura de la montura: Celestial, Feérico o Demonio, que determina ciertos rasgos en el bloque de estadísticas.",
            "Combate. La montura es un aliado para ti y tus aliados. En combate, comparte tu contador de Iniciativa, y funciona como una montura controlada mientras la montas. Si tienes la condición Incapacitada, la montura toma su turno inmediatamente después del tuyo y actúa de manera independiente, enfocándose en protegerte.",
            "Desaparición de la montura. La montura desaparece si cae a 0 Puntos de Golpe o si mueres. Cuando desaparece, deja atrás cualquier cosa que estuviera llevando o portando. Si lanzas este hechizo de nuevo, decides si convocas la montura que desapareció o una diferente.",
            "Montura de Otro Mundo",
            "Celestial grande, Feérico o Demonio (tu elección), Neutral",
            "Clase Armadura 10 + nivel de espacio de hechizo",
            "Puntos Golpe 5 + 10 por nivel de espacio de hechizo, la montura tiene tantos Dados de Golpe d10 como el nivel de espacio de hechizo",
            "Velocidad 60 pies, vuela 60 pies si usas nivel de espacio de hechizo 4 o superior",
            "Fuerza 18 (+4/+4) Destreza 12 (+1/+1) Constitución 14 (+2/+2) Inteligencia 6 (-2/-2) Sabiduría 12 (+1/+1) Carisma 8 (-1/-1)",
            "Sentidos Percepción pasiva 11",
            "Idiomas telepatia una milla (1.6 km) solo contigo",
            "Calificacion de desafio Ninguno, su Bonificador de Competencia es el mimso que el tuyo.",
            "Rasgos Vínculo de vida. Cuando recuperas puntos de vida de un hechizo de nivel 1+, el corcel recupera la misma cantidad de puntos de vida si estás a menos de 5 pies de él.",
            "Acciones Golpe de otro mundo. tirada de ataque cuerpo a cuerpo: la bonificación es igual a tu modificador de ataque de hechizo, alcanza los 5 pies. Golpe: 1d8 más el nivel de daño radiante (Celestial), psíquico (Feérico) o necrótico (Demonio) del hechizo.",
            "Acciones Adicional",
            "Resplandor de caída (solo Demonio; se recarga después de un largo descanso). TS Sabiduría: CD es igual a tu CD de hechizos, una criatura dentro de 60 pies que el corcel puede ver. Fallo: El objetivo tiene la condición de Asustado hasta el final de tu siguiente turno.",
            "Paso Feerico (solo Feerico; se recarga después de un largo descanso). El corcel se teletransporta, junto con su jinete, a un espacio desocupado de su elección a hasta 60 pies de distancia de sí mismo.",
            "Toque curativo (solo Celestial; se recarga después de un largo descanso). Una criatura a menos de 5 pies del corcel recupera una cantidad de puntos de vida igual a 2d8 más el nivel del hechizo."
        ]
    },

    "Encontrar trampas": {
        nivel: 2,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Sientes cualquier trampa dentro del alcance que está dentro de línea de vista. Una trampa, para propósitos de este hechizo, incluye cualquier objeto o mecanismo que fue creado para causar daño u otro peligro. De esta manera, el hechizo sentiría el hechizo Alarma o Glifo de protección o una trampa de foso mecánica, pero no revelaría una debilidad natural en el piso, un techo inestable, o un sumidero oculto.",
            "Este hechizo revela que una trampa está presente pero no su ubicación. Aprendes la naturaleza general del peligro planteado por una trampa que sientes."
        ]
    },

    "Hoja de fuego": {
        nivel: 2,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S, M (una hoja de zumaque)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Evoques una hoja de fuego en tu mano libre. La hoja es similar en tamaño y forma a una cimitarra, y dura durante la duración. Si sueltas la hoja, desaparece, pero puedes evocarla nuevamente como una Acción adicional.",
            "Como una Acción de Magia, puedes hacer un ataque de hechizo de combate con la hoja ardiente. En un golpe, el objetivo recibe daño de fuego igual a 3d6 más tu modificador de habilidad de lanzamiento de hechizos.",
            "La hoja en llamas emite Luz brillante en un radio de 10p y Luz tenue para 10p adicionales."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Esfera ardiente": {
        nivel: 2,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (una bola de cera)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas una esfera de fuego de 5p de diámetro en un espacio desocupado en el suelo dentro del alcance. Dura durante la duración. Cualquier criatura que termine su turno dentro de 5p de la esfera realiza una tirada de salvación de Destreza, recibiendo daño de fuego 2d6 si falla o la mitad si tiene éxito.",
            "Como una Acción adicional, puedes mover la esfera hasta 30p, rodándola por el suelo. Si mueves la esfera hacia el espacio de una criatura, esa criatura realiza la salvación contra la esfera, y la esfera deja de moverse ese turno.",
            "Cuando mueves la esfera, puedes dirigirla sobre barreras de hasta 5p de altura y saltarla sobre fosos de hasta 10p de ancho. Los objetos inflamables que no están siendo llevados o portados comienzan a arder si son tocados por la esfera, y emite Luz brillante en un radio de 20p y Luz tenue para 20p adicionales."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Reposo gentil": {
        nivel: 2,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Toque",
        componentes: "V, S, M (2 monedas de cobre, que el hechizo consume)",
        duracion: "10 días",
        efecto: [
            "Tocas un cadáver u otros restos. Durante la duración, el objetivo está protegido de la descomposición y no puede volverse No-muerto.",
            "El hechizo también extiende efectivamente el límite de tiempo para revivir el objetivo, ya que los días gastados bajo la influencia de este hechizo no cuentan contra el límite de tiempo de hechizos como Revivir."
        ]
    },

    "Ráfaga de viento": {
        nivel: 2,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una semilla de legumbre)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una Línea de viento fuerte de 60p de largo y 10p de ancho sopla desde ti en una dirección que elijas durante la duración. Cada criatura en la Línea debe tener éxito en una tirada de salvación de Fuerza o ser empujada 15p lejos de ti en una dirección siguiendo la Línea. Una criatura que termina su turno en la Línea debe hacer la misma salvación.",
            "Cualquier criatura en la Línea debe gastar 2 pies (0.6 metros) de movimiento por cada 1 pie (0.3 metros) que se mueve cuando se mueve más cerca de ti.",
            "La ráfaga dispersa gas o vapor, y apaga velas y llamas similares desprotegidas en el área. Causa que las llamas protegidas, como las de las linternas, bailen salvajemente y tiene un 50 por ciento de probabilidad de apagarlas.",
            "Como una Acción adicional en tus turnos posteriores, puedes cambiar la dirección en la que la Línea sopla desde ti."
        ]
    },

    "Calentar metal": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un trozo de hierro y una llama)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Elige un objeto de metal fabricado, como un arma de metal o un traje de armadura de metal Pesada o Mediana, que puedas ver dentro del alcance. Causas que el objeto brille rojo incandescente. Cualquier criatura en contacto físico con el objeto recibe daño de fuego 2d8 cuando lanzas el hechizo. Hasta que el hechizo termine, puedes tomar una Acción adicional en cada uno de tus turnos posteriores para infligir este daño de nuevo si el objeto está dentro del alcance.",
            "Si una criatura está sosteniendo o usando el objeto y recibe el daño del mismo, la criatura debe tener éxito en una tirada de salvación de Constitución o soltar el objeto si puede. Si no suelta el objeto, tiene Desventaja en tiradas de ataque y pruebas de habilidad hasta el inicio de tu siguiente turno."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Paralizar persona": {
        nivel: 2,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un trozo recto de hierro)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Elige un Humanoide que puedas ver dentro del alcance. El objetivo debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Paralizado durante la duración. Al final de cada uno de sus turnos, el objetivo repite la salvación, terminando el hechizo en sí mismo en caso de éxito."
        ],
        escalado: {
            efecto: "Puedes apuntar a un Humanoide adicional para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Sirviente homúnculo": {
        nivel: 2,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "1 hora o Ritual",
        rango: "10p",
        componentes: "V, S, M (una gema que cuesta 100+ MO)",
        duracion: "Instantáneo",
        efecto: [
            "Convocas un homúnculo especial en un espacio desocupado dentro del alcance. Esta criatura usa el bloque de estadísticas de Sirviente Homúnculo. Si ya tienes un homúnculo de este hechizo, el homúnculo es reemplazado por el nuevo. Determinas la apariencia del homúnculo, como un pájaro de aspecto mecánico, viales alados, o calderos diminutos animados.",
            "Combate. El homúnculo es un aliado para ti y tus aliados. En combate, comparte tu contador de Iniciativa, pero toma su turno inmediatamente después del tuyo. Obedece tus comandos verbales (sin acción requerida por ti). Si no emites ninguno, toma la acción Esquivar y usa su movimiento para evitar peligro.",
            "Sirviente homúnculo",
            "Pequeña construcción, neutral",
            "Clase Armadura 13",
            "Puntos de Golpe 5 + 5 por nivel de hechizo (el homúnculo tiene un número de Dados de Golpe d4 igual al nivel del hechizo)",
            "Velocidad 20 pies, vuela 30 pies.",
            "Fuerza 4 (-3/-3) Destreza 15 (+2/+2) Constitución 12 (+1/+1) Inteligencia 10 (0/0) Sabiduría 10 (0/0) Carisma 7 (-2/-2)",
            "Inmunidades Veneno; Agotamiento, Envenenado",
            "Sentidos Visión Oscura 60 pies; Percepción pasiva 10",
            "Idiomas Telepatía 1 milla funciona solo contigo",
            "Calificacion de desafio Ninguno, su Bonificador de Competencia es el mimso que el tuyo.",
            "Rasgos",
            "Evasión. Si el homúnculo está sujeto a un efecto que le permite realizar un lanzamiento de salvación de Destreza para recibir solo la mitad del daño, el homúnculo no recibe daño si tiene éxito en la salvación y solo la mitad del daño si falla. No puede usar este rasgo si tiene la condición de Incapacitado.",
            "Vínculo mágico. Agregue el nivel de hechizo a cualquier control de habilidad o lanzamiento de guardado que realice el homúnculo.",
            "Acciones",
            "Golpe de fuerza. Rollo de ataque cuerpo a cuerpo o a distancia: La bonificación es igual a tu modificador de ataque de hechizo, alcanza los 5p o alcanza los 30p. Golpe: 1d6 más el nivel de daño de Fuerza del hechizo.",
            "Reacciones",
            "Canal Mágico. Activador: Lanzas un hechizo que tiene un rango de tacto mientras el homúnculo está a 120p de ti. Respuesta: El homúnculo lanza el hechizo a través de su toque."
        ]
    },

    "Invisibilidad": {
        nivel: 2,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (una pestaña en goma arábiga)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Una criatura que tocas tiene la condición Invisible hasta que el hechizo termine. El hechizo termina anticipadamente inmediatamente después de que el objetivo realice una tirada de ataque, infliga daño, o lanza un hechizo."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Llamar": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Elige un objeto que puedas ver dentro del alcance. El objeto puede ser una puerta, una caja, un cofre, un conjunto de grilletes, un candado, u otro objeto que contenga un medio mundano o mágico que impida acceso.",
            "Un objetivo que está sujeto cerrado por un candado mundano o que está atascado o bloqueado se desbloquea, se destraba, o se desbloquea. Si el objeto tiene múltiples cerraduras, solo una de ellas se desbloquea.",
            "Si el objetivo está sujeto cerrado por Cerradura Arcana, ese hechizo es suprimido por 10 minutos, durante el cual el objetivo puede ser abierto y cerrado.",
            "Cuando lanzas el hechizo, un golpe fuerte, audible hasta 300p de distancia, emana del objetivo."
        ]
    },

    "Restauración menor": {
        nivel: 2,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Tocas una criatura y terminas una condición en ella: Cegada, Sorda, Paralizada, o Envenenada."
        ]
    },

    "Levitar": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un resorte de metal)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Una criatura u objeto suelto de tu elección que puedas ver dentro del alcance se eleva verticalmente hasta 20p y permanece suspendida allí durante la duración. El hechizo puede levitar un objeto que pesa hasta 500 libras (227 kg). Una criatura que no es dispuesta que tiene éxito en una tirada de salvación de Constitución no es afectada.",
            "El objetivo solo puede moverse empujando o jalando contra un objeto fijo o superficie dentro del alcance (como una pared o techo), lo cual le permite moverse como si estuviera trepando. Puedes cambiar la altitud del objetivo hasta 20p en cualquier dirección en tu turno. Si eres el objetivo, puedes moverte hacia arriba o hacia abajo como parte de tu movimiento. De otra manera, puedes tomar una Acción de Magia para mover el objetivo, que debe permanecer dentro del alcance del hechizo.",
            "Cuando el hechizo termina, el objetivo flota suavemente al suelo si todavía está en el aire."
        ]
    },

    "Localizar animales o plantas": {
        nivel: 2,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Yo mismo",
        componentes: "V, S, M (pelaje de perro sabueso)",
        duracion: "Instantáneo",
        efecto: [
            "Describe o nombra un tipo específico de Bestia, criatura Planta, o planta no mágica. Aprendes la dirección y distancia a la criatura o planta más cercana de ese tipo dentro de 5 millas (8 km), si alguna está presente."
        ]
    },

    "Localizar objeto": {
        nivel: 2,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una rama bifurcada)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Describe o nombra un objeto que te es familiar. Sientes la dirección hacia la ubicación del objeto si ese objeto está dentro de 1000p de ti. Si el objeto está en movimiento, sabes la dirección de su movimiento.",
            "El hechizo puede localizar un objeto específico que conoces si lo has visto de cerca (dentro de 30p) al menos una vez. Alternativamente, el hechizo puede localizar el objeto más cercano de un tipo particular, como cierto tipo de atuendo, joyería, muebles, herramienta, o arma.",
            "Este hechizo no puede localizar un objeto si ninguún grosor de plomo bloquea un camino directo entre ti y el objeto."
        ]
    },

    "Boca mágica": {
        nivel: 2,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "1 minuto o Ritual",
        rango: "30p",
        componentes: "V, S, M (polvo de jade que cuesta 10+ MO, que el hechizo consume)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Implanta un mensaje dentro de un objeto dentro del alcance - un mensaje que es proferido cuando una condición disparadora es cumplida. Elige un objeto que puedas ver y que no está siendo llevado o portado por otra criatura. Luego habla el mensaje, que debe ser de 25 palabras o menos, aunque puede ser entregado pasados hasta 10 minutos. Finalmente, determina la circunstancia que disparará el hechizo para entregar tu mensaje.",
            "Cuando ese disparador ocurre, una boca mágica aparece en el objeto y recita el mensaje en tu voz y al mismo volumen en el que hablaste. Si el objeto que elegiste tiene una boca o algo que se parece a una boca (por ejemplo, la boca de una estatua), la boca mágica aparece allí, así que las palabras parecen venir de la boca del objeto. Cuando lanzas este hechizo, puedes hacer que el hechizo termine después de entregar su mensaje, o puede permanecer y repetir su mensaje siempre que el disparador ocurra.",
            "El disparador puede ser tan general o detallado como desees, aunque debe basarse en condiciones visuales o audibles que ocurren dentro de 30p del objeto. Por ejemplo, podrías instruir a la boca para hablar cuando cualquier criatura se mueve dentro de 30p del objeto o cuando una campana de plata suena dentro de 30p de él."
        ]
    },

    "Arma mágica": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Toque",
        componentes: "V, S",
        duracion: "1 hora",
        efecto: [
            "Tocas un arma no mágica. Hasta que el hechizo termine, ese arma se convierte en un arma mágica con un bonificación +1 a tiradas de ataque y tiradas de daño. El hechizo termina anticipadamente si lo lanzas de nuevo."
        ],
        escalado: {
            efecto: "La bonificación aumenta a +2 con un espacio de hechizo de nivel 3–5. La bonificación aumenta a +3 con un espacio de hechizo de nivel 6+."
        }
    },

    "Flecha ácida de Melf": {
        nivel: 2,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (polvo de hoja de ruibarbo)",
        duracion: "Instantáneo",
        efecto: [
            "Una flecha verde brillante vuela hacia un objetivo dentro del alcance y estalla en un rociador de ácido. Realiza un ataque de hechizo a distancia contra el objetivo. En un golpe, el objetivo recibe daño ácido 4d4 y daño ácido 2d4 al final de su siguiente turno. Con un fallo, la flecha salpica el objetivo con ácido por solo la mitad del daño inicial."
        ],
        escalado: {
            efecto: "El daño (tanto inicial como posterior) aumenta en 1d4 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Púa mental": {
        nivel: 2,
        escuela: "Adivinación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "S",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Clavas una púa de energía psíquica en la mente de una criatura que puedas ver dentro del alcance. El objetivo realiza una tirada de salvación de Sabiduría, recibiendo daño psíquico 3d8 si falla o la mitad si tiene éxito. Con una salvación fallida, también siempre sabes la ubicación del objetivo hasta que el hechizo termine, pero solo mientras los dos estén en el mismo plano de existencia. Mientras tienes este conocimiento, el objetivo no puede volverse oculto de ti, y si tiene la condición Invisible, no obtiene beneficio de esa condición contra ti."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Imagen especular": {
        nivel: 2,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "1 minuto",
        efecto: [
            "Tres duplicados ilusorios de ti aparecen en tu espacio. Hasta que el hechizo termine, los duplicados se mueven contigo y mimetizan tus acciones, cambiando de posición para que sea imposible rastrear cuál imagen es real.",
            "Cada vez que una criatura te golpea con una tirada de ataque durante la duración del hechizo, lanza un d6 para cada uno de tus duplicados restantes. Si cualquiera de los d6 lanza un 3 o superior, uno de los duplicados es golpeado en su lugar, y el duplicado es destruido. Los duplicados de otra manera ignoran todo otro daño y efectos. El hechizo termina cuando los tres duplicados son destruidos.",
            "Una criatura no es afectada por este hechizo si tiene la condición Cegada, Visión en la Oscuridad, o Visión Verdadera."
        ]
    },

    "Paso neblinoso": {
        nivel: 2,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Brevemente rodeado de neblina plateada, te teletransportas hasta 30p a un espacio desocupado que puedas ver."
        ]
    },

    "Rayo lunar": {
        nivel: 2,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (una hoja de semilla de luna)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Un rayo de apariencia pálida brilla hacia abajo en un Cilindro de radio 5p y 40p de alto centrado en un punto dentro del alcance. Hasta que el hechizo termine, Luz tenue llena el Cilindro, y puedes tomar una Acción de Magia en turnos posteriores para mover el Cilindro hasta 60p.",
            "Cuando el Cilindro aparece, cada criatura en él realiza una tirada de salvación de Constitución. Con una salvación fallida, una criatura recibe daño radiante 2d10, y si la criatura está transformada (como resultado del hechizo Polimorfismo, por ejemplo), revierte a su forma verdadera y no puede transformarse hasta que deje el Cilindro. Con una salvación exitosa, una criatura recibe solo la mitad del daño. Una criatura también realiza esta salvación cuando el área del hechizo se mueve hacia su espacio y cuando entra al área del hechizo o termina su turno allí. Una criatura realiza esta salvación solo una vez por turno."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Aura mágica de Nystul": {
        nivel: 2,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un pequeño cuadrado de seda)",
        duracion: "24 horas",
        efecto: [
            "Con un toque, colocas una ilusión en una criatura dispuesta u objeto que no está siendo llevado o portado. Una criatura gana el efecto Máscara a continuación, y un objeto gana el efecto Aura Falsa a continuación. El efecto dura durante la duración. Si lanzas el hechizo en el mismo objetivo cada día por 30 días, la ilusión dura hasta que sea disipada.",
            "Máscara (Criatura). Elige un tipo de criatura que no sea el tipo actual del objetivo. Hechizos y otros efectos mágicos tratan al objetivo como si fuera una criatura del tipo elegido.",
            "Aura Falsa (Objeto). Cambias la forma en que el objetivo aparece a hechizos y efectos mágicos que detectan auras mágicas, como Detectar magia. Puedes hacer que un objeto no mágico aparezca mágico, hacer que un objeto mágico aparezca no mágico, o cambiar el aura del objeto para que aparezca pertenecer a una escuela de magia que elijas."
        ]
    },

    "Pasar sin dejar rastro": {
        nivel: 2,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (cenizas de muérdago quemado)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Irradias un aura de ocultación en una Emanación de 30p durante la duración. Mientras estén en el aura, tú y cada criatura que elijas tienen un bonificación +10 a pruebas de Destreza (Sigilo) y no dejan rastros."
        ]
    },

    "Fuerza fantasmal": {
        nivel: 2,
        escuela: "Ilusión",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un poco de lana",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Intentas elaborar una ilusión en la mente de una criatura que puedas ver dentro del alcance. El objetivo realiza una tirada de salvación de Inteligencia. Con una salvación fallida, creas un objeto fantasmal, criatura u otro fenómeno que no es más grande que un Cubo de 10p y que es perceptible solo para el objetivo durante la duración. El fantasma incluye sonido, temperatura y otros estímulos.",
            "El objetivo puede tomar una acción de Examinar para inspeccionar el fantasma con una prueba de Inteligencia (Investigación) contra tu CD de salvación de hechizo. Si la prueba tiene éxito, el objetivo se da cuenta de que el fantasma es una ilusión, y el hechizo termina.",
            "Mientras es afectado por el hechizo, el objetivo trata el fantasma como si fuera real y racionaliza cualquier resultado ilógico de interactuar con él. Por ejemplo, si el objetivo camina a través de un puente fantasmal y sobrevive la caída, cree que el puente existe y algo más causó que cayera.",
            "Un objetivo afectado puede incluso recibir daño de la ilusión si el fantasma representa una criatura o peligro peligroso. En cada uno de tus turnos, tal fantasma puede infligir daño psíquico 2d8 al objetivo si está en el área del fantasma o dentro de 5p del fantasma. El objetivo percibe el daño como un tipo apropiado para la ilusión."
        ]
    },

    "Oración de curación": {
        nivel: 2,
        escuela: "Abjuración",
        tipo: "curacion",
        tiempo: "10 minutos",
        rango: "30p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Hasta cinco criaturas de tu elección que permanezcan dentro del alcance durante todo el lanzamiento del hechizo ganan los beneficios de un Descanso Corto y también recuperan Puntos de Golpe 2d8. Una criatura no puede ser afectada por este hechizo de nuevo hasta que esa criatura termine un Descanso Largo."
        ],
        escalado: {
            efecto: "La curación aumenta en 1d8 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Protección contra veneno": {
        nivel: 2,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "1 hora",
        efecto: [
            "Tocas una criatura y terminas la condición Envenenada en ella. Durante la duración, el objetivo tiene Ventaja en tiradas de salvación para evitar o terminar la condición Envenenada, y tiene Resistencia a daño de Veneno."
        ]
    },

    "Rayo de debilitamiento": {
        nivel: 2,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Un rayo de energía debilitante sale disparado desde ti hacia una criatura dentro del alcance. El objetivo debe tener éxito en una tirada de salvación de Constitución. Con una salvación exitosa, el objetivo tiene Desventaja en la próxima tirada de ataque que realiza hasta el inicio de tu siguiente turno.",
            "Con una salvación fallida, el objetivo tiene Desventaja en pruebas de D20 basadas en Fuerza durante la duración. Durante ese tiempo, también resta 1d8 de todas sus tiradas de daño. El objetivo repite la salvación al final de cada uno de sus turnos, terminando el hechizo en caso de éxito."
        ]
    },

    "Truco de cuerda": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un segmento de cuerda)",
        duracion: "1 hora",
        efecto: [
            "Tocas una cuerda. Un extremo de ella flota hacia arriba hasta que la cuerda cuelga perpendicular al suelo o la cuerda alcanza un techo. En el extremo superior de la cuerda, un portal Invisible de 3 pies (0.9 metros) por 5p se abre a un espacio extradimensional que dura hasta que el hechizo termine. Ese espacio puede ser alcanzado trepando la cuerda, que puede ser jalada hacia adentro o dejada caer de él.",
            "El espacio puede sostener hasta ocho criaturas Medianas o más pequeñas. Ataques, hechizos y otros efectos no pueden pasar dentro o fuera del espacio, pero las criaturas adentro pueden ver a través del portal. Cualquier cosa adentro del espacio cae afuera cuando el hechizo termina."
        ]
    },

    "Rayo abrasador": {
        nivel: 2,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas tres rayos de fuego. Puedes lanzarlos a un objetivo dentro del alcance o a varios. Realiza un ataque de hechizo a distancia para cada rayo. En un golpe, el objetivo recibe daño de fuego 2d6."
        ],
        escalado: {
            efecto: "Creas un rayo adicional para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Ver invisibilidad": {
        nivel: 2,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (un poco de talco)",
        duracion: "1 hora",
        efecto: [
            "Durante la duración, ves criaturas y objetos que tienen la condición Invisible como si fueran visibles, y puedes ver hacia el Plano Etéreo. Las criaturas y objetos allí aparecen espectrales."
        ]
    },

    "Destrozo": {
        nivel: 2,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un trozo de mica)",
        duracion: "Instantáneo",
        efecto: [
            "Un ruido fuerte estalla desde un punto de tu elección dentro del alcance. Cada criatura en una Esfera de radio 10p centrada allí realiza una tirada de salvación de Constitución, recibiendo daño de trueno 3d8 si falla o la mitad si tiene éxito. Un Constructo tiene Desventaja en la salvación.",
            "Un objeto no mágico que no está siendo llevado o portado también recibe el daño si está en el área del hechizo."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Golpe brillante": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "ataque",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear una criatura con un arma de combate o un Ataque Desarmado",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "El objetivo golpeado por el golpe recibe daño radiante adicional 2d6 del ataque. Hasta que el hechizo termine, el objetivo emite Luz brillante en un radio de 5p, las tiradas de ataque contra él tienen Ventaja, y no puede beneficiarse de la condición Invisible."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Silencio": {
        nivel: 2,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "120p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Durante la duración, ningún sonido puede ser creado dentro o pasar a través de una Esfera de radio 20p centrada en un punto que elijas dentro del alcance. Cualquier criatura u objeto completamente dentro de la Esfera tiene Inmunidad a daño de Trueno, y las criaturas tienen la condición Sorda mientras estén completamente adentro. Lanzar un hechizo que incluye un componente Verbal es imposible allí."
        ]
    },

    "Trepar por las paredes": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (una gota de betún y una araña)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Hasta que el hechizo termine, una criatura dispuesta que tocas gana la capacidad de moverse hacia arriba, hacia abajo y a través de superficies verticales y a lo largo de techos, mientras deja sus manos libres. El objetivo también obtiene una Velocidad de trepa igual a su Velocidad."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Crecimiento de púas": {
        nivel: 2,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (siete espinas)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "El suelo en una Esfera de radio 20p centrada en un punto dentro del alcance brota púas duras y espinas. El área se convierte en Terreno difícil durante la duración. Cuando una criatura se mueve hacia adentro o dentro del área, recibe daño perforante 2d4 por cada 5p que viaja.",
            "La transformación del suelo está camuflada para parecer natural. Cualquier criatura que no puede ver el área cuando el hechizo es lanzado debe tomar una acción de Búsqueda y tener éxito en una prueba de Sabiduría (Percepción o Supervivencia) contra tu CD de salvación de hechizo para reconocer el terreno como peligroso antes de entrar en él."
        ]
    },

    "Arma espiritual": {
        nivel: 2,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción adicional",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas una fuerza espectral y flotante que semeja un arma de tu elección y dura durante la duración. La fuerza aparece dentro del alcance en un espacio de tu elección, y puedes inmediatamente hacer un ataque de hechizo de combate contra una criatura dentro de 5p de la fuerza. En un golpe, el objetivo recibe daño de fuerza igual a 1d8 más tu modificador de habilidad de lanzamiento de hechizos.",
            "Como una Acción adicional en tus turnos posteriores, puedes mover la fuerza hasta 20p y repetir el ataque contra una criatura dentro de 5p metros de ella."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 2."
        }
    },

    "Sugestión": {
        nivel: 2,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, M (una gota de miel)",
        duracion: "Concentración, hasta 8 horas",
        efecto: [
            "Sugieres un curso de acción - descrito en no más de 25 palabras - a una criatura que puedas ver dentro del alcance que pueda escuchar y entender. La sugestión debe sonar alcanzable y no involucrar nada que obviamente causaría daño al objetivo o sus aliados. Por ejemplo, podrías decir, 'Trae la llave de la bóveda del tesoro del culto, y dame la llave.' O podrías decir, 'Deja de luchar, deja esta biblioteca pacíficamente, y no regreses.'",
            "El objetivo debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Encantada durante la duración o hasta que tú o tus aliados le causen daño. El objetivo Encantado persigue la sugestión lo mejor que pueda. La actividad sugerida puede continuar durante toda la duración, pero si la actividad sugerida puede ser completada en menos tiempo, el hechizo termina para el objetivo al completarla."
        ]
    },

    "Convocar bestia": {
        nivel: 2,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (una pluma, mechón de pelaje y cola de pez dentro de una bellota dorada que cuesta 200+ MO)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Llamas un espíritu bestial. Se manifiesta en un espacio desocupado que puedas ver dentro del alcance y usa el bloque de estadísticas de Espíritu Bestial. Cuando lanzas el hechizo, elige un ambiente: Aire, Tierra o Agua. La criatura se parece a un animal que es nativo del ambiente elegido, que determina ciertos detalles en su bloque de estadísticas. La criatura desaparece cuando cae a 0 Puntos de Golpe o cuando el hechizo termina.",
            "La criatura es un aliado para ti y tus aliados. En combate, la criatura comparte tu contador de Iniciativa, pero toma su turno inmediatamente después del tuyo. Obedece tus comandos verbales (sin acción requerida por ti). Si no emites ninguno, toma la acción Esquivar y usa su movimiento para evitar peligro.",
            "Bestia Espitual",
            "Pequeña Bestia, Neutral",
            "Clase Armadura 11 + el nivel del hechizo",
            "Puntos de Golpe 20 (solo aire) o 30 (solo tierra y agua) + 5 por cada nivel de hechizo superior a 2",
            "Velocidad: 30 pies.; Escalar 30 pies. (Solo tierra); Vuela 60 pies. (Solo aire); Nadar 30 pies. (Solo agua)",
            "Fuerza 18 (+4/+4) Destreza 11 (0/0) Constitución 16 (+3/+3) Inteligencia 4 (-3/-3) Sabiduría 14 (+2/+2) Carisma 5 (-3/-3)",
            "Sentidos Vision en la Oscuridad 60 pies., Percepción Pasiva 12",
            "Idiomas Entiende los idiomas que conoces",
            "Calificacion de desafio Ninguno, su Bonificador de Competencia es el mimso que el tuyo.",
            "Rasgos",
            "Sobrevuelo (solo aire). El espíritu no provoca ataques de oportunidad cuando sale volando del alcance de un enemigo.",
            "Tácticas de paquete (solo tierra y agua). El espíritu tiene ventaja en una tirada de ataque contra una criatura si al menos uno de los aliados del espíritu está a 5 pies de la criatura y el aliado no tiene la condición de incapacitado.",
            "Respiración de agua (solo agua). El espíritu sólo puede respirar bajo el agua.",
            "Acciones",
            "Multiataque. El espíritu realiza un número de ataques Desgarrar igual a la mitad del nivel de este hechizo (redondeado hacia abajo).",
            "Desgarrar. Tirada de ataque cuerpo a cuerpo: la bonificación es igual a tu modificador de ataque de hechizo, alcanza los 5 pies. Golpe: 1d8 + 4 + el nivel del hechizo Perforando el daño."
        ]
    },

    "Vínculo protector": {
        nivel: 2,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un par de anillos de platino que cuesta 50+ MO cada uno, que tú y el objetivo deben llevar durante la duración)",
        duracion: "1 hora",
        efecto: [
            "Tocas otra criatura que es dispuesta y creas una conexión mística entre ti y el objetivo hasta que el hechizo termine. Mientras el objetivo está dentro de 60p de ti, obtiene un bonificación +1 a CA y tiradas de salvación, y tiene Resistencia a todo daño. También, cada vez que recibe daño, tú recibes la misma cantidad de daño.",
            "El hechizo termina si caes a 0 Puntos de Golpe o si tú y el objetivo se separan por más de 60p. También termina si el hechizo es lanzado de nuevo en cualquiera de las criaturas conectadas."
        ]
    },

    "Telaraña": {
        nivel: 2,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un poco de telaraña)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Conjuras una masa de pegajosa telaraña en un punto dentro del alcance. Las telarañas llenan un Cubo de 20p allí durante la duración. Las telarañas son Terreno difícil, y el área dentro de ellas está Levemente Oscurecida.",
            "Si las telarañas no están ancladas entre dos masas sólidas (como paredes o árboles) o colocadas en capas en el piso, pared o techo, la telaraña se colapsa en sí misma, y el hechizo termina al inicio de tu siguiente turno. Telarañas colocadas en capas sobre una superficie plana tienen una profundidad de 5p.",
            "La primera vez que una criatura entra en las telarañas en un turno o comienza su turno allí, debe tener éxito en una tirada de salvación de Destreza o tener la condición Restringida mientras esté en las telarañas o hasta que se libere.",
            "Una criatura Restringida por las telarañas puede tomar una acción para hacer una prueba de Fuerza (Atletismo) contra tu CD de salvación de hechizo. Si tiene éxito, ya no está Restringida.",
            "Las telarañas son inflamables. Cualquier Cubo de 5p de telarañas expuesto al fuego se quema en 1 ronda, infligiendo daño de fuego 2d4 a cualquier criatura que comience su turno en el fuego."
        ]
    },

    "Zona de verdad": {
        nivel: 2,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "10 minutos",
        efecto: [
            "Creas una zona mágica que guarda contra el engaño en una Esfera de radio 15p centrada en un punto dentro del alcance. Hasta que el hechizo termine, una criatura que entra al área del hechizo por primera vez en un turno o comienza su turno allí realiza una tirada de salvación de Carisma. Con una salvación fallida, una criatura no puede hablar una mentira deliberada mientras está en el radio. Sabes si una criatura tiene éxito o falla en esta salvación.",
            "Una criatura afectada es consciente del hechizo y puede evitar responder preguntas a las que normalmente respondería con una mentira. Tal criatura puede ser evasiva pero debe ser veraz."
        ]
    },

    "Muertos animados": {
        nivel: 3,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "10p",
        componentes: "V, S, M (una gota de sangre, un trozo de carne y un poco de polvo de hueso)",
        duracion: "Instantáneo",
        efecto: [
            "Elige un montón de huesos o el cadáver de un humanoide Mediano o Pequeño dentro del alcance. El objetivo se convierte en una criatura No-muerta: un Esqueleto si elegiste huesos o un Zombi si elegiste cadáver.",
            "En cada uno de tus turnos, puedes tomar una Acción adicional para ordenar mentalmente a cualquier criatura que hayas creado con este hechizo si la criatura está dentro de 60p de ti. Decides qué acción realizará la criatura y dónde se moverá en su siguiente turno, o puedes emitir un comando general, como guardar una cámara o pasillo. Si no emites comandos, la criatura toma la acción Esquivar y se mueve solo para evitar daño.",
            "La criatura está bajo tu control durante 24 horas, después de lo cual deja de obedecer cualquier comando que le hayas dado. Para mantener el control de la criatura durante otras 24 horas, debes lanzar este hechizo sobre la criatura nuevamente antes de que termine el período actual de 24 horas. Este uso del hechizo reafirma tu control sobre hasta cuatro criaturas que hayas animado con este hechizo en lugar de animar una nueva criatura."
        ],
        escalado: {
            efecto: "Animas o reafirmas el control sobre dos criaturas No-muertas adicionales para cada nivel de espacio de hechizo superior a 3. Cada una de las criaturas debe provenir de un cadáver o montón de huesos diferente."
        }
    },

    "Aura de vitalidad": {
        nivel: 3,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Un aura irradia desde ti en una Emanación de 30p durante la duración. Cuando creas el aura y al inicio de cada uno de tus turnos mientras persiste, puedes restaurar 2d6 Puntos de Golpe a una criatura en él."
        ]
    },

    "Faro de esperanza": {
        nivel: 3,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Elige cualquier número de criaturas dentro del alcance. Durante la duración, cada objetivo tiene Ventaja en tiradas de salvación de Sabiduría y tiradas de salvación contra la muerte, y recupera el máximo número de Puntos de Golpe posible de cualquier curación."
        ]
    },

    "Otorgar maldición": {
        nivel: 3,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Tocas una criatura, que debe tener éxito en una tirada de salvación de Sabiduría o quedar maldita durante la duración. Hasta que termine la maldición, el objetivo sufre uno de los siguientes efectos de tu elección:",
            "Elige una habilidad. El objetivo tiene Desventaja en pruebas de habilidad y tiradas de salvación realizadas con esa habilidad.",
            "El objetivo tiene Desventaja en tiradas de ataque contra ti.",
            "En combate, el objetivo debe tener éxito en una tirada de salvación de Sabiduría al inicio de cada uno de sus turnos o ser forzado a tomar la acción Esquivar en ese turno.",
            "Si infliges daño al objetivo con una tirada de ataque o un hechizo, el objetivo recibe daño necrótico adicional 1d8."
        ],
        escalado: {
            efecto: "Si lanzas este hechizo usando un espacio de hechizo de nivel 4, puedes mantener Concentración en él hasta 10 minutos. Si usas un espacio de hechizo de nivel 5+, el hechizo no requiere Concentración y la duración se convierte en 8 horas (espacio 5–6) o 24 horas (espacio 7–8). Si usas un espacio de hechizo de nivel 9, el hechizo dura hasta que sea disipado."
        }
    },

    "Golpe cegador": {
        nivel: 3,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear una criatura con un arma de combate o un ataque desarmado",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "1 minuto",
        efecto: [
            "El objetivo golpeado por el golpe recibe daño radiante adicional 3d8 del ataque, y el objetivo tiene la condición Cegado hasta que el hechizo termine. Al final de cada uno de sus turnos, el objetivo Cegado realiza una tirada de salvación de Constitución, terminando el hechizo en sí mismo si tiene éxito."
        ],
        escalado: {
            efecto: "El daño adicional aumenta en 1d8 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Parpadeo": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "1 minuto",
        efecto: [
            "Lanza 1d6 al final de cada uno de tus turnos durante la duración. Con un resultado de 4–6, desapareces de tu plano de existencia actual y apareces en el Plano Etéreo (el hechizo termina instantáneamente si ya estás en ese plano). Mientras estés en el Plano Etéreo, puedes percibir el plano que dejaste, que se ve en tonos de gris, pero no puedes ver nada allí a más de 60p de distancia. Solo puedes afectar y ser afectado por otras criaturas en el Plano Etéreo, y las criaturas en el otro plano no pueden percibirte a menos que tengan una habilidad especial que les permita percibir cosas en el Plano Etéreo.",
            "Regresas al otro plano al inicio de tu siguiente turno y cuando el hechizo termina si estás en el Plano Etéreo. Regresas a un espacio desocupado de tu elección que puedas ver dentro de 10p del espacio que dejaste. Si no hay ningún espacio desocupado disponible dentro de ese rango, apareces en el espacio desocupado más cercano."
        ]
    },

    "Escudo cacofónico": {
        nivel: 3,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Reverberaciones estruendosas llena una Emanación de 10p originada desde ti durante la duración. Siempre que la Emanación entra en el espacio de una criatura y siempre que una criatura entra en la Emanación o termina su turno allí, la criatura realiza una tirada de salvación de Constitución. Si falla, la criatura recibe daño de trueno 3d6 y tiene la condición Sordera hasta el inicio de tu siguiente turno. Si tiene éxito, la criatura recibe la mitad del daño. Una criatura realiza esta salvación solo una vez por turno. Cuando lanzas este hechizo, puedes designar criaturas para que no sean afectadas por él.",
            "Además, tienes Resistencia al daño de trueno y las tiradas de ataque a distancia contra ti se realizan con Desventaja."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Llamada de rayo": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Una nube de tormenta aparece en un punto dentro del alcance que puedas ver por encima de ti. Toma la forma de un Cilindro que es 10p alto con un radio de 60p.",
            "Cuando lanzas el hechizo, elige un punto que puedas ver bajo la nube. Un rayo dispara desde la nube hacia ese punto. Cada criatura dentro de 5p de ese punto realiza una tirada de salvación de Destreza, recibiendo daño de rayo 3d10 si falla o la mitad si tiene éxito.",
            "Hasta que el hechizo termine, puedes tomar una acción de Magia para llamar rayo de esa manera nuevamente, apuntando al mismo punto o a uno diferente.",
            "Si estás al aire libre en una tormenta cuando lanzas este hechizo, el hechizo te da control sobre esa tormenta en lugar de crear una nueva. Bajo tales condiciones, el daño del hechizo aumenta en 1d10."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Clarividencia": {
        nivel: 3,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "1 milla (1.6 km)",
        componentes: "V, S, M (un foco que cuesta 100+ MO, ya sea un cuerno enjoyado para escuchar u un ojo de vidrio para ver)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Creas un sensor Invisible dentro del alcance en una ubicación familiar para ti (un lugar que has visitado o visto antes) o en una ubicación obvia que es desconocida para ti (como detrás de una puerta, alrededor de una esquina, o en una arboleda). El sensor intangible e invulnerable permanece en su lugar durante la duración.",
            "Cuando lanzas el hechizo, elige ver u oír. Puedes usar el sentido elegido a través del sensor como si estuvieras en su espacio. Como una Acción adicional, puedes cambiar entre ver y oír.",
            "Una criatura que ve el sensor (como una criatura que se beneficia de Ver Invisibilidad o Visión verdadera) ve un orbe luminoso del tamaño aproximado de tu puño."
        ]
    },

    "Convocar animales": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Convocas espíritus de la naturaleza que aparecen como una gran manada espectral e intangible de animales en un espacio desocupado que puedas ver dentro del alcance. La manada dura durante la duración, y tú eliges la forma animal de los espíritus, como lobos, serpientes o aves.",
            "Tienes Ventaja en tiradas de salvación de Fuerza mientras estés dentro de 5p de la manada, y cuando te mueves en tu turno, también puedes mover la manada hasta 30p a un espacio desocupado que puedas ver.",
            "Siempre que la manada se mueva dentro de 10p de una criatura que puedas ver y siempre que una criatura que puedas ver entra en un espacio dentro de 10p de la manada o termina su turno allí, puedes forzar a esa criatura a realizar una tirada de salvación de Destreza. Si falla, la criatura recibe daño cortante 3d10. Una criatura realiza esta salvación solo una vez por turno."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Lluvia de proyectiles": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (un arma de combate o a distancia que cuesta al menos 1 MO)",
        duracion: "Instantáneo",
        efecto: [
            "Blandieces el arma usada para lanzar el hechizo y convocas armas espectrales similares (o munición apropiada para el arma) que se lanzan hacia adelante y luego desaparecen. Cada criatura de tu elección que puedas ver en un cono de 60p realiza una tirada de salvación de Destreza, recibiendo daño de fuerza 5d8 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Convocar constructos": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un engranaje de latón)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Convocas un grupo de espíritus intangibles y ordenados que aparecen como un grupo Mediano de módrones u otros Constructos en un espacio desocupado que puedas ver dentro del alcance. Los espíritus duran durante la duración.",
            "Cuando lanzas este hechizo y como acción de Magia en turnos posteriores, puedes ordenar a los espíritus que apunten a una criatura u objeto que puedas ver dentro de 5p de los espíritus y crear uno de los siguientes efectos:",
            "Fuerza mecánica. El objetivo realiza una tirada de salvación de Destreza, recibiendo daño de fuerza 3d6 si falla o la mitad si tiene éxito.",
            "Protección ordenada. El objetivo gana Puntos de Golpe temporales iguales a 1d6 más tu modificador de habilidad de lanzamiento de hechizos.",
            "Cuando te mueves en tu turno, también puedes mover los espíritus hasta 30p a un espacio desocupado que puedas ver."
        ],
        escalado: {
            efecto: "El daño y los Puntos de Golpe temporales aumentan en 1d6 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Contrahechizo": {
        nivel: 3,
        escuela: "Abjuración",
        tipo: "salvacion",
        tiempo: "Reacción, que realizas cuando ves a una criatura dentro de 18 metros de ti lanzando un hechizo con componentes Verbales, Somáticos o Materiales",
        rango: "60p",
        componentes: "S",
        duracion: "Instantáneo",
        efecto: [
            "Intentas interrumpir a una criatura en el proceso de lanzar un hechizo. La criatura realiza una tirada de salvación de Constitución. Si falla, el hechizo se disipa sin efecto, y la acción, Acción adicional o Reacción utilizada para lanzarlo se desperdicia. Si ese hechizo fue lanzado con un espacio de hechizo, el espacio no se agota."
        ]
    },

    "Crear comida y agua": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Creas 45 libras (20 kg) de comida y 30 galones (110 l) de agua dulce en el suelo o en contenedores dentro del alcance, ambos útiles para defenderse de los peligros de la desnutrición y deshidratación. La comida es sosa pero nutritiva y parece una comida de tu elección, y el agua es limpia. La comida se echa a perder después de 24 horas si no se come."
        ]
    },

    "Capa del cruzado": {
        nivel: 3,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Irradias un aura mágica en una Emanación de 30p. Mientras estén en el aura, tú y tus aliados infliges daño radiante adicional 1d4 al golpear con un arma o un ataque desarmado."
        ]
    },

    "Luz del día": {
        nivel: 3,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "1 hora",
        efecto: [
            "Durante la duración, la luz solar se extiende desde un punto dentro del alcance y llena una Esfera de radio 60p. El área de luz solar es Luz brillante y emite Luz tenue para 60p adicionales.",
            "Alternativamente, lanzas el hechizo en un objeto que no está siendo llevado o portado, causando que la luz solar llene una Emanación de 60p originada desde ese objeto. Cubrir ese objeto con algo opaco, como un recipiente o casco, bloquea la luz solar.",
            "Si algún área de este hechizo se superpone con un área de Oscuridad creada por un hechizo de nivel 3 o inferior, ese otro hechizo es disipado."
        ]
    },

    "Disipar magia": {
        nivel: 3,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Elige una criatura, objeto o efecto mágico dentro del alcance. Cualquier hechizo en curso de nivel 3 o inferior en el objetivo termina. Para cada hechizo en curso de nivel 4 o superior en el objetivo, realiza una prueba de habilidad usando tu habilidad de lanzamiento de hechizos (CD 10 más el nivel de ese hechizo). Con una prueba exitosa, el hechizo termina."
        ],
        escalado: {
            efecto: "Terminas automáticamente un hechizo en el objetivo si el nivel del hechizo es igual a o menor que el nivel del espacio de hechizo que usas."
        }
    },

    "Arma elemental": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Un arma no mágica que tocas se convierte en un arma mágica. Elige uno de los siguientes tipos de daño: Ácido, Frío, Fuego, Rayo o Trueno. Durante la duración, el arma tiene un bonificación +1 a las tiradas de ataque e inflige daño adicional 1d4 del tipo elegido cuando golpea."
        ],
        escalado: {
            efecto: "Si usas un espacio de hechizo de nivel 5–6, el bonificación a las tiradas de ataque aumenta a +2 y el daño adicional aumenta a 2d4. Si usas un espacio de hechizo de nivel 7+, el bonificación aumenta a +3 y el daño adicional aumenta a 3d4."
        }
    },

    "Miedo": {
        nivel: 3,
        escuela: "Ilusión",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una pluma blanca)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Cada criatura en un cono de 30p debe tener éxito en una tirada de salvación de Sabiduría o soltar lo que está sosteniendo y tener la condición Asustada durante la duración.",
            "Una criatura Asustada toma la acción Correr y se aleja de ti por la ruta más segura en cada uno de sus turnos a menos que no tenga dónde moverse. Si la criatura termina su turno en un espacio donde no tiene línea de vista hacia ti, la criatura realiza una tirada de salvación de Sabiduría. Si tiene éxito, el hechizo termina en esa criatura."
        ]
    },

    "Fingir muerte": {
        nivel: 3,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Toque",
        componentes: "V, S, M (un poco de tierra de cementerio)",
        duracion: "1 hora",
        efecto: [
            "Tocas una criatura dispuesta y la colocas en un estado cataléptico que es indistinguible de la muerte.",
            "Durante la duración, el objetivo parece muerto para inspección externa y para hechizos usados para determinar el estado del objetivo. El objetivo tiene las condiciones Cegado e Incapacitado, y su Velocidad es 0.",
            "El objetivo también tiene Resistencia a todo daño excepto daño Psíquico, e tiene Inmunidad a la condición Envenenada."
        ]
    },

    "Bola de fuego": {
        nivel: 3,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (una bolita de guano de murciélago y azufre)",
        duracion: "Instantáneo",
        efecto: [
            "Un rayo brillante parpadea desde ti hacia un punto que elijas dentro del alcance y luego florece con un rugido bajo en una explosión de fuego. Cada criatura en una Esfera de radio 20p centrada en ese punto realiza una tirada de salvación de Destreza, recibiendo daño de fuego 8d6 si falla o la mitad si tiene éxito.",
            "Los objetos inflamables en el área que no están siendo llevados o portados comienzan a arder."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Volar": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (una pluma)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Tocas una criatura dispuesta. Durante la duración, el objetivo gana una Velocidad de vuelo de 60p y puede cernerse. Cuando el hechizo termina, el objetivo cae si todavía está en el aire a menos que pueda detener la caída."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Forma gaseosa": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un poco de gasa)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Una criatura dispuesta que tocas se metamorfosea, junto con todo lo que está usando y llevando, en una nube brumosa durante la duración. El hechizo termina en el objetivo si cae a 0 Puntos de Golpe o si toma una acción de Magia para terminar el hechizo en sí mismo.",
            "Mientras está en esta forma, el único método de movimiento del objetivo es una Velocidad de vuelo de 10p, y puede cernerse. El objetivo puede entrar y ocupar el espacio de otra criatura. El objetivo tiene Resistencia a daño Contundente, Perforante y Cortante; tiene Inmunidad a la condición Tendida; y tiene Ventaja en tiradas de salvación de Fuerza, Destreza y Constitución. El objetivo puede pasar a través de aberturas estrechas, pero trata los líquidos como si fueran superficies sólidas.",
            "El objetivo no puede hablar o manipular objetos, y cualquier objeto que estuviera llevando o sosteniendo no puede ser soltado, usado o interactuado de otra manera. Finalmente, el objetivo no puede atacar o lanzar hechizos."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Glifo de protección": {
        nivel: 3,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "1 hora",
        rango: "Toque",
        componentes: "V, S, M (diamante en polvo que cuesta 200+ MO, que el hechizo consume)",
        duracion: "Hasta que sea disipado o se active",
        efecto: [
            "Inscribes un glifo que luego desata un efecto mágico. Lo inscribes ya sea en una superficie (como una mesa o una sección de piso) o dentro de un objeto que puede cerrarse (como un libro o cofre) para ocultar el glifo. El glifo puede cubrir un área no más grande de 10p de diámetro. Si la superficie u objeto se mueve más de 10p de donde lanzaste este hechizo, el glifo se rompe y el hechizo termina sin ser activado.",
            "El glifo es casi imperceptible y requiere una prueba exitosa de Sabiduría (Percepción) contra tu CD de salvación de hechizo para notar.",
            "Cuando inscribes el glifo, estableces su disparador y eliges si es una runa explosiva o un glifo de hechizo, como se explica a continuación.",
            "Establece el disparador. Decides qué dispara el glifo cuando lanzas el hechizo. Para glifos inscritos en una superficie, los disparadores comunes incluyen tocar o pisar el glifo, remover otro objeto que lo cubre, o acercarse dentro de una cierta distancia. Para glifos inscritos dentro de un objeto, los disparadores comunes incluyen abrir ese objeto o ver el glifo. Una vez que se activa un glifo, este hechizo termina.",
            "Puedes refinar el disparador para que solo criaturas de ciertos tipos lo activen (por ejemplo, el glifo podría estar configurado para afectar Aberraciones). También puedes establecer condiciones para criaturas que no disparan el glifo, como aquellas que dicen una contraseña específica.",
            "Runa explosiva. Cuando se activa, el glifo estalla con energía mágica en una Esfera de radio 20p centrada en el glifo. Cada criatura en el área realiza una tirada de salvación de Destreza. Una criatura recibe daño de Ácido, Frío, Fuego, Rayo o Trueno (tu elección cuando creas el glifo) 5d8 si falla o la mitad si tiene éxito.",
            "Glifo de hechizo. Puedes almacenar un hechizo preparado de nivel 3 o inferior en el glifo lanzándolo como parte de crear el glifo. El hechizo debe atacar a una única criatura o un área. El hechizo que se almacena no tiene efecto inmediato cuando se lanza de esta manera.",
            "Cuando el glifo se activa, el hechizo almacenado toma efecto. Si el hechizo tiene un objetivo, ataca a la criatura que activó el glifo. Si el hechizo afecta un área, el área está centrada en esa criatura. Si el hechizo invoca criaturas Hostiles o crea objetos o trampas dañinos, aparecen lo más cerca posible del intruso y lo atacan. Si el hechizo requiere Concentración, dura hasta el final de su duración completa."
        ],
        escalado: {
            efecto: "El daño de una runa explosiva aumenta en 1d8 para cada nivel de espacio de hechizo superior a 3. Si creas un glifo de hechizo, puedes almacenar cualquier hechizo de hasta el mismo nivel que el espacio de hechizo que usas para el Glifo de protección."
        }
    },

    "Prisa": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (un rasguño de raíz de regaliz)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Elige una criatura dispuesta que puedas ver dentro del alcance. Hasta que el hechizo termine, la Velocidad del objetivo se duplica, gana un bonificación +2 a la Clase de Armadura, tiene Ventaja en tiradas de salvación de Destreza, y gana una acción adicional en cada uno de sus turnos. Esa acción solo puede ser utilizada para tomar la acción Ataque (un ataque solamente), Correr, Desengancharse, Ocultarse o Utilizar.",
            "Cuando el hechizo termina, el objetivo está Incapacitado y tiene una Velocidad de 0 hasta el final de su siguiente turno, conforme una ola de letargo lo envuelve."
        ]
    },

    "Hambre de Hadar": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (un tentáculo en vinagre)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Abres un portal al Reino Lejano, una región infestada de horrors indecibles. Una Esfera de Oscuridad de radio 20p aparece, centrada en un punto dentro del alcance y durando durante la duración. La Esfera es Terreno difícil, y está llena de susurros extraños y sonidos de sorbe, que pueden ser escuchados hasta 30p de distancia. Ninguna luz, mágica u otra, puede iluminar el área, y las criaturas completamente dentro tienen la condición Cegada.",
            "Cualquier criatura que inicie su turno en el área recibe daño de frío 2d6. Cualquier criatura que termine su turno allí debe tener éxito en una tirada de salvación de Destreza o recibir daño de ácido 2d6 de tentáculos de otro mundo."
        ],
        escalado: {
            efecto: "El daño de frío o ácido (tu elección) aumenta en 1d6 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Patrón hipnótico": {
        nivel: 3,
        escuela: "Ilusión",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "S, M (un poco de confeti)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas un patrón ondulante de colores en un Cubo de 30p dentro del alcance. El patrón aparece un momento y desaparece. Cada criatura en el área que pueda ver el patrón debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Encantada durante la duración. Mientras está Encantada, la criatura tiene la condición Incapacitada y una Velocidad de 0.",
            "El hechizo termina para una criatura afectada si recibe daño o si alguien más usa una acción para sacudirla de su estupor."
        ]
    },

    "Lanza plateada de Laeral": {
        nivel: 3,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (un alfiler de plata que cuesta 250+ MO)",
        duracion: "Instantáneo",
        efecto: [
            "Energía plateada estalla desde ti en una Línea de 120p de largo y 5p de ancho. Cada criatura de tu elección en la Línea realiza una tirada de salvación de Fuerza. Si falla, una criatura recibe daño de fuerza 3d10 y tiene la condición Tendida. Si tiene éxito, una criatura recibe la mitad del daño."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Choza diminuta de Leomund": {
        nivel: 3,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "1 minuto o Ritual",
        rango: "Yo mismo",
        componentes: "V, S, M (una perla de cristal)",
        duracion: "8 horas",
        efecto: [
            "Una Emanación de 10p surge en existencia alrededor de ti y permanece estacionaria durante la duración. El hechizo falla cuando lo lanzas si la Emanación no es lo suficientemente grande para encapsular completamente a todas las criaturas en su área.",
            "Las criaturas y objetos dentro de la Emanación cuando lanzas el hechizo pueden moverse a través de ella libremente. Todas las otras criaturas y objetos son impedidos de pasar a través de ella. Hechizos de nivel 3 o inferior no pueden ser lanzados a través de ella, y los efectos de tales hechizos no pueden extenderse hacia ella.",
            "La atmósfera dentro de la Emanación es cómoda y seca, independientemente del clima afuera. Hasta que el hechizo termine, puedes ordenar al interior que tenga Luz tenue u Oscuridad (sin acción requerida). La Emanación es opaca desde afuera y de cualquier color que elijas, pero es transparente desde adentro.",
            "El hechizo termina anticipadamente si dejas la Emanación o si lo lanzas de nuevo."
        ]
    },

    "Flecha de rayo": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "ataque",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear o fallar un objetivo con un ataque a distancia usando un arma",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Conforme tu ataque golpea o falla el objetivo, el arma o munición que estás usando se transforma en un rayo. En lugar de tomar daño u otros efectos del ataque, el objetivo recibe daño de rayo 4d8 si golpea o la mitad si falla. Cada criatura dentro de 10p del objetivo realiza una tirada de salvación de Destreza, recibiendo daño de rayo 2d8 si falla o la mitad si tiene éxito.",
            "El arma o munición luego regresa a su forma normal."
        ],
        escalado: {
            efecto: "El daño para ambos efectos del hechizo aumenta en 1d8 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Rayo de rayo": {
        nivel: 3,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (un poco de pelaje y una vara de cristal)",
        duracion: "Instantáneo",
        efecto: [
            "Un rayo de rayo formando una Línea de 100p de largo y 5p de ancho estalla desde ti en una dirección que elijas. Cada criatura en la Línea realiza una tirada de salvación de Destreza, recibiendo daño de rayo 8d6 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Círculo mágico": {
        nivel: 3,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "10p",
        componentes: "V, S, M (sal y plata en polvo que cuesta 100+ MO, que el hechizo consume)",
        duracion: "1 hora",
        efecto: [
            "Creas un Cilindro de energía mágica de radio 10p y 20p de alto centrado en un punto en el suelo que puedas ver dentro del alcance. Runas brillantes aparecen donde el Cilindro se intersecta con el piso u otra superficie.",
            "Elige uno o más de los siguientes tipos de criaturas: Celestiales, Elementales, Feéricos, Demonios o No-muertos. El círculo afecta a una criatura del tipo elegido de las siguientes maneras:",
            "La criatura no puede entrar voluntariamente en el Cilindro por medios no mágicos. Si la criatura intenta usar teletransportación o viaje interplanar para hacerlo, primero debe tener éxito en una tirada de salvación de Carisma.",
            "La criatura tiene Desventaja en tiradas de ataque contra objetivos dentro del Cilindro.",
            "Los objetivos dentro del Cilindro no pueden ser poseídos por la criatura ni ganar las condiciones Encantado o Asustado de la criatura.",
            "Cada vez que lanzas este hechizo, puedes hacer que su magia funcione en la dirección inversa, previniendo que una criatura del tipo especificado abandone el Cilindro y protegiendo objetivos fuera de él."
        ],
        escalado: {
            efecto: "La duración aumenta 1 hora para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Imagen mayor": {
        nivel: 3,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (un poco de vellón)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Creas la imagen de un objeto, una criatura o algún otro fenómeno visible que no sea más grande de un Cubo de 20p. La imagen aparece en un punto que puedas ver dentro del alcance y dura durante la duración. Parece real, incluyendo sonidos, olores y temperatura apropiados a lo que se representa, pero no puede infligir daño o causar condiciones.",
            "Si estás dentro del alcance de la ilusión, puedes tomar una acción de Magia para hacer que la imagen se mueva a cualquier otro punto dentro del alcance. Conforme la imagen cambia de ubicación, puedes alterar su apariencia para que sus movimientos parezcan naturales para la imagen. Por ejemplo, si creas la imagen de una criatura y la mueves, puedes alterar la imagen para que parezca estar caminando. Similarmente, puedes hacer que la ilusión emita diferentes sonidos en diferentes momentos, incluso haciendo que tenga una conversación, por ejemplo.",
            "La interacción física con la imagen la revela como ilusión, para que las cosas la pasen. Una criatura que toma una acción de Examinar la imagen puede determinar que es una ilusión con una prueba exitosa de Inteligencia (Investigación) contra tu CD de salvación de hechizo. Si una criatura discrepa la ilusión por lo que es, la criatura puede ver a través de la imagen, y sus otras cualidades sensoriales se vuelven débiles para la criatura."
        ],
        escalado: {
            efecto: "El hechizo dura hasta que sea disipado, sin requerir Concentración, si es lanzado con un espacio de hechizo de nivel 4+."
        }
    },

    "Palabra de curación en masa": {
        nivel: 3,
        escuela: "Abjuración",
        tipo: "curacion",
        tiempo: "Acción adicional",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Hasta seis criaturas de tu elección que puedas ver dentro del alcance recuperan Puntos de Golpe iguales a 2d4 más tu modificador de habilidad de lanzamiento de hechizos."
        ],
        escalado: {
            efecto: "La curación aumenta en 1d4 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Fusionarse con la piedra": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Toque",
        componentes: "V, S",
        duracion: "8 horas",
        efecto: [
            "Entras en un objeto de piedra o superficie lo suficientemente grande como para contener completamente tu cuerpo, fusionándote a ti mismo y tu equipo con la piedra durante la duración. Debes tocar la piedra para hacerlo. Nada de tu presencia permanece visible u de otra manera detectable por los sentidos no mágicos.",
            "Mientras estés fusionado con la piedra, no puedes ver lo que ocurre fuera de ella, y cualquier prueba de Sabiduría (Percepción) que realices para escuchar sonidos fuera de ella se realiza con Desventaja. Permaneces consciente del paso del tiempo y puedes lanzar hechizos en ti mismo mientras estés fusionado en la piedra. Puedes usar 5p de movimiento para salir de la piedra donde entraste, lo que termina el hechizo. De otra manera no puedes moverte.",
            "El daño físico menor a la piedra no te daña, pero su destrucción parcial o un cambio en su forma (hasta el punto en que ya no encajes dentro de ella) te expulsa e inflige daño de fuerza 6d6. La destrucción completa de la piedra (o transmutación en una sustancia diferente) te expulsa e inflige daño de fuerza 50. Si eres expulsado, te mueves al espacio desocupado más cercano donde primero entraste y tienes la condición Tendida."
        ]
    },

    "No detección": {
        nivel: 3,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un poco de polvo de diamante que cuesta 25+ MO, que el hechizo consume)",
        duracion: "8 horas",
        efecto: [
            "Durante la duración, ocultas un objetivo que tocas de hechizos de Adivinación. El objetivo puede ser una criatura dispuesta, o puede ser un lugar u objeto no más grande de 10p en ninguna dimensión. El objetivo no puede ser atacado por ningún hechizo de Adivinación ni percibido a través de sensores de exploración mágica."
        ]
    },

    "Caballo fantasma": {
        nivel: 3,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "1 minuto o Ritual",
        rango: "30p",
        componentes: "V, S",
        duracion: "1 hora",
        efecto: [
            "Una criatura Grande, cuasireal, similar a un caballo aparece en el suelo en un espacio desocupado de tu elección dentro del alcance. Decides la apariencia de la criatura, y está equipada con una silla de montar, freno y brida. Cualquier equipo creado por el hechizo desaparece en una nube de humo si es llevado más de 10p lejos del caballo.",
            "Durante la duración, tú o una criatura que elijas pueden montar el caballo. El caballo usa el bloque de estadísticas del Caballo de montar (ve el Apéndice B), excepto que tiene una Velocidad de 100p y puede viajar 13 millas (20 km) en una hora. Cuando el hechizo termina, el caballo gradualmente se desvanece, dando al jinete 1 minuto para desmontar. El hechizo termina anticipadamente si el caballo recibe daño."
        ]
    },

    "Crecimiento de plantas": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción (Sobrecrecimiento) u 8 horas (Enriquecimiento)",
        rango: "150p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Este hechizo canaliza vitalidad en las plantas. El tiempo de lanzamiento que usas determina si el hechizo tiene el efecto Sobrecrecimiento o Enriquecimiento a continuación.",
            "Sobrecrecimiento. Elige un punto dentro del alcance. Todas las plantas normales en una Esfera de radio 100p centrada en ese punto se vuelven espesas y sobrecrecidas. Una criatura moviéndose a través de esa área debe gastar 4 pies (1.2 m) de movimiento por cada 1 pie (0.3 m) que se mueve. Puedes excluir una o más áreas de cualquier tamaño dentro del área del hechizo de ser afectadas.",
            "Enriquecimiento. Todas las plantas en un radio de 0.8 kilómetros centrado en un punto dentro del alcance se enriquecen durante 365 días. Las plantas producen el doble de la cantidad normal de comida cuando se cosechan. Solo pueden beneficiarse de un Crecimiento de plantas por año."
        ]
    },

    "Protección de la energía": {
        nivel: 3,   
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Durante la duración, la criatura dispuesta que tocas tiene Resistencia a un tipo de daño de tu elección: Ácido, Frío, Fuego, Rayo o Trueno."
        ]
    },

    "Remover maldición": {
        nivel: 3,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Con tu toque, todas las maldiciones que afecten a una criatura u objeto terminan. Si el objeto es un objeto mágico maldito, su maldición permanece, pero el hechizo rompe la Sintonización de su dueño al objeto para que pueda ser removido o descartado."
        ]
    },

    "Revivificar": {
        nivel: 3,
        escuela: "Nigromancia",
        tipo: "curacion",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un diamante que cuesta 300+ MO, que el hechizo consume)",
        duracion: "Instantáneo",
        efecto: [
            "Tocas una criatura que ha muerto dentro del último minuto. Esa criatura revive con 1 Punto de Golpe. Este hechizo no puede revivir a una criatura que ha muerto de vejez, ni restaura ninguna parte del cuerpo desaparecida."
        ]
    },

    "Envío": {
        nivel: 3,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Sin límite",
        componentes: "V, S, M (un alambre de cobre)",
        duracion: "Instantáneo",
        efecto: [
            "Envías un mensaje corto de 25 palabras o menos a una criatura que has conocido o una criatura descrita por alguien que la ha conocido. El objetivo escucha el mensaje en su mente, te reconoce como el remitente si te conoce, y puede responder de manera similar inmediatamente. El hechizo permite que los objetivos entiendan el significado de tu mensaje.",
            "Puedes enviar el mensaje a través de cualquier distancia e incluso a otros planos de existencia, pero si el objetivo está en un plano diferente al tuyo, hay un 5 por ciento de probabilidad de que el mensaje no llegue. Sabes si la entrega falla.",
            "Al recibir tu mensaje, una criatura puede bloquear tu capacidad de alcanzarlo nuevamente con este hechizo durante 8 horas. Si intentas enviar otro mensaje durante ese tiempo, aprendes que estás bloqueado y el hechizo falla."
        ]
    },

    "Tormenta de granizo": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (una sombrilla en miniatura)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Hasta que el hechizo termine, caen granizos en un Cilindro de 40p de alto y radio 20p centrado en un punto que elijas dentro del alcance. El área está Muy Oscurecida, y las llamas expuestas en el área están apagadas.",
            "El terreno en el Cilindro es Terreno difícil. Cuando una criatura entra en el Cilindro por primera vez en un turno o inicia su turno allí, debe tener éxito en una tirada de salvación de Destreza o tener la condición Tendida y perder Concentración."
        ]
    },

    "Lentitud": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (una gota de melaza)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Alteras el tiempo alrededor de hasta seis criaturas de tu elección en un Cubo de 12 metros dentro del alcance. Cada objetivo debe tener éxito en una tirada de salvación de Sabiduría o ser afectado por este hechizo durante la duración.",
            "La Velocidad del objetivo afectado se reduce a la mitad, tiene una penalización −2 a la CA y tiradas de salvación de Destreza, y no puede tomar Reacciones. En sus turnos, puede tomar ya sea una acción o una Acción adicional, no ambas, y puede hacer solo un ataque si toma la acción Ataque. Si lanza un hechizo con un componente Somático, hay un 25 por ciento de probabilidad de que el hechizo falle como resultado de que el objetivo haga los gestos del hechizo demasiado lentamente.",
            "Un objetivo afectado repite la salvación al final de cada uno de sus turnos, terminando el hechizo en sí mismo si tiene éxito."
        ]
    },

    "Hablar con los muertos": {
        nivel: 3,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "10p",
        componentes: "V, S, M (incienso ardiente)",
        duracion: "10 minutos",
        efecto: [
            "Otorgas la apariencia de vida a un cadáver de tu elección dentro del alcance, permitiéndole responder preguntas que plantees. El cadáver debe tener una boca, y este hechizo falla si la criatura fallecida fue No-muerta cuando murió. El hechizo también falla si el cadáver fue el objetivo de este hechizo dentro de los últimos 10 días.",
            "Hasta que el hechizo termine, puedes hacer al cadáver hasta cinco preguntas. El cadáver conoce solo lo que sabía en vida, incluyendo los idiomas que conocía. Las respuestas son generalmente breves, crípticas o repetitivas, y el cadáver no está bajo ninguna compulsión de ofrecer una respuesta veraz si eres antagonista hacia él o si te reconoce como un enemigo. Este hechizo no devuelve el alma de la criatura a su cuerpo, solo su espíritu animador. Por lo tanto, el cadáver no puede aprender información nueva, no comprende nada que ha sucedido desde que murió, y no puede especular sobre eventos futuros."
        ]
    },

    "Hablar con las plantas": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "10 minutos",
        efecto: [
            "Otorgas a las plantas en una Emanación inmóvil de 30p una inteligencia limitada y animación, dándoles la capacidad de comunicarse contigo y seguir tus comandos simples. Puedes preguntar a las plantas sobre eventos en el área del hechizo dentro del último día, ganando información sobre criaturas que han pasado, clima y otras circunstancias.",
            "También puedes convertir el Terreno difícil causado por crecimiento de plantas (como matorrales y maleza) en terreno ordinario que dura durante la duración. O puedes convertir el terreno ordinario donde están presentes las plantas en Terreno difícil que dura durante la duración.",
            "El hechizo no permite que las plantas se desenraícen a sí mismas y se muevan, pero pueden mover sus ramas, zarcillos y tallos por ti.",
            "Si una criatura Planta está en el área, puedes comunicarte con ella como si compartieras un idioma común."
        ]
    },

    "Guardianes espirituales": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (un pergamino de oración)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Espíritus protectores revolotean alrededor de ti en una Emanación de 15p durante la duración. Si eres bueno o neutral, su forma espectral aparece angélica o feérica (tu elección). Si eres malvado, aparecen demoniaca.",
            "Cuando lanzas este hechizo, puedes designar criaturas para que no sean afectadas por él. La Velocidad de cualquier otra criatura se reduce a la mitad en la Emanación, y siempre que la Emanación entra en el espacio de una criatura y siempre que una criatura entra en la Emanación o termina su turno allí, la criatura debe realizar una tirada de salvación de Sabiduría. Si falla, la criatura recibe daño radiante 3d8 (si eres bueno o neutral) o daño necrótico 3d8 (si eres malvado). Si tiene éxito, la criatura recibe la mitad del daño. Una criatura realiza esta salvación solo una vez por turno."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Nube apestosa": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (un huevo podrido)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas una Esfera de radio 20p de gas amarillo y nauseabundo centrada en un punto dentro del alcance. La nube está Muy Oscurecida. La nube permanece en el aire durante la duración o hasta que un fuerte viento (como el creado por Ráfaga de viento) la dispersa.",
            "Cada criatura que inicia su turno en la Esfera debe tener éxito en una tirada de salvación de Constitución o tener la condición Envenenada hasta el final del turno actual. Mientras está Envenenada de esta manera, la criatura no puede tomar una acción o una Acción adicional."
        ]
    },

    "Convocar Feérico": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (una flor dorada que cuesta 300+ MO)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Convocas un espíritu Feérico. Se manifiesta en un espacio desocupado que puedas ver dentro del alcance y usa el bloque de estadísticas del Espíritu Feérico. Cuando lanzas el hechizo, elige un estado de ánimo: Furioso, Alegre o Astuto. La criatura se asemeja a una criatura Feérica de tu elección marcada por el estado de ánimo elegido, que determina ciertos detalles en su bloque de estadísticas. La criatura desaparece cuando cae a 0 Puntos de Golpe o cuando el hechizo termina.",
            "La criatura es un aliado para ti y tus aliados. En combate, la criatura comparte tu contador de Iniciativa, pero toma su turno inmediatamente después del tuyo. Obedece tus comandos verbales (sin acción requerida por ti). Si no emites ninguno, toma la acción Esquivar y usa su movimiento para evitar peligro.",
            "Espíritu Feerico",
            "Pequeño Feerico, Neutral",
            "Clase de armadura 12 + el nivel del hechizo",
            "Puntos de golpe 30 +10 por cada nivel del hechizo superior a 3",
            "Velocidad 30p, vuela 30p",
            "Fuerza 13 (+1/+1), Destreza 16 (+3/+3), Constitución 14 (+2/+2), Inteligencia 14 (+2/+2), Sabiduría 11 (0/0), Carisma 16 (+3/+3)",
            "Inmunidades Encantado",
            "Sentidos Vision en la Oscuridad 60 pies, Percepción Pasiva 10",
            "Idiomas Sylvan, entiende los idiomas que conoces",
            "Calificacion de desafio Ninguno, su Bonificador de Competencia es el mimso que el tuyo.",
            "Acciones",
            "Multiataque. El espíritu hace que un número de ataques de Hoja Feerica sea igual a la mitad del nivel de este hechizo (redondeado hacia abajo).",
            "Hoja Feerica. Tirada de ataque cuerpo a cuerpo: la bonificación es igual a tu modificador de ataque de hechizo, alcanza los 5 pies. Golpe: 2d6 + 3 + el nivel del hechizo Fuerza el daño.",
            "Acciones Adicionales",
            "Paso Fey. El espíritu se teletransporta mágicamente hasta 30 pies a un espacio desocupado que puede ver. Entonces se produce uno de los siguientes efectos, según el estado de ánimo elegido por el espíritu:",
            "Enojado. El espíritu tiene ventaja en la siguiente tirada de ataque que realiza antes del final de este turno.",
            "Alegre. Lanzamiento para salvar la sabiduría: DC es igual a tu hechizo salva a DC, una criatura que el espíritu puede ver a 10 pies de sí mismo. Fallo: El objetivo queda encantado contigo y el espíritu durante 1 minuto o hasta que el objetivo sufra algún daño.",
            "Engañoso. El espíritu llena un Cubo de 10 pies a 5 pies de él con una Oscuridad mágica, que dura hasta el final de su siguiente turno.",
        ],
        escalado: {
            efecto: "Usa el nivel del espacio de hechizo para el nivel del hechizo en el bloque de estadísticas."
        }
    },

    "Convocar No Muerto": {
        nivel: 3,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (un cráneo dorado que cuesta 300+ MO)",
        duracion: "Concentración, hasta 1 hora",

        efecto: [
            "Convocas un espíritu No Muerto. Se manifiesta en un espacio desocupado que puedas ver dentro del alcance y usa el bloque de estadísticas del Espíritu No Muerto. Cuando lanzas el hechizo, elige una forma: Fantasmal, Putrefacto o Esquelético. El espíritu se asemeja a una criatura No Muerta con la forma elegida, lo que determina ciertos detalles en su bloque de estadísticas. La criatura desaparece cuando cae a 0 Puntos de Golpe o cuando el hechizo termina.",
            "La criatura es un aliado para ti y tus aliados. En combate, comparte tu iniciativa pero actúa inmediatamente después de ti. Obedece tus comandos verbales (sin acción). Si no recibe órdenes, realiza Esquivar y evita el peligro.",

            "Espíritu No Muerto",
            "Mediano No Muerto, Neutral",
            "Clase de armadura 11 + el nivel del hechizo",
            "Puntos de golpe 30 (Fantasmal y Putrefacto) o 20 (Esquelético) +10 por cada nivel del hechizo superior a 3",
            "Velocidad 30p; vuela 40p (flotar, solo Fantasmal)",

            "Fuerza 12 (+1/+1), Destreza 16 (+3/+3), Constitución 15 (+2/+2), Inteligencia 4 (-3/-3), Sabiduría 10 (+0/+0), Carisma 9 (-1/-1)",

            "Inmunidades daño Necrótico y Veneno; condiciones Agotamiento, Asustado, Paralizado, Envenenado",
            "Sentidos Visión en la oscuridad 60 pies, Percepción Pasiva 10",
            "Idiomas Entiende los idiomas que conoces",
            "Calificación de desafío Ninguno, su bonificador de competencia es igual al tuyo",

            "Rasgos",
            "Aura Pestilente (solo Putrefacto). Tirada de salvación de Constitución: CD igual a tu CD de conjuro, cualquier criatura (excepto tú) que empiece su turno a 5 pies del espíritu. Fallo: queda Envenenada hasta el inicio de su siguiente turno.",
            "Paso Incorpóreo (solo Fantasmal). El espíritu puede moverse a través de criaturas y objetos como si fueran terreno difícil. Si termina su turno dentro de un objeto, es expulsado al espacio libre más cercano y recibe 1d10 de daño de Fuerza por cada 5 pies recorridos.",

            "Acciones",
            "Multiataque. El espíritu realiza un número de ataques igual a la mitad del nivel de este hechizo (redondeado hacia abajo).",

            "Toque Mortuorio (solo Fantasmal). Ataque cuerpo a cuerpo: bonificación igual a tu modificador de ataque de conjuro, alcance 5 pies. Golpe: 1d8 + 3 + nivel del hechizo de daño Necrótico, y el objetivo queda Asustado hasta el final de su siguiente turno.",

            "Proyectil de Tumba (solo Esquelético). Ataque a distancia: bonificación igual a tu modificador de ataque de conjuro, alcance 150 pies. Golpe: 2d4 + 3 + nivel del hechizo de daño Necrótico.",

            "Garra Putrefacta (solo Putrefacto). Ataque cuerpo a cuerpo: bonificación igual a tu modificador de ataque de conjuro, alcance 5 pies. Golpe: 1d6 + 3 + nivel del hechizo de daño Cortante. Si el objetivo está Envenenado, queda Paralizado hasta el final de su siguiente turno."
        ],

        escalado: {
            efecto: "Usa el nivel del espacio de conjuro para determinar los valores del bloque de estadísticas."
        }
    },

    "Víbora de Sylune": {
        nivel: 3,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S, M (un colmillo de serpiente)",
        duracion: "1 hora",
        efecto: [
            "Una serpiente espectral y brillante se enrolla alrededor de tu cuerpo durante la duración. Ganas 15 Puntos de Golpe temporales; el hechizo termina anticipadamente si no tienes Puntos de Golpe temporales restantes.",
            "Mientras el hechizo esté activo, ganas los siguientes beneficios:",
            "Trepar. Ganas una Velocidad de trepa igual a tu Velocidad.",
            "Morfedura venenosa. Como una acción de Magia, puedes hacer un ataque de hechizo a distancia usando la serpiente contra una criatura dentro de 50p. Si golpeas, el objetivo recibe daño de fuerza 1d6 y tiene la condición Envenenada hasta el inicio de tu siguiente turno. Mientras está Envenenada, el objetivo tiene la condición Incapacitada."
        ],
        escalado: {
            efecto: "Para cada nivel de espacio de hechizo superior a 3, el número de Puntos de Golpe temporales que ganas aumenta en 5, y el daño de Mordedura venenosa aumenta en 1d6."
        }
    },

    "Lenguas": {
        nivel: 3,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, M (una miniatura de zigurat)",
        duracion: "1 hora",
        efecto: [
            "Este hechizo otorga a la criatura que tocas la capacidad de entender cualquier idioma hablado o firmado que escuche o vea. Además, cuando el objetivo se comunica hablando o firmando, cualquier criatura que conozca al menos un idioma puede entenderlo si esa criatura puede escuchar el habla o ver la firma."
        ]
    },

    "Toque vampírico": {
        nivel: 3,
        escuela: "Nigromancia",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "El toque de tu mano envuelta en sombra puede drenar la fuerza de vida de otros para sanar tus heridas. Realiza un ataque de hechizo de combate contra una criatura dentro del alcance. Si golpeas, el objetivo recibe daño necrótico 3d6, y recuperas Puntos de Golpe iguales a la mitad del daño necrótico infligido.",
            "Hasta que el hechizo termine, puedes hacer el ataque nuevamente en cada uno de tus turnos como una acción de Magia, apuntando a la misma criatura o a una diferente."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 3."
        }
    },

    "Respiración acuática": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "30p",
        componentes: "V, S, M (una caña corta)",
        duracion: "24 horas",
        efecto: [
            "Este hechizo otorga a hasta diez criaturas dispuestas de tu elección dentro del alcance la capacidad de respirar bajo el agua hasta que el hechizo termine. Las criaturas afectadas también retienen su modo de respir normal."
        ]
    },

    "Caminar sobre el agua": {
        nivel: 3,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "30p",
        componentes: "V, S, M (un trozo de corcho)",
        duracion: "1 hora",
        efecto: [
            "Este hechizo otorga la capacidad de moverse a través de cualquier superficie líquida - como agua, ácido, barro, nieve, arenas movedizas o lava - como si fuera terreno sólido inofensivo (las criaturas que cruzaban lava fundida pueden seguir recibiendo daño por el calor). Hasta diez criaturas dispuestas de tu elección dentro del alcance ganan esta capacidad durante la duración.",
            "Un objetivo afectado debe tomar una Acción adicional para pasar de la superficie del líquido al interior del líquido en sí y vicevers, pero si el objetivo cae al líquido, el objetivo pasa a través de la superficie al líquido debajo."
        ]
    },

    "Muro de viento": {
        nivel: 3,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (un abanico y una pluma)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Un muro de viento fuerte se levanta del suelo en un punto que elijas dentro del alcance. Puedes hacer que el muro sea de hasta 50p de largo, 15p de alto y 0.3 metros de grosor. Puedes darle forma al muro de cualquier manera que elijas siempre que haga un camino continuo a lo largo del suelo. El muro dura durante la duración.",
            "Cuando aparece el muro, cada criatura en su área realiza una tirada de salvación de Fuerza, recibiendo daño contundente 4d8 si falla o la mitad si tiene éxito.",
            "El fuerte viento mantiene niebla, humo y otros gases a raya. Las criaturas Pequeñas o más pequeñas o los objetos que vuelan no pueden pasar a través del muro. Los materiales sueltos y ligeros llevados al muro vuelan hacia arriba. Las flechas, pernos y otros proyectiles ordinarios lanzados a objetivos detrás del muro se desvían hacia arriba y fallan automáticamente. Las rocas lanzadas por Gigantes o máquinas de asedio, y proyectiles similares, no se ven afectados. Las criaturas en forma gaseosa no pueden pasar a través de él."
        ]
    },

    "Ojo arcano": {
        nivel: 4,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (un poco de pelaje de murciélago)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Creas un ojo Invisible e invulnerable dentro del alcance que flota durante la duración. Recibes mentalmente información visual del ojo, que puede ver en todas direcciones. También tiene Visión en la Oscuridad con un alcance de 30p.",
            "Como una Acción adicional, puedes mover el ojo hasta 30p en cualquier dirección. Una barrera sólida bloquea el movimiento del ojo, pero el ojo puede pasar a través de una abertura tan pequeña como 1 pulgada de diámetro."
        ]
    },

    "Aura de vida": {
        nivel: 4,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Un aura irradia desde ti en una Emanación de 30p durante la duración. Mientras estén en el aura, tú y tus aliados tienen Resistencia a daño Necrótico, y tus máximos de Puntos de Golpe no pueden ser reducidos. Si un aliado con 0 Puntos de Golpe inicia su turno en el aura, ese aliado recupera 1 Punto de Golpe."
        ]
    },

    "Aura de pureza": {
        nivel: 4,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Un aura irradia desde ti en una Emanación de 30p durante la duración. Mientras estén en el aura, tú y tus aliados tienen Resistencia a daño de Veneno y Ventaja en tiradas de salvación para evitar o terminar condiciones que incluyan Cegada, Encantada, Sorda, Asustada, Paralizada, Envenenada o Aturdida."
        ]
    },

    "Contragolpe": {
        nivel: 4,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Reacción, que realizas en respuesta a recibir daño",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Te proteges contra energía destructiva, reduciendo el daño recibido en 4d6 más tu modificador de habilidad de lanzamiento de hechizos.",
            "Si el daño desencadenante vino de una criatura dentro del alcance, puedes forzar a la criatura a hacer una tirada de salvación de Constitución. La criatura recibe daño de Fuerza 4d6 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño de reducción y daño de Fuerza aumentan en 1d6 para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Destierro": {
        nivel: 4,
        escuela: "Abjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (un pentáculo)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una criatura que puedas ver dentro del alcance debe tener éxito en una tirada de salvación de Carisma o ser transportada a un demiplano inofensivo durante la duración. Mientras esté allí, el objetivo tiene la condición Incapacitada. Cuando el hechizo termina, el objetivo reaparece en el espacio que dejó o en el espacio desocupado más cercano si ese espacio está ocupado.",
            "Si el objetivo es una Aberración, Celestial, Elemental, Feérico o Demonio, el objetivo no regresa si el hechizo dura 1 minuto. El objetivo es transportado a una ubicación aleatoria en un plano (a elección del DJ) asociado con su tipo de criatura."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Maldición": {
        nivel: 4,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Una criatura que puedas ver dentro del alcance hace una tirada de salvación de Constitución, recibiendo daño Necrótico 8d8 si falla o la mitad si tiene éxito. Una criatura Planta falla automáticamente la salvación.",
            "Alternativamente, apunta a una planta no mágica que no sea una criatura, como un árbol o arbusto. No hace una salvación; simplemente se marchita y muere."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Encantar monstruo": {
        nivel: 4,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "1 hora",
        efecto: [
            "Una criatura que puedas ver dentro del alcance hace una tirada de salvación de Sabiduría. Lo hace con Ventaja si tú o tus aliados estáis luchando contra ella. Si falla, el objetivo tiene la condición Encantada hasta que el hechizo termina o hasta que tú o tus aliados lo dañáis. La criatura Encantada te es Amigable. Cuando el hechizo termina, el objetivo sabe que fue Encantado por ti."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Compulsión": {
        nivel: 4,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Cada criatura de tu elección que puedas ver dentro del alcance debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Encantada hasta que el hechizo termina.",
            "Durante la duración, puedes tomar una Acción adicional para designar una dirección que sea horizontal respecto a ti. Cada objetivo Encantado debe usar tanta de su Velocidad como sea posible para moverse en esa dirección en su siguiente turno, tomando la ruta más segura. Después de moverse de esta manera, un objetivo repite la salvación, terminando el hechizo en sí mismo si tiene éxito."
        ]
    },

    "Confusión": {
        nivel: 4,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (tres cáscaras de nueces)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Cada criatura en una Esfera de radio 10p centrada en un punto que elijas dentro del alcance debe tener éxito en una tirada de salvación de Sabiduría o no puede tomar Acciones adicionales ni Reacciones y debe lanzar 1d10 al inicio de cada uno de sus turnos para determinar su comportamiento para ese turno.",
            "El objetivo puede repetir la salvación al final de cada uno de sus turnos, terminando el hechizo en sí mismo si tiene éxito."
        ],
        escalado: {
            efecto: "El radio de la Esfera aumenta 5p para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Convocar elementales menores": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Convocas espíritus de los Planos Elementales que revolotean alrededor tuyo en una Emanación de 15p durante la duración. Hasta que el hechizo termina, cualquier ataque que hagas inflige daño extra 2d8 cuando golpeas a una criatura en la Emanación. Este daño es Ácido, Frío, Fuego o Rayo (tu elección cuando realizas el ataque).",
            "Además, el terreno en la Emanación es Terreno difícil para tus enemigos."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Convocar seres del bosque": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Convocas espíritus de la naturaleza que revolotean alrededor tuyo en una Emanación de 10p durante la duración. Siempre que la Emanación entra en el espacio de una criatura que puedas ver y siempre que una criatura que puedas ver entra en la Emanación o termina su turno allí, puedes forzar a esa criatura a hacer una tirada de salvación de Sabiduría. La criatura recibe daño de Fuerza 5d8 si falla o la mitad si tiene éxito. Una criatura hace esta salvación solo una vez por turno.",
            "Además, puedes tomar la acción Desengancharse como una Acción adicional durante la duración del hechizo."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Controlar agua": {
        nivel: 4,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "300p",
        componentes: "V, S, M (una mezcla de agua y polvo)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Hasta que el hechizo termina, controlas cualquier agua dentro de un área que elijas que sea un Cubo de hasta 100p por lado, usando uno de los siguientes efectos. Como una acción de Magia en tus turnos posteriores, puedes repetir el mismo efecto o elegir uno diferente.",
            "Inundación. Causas que el nivel del agua de toda el agua estancada en el área suba hasta 20p. Si eliges un área en un gran cuerpo de agua, creas en su lugar una ola de 20p de alto que viaja de un lado del área al otro y luego se estrella.",
            "Partir agua. Partes el agua en el área y creas una zanja. La zanja se extiende a través del área del hechizo, y el agua separada forma un muro a cada lado.",
            "Redirigir flujo. Causas que el agua que fluye en el área se mueva en una dirección que elijas, incluso si el agua tiene que fluir sobre obstáculos, subir muros, o en otras direcciones poco probables.",
            "Remolino. Causas que se forme un remolino en el centro del área, que debe ser al menos 50p cuadrado y 25p de profundidad. El remolino dura hasta que elijas un efecto diferente o el hechizo termina."
        ]
    },

    "Protección contra la muerte": {
        nivel: 4,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "8 horas",
        efecto: [
            "Tocas una criatura y le otorgas una medida de protección contra la muerte. La primera vez que el objetivo caería a 0 Puntos de Golpe antes de que el hechizo termine, el objetivo en su lugar cae a 1 Punto de Golpe, y el hechizo termina.",
            "Si el hechizo sigue activo cuando el objetivo es sometido a un efecto que lo mataría instantáneamente sin infligir daño, ese efecto se niega contra el objetivo, y el hechizo termina."
        ]
    },

    "Puerta dimensional": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "500p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Te teletransportas a una ubicación dentro del alcance. Llegas exactamente al punto deseado. Puede ser un lugar que puedas ver, uno que puedas visualizar, o uno que puedas describir declarando distancia y dirección, como '200p directamente hacia abajo' o '300p hacia arriba al noroeste en un ángulo de 45 grados'.",
            "También puedes teletransportar una criatura dispuesta. La criatura debe estar dentro de 5p de ti cuando te teletransportas, y se teletransporta a un espacio dentro de 5p de tu espacio de destino.",
            "Si tú, la otra criatura, o ambos llegarían a un espacio ocupado por una criatura o completamente lleno por uno o más objetos, tú y cualquier criatura viajando contigo cada uno reciben daño de Fuerza 4d6, y la teletransportación falla."
        ]
    },

    "Adivinación": {
        nivel: 4,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "Yo mismo",
        componentes: "V, S, M (incienso que cuesta 25+ MO, que el hechizo consume)",
        duracion: "Instantáneo",
        efecto: [
            "Este hechizo te pone en contacto con un dios o los siervos de un dios. Haces una pregunta sobre un objetivo, evento, o actividad específica que ocurra dentro de 7 días. El DJ ofrece una respuesta veraz, que podría ser una frase corta o una rima críptica. El hechizo no explica por circunstancias que podrían cambiar la respuesta."
        ]
    },

    "Dominar bestia": {
        nivel: 4,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una Bestia que puedas ver dentro del alcance debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Encantada durante la duración. El objetivo tiene Ventaja en la salvación si tú o tus aliados estáis luchando contra ella. Siempre que el objetivo recibe daño, repite la salvación, terminando el hechizo en sí mismo si tiene éxito.",
            "Tienes un vínculo telepático con el objetivo Encantado mientras ambos estéis en el mismo plano de existencia. En tu turno, puedes usar este vínculo para emitir comandos al objetivo (sin acción requerida), como 'Ataca esa criatura', 'Muévete allá' o 'Trae ese objeto'. El objetivo hace su mejor esfuerzo por obedecer en su turno. Si completa una orden y no recibe más dirección de ti, actúa y se mueve como desee, enfocándose en protegerse a sí mismo."
        ],
        escalado: {
            efecto: "Tu Concentración puede durar más con un espacio de hechizo de nivel 5 (hasta 10 minutos), 6 (hasta 1 hora), o 7+ (hasta 8 horas)."
        }
    },

    "Marea de perdición": { 
        nivel: 4,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (hollín y una anguila seca)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas una Esfera de radio 20p de niebla negra dentro del alcance. La niebla es Oscuridad mágica y dura durante la duración o hasta que un viento fuerte (como el creado por Ráfaga de viento) la dispersa, terminando el hechizo.",
            "Cada criatura en la Esfera cuando aparece hace una tirada de salvación de Sabiduría. Si falla, recibe daño Psíquico 5d6 y resta 1d6 de sus tiradas de salvación hasta el final de su siguiente turno. Si tiene éxito, recibe la mitad del daño solamente. Una criatura también hace esta salvación cuando la Esfera se mueve hacia su espacio, cuando entra en la Esfera, o cuando termina su turno dentro de la Esfera. Una criatura hace esta salvación solo una vez por turno.",
            "La Esfera se mueve 10p lejos de ti al inicio de cada uno de tus turnos."
        ]
    },

    "Tentáculos negros de Evard": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (un tentáculo)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Tentáculos oscuros y retorciéndose llenan un cuadrado de 20p en el suelo que puedes ver dentro del alcance. Durante la duración, estos tentáculos convierten el terreno en esa área en Terreno difícil.",
            "Cada criatura en esa área hace una tirada de salvación de Fuerza. Si falla, recibe daño Contundente 3d6 y tiene la condición Restringida hasta que el hechizo termine. Una criatura también hace esa salvación si entra en el área o termina su turno allí. Una criatura hace esa salvación solo una vez por turno.",
            "Una criatura Restringida puede tomar una acción para hacer una prueba de Fuerza (Atletismo) contra tu CD de salvación de hechizo, terminando la condición en sí misma si tiene éxito."
        ]
    },

    "Fabricar": {
        nivel: 4,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "120p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Conviertes materiales crudos en productos del mismo material. Por ejemplo, puedes fabricar un puente de madera a partir de un grupo de árboles, una cuerda a partir de un parche de cáñamo, o ropa a partir de lino o lana.",
            "Elige materiales crudos que puedas ver dentro del alcance. Puedes fabricar un objeto Grande o más pequeño (contenido en un Cubo de 10p o ocho Cubos de 5p conectados) dada una cantidad suficiente de material. Si trabajas con metal, piedra u otra sustancia mineral, sin embargo, el objeto fabricado no puede ser más grande que Mediano (contenido en un Cubo de 5p). La calidad de cualquier objeto fabricado se basa en la calidad de los materiales crudos.",
            "Las criaturas y objetos mágicos no pueden ser creados por este hechizo. Tampoco puedes usarlo para crear objetos que requieran un alto grado de habilidad - como armas y armaduras - a menos que tengas competencia con el tipo de Herramientas de Artesano usadas para fabricar tales objetos."
        ]
    },

    "Escudo de fuego": {
        nivel: 4,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (un poco de fósforo o una luciérnaga)",
        duracion: "10 minutos",
        efecto: [
            "Llamas vaporosas envuelven tu cuerpo durante la duración, emitiendo Luz brillante en un radio de 10p y Luz tenue para 10p adicionales.",
            "Las llamas te proporcionan un escudo cálido o un escudo gélido, como elijas. El escudo cálido te otorga Resistencia a daño de Frío, y el escudo gélido te otorga Resistencia a daño de Fuego.",
            "Además, siempre que una criatura dentro de 5p de ti te golpea con una tirada de ataque de combate, el escudo estalla con llama. El atacante recibe daño de Fuego 2d8 de un escudo cálido o daño de Frío 2d8 de un escudo gélido."
        ]
    },

    "Fuente de luz lunar": {
        nivel: 4,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Una luz fresca envuelve tu cuerpo durante la duración, emitiendo Luz brillante en un radio de 20p y Luz tenue para 20p adicionales.",
            "Hasta que el hechizo termine, tienes Resistencia a daño Radiante, y tus ataques de combate infligen daño Radiante adicional 2d6 en un golpe.",
            "Además, inmediatamente después de recibir daño de una criatura que puedas ver dentro de 60p de ti, puedes tomar una Reacción para forzar a la criatura a hacer una tirada de salvación de Constitución. Si falla, la criatura tiene la condición Cegada hasta el final de tu siguiente turno."
        ]
    },

    "Libertad de movimiento": {
        nivel: 4,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (una correa de cuero)",
        duracion: "1 hora",
        efecto: [
            "Tocas una criatura dispuesta. Durante la duración, el movimiento del objetivo no es afectado por Terreno difícil, y hechizos y otros efectos mágicos no pueden reducir la Velocidad del objetivo ni causar que el objetivo tenga las condiciones Paralizada o Restringida. El objetivo también tiene una Velocidad de nado igual a su Velocidad.",
            "Además, el objetivo puede gastar 5p de movimiento para escapar automáticamente de restricciones no mágicas, como grillos o una criatura imponiéndole la condición Agarrada."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Insecto gigante": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Convocas un ciempiés gigante, araña o avispa (elegido cuando lanzas el hechizo). Se manifiesta en un espacio desocupado que puedas ver dentro del alcance y usa el bloque de estadísticas de Insecto Gigante. La forma que elijas determina ciertos detalles en su bloque de estadísticas. La criatura desaparece cuando cae a 0 Puntos de Golpe o cuando el hechizo termina.",
            "La criatura es un aliado para ti y tus aliados. En combate, la criatura comparte tu contador de Iniciativa, pero toma su turno inmediatamente después del tuyo. Obedece tus comandos verbales (sin acción requerida por ti). Si no emites ninguno, toma la acción Esquivar y usa su movimiento para evitar peligro."
        ]
    },

    "Vid prensil": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción adicional",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Conjuras una vid que brota de una superficie en un espacio desocupado que puedas ver dentro del alcance. La vid dura durante la duración.",
            "Haz un ataque de hechizo de combate contra una criatura dentro de 30p de la vid. Si golpeas, el objetivo recibe daño Contundente 4d8 y es jalado hasta 30p hacia la vid; si el objetivo es Enorme o más pequeño, tiene la condición Agarrada (CD de escape igual a tu CD de salvación de hechizo). La vid puede agarrar solo una criatura a la vez, y puedes hacer que la vid libere una criatura Agarrada (sin acción requerida).",
            "Como una Acción adicional en tus turnos posteriores, puedes repetir el ataque contra una criatura dentro de 30p de la vid."
        ],
        escalado: {
            efecto: "El número de criaturas que la vid puede agarrar aumenta en uno para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Invisibilidad mayor": {
        nivel: 4,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una criatura que tocas tiene la condición Invisible hasta que el hechizo termina."
        ]
    },

    "Guardián de la fe": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V",
        duracion: "8 horas",
        efecto: [
            "Un guardián espectral Grande aparece y flota durante la duración en un espacio desocupado que puedas ver dentro del alcance. El guardián ocupa ese espacio y es invulnerable, y aparece en una forma apropiada para tu deidad o panteón.",
            "Cualquier enemigo que se mueva a un espacio dentro de 10p del guardián por primera vez en un turno o comience su turno allí hace una tirada de salvación de Destreza, recibiendo daño Radiante 20 si falla o la mitad si tiene éxito. El guardián desaparece cuando ha infligido un total de 60 daño."
        ]
    },

    "Terreno alucinatorio": {
        nivel: 4,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "300p",
        componentes: "V, S, M (un hongo)",
        duracion: "24 horas",
        efecto: [
            "Haces que el terreno natural en un Cubo de 150p dentro del alcance se vea, suene y huela como otro tipo de terreno natural. Así, campos abiertos o un camino pueden parecer un pantano, colina, grieta, o algún otro terreno difícil o impasable. Un estanque puede parecer un prado herboso, un precipicio como una pendiente suave, o un barranco rocoso como un camino ancho y suave. Las estructuras manufacturadas, equipos y criaturas dentro del área no cambian.",
            "Las características táctiles del terreno no cambian, así que las criaturas que entran al área probablemente noten la ilusión. Si la diferencia no es obvia al tacto, una criatura examinando la ilusión puede tomar la acción de Búsqueda para hacer una prueba de Inteligencia (Investigación) contra tu CD de salvación de hechizo para desmentirla. Si una criatura discrepa que el terreno es ilusorio, la criatura ve una imagen vaga superpuesta al terreno real."
        ]
    },

    "Tormenta de hielo": {
        nivel: 4,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "300p",
        componentes: "V, S, M (un guante)",
        duracion: "Instantáneo",
        efecto: [
            "Granizo cae en un Cilindro de radio 20p y 40p de alto centrado en un punto dentro del alcance. Cada criatura en el Cilindro hace una tirada de salvación de Destreza. Una criatura recibe daño Contundente 2d10 y daño de Frío 4d6 si falla o la mitad del daño si tiene éxito.",
            "Las piedras de granizo convierten el terreno en el Cilindro en Terreno difícil hasta el final de tu siguiente turno."
        ],
        escalado: {
            efecto: "El daño Contundente aumenta en 1d10 para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Cofre secreto de Leomund": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (un cofre, 3p por 2p por 2p, construido de materiales raros que cuesta 5,000+ MO, y una réplica diminuta del cofre hecha de los mismos materiales que cuesta 50+ MO)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Escondes un cofre y todo su contenido en el Plano Etéreo. Debes tocar el cofre y la réplica en miniatura que sirven como componentes Materiales para el hechizo. El cofre puede contener hasta 12 pies cúbicos de material no viviente (3p por 2p por 2p).",
            "Mientras el cofre permanezca en el Plano Etéreo, puedes tomar una acción de Magia y tocar la réplica para recuperar el cofre. Aparece en un espacio desocupado en el suelo dentro de 5p de ti. Puedes enviar el cofre de vuelta al Plano Etéreo tomando una acción de Magia para tocar el cofre y la réplica.",
            "Después de 60 días, hay un 5 por ciento acumulativo de probabilidad al final de cada día de que el hechizo termine. El hechizo también termina si lanzas este hechizo de nuevo o si la réplica diminuta del cofre es destruida. Si el hechizo termina y el cofre más grande está en el Plano Etéreo, el cofre permanece allí para que tú o alguien más lo encuentre."
        ]
    },

    "Localizar criatura": {
        nivel: 4,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (pelaje de un sabueso)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Describe o nombra una criatura que te es familiar. Sientes la dirección hacia la ubicación de la criatura si esa criatura está dentro de 1,000p de ti. Si la criatura se está moviendo, sabes la dirección de su movimiento.",
            "El hechizo puede localizar una criatura específica que conoces o la criatura más cercana de un tipo específico (como un humano o un unicornio) si has visto tal criatura de cerca - dentro de 30p - al menos una vez. Si la criatura que describiste o nombraste está en una forma diferente, como bajo los efectos de un hechizo Carne a Piedra o Polimorfismo, este hechizo no localiza la criatura.",
            "Este hechizo no puede localizar una criatura si ningún grosor de plomo bloquea un camino directo entre ti y la criatura."
        ]
    },

    "Perro fiel de Mordenkainen": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (un silbato de plata)",
        duracion: "8 horas",
        efecto: [
            "Conjuras un perro guardián fantasma en un espacio desocupado que puedas ver dentro del alcance. El perro permanece durante la duración o hasta que los dos estéis más de 300p separados uno del otro.",
            "Nadie excepto tú puede ver al perro, y es intangible e invulnerable. Cuando una criatura Pequeña o más grande se acerca dentro de 30p de él sin hablar primero la contraseña que especificas cuando lanzas este hechizo, el perro comienza a ladrar fuertemente. El perro tiene Visión verdadera con un alcance de 30p.",
            "Al inicio de cada uno de tus turnos, el perro intenta morder a un enemigo dentro de 5p de él. Ese enemigo debe tener éxito en una tirada de salvación de Destreza o recibir daño de Fuerza 4d8.",
            "En tus turnos posteriores, puedes tomar una acción de Magia para mover al perro hasta 30p."
        ]
    },

    "Santuario privado de Mordenkainen": {
        nivel: 4,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "120p",
        componentes: "V, S, M (una lámina fina de plomo)",
        duracion: "24 horas",
        efecto: [
            "Haces que un área dentro del alcance sea mágicamente segura. El área es un Cubo que puede ser tan pequeño como 5p hasta tan grande como 100p en cada lado. El hechizo dura durante la duración.",
            "Cuando lanzas el hechizo, decides qué tipo de seguridad proporciona el hechizo, eligiendo cualquiera de las siguientes propiedades:",
            "El sonido no puede pasar a través de la barrera en el borde del área protegida.",
            "La barrera del área protegida aparece oscura y nebulosa, previniendo la visión (incluyendo Visión en la Oscuridad) a través de ella.",
            "Los sensores creados por hechizos de Adivinación no pueden aparecer dentro del área protegida o pasar a través de la barrera en su perímetro.",
            "Las criaturas en el área no pueden ser apuntadas por hechizos de Adivinación.",
            "Nada puede teletransportarse dentro o fuera del área protegida.",
            "El viaje planar está bloqueado dentro del área protegida.",
            "Lanzar este hechizo en el mismo punto cada día durante 365 días hace que el hechizo dure hasta que sea disipado."
        ],
        escalado: {
            efecto: "Puedes aumentar el tamaño del Cubo en 100p para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Esfera resiliente de Otiluke": {
        nivel: 4,
        escuela: "Abjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (una esfera de cristal)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una esfera brillante encierra una criatura u objeto Grande o más pequeño dentro del alcance. Una criatura no dispuesta debe tener éxito en una tirada de salvación de Destreza o ser encerrada durante la duración.",
            "Nada—ni objetos físicos, energía, u otros efectos de hechizos—puede pasar a través de la barrera, dentro o fuera, aunque una criatura en la esfera puede respirar allí. La esfera es inmune a todo daño, y una criatura u objeto dentro no puede ser dañado por ataques o efectos originados desde afuera, ni una criatura dentro de la esfera puede dañar nada fuera de ella.",
            "La esfera es sin peso y apenas lo suficientemente grande para contener la criatura u objeto dentro. Una criatura encerrada puede tomar una acción para empujar contra las paredes de la esfera y así hacer rodar la esfera hasta la mitad de la Velocidad de la criatura. Similarmente, el globo puede ser levantado y movido por otras criaturas.",
            "Un hechizo Desintegración apuntando al globo lo destruye sin dañar nada dentro."
        ]
    },

    "Asesino fantasmal": {
        nivel: 4,
        escuela: "Ilusión",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Tocas las pesadillas de una criatura que puedas ver dentro del alcance y creas una ilusión de sus miedos más profundos, visible solo para esa criatura. El objetivo hace una tirada de salvación de Sabiduría. Si falla, el objetivo recibe daño Psíquico 4d10 y tiene Desventaja en pruebas de habilidad y tiradas de ataque durante la duración. Si tiene éxito, el objetivo recibe la mitad del daño, y el hechizo termina.",
            "Durante la duración, el objetivo hace una tirada de salvación de Sabiduría al final de cada uno de sus turnos. Si falla, recibe el daño Psíquico nuevamente. Si tiene éxito, el hechizo termina."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Polimorfismo": {
        nivel: 4,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un capullo de oruga)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Intentas transformar una criatura que puedas ver dentro del alcance en una Bestia. El objetivo debe tener éxito en una tirada de salvación de Sabiduría o transformarse en una forma de Bestia durante la duración. Esa forma puede ser cualquier Bestia que elijas que tenga una Clase de Desafío igual a o menor que la del objetivo (o el nivel del objetivo si no tiene una Clase de Desafío). Las estadísticas de juego del objetivo son reemplazadas por el bloque de estadísticas de la Bestia elegida, pero el objetivo retiene su alineación, personalidad, tipo de criatura, Puntos de Golpe y Dados de Golpe.",
            "El objetivo gana Puntos de Golpe temporales iguales a los Puntos de Golpe de la forma de Bestia. Estos Puntos de Golpe temporales desaparecen si alguno permanece cuando el hechizo termina. El hechizo termina anticipadamente en el objetivo si no tiene Puntos de Golpe temporales restantes.",
            "El objetivo está limitado en las acciones que puede realizar por la anatomía de su nueva forma, y no puede hablar o lanzar hechizos.",
            "El equipo del objetivo se fusiona con la nueva forma. La criatura no puede usar u obtener beneficio de ninguno de ese equipo."
        ]
    },

    "Tormenta de fuego hechicería": {
        nivel: 4,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Conjuras un pilar de fuego hechicería en un Cilindro de radio 20p y 20p de alto centrado en un punto dentro del alcance. El área del Cilindro es Luz brillante, y cada criatura en él cuando aparece hace una tirada de salvación de Constitución, recibiendo daño Radiante 4d10 si falla o la mitad si tiene éxito. Una criatura también hace esta salvación cuando entra en el área del hechizo por primera vez en un turno o termina su turno allí. Una criatura hace esta salvación solo una vez por turno.",
            "Además, siempre que una criatura en el Cilindro lanza un hechizo, esa criatura hace una tirada de salvación de Constitución. Si falla, el hechizo se disipa sin efecto, y la acción, Acción adicional, o Reacción usada para lanzarlo se desperdicia. Si ese hechizo fue lanzado con un espacio de hechizo, el espacio no se agota.",
            "Cuando lanzas este hechizo, puedes designar criaturas para que no sean afectadas por él."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Castigo vacilante": {
        nivel: 4,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear una criatura con un arma de combate o un ataque desarmado",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "El objetivo recibe daño Psíquico adicional 4d6 del ataque, y el objetivo debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Aturdida hasta el final de tu siguiente turno."
        ],
        escalado: {
            efecto: "El daño adicional aumenta en 1d6 para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Dar forma a la piedra": {
        nivel: 4,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (arcilla suave)",
        duracion: "Instantáneo",
        efecto: [
            "Tocas un objeto de piedra Mediano o más pequeño o una sección de piedra no más grande de 5p en ninguna dimensión y lo das forma a la forma que desees. Por ejemplo, podrías dar forma a una roca grande en un arma, estatua, o cofre, o podrías hacer un pequeño pasaje a través de una pared que es 5p de grosor. También podrías dar forma a una puerta de piedra o su marco para cerrar la puerta. El objeto que creas puede tener hasta dos bisagras y un pestillo, pero los detalles mecánicos más finos no son posibles."
        ]
    },

    "Piel de piedra": {
        nivel: 4,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (polvo de diamante que cuesta 100+ MO, que el hechizo consume)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Hasta que el hechizo termine, una criatura dispuesta que toques tiene Resistencia a daño Contundente, Perforante y Cortante."
        ]
    },

    "Convocar Aberración": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (un tentáculo en conserva y un ojo en un vial con incrustaciones de platino que cuesta 400+ MO)",
        duracion: "Concentración, hasta 1 hora",

        efecto: [
            "Convocas un espíritu aberrante. Se manifiesta en un espacio desocupado que puedas ver dentro del alcance y usa el bloque de estadísticas del Espíritu Aberrante. Cuando lanzas el hechizo, elige: Engendro de Observador, Devorador Mental o Slaad. La criatura se asemeja a una aberración de ese tipo, lo que determina ciertos detalles en su bloque de estadísticas. La criatura desaparece cuando cae a 0 Puntos de Golpe o cuando el hechizo termina.",
            "La criatura es un aliado para ti y tus aliados. En combate, comparte tu contador de Iniciativa, pero actúa inmediatamente después de ti. Obedece tus comandos verbales (sin acción requerida por ti). Si no recibe órdenes, realiza Esquivar y evita el peligro.",

            "Espíritu Aberrante",
            "Mediano Aberración, Neutral",
            "Clase de armadura 11 + el nivel del hechizo",
            "Puntos de golpe 40 +10 por cada nivel del hechizo superior a 4",
            "Velocidad 30p; vuela 30p (flotar, solo Engendro de Observador)",

            "Fuerza 16 (+3/+3), Destreza 10 (+0/+0), Constitución 15 (+2/+2), Inteligencia 16 (+3/+3), Sabiduría 10 (+0/+0), Carisma 6 (-2/-2)",

            "Inmunidades daño Psíquico",
            "Sentidos Visión en la oscuridad 60 pies, Percepción Pasiva 10",
            "Idiomas Habla Profunda, entiende los idiomas que conoces",
            "Calificación de desafío Ninguno, su bonificador de competencia es igual al tuyo",

            "Rasgos",
            "Regeneración (solo Slaad). El espíritu recupera 5 Puntos de Golpe al inicio de su turno si tiene al menos 1 Punto de Golpe.",
            "Aura Susurrante (solo Devorador Mental). Al inicio de cada turno del espíritu, emite energía psiónica si no está incapacitado. Tirada de salvación de Sabiduría: CD igual a tu CD de conjuro, cada criatura (excepto tú) a 5 pies del espíritu. Fallo: 2d6 de daño Psíquico.",

            "Acciones",
            "Multiataque. El espíritu realiza un número de ataques igual a la mitad del nivel de este hechizo (redondeado hacia abajo).",

            "Garra (solo Slaad). Ataque cuerpo a cuerpo: bonificación igual a tu modificador de ataque de conjuro, alcance 5 pies. Golpe: 1d10 + 3 + nivel del hechizo de daño Cortante, y el objetivo no puede recuperar Puntos de Golpe hasta el inicio del siguiente turno del espíritu.",

            "Rayo Ocular (solo Engendro de Observador). Ataque a distancia: bonificación igual a tu modificador de ataque de conjuro, alcance 150 pies. Golpe: 1d8 + 3 + nivel del hechizo de daño Psíquico.",

            "Impacto Psíquico (solo Devorador Mental). Ataque cuerpo a cuerpo: bonificación igual a tu modificador de ataque de conjuro, alcance 5 pies. Golpe: 1d8 + 3 + nivel del hechizo de daño Psíquico."
        ],

        escalado: {
            efecto: "Usa el nivel del espacio de conjuro para determinar los valores del bloque de estadísticas."
        }
    },

    "Convocar Constructo": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (una caja fuerte que cuesta 400+ MO)",
        duracion: "Concentración, hasta 1 hora",

        efecto: [
            "Convocas el espíritu de un Constructo. Se manifiesta en un espacio desocupado que puedas ver dentro del alcance y usa el bloque de estadísticas del Espíritu Constructo. Cuando lanzas el hechizo, elige un material: Arcilla, Metal o Piedra. La criatura se asemeja a una estatua animada (tú determinas su apariencia) hecha del material elegido, lo que determina ciertos detalles en su bloque de estadísticas. La criatura desaparece cuando cae a 0 Puntos de Golpe o cuando el hechizo termina.",
            "La criatura es un aliado para ti y tus aliados. En combate, comparte tu contador de Iniciativa, pero actúa inmediatamente después de ti. Obedece tus comandos verbales (sin acción requerida por ti). Si no recibe órdenes, realiza Esquivar y evita el peligro.",

            "Espíritu Constructo",
            "Mediano Constructo, Neutral",
            "Clase de armadura 13 + el nivel del hechizo",
            "Puntos de golpe 40 +15 por cada nivel del hechizo superior a 4",
            "Velocidad 30p",

            "Fuerza 18 (+4/+4), Destreza 10 (+0/+0), Constitución 18 (+4/+4), Inteligencia 14 (+2/+2), Sabiduría 11 (+0/+0), Carisma 5 (-3/-3)",

            "Resistencias daño Veneno",
            "Inmunidades Encantado, Agotamiento, Asustado, Paralizado, Envenenado",
            "Sentidos Visión en la oscuridad 60 pies, Percepción Pasiva 10",
            "Idiomas Entiende los idiomas que conoces",
            "Calificación de desafío Ninguno, su bonificador de competencia es igual al tuyo",

            "Rasgos",
            "Cuerpo Caliente (solo Metal). Una criatura que golpea al espíritu con un ataque cuerpo a cuerpo o que comienza su turno agarrada por él recibe 1d10 de daño de Fuego.",
            "Letargo Pétreo (solo Piedra). Cuando una criatura comienza su turno a 10 pies del espíritu, este puede afectarla con energía mágica si puede verla. Tirada de salvación de Sabiduría: CD igual a tu CD de conjuro. Fallo: hasta el inicio de su siguiente turno, no puede realizar ataques de oportunidad y su velocidad se reduce a la mitad.",

            "Acciones",
            "Multiataque. El espíritu realiza un número de ataques de Golpe igual a la mitad del nivel de este hechizo (redondeado hacia abajo).",
            "Golpe. Ataque cuerpo a cuerpo: la bonificación es igual a tu modificador de ataque de conjuro, alcance 5 pies. Golpe: 1d8 + 4 + el nivel del hechizo de daño Contundente.",

            "Reacciones",
            "Latigazo Berserker (solo Arcilla). Desencadenante: el espíritu recibe daño de una criatura. Respuesta: el espíritu realiza un ataque de Golpe contra esa criatura si es posible, o se mueve hasta la mitad de su velocidad hacia ella sin provocar ataques de oportunidad."
        ],

        escalado: {
            efecto: "Usa el nivel del espacio de conjuro para determinar los valores del bloque de estadísticas."
        }
    },

    "Convocar Elemental": {
        nivel: 4,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (aire, un guijarro, ceniza y agua dentro de un vial con incrustaciones de oro que cuesta 400+ MO)",
        duracion: "Concentración, hasta 1 hora",

        efecto: [
            "Convocas un espíritu Elemental. Se manifiesta en un espacio desocupado que puedas ver dentro del alcance y usa el bloque de estadísticas del Espíritu Elemental. Cuando lanzas el hechizo, elige un elemento: Aire, Tierra, Fuego o Agua. La criatura adopta una forma bípeda envuelta en el elemento elegido, lo que determina ciertos detalles en su bloque de estadísticas. La criatura desaparece cuando cae a 0 Puntos de Golpe o cuando el hechizo termina.",
            "La criatura es un aliado para ti y tus aliados. En combate, comparte tu contador de Iniciativa, pero actúa inmediatamente después de ti. Obedece tus comandos verbales (sin acción requerida por ti). Si no recibe órdenes, realiza Esquivar y evita el peligro.",

            "Espíritu Elemental",
            "Mediano Elemental, Neutral",
            "Clase de armadura 11 + el nivel del hechizo",
            "Puntos de golpe 50 +10 por cada nivel del hechizo superior a 4",
            "Velocidad 40p; excavar 40p (solo Tierra); volar 40p (flotar, solo Aire); nadar 40p (solo Agua)",

            "Fuerza 18 (+4/+4), Destreza 15 (+2/+2), Constitución 17 (+3/+3), Inteligencia 4 (-3/-3), Sabiduría 10 (+0/+0), Carisma 16 (+3/+3)",

            "Resistencias Ácido (solo Agua), Electricidad y Trueno (solo Aire), Perforante y Cortante (solo Tierra)",
            "Inmunidades Fuego (solo Fuego), Veneno; Agotamiento, Paralizado, Petrificado, Envenenado",
            "Sentidos Visión en la oscuridad 60 pies, Percepción Pasiva 10",
            "Idiomas Primordial, entiende los idiomas que conoces",
            "Calificación de desafío Ninguno, su bonificador de competencia es igual al tuyo",

            "Rasgos",
            "Forma Amorfa (Aire, Fuego y Agua). El espíritu puede moverse a través de espacios de hasta 1 pulgada de ancho sin que cuenten como terreno difícil.",

            "Acciones",
            "Multiataque. El espíritu realiza un número de ataques de Golpe igual a la mitad del nivel de este hechizo (redondeado hacia abajo).",
            "Golpe. Ataque cuerpo a cuerpo: la bonificación es igual a tu modificador de ataque de conjuro, alcance 5 pies. Golpe: 1d10 + 4 + el nivel del hechizo de daño Contundente (Tierra), Frío (Agua), Eléctrico (Aire) o Fuego (Fuego)."
        ],

        escalado: {
            efecto: "Usa el nivel del espacio de conjuro para determinar los valores del bloque de estadísticas."
        }
    },

    "Esfera Vitriólica": {
        nivel: 4,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (una gota de bilis)",
        duracion: "Instantáneo",
        efecto: [
            "Apuntas a una ubicación dentro del alcance, y una bola resplandeciente de ácido de 1 pie de diámetro llega allá y explota en una Esfera de radio 20p. Cada criatura en esa área realiza una tirada de salvación de Destreza. Si falla, una criatura recibe daño ácido 10d4 y daño ácido 5d4 adicional al final de su siguiente turno. Si tiene éxito, una criatura recibe solo la mitad del daño inicial."
        ],
        escalado: {
            efecto: "El daño inicial aumenta en 2d4 para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Muro de fuego": {
        nivel: 4,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (un trozo de carbón)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas un muro de fuego en una superficie sólida dentro del alcance. Puedes hacer que el muro mida hasta 60p de largo, 20p de alto y 1p de grosor, o un muro anular de hasta 20p de diámetro, 20p de alto y 1p de grosor. El muro es opaco y dura durante la duración.",
            "Cuando aparece el muro, cada criatura en su área realiza una tirada de salvación de Destreza, recibiendo daño de fuego 5d8 si falla o la mitad si tiene éxito.",
            "Un lado del muro, seleccionado por ti cuando lanzas este hechizo, inflige daño de fuego 5d8 a cada criatura que termina su turno dentro de 10p de ese lado o dentro del muro. Una criatura recibe el mismo daño cuando entra en el muro por primera vez en un turno o termina su turno allí. El otro lado del muro no inflige daño."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 4."
        }
    },

    "Capa Lunar de Alustriel": {
        nivel: 5,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una piedra lunar que cuesta 50+ MO)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Durante la duración, la luz de luna llena una Emanación de 20p originada desde ti con Luz tenue. Mientras estén en esa área, tú y tus aliados tienen Cobertura Media y Resistencia a daño de Frío, Rayo y Radiante."
        ]
    },

    "Animar objetos": {
        nivel: 5,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Los objetos se animan a tu orden. Elige una serie de objetos no mágicos dentro del alcance que no estén siendo llevados o portados, no estén fijos a una superficie y no sean Colosales. El número máximo de objetos es igual a tu modificador de habilidad de lanzamiento de hechizos; para este número, un objetivo Mediano o más pequeño cuenta como un objeto, un objetivo Grande cuenta como dos, y un objetivo Enorme cuenta como tres.",
            "Cada objetivo se anima, brota patas, y se convierte en un Constructo que usa el bloque de estadísticas de Objeto Animado; esta criatura está bajo tu control hasta que el hechizo termine o hasta que sea reducida a 0 Puntos de Golpe."
        ],
        escalado: {
            efecto: "El daño de Golpe aumenta en 1d4 (Mediano o más pequeño), 1d6 (Grande), o 1d12 (Enorme) para cada nivel de espacio de hechizo superior a 5."
        }
    },

    "Caparazón antivida": {
        nivel: 5,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Un aura se extiende desde ti en una Emanación de 10p durante la duración. El aura previene que criaturas que no sean Constructos o No-muertos pasen o alcancen a través de ella. Una criatura afectada puede lanzar hechizos o hacer ataques con armas a Distancia o Alcance a través de la barrera."
        ]
    },

    "Despertar": {
        nivel: 5,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "8 horas",
        rango: "Toque",
        componentes: "V, S, M (un ágata que cuesta 1,000+ MO, que el hechizo consume)",
        duracion: "Instantáneo",
        efecto: [
            "Pasas el tiempo de lanzamiento trazando caminos mágicos dentro de una gema preciosa, y luego tocas el objetivo. El objetivo debe ser una criatura Bestia o Planta con una Inteligencia de 3 o menor o una planta natural que no sea una criatura. El objetivo gana una Inteligencia de 10 y la capacidad de hablar un idioma que conoces."
        ]
    },

    "Castigo desterrador": {
        nivel: 5,
        escuela: "Conjuración",
        tipo: "ataque",
        tiempo: "Acción adicional, que realizas inmediatamente después de golpear una criatura con un arma de combate o un ataque desarmado",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "El objetivo golpeado por el ataque recibe daño de Fuerza adicional 5d10 del ataque. Si el ataque reduce el objetivo a 50 Puntos de Golpe o menos, el objetivo debe tener éxito en una tirada de salvación de Carisma o ser transportado a un demiplano inofensivo durante la duración."
        ]
    },

    "Mano de Bigby": {
        nivel: 5,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (una cáscara de huevo y un guante)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas una mano Grande de energía mágica reluciente en un espacio desocupado que puedas ver dentro del alcance. La mano dura durante la duración, y se mueve a tu orden, imitando los movimientos de tu propia mano.",
            "La mano es un objeto que tiene CA 20 y Puntos de Golpe iguales a tu máximo de Puntos de Golpe. Si cae a 0 Puntos de Golpe, el hechizo termina."
        ],
        escalado: {
            efecto: "El daño del Puño Cerrado aumenta en 2d8 y el daño de Mano Agarradora aumenta en 2d6 para cada nivel de espacio de hechizo superior a 5."
        }
    },

    "Círculo de poder": {
        nivel: 5,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Un aura irradia desde ti en una Emanación de 30p durante la duración. Mientras estén en el aura, tú y tus aliados tienen Ventaja en tiradas de salvación contra hechizos y otros efectos mágicos. Cuando una criatura afectada hace una tirada de salvación contra un hechizo o efecto mágico que permite una salvación para recibir solo la mitad del daño, no recibe daño si tiene éxito en la salvación."
        ]
    },

    "Nube de muerte": {
        nivel: 5,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Creas una Esfera de radio 20p de niebla amarillo-verde centrada en un punto dentro del alcance. La niebla dura durante la duración o hasta que un viento fuerte (como el creado por Ráfaga de viento) la dispersa, terminando el hechizo. Su área está Muy Oscurecida.",
            "Cada criatura en la Esfera hace una tirada de salvación de Constitución, recibiendo daño de Veneno 5d8 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 5."
        }
    },

    "Comunión": {
        nivel: 5,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "1 minuto o Ritual",
        rango: "Yo mismo",
        componentes: "V, S, M (incienso)",
        duracion: "1 minuto",
        efecto: [
            "Haces contacto con una deidad o un proxy divino y haces hasta tres preguntas que pueden ser respondidas con sí o no. Debes hacer tus preguntas antes de que el hechizo termine. Recibes una respuesta correcta para cada pregunta."
        ]
    },

    "Comunión con la naturaleza": {
        nivel: 5,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "1 minuto o Ritual",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Haces comunión con los espíritus de la naturaleza y ganas conocimiento del área circundante. Al aire libre, el hechizo te da conocimiento del área dentro de 3 millas de ti. En cuevas y otras áreas naturales subterráneas, el radio se limita a 300p."
        ]
    },

    "Cono de frío": {
        nivel: 5,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (un cono pequeño de cristal o vidrio)",
        duracion: "Instantáneo",
        efecto: [
            "Desatas una ráfaga de aire frío. Cada criatura en un Cono de 60p originado desde ti hace una tirada de salvación de Constitución, recibiendo daño de Frío 8d8 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 5."
        }
    },

    "Convocar elemental": {
        nivel: 5,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Convocas un espíritu Grande e intangible de los Planos Elementales que aparece en un espacio desocupado dentro del alcance. Elige el elemento del espíritu, que determina su tipo de daño: aire (Rayo), tierra (Trueno), fuego (Fuego), o agua (Frío)."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d8 para cada nivel de espacio de hechizo superior a 5."
        }
    },

    "Convocar volley": {
        nivel: 5,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (un arma de combate o a distancia que cuesta al menos 1 MO)",
        duracion: "Instantáneo",
        efecto: [
            "Blandieres el arma usada para lanzar el hechizo y eliges un punto dentro del alcance. Cientos de armas espectrales similares (o munición apropiada para el arma) caen en una volley y luego desaparecen. Cada criatura de tu elección que puedas ver en un Cilindro de radio 40p y 20p de alto centrado en ese punto hace una tirada de salvación de Destreza, recibiendo daño de Fuerza 8d8 si falla o la mitad si tiene éxito."
        ]
    },

    "Contactar otro plano": {
        nivel: 5,
        escuela: "Adivinación",
        tipo: "salvacion",
        tiempo: "1 minuto o Ritual",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "1 minuto",
        efecto: [
            "Haces contacto mental con un semidios, el espíritu de un sabio hace mucho tiempo muerto, o alguna otra entidad sabia de otro plano. Hacer contacto con esta inteligencia de otro mundo puede romper tu mente. Cuando lanzas este hechizo, haz una tirada de salvación de Inteligencia CD 15. Si tienes éxito, puedes hacer a la entidad hasta cinco preguntas."
        ]
    },

    "Contagio": {
        nivel: 5,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "7 días",
        efecto: [
            "Tu toque inflige un contagio mágico. El objetivo debe tener éxito en una tirada de salvación de Constitución o recibir daño Necrótico 11d8 y tener la condición Envenenada."
        ]
    },

    "Creación": {
        nivel: 5,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "30p",
        componentes: "V, S, M (un pincel)",
        duracion: "Especial",
        efecto: [
            "Extraes volutas de material de sombra del Shadowfell para crear un objeto dentro del alcance. Es un objeto de materia vegetal (telas suaves, cuerda, madera, y similares) o materia mineral (piedra, cristal, metal, y similares). El objeto no debe ser más grande que un Cubo de 5p, y el objeto debe ser de una forma y material que hayas visto."
        ]
    },

    "Onda destructiva": {
        nivel: 5,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Energía destructiva ondulea hacia afuera desde ti en una Emanación de 30p. Cada criatura que elijas en la Emanación hace una tirada de salvación de Constitución. Si falla, un objetivo recibe daño de Trueno 5d6 y daño Radiante o Necrótico 5d6 (tu elección) y tiene la condición Tendida. Si tiene éxito, un objetivo recibe solo la mitad del daño."
        ]
    },

    "Disipar el mal y el bien": {
        nivel: 5,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (polvo de plata y hierro)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Durante la duración, Celestiales, Elementales, Feéricos, Demonios y No-muertos tienen Desventaja en tiradas de ataque contra ti."
        ]
    },

    "Dominar persona": {
        nivel: 5,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Un Humanoide que puedas ver dentro del alcance debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Encantada durante la duración. El objetivo tiene Ventaja en la salvación si tú o tus aliados estáis luchando contra él. Siempre que el objetivo reciba daño, repite la salvación, terminando el hechizo en sí mismo si tiene éxito."
        ],
        escalado: {
            efecto: "Tu Concentración puede durar más con un espacio de hechizo de nivel 6 (hasta 10 minutos), 7 (hasta 1 hora), o 8+ (hasta 8 horas)."
        }
    },

    "Sueño": {
        nivel: 5,
        escuela: "Ilusión",
        tipo: "salvacion",
        tiempo: "1 minuto",
        rango: "Especial",
        componentes: "V, S, M (un puñado de arena)",
        duracion: "8 horas",
        efecto: [
            "Apuntas a una criatura que conoces en el mismo plano de existencia. Tú o una criatura dispuesta que toques entras en un estado de trance para actuar como mensajero de sueños. Mientras estés en el trance, el mensajero tiene la condición Incapacitada y una Velocidad de 0."
        ]
    },

    "Golpe de llama": {
        nivel: 5,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un pellizco de azufre)",
        duracion: "Instantáneo",
        efecto: [
            "Una columna vertical de fuego brillante retumba desde arriba. Cada criatura en un Cilindro de radio 10p y 40p de alto centrado en un punto dentro del alcance hace una tirada de salvación de Destreza, recibiendo daño de Fuego 5d6 y daño Radiante 5d6 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño de Fuego y daño Radiante aumentan en 1d6 para cada nivel de espacio de hechizo superior a 5."
        }
    },

    "Geas": {
        nivel: 5,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "1 minuto",
        rango: "60p",
        componentes: "V",
        duracion: "30 días",
        efecto: [
            "Das un comando verbal a una criatura que puedas ver dentro del alcance, ordenándole llevar a cabo algún servicio o abstenerse de una acción o curso de actividad como decidas. El objetivo debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Encantada durante la duración."
        ]
    },

    "Restauración completa": {
        nivel: 5,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (polvo de diamante que cuesta 100+ MO, que el hechizo consume)",
        duracion: "Instantáneo",
        efecto: [
            "Tocas una criatura y mágicamente removes uno de los siguientes efectos de ella: 1 nivel de Agotamiento, la condición Encantada o Petrificada, una maldición, incluyendo la Sintonización del objetivo a un objeto mágico maldecido, cualquier reducción a una de las habilidades del objetivo, o cualquier reducción al máximo de Puntos de Golpe del objetivo."
        ]
    },

    "Consagración": {
        nivel: 5,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "24 horas",
        rango: "Toque",
        componentes: "V, S, M (incienso que cuesta 1,000+ MO, que el hechizo consume)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Tocas un punto e impregnas un área alrededor con poder sagrado o impío. El área puede tener un radio de hasta 60p, y el hechizo falla si el radio incluye un área ya bajo el efecto de Consagración."
        ]
    },

    "Retener monstruo": {
        nivel: 5,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (un trozo recto de hierro)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Elige una criatura que puedas ver dentro del alcance. El objetivo debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Paralizada durante la duración. Al final de cada uno de sus turnos, el objetivo repite la salvación, terminando el hechizo en sí mismo si tiene éxito."
        ],
        escalado: {
            efecto: "Puedes apuntar a una criatura adicional para cada nivel de espacio de hechizo superior a 5."
        }
    },

    "Plaga de insectos": {
        nivel: 5,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "300p",
        componentes: "V, S, M (una langosta)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Enjambres de langostas llenan una Esfera de radio 20p centrada en un punto que elijas dentro del alcance. La Esfera permanece durante la duración, y su área está Levemente Oscurecida y es Terreno difícil.",
            "Cuando el enjambre aparece, cada criatura en él hace una tirada de salvación de Constitución, recibiendo daño Perforante 4d10 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d10 para cada nivel de espacio de hechizo superior a 5."
        }
    },

    "Tormenta de radiancia de Jallarzi": {
        nivel: 5,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (un poco de fósforo)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Desatas una tormenta de luz intermitente y trueno furioso en un Cilindro de radio 10p y 40p de alto centrado en un punto que puedas ver dentro del alcance. Mientras estén en esta área, las criaturas tienen las condiciones Cegada y Sorda, y no pueden lanzar hechizos con componente Verbal.",
            "Cuando aparece la tormenta, cada criatura en ella realiza una tirada de salvación de Constitución, recibiendo daño Radiante 2d10 y daño de Trueno 2d10 si falla o la mitad si tiene éxito. Una criatura también realiza esta salvación cuando entra en el área del hechizo por primera vez en un turno o termina su turno allí. Una criatura realiza esta salvación solo una vez por turno."
        ],
        escalado: {
            efecto: "El daño Radiante y daño de Trueno aumentan en 1d10 para cada nivel de espacio de hechizo superior a 5."
        }
    },

    "Saber legendario": {
        nivel: 5,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "Yo mismo",
        componentes: "V, S, M (incienso que cuesta 250+ MO, que el hechizo consume, y cuatro tiras de marfil que cuesta 50+ MO cada una)",
        duracion: "Instantáneo",
        efecto: [
            "Nombra o describe a una persona, lugar u objeto famoso. El hechizo te trae a la mente un breve resumen del saber significativo sobre esa cosa famosa, tal como lo describe el DJ.",
            "El saber podría consistir en detalles importantes, revelaciones divertidas, o incluso saber secreto que nunca ha sido ampliamente conocido. Cuanta más información ya conoces sobre la cosa, más precisa y detallada es la información que recibes. Esa información es exacta pero podría estar expresada en lenguaje figurado o poesía, tal como lo determine el DJ.",
            "Si la cosa famosa que elegiste no es realmente famosa, escuchas notas musicales tristes tocadas en un trombón, y el hechizo falla."
        ]
    },

    "Curación en masa": {
        nivel: 5,
        escuela: "Abjuración",
        tipo: "curacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Una onda de energía curativa brota de un punto que puedas ver dentro del alcance. Elige hasta seis criaturas en una Esfera de radio 30p centrada en ese punto. Cada objetivo recupera Puntos de Golpe iguales a 5d8 más tu modificador de habilidad de lanzamiento de hechizos."
        ],
        escalado: {
            efecto: "La curación aumenta en 1d8 para cada nivel de espacio de hechizo superior a 5."
        }
    },

    "Engaño": {
        nivel: 5,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "S",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Obtienes la condición Invisible al mismo tiempo que un doble ilusorio de ti aparece donde estás de pie. El doble dura durante la duración, pero la invisibilidad termina inmediatamente después de que realizes una tirada de ataque, inflijas daño, o lances un hechizo.",
            "Como una Acción de Magia, puedes mover el doble ilusorio hasta el doble de tu Velocidad y hacerlo gesticular, hablar y comportarse de la manera que elijas. Es intangible e invulnerable.",
            "Puedes ver a través de sus ojos y escuchar a través de sus oídos como si estuvieras ubicado donde está."
        ]
    },

    "Modificar recuerdos": {
        nivel: 5,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Intentas remodelar los recuerdos de otra criatura. Una criatura que puedas ver dentro del alcance realiza una tirada de salvación de Sabiduría. Si estás luchando contra la criatura, tiene Ventaja en la salvación. Con una salvación fallida, el objetivo tiene la condición Encantada durante la duración. Mientras está Encantado de esta manera, el objetivo también tiene la condición Incapacitada y no es consciente de sus alrededores, aunque puede escucharte. Si recibe cualquier daño o es objetivo de otro hechizo, este hechizo termina, y no se modifica ningún recuerdo.",
            "Mientras dure este encantamiento, puedes afectar el recuerdo del objetivo de un evento que experimentó dentro de los últimos 24 horas y que duró no más de 10 minutos. Puedes eliminar permanentemente toda memoria del evento, permitir que el objetivo recuerde el evento con claridad perfecta, cambiar su recuerdo de los detalles del evento, o crear un recuerdo de algún otro evento.",
            "Debes hablar al objetivo para describir cómo se afectan sus recuerdos, y debe ser capaz de entender tu idioma para que los recuerdos modificados echen raíces. Su mente completa cualquier brecha en los detalles de tu descripción. Si el hechizo termina antes de que termines de describir los recuerdos modificados, el recuerdo de la criatura no se altera. De otra manera, los recuerdos modificados toman efecto cuando el hechizo termina.",
            "Un recuerdo modificado no necesariamente afecta cómo se comporta una criatura, particularmente si el recuerdo contradice las inclinaciones naturales, alineación, o creencias de la criatura. Un recuerdo modificado ilógico, como un falso recuerdo de cuánto disfrutó la criatura nadando en ácido, es descartado como un mal sueño. El DJ podría considerar que un recuerdo modificado es demasiado sin sentido para afectar a una criatura.",
            "Un hechizo Remover Maldición o Restauración Completa lanzado en el objetivo restaura el verdadero recuerdo de la criatura."
        ],
        escalado: {
            efecto: "Con un espacio de hechizo de nivel 6, puedes alterar los recuerdos del objetivo de un evento que ocurrió hace hasta 7 días. Con nivel 7, hasta 30 días. Con nivel 8, hasta 365 días. Con nivel 9, cualquier momento en el pasado de la criatura."
        }
    },

    "Pasaje": {
        nivel: 5,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (un poco de semillas de sésamo)",
        duracion: "1 hora",
        efecto: [
            "Un pasaje aparece en un punto que puedas ver en una superficie de madera, yeso o piedra (como una pared, techo o piso) dentro del alcance y dura durante la duración. Eliges las dimensiones de la abertura: hasta 5p de ancho, 8p de alto y 20p de profundidad. El pasaje no crea inestabilidad en una estructura que lo rodea.",
            "Cuando la abertura desaparece, cualquier criatura u objeto todavía en el pasaje creado por el hechizo es expulsado de manera segura a un espacio desocupado más cercano a la superficie en la que lanzaste el hechizo."
        ]
    },

    "Vinculación planar": {
        nivel: 5,
        escuela: "Abjuración",
        tipo: "salvacion",
        tiempo: "1 hora",
        rango: "60p",
        componentes: "V, S, M (una gema que cuesta 1,000+ MO, que el hechizo consume)",
        duracion: "24 horas",
        efecto: [
            "Intentas vincular a tu servicio a un Celestial, Elemental, Feérico o Demonio. La criatura debe estar dentro del alcance durante todo el lanzamiento del hechizo. (Típicamente, la criatura es primero convocada al centro de la versión invertida del hechizo Círculo Mágico para atraparla mientras se lanza este hechizo.) Al completar el lanzamiento, el objetivo debe tener éxito en una tirada de salvación de Carisma o estar vinculado a tu servicio durante la duración. Si la criatura fue convocada o creada por otro hechizo, la duración de ese hechizo se extiende para coincidir con la duración de este hechizo.",
            "Una criatura vinculada debe seguir tus comandos lo mejor que pueda. Puedes ordenar a la criatura que te acompañe en una aventura, que guarde una ubicación, o que entregue un mensaje. Si la criatura es Hostil, se esfuerza por torcer tus comandos para lograr sus propios objetivos. Si la criatura lleva a cabo tus comandos completamente antes de que el hechizo termine, viaja hacia ti para reportar este hecho si estás en el mismo plano de existencia. Si estás en un plano diferente, regresa al lugar donde la vinculaste y permanece allí hasta que el hechizo termina."
        ],
        escalado: {
            efecto: "La duración aumenta a 10 días con un espacio de hechizo de nivel 6, 30 días con nivel 7, 180 días con nivel 8, y 366 días con nivel 9."
        }
    },

    "Resucitar": {
        nivel: 5,
        escuela: "Nigromancia",
        tipo: "curacion",
        tiempo: "1 hora",
        rango: "Toque",
        componentes: "V, S, M (un diamante que cuesta 500+ MO, que el hechizo consume)",
        duracion: "Instantáneo",
        efecto: [
            "Con un toque, resucitas a una criatura muerta si ha estado muerta no más de 10 días y no era un No-muerto cuando murió.",
            "La criatura regresa a la vida con 1 Punto de Golpe. Este hechizo también neutraliza cualquier veneno que afectara a la criatura en el momento de la muerte.",
            "Este hechizo cierra todas las heridas mortales, pero no restaura partes del cuerpo faltantes. Si a la criatura le faltan partes del cuerpo u órganos integrales para su supervivencia - su cabeza, por ejemplo - el hechizo automáticamente falla.",
            "Regresar de entre los muertos es una odisea. El objetivo recibe una penalización −4 a pruebas de Dados de Veinte. Cada vez que el objetivo termina un Descanso Largo, la penalización se reduce en 1 hasta que se convierte en 0."
        ]
    },

    "Vínculo telepático de Rary": {
        nivel: 5,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción o Ritual",
        rango: "30p",
        componentes: "V, S, M (dos huevos)",
        duracion: "1 hora",
        efecto: [
            "Forjas un vínculo telepático entre hasta ocho criaturas dispuestas de tu elección dentro del alcance, vinculando psíquicamente cada criatura a todas las demás durante la duración. Las criaturas que no pueden comunicarse en ningún idioma no son afectadas por este hechizo.",
            "Hasta que el hechizo termina, los objetivos pueden comunicarse telepáticamente a través del vínculo sin importar si comparten un idioma. La comunicación es posible sobre cualquier distancia, aunque no puede extenderse a otros planos de existencia."
        ]
    },

    "Reencarnación": {
        nivel: 5,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "1 hora",
        rango: "Toque",
        componentes: "V, S, M (aceites raros que cuesta 1,000+ MO, que el hechizo consume)",
        duracion: "Instantáneo",
        efecto: [
            "Tocas a un Humanoide muerto o una parte del mismo. Si la criatura ha estado muerta no más de 10 días, el hechizo forma un nuevo cuerpo para ella y llama al alma a entrar en ese cuerpo. Lanza 1d10 y consulta la tabla del DJ para determinar la especie del cuerpo.",
            "La criatura reencarnada realiza cualquier elección que ofrece la descripción de la especie, y la criatura recuerda su vida anterior. Retiene las capacidades que tenía en su forma original, excepto pierde los rasgos de su especie anterior y gana los rasgos de la nueva."
        ]
    },

    "Clarividencia": {
        nivel: 5,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "Yo mismo",
        componentes: "V, S, M (un foco que cuesta 1,000+ MO, como una esfera de cristal, espejo, o fuente llena de agua)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Puedes ver y escuchar a una criatura que elijas que está en el mismo plano de existencia que tú. El objetivo realiza una tirada de salvación de Sabiduría, que se modifica por qué tan bien conoces al objetivo y qué tipo de conexión física tienes con él. El objetivo no sabe qué está realizando la salvación en contra, solo que se siente inquieto.",
            "En una salvación exitosa, el objetivo no es afectado, y no puedes usar este hechizo en él de nuevo por 24 horas.",
            "En una salvación fallida, el hechizo crea un sensor Invisible e intangible dentro de 10p del objetivo. Puedes ver y escuchar a través del sensor como si estuvieras allí. El sensor se mueve con el objetivo, permaneciendo dentro de 10p de él durante la duración. Si algo puede ver el sensor, aparece como un orbe luminoso aproximadamente del tamaño de tu puño.",
            "En lugar de apuntar a una criatura, puedes apuntar a una ubicación que hayas visto. Cuando lo haces, el sensor aparece en esa ubicación y no se mueve."
        ]
    },

    "Apariencia": {
        nivel: 5,
        escuela: "Ilusión",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "8 horas",
        efecto: [
            "Das una apariencia ilusoria a cada criatura de tu elección que puedas ver dentro del alcance. Un objetivo no dispuesto puede realizar una tirada de salvación de Carisma, y si tiene éxito, no es afectado por este hechizo.",
            "Puedes dar la misma apariencia o diferentes a los objetivos. El hechizo puede cambiar la apariencia de los cuerpos y equipo de los objetivos. Puedes hacer que cada criatura parezca 1p más baja o más alta y aparezca más pesada o más ligera. La nueva apariencia de un objetivo debe tener el mismo arreglo básico de extremidades que el objetivo, pero la extensión de la ilusión es de otra manera hasta ti. El hechizo dura durante la duración.",
            "Los cambios realizados por este hechizo fallan al resistir inspección física. Por ejemplo, si usas este hechizo para agregar un sombrero al atuendo de una criatura, los objetos pasan a través del sombrero.",
            "Una criatura que toma la acción de Estudio para examinar un objetivo puede realizar una prueba de Inteligencia (Investigación) contra tu CD de salvación de hechizo. Si tiene éxito, se da cuenta de que el objetivo está disfrazado."
        ]
    },

    "Infusión elemental de Songal": {
        nivel: 5,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una perla que cuesta 100+ MO)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Te imbuyes del poder elemental de los genios. Obtienes los siguientes beneficios hasta que el hechizo termina:",
            "Inmunidad elemental. Cuando lanzas este hechizo, elige uno de los siguientes tipos de daño: Ácido, Frío, Fuego, Rayo o Trueno. Tienes Resistencia al tipo de daño elegido.",
            "Pulso elemental. Cuando lanzas este hechizo y al inicio de cada turno posterior tuyo, liberas una ráfaga de energía elemental en una Emanación de 15p originada desde ti. Cada criatura de tu elección en esa área realiza una tirada de salvación de Destreza. Con una salvación fallida, una criatura recibe daño Ácido, Frío, Fuego, Rayo o Trueno (tu elección) 2d6 y tiene la condición Tendida. Con una salvación exitosa, una criatura recibe solo la mitad del daño.",
            "Vuelo. Obtienes una Velocidad de vuelo de 30p y puedes cernerte."
        ]
    },

    "Golpe de viento de acero": {
        nivel: 5,
        escuela: "Conjuración",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "30p",
        componentes: "S, M (un arma de combate que cuesta 1+ MO)",
        duracion: "Instantáneo",
        efecto: [
            "Luchas con el arma usada en el lanzamiento y luego desapareces para golpear como el viento. Elige hasta cinco criaturas que puedas ver dentro del alcance. Realiza un ataque de hechizo de combate contra cada objetivo. En un golpe, un objetivo recibe daño de Fuerza 6d10.",
            "Luego te teletransportas a un espacio desocupado que puedas ver dentro de 5p de uno de los objetivos."
        ]
    },

    "Convocar Celestial": {
        nivel: 5,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (un relicario que cuesta 500+ MO)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Convocas un espíritu Celestial. Se manifiesta en una forma angelical en un espacio desocupado que puedas ver dentro del alcance y usa el bloque de estadísticas del Espíritu Celestial. Cuando lanzas el hechizo, elige Vengador o Defensor. Tu elección determina ciertos detalles en su bloque de estadísticas. La criatura desaparece cuando cae a 0 Puntos de Golpe o cuando el hechizo termina.",
            "La criatura es un aliado para ti y tus aliados. En combate, comparte tu iniciativa, pero actúa inmediatamente después de ti. Obedece tus órdenes verbales (sin requerir acción). Si no le das órdenes, realiza la acción Esquivar y se mueve para evitar el peligro.",
            "Espíritu Celestial",
            "Grande Celestial, Neutral",
            "Clase de armadura 11 + el nivel del hechizo (+2 si es Defensor)",
            "Puntos de golpe 40 +10 por cada nivel del hechizo superior a 5",
            "Velocidad 30p, vuela 40p",
            "Fuerza 16 (+3/+3), Destreza 14 (+2/+2), Constitución 16 (+3/+3), Inteligencia 10 (+0/+0), Sabiduría 14 (+2/+2), Carisma 16 (+3/+3)",
            "Resistencias Radiante",
            "Inmunidades Encantado, Asustado",
            "Sentidos Visión en la Oscuridad 60 pies, Percepción Pasiva 12",
            "Idiomas Celestial, entiende los idiomas que conoces",
            "Calificación de desafío Ninguno, su bonificador de competencia es igual al tuyo.",
            "Acciones",
            "Multiataque. El espíritu realiza un número de ataques igual a la mitad del nivel de este hechizo (redondeado hacia abajo).",
            "Arco Radiante (solo Vengador). Ataque a distancia: la bonificación es igual a tu modificador de ataque de hechizo, alcance 600 pies. Impacto: 2d6 + 2 + el nivel del hechizo de daño radiante.",
            "Maza Radiante (solo Defensor). Ataque cuerpo a cuerpo: la bonificación es igual a tu modificador de ataque de hechizo, alcance 5 pies. Impacto: 1d10 + 3 + el nivel del hechizo de daño radiante, y el espíritu puede elegir a sí mismo u otra criatura que vea a 10 pies del objetivo. La criatura elegida gana 1d10 puntos de golpe temporales.",
            "Toque Sanador (1/día). El espíritu toca a una criatura. El objetivo recupera 2d8 + el nivel del hechizo en puntos de golpe."
        ],
        escalado: {
            efecto: "Usa el nivel del espacio de conjuro para el nivel del hechizo en el bloque de estadísticas."
        }
    },

    "Convocar Dragón": {
        nivel: 5,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un objeto con la imagen de un dragón grabada que cuesta 500+ MO)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Convocas un espíritu dracónico. Se manifiesta en un espacio desocupado que puedas ver dentro del alcance y usa el bloque de estadísticas del Espíritu Dracónico. La criatura desaparece cuando cae a 0 Puntos de Golpe o cuando el hechizo termina.",
            "La criatura es un aliado para ti y tus aliados. En combate, comparte tu iniciativa, pero actúa inmediatamente después de ti. Obedece tus órdenes verbales (sin requerir acción). Si no le das órdenes, realiza la acción Esquivar y se mueve para evitar el peligro.",
            "Espíritu Dracónico",
            "Grande Dragón, Neutral",
            "Clase de armadura 14 + el nivel del hechizo",
            "Puntos de golpe 50 +10 por cada nivel del hechizo superior a 5",
            "Velocidad 30p, vuela 60p, nada 30p",
            "Fuerza 19 (+4/+4), Destreza 14 (+2/+2), Constitución 17 (+3/+3), Inteligencia 10 (+0/+0), Sabiduría 14 (+2/+2), Carisma 14 (+2/+2)",
            "Resistencias Ácido, Frío, Fuego, Rayo, Veneno",
            "Inmunidades Encantado, Asustado, Envenenado",
            "Sentidos Vista ciega 30 pies, Visión en la Oscuridad 60 pies, Percepción Pasiva 12",
            "Idiomas Dracónico, entiende los idiomas que conoces",
            "Calificación de desafío Ninguno, su bonificador de competencia es igual al tuyo.",
            "Rasgos",
            "Resistencias Compartidas. Cuando convocas el espíritu, eliges una de sus resistencias. Tienes resistencia a ese tipo de daño hasta que el hechizo termine.",
            "Acciones",
            "Multiataque. El espíritu realiza un número de ataques de Desgarrar igual a la mitad del nivel del hechizo (redondeado hacia abajo) y usa Arma de Aliento.",
            "Desgarrar. Ataque cuerpo a cuerpo: la bonificación es igual a tu modificador de ataque de hechizo, alcance 10 pies. Impacto: 1d6 + 4 + el nivel del hechizo de daño perforante.",
            "Arma de Aliento. Tirada de salvación de Destreza: CD igual a tu CD de salvación de hechizos, cada criatura en un cono de 30 pies. Fallo: 2d6 de daño de un tipo al que el espíritu tenga resistencia (eliges al lanzarlo). Éxito: mitad de daño."
        ],
        escalado: {
            efecto: "Usa el nivel del espacio de conjuro para el nivel del hechizo en el bloque de estadísticas."
        }
    },

    "Carcaj veloz": {
        nivel: 5,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S, M (un carcaj que cuesta 1+ MO)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Cuando lanzas el hechizo y como Acción adicional hasta que termina, puedes realizar dos ataques con un arma que lanza Flechas o Pernos, como un Arco largo o una Ballesta ligera. El hechizo crea mágicamente la munición necesaria para cada ataque. Cada Flecha o Perno creado por el hechizo inflige daño como una pieza de munición no mágica de su tipo y se desintegra inmediatamente después de golpear o fallar."
        ]
    },

    "Estática sináptica": {
        nivel: 5,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Haces que energía psíquica estalle en un punto dentro del alcance. Cada criatura en una Esfera de radio 20p centrada en ese punto realiza una tirada de salvación de Inteligencia, recibiendo daño Psíquico 8d6 con una salvación fallida o la mitad con una exitosa.",
            "Con una salvación fallida, un objetivo también tiene pensamientos turbios durante 1 minuto. Durante ese tiempo, resta 1d6 de todas sus tiradas de ataque y pruebas de habilidad, así como de cualquier tirada de salvación de Constitución para mantener Concentración. El objetivo realiza una tirada de salvación de Inteligencia al final de cada uno de sus turnos, terminando el efecto en sí mismo con un éxito."
        ]
    },

    "Telekinesis": {
        nivel: 5,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Obtienes la capacidad de mover o manipular criaturas u objetos por el pensamiento. Cuando lanzas el hechizo y como Acción de Magia en tus turnos posteriores antes de que el hechizo termine, puedes ejercer tu voluntad sobre una criatura u objeto que puedas ver dentro del alcance, causando el efecto apropiado abajo. Puedes afectar al mismo objetivo ronda tras ronda o elegir uno nuevo en cualquier momento. Si cambias de objetivo, el objetivo anterior ya no es afectado por el hechizo.",
            "Criatura. Puedes intentar mover una criatura Enorme o más pequeña. El objetivo debe tener éxito en una tirada de salvación de Fuerza, o lo mueves hasta 30p en cualquier dirección dentro del alcance del hechizo. Hasta el final de tu próximo turno, la criatura tiene la condición Restringida, y si la levantas en el aire, está suspendida allí. Cae al final de tu próximo turno a menos que uses esta opción en ella de nuevo y falle la salvación.",
            "Objeto. Puedes intentar mover un objeto Enorme o más pequeño. Si el objeto no está siendo llevado o portado, automáticamente lo mueves hasta 30p en cualquier dirección dentro del alcance del hechizo. Si el objeto es llevado o portado por una criatura, esa criatura debe tener éxito en una tirada de salvación de Fuerza, o lo jalas lejos y lo mueves hasta 30p en cualquier dirección dentro del alcance del hechizo.",
            "Puedes ejercer control fino sobre objetos con tu agarre telekinético, como manipular una herramienta simple, abrir una puerta o un contenedor, guardar o recuperar un objeto de un contenedor abierto, o verter el contenido de un frasco."
        ]
    },

    "Círculo de teletransportación": {
        nivel: 5,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "10p",
        componentes: "V, M (tintas raras que cuesta 50+ MO, que el hechizo consume)",
        duracion: "1 ronda",
        efecto: [
            "Mientras lanzas el hechizo, dibujas un círculo de radio 5p en el suelo inscrito con signos que vinculan tu ubicación a un círculo de teletransportación permanente de tu elección cuya secuencia de signos conoces y que está en el mismo plano de existencia que tú. Un portal brillante se abre dentro del círculo que dibujaste y permanece abierto hasta el final de tu próximo turno. Cualquier criatura que entra al portal instantáneamente aparece dentro de 5p del círculo de destino o en el espacio desocupado más cercano si ese espacio está ocupado.",
            "Muchos templos principales, salones de gremios, y otros lugares importantes tienen círculos de teletransportación permanentes. Cada círculo incluye una secuencia de signos única—una cadena de runas arregladas en un patrón particular.",
            "Cuando ganas por primera vez la capacidad de lanzar este hechizo, aprendes las secuencias de signos para dos destinos en el Plano Material, determinados por el DJ. Podrías aprender secuencias de signos adicionales durante tus aventuras. Puedes comprometer una nueva secuencia de signos a la memoria después de estudiarla durante 1 minuto.",
            "Puedes crear un círculo de teletransportación permanente lanzando este hechizo en la misma ubicación cada día durante 365 días."
        ]
    },

    "Paso entre árboles": {
        nivel: 5,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Obtienes la capacidad de entrar en un árbol y moverte desde adentro hacia otro árbol del mismo tipo dentro de 500p. Ambos árboles deben estar vivos y ser al menos del mismo tamaño que tú. Debes usar 5p de movimiento para entrar en un árbol. Instantáneamente conoces la ubicación de todos los demás árboles del mismo tipo dentro de 500p y, como parte del movimiento usado para entrar en el árbol, puedes pasar hacia uno de esos árboles o salir del árbol en el que estás. Apareces en un punto de tu elección dentro de 5p del árbol de destino, usando otros 5p de movimiento. Si no tienes movimiento dejado, apareces dentro de 5p del árbol que entraste.",
            "Puedes usar esta capacidad de transporte solo una vez en cada uno de tus turnos. Debes terminar cada turno fuera de un árbol."
        ]
    },

    "Muro de fuerza": {
        nivel: 5,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (un fragmento de vidrio)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Un muro Invisible de fuerza surge en existencia en un punto que elijas dentro del alcance. El muro aparece en cualquier orientación que elijas, como una barrera horizontal o vertical o en un ángulo. Puede estar flotando libremente o reposando sobre una superficie sólida. Puedes formarlo en una cúpula hemisférica o un globo con un radio de hasta 10p, o puedes dar forma a una superficie plana compuesta de diez paneles de 10p por 10p. Cada panel debe ser contiguo con otro panel. En cualquier forma, el muro es 1/4 pulgada de grosor y dura durante la duración. Si el muro corta a través del espacio de una criatura cuando aparece, la criatura es empujada hacia un lado del muro (tu elixes qué lado).",
            "Nada puede pasar físicamente a través del muro. Es inmune a todo daño y no puede ser disipado por Disipar Magia. Sin embargo, un hechizo Desintegración destruye el muro instantáneamente. El muro también se extiende hacia el Plano Etéreo y bloquea viajes etéreos a través del muro."
        ]
    },

    "Muro de piedra": {
        nivel: 5,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (un cubo de granito)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Un muro no mágico de piedra sólida surge en existencia en un punto que elijas dentro del alcance. El muro es 6 pulgadas de grosor y está compuesto de diez paneles de 10p por 10p. Cada panel debe ser contiguo con otro panel. Alternativamente, puedes crear paneles de 10p por 20p que son solo 3 pulgadas de grosor.",
            "Si el muro corta a través del espacio de una criatura cuando aparece, la criatura es empujada hacia un lado del muro (tu elixes qué lado). Si una criatura estaría rodeada por todos lados por el muro (o el muro y otra superficie sólida), esa criatura puede realizar una tirada de salvación de Destreza. Con un éxito, puede usar su Reacción para moverse hasta su Velocidad para que ya no esté encerrada por el muro.",
            "El muro puede tener cualquier forma que desees, aunque no puede ocupar el mismo espacio que una criatura u objeto. El muro no necesita ser vertical o reposar en una base firme. Debe, sin embargo, fusionarse con y ser sólidamente apoyado por piedra existente. Así, puedes usar este hechizo para cruzar un abismo o crear una rampa.",
            "Si creas un tramo mayor que 20p de largo, debes reducir a la mitad el tamaño de cada panel para crear soportes. Puedes formar groseramente el muro para crear almenas y similares.",
            "El muro es un objeto hecho de piedra que puede ser dañado y por lo tanto ser breachado. Cada panel tiene CA 15 y 30 Puntos de Golpe por pulgada de grosor, e tiene Inmunidad a daño de Veneno y Psíquico. Reducir un panel a 0 Puntos de Golpe lo destruye y podría causar que paneles conectados se colapsen a discreción del DJ.",
            "Si mantienes tu Concentración en este hechizo durante su duración completa, el muro se vuelve permanente y no puede ser disipado. De otra manera, el muro desaparece cuando el hechizo termina."
        ]
    },

    "Presencia regia de Yolande": {
        nivel: 5,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una tiara en miniatura)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Te rodeas de majestad sobrenatural en una Emanación de 10p. Siempre que la Emanación entra en el espacio de una criatura que puedas ver y siempre que una criatura que puedas ver entra en la Emanación o termina su turno allí, puedes forzar a esa criatura a realizar una tirada de salvación de Sabiduría. Con una salvación fallida, el objetivo recibe daño Psíquico 4d6 y tiene la condición Tendida, y puedes empujarlo hasta 10p lejos. Con una salvación exitosa, el objetivo recibe solo la mitad del daño. Una criatura realiza esta salvación solo una vez por turno."
        ]
    },

    "Puerta Arcana": {
        nivel: 6,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "500p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Creas portales de teletransportación vinculados. Elige dos espacios Grandes desocupados en el suelo que puedas ver, uno dentro del alcance y otro dentro de 10p de ti. Un portal circular se abre en cada uno de esos espacios y permanece durante la duración.",
            "Los portales son anillos brillantes bidimensionales llenos de niebla que bloquean la visión. Flotan a poca altura del suelo y son perpendiculares a él.",
            "Un portal está abierto solo en un lado (tú eliges cuál). Cualquier cosa que entre por el lado abierto de un portal sale por el lado abierto del otro portal como si los dos estuvieran adyacentes. Como una Acción adicional, puedes cambiar la orientación de los lados abiertos."
        ]
    },

    "Barrera de Hojas": {
        nivel: 6,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Creas un muro de hojas giratorias hecho de energía mágica. El muro aparece dentro del alcance y dura durante la duración. Haces un muro recto de hasta 100p de largo, 20p de alto y 5p de grosor, o un muro anular de hasta 60p de diámetro, 20p de alto y 5p de grosor. El muro proporciona Cobertura de Tres Cuartos, y su espacio es Terreno difícil.",
            "Cualquier criatura en el espacio del muro hace una tirada de salvación de Destreza, recibiendo daño de Fuerza 6d10 si falla o la mitad si tiene éxito. Una criatura también hace esa salvación si entra en el espacio del muro o termina su turno allí. Una criatura hace esa salvación solo una vez por turno."
        ]
    },

    "Relámpago en Cadena": {
        nivel: 6,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (tres alfileres de plata)",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas un rayo hacia un objetivo que puedas ver dentro del alcance. Tres rayos entonces saltan desde ese objetivo hacia otros tres objetivos de tu elección, cada uno de los cuales debe estar dentro de 30p del primer objetivo. Un objetivo puede ser una criatura u objeto y solo puede ser objetivo de uno de los rayos.",
            "Cada objetivo hace una tirada de salvación de Destreza, recibiendo daño de Rayo 10d8 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "Un rayo adicional salta del primer objetivo a otro objetivo para cada nivel de espacio de hechizo superior a 6."
        }
    },

    "Círculo de Muerte": {
        nivel: 6,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (polvo de perla negra molida que cuesta 500+ MO)",
        duracion: "Instantáneo",
        efecto: [
            "La energía negativa se expande en una Esfera de 60p de radio desde un punto que elijas dentro del alcance. Cada criatura en esa área hace una tirada de salvación de Constitución, recibiendo daño Necrótico 8d8 si falla o la mitad si tiene éxito."
        ],
        escalado: {
            efecto: "El daño aumenta en 2d8 para cada nivel de espacio de hechizo superior a 6."
        }
    },

    "Convocar Feérico": {
        nivel: 6,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Convocas un espíritu Mediano desde el Feywild en un espacio desocupado que puedas ver dentro del alcance. El espíritu dura durante la duración, y se parece a una criatura Feérica de tu elección. Cuando el espíritu aparece, puedes hacer un ataque de hechizo de combate contra una criatura dentro de 5p de él. En un golpe, el objetivo recibe daño Psíquico igual a 3d12 más tu modificador de habilidad de lanzamiento de hechizos, y el objetivo tiene la condición Asustada hasta el inicio de tu siguiente turno.",
            "Como una Acción adicional en tus turnos posteriores, puedes teletransportar el espíritu a un espacio desocupado que puedas ver dentro de 30p del espacio que dejó e intentar el ataque contra una criatura dentro de 5p de él."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d12 para cada nivel de espacio de hechizo superior a 6."
        }
    },

    "Contingencia": {
        nivel: 6,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "Yo mismo",
        componentes: "V, S, M (una estatuilla personalizada enchapada en gemas que cuesta 1.500+ MO)",
        duracion: "10 días",
        efecto: [
            "Elige un hechizo de nivel 5 o inferior que puedas lanzar, que tenga un tiempo de lanzamiento de Acción, y que pueda apuntarte. Lanzas ese hechizo—llamado el hechizo contingente—como parte de lanzar Contingencia, agotando espacios de hechizo para ambos, pero el hechizo contingente no entra en efecto. En su lugar, entra en efecto cuando ocurre un cierto disparador. Describes ese disparador cuando lanzas los dos hechizos.",
            "El hechizo contingente entra en efecto inmediatamente después de que el disparador ocurra por primera vez, sin importar si lo quieres, y luego Contingencia termina. El hechizo contingente entra en efecto solo en ti, incluso si puede apuntar normalmente a otros. Solo puedes tener activo un hechizo Contingencia a la vez. Si lanzas este hechizo de nuevo, el efecto de otro hechizo Contingencia en ti termina."
        ]
    },

    "Crear No-Muerto": {
        nivel: 6,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "10p",
        componentes: "V, S, M (una piedra de ónice negra de 150+ MO para cada cadáver)",
        duracion: "Instantáneo",
        efecto: [
            "Solo puedes lanzar este hechizo de noche. Elige hasta tres cadáveres de Humanoides Medianos o Pequeños dentro del alcance. Cada uno se convierte en un Ghul bajo tu control.",
            "Como una Acción adicional en cada uno de tus turnos, puedes ordenar mentalmente a cualquier criatura que animaste con este hechizo si la criatura está dentro de 120p de ti. Decides qué acción realizará la criatura y dónde se moverá en su siguiente turno, o puedes emitir un comando general, como guardar un lugar particular.",
            "La criatura está bajo tu control durante 24 horas, después de lo cual deja de obedecer cualquier comando que le hayas dado. Para mantener el control de la criatura durante otras 24 horas, debes lanzar este hechizo en la criatura antes de que el período actual de 24 horas termine."
        ],
        escalado: {
            efecto: "Con un espacio de hechizo de nivel 7, puedes animar o reafirmar control sobre cuatro Ghouls. Con nivel 8, puedes animar o reafirmar control sobre cinco Ghouls o dos Ghasts o Wights. Con nivel 9, puedes animar o reafirmar control sobre seis Ghouls, tres Ghasts o Wights, o dos Mummies."
        }
    },

    "Dirge": {
        nivel: 6,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "El poder de la muerte llena una Emanación de 60p originada desde ti durante la duración.",
            "Cuando lanzas este hechizo, puedes designar criaturas para que no sean afectadas. Cualquier otra criatura no puede recuperar Puntos de Golpe mientras esté en la Emanación. Siempre que la Emanación entra en el espacio de una criatura y siempre que una criatura entra en la Emanación o termina su turno allí, la criatura hace una tirada de salvación de Constitución. Con una salvación fallida, la criatura recibe daño Necrótico 3d10 y tiene la condición Tendida. Con una salvación exitosa, la criatura recibe la mitad del daño y su Velocidad se reduce a la mitad. Una criatura realiza esta salvación solo una vez por turno."
        ]
    },

    "Desintegrar": {
        nivel: 6,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (una piedra imantada y polvo)",
        duracion: "Instantáneo",
        efecto: [
            "Lanzas un rayo verde a un objetivo que puedas ver dentro del alcance. El objetivo puede ser una criatura, un objeto no mágico, o una creación de fuerza mágica, como el muro creado por Muro de Fuerza.",
            "Una criatura objetivo por este hechizo hace una tirada de salvación de Destreza. Con una salvación fallida, el objetivo recibe daño de Fuerza 10d6 + 40. Si este daño lo reduce a 0 Puntos de Golpe, se desintegra en polvo gris junto con todo lo no mágico que está usando y llevando. El objetivo solo puede ser revivido por un hechizo Resurrección Verdadera o Deseo.",
            "Este hechizo desintegra automáticamente un objeto no mágico Grande o más pequeño o una creación de fuerza mágica. Si tal objetivo es Enorme o más grande, este hechizo desintegra una porción de Cubo de 10p de él."
        ],
        escalado: {
            efecto: "El daño aumenta en 3d6 para cada nivel de espacio de hechizo superior a 6."
        }
    },

    "Conmociones Instantáneas de Drawmij": {
        nivel: 6,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "1 minuto o Ritual",
        rango: "Toque",
        componentes: "V, S, M (un zafiro que cuesta 1.000+ MO)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Tocas el zafiro usado en el lanzamiento y un objeto que pesa 10 libras o menos cuya dimensión más larga es 6p o menos. El hechizo deja una marca Invisible en ese objeto e inscribe invisiblemente el nombre del objeto en el zafiro. Cada vez que lanzas este hechizo, debes usar un zafiro diferente.",
            "Después de esto, puedes tomar una acción de Magia para hablar el nombre del objeto y triturar el zafiro. El objeto instantáneamente aparece en tu mano sin importar distancias físicas o planares, y el hechizo termina.",
            "Si otra criatura está sosteniendo o llevando el objeto, triturar el zafiro no lo transporta, pero en su lugar aprendes quién es esa criatura y dónde se encuentra actualmente."
        ]
    },

    "Esferas Fulgentes de Elminster": {
        nivel: 6,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (un ópalo que cuesta 1.000+ MO)",
        duracion: "1 hora",
        efecto: [
            "Seis esferas cromáticas orbitan alrededor tuyo durante la duración.",
            "Mientras las esferas estén presentes, puedes gastar esferas para crear los siguientes efectos:",
            "Absorber Energía. Cuando recibes daño de Ácido, Frío, Fuego, Rayo o Trueno, puedes tomar una Reacción para gastar una esfera y darte a ti mismo Resistencia al tipo de daño desencadenante hasta el inicio de tu siguiente turno.",
            "Explosión de Energía. Como una Acción adicional, envías una esfera disparada hacia un objetivo dentro de 120p de ti. Realiza un ataque de hechizo a distancia. En un golpe, el objetivo recibe daño de Ácido, Frío, Fuego, Rayo o Trueno (tu elección) 3d6. Sin importar si golpeas, la esfera se gasta.",
            "El hechizo termina anticipadamente si no te quedan esferas."
        ],
        escalado: {
            efecto: "El número de esferas aumenta en 1 para cada nivel de espacio de hechizo superior a 6."
        }
    },

    "Ojo Ardiente": {
        nivel: 6,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Durante la duración, tus ojos se convierten en un vacío de tinta. Una criatura de tu elección dentro de 60p de ti que puedas ver debe tener éxito en una tirada de salvación de Sabiduría o ser afectada por uno de los siguientes efectos de tu elección durante la duración.",
            "Dormido. El objetivo tiene la condición Inconsciente. Se despierta si recibe daño o si otra criatura toma una acción para despertarlo.",
            "Asustado. El objetivo tiene la condición Asustada. En cada uno de sus turnos, el objetivo Asustado debe tomar la acción Correr y alejarse de ti por la ruta más segura y corta disponible. Si el objetivo se mueve a un espacio al menos 60p lejos de ti donde no puede verte, este efecto termina.",
            "Envenenado. El objetivo tiene la condición Envenenada."
        ],
        escalado: {
            efecto: "En cada uno de tus turnos posteriores hasta que el hechizo termine, puedes tomar una acción de Magia para apuntar a otra criatura pero no puedes apuntar a una criatura de nuevo si ha tenido éxito en una salvación contra este lanzamiento del hechizo."
        }
    },

    "Encontrar el Camino": {
        nivel: 6,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "Yo mismo",
        componentes: "V, S, M (un conjunto de herramientas de adivinación como cartas o runas que cuesta 100+ MO)",
        duracion: "Concentración, hasta 1 día",
        efecto: [
            "Mágicamente sientes la ruta física más directa a una ubicación que nombres. Debes estar familiarizado con la ubicación, y el hechizo falla si nombras un destino en otro plano de existencia, un destino en movimiento (como una fortaleza móvil), o un destino no específico (como 'la guarida de un dragón verde').",
            "Durante la duración, mientras estés en el mismo plano de existencia que el destino, sabes qué tan lejos está y en qué dirección se encuentra. Siempre que enfrentes una elección de caminos en el camino, sabes cuál es el camino más directo."
        ]
    },

    "Carne a Piedra": {
        nivel: 6,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (una pluma de cocatriz)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Intentas convertir una criatura que puedas ver dentro del alcance en piedra. El objetivo hace una tirada de salvación de Constitución. Con una salvación fallida, tiene la condición Restringida durante la duración. Con una salvación exitosa, su Velocidad es 0 hasta el inicio de tu siguiente turno. Los Constructos tienen éxito automático en la salvación.",
            "Un objetivo Restringido hace otra tirada de salvación de Constitución al final de cada uno de sus turnos. Si tiene éxito en tres salvaciones contra este hechizo, el hechizo termina. Si falla en tres salvaciones, se convierte en piedra y tiene la condición Petrificada durante la duración.",
            "Si mantienes tu Concentración en este hechizo durante toda la duración posible, el objetivo está Petrificado hasta que la condición sea terminada por Restauración Mayor o magia similar."
        ]
    },

    "Prohibición": {
        nivel: 6,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "10 minutos o Ritual",
        rango: "Toque",
        componentes: "V, S, M (polvo de rubí que cuesta 1.000+ MO)",
        duracion: "1 día",
        efecto: [
            "Creas una barrera contra viajes mágicos que protege hasta 40.000 pies cuadrados de espacio de piso a una altura de 30p sobre el piso. Durante la duración, las criaturas no pueden teletransportarse hacia el área o usar portales, como los creados por el hechizo Puerta, para entrar al área. El hechizo prueba el área contra viajes planares, previniendo que las criaturas accedan al área por el Plano Astral, el Plano Etéreo, el Feywild, el Shadowfell, o el hechizo Cambio de Plano.",
            "Además, el hechizo daña tipos de criaturas que elijas cuando lo lanzas. Elige uno o más de los siguientes: Aberraciones, Celestiales, Elementales, Feéricos, Demonios y No-muertos. Cuando una criatura del tipo elegido entra al área del hechizo por primera vez en un turno o termina su turno allí, la criatura recibe daño Radiante o Necrótico 5d10 (tu elección cuando lanzas este hechizo).",
            "Puedes designar una contraseña cuando lanzas el hechizo. Una criatura que habla la contraseña mientras entra al área no recibe daño del hechizo."
        ]
    },

    "Globo de Invulnerabilidad": {
        nivel: 6,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una perla de vidrio)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una barrera inmóvil y brillante aparece en una Emanación de 10p alrededor tuyo y permanece durante la duración.",
            "Cualquier hechizo de nivel 5 o inferior lanzado desde afuera de la barrera no puede afectar nada dentro de ella. Tal hechizo puede apuntar criaturas y objetos dentro de la barrera, pero el hechizo no tiene efecto en ellos. De manera similar, el área dentro de la barrera está excluida de áreas de efecto creadas por tales hechizos."
        ],
        escalado: {
            efecto: "La barrera bloquea hechizos de 1 nivel más alto para cada nivel de espacio de hechizo superior a 6."
        }
    },

    "Guardias y Protecciones": {
        nivel: 6,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "1 hora",
        rango: "Toque",
        componentes: "V, S, M (una vara de plata que cuesta 10+ MO)",
        duracion: "24 horas",
        efecto: [
            "Creas una protección que protege hasta 2.500 pies cuadrados de espacio de piso. El área protegida puede tener hasta 20p de alto, y la das forma como un cuadrado de 50p, cien cuadrados de 5p que son contiguos, o veinticinco cuadrados de 10p que son contiguos.",
            "Cuando lanzas este hechizo, puedes especificar individuos que no sean afectados por los efectos del hechizo. También puedes especificar una contraseña que, cuando se habla en voz alta dentro de 5p del área protegida, hace que el hablante sea inmune a sus efectos.",
            "El hechizo crea los efectos a continuación dentro del área protegida. Disipar Magia no tiene efecto en Guardias y Protecciones en sí, pero cada uno de los siguientes efectos puede ser disipado."
        ]
    },

    "Daño": {
        nivel: 6,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Desatas magia virulenta en una criatura que puedas ver dentro del alcance. El objetivo hace una tirada de salvación de Constitución. Con una salvación fallida, recibe daño Necrótico 14d6, y su máximo de Puntos de Golpe se reduce por una cantidad igual al daño Necrótico que recibió. Con una salvación exitosa, recibe solo la mitad del daño. Este hechizo no puede reducir el máximo de Puntos de Golpe de un objetivo por debajo de 1."
        ]
    },

    "Curar": {
        nivel: 6,
        escuela: "Abjuración",
        tipo: "curacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Elige una criatura que puedas ver dentro del alcance. La energía positiva fluye a través del objetivo, restaurando 70 Puntos de Golpe. Este hechizo también termina las condiciones Cegada, Sorda y Envenenada en el objetivo."
        ],
        escalado: {
            efecto: "La curación aumenta en 10 para cada nivel de espacio de hechizo superior a 6."
        }
    },

    "Festín de Héroes": {
        nivel: 6,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "Yo mismo",
        componentes: "V, S, M (un cuenco enchapado en gemas que cuesta 1.000+ MO, que el hechizo consume)",
        duracion: "Instantáneo",
        efecto: [
            "Convocas un festín que aparece en una superficie en un Cubo desocupado de 10p junto a ti. El festín tarda 1 hora en consumirse y desaparece al final de ese tiempo, y los efectos beneficiosos no comienzan hasta que esta hora haya pasado. Hasta doce criaturas pueden participar del festín.",
            "Una criatura que participa gana varios beneficios, que duran 24 horas. La criatura tiene Resistencia al daño de Veneno, y tiene Inmunidad a las condiciones Asustada y Envenenada. Su máximo de Puntos de Golpe también aumenta en 2d10, y gana el mismo número de Puntos de Golpe."
        ]
    },

    "Frasco Mágico": {
        nivel: 6,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "Yo mismo",
        componentes: "V, S, M (una gema, cristal, o relicario que cuesta 500+ MO)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Tu cuerpo cae en un estado catatónico mientras tu alma lo deja y entra en el contenedor que usaste como componente Material del hechizo. Mientras tu alma habita el contenedor, eres consciente de tus alrededores como si estuvieras en el espacio del contenedor. No puedes moverte o tomar Reacciones. La única acción que puedes tomar es proyectar tu alma hasta 100p fuera del contenedor, ya sea regresando a tu cuerpo viviente (terminando el hechizo) o intentando poseer el cuerpo de un Humanoide.",
            "Puedes intentar poseer cualquier Humanoide dentro de 100p de ti que puedas ver. El objetivo hace una tirada de salvación de Carisma. Con una salvación fallida, tu alma entra en el cuerpo del objetivo, y el alma del objetivo queda atrapada en el contenedor. Con una salvación exitosa, el objetivo resiste tus esfuerzos de posesión."
        ]
    },

    "Sugestión Masiva": {
        nivel: 6,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, M (una lengua de serpiente)",
        duracion: "24 horas",
        efecto: [
            "Sugieres un curso de actividad—descrito en no más de 25 palabras—a doce o menos criaturas que puedas ver dentro del alcance que puedan escucharte y entenderte. La sugestión debe sonar alcanzable y no involucrar nada que obviamente causaría daño a ninguno de los objetivos o sus aliados.",
            "Cada objetivo debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Encantada durante la duración o hasta que tú o tus aliados causen daño al objetivo. Cada objetivo Encantado persigue la sugestión lo mejor que puede. La actividad sugerida puede continuar durante toda la duración, pero si la actividad sugerida puede ser completada en menos tiempo, el hechizo termina para un objetivo al completarla."
        ],
        escalado: {
            efecto: "La duración es más larga con un espacio de hechizo de nivel 7 (10 días), 8 (30 días), o 9 (366 días)."
        }
    },

    "Mover Tierra": {
        nivel: 6,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (una pala en miniatura)",
        duracion: "Concentración, hasta 2 horas",
        efecto: [
            "Elige un área de terreno no más grande de 40p de lado dentro del alcance. Puedes remodelar tierra, arena o arcilla en el área de cualquier manera que elijas durante la duración. Puedes elevar o bajar la elevación del área, crear o rellenar una zanja, erigir o nivelar un muro, o formar un pilar. La extensión de cualquier cambio no puede exceder la mitad de la dimensión más grande del área.",
            "A estos cambios les toma 10 minutos completarse. Porque la transformación del terreno ocurre lentamente, las criaturas en el área normalmente no pueden ser atrapadas o lesionadas por el movimiento del suelo.",
            "Al final de cada 10 minutos que gastes concentrándote en el hechizo, puedes elegir una nueva área de terreno dentro del alcance para afectar."
        ]
    },

    "Esfera Congelante de Otiluke": {
        nivel: 6,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "300p",
        componentes: "V, S, M (una esfera de cristal en miniatura)",
        duracion: "Instantáneo",
        efecto: [
            "Un globo gélido se lanza desde ti hacia un punto de tu elección dentro del alcance, donde explota en una Esfera de 60p de radio. Cada criatura en esa área hace una tirada de salvación de Constitución, recibiendo daño de Frío 10d6 con una salvación fallida o la mitad con una exitosa.",
            "Si el globo golpea un cuerpo de agua, congela el agua a una profundidad de 6 pulgadas sobre un área de 30p cuadrados. Este hielo dura 1 minuto. Las criaturas que estaban nadando en la superficie del agua congelada quedan atrapadas en el hielo y tienen la condición Restringida.",
            "Puedes abstenerte de disparar el globo después de completar el lanzamiento del hechizo. Si lo haces, un globo aproximadamente del tamaño de una bala de honda, frío al tacto, aparece en tu mano. En cualquier momento, tú o una criatura a la que le des el globo pueden lanzarlo (a un alcance de 40p) o arrojarlo con una honda."
        ],
        escalado: {
            efecto: "El daño aumenta en 1d6 para cada nivel de espacio de hechizo superior a 6."
        }
    },

    "Danza Irresistible de Otto": {
        nivel: 6,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una criatura que puedas ver dentro del alcance debe hacer una tirada de salvación de Sabiduría. Con una salvación exitosa, el objetivo baila cómicamente hasta el final de su siguiente turno, momento en el que debe gastar todo su movimiento bailando en el mismo lugar.",
            "Con una salvación fallida, el objetivo tiene la condición Encantada durante la duración. Mientras está Encantado, el objetivo baila cómicamente, debe usar todo su movimiento para bailar en el mismo lugar, y tiene Desventaja en tiradas de salvación de Destreza y tiradas de ataque. Al final de cada uno de sus turnos, el objetivo puede tomar una acción para recuperarse e intentar la salvación de nuevo, terminando el hechizo en sí mismo con un éxito."
        ]
    },

    "Aliado Planar": {
        nivel: 6,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Suplicas a una entidad de otro mundo por ayuda. El ser debe ser conocido para ti: un dios, un príncipe demonio, u otra entidad de poder cósmico. Esa entidad envía un Celestial, un Elemental, o un Demonio leal para ayudarte, haciendo que la criatura aparezca en un espacio desocupado dentro del alcance.",
            "Cuando la criatura aparece, no está bajo compulsión de comportarse de manera particular. Puedes pedirle que realice un servicio a cambio de pago, pero no está obligada a hacerlo. La tarea solicitada podría variar desde simple hasta compleja.",
            "El pago puede tomar varios formas. Un Celestial podría requerir una donación sustancial de oro u objetos mágicos a un templo aliado, mientras que un Demonio podría exigir un sacrificio viviente o un regalo de tesoro."
        ]
    },

    "Ilusión Programada": {
        nivel: 6,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (polvo de jade que cuesta 25+ MO)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Creas una ilusión de un objeto, una criatura, o algún otro fenómeno visible dentro del alcance que se activa cuando ocurre un disparador específico. La ilusión es imperceptible hasta entonces. No debe ser más grande de un Cubo de 30p, y decides cuándo lanzas el hechizo cómo se comporta la ilusión y qué sonidos produce. Este desempeño guionizado puede durar hasta 5 minutos.",
            "Cuando ocurre el disparador que especificas, la ilusión cobra vida y se comporta de la manera que describiste. Una vez que la ilusión termina su desempeño, desaparece y permanece dormida durante 10 minutos, después de los cuales la ilusión puede ser activada de nuevo.",
            "El disparador puede ser tan general o detallado como desees, aunque debe basarse en fenómenos visuales o audibles que ocurran dentro de 30p del área."
        ]
    },

    "Convocar Infernal": {
        nivel: 6,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (un vial sangriento que cuesta 600+ MO)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Convocas un espíritu infernal. Se manifiesta en un espacio desocupado que puedas ver dentro del alcance y usa el bloque de estadísticas del Espíritu Infernal. Cuando lanzas el hechizo, eliges Demonio, Diablo o Yugoloth. La criatura se asemeja a un infernal del tipo elegido, lo que determina ciertos detalles en su bloque de estadísticas. La criatura desaparece cuando cae a 0 Puntos de Golpe o cuando el hechizo termina.",
            "La criatura es un aliado para ti y tus aliados. En combate, comparte tu iniciativa, pero actúa inmediatamente después de ti. Obedece tus órdenes verbales (sin requerir acción). Si no le das órdenes, realiza la acción Esquivar y se mueve para evitar el peligro.",
            "Espíritu Infernal",
            "Grande Infernal, Neutral",
            "Clase de armadura 12 + el nivel del hechizo",
            "Puntos de golpe 50 (solo Demonio) o 40 (solo Diablo) o 60 (solo Yugoloth) +15 por cada nivel del hechizo superior a 6",
            "Velocidad 40p, trepar 40p (solo Demonio), volar 60p (solo Diablo)",
            "Fuerza 13 (+1/+1), Destreza 16 (+3/+3), Constitución 15 (+2/+2), Inteligencia 10 (+0/+0), Sabiduría 10 (+0/+0), Carisma 16 (+3/+3)",
            "Resistencias Fuego",
            "Inmunidades Veneno, Envenenado",
            "Sentidos Visión en la Oscuridad 60 pies, Percepción Pasiva 10",
            "Idiomas Abisal, Infernal, Telepatía 60 pies",
            "Calificación de desafío Ninguno, su bonificador de competencia es igual al tuyo.",
            "Rasgos",
            "Estertores de Muerte (solo Demonio). Cuando el espíritu cae a 0 Puntos de Golpe o el hechizo termina, explota. Tirada de salvación de Destreza: CD igual a tu CD de salvación de hechizos, cada criatura en un radio de 10 pies. Fallo: 2d10 + el nivel del hechizo de daño de fuego. Éxito: mitad de daño.",
            "Vista del Diablo (solo Diablo). La Oscuridad mágica no impide la visión en la oscuridad del espíritu.",
            "Resistencia Mágica. El espíritu tiene ventaja en tiradas de salvación contra conjuros y otros efectos mágicos.",
            "Acciones",
            "Multiataque. El espíritu realiza un número de ataques igual a la mitad del nivel del hechizo (redondeado hacia abajo).",
            "Mordisco (solo Demonio). Ataque cuerpo a cuerpo: la bonificación es igual a tu modificador de ataque de hechizo, alcance 5 pies. Impacto: 1d12 + 3 + el nivel del hechizo de daño necrótico.",
            "Garras (solo Yugoloth). Ataque cuerpo a cuerpo: la bonificación es igual a tu modificador de ataque de hechizo, alcance 5 pies. Impacto: 1d8 + 3 + el nivel del hechizo de daño cortante. Inmediatamente después de impactar o fallar, el espíritu puede teletransportarse hasta 30 pies a un espacio desocupado que pueda ver.",
            "Golpe Ígneo (solo Diablo). Ataque cuerpo a cuerpo o a distancia: la bonificación es igual a tu modificador de ataque de hechizo, alcance 5 pies o rango 150 pies. Impacto: 2d6 + 3 + el nivel del hechizo de daño de fuego."
        ],
        escalado: {
            efecto: "Usa el nivel del espacio de conjuro para el nivel del hechizo en el bloque de estadísticas."
        }
    },

    "Rayo Solar": {
        nivel: 6,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una lupa)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Lanzas un rayo solar en una Línea de 5p de ancho y 60p de largo. Cada criatura en la Línea hace una tirada de salvación de Constitución. Con una salvación fallida, una criatura recibe daño Radiante 6d8 y tiene la condición Cegada hasta el inicio de tu siguiente turno. Con una salvación exitosa, recibe solo la mitad del daño.",
            "Hasta que el hechizo termina, puedes tomar una acción de Magia para crear una nueva Línea de radiancia.",
            "Durante la duración, una mota de radiancia brillante brilla sobre ti. Arroja Luz brillante en un radio de 30p y Luz tenue para otros 30p adicionales. Esta luz es luz solar."
        ]
    },

    "Caldera Hirviente de Tasha": {
        nivel: 6,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "5p",
        componentes: "V, S, M (una cuchara dorada que cuesta 500+ MO)",
        duracion: "10 minutos",
        efecto: [
            "Convocas una caldera de patas de garra llena de líquido hirviente. La caldera aparece en un espacio desocupado en el suelo dentro de 5p de ti y dura durante la duración. La caldera no puede ser movida y desaparece cuando el hechizo termina, junto con el líquido hirviente dentro de ella.",
            "El líquido en la caldera duplica las propiedades de una poción Común o Poco Común de tu elección. Como una Acción adicional, tú o un aliado pueden meter la mano en la caldera y retirar una poción de ese tipo. La caldera puede producir un número de estas pociones igual a tu modificador de habilidad de lanzamiento de hechizos (mínimo 1)."
        ]
    },

    "Transporte a través de Plantas": {
        nivel: 6,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "10p",
        componentes: "V, S",
        duracion: "1 minuto",
        efecto: [
            "Este hechizo crea un vínculo mágico entre una planta Grande o más grande e inanimada dentro del alcance y otra planta, a cualquier distancia, en el mismo plano de existencia. Debes haber visto o tocado la planta destino al menos una vez antes. Durante la duración, cualquier criatura puede entrar en la planta objetivo y salir de la planta destino usando 5p de movimiento."
        ]
    },

    "Visión Verdadera": {
        nivel: 6,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (polvo de champiñón que cuesta 25+ MO, que el hechizo consume)",
        duracion: "1 hora",
        efecto: [
            "Durante la duración, la criatura dispuesta que tocas tiene Visión Verdadera con un alcance de 120p."
        ]
    },

    "Muro de Hielo": {
        nivel: 6,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (un trozo de cuarzo)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Creas un muro de hielo en una superficie sólida dentro del alcance. Puedes darle forma como una cúpula hemisférica o un globo con un radio de hasta 10p, o puedes dar forma a una superficie plana compuesta de diez paneles de 10p por 10p. El muro tiene 1p de grosor y dura durante la duración.",
            "Si el muro corta a través del espacio de una criatura cuando aparece, la criatura es empujada a un lado del muro y hace una tirada de salvación de Destreza, recibiendo daño de Frío 10d6 con una salvación fallida o la mitad con una exitosa.",
            "El muro es un objeto que puede ser dañado y breachado. Tiene CA 12 y 30 Puntos de Golpe por sección de 10p, y tiene Inmunidad a daño de Frío, Veneno y Psíquico e Vulnerabilidad a daño de Fuego."
        ],
        escalado: {
            efecto: "El daño que el muro causa cuando aparece aumenta en 2d6 y el daño de pasar a través del aire gélido aumenta en 1d6 para cada nivel de espacio de hechizo superior a 6."
        }
    },

    "Muro de Espinas": {
        nivel: 6,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S, M (un puñado de espinas)",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Creas un muro de arbustos enredados erizado de espinas afiladas. El muro aparece dentro del alcance en una superficie sólida y dura durante la duración. Puedes hacer que el muro mida hasta 60p de largo, 10p de alto y 5p de grosor o un círculo que tenga un diámetro de 20p y sea hasta 20p de alto y 5p de grosor. El muro bloquea la línea de visión.",
            "Cuando aparece el muro, cada criatura en su área hace una tirada de salvación de Destreza, recibiendo daño Perforante 7d8 con una salvación fallida o la mitad con una exitosa.",
            "Una criatura puede moverse a través del muro, aunque lentamente y dolorosamente. Por cada 1p que una criatura se mueve a través del muro, debe gastar 4p de movimiento. Además, la primera vez que una criatura entra en un espacio en el muro en un turno o termina su turno allí, la criatura hace una tirada de salvación de Destreza, recibiendo daño Cortante 7d8 con una salvación fallida o la mitad con una exitosa."
        ],
        escalado: {
            efecto: "Ambos tipos de daño aumentan en 1d8 para cada nivel de espacio de hechizo superior a 6."
        }
    },

    "Caminar sobre el Viento": {
        nivel: 6,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "30p",
        componentes: "V, S, M (una vela)",
        duracion: "8 horas",
        efecto: [
            "Tú y hasta diez criaturas dispuestas de tu elección dentro del alcance asumen formas gaseosas durante la duración, apareciendo como volutas de nube. Mientras estén en esta forma de nube, un objetivo tiene una Velocidad de vuelo de 300p y puede cernerse, tiene Inmunidad a la condición Tendida, y tiene Resistencia a daño Contundente, Perforante y Cortante.",
            "Las únicas acciones que un objetivo puede tomar en esta forma son la acción Correr o una acción de Magia para comenzar a revertirse a su forma normal. Revertirse toma 1 minuto, momento en el cual el objetivo tiene la condición Aturdida.",
            "Si un objetivo está en forma de nube y volando cuando el efecto termina, el objetivo desciende 60p por ronda durante 1 minuto hasta que aterriza, lo cual hace de manera segura."
        ]
    },

    "Recordar Palabra": {
        nivel: 6,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "5p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Tú y hasta cinco criaturas dispuestas dentro de 5p de ti instantáneamente se teletransportan a un santuario previamente designado. Tú y cualquier criatura que se teletransporte contigo aparecen en el espacio desocupado más cercano al punto que designaste cuando preparaste tu santuario.",
            "Debes designar una ubicación, como un templo, como un santuario lanzando este hechizo allí."
        ]
    },

    "Convocar Celestial": {
        nivel: 7,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Convocas un espíritu de los Planos Superiores, que se manifiesta como un pilar de luz en un Cilindro de radio 10p y 40p de alto centrado en un punto dentro del alcance. Para cada criatura que puedas ver en el Cilindro, elige cuál de estas luces brilla sobre ella:",
            "Luz Curativa. El objetivo recupera Puntos de Golpe iguales a 4d12 más tu modificador de habilidad de lanzamiento de hechizos.",
            "Luz Abrasadora. El objetivo realiza una tirada de salvación de Destreza, recibiendo daño Radiante 6d12 si falla o la mitad si tiene éxito.",
            "Hasta que el hechizo termina, Luz brillante llena el Cilindro, y cuando te mueves en tu turno, también puedes mover el Cilindro hasta 30p.",
            "Siempre que el Cilindro entra en el espacio de una criatura que puedas ver y siempre que una criatura que puedas ver entra en el Cilindro o termina su turno allí, puedes bañarla en una de las luces. Una criatura solo puede ser afectada por este hechizo una vez por turno."
        ],
        escalado: {
            efecto: "La curación y el daño aumentan en 1d12 para cada nivel de espacio de hechizo superior a 7."
        }
    },

    "Bola de Fuego de Explosión Retrasada": {
        nivel: 7,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (una bola de guano de murciélago y azufre)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Un rayo de luz amarilla destella desde ti, luego se condensa en un punto elegido dentro del alcance como una cuenta brillante durante la duración. Cuando el hechizo termina, la cuenta explota, y cada criatura en una Esfera de radius 20p centrada en ese punto realiza una tirada de salvación de Destreza. Una criatura recibe daño de Fuego igual al daño total acumulado si falla o la mitad si tiene éxito.",
            "El daño base del hechizo es 12d6, y el daño aumenta en 1d6 siempre que tu turno termina y el hechizo aún no ha terminado.",
            "Si una criatura toca la cuenta brillante antes de que el hechizo termine, esa criatura realiza una tirada de salvación de Destreza. Si falla, el hechizo termina, causando que la cuenta explote. Si tiene éxito, la criatura puede lanzar la cuenta hasta 40p. Si la cuenta lanzada entra en el espacio de una criatura o choca con un objeto sólido, el hechizo termina y la cuenta explota.",
            "Cuando la cuenta explota, los objetos inflamables en la explosión que no estén siendo llevados o portados comienzan a arder."
        ],
        escalado: {
            efecto: "El daño base aumenta en 1d6 para cada nivel de espacio de hechizo superior a 7."
        }
    },

    "Palabra Divina": {
        nivel: 7,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción adicional",
        rango: "30p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Pronuncias una palabra imbuida de poder de los Planos Superiores. Cada criatura de tu elección dentro del alcance realiza una tirada de salvación de Carisma. Si falla, un objetivo que tiene 50 Puntos de Golpe o menos sufre un efecto basado en sus Puntos de Golpe actuales:",
            "0-20 PG: El objetivo muere.",
            "21-30 PG: El objetivo tiene las condiciones Cegada, Sorda y Aturdida durante 1 hora.",
            "31-40 PG: El objetivo tiene las condiciones Cegada y Sorda durante 10 minutos.",
            "41-50 PG: El objetivo tiene la condición Sorda durante 1 minuto.",
            "Independientemente de sus Puntos de Golpe, un objetivo Celestial, Elemental, Feérico o Demonio que falla en su salvación es forzado de vuelta a su plano de origen (si no está ya allí) y no puede regresar al plano actual durante 24 horas por ningún medio excepto un hechizo Deseo."
        ]
    },

    "Existencia Etérea": {
        nivel: 7,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Hasta 8 horas",
        efecto: [
            "Das un paso hacia las regiones fronterizas del Plano Etéreo, donde se superpone con tu plano actual. Permaneces en el Borde Etéreo durante la duración. Durante este tiempo, puedes moverte en cualquier dirección. Si te mueves hacia arriba o hacia abajo, cada pie de movimiento cuesta un pie extra.",
            "Puedes percibir el plano que dejaste, que se ve gris, y no puedes ver nada allí a más de 60p de distancia.",
            "Mientras estés en el Plano Etéreo, solo puedes ser afectado y afectar criaturas, objetos y efectos en ese plano. Las criaturas que no estén en el Plano Etéreo no pueden percibirte o interactuar contigo a menos que una característica les dé la capacidad de hacerlo.",
            "Cuando el hechizo termina, regresas al plano que dejaste en el espacio que corresponde a tu espacio en el Borde Etéreo. Si apareces en un espacio ocupado, eres empujado al espacio desocupado más cercano y recibes daño de Fuerza igual al doble del número de pies que fuiste movido.",
            "Este hechizo termina instantáneamente si lo lanzas mientras estés en el Plano Etéreo o en un plano que no limita con él, como uno de los Planos Exteriores."
        ],
        escalado: {
            efecto: "Puedes apuntar a hasta tres criaturas dispuestas (incluyéndote a ti mismo) para cada nivel de espacio de hechizo superior a 7. Las criaturas deben estar dentro de 10p de ti cuando lanzas el hechizo."
        }
    },

    "Dedo de la Muerte": {
        nivel: 7,
        escuela: "Nigromancia",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Desatas energía negativa hacia una criatura que puedas ver dentro del alcance. El objetivo realiza una tirada de salvación de Constitución, recibiendo daño Necrótico 7d8 + 30 si falla o la mitad si tiene éxito.",
            "Un Humanoide asesinado por este hechizo se levanta al inicio de tu siguiente turno como un Zombi que sigue tus órdenes verbales."
        ]
    },

    "Tormenta de Fuego": {
        nivel: 7,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Una tormenta de fuego aparece dentro del alcance. El área de la tormenta consiste en hasta diez Cubos de 10p, que arreglas como desees. Cada Cubo debe ser contiguo con al menos otro Cubo. Cada criatura en el área realiza una tirada de salvación de Destreza, recibiendo daño de Fuego 7d10 si falla o la mitad si tiene éxito.",
            "Los objetos inflamables en el área que no estén siendo llevados o portados comienzan a arder."
        ]
    },

    "Jaula de Fuerza": {
        nivel: 7,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "100p",
        componentes: "V, S, M (polvo de rubí que cuesta 1.500+ MO, que el hechizo consume)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Una prisión inmóvil, Invisible y en forma de Cubo compuesta de fuerza mágica surge en existencia alrededor de un área que elijas dentro del alcance. La prisión puede ser una jaula o una caja sólida, como elijas.",
            "Una prisión en forma de jaula puede tener hasta 20p por lado y está hecha de barras de 1/2 pulgada de diámetro espaciadas a 1/2 pulgada de distancia. Una prisión en forma de caja puede tener hasta 10p por lado, creando una barrera sólida que previene que cualquier materia pase a través de ella y bloqueando cualquier hechizo lanzado dentro o fuera del área.",
            "Cuando lanzas el hechizo, cualquier criatura que esté completamente dentro del área de la jaula está atrapada. Las criaturas solo parcialmente dentro del área, o aquellas demasiado grandes para encajar dentro, son empujadas lejos del centro del área hasta que estén completamente fuera.",
            "Una criatura dentro de la jaula no puede dejarla por medios no mágicos. Si la criatura intenta usar teletransportación o viaje interplanar para irse, primero debe tener éxito en una tirada de salvación de Carisma. Si tiene éxito, la criatura puede usar esa magia para salir de la jaula. Si falla, la criatura no sale de la jaula y desperdicia el hechizo o efecto. La jaula también se extiende hacia el Plano Etéreo, bloqueando el viaje etéreo.",
            "Este hechizo no puede ser disipado por Disipar Magia."
        ]
    },

    "Espejismo Arcano": {
        nivel: 7,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "Vista",
        componentes: "V, S",
        duracion: "10 días",
        efecto: [
            "Haces que el terreno en un área de hasta 1 milla cuadrada se vea, suene, huela e incluso se sienta como algún otro tipo de terreno. Los campos abiertos o un camino podrían parecer un pantano, colina, grieta u otro terreno áspero o impasable. Un estanque puede parecer un prado herboso, un precipicio como una pendiente suave, o un barranco rocoso como un camino ancho y liso.",
            "De manera similar, puedes alterar la apariencia de estructuras o agregarlas donde ninguna existe. El hechizo no disfraza, oculta o agrega criaturas.",
            "La ilusión incluye elementos audibles, visuales, táctiles y olfatorios, así que puede convertir terreno claro en Terreno Difícil (o viceversa) u obstruir de otra manera el movimiento a través del área. Cualquier parte del terreno ilusorio (como una roca o palo) que sea removida del área del hechizo desaparece inmediatamente.",
            "Las criaturas con Visión Verdadera pueden ver a través de la ilusión para ver la forma verdadera del terreno; sin embargo, todos los otros elementos de la ilusión permanecen, así que mientras la criatura es consciente de la presencia de la ilusión, la criatura aún puede interactuar físicamente con la ilusión."
        ]
    },

    "Mansión Magnífica de Mordekainen": {
        nivel: 7,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "300p",
        componentes: "V, S, M (una puerta en miniatura que cuesta 15+ MO)",
        duracion: "24 horas",
        efecto: [
            "Convocas una puerta centelleante dentro del alcance que dura durante la duración. La puerta lleva a una vivienda extradimensional y tiene 5p de ancho y 10p de alto. Tú y cualquier criatura que desigues cuando lanzas el hechizo pueden entrar a la vivienda extradimensional mientras la puerta permanezca abierta. Puedes abrirla o cerrarla (sin acción requerida) si estás dentro de 30p de ella. Mientras está cerrada, la puerta es imperceptible.",
            "Más allá de la puerta hay un magnífico vestíbulo con numerosas cámaras más allá. La atmósfera de la vivienda es limpia, fresca y cálida.",
            "Puedes crear cualquier plano de piso que desees para la vivienda, pero no puede exceder 50 Cubos contiguos de 10p. El lugar está amueblado y decorado como elijas. Contiene comida suficiente para servir un banquete de nueve platos para hasta 100 personas. Los muebles y otros objetos creados por este hechizo se disipan en humo si son removidos de él.",
            "Un personal de 100 sirvientes casi transparentes atiende a todos los que entran. Determinas la apariencia de estos sirvientes y su atuendo. Son invulnerables y obedecen tus comandos. Cada sirviente puede realizar tareas que un humano podría realizar, pero no pueden atacar ni tomar ninguna acción que dañe directamente a otra criatura. Así los sirvientes pueden buscar cosas, limpiar, remendar, doblar ropa, encender fuegos, servir comida, verter vino, y así sucesivamente. Los sirvientes no pueden dejar la vivienda.",
            "Cuando el hechizo termina, cualquier criatura u objeto dejado dentro del espacio extradimensional es expulsado a los espacios desocupados más cercanos a la entrada."
        ]
    },

    "Espada de Mordekainen": {
        nivel: 7,
        escuela: "Evocación",
        tipo: "ataque",
        tiempo: "Acción",
        rango: "90p",
        componentes: "V, S, M (una espada en miniatura que cuesta 250+ MO)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas una espada espectral que flota dentro del alcance. Dura durante la duración.",
            "Cuando la espada aparece, realizas un ataque de hechizo de combate contra un objetivo dentro de 5p de la espada. En un golpe, el objetivo recibe daño de Fuerza igual a 4d12 más tu modificador de habilidad de lanzamiento de hechizos.",
            "En tus turnos posteriores, puedes tomar una Acción adicional para mover la espada hasta 30p a un espacio que puedas ver y repetir el ataque contra el mismo objetivo o uno diferente."
        ]
    },

    "Cambio de Plano": {
        nivel: 7,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (una vara de metal bifurcada que cuesta 250+ MO y sintonizada a un plano de existencia)",
        duracion: "Instantáneo",
        efecto: [
            "Tú y hasta ocho criaturas dispuestas que se vinculen en un círculo de manos son transportadas a un plano de existencia diferente. Puedes especificar un destino objetivo en términos generales, como la Ciudad de Latón en el Plano Elemental del Fuego o el palacio de Dispater en el segundo nivel de los Nueve Infiernos, y apareces cerca de ese destino, como lo determine el DJ.",
            "Alternativamente, si conoces la secuencia de sigil de un círculo de teletransportación en otro plano de existencia, este hechizo puede llevarte a ese círculo. Si el círculo de teletransportación es demasiado pequeño para sostener todas las criaturas que transportaste, aparecen en los espacios desocupados más cercanos junto al círculo."
        ]
    },

    "Palabra de Poder: Fortalecer": {
        nivel: 7,
        escuela: "Encantamiento",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Fortaleces hasta seis criaturas que puedas ver dentro del alcance. El hechizo otorga 120 Puntos de Golpe Temporales, que divides entre los receptores del hechizo."
        ]
    },

    "Lluvia Prismática": {
        nivel: 7,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Ocho rayos de luz destellen desde ti en un Cono de 60p. Cada criatura en el Cono realiza una tirada de salvación de Destreza. Para cada objetivo, lanza 1d8 para determinar qué rayo de color lo afecta:",
            "1 - Rojo: Si falla: 12d6 daño de Fuego. Si tiene éxito: la mitad del daño.",
            "2 - Naranja: Si falla: 12d6 daño Ácido. Si tiene éxito: la mitad del daño.",
            "3 - Amarillo: Si falla: 12d6 daño de Rayo. Si tiene éxito: la mitad del daño.",
            "4 - Verde: Si falla: 12d6 daño de Veneno. Si tiene éxito: la mitad del daño.",
            "5 - Azul: Si falla: 12d6 daño de Frío. Si tiene éxito: la mitad del daño.",
            "6 - Índigo: Si falla: El objetivo tiene la condición Restringida y realiza una tirada de salvación de Constitución al final de cada uno de sus turnos. Si tiene éxito en tres salvaciones, la condición termina. Si falla en tres salvaciones, tiene la condición Petrificada hasta que sea liberado por un efecto como Restauración Mayor. Los éxitos y fallos no necesitan ser consecutivos.",
            "7 - Violeta: Si falla: El objetivo tiene la condición Cegada y realiza una tirada de salvación de Sabiduría al inicio de tu siguiente turno. Si tiene éxito, la condición termina. Si falla, la condición termina y la criatura se teletransporta a otro plano de existencia (elección del DJ).",
            "8 - Especial: El objetivo es golpeado por dos rayos. Lanza dos veces, relanzando cualquier 8."
        ]
    },

    "Proyectar Imagen": {
        nivel: 7,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "500 millas",
        componentes: "V, S, M (una estatuilla de ti mismo que cuesta 5+ MO)",
        duracion: "Concentración, hasta 1 día",
        efecto: [
            "Creas una copia ilusoria de ti mismo que dura durante la duración. La copia puede aparecer en cualquier ubicación dentro del alcance que hayas visto antes, independientemente de los obstáculos intervinientes. La ilusión se ve y suena como tú, pero es intangible. Si la ilusión recibe algún daño, desaparece y el hechizo termina.",
            "Puedes ver a través de los ojos de la ilusión y escuchar a través de sus oídos como si estuvieras en su espacio. Como una Acción de Magia, puedes moverla hasta 60p y hacerla gesticular, hablar y comportarse de cualquier manera que elijas. Imita tus gestos perfectamente.",
            "La interacción física con la imagen la revela como ilusoria, ya que las cosas pueden pasar a través de ella. Una criatura que toma la acción de Estudio para examinar la imagen puede determinar que es una ilusión con una prueba exitosa de Inteligencia (Investigación) contra tu CD de salvación de hechizo. Si una criatura descubre que la ilusión es lo que es, la criatura puede ver a través de la imagen, y cualquier ruido que haga suena hueco para la criatura."
        ]
    },

    "Regenerar": {
        nivel: 7,
        escuela: "Transmutación",
        tipo: "curacion",
        tiempo: "1 minuto",
        rango: "Toque",
        componentes: "V, S, M (una rueda de oración)",
        duracion: "1 hora",
        efecto: [
            "Una criatura que tocas recupera 4d8 + 15 Puntos de Golpe. Durante la duración, el objetivo recupera 1 Punto de Golpe al inicio de cada uno de sus turnos, y cualquier parte del cuerpo cortada vuelve a crecer después de 2 minutos."
        ]
    },

    "Resurrección": {
        nivel: 7,
        escuela: "Nigromancia",
        tipo: "curacion",
        tiempo: "1 hora",
        rango: "Toque",
        componentes: "V, S, M (un diamante que cuesta 1.000+ MO, que el hechizo consume)",
        duracion: "Instantáneo",
        efecto: [
            "Con un toque, revives una criatura muerta que ha estado muerta no más de un siglo, no murió de vejez, y no era un No-muerto cuando murió.",
            "La criatura regresa a la vida con todos sus Puntos de Golpe. Este hechizo también neutraliza cualquier veneno que afectara a la criatura en el momento de la muerte. Este hechizo cierra todas las heridas mortales y restaura cualquier parte del cuerpo faltante.",
            "Regresar de entre los muertos es una odisea. El objetivo recibe una penalización −4 a pruebas de Dados de Veinte. Cada vez que el objetivo termina un Descanso Largo, la penalización se reduce en 1 hasta que se convierte en 0.",
            "Lanzar este hechizo para revivir una criatura que ha estado muerta durante 365 días o más te agota. Hasta que termines un Descanso Largo, no puedes lanzar hechizos de nuevo, y tienes Desventaja en pruebas de Dados de Veinte."
        ]
    },

    "Invertir Gravedad": {
        nivel: 7,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "100p",
        componentes: "V, S, M (una piedra imantada y limaduras de hierro)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Este hechizo invierte la gravedad en un Cilindro de radius 50p y 100p de alto centrado en un punto dentro del alcance. Todas las criaturas y objetos en esa área que no estén anclados al suelo caen hacia arriba y alcanzan la parte superior del Cilindro. Una criatura puede realizar una tirada de salvación de Destreza para agarrar un objeto fijo que puede alcanzar, evitando así la caída hacia arriba.",
            "Si un techo u objeto anclado es encontrado en esta caída hacia arriba, las criaturas y objetos lo golpean como lo harían en una caída hacia abajo. Si una criatura u objeto afectado alcanza la parte superior del Cilindro sin golpear nada, flota allí durante la duración. Cuando el hechizo termina, los objetos y criaturas afectados caen hacia abajo."
        ]
    },

    "Secuestro": {
        nivel: 7,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S, M (polvo de gema que cuesta 5.000+ MO, que el hechizo consume)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Con un toque, secuestras mágicamente un objeto o una criatura dispuesta. Durante la duración, el objetivo tiene la condición Invisible y no puede ser objetivo de hechizos de Adivinación, detectado por magia, o visto remotamente con magia.",
            "Si el objetivo es una criatura, entra en un estado de animación suspendida; tiene la condición Inconsciente, no envejece, y no necesita comida, agua o aire.",
            "Puedes establecer una condición para que el hechizo termine temprano. La condición puede ser cualquier cosa que elijas, pero debe ocurrir o ser visible dentro de 1 milla del objetivo. Ejemplos incluyen 'después de 1.000 años' o 'cuando el Tarrasque despierta'. Este hechizo también termina si el objetivo recibe algún daño."
        ]
    },

    "Hechizo Simbiótico de Simbul": {
        nivel: 7,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "1 hora",
        efecto: [
            "Imbuyes una criatura que tocas con energía mágica de curación durante la duración. Siempre que el objetivo lanza un hechizo usando un espacio de hechizo, el objetivo puede inmediatamente lanzar un número de Dados de Golpe no gastados iguales al nivel del espacio de hechizo y recuperar Puntos de Golpe iguales al total del lanzamiento más tu modificador de habilidad de lanzamiento de hechizos; esos dados son entonces gastados."
        ]
    },

    "Simulacro": {
        nivel: 7,
        escuela: "Ilusión",
        tipo: "neutro",
        tiempo: "12 horas",
        rango: "Toque",
        componentes: "V, S, M (rubí pulverizado que cuesta 1.500+ MO, que el hechizo consume)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Creas un simulacro de una Bestia o Humanoide que está dentro de 10p de ti durante todo el lanzamiento del hechizo. Terminas el lanzamiento tocando tanto la criatura como un montón de hielo o nieve que es del mismo tamaño que esa criatura, y el montón se convierte en el simulacro, que es una criatura. Usa las estadísticas de juego de la criatura original al momento del lanzamiento, excepto que es un Constructo, su máximo de Puntos de Golpe es la mitad, y no puede lanzar este hechizo.",
            "El simulacro es Amigable contigo y criaturas que designes. Obedece tus comandos y actúa en tu turno en combate. El simulacro no puede ganar niveles, y no puede tomar Descansos Cortos o Largos.",
            "Si el simulacro recibe daño, la única manera de restaurar sus Puntos de Golpe es repararlo mientras tomas un Descanso Largo, durante el cual gastas componentes que cuestan 100 MO por Punto de Golpe restaurado. El simulacro debe permanecer dentro de 5p de ti para la reparación.",
            "El simulacro dura hasta que cae a 0 Puntos de Golpe, momento en el cual revierte a nieve y se derrite. Si lanzas este hechizo de nuevo, cualquier simulacro que hayas creado con este hechizo es instantáneamente destruido."
        ]
    },

    "Símbolo": {
        nivel: 7,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "Toque",
        componentes: "V, S, M (diamante pulverizado que cuesta 1.000+ MO, que el hechizo consume)",
        duracion: "Hasta que sea disipado o se active",
        efecto: [
            "Inscribes un glifo dañino ya sea en una superficie (como una sección de piso o pared) o dentro de un objeto que pueda cerrarse (como un libro o cofre). El glifo puede cubrir un área no más grande que 10p de diámetro. Si eliges un objeto, debe permanecer en su lugar; si es movido más de 10p lejos de donde lanzaste este hechizo, el glifo se rompe y el hechizo termina sin ser activado.",
            "El glifo es casi imperceptible y requiere una prueba exitosa de Sabiduría (Percepción) contra tu CD de salvación de hechizo para notarlo.",
            "Cuando inscribes el glifo, estableces su disparador y eliges qué efecto lleva el símbolo: Muerte, Discordia, Miedo, Dolor, Sueño o Aturdimiento. Cada uno es explicado a continuación.",
            "Una vez activado, el glifo brilla, llenando una Esfera de radius 60p con Luz Tenue durante 10 minutos, después de lo cual el hechizo termina. Cada criatura en la Esfera cuando el glifo se activa es objetivo de su efecto, como también lo es una criatura que entra en la Esfera por primera vez en un turno o termina su turno allí. Una criatura es objetivo solo una vez por turno.",
            "Muerte: Cada objetivo realiza una tirada de salvación de Constitución, recibiendo 10d10 daño Necrótico si falla o la mitad si tiene éxito.",
            "Discordia: Cada objetivo realiza una tirada de salvación de Sabiduría. Si falla, un objetivo discute con otras criaturas durante 1 minuto. Durante este tiempo, es incapaz de comunicación significativa y tiene Desventaja en tiradas de ataque y pruebas de habilidad.",
            "Miedo: Cada objetivo debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Asustada durante 1 minuto. Mientras está Asustado, el objetivo debe moverse al menos 30p lejos del glifo en cada uno de sus turnos, si puede.",
            "Dolor: Cada objetivo debe tener éxito en una tirada de salvación de Constitución o tener la condición Incapacitada durante 1 minuto.",
            "Sueño: Cada objetivo debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Inconsciente durante 10 minutos. Una criatura despierta si recibe daño o si alguien toma una acción para despertarla.",
            "Aturdimiento: Cada objetivo debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Aturdida durante 1 minuto."
        ]
    },

    "Teletransporte": {
        nivel: 7,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "10p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Este hechizo te teletransporta instantáneamente a ti y hasta ocho criaturas dispuestas que puedas ver dentro del alcance, o un único objeto que puedas ver dentro del alcance, a un destino que selecciones. Si apuntas a un objeto, debe ser Grande o más pequeño, y no puede ser llevado o portado por una criatura no dispuesta.",
            "El destino que elijas debe te ser conocido, y debe estar en el mismo plano de existencia que tú. Tu familiaridad con el destino determina si llegas allí con éxito. El DJ lanza 1d100 y consulta la tabla de Resultado de Teletransportación.",
            "La familiaridad determina tu probabilidad de éxito. Consulta la descripción del DJ para los resultados: Golpe Certero, Fuera de Objetivo, Área Similar, o Incidente."
        ]
    },

    "Formas Animales": {
        nivel: 8,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S",
        duracion: "24 horas",
        efecto: [
            "Elige cualquier número de criaturas dispuestas que puedas ver dentro del alcance. Cada objetivo cambia de forma a una Bestia Grande o más pequeña de tu elección que tenga una Clase de Desafío de 4 o inferior. Puedes elegir una forma diferente para cada objetivo. En turnos posteriores, puedes tomar una acción de Magia para transformar los objetivos de nuevo.",
            "Las estadísticas de juego de un objetivo son reemplazadas por las del Bestia elegida, pero el objetivo retiene su tipo de criatura, Puntos de Golpe, Dados de Golpe, alineación, capacidad de comunicarse, y puntuaciones de Inteligencia, Sabiduría y Carisma. Las acciones del objetivo están limitadas por la anatomía de la forma de Bestia, y no puede lanzar hechizos.",
            "El objetivo gana Puntos de Golpe Temporales iguales a los Puntos de Golpe de la primera forma en la que se transforma. Estos Puntos de Golpe Temporales desaparecen si quedan cuando el hechizo termina. La transformación dura durante la duración o hasta que el objetivo la termina como una Acción adicional."
        ]
    },

    "Campo de Antimagia": {
        nivel: 8,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (limaduras de hierro)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Un aura de antimagia te rodea en una Emanación de 10p. Nadie puede lanzar hechizos, tomar acciones de Magia o crear otros efectos mágicos dentro del aura, y esas cosas no pueden apuntar o afectar de otra manera nada dentro de ella. Las propiedades mágicas de objetos mágicos no funcionan dentro del aura o en nada dentro de ella.",
            "Las áreas de efecto creadas por hechizos u otra magia no pueden extenderse al aura, y nadie puede teletransportarse dentro o fuera de ella o usar viaje planar allí. Los portales se cierran temporalmente mientras estén en el aura.",
            "Los hechizos en curso, excepto aquellos lanzados por un Artefacto o una deidad, están suprimidos en el área. Mientras un efecto está suprimido, no funciona, pero el tiempo que pasa suprimido cuenta contra su duración."
        ]
    },

    "Antipatía/Simpatía": {
        nivel: 8,
        escuela: "Encantamiento",
        tipo: "neutro",
        tiempo: "1 hora",
        rango: "60p",
        componentes: "V, S, M (una mezcla de vinagre y miel)",
        duracion: "10 días",
        efecto: [
            "Mientras lanzas el hechizo, elige si crea antipatía o simpatía, y apunta a una criatura u objeto que sea Enorme o más pequeño. Luego especifica un tipo de criatura, como dragones rojos, trasgos o vampiros. Una criatura del tipo elegido realiza una tirada de salvación de Sabiduría cuando viene dentro de 120p del objetivo.",
            "Tu elección de antipatía o simpatía determina qué sucede a una criatura cuando falla esa salvación: Antipatía hace que la criatura tenga la condición Asustada. Simpatía hace que la criatura tenga la condición Encantada y deba usar su movimiento para acercarse lo más posible al objetivo.",
            "Si la criatura Asustada o Encantada termina su turno más de 120p lejos del objetivo, realiza una tirada de salvación de Sabiduría. Con éxito, ya no es afectada por el objetivo. Una criatura que salva exitosamente contra este efecto es inmune a él durante 1 minuto."
        ]
    },

    "Confusión": {
        nivel: 8,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (un llavero sin llaves)",
        duracion: "Instantáneo",
        efecto: [
            "Golpeas la mente de una criatura que puedas ver dentro del alcance. El objetivo realiza una tirada de salvación de Inteligencia.",
            "Con una salvación fallida, el objetivo recibe daño Psíquico 10d12 y no puede lanzar hechizos o tomar la acción de Magia. Al final de cada 30 días, el objetivo repite la salvación, terminando el efecto con un éxito. El efecto también puede ser terminado por Restauración Mayor, Sanar o Deseo.",
            "Con una salvación exitosa, el objetivo recibe solo la mitad del daño."
        ]
    },

    "Clon": {
        nivel: 8,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "1 hora",
        rango: "Toque",
        componentes: "V, S, M (un diamante que cuesta 1.000+ MO, que el hechizo consume, y un recipiente sellable que cuesta 2.000+ MO lo suficientemente grande para sostener a la criatura siendo clonada)",
        duracion: "Instantáneo",
        efecto: [
            "Tocas una criatura o al menos 1 pulgada cúbica de su carne. Un duplicado inerte de esa criatura se forma dentro del recipiente usado en el lanzamiento del hechizo y termina de crecer después de 120 días; eliges si el clon terminado tiene la misma edad que la criatura u es más joven.",
            "El clon permanece inerte y se mantiene indefinidamente mientras su recipiente permanezca sin perturbar. Si la criatura original muere después de que el clon termina de formarse, el alma de la criatura se transfiere al clon si el alma está libre y dispuesta a regresar.",
            "El clon es físicamente idéntico al original y tiene la misma personalidad, memorias y habilidades, pero ninguno del equipo original. Los restos originales de la criatura, si los hay, se vuelven inertes y no pueden ser revividos."
        ]
    },

    "Controlar el Clima": {
        nivel: 8,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "10 minutos",
        rango: "Yo mismo",
        componentes: "V, S, M (incienso ardiente)",
        duracion: "Concentración, hasta 8 horas",
        efecto: [
            "Tomas control del clima dentro de 5 millas de ti durante la duración. Debes estar al aire libre para lanzar este hechizo, y termina anticipadamente si entras adentro.",
            "Cuando lanzas el hechizo, cambias las condiciones climáticas actuales, que son determinadas por el DJ. Puedes cambiar precipitation, temperatura y viento. Tarda 1d4 × 10 minutos para que las nuevas condiciones entren en efecto.",
            "Cuando cambias las condiciones climáticas, encuentra una condición actual en las tablas y cambia su etapa en una, hacia arriba o hacia abajo. Cuando cambies el viento, puedes cambiar su dirección."
        ]
    },

    "Demiplano": {
        nivel: 8,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "S",
        duracion: "1 hora",
        efecto: [
            "Creas una puerta Media sombrío en una superficie sólida plana que puedas ver dentro del alcance. Esta puerta puede ser abierta y cerrada, y lleva a un demiplano que es una sala vacía de 30 pies en cada dimensión, hecha de madera o piedra (tu elección).",
            "Cuando el hechizo termina, la puerta desaparece, y cualquier objeto dentro del demiplano permanece allí. Cualquier criatura adentro también permanece a menos que opte por ser expulsada a través de la puerta conforme desaparece, aterrizando con la condición Tendida en los espacios desocupados más cercanos al antiguo espacio de la puerta.",
            "Cada vez que lanzas este hechizo, puedes crear un nuevo demiplano o conectar la puerta sombrío a un demiplano que creaste con un lanzamiento previo de este hechizo. Además, si conoces la naturaleza y contenido de un demiplano creado por otro lanzamiento de este hechizo por otra criatura, puedes conectar la puerta sombrío a ese demiplano."
        ]
    },

    "Dominar Monstruo": {
        nivel: 8,
        escuela: "Encantamiento",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Una criatura que puedas ver dentro del alcance debe tener éxito en una tirada de salvación de Sabiduría o tener la condición Encantada durante la duración. El objetivo tiene Ventaja en la salvación si tú o tus aliados estáis luchando contra él. Siempre que el objetivo reciba daño, repite la salvación, terminando el hechizo en sí mismo con un éxito.",
            "Tienes un vínculo telepático con el objetivo Encantado mientras ambos estéis en el mismo plano de existencia. En tu turno, puedes usar este vínculo para emitir comandos al objetivo (sin acción requerida), como 'Ataca esa criatura', 'Muévete allá' o 'Trae ese objeto'. El objetivo hace su mejor esfuerzo por obedecer en su turno."
        ],
        escalado: {
            efecto: "Tu Concentración puede durar más con un espacio de hechizo de nivel 9 (hasta 8 horas)."
        }
    },

    "Terremoto": {
        nivel: 8,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "500p",
        componentes: "V, S, M (una roca fracturada)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Elige un punto en el suelo que puedas ver dentro del alcance. Durante la duración, un tremor intenso rasga el suelo en un círculo de radio 100p centrado en ese punto. El suelo allí es Terreno Difícil.",
            "Cuando lanzas este hechizo y al final de cada uno de tus turnos durante la duración, cada criatura en el suelo en el área realiza una tirada de salvación de Destreza. Con una salvación fallida, una criatura tiene la condición Tendida y su Concentración se rompe.",
            "También puedes causar grietas que se abren en el área del hechizo al final del turno que lo lanzas. Cada una es 1d10 × 10 pies de profundidad y 10 pies de ancho, extendiéndose desde un borde del área del hechizo a otro borde. Una criatura en el mismo espacio que una grieta debe tener éxito en una tirada de salvación de Destreza o caer adentro."
        ]
    },

    "Facilidad de Palabra": {
        nivel: 8,
        escuela: "Encantamiento",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "1 hora",
        efecto: [
            "Hasta que el hechizo termina, cuando haces una prueba de Carisma, puedes reemplazar el número que lanzas con un 15. Además, sin importar lo que digas, la magia que determinaría si estás diciendo la verdad indica que estás siendo veraz."
        ]
    },

    "Aura Sagrada": {
        nivel: 8,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (una reliquia que cuesta 1.000+ MO)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Durante la duración, emites un aura en una Emanación de 30p. Mientras estén en el aura, las criaturas de tu elección tienen Ventaja en todas las tiradas de salvación, y otras criaturas tienen Desventaja en tiradas de ataque contra ellas.",
            "Además, cuando un Demonio o un No-muerto golpea a una criatura afectada con una tirada de ataque de combate, el atacante debe tener éxito en una tirada de salvación de Constitución o tener la condición Cegada hasta el final de su siguiente turno."
        ]
    },

    "Estrella Sagrada de Mystra": {
        nivel: 8,
        escuela: "Evocación",
        tipo: "neutro",
        tiempo: "Acción adicional",
        rango: "Yo mismo",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas una mota brillante de energía que flota sobre ti durante la duración. La mota emite Luz Brillante en un radio de 5p y Luz Tenue para 5p adicionales.",
            "Cuando lanzas este hechizo y como Acción adicional en turnos posteriores, puedes lanzar un rayo brillante desde la mota, apuntando a una criatura dentro de 120p de ti. Realiza un ataque de hechizo a distancia. En un golpe, el objetivo recibe daño de Fuerza o Radiante (tu elección) igual a 4d10 más tu modificador de habilidad de lanzamiento de hechizos.",
            "Además, mientras la mota esté presente, tienes Cobertura de Tres Cuartos, y si tienes éxito en una tirada de salvación contra un hechizo de nivel 7 o inferior que te apuntaba solo a ti y no creaba un área de efecto, puedes tomar una Reacción para reflejar ese hechizo de vuelta al lanzador del hechizo."
        ]
    },

    "Nube Incendiaria": {
        nivel: 8,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una nube arremolinada de brasas y humo llena una Esfera de radius 20p centrada en un punto dentro del alcance. El área de la nube está Muy Oscurecida. Dura durante la duración o hasta que un viento fuerte la dispersa, terminando el hechizo.",
            "Cuando la nube aparece, cada criatura en ella realiza una tirada de salvación de Destreza, recibiendo 10d8 daño de Fuego con una salvación fallida o la mitad con una exitosa. Una criatura también debe hacer esta salvación cuando la Esfera se mueve hacia su espacio y cuando entra en la Esfera o termina su turno allí. Una criatura hace esta salvación solo una vez por turno.",
            "La nube se mueve 10p lejos de ti en una dirección que eliges al inicio de cada uno de tus turnos."
        ]
    },

    "Laberinto": {
        nivel: 8,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 10 minutos",
        efecto: [
            "Desterraste a una criatura que puedas ver dentro del alcance a un demiplano laberíntico. El objetivo permanece allí durante la duración o hasta que escapa del laberinto.",
            "El objetivo puede tomar una acción de Búsqueda para intentar escapar. Cuando lo hace, realiza una prueba de Inteligencia (Investigación) CD 20. Si tiene éxito, escapa, y el hechizo termina.",
            "Cuando el hechizo termina, el objetivo reaparece en el espacio que dejó o, si ese espacio está ocupado, en el espacio desocupado más cercano."
        ]
    },

    "Mente en Blanco": {
        nivel: 8,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Toque",
        componentes: "V, S",
        duracion: "24 horas",
        efecto: [
            "Hasta que el hechizo termina, una criatura dispuesta que tocas tiene Inmunidad a daño Psíquico y la condición Encantada. El objetivo no es afectado por nada que sentiría sus emociones o alineación, leería sus pensamientos, o detectaría mágicamente su ubicación.",
            "Ningún hechizo—ni siquiera Deseo—puede recopilar información sobre el objetivo, observarlo remotamente, o controlar su mente."
        ]
    },

    "Palabra de Poder: Aturdida": {
        nivel: 8,
        escuela: "Encantamiento",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Abruinas la mente de una criatura que puedas ver dentro del alcance. Si el objetivo tiene 150 Puntos de Golpe o menos, tiene la condición Aturdida. De otra manera, su Velocidad es 0 hasta el inicio de tu siguiente turno.",
            "El objetivo Aturdido realiza una tirada de salvación de Constitución al final de cada uno de sus turnos, terminando la condición en sí mismo con un éxito."
        ]
    },

    "Explosión Solar": {
        nivel: 8,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "150p",
        componentes: "V, S, M (un trozo de piedra solar)",
        duracion: "Instantáneo",
        efecto: [
            "Una luz solar brillante destella en una Esfera de radius 60p centrada en un punto que elijas dentro del alcance. Cada criatura en la Esfera realiza una tirada de salvación de Constitución. Con una salvación fallida, una criatura recibe 12d6 daño Radiante y tiene la condición Cegada durante 1 minuto. Con una salvación exitosa, recibe solo la mitad del daño.",
            "Una criatura Cegada por este hechizo realiza otra tirada de salvación de Constitución al final de cada uno de sus turnos, terminando el efecto en sí misma con un éxito.",
            "Este hechizo disipa Oscuridad en su área que fue creada por algún hechizo."
        ]
    },

    "Telepatía": {
        nivel: 8,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Sin límite",
        componentes: "V, S, M (un par de anillos de plata vinculados)",
        duracion: "24 horas",
        efecto: [
            "Creas un vínculo telepático entre ti mismo y una criatura dispuesta con la que estés familiarizado. La criatura puede estar en cualquier lugar en el mismo plano de existencia que tú. El hechizo termina si tú o el objetivo ya no estáis en el mismo plano.",
            "Hasta que el hechizo termina, tú y el objetivo pueden instantáneamente compartir palabras, imágenes, sonidos y otros mensajes sensoriales entre sí a través del vínculo, y el objetivo te reconoce como la criatura con la que se está comunicando.",
            "El hechizo permite a una criatura entender el significado de tus palabras y cualquier mensaje sensorial que envíes a ella."
        ]
    },

    "Tsunami": {
        nivel: 8,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "1 minuto",
        rango: "1 milla",
        componentes: "V, S",
        duracion: "Concentración, hasta 6 rondas",
        efecto: [
            "Una pared de agua surge a la existencia en un punto que elijas dentro del alcance. Puedes hacer la pared hasta 300p de largo, 300p de alto y 50p de grosor. La pared dura durante la duración.",
            "Cuando la pared aparece, cada criatura en su área realiza una tirada de salvación de Fuerza, recibiendo 6d10 daño Contundente con una salvación fallida o la mitad con una exitosa.",
            "Al inicio de cada uno de tus turnos después de que aparece la pared, la pared, junto con cualquier criatura en ella, se mueve 50p lejos de ti. Cualquier criatura Enorme o más pequeña dentro de la pared o cuyo espacio la pared entra cuando se mueve debe tener éxito en una tirada de salvación de Fuerza o recibir 5d10 daño Contundente.",
            "Una criatura capturada en la pared puede moverse nadando. Debido a la fuerza de la onda, la criatura debe tener éxito en una prueba de Fuerza (Atletismo) contra tu CD de salvación de hechizo para moverse en absoluto. Si falla, no puede moverse."
        ]
    },

    "Proyección Astral": {
        nivel: 9,
        escuela: "Nigromancia",
        tipo: "neutro",
        tiempo: "1 hora",
        rango: "10p",
        componentes: "V, S, M (para cada objetivo del hechizo, un jacinto que cuesta 1.000+ MO y una barra de plata que cuesta 100+ MO, todos los cuales el hechizo consume)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Tú y hasta ocho criaturas dispuestas dentro del alcance proyectáis vuestros cuerpos astrales al Plano Astral (el hechizo termina instantáneamente si ya estáis en ese plano). El cuerpo de cada objetivo se deja atrás en un estado de animación suspendida; tiene la condición Inconsciente, no necesita comida ni aire, y no envejece.",
            "La forma astral de un objetivo se parece a su cuerpo en casi todos los aspectos, replicando sus estadísticas de juego y posesiones. La diferencia principal es la adición de un cordón plateado que se extiende desde entre los omóplatos de la forma astral. El cordón se desvanece de la vista después de 1 pie. Si el cordón es cortado - lo que ocurre solo cuando un efecto lo indica - el cuerpo y la forma astral del objetivo mueren.",
            "La forma astral de un objetivo puede viajar a través del Plano Astral. El momento en que una forma astral abandona ese plano, el cuerpo y las posesiones del objetivo viajan a lo largo del cordón plateado, causando que el objetivo reingrese a su cuerpo en el nuevo plano.",
            "Cualquier daño u otros efectos que se apliquen a una forma astral no tienen efecto en el cuerpo del objetivo y viceversa. Si el cuerpo o la forma astral de un objetivo caen a 0 Puntos de Golpe, el hechizo termina para ese objetivo. El hechizo termina para todos los objetivos si tomas una acción de Magia para despedirlo.",
            "Cuando el hechizo termina para un objetivo que no estaba muerto, el objetivo reaparece en su cuerpo y sale del estado de animación suspendida."
        ]
    },

    "Hoja del Desastre": {
        nivel: 9,
        escuela: "Conjuración",
        tipo: "ataque",
        tiempo: "Acción adicional",
        rango: "60p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Creas una grieta planar en forma de hoja de 3 pies de largo que dura durante la duración. La grieta aparece dentro del alcance en un espacio de tu elección, y puedes inmediatamente hacer hasta dos ataques de hechizo de combate, cada uno contra una criatura u objeto dentro de 5p de la grieta. En un golpe, el objetivo recibe daño de Fuerza 10d6. Este ataque es un golpe crítico si el número en el d20 es 18 o superior.",
            "Como Acción adicional en tus turnos posteriores, puedes mover la grieta hasta 60p y repetir los dos ataques contra una criatura u objeto dentro de 5p de ella. Puedes dirigir los ataques al mismo objetivo o a diferentes.",
            "La hoja puede pasar inocuamente a través de cualquier barrera, incluyendo las creadas por hechizos como Muro de Fuerza."
        ]
    },

    "Previsión": {
        nivel: 9,
        escuela: "Adivinación",
        tipo: "neutro",
        tiempo: "1 minuto",
        rango: "Toque",
        componentes: "V, S, M (una pluma de colibrí)",
        duracion: "8 horas",
        efecto: [
            "Tocas una criatura dispuesta y le otorgas una capacidad limitada de ver el futuro inmediato. Durante la duración, el objetivo tiene Ventaja en pruebas de Dados de Veinte, y otras criaturas tienen Desventaja en tiradas de ataque contra él. El hechizo termina anticipadamente si lo lanzas de nuevo."
        ]
    },

    "Puerta": {
        nivel: 9,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S, M (un diamante que cuesta 5.000+ MO)",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Convocas un portal que vincula un espacio desocupado que puedas ver dentro del alcance a una ubicación precisa en un plano de existencia diferente. El portal es una abertura circular, que puedes hacer de 5 a 20 pies de diámetro. Puedes orientar el portal en cualquier dirección que elijas. El portal dura durante la duración, y el destino del portal es visible a través de él.",
            "El portal tiene un frente y una espalda en cada plano donde aparece. El viaje a través del portal es posible solo moviéndose a través de su frente. Cualquier cosa que lo haga es transportada instantáneamente al otro plano, apareciendo en el espacio desocupado más cercano al portal.",
            "Las deidades y otros gobernantes planares pueden prevenir que los portales creados por este hechizo se abran en su presencia o en cualquier lugar dentro de sus dominios.",
            "Cuando lanzas este hechizo, puedes hablar el nombre de una criatura específica (un seudónimo, título o apodo no funciona). Si esa criatura está en un plano diferente al tuyo, el portal se abre al lado de la criatura nombrada y la transporta al espacio desocupado más cercano en tu lado del portal. No ganas poder especial sobre la criatura, y es libre de actuar como el DJ determine. Podría irse, atacarte o ayudarte."
        ]
    },

    "Encarcelamiento": {
        nivel: 9,
        escuela: "Abjuración",
        tipo: "salvacion",
        tiempo: "1 minuto",
        rango: "30p",
        componentes: "V, S, M (una estatuilla del objetivo que cuesta 5.000+ MO)",
        duracion: "Hasta que sea disipado",
        efecto: [
            "Creas una restricción mágica para retener a una criatura que puedas ver dentro del alcance. El objetivo debe tener éxito en una tirada de salvación de Sabiduría. Con un éxito, el objetivo no es afectado, e inmunidad a este hechizo durante las próximas 24 horas. Con un fallo, el objetivo está encarcelado. Mientras está encarcelado, el objetivo no necesita respirar, comer o beber, y no envejece. Los hechizos de Adivinación no pueden localizar o percibir al objetivo encarcelado, y el objetivo no puede teletransportarse.",
            "Hasta que el hechizo termine, el objetivo también es afectado por uno de los siguientes efectos de tu elección:",
            "Entierro. El objetivo está sepultado bajo tierra en un globo hueco de fuerza mágica que es justo lo suficientemente grande para contenerlo. Nada puede pasar hacia adentro o hacia afuera del globo.",
            "Encadenamiento. Cadenas firmemente enraizadas en el suelo sostienen al objetivo en su lugar. El objetivo tiene la condición Restringida y no puede ser movido por ningún medio.",
            "Prisión Cubierta. El objetivo está atrapado en un demiplano que está protegido contra teletransportación y viaje planar. El demiplano es tu elección de un laberinto, una jaula, una torre, o similar.",
            "Contención Mínima. El objetivo se convierte en 1 pulgada de alto y está atrapado dentro de una gema indestructible u objeto similar. La luz puede pasar a través de la gema (permitiendo al objetivo ver hacia afuera y a otras criaturas ver hacia adentro), pero nada más puede pasar a través de ningún medio.",
            "Sueño. El objetivo tiene la condición Inconsciente y no puede ser despertado.",
            "Terminación del Hechizo. Cuando lanzas el hechizo, especifica un disparador que lo terminará. El disparador puede ser tan simple o elaborado como elijas, pero el DJ debe estar de acuerdo en que tiene una alta probabilidad de ocurrir dentro de la próxima década. El disparador debe ser una acción observable, como alguien haciendo una ofrenda particular en el templo de tu dios, salvando tu verdadero amor, o derrotando a un monstruo específico.",
            "Un hechizo Disipar Magia solo puede terminar el hechizo si es lanzado con un espacio de hechizo de nivel 9, apuntando a la prisión o al componente usado para crearla."
        ]
    },

    "Curación en Masa": {
        nivel: 9,
        escuela: "Abjuración",
        tipo: "curacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Una onda de energía curativa fluye hacia fuera de ti hacia criaturas a tu alrededor. Restauras hasta 700 Puntos de Golpe, divididos como elijas entre cualquier número de criaturas que puedas ver dentro del alcance. Las criaturas curadas por este hechizo también tienen la condición Cegada, Sorda y Envenenada removidas de ellas."
        ]
    },

    "Lluvia de Meteoritos": {
        nivel: 9,
        escuela: "Evocación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "1 milla",
        componentes: "V, S",
        duracion: "Instantáneo",
        efecto: [
            "Esferas incandescentes de fuego se precipitan al suelo en cuatro puntos diferentes que puedas ver dentro del alcance. Cada criatura en una Esfera de radio 40p centrada en cada uno de esos puntos hace una tirada de salvación de Destreza. Una criatura recibe daño de Fuego 20d6 y daño Contundente 20d6 con un fallo o la mitad del daño con un éxito. Una criatura en el área de más de una Esfera de fuego es afectada solo una vez.",
            "Un objeto no mágico que no está siendo llevado o portado también recibe el daño si está en el área del hechizo, y el objeto comienza a arder si es inflamable."
        ]
    },

    "Palabra de Poder: Curación": {
        nivel: 9,
        escuela: "Encantamiento",
        tipo: "curacion",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Una onda de energía curativa te lava sobre una criatura que puedas ver dentro del alcance. El objetivo recupera todos sus Puntos de Golpe. Si la criatura tiene la condición Encantada, Asustada, Paralizada, Envenenada o Aturdida, la condición termina. Si la criatura tiene la condición Tendida, puede usar su Reacción para levantarse."
        ]
    },

    "Palabra de Poder: Muerte": {
        nivel: 9,
        escuela: "Encantamiento",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Obligas a una criatura que puedas ver dentro del alcance a morir. Si el objetivo tiene 100 Puntos de Golpe o menos, muere. De otra manera, recibe daño Psíquico 12d12."
        ]
    },

    "Muro Prismático": {
        nivel: 9,
        escuela: "Abjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "60p",
        componentes: "V, S",
        duracion: "10 minutos",
        efecto: [
            "Un plano de luz multicolor brillante y opaco forma un muro vertical - hasta 90 pies de largo, 30 pies de alto y 1 pulgada de grosor - centrado en un punto dentro del alcance. Alternativamente, das forma al muro en un globo de hasta 30 pies de diámetro centrado en un punto dentro del alcance. El muro dura durante la duración. Si colocas el muro en un espacio ocupado por una criatura, el hechizo termina instantáneamente sin efecto.",
            "El muro emite Luz Brillante dentro de 100 pies y Luz Tenue por otros 100 pies adicionales. Tú y las criaturas que designas cuando lanzas el hechizo puedes pasar a través y estar cerca del muro sin daño. Si otra criatura que puede ver el muro se mueve dentro de 20 pies de él o comienza su turno allí, la criatura debe tener éxito en una tirada de salvación de Constitución o tener la condición Cegada durante 1 minuto.",
            "El muro consiste en siete capas, cada una con un color diferente. Cuando una criatura alcanza o pasa a través del muro, lo hace una capa a la vez a través de todas las capas. Cada capa fuerza a la criatura a hacer una tirada de salvación de Destreza o ser afectada por las propiedades de esa capa.",
            "El muro, que tiene CA 10, puede ser destruido una capa a la vez, en orden de rojo a violeta, por medios específicos a cada capa. Si una capa es destruida, se va durante la duración. Campo de Antimagia no tiene efecto en el muro, y Disipar Magia solo puede afectar la capa violeta.",
            "Rojo: Fallo: 12d6 daño de Fuego. Éxito: La mitad del daño. Efectos adicionales: Los ataques a distancia no mágicos no pueden pasar a través de esta capa, que es destruida si toma al menos 25 daño de Frío.",
            "Naranja: Fallo: 12d6 daño Ácido. Éxito: La mitad del daño. Efectos adicionales: Los ataques a distancia mágicos no pueden pasar a través de esta capa, que es destruida por un viento fuerte (como el creado por Ráfaga de Viento).",
            "Amarillo: Fallo: 12d6 daño de Rayo. Éxito: La mitad del daño. Efectos adicionales: La capa es destruida si toma al menos 60 daño de Fuerza.",
            "Verde: Fallo: 12d6 daño de Veneno. Éxito: La mitad del daño. Efectos adicionales: Un hechizo Pasaje, u otro hechizo de nivel igual o superior que pueda abrir un portal en una superficie sólida, destruye esta capa.",
            "Azul: Fallo: 12d6 daño de Frío. Éxito: La mitad del daño. Efectos adicionales: La capa es destruida si toma al menos 25 daño de Fuego.",
            "Índigo: Fallo: El objetivo tiene la condición Restringida e hace una tirada de salvación de Constitución al final de cada uno de sus turnos. Si tiene tres aciertos, la condición termina. Si falla tres veces, tiene la condición Petrificada hasta que sea liberado por un efecto como Restauración Mayor. Los aciertos y fallos no necesitan ser consecutivos. Efectos adicionales: Los hechizos no pueden ser lanzados a través de esta capa, que es destruida por Luz Brillante emitida por el hechizo Luz del Día.",
            "Violeta: Fallo: El objetivo tiene la condición Cegada e hace una tirada de salvación de Sabiduría al inicio de tu siguiente turno. Con un éxito, la condición termina. Con un fallo, la condición termina, y la criatura se teletransporta a otro plano de existencia (elección del DJ). Efectos adicionales: Esta capa es destruida por Disipar Magia."
        ]
    },

    "Cambio de Forma": {
        nivel: 9,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V, S, M (un círculo de jade que cuesta 1.500+ MO)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Te transformas en otra criatura durante la duración o hasta que tomes una acción de Magia para transformarte en una forma diferente elegible. La nueva forma debe ser de una criatura que tenga una Clase de Desafío no superior a tu nivel o Clase de Desafío. Debes haber visto el tipo de criatura antes, y no puede ser un Constructo o un No-muerto.",
            "Cuando lanzas el hechizo, ganas un número de Puntos de Golpe Temporales igual a los Puntos de Golpe de la primera forma en la que te transformas. Estos Puntos de Golpe Temporales se desvanecen si quedan cuando el hechizo termina.",
            "Tus estadísticas de juego son reemplazadas por el bloque de estadísticas de la forma elegida, pero retentiene tu tipo de criatura, alineamiento, personalidad, puntuaciones de Inteligencia, Sabiduría y Carisma, Puntos de Golpe, Dados de Golpe, competencias, y capacidad de comunicarte. Si tienes la característica Lanzamiento de Hechizos, la retienes también.",
            "Al transformarte, determinas si tu equipo cae al suelo o cambia de tamaño y forma para encajar en la nueva forma mientras estés en ella."
        ]
    },

    "Tormenta de Venganza": {
        nivel: 9,
        escuela: "Conjuración",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "1 milla",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Una nube de tormenta hirviendo se forma durante la duración, centrada en un punto dentro del alcance y extendiéndose a un radio de 300 pies. Cada criatura bajo la nube cuando aparece debe tener éxito en una tirada de salvación de Constitución o recibir daño de Trueno 2d6 y tener la condición Sorda durante la duración.",
            "Al inicio de cada uno de tus turnos posteriores, la tormenta produce diferentes efectos, como se detalla a continuación.",
            "Turno 2. Lluvia ácida cae. Cada criatura u objeto bajo la nube recibe daño Ácido 4d6.",
            "Turno 3. Llamas seis rayos de rayo desde la nube para golpear seis criaturas u objetos diferentes debajo de ella. Cada objetivo hace una tirada de salvación de Destreza, recibiendo daño de Rayo 10d6 con un fallo o la mitad del daño con un éxito.",
            "Turno 4. Piedras de granizo llueven. Cada criatura bajo la nube recibe daño Contundente 2d6.",
            "Turnos 5-10. Ráfagas y lluvia congelada asaltan el área bajo la nube. Cada criatura allí recibe daño de Frío 1d6. Hasta que el hechizo termina, el área es Terreno Difícil y Muy Oscurecida, los ataques a distancia con armas son imposibles allí, y un fuerte viento sopla a través del área."
        ]
    },

    "Detención del Tiempo": {
        nivel: 9,
        escuela: "Transmutación",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Detienes brevemente el flujo del tiempo para todos salvo para ti. Ningún tiempo pasa para otras criaturas, mientras tomas 1d4 + 1 turnos seguidos, durante los cuales puedes usar acciones y moverte como normal.",
            "Este hechizo termina si alguna de las acciones que usas durante este período, o cualquier efecto que crees durante él, afecta a una criatura que no seas tú o un objeto siendo llevado o portado por alguien que no seas tú. Además, el hechizo termina si te mueves a un lugar más de 1.000 pies lejos de la ubicación donde lanzaste el hechizo."
        ]
    },

    "Polimorfismo Verdadero": {
        nivel: 9,
        escuela: "Transmutación",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "30p",
        componentes: "V, S, M (una gota de mercurio, un poco de goma arábiga, y una volutas de humo)",
        duracion: "Concentración, hasta 1 hora",
        efecto: [
            "Elige una criatura o un objeto no mágico que puedas ver dentro del alcance. La criatura se transforma en una criatura diferente o un objeto no mágico, o el objeto se transforma en una criatura (el objeto no debe ser llevado ni portado). La transformación dura durante la duración o hasta que el objetivo muere o es destruido, pero si mantienes Concentración en este hechizo durante la duración completa, el hechizo dura hasta que sea disipado.",
            "Una criatura no dispuesta puede hacer una tirada de salvación de Sabiduría, y si tiene éxito, no es afectada por este hechizo.",
            "Criatura en Criatura. Si conviertes una criatura en otro tipo de criatura, la nueva forma puede ser cualquier tipo que elijas que tenga una Clase de Desafío igual o menor a la Clase de Desafío o nivel del objetivo. Las estadísticas de juego del objetivo son reemplazadas por el bloque de estadísticas de la nueva forma, pero retiene sus Puntos de Golpe, Dados de Golpe, alineamiento y personalidad.",
            "El objetivo gana un número de Puntos de Golpe Temporales igual a los Puntos de Golpe de la nueva forma. Estos Puntos de Golpe Temporales se desvanecen si quedan cuando el hechizo termina.",
            "El objetivo está limitado en las acciones que puede realizar por la anatomía de su nueva forma, y no puede hablar o lanzar hechizos.",
            "El equipo del objetivo se fusiona con la nueva forma. La criatura no puede usar u obtener beneficio de ninguno de ese equipo.",
            "Objeto en Criatura. Puedes convertir un objeto en cualquier tipo de criatura, siempre que el tamaño de la criatura no sea más grande que el tamaño del objeto y la criatura tenga una Clase de Desafío de 9 o inferior. La criatura es Amigable contigo y tus aliados. En combate, toma sus turnos inmediatamente después del tuyo, y obedece tus comandos.",
            "Si el hechizo dura más de una hora, ya no controlas la criatura. Podría permanecer Amigable contigo, dependiendo de cómo la hayas tratado.",
            "Criatura en Objeto. Si conviertes una criatura en un objeto, se transforma junto con lo que esté usando y llevando en esa forma, siempre que el tamaño del objeto no sea más grande que el tamaño de la criatura. Las estadísticas de la criatura se convierten en las del objeto, y la criatura no tiene memoria del tiempo pasado en esta forma después de que el hechizo termina y regresa a la normalidad."
        ]
    },

    "Resurrección Verdadera": {
        nivel: 9,
        escuela: "Nigromancia",
        tipo: "curacion",
        tiempo: "1 hora",
        rango: "Toque",
        componentes: "V, S, M (diamantes que cuesta 25.000+ MO, que el hechizo consume)",
        duracion: "Instantáneo",
        efecto: [
            "Tocas una criatura que ha estado muerta no más de 200 años y que murió por cualquier razón excepto vejez. La criatura es revivida con todos sus Puntos de Golpe.",
            "Este hechizo cierra todas las heridas, neutraliza cualquier veneno, cura todos los contagios mágicos, y levanta cualquier maldición que afecte a la criatura cuando murió. El hechizo reemplaza órganos dañados o faltantes y extremidades. Si la criatura era No-muerta, es restaurada a su forma No-muerta.",
            "El hechizo puede proporcionar un nuevo cuerpo si el original ya no existe, en cuyo caso debes hablar el nombre de la criatura. La criatura entonces aparece en un espacio desocupado que elijas dentro de 10p de ti."
        ]
    },

    "Extraño": {
        nivel: 9,
        escuela: "Ilusión",
        tipo: "salvacion",
        tiempo: "Acción",
        rango: "120p",
        componentes: "V, S",
        duracion: "Concentración, hasta 1 minuto",
        efecto: [
            "Intentas crear terrores ilusorios en las mentes de otros. Cada criatura de tu elección en una Esfera de radio 30p centrada en un punto dentro del alcance hace una tirada de salvación de Sabiduría. Con un fallo, un objetivo recibe daño Psíquico 10d10 y tiene la condición Asustada durante la duración. Con un éxito, un objetivo recibe solo la mitad del daño.",
            "Un objetivo Asustado hace una tirada de salvación de Sabiduría al final de cada uno de sus turnos. Con un fallo, recibe daño Psíquico 5d10. Con un éxito, el hechizo termina en ese objetivo."
        ]
    },

    "Deseo": {
        nivel: 9,
        escuela: "Conjuración",
        tipo: "neutro",
        tiempo: "Acción",
        rango: "Yo mismo",
        componentes: "V",
        duracion: "Instantáneo",
        efecto: [
            "Deseo es el hechizo más poderoso que una criatura mortal puede lanzar. Simplemente hablando en voz alta, puedes alterar la realidad misma.",
            "El uso básico de este hechizo es duplicar cualquier otro hechizo de nivel 8 o inferior. Si lo usas de esta manera, no necesitas cumplir con ningún requisito para lanzar ese hechizo, incluyendo componentes costosos. El hechizo simplemente toma efecto.",
            "Alternativamente, puedes crear uno de los siguientes efectos de tu elección:",
            "Creación de Objeto. Creas un objeto de hasta 25.000 MO de valor que no es un objeto mágico. El objeto no puede ser más de 300 pies en ninguna dimensión, y aparece en un espacio desocupado en el suelo que puedas ver.",
            "Salud Instantánea. Permites que tú y hasta veinte criaturas que puedas ver recuperéis todos los Puntos de Golpe, y termines todos los efectos en ellas listados en el hechizo Restauración Mayor.",
            "Resistencia. Otorgas a hasta diez criaturas que puedas ver Resistencia a un tipo de daño que elijas. Esta Resistencia es permanente.",
            "Inmunidad a Hechizo. Otorgas inmunidad a hasta diez criaturas que puedas ver a un único hechizo u otro efecto mágico durante 8 horas.",
            "Aprendizaje Repentino. Reemplazas uno de tus talentos con otro talento para el que eres elegible. Pierdes todos los beneficios del talento antiguo y ganas los beneficios del nuevo. No puedes reemplazar un talento que es un prerrequisito para ninguno de tus otros talentos o características.",
            "Rehacer Tirada. Deshaces un evento reciente único forzando una retiradora de cualquier tirada de dado realizada en la última ronda (incluyendo tu último turno). La realidad se rehace a sí misma para acomodar el nuevo resultado. Por ejemplo, un hechizo Deseo podría deshacer una tirada salvación fallida de un aliado o un Golpe Crítico de un enemigo. Puedes forzar la retiradora a ser hecha con Ventaja o Desventaja, y eliges si usar la retiradora o la tirada original.",
            "Remodelar la Realidad. Puedes desear algo no incluido en ninguno de los otros efectos. Para hacerlo, establece tu deseo al DJ tan precisamente como sea posible. El DJ tiene gran libertad en gobernar qué ocurre en tal instancia; cuanto mayor el deseo, mayor la probabilidad de que algo salga mal. Este hechizo podría simplemente fallar, el efecto que deseas podría ser alcanzado solo en parte, o podrías sufrir una consecuencia imprevisible como resultado de cómo expresaste el deseo. Por ejemplo, desear que un villano estuviera muerto podría impulsarte hacia adelante en el tiempo a un período cuando ese villano ya no está vivo, efectivamente sacándote del juego. De manera similar, desear un objeto mágico Legendario o un Artefacto podría transportarte instantáneamente a la presencia del dueño actual del objeto. Si tu deseo es otorgado y sus efectos tienen consecuencias para toda una comunidad, región o mundo, probablemente atraigas enemigos poderosos. Si tu deseo afectaría a un dios, los siervos divinos del dios podrían intervenir instantáneamente para prevenirlo o para alentarte a que elabores el deseo de una manera particular. Si tu deseo desharía el multiverso en sí, amenazaría a la Ciudad de Sigil, o afectaría a la Dama del Dolor de ninguna manera, ves una imagen de ella en tu mente por un momento; ella sacude su cabeza, y tu deseo falla.",
            "El estrés de lanzar Deseo para producir cualquier efecto que no sea duplicar otro hechizo te debilita. Después de soportar ese estrés, cada vez que lanzas un hechizo hasta que termines un Descanso Largo, recibis daño Necrótico 1d10 por nivel de ese hechizo. Este daño no puede ser reducido o prevenido de ninguna manera. Además, tu puntuación de Fuerza se conviernte en 3 durante 2d4 días. Por cada uno de esos días que gastes descansando y no haciendo más que actividad ligera, tu tiempo de recuperación restante disminuye en 2 días. Finalmente, hay una probabilidad del 33 por ciento de que no puedas lanzar Deseo nunca más si sufres este estrés."
        ]
    }
};

/* =========================================================
   🧠 UTILIDADES
========================================================= */
function esLanzador(clase, sub){
    if(!clase) return false;

    if(clasesCompletas.includes(clase)) return true;
    if(clasesMedias.includes(clase)) return true;
    if(clasesTercio.includes(clase) && subclasesTercioValidas.includes(sub)) return true;

    if(clase === "brujo") return true;
    if(clase === "cazador_sangre" && subclasesCazadorBrujo.includes(sub)) return true;

    return false;
}

function obtenerMod(statNombre) {
    const input = document.getElementById(`stat-${statNombre}`);
    if (!input) return 0;
    const valor = parseInt(input.value) || 10;
    return Math.floor((valor - 10) / 2);
}

function obtenerCompetencia() {
    const comp = document.getElementById("competencia");
    if (!comp) return 0;
    return parseInt(comp.value.replace("+", "")) || 0;
}

function f(n) {
    return n >= 0 ? `+${n}` : n;
}

/* =========================================================
   🧠 CÁLCULOS DE CLASE
========================================================= */

function calcularNivelLanzador(){
let total=0;

[
{clase:document.getElementById("clase")?.value,nivel:parseInt(document.getElementById("nivel1")?.value)||0,sub:document.getElementById("subclase")?.value},
{clase:document.getElementById("clase2")?.value,nivel:parseInt(document.getElementById("nivel2")?.value)||0,sub:document.getElementById("subclase2")?.value}
].forEach(c=>{

if(!c.clase||!c.nivel)return;

if(clasesCompletas.includes(c.clase)) total+=c.nivel;
else if(clasesMedias.includes(c.clase)) total+=c.nivel*0.5;
else if(clasesTercio.includes(c.clase) && subclasesTercioValidas.includes(c.sub)) total+=c.nivel/3;

});

return Math.floor(total);
}

function obtenerNivelBrujoTotal(){

let totalBrujo = 0;
let totalCazador = 0;

[
{clase:document.getElementById("clase")?.value,nivel:parseInt(document.getElementById("nivel1")?.value)||0,sub:document.getElementById("subclase")?.value},
{clase:document.getElementById("clase2")?.value,nivel:parseInt(document.getElementById("nivel2")?.value)||0,sub:document.getElementById("subclase2")?.value}
].forEach(c=>{

if(!c.clase || !c.nivel) return;

if(c.clase==="brujo") totalBrujo += c.nivel;

if(c.clase==="cazador_sangre" && subclasesCazadorBrujo.includes(c.sub)){
    totalCazador += c.nivel;
}

});

return totalBrujo + Math.floor(totalCazador / 3);
}

/* =========================================================
   🧱 UI BASE
========================================================= */

const contenedor = document.createElement("div");
bloque.appendChild(contenedor);

const titulo = document.createElement("h3");
contenedor.appendChild(titulo);

const zonaEspacios = document.createElement("div");
contenedor.appendChild(zonaEspacios);

const botonAgregar = document.createElement("button");
botonAgregar.textContent = "Añadir Conjuro";
contenedor.appendChild(botonAgregar);

const listaConjuros = document.createElement("div");
contenedor.appendChild(listaConjuros);

/* =========================================================
   💾 STORAGE
========================================================= */

function guardarHechizos(){

    const datos = [];

    document.querySelectorAll(".conjuro-card").forEach(card => {

        const nivel = card.querySelector(".selectNivel")?.value;
        const nombre = card.querySelector(".selectNombre")?.value;
        const stat = card.querySelector(".statSelectInterno")?.value;

        if(!nombre) return;

        datos.push({ nivel, nombre, stat });

    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(datos));
}

function cargarHechizos(){

    const data = localStorage.getItem(STORAGE_KEY);
    if(!data) return;

    try{
        JSON.parse(data).forEach(d => crearConjuro(d));
    }catch(e){
        console.error(e);
    }
}

/* =========================================================
   ⚡ AUTO GUARDADO GLOBAL
========================================================= */

document.addEventListener("input", guardarHechizos);
document.addEventListener("change", guardarHechizos);

/* =========================================================
   📊 ESPACIOS
========================================================= */
function tipoLanzador(clase, sub){
    if(clase === "brujo") return "pacto";
    if(clase === "cazador_sangre" && subclasesCazadorBrujo.includes(sub)) return "pacto";

    if(clasesCompletas.includes(clase)) return "normal";
    if(clasesMedias.includes(clase)) return "normal";
    if(clasesTercio.includes(clase) && subclasesTercioValidas.includes(sub)) return "normal";

    return null;
}

function actualizarEspacios(){

    const clase1 = document.getElementById("clase")?.value;
    const nivel1 = parseInt(document.getElementById("nivel1")?.value) || 0;
    const sub1 = document.getElementById("subclase")?.value;

    const clase2 = document.getElementById("clase2")?.value;
    const nivel2 = parseInt(document.getElementById("nivel2")?.value) || 0;
    const sub2 = document.getElementById("subclase2")?.value;

    const hayBrujo =
        (clase1 === "brujo" && nivel1 > 0) ||
        (clase2 === "brujo" && nivel2 > 0);

    const hayCazadorProfano =
        (clase1 === "cazador_sangre" && subclasesCazadorBrujo.includes(sub1)) ||
        (clase2 === "cazador_sangre" && subclasesCazadorBrujo.includes(sub2));

    const multiclass = hayMulticlase();

    titulo.textContent = "Conjuros";
    zonaEspacios.innerHTML = "";

    const tipo1 = tipoLanzador(clase1, sub1);
    const tipo2 = tipoLanzador(clase2, sub2);

    const tieneCaster1 = tipo1 !== null;
    const tieneCaster2 = tipo2 !== null;

    // 🛑 SI NO HAY CASTERS → NO HACEMOS NADA
    if(!tieneCaster1 && !tieneCaster2){
        return;
    }

    // =====================================================
    // 🟦 MULTICLASE NORMAL (ambos usan sistema normal)
    // =====================================================

    if(tipo1 === "normal" && tipo2 === "normal"){

        const nivel = calcularNivelLanzador();

        if(nivel > 0 && tablaEspacios[nivel]){

            const bloque = document.createElement("div");
            bloque.innerHTML = "<h3>Espacios</h3>";

            tablaEspacios[nivel].forEach((c,i)=>{
                const fila = document.createElement("div");
                fila.textContent = `Nivel ${i+1}: `;

                for(let x=0;x<c;x++){
                    const check = document.createElement("input");
                    check.type="checkbox";
                    fila.appendChild(check);
                }

                bloque.appendChild(fila);
            });

            zonaEspacios.appendChild(bloque);
        }
    }

    // =====================================================
    // 🟪 PACTO GLOBAL (brujo + cazador)
    // =====================================================

// =====================================================
// 🟪 PACTO GLOBAL (prioridad máxima)
// =====================================================

    const hayBrujoReal = hayBrujo;
    const hayCazadorConBrujo =
        hayCazadorProfano &&
        (
            (clase1 === "brujo") ||
            (clase2 === "brujo")
        );

    if(hayBrujoReal || hayCazadorConBrujo){

        const nivelBrujoTotal = obtenerNivelBrujoTotal();

        if(nivelBrujoTotal > 0 && tablaBrujo[nivelBrujoTotal]){

            const data = tablaBrujo[nivelBrujoTotal];

            const bloque = document.createElement("div");
            bloque.innerHTML = "<h3>Pacto</h3>";

            const fila = document.createElement("div");
            fila.textContent = `Nivel ${data.nivel}: `;

            for(let i=0;i<data.espacios;i++){
                const check = document.createElement("input");
                check.type="checkbox";
                fila.appendChild(check);
            }

            bloque.appendChild(fila);
            zonaEspacios.appendChild(bloque);
        }
    }

    // =====================================================
    // 🟩 RENDER INDIVIDUAL (si NO es multiclass normal)
    // =====================================================

    if(!(tipo1 === "normal" && tipo2 === "normal")){

        const clases = [
            {clase: clase1, nivel: nivel1, sub: sub1, tipo: tipo1},
            {clase: clase2, nivel: nivel2, sub: sub2, tipo: tipo2}
        ];

        clases.forEach(c => {

            if(!c.clase || !c.nivel) return;
            if(!c.tipo) return;

            // 🔵 CLASE NORMAL
            if(c.tipo === "normal"){

                let tabla = null;

                if(clasesCompletas.includes(c.clase)){
                    tabla = tablaEspacios[c.nivel];
                }
                else if(clasesMedias.includes(c.clase)){
                    tabla = tablaMediaHomebrew[c.nivel];
                }
                else if(
                    clasesTercio.includes(c.clase) &&
                    subclasesTercioValidas.includes(c.sub)
                ){
                    tabla = tablaTercioHomebrew[c.nivel];
                }

                if(!tabla) return;

                const bloque = document.createElement("div");
                bloque.innerHTML = "<h3>Espacios</h3>";

                tabla.forEach((cant,i)=>{
                    if(cant <= 0) return;

                    const fila = document.createElement("div");
                    fila.textContent = `Nivel ${i+1}: `;

                    for(let x=0;x<cant;x++){
                        const check = document.createElement("input");
                        check.type="checkbox";
                        fila.appendChild(check);
                    }

                    bloque.appendChild(fila);
                });

                zonaEspacios.appendChild(bloque);
            }

            // 🟣 CAZADOR (si no entra en pacto global)
            if(
                c.clase === "cazador_sangre" &&
                subclasesCazadorBrujo.includes(c.sub) &&
                tablaCazadorBrujo[c.nivel] &&
                !hayBrujo &&          // ❗ si hay brujo → NO renderizar
                !hayBrujo         // ❗ si hay multiclass → usa global
            ){

                const data = tablaCazadorBrujo[c.nivel];

                const bloque = document.createElement("div");
                bloque.innerHTML = "<h3>Pacto</h3>";

                const fila = document.createElement("div");
                fila.textContent = `Nivel ${data.nivel}: `;

                for(let i=0;i<data.espacios;i++){
                    const check = document.createElement("input");
                    check.type="checkbox";
                    fila.appendChild(check);
                }

                bloque.appendChild(fila);
                zonaEspacios.appendChild(bloque);
            }

        });
    }
}

function crearConjuro(data = {}){

/* =========================================================
   🧱 WRAPPER
========================================================= */

const wrapper = document.createElement("div");
wrapper.className = "conjuro-card";

/* =========================================================
   🔼 HEADER
========================================================= */

const header = document.createElement("div");
header.className = "conjuro-header";

/* =========================================================
   🔽 TOGGLE
========================================================= */

const toggle = document.createElement("button");
toggle.textContent = "▼";
toggle.type = "button";

/* =========================================================
   ❌ ELIMINAR
========================================================= */

const eliminar = document.createElement("button");
eliminar.textContent = "✕";
eliminar.type = "button";

eliminar.onclick = () => {
    wrapper.remove();
    guardarHechizos();
};

/* =========================================================
   📊 SELECT NIVEL
========================================================= */

const selectNivel = document.createElement("select");
selectNivel.classList.add("selectNivel");

for(let i=0;i<=9;i++){
    const o = document.createElement("option");
    o.value = i;
    o.textContent = i === 0 ? "Truco" : `Nivel ${i}`;
    selectNivel.appendChild(o);
}

/* =========================================================
   📜 SELECT NOMBRE
========================================================= */

const selectNombre = document.createElement("select");
selectNombre.classList.add("selectNombre");

/* =========================================================
   📦 BODY
========================================================= */

const body = document.createElement("div");
body.style.display = "none";

/* =========================================================
   📄 DESCRIPCIÓN
========================================================= */

const descripcion = document.createElement("div");

/* =========================================================
   🔄 ACTUALIZAR LISTA
========================================================= */

function actualizarLista(){

    const nivel = parseInt(selectNivel.value);
    selectNombre.innerHTML = "";

    const base = document.createElement("option");
    base.value = "";
    base.textContent = nivel === 0 ? "Truco" : "Conjuro";
    selectNombre.appendChild(base);

    Object.entries(baseConjuros)
        .filter(([_, d]) => d.nivel === nivel)
        .forEach(([nombre]) => {

            const o = document.createElement("option");
            o.value = nombre;
            o.textContent = nombre;
            selectNombre.appendChild(o);

        });
}

/* =========================================================
   🧠 ACTUALIZAR DESCRIPCIÓN (SIN BUGS)
========================================================= */

function actualizarDescripcion(){

    const nombre = selectNombre.value;
    const hechizo = baseConjuros[nombre];

    if(!hechizo){
        descripcion.innerHTML = "";
        return;
    }

    const statActual =
        descripcion.querySelector(".statSelectInterno")?.value
        || data.stat
        || "Inteligencia";

    const mod = obtenerMod(statActual);
    const comp = obtenerCompetencia();

    let extra = "";

    if(hechizo.tipo === "ataque"){
        extra = `<span>Ataque: <strong>${f(mod + comp)}</strong></span>`;
    }

    if(hechizo.tipo === "salvacion"){
        const cd = 8 + mod + comp;
        extra = `<span>CD ${cd}</span>`;
    }

    const efectoHTML = hechizo.efecto
        ? hechizo.efecto.map(e => `<p>${e}</p>`).join("")
        : "";

    const escaladoHTML = hechizo.escalado
        ? `<p><em>${hechizo.escalado.efecto}</em></p>`
        : "";

    descripcion.innerHTML = `
        <div class="fila-lineal ataque-detalle">

            <strong>${nombre}</strong>

            <span>${hechizo.rango}</span>
            <span>${hechizo.componentes}</span>
            <span>${hechizo.duracion}</span>

            <select class="statSelectInterno">
                <option value="Inteligencia">Inteligencia</option>
                <option value="Sabiduria">Sabiduría</option>
                <option value="Carisma">Carisma</option>
            </select>

            ${extra}

        </div>

        <div class="descripcionHechizo">
            <p><strong>Escuela:</strong> ${hechizo.escuela}</p>
            <p><strong>Tiempo:</strong> ${hechizo.tiempo}</p>
            ${efectoHTML}
            ${escaladoHTML}
        </div>
    `;

    const statSelect = descripcion.querySelector(".statSelectInterno");
    statSelect.value = statActual;

    statSelect.addEventListener("change", () => {
        actualizarDescripcion();
        guardarHechizos();
    });
}

/* =========================================================
   🎮 EVENTOS
========================================================= */

selectNivel.addEventListener("change", () => {
    actualizarLista();
    selectNombre.value = "";
    descripcion.innerHTML = "";
    guardarHechizos();
});

selectNombre.addEventListener("change", () => {
    actualizarDescripcion();
    guardarHechizos();
});

toggle.onclick = () => {
    const abierto = body.style.display === "block";
    body.style.display = abierto ? "none" : "block";
    toggle.textContent = abierto ? "▼" : "▲";
};

/* =========================================================
   🧠 RESTAURACIÓN (CLAVE)
========================================================= */

if(data.nivel !== undefined){
    selectNivel.value = data.nivel;
}

actualizarLista();

if(data.nombre){
    selectNombre.value = data.nombre;
    actualizarDescripcion();
}

/* =========================================================
   🧱 MONTAJE
========================================================= */

body.appendChild(selectNivel);
body.appendChild(selectNombre);
body.appendChild(descripcion);

header.appendChild(selectNivel);
header.appendChild(selectNombre);
header.appendChild(toggle);
header.appendChild(eliminar);

wrapper.appendChild(header);
wrapper.appendChild(body);

listaConjuros.appendChild(wrapper);
}

//BOTÓN//

botonAgregar.onclick = () => {
    crearConjuro();
    guardarHechizos();
};

[
"clase","nivel1","subclase",
"clase2","nivel2","subclase2"
].forEach(id=>{
    const el = document.getElementById(id);
    if(el){
        el.addEventListener("change", actualizarEspacios);
    }
});

function hayMulticlase(){
    const clase2 = document.getElementById("clase2")?.value;
    const nivel2 = parseInt(document.getElementById("nivel2")?.value) || 0;
    return clase2 && nivel2 > 0;
}

function actualizarTodosLosConjuros(){
    document.querySelectorAll(".conjuro-card").forEach(card=>{
        const select = card.querySelector(".selectNombre");
        if(select){
            select.dispatchEvent(new Event("change"));
        }
    });
}

document.addEventListener("input", actualizarTodosLosConjuros);
document.addEventListener("change", actualizarTodosLosConjuros);

//INIT//

actualizarEspacios();
cargarHechizos();

});