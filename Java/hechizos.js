document.addEventListener("DOMContentLoaded", () => {

const bloque = document.getElementById("bloquehechizos");
if (!bloque) return;

const clasesCompletas = ["bardo","clerigo","druida","hechicero","mago","psionico"];
const clasesMedias = ["artificiero","paladin","explorador"];
const clasesTercio = ["luchador","picaro"];
const clasesBrujo = ["brujo"];

const subclasesTercioValidas = ["asesino"];
const subclasesCazadorBrujo = ["orden_del_profano"];

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

const baseConjuros = [

{nombre:"Guardia de Cuchillas",nivel:0,tipo:"buff",escuela:"Abjuración",tiempo:"1 acción",rango:"Personal",componentes:"V,S",duracion:"Concentración 1 min",descripcion:"Cuando una criatura te ataque, resta 1d4 a su tirada de ataque.",superior:"—"},

{nombre:"Toque Helado",nivel:0,tipo:"ataque",escuela:"Nigromancia",tiempo:"1 acción",rango:"Toque",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque cuerpo a cuerpo. 1d10 necrótico y el objetivo no puede recuperar PG hasta el final de su siguiente turno.",superior:"Nivel 5:2d10, 11:3d10, 17:4d10."},

{nombre:"Luces Danzantes",nivel:0,tipo:"utilidad",escuela:"Ilusión",tiempo:"1 acción",rango:"36m",componentes:"V,S,M",duracion:"Concentración 1 min",descripcion:"Creas hasta cuatro luces flotantes que iluminan 3m. Puedes moverlas 18m como acción adicional.",superior:"—"},

{nombre:"Artesanía Druídica",nivel:0,tipo:"utilidad",escuela:"Transmutación",tiempo:"1 acción",rango:"9m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Creas pequeños efectos naturales: predecir clima, hacer florecer plantas, efectos sensoriales o encender/apagar fuego.",superior:"—"},

{nombre:"Explosión Sobrenatural",nivel:0,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"36m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque a distancia que inflige 1d10 de fuerza.",superior:"Nivel 5:2 rayos, 11:3 rayos, 17:4 rayos."},

{nombre:"Elementalismo",nivel:0,tipo:"utilidad",escuela:"Transmutación",tiempo:"1 acción",rango:"9m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Pequeños efectos elementales: crear brisa, polvo, brasas, niebla, agua o moldear un elemento pequeño.",superior:"—"},

{nombre:"Rayo de Fuego",nivel:0,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"36m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque a distancia que inflige 1d10 fuego. Puede prender objetos inflamables.",superior:"Nivel 5:2d10, 11:3d10, 17:4d10."},

{nombre:"Amigos",nivel:0,tipo:"salvacion",escuela:"Encantamiento",tiempo:"1 acción",rango:"3m",componentes:"S,M",duracion:"Concentración 1 min",descripcion:"Una criatura hace TS Sabiduría o queda Encantada mientras dure el conjuro. Al terminar sabe que fue encantada.",superior:"—"},

{nombre:"Orientación",nivel:0,tipo:"buff",escuela:"Adivinación",tiempo:"1 acción",rango:"Toque",componentes:"V,S",duracion:"Concentración 1 min",descripcion:"Una criatura añade 1d4 a pruebas de una habilidad elegida.",superior:"—"},

{nombre:"Mano de Mago",nivel:0,tipo:"utilidad",escuela:"Conjuración",tiempo:"1 acción",rango:"9m",componentes:"V,S",duracion:"1 min",descripcion:"Mano espectral que manipula objetos a distancia. No puede atacar ni cargar más de 4.5 kg.",superior:"—"},

{nombre:"Reparar",nivel:0,tipo:"utilidad",escuela:"Transmutación",tiempo:"1 min",rango:"Toque",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Repara una rotura de hasta 30 cm en un objeto.",superior:"—"},

{nombre:"Mensaje",nivel:0,tipo:"utilidad",escuela:"Transmutación",tiempo:"1 acción",rango:"36m",componentes:"S,M",duracion:"1 ronda",descripcion:"Susurras un mensaje a una criatura que puede responderte en voz baja.",superior:"—"},

{nombre:"Astilla Mental",nivel:0,tipo:"salvacion",escuela:"Encantamiento",tiempo:"1 acción",rango:"18m",componentes:"V",duracion:"1 ronda",descripcion:"Una criatura hace TS Inteligencia o recibe 1d6 psíquico y resta 1d4 a su próxima TS.",superior:"Nivel 5:2d6, 11:3d6, 17:4d6."},

{nombre:"Ilusión Menor",nivel:0,tipo:"utilidad",escuela:"Ilusión",tiempo:"1 acción",rango:"9m",componentes:"S,M",duracion:"1 min",descripcion:"Creas un sonido o imagen estática pequeña (máx. cubo de 1.5m).",superior:"—"},

{nombre:"Rocío Venenoso",nivel:0,tipo:"ataque",escuela:"Nigromancia",tiempo:"1 acción",rango:"9m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque a distancia que inflige 1d12 veneno.",superior:"Nivel 5:2d12, 11:3d12, 17:4d12."},

{nombre:"Prestidigitación",nivel:0,tipo:"utilidad",escuela:"Transmutación",tiempo:"1 acción",rango:"3m",componentes:"V,S",duracion:"1 hora",descripcion:"Pequeños trucos mágicos: chispas, limpiar objetos, crear marcas o efectos sensoriales.",superior:"—"},

{nombre:"Producir Llama",nivel:0,tipo:"ataque",escuela:"Conjuración",tiempo:"Acción adicional",rango:"Personal",componentes:"V,S",duracion:"10 min",descripcion:"Creas una llama en la mano que ilumina y puede lanzarse para infligir 1d8 fuego.",superior:"Nivel 5:2d8, 11:3d8, 17:4d8."},

{nombre:"Rayo de Escarcha",nivel:0,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"18m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque a distancia que inflige 1d8 frío y reduce la velocidad 3m hasta tu siguiente turno.",superior:"Nivel 5:2d8, 11:3d8, 17:4d8."},

{nombre:"Resistencia",nivel:0,tipo:"buff",escuela:"Abjuración",tiempo:"1 acción",rango:"Toque",componentes:"V,S",duracion:"Concentración 1 min",descripcion:"Una criatura reduce en 1d4 el daño recibido de un tipo elegido.",superior:"—"},

{nombre:"Llama Sagrada",nivel:0,tipo:"salvacion",escuela:"Evocación",tiempo:"1 acción",rango:"18m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Una criatura hace TS Destreza o recibe 1d8 radiante. Ignora cobertura parcial.",superior:"Nivel 5:2d8, 11:3d8, 17:4d8."},

{nombre:"Shillelagh",nivel:0,tipo:"buff",escuela:"Transmutación",tiempo:"Acción adicional",rango:"Personal",componentes:"V,S,M",duracion:"1 min",descripcion:"Un bastón o garrote usa tu característica de conjuro y causa 1d8 daño.",superior:"Nivel 5:d10, 11:d12, 17:2d6."},

{nombre:"Agarre Impactante",nivel:0,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"Toque",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque cuerpo a cuerpo que inflige 1d8 relámpago e impide ataques de oportunidad.",superior:"Nivel 5:2d8, 11:3d8, 17:4d8."},

{nombre:"Explosión Hechicera",nivel:0,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"36m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque a distancia que inflige 1d8 del tipo elegido.",superior:"Nivel 5:2d8, 11:3d8, 17:4d8."},

{nombre:"Auxilio a los Moribundos",nivel:0,tipo:"utilidad",escuela:"Nigromancia",tiempo:"1 acción",rango:"4.5m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Una criatura con 0 PG se vuelve estable.",superior:"Nivel 5:9m, 11:18m, 17:36m."},

{nombre:"Taumaturgia",nivel:0,tipo:"utilidad",escuela:"Transmutación",tiempo:"1 acción",rango:"9m",componentes:"V",duracion:"1 min",descripcion:"Pequeños efectos divinos: voz amplificada, abrir puertas, sonidos, temblores o cambiar ojos.",superior:"—"},

{nombre:"Rastro Estrellado",nivel:0,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"18m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque a distancia que inflige 1d8 radiante. Hasta el final de tu siguiente turno el objetivo emite luz tenue en un radio de 3m y no puede beneficiarse de la condición Invisible.",superior:"Nivel 5:2d8, 11:3d8, 17:4d8."},

{nombre:"Látigo de Espinas",nivel:0,tipo:"ataque",escuela:"Transmutación",tiempo:"1 acción",rango:"9m",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Ataque que inflige 1d6 perforante y, si el objetivo es Grande o más pequeño, lo atrae hasta 3m hacia ti.",superior:"Nivel 5:2d6, 11:3d6, 17:4d6."},

{nombre:"Trueno",nivel:0,tipo:"salvacion",escuela:"Evocación",tiempo:"1 acción",rango:"Personal",componentes:"S",duracion:"Instantáneo",descripcion:"Las criaturas a 1.5m de ti hacen una TS de Constitución o reciben 1d6 de daño de trueno. El estruendo puede oírse hasta a 30m.",superior:"Nivel 5:2d6, 11:3d6, 17:4d6."},

{nombre:"Llamar a los Muertos",nivel:0,tipo:"salvacion",escuela:"Nigromancia",tiempo:"1 acción",rango:"18m",componentes:"V,S",duracion:"Instantáneo",descripcion:"TS de Sabiduría o el objetivo recibe 1d8 necrótico, o 1d12 si le faltan puntos de vida.",superior:"Nivel 5:2 dados, 11:3 dados, 17:4 dados."},

{nombre:"Golpe Verdadero",nivel:0,tipo:"ataque",escuela:"Adivinación",tiempo:"1 acción",rango:"Personal",componentes:"S,M",duracion:"Instantáneo",descripcion:"Realizas un ataque con el arma usada para lanzar el truco. El ataque y el daño usan tu característica de lanzamiento de conjuros en lugar de Fuerza o Destreza. El daño puede ser radiante o el tipo normal del arma.",superior:"Nivel 5:+1d6, 11:+2d6, 17:+3d6."},

{nombre:"Burla Viciosa",nivel:0,tipo:"salvacion",escuela:"Encantamiento",tiempo:"1 acción",rango:"18m",componentes:"V",duracion:"Instantáneo",descripcion:"TS de Sabiduría o el objetivo recibe 1d6 psíquico y tiene desventaja en la siguiente tirada de ataque que haga antes del final de su siguiente turno.",superior:"Nivel 5:2d6, 11:3d6, 17:4d6."},

{nombre:"Palabra de Resplandor",nivel:0,tipo:"salvacion",escuela:"Evocación",tiempo:"1 acción",rango:"Personal",componentes:"V,M",duracion:"Instantáneo",descripcion:"Las criaturas de tu elección que puedas ver a 1.5m hacen una TS de Constitución o reciben 1d6 radiante.",superior:"Nivel 5:2d6, 11:3d6, 17:4d6."},

{nombre:"Alarma",nivel:1,escuela:"Abjuración",tiempo:"1 minuto o ritual",rango:"30 pies",componentes:"V,S,M",duracion:"8 horas",descripcion:"Creas una alarma en una puerta, ventana o área de hasta 20 pies. Cuando una criatura entra o toca el área protegida recibes una alerta. Puede ser sonora (campana durante 10 segundos en 60 pies) o mental si estás a menos de 1 milla. Puedes designar criaturas que no la activen."},

{nombre:"Amistad animal",nivel:1,escuela:"Encantamiento",tiempo:"1 acción",rango:"30 pies",componentes:"V,S,M",duracion:"24 horas",descripcion:"Una bestia que puedas ver debe superar TS de Sabiduría o queda Encantada durante la duración. Si tú o tus aliados le hacéis daño el efecto termina.",superior:"Puedes afectar una bestia adicional por cada nivel de conjuro superior a 1."},

{nombre:"Armadura de Agathys",nivel:1,escuela:"Abjuración",tiempo:"1 acción bonus",rango:"Personal",componentes:"V,S,M",duracion:"1 hora",descripcion:"Obtienes 5 puntos de golpe temporales. Si una criatura te golpea con un ataque cuerpo a cuerpo mientras los tengas, recibe 5 de daño frío. El conjuro termina si pierdes esos puntos.",superior:"Los PG temporales y el daño aumentan en 5 por cada nivel superior a 1."},

{nombre:"Armas de Hadar",nivel:1,escuela:"Conjuración",tiempo:"1 acción",rango:"Personal",componentes:"V,S",duracion:"Instantáneo",descripcion:"Tentáculos surgen de ti. Criaturas en 10 pies hacen TS Fuerza. Fallo: 2d6 necrótico y no pueden usar reacciones hasta su siguiente turno. Éxito: mitad de daño.",superior:"El daño aumenta en 1d6 por nivel superior a 1."},

{nombre:"Perdición",nivel:1,escuela:"Encantamiento",tiempo:"1 acción",rango:"30 pies",componentes:"V,S,M",duracion:"Concentración, 1 minuto",descripcion:"Hasta tres criaturas deben superar TS Carisma. Mientras dure, restan 1d4 a tiradas de ataque y TS.",superior:"Afecta a una criatura adicional por nivel superior a 1."},

{nombre:"Bendición",nivel:1,escuela:"Encantamiento",tiempo:"1 acción",rango:"30 pies",componentes:"V,S,M",duracion:"Concentración, 1 minuto",descripcion:"Hasta tres criaturas añaden 1d4 a tiradas de ataque y TS mientras dure el conjuro.",superior:"Afecta a una criatura adicional por nivel superior a 1."},

{nombre:"Manos Ardientes",nivel:1,escuela:"Evocación",tiempo:"1 acción",rango:"Personal",componentes:"V,S",duracion:"Instantáneo",descripcion:"Un cono de fuego de 15 pies. Criaturas hacen TS Destreza o reciben 3d6 fuego, mitad en éxito. Objetos inflamables sin portar se encienden.",superior:"El daño aumenta en 1d6 por nivel superior a 1."},

{nombre:"Persona Encantadora",nivel:1,escuela:"Encantamiento",tiempo:"1 acción",rango:"30 pies",componentes:"V,S",duracion:"1 hora",descripcion:"Un humanoide hace TS Sabiduría con ventaja si está en combate contigo. Fallo: queda Encantado y te considera amistoso hasta que termine el conjuro o le dañéis.",superior:"Puedes afectar una criatura adicional por nivel superior a 1."},

{nombre:"Orbe Cromático",nivel:1,escuela:"Evocación",tiempo:"1 acción",rango:"90 pies",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Ataque de conjuro a distancia que causa 3d8 de ácido, frío, fuego, rayo, veneno o trueno. Si dos dados muestran el mismo número, el orbe salta a otro objetivo a 30 pies." ,superior:"El daño aumenta en 1d8 por nivel superior a 1."},

{nombre:"Color Spray",nivel:1,escuela:"Ilusión",tiempo:"1 acción",rango:"Personal",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Un cono de luces de 15 pies. Criaturas hacen TS Constitución o quedan Cegadas hasta el final de tu siguiente turno."},

{nombre:"Comando",nivel:1,escuela:"Encantamiento",tiempo:"1 acción",rango:"60 pies",componentes:"V",duracion:"Instantáneo",descripcion:"Una criatura hace TS Sabiduría o sigue un comando de una palabra en su próximo turno (acercarse, soltar, huir, tumbarse o detenerse).",superior:"Afecta a una criatura adicional por nivel superior a 1."},

{nombre:"Duelo Obligado",nivel:1,escuela:"Encantamiento",tiempo:"1 acción bonus",rango:"30 pies",componentes:"V",duracion:"Concentración, 1 minuto",descripcion:"Una criatura hace TS Sabiduría. Fallo: tiene desventaja al atacar a otros y no puede alejarse más de 30 pies de ti voluntariamente."},

{nombre:"Comprender Idiomas",nivel:1,escuela:"Adivinación",tiempo:"1 acción o ritual",rango:"Personal",componentes:"V,S,M",duracion:"1 hora",descripcion:"Comprendes el significado literal de cualquier idioma hablado o escrito que veas. Leer una página tarda aproximadamente 1 minuto."},

{nombre:"Crear o Destruir Agua",nivel:1,escuela:"Transmutación",tiempo:"1 acción",rango:"30 pies",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Creas hasta 10 galones de agua en un recipiente o lluvia en un cubo de 30 pies que apaga llamas, o destruyes esa cantidad de agua.",superior:"Creas o destruyes 10 galones adicionales por nivel superior a 1."},

{nombre:"Curar Heridas",nivel:1,escuela:"Abjuración",tiempo:"1 acción",rango:"Toque",componentes:"V,S",duracion:"Instantáneo",descripcion:"Una criatura que tocas recupera 2d8 + tu modificador de característica de conjuro.",superior:"La curación aumenta en 2d8 por nivel superior a 1."},

{nombre:"Detectar el Bien y el Mal",nivel:1,escuela:"Adivinación",tiempo:"1 acción",rango:"Personal",componentes:"V,S",duracion:"Concentración, 10 minutos",descripcion:"Detectas aberraciones, celestiales, elementales, fey, demonios y no muertos a 30 pies, así como la presencia del conjuro Santificar."},

{nombre:"Detectar Magia",nivel:1,escuela:"Adivinación",tiempo:"1 acción o ritual",rango:"Personal",componentes:"V,S",duracion:"Concentración, 10 minutos",descripcion:"Sientes la presencia de magia a 30 pies y puedes ver auras mágicas alrededor de criaturas u objetos."},

{nombre:"Detectar Veneno y Enfermedad",nivel:1,escuela:"Adivinación",tiempo:"1 acción o ritual",rango:"Personal",componentes:"V,S,M",duracion:"Concentración, 10 minutos",descripcion:"Detectas venenos, criaturas venenosas o enfermedades a 30 pies y conoces su tipo."},

{nombre:"Disfrazarse",nivel:1,escuela:"Ilusión",tiempo:"1 acción",rango:"Personal",componentes:"V,S",duracion:"1 hora",descripcion:"Cambias tu apariencia, ropa y equipo. La ilusión no resiste inspección física y puede descubrirse con una prueba de Investigación contra tu CD de conjuro."},

{nombre:"Susurros Disonantes",nivel:1,escuela:"Encantamiento",tiempo:"1 acción",rango:"60 pies",componentes:"V",duracion:"Instantáneo",descripcion:"Una criatura hace TS Sabiduría o recibe 3d6 psíquico y usa su reacción para huir lo más lejos posible de ti.",superior:"El daño aumenta en 1d6 por nivel superior a 1."},

{nombre:"Favor Divino",nivel:1,escuela:"Transmutación",tiempo:"1 acción bonus",rango:"Personal",componentes:"V,S",duracion:"1 minuto",descripcion:"Tus ataques con armas infligen 1d4 radiante adicional durante la duración."},

{nombre:"Castigo Divino",nivel:1,tipo:"ataque",escuela:"Evocación",tiempo:"Acción adicional",rango:"Personal",componentes:"V",duracion:"Instantáneo",descripcion:"Tras golpear con un ataque cuerpo a cuerpo o desarmado, el objetivo recibe 2d8 de daño radiante adicional. Si es infernal o no muerto, el daño aumenta en 1d8.",superior:"+1d8 por cada nivel de espacio de conjuro superior."},

{nombre:"Golpe Enredador",nivel:1,tipo:"salvacion",escuela:"Conjuración",tiempo:"Acción adicional",rango:"Personal",componentes:"V",duracion:"Concentración, 1 minuto",descripcion:"Tras golpear con un arma, surgen lianas que obligan al objetivo a hacer TS de Fuerza. Si falla queda Restringido. Mientras lo esté recibe 1d6 perforante al inicio de cada turno. Puede intentar liberarse con Atletismo.",superior:"+1d6 de daño por nivel de espacio superior."},

{nombre:"Enredar",nivel:1,tipo:"salvacion",escuela:"Conjuración",tiempo:"1 acción",rango:"27m",componentes:"V,S",duracion:"Concentración, 1 minuto",descripcion:"Plantas brotan en un área de 6m convirtiendo el terreno en difícil. Las criaturas dentro deben hacer TS de Fuerza o quedan Restringidas hasta que el conjuro termine."},

{nombre:"Retirada Expeditiva",nivel:1,tipo:"utilidad",escuela:"Transmutación",tiempo:"Acción adicional",rango:"Personal",componentes:"V,S",duracion:"Concentración, 10 minutos",descripcion:"Realizas inmediatamente la acción Correr y mientras dure el conjuro puedes usar Correr como acción adicional."},

{nombre:"Fuego Feérico",nivel:1,tipo:"salvacion",escuela:"Evocación",tiempo:"1 acción",rango:"18m",componentes:"V",duracion:"Concentración, 1 minuto",descripcion:"Criaturas en un cubo de 6m deben hacer TS de Destreza o quedan iluminadas. No pueden beneficiarse de invisibilidad y los ataques contra ellas tienen ventaja."},

{nombre:"Vida Falsa",nivel:1,tipo:"defensa",escuela:"Nigromancia",tiempo:"1 acción",rango:"Personal",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Obtienes 2d4+4 puntos de golpe temporales.",superior:"+5 PG temporales por nivel de espacio superior."},

{nombre:"Caída de Pluma",nivel:1,tipo:"reaccion",escuela:"Transmutación",tiempo:"Reacción",rango:"18m",componentes:"V,M",duracion:"1 minuto",descripcion:"Hasta 5 criaturas que caen reducen su velocidad de descenso a 18m por ronda y no reciben daño de caída si aterrizan antes de terminar el conjuro."},

{nombre:"Encontrar Familiar",nivel:1,tipo:"invocacion",escuela:"Conjuración",tiempo:"1 hora o ritual",rango:"3m",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Invocas un espíritu que adopta forma animal (gato, búho, rata, etc). Obedece tus órdenes y puedes comunicarte telepáticamente con él a 30m."},

{nombre:"Nube de Niebla",nivel:1,tipo:"control",escuela:"Conjuración",tiempo:"1 acción",rango:"36m",componentes:"V,S",duracion:"Concentración, 1 hora",descripcion:"Creas una esfera de niebla de 6m de radio que está fuertemente oscurecida.",superior:"El radio aumenta 6m por nivel de espacio superior."},

{nombre:"Buenas Bayas",nivel:1,tipo:"curacion",escuela:"Conjuración",tiempo:"1 acción",rango:"Personal",componentes:"V,S,M",duracion:"24 horas",descripcion:"Creas 10 bayas mágicas. Cada una cura 1 punto de golpe y alimenta a una criatura durante un día."},

{nombre:"Grasa",nivel:1,tipo:"control",escuela:"Conjuración",tiempo:"1 acción",rango:"18m",componentes:"V,S,M",duracion:"1 minuto",descripcion:"Un área de 3m se cubre de grasa convirtiéndose en terreno difícil. Las criaturas deben hacer TS de Destreza o quedan derribadas."},

{nombre:"Proyectil Guiado",nivel:1,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"36m",componentes:"V,S",duracion:"1 asalto",descripcion:"Realizas un ataque de conjuro a distancia. Si impacta inflige 4d6 radiante y el siguiente ataque contra el objetivo tiene ventaja.",superior:"+1d6 de daño por nivel superior."},

{nombre:"Lluvia de Espinas",nivel:1,tipo:"salvacion",escuela:"Conjuración",tiempo:"Acción adicional",rango:"Personal",componentes:"V",duracion:"Instantáneo",descripcion:"Tras golpear con un arma a distancia, el objetivo y criaturas cercanas hacen TS de Destreza o reciben 1d10 perforante.",superior:"+1d10 por nivel superior."},

{nombre:"Palabra Curativa",nivel:1,tipo:"curacion",escuela:"Abjuración",tiempo:"Acción adicional",rango:"18m",componentes:"V",duracion:"Instantáneo",descripcion:"Una criatura recupera 2d4 + tu modificador de conjuro.",superior:"+2d4 por nivel superior."},

{nombre:"Reprensión Infernal",nivel:1,tipo:"reaccion",escuela:"Evocación",tiempo:"Reacción",rango:"18m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Una criatura que te daña hace TS de Destreza o recibe 2d10 fuego.",superior:"+1d10 por nivel superior."},

{nombre:"Heroísmo",nivel:1,tipo:"buff",escuela:"Encantamiento",tiempo:"1 acción",rango:"Toque",componentes:"V,S",duracion:"Concentración, 1 minuto",descripcion:"Una criatura es inmune al miedo y gana puntos de golpe temporales iguales a tu modificador de conjuro cada turno.",superior:"Afecta a una criatura adicional por nivel superior."},

{nombre:"Maldición (Hex)",nivel:1,tipo:"debuff",escuela:"Encantamiento",tiempo:"Acción adicional",rango:"27m",componentes:"V,S,M",duracion:"Concentración, 1 hora",descripcion:"Infliges 1d6 necrótico adicional al objetivo cuando lo golpeas y tiene desventaja en pruebas de una característica elegida."},

{nombre:"Marca del Cazador",nivel:1,tipo:"buff",escuela:"Adivinación",tiempo:"Acción adicional",rango:"27m",componentes:"V",duracion:"Concentración, 1 hora",descripcion:"Marcas a una criatura. Infliges 1d6 de fuerza adicional al golpearla y tienes ventaja para rastrearla."},

{nombre:"Cuchillo de Hielo",nivel:1,tipo:"ataque",escuela:"Conjuración",tiempo:"1 acción",rango:"18m",componentes:"S,M",duracion:"Instantáneo",descripcion:"Ataque de conjuro a distancia que inflige 1d10 perforante. Luego explota causando 2d6 frío a criaturas cercanas.",superior:"+1d6 frío por nivel superior."},

{nombre:"Identificar",nivel:1,tipo:"utilidad",escuela:"Adivinación",tiempo:"1 minuto o ritual",rango:"Toque",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Aprendes las propiedades mágicas de un objeto o los conjuros que afectan a una criatura."},

{nombre:"Escritura Ilusoria",nivel:1,tipo:"ilusion",escuela:"Ilusión",tiempo:"1 minuto o ritual",rango:"Toque",componentes:"S,M",duracion:"10 días",descripcion:"Escribes un texto que solo ciertas criaturas pueden leer correctamente. Para otros parece un lenguaje incomprensible."},

{nombre:"Infligir Heridas",nivel:1,tipo:"salvacion",escuela:"Nigromancia",tiempo:"1 acción",rango:"Toque",componentes:"V,S",duracion:"Instantáneo",descripcion:"Una criatura hace TS de Constitución o recibe 2d10 necrótico.",superior:"+1d10 por nivel superior."},

{nombre:"Salto",nivel:1,tipo:"buff",escuela:"Transmutación",tiempo:"Acción adicional",rango:"Toque",componentes:"V,S,M",duracion:"1 minuto",descripcion:"Una criatura puede saltar hasta 9m gastando 3m de movimiento."},

{nombre:"Zancada Larga",nivel:1,tipo:"buff",escuela:"Transmutación",tiempo:"1 acción",rango:"Toque",componentes:"V,S,M",duracion:"1 hora",descripcion:"La velocidad de la criatura aumenta en 3m.",superior:"Afecta a una criatura adicional por nivel superior."},

{nombre:"Armadura de Mago",nivel:1,tipo:"defensa",escuela:"Abjuración",tiempo:"1 acción",rango:"Toque",componentes:"V,S,M",duracion:"8 horas",descripcion:"La CA base del objetivo pasa a ser 13 + modificador de Destreza mientras no lleve armadura."},

{nombre:"Misil Mágico",nivel:1,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"36m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Tres dardos de fuerza impactan automáticamente causando 1d4+1 cada uno.",superior:"Creas un dardo adicional por nivel superior."},

{nombre:"Protección contra el Bien y el Mal",nivel:1,tipo:"defensa",escuela:"Abjuración",tiempo:"1 acción",rango:"Toque",componentes:"V,S,M",duracion:"Concentración, 10 minutos",descripcion:"Criaturas aberración, celestial, elemental, feérico, infernal o no muerto tienen desventaja al atacar al objetivo y no pueden poseerlo ni asustarlo."},

{nombre:"Purificar Comida y Bebida",nivel:1,tipo:"utilidad",escuela:"Transmutación",tiempo:"1 acción o ritual",rango:"3m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Eliminas venenos y podredumbre de comida y bebida no mágicas."},

{nombre:"Rayo de Enfermedad",nivel:1,tipo:"ataque",escuela:"Nigromancia",tiempo:"1 acción",rango:"18m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque de conjuro que inflige 2d8 veneno y deja Envenenado hasta tu próximo turno.",superior:"+1d8 por nivel superior."},

{nombre:"Santuario",nivel:1,tipo:"defensa",escuela:"Abjuración",tiempo:"Acción adicional",rango:"9m",componentes:"V,S,M",duracion:"1 minuto",descripcion:"Las criaturas deben superar TS de Sabiduría para atacar al objetivo o pierden el ataque."},

{nombre:"Castigo Abrasador",nivel:1,tipo:"ataque",escuela:"Evocación",tiempo:"Acción adicional",rango:"Personal",componentes:"V",duracion:"1 minuto",descripcion:"Tras golpear con un arma el objetivo recibe 1d6 fuego y sigue recibiendo 1d6 cada turno hasta superar TS de Constitución.",superior:"+1d6 por nivel superior."},

{nombre:"Escudo",nivel:1,tipo:"reaccion",escuela:"Abjuración",tiempo:"Reacción",rango:"Personal",componentes:"V,S",duracion:"1 asalto",descripcion:"Obtienes +5 a la CA hasta tu próximo turno y no recibes daño de Misil Mágico."},

{nombre:"Escudo de Fe",nivel:1,tipo:"defensa",escuela:"Abjuración",tiempo:"Acción adicional",rango:"18m",componentes:"V,S,M",duracion:"Concentración, 10 minutos",descripcion:"Una criatura obtiene +2 a la CA."},

{nombre:"Imagen Silenciosa",nivel:1,tipo:"ilusion",escuela:"Ilusión",tiempo:"1 acción",rango:"18m",componentes:"V,S,M",duracion:"Concentración, 10 minutos",descripcion:"Creas una ilusión visual de hasta 4.5m de tamaño que puedes mover con una acción."},

{nombre:"Dormir",nivel:1,tipo:"control",escuela:"Encantamiento",tiempo:"1 acción",rango:"18m",componentes:"V,S,M",duracion:"Concentración, 1 minuto",descripcion:"Criaturas en un área deben superar TS de Sabiduría o quedan incapacitados y luego inconscientes."},

{nombre:"Hablar con Animales",nivel:1,tipo:"utilidad",escuela:"Adivinación",tiempo:"1 acción o ritual",rango:"Personal",componentes:"V,S",duracion:"10 minutos",descripcion:"Puedes comunicarte verbalmente con bestias y obtener información básica."},

{nombre:"Destello de Fuego de Hechizo",nivel:1,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"18m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque de conjuro a distancia que inflige 2d10 radiante e ignora media cobertura.",superior:"Creas un disparo adicional por nivel superior."},

{nombre:"Risa Horrible de Tasha",nivel:1,tipo:"salvacion",escuela:"Encantamiento",tiempo:"1 acción",rango:"9m",componentes:"V,S,M",duracion:"Concentración, 1 minuto",descripcion:"TS de Sabiduría o la criatura cae derribada e incapacitada mientras se ríe. Puede repetir la salvación cada turno o al recibir daño."},

{nombre:"Disco Flotante de Tenser",nivel:1,tipo:"utilidad",escuela:"Conjuración",tiempo:"1 acción o ritual",rango:"9m",componentes:"V,S,M",duracion:"1 hora",descripcion:"Creas un disco flotante de fuerza de 1m de diámetro que puede transportar hasta 225kg."}
];

function obtenerMod(statNombre) {
    const input = document.querySelector(`.stat[data-stat="${statNombre}"]`);
    if (!input) return 0;
    const modSpan = input.nextElementSibling;
    return parseInt(modSpan.textContent.replace("+", "")) || 0;
}

function obtenerCompetencia() {
    const comp = document.getElementById("competencia");
    if (!comp) return 0;
    return parseInt(comp.value.replace("+", "")) || 0;
}

function f(n) {
    return n >= 0 ? `+${n}` : n;
}

function calcularNivelLanzador(){
let total=0;
[{clase:document.getElementById("clase")?.value,nivel:parseInt(document.getElementById("nivel1")?.value)||0,sub:document.getElementById("subclase")?.value},{clase:document.getElementById("clase2")?.value,nivel:parseInt(document.getElementById("nivel2")?.value)||0,sub:document.getElementById("subclase2")?.value}].forEach(c=>{
if(!c.clase||!c.nivel)return;
if(clasesCompletas.includes(c.clase))total+=c.nivel;
else if(clasesMedias.includes(c.clase))total+=c.nivel*0.5;
else if(clasesTercio.includes(c.clase)&&subclasesTercioValidas.includes(c.sub))total+=c.nivel/3;
});
return Math.floor(total);
}

function obtenerNivelBrujoTotal(){

let totalBrujo = 0;
let totalCazadorProfano = 0;

[
{
clase:document.getElementById("clase")?.value,
nivel:parseInt(document.getElementById("nivel1")?.value)||0,
sub:document.getElementById("subclase")?.value
},
{
clase:document.getElementById("clase2")?.value,
nivel:parseInt(document.getElementById("nivel2")?.value)||0,
sub:document.getElementById("subclase2")?.value
}
].forEach(c=>{

if(!c.clase || !c.nivel) return;

if(c.clase==="brujo"){
totalBrujo += c.nivel;
}

if(c.clase==="cazador_sangre" &&
subclasesCazadorBrujo.includes(c.sub)){
totalCazadorProfano += c.nivel;
}

});

/* Cada 3 niveles de cazador = 1 nivel brujo */
const equivalenteCazador = Math.floor(totalCazadorProfano / 3);

return totalBrujo + equivalenteCazador;
}

const contenedorPrincipal=document.createElement("div");
bloque.appendChild(contenedorPrincipal);

const tituloNivel=document.createElement("h3");
contenedorPrincipal.appendChild(tituloNivel);

const zonaEspacios=document.createElement("div");
contenedorPrincipal.appendChild(zonaEspacios);

const botonAgregar=document.createElement("button");
botonAgregar.textContent="Añadir Conjuro";
botonAgregar.type="button";
contenedorPrincipal.appendChild(botonAgregar);

const listaConjuros=document.createElement("div");
contenedorPrincipal.appendChild(listaConjuros);

function renderEspaciosNormales(){
const nivel=calcularNivelLanzador();
if(nivel<=0)return;
const bloqueNormal=document.createElement("div");
bloqueNormal.innerHTML="<h3>Espacios de Conjuro</h3>";
tablaEspacios[nivel].forEach((cantidad,i)=>{
const fila=document.createElement("div");
fila.textContent="Nivel "+(i+1)+": ";
for(let x=0;x<cantidad;x++){const check=document.createElement("input");check.type="checkbox";fila.appendChild(check);}
bloqueNormal.appendChild(fila);
});
zonaEspacios.appendChild(bloqueNormal);
}

function renderBrujo(){
const nivelBrujo=obtenerNivelBrujoTotal();
if(nivelBrujo<=0)return;
const data=tablaBrujo[nivelBrujo];
if(!data)return;
const bloqueBrujo=document.createElement("div");
bloqueBrujo.innerHTML="<h3>Pacto Mágico</h3>";
const fila=document.createElement("div");
fila.textContent="Nivel "+data.nivel+" ("+data.espacios+" espacios): ";
for(let i=0;i<data.espacios;i++){const check=document.createElement("input");check.type="checkbox";fila.appendChild(check);}
bloqueBrujo.appendChild(fila);
zonaEspacios.appendChild(bloqueBrujo);
}

function actualizarEspacios(){
tituloNivel.textContent="Conjuros"
zonaEspacios.innerHTML="";
renderEspaciosNormales();
renderBrujo();
}

function crearConjuro(){
const wrapper=document.createElement("div");
wrapper.className="conjuro-card";

const toggle=document.createElement("button");
toggle.type="button";
toggle.textContent="▼";
toggle.style.width="24px";
toggle.style.padding="4px";

const body=document.createElement("div");
body.style.display="none";
body.style.flex="1";

toggle.onclick = ()=>{
const abierto = body.style.display === "block";
body.style.display = abierto ? "none" : "block";
toggle.textContent = abierto ? "▼" : "▲";
};

const eliminar=document.createElement("button");
eliminar.type="button";
eliminar.textContent="✕";
eliminar.style.width="24px";
eliminar.padding="4px";
eliminar.onclick=()=>wrapper.remove();

const selectNivel=document.createElement("select");
for(let i=0;i<=9;i++){const o=document.createElement("option");o.value=i;o.textContent=i===0?"Truco":"Nivel "+i;selectNivel.appendChild(o);}
body.appendChild(selectNivel);

const selectNombre=document.createElement("select");
body.appendChild(selectNombre);

const descripcion=document.createElement("div");
body.appendChild(descripcion);

function actualizarLista(){
const nivel=parseInt(selectNivel.value);
selectNombre.innerHTML="";
const defaultOption=document.createElement("option");
defaultOption.value="";
defaultOption.textContent=nivel===0?"Truco":"Conjuro";
selectNombre.appendChild(defaultOption);
baseConjuros.filter(c=>c.nivel===nivel).forEach(c=>{const o=document.createElement("option");o.value=c.nombre;o.textContent=c.nombre;selectNombre.appendChild(o);});
actualizarDescripcion();
}

function actualizarDescripcion(){

    const nombre = selectNombre.value;
    const data = baseConjuros.find(c=>c.nombre===nombre);

    if(!data || !nombre){
        descripcion.innerHTML="";
        return;
    }

    // 🔥 Guardar stat actual antes de reconstruir
    const statActual =
        descripcion.querySelector(".statSelectInterno")?.value
        || "Inteligencia";

    const mod = obtenerMod(statActual);
    const comp = obtenerCompetencia();

    let extra="";

    if(data.tipo==="ataque"){
        extra = `<span>Ataque: <strong>${f(mod + comp)}</strong></span>`;
    }

    if(data.tipo==="salvacion"){
        const cd = 8 + mod + comp;
        extra = `<span>CD ${cd}</span>`;
    }

    descripcion.innerHTML = `
        <div class="fila-lineal ataque-detalle">

            <strong>${data.nombre}</strong>

            <span>${data.rango}</span>
            <span>${data.componentes}</span>
            <span>${data.duracion}</span>

            <select class="statSelectInterno">
                <option value="Inteligencia">Inteligencia</option>
                <option value="Sabiduria">Sabiduría</option>
                <option value="Carisma">Carisma</option>
            </select>

            ${extra}

        </div>

        <div class="descripcionHechizo">
            <p><strong>Escuela:</strong> ${data.escuela}</p>
            <p><strong>Tiempo:</strong> ${data.tiempo}</p>
            <p>${data.descripcion}</p>
            <p><em>${data.superior}</em></p>
        </div>
    `;

    // 🔥 Restaurar valor seleccionado
    const statSelectNuevo = descripcion.querySelector(".statSelectInterno");
    statSelectNuevo.value = statActual;

    // 🔥 Listener limpio
    statSelectNuevo.addEventListener("change", actualizarDescripcion);
}

// 🔄 Actualización automática como en combate.js

selectNivel.addEventListener("change",actualizarLista);
selectNombre.addEventListener("change",actualizarDescripcion);
actualizarLista();

const header = document.createElement("div");
header.className = "conjuro-header";

header.appendChild(selectNivel);
header.appendChild(selectNombre);
header.appendChild(toggle);
header.appendChild(eliminar);

wrapper.appendChild(header);
wrapper.appendChild(body);
listaConjuros.appendChild(wrapper);
}

botonAgregar.onclick=crearConjuro;

[
"clase","nivel1","subclase",
"clase2","nivel2","subclase2"
].forEach(id=>{
    const el = document.getElementById(id);
    if(el){
        el.addEventListener("change",actualizarEspacios);
    }
});

function actualizarTodosLosConjuros(){
    document.querySelectorAll(".conjuro-card").forEach(card=>{
        const evento = new Event("change");
        const selectNombre = card.querySelector("select:nth-child(2)");
        if(selectNombre){
            selectNombre.dispatchEvent(evento);
        }
    });
}

document.addEventListener("input",actualizarTodosLosConjuros);
document.addEventListener("change",actualizarTodosLosConjuros);

actualizarEspacios();

});
