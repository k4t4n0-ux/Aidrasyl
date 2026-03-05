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
{nombre:"Luz",nivel:0,tipo:"utilidad",escuela:"Evocación",tiempo:"1 acción",rango:"Toque",componentes:"V,M",duracion:"1 hora",descripcion:"Objeto brilla.",superior:"—"},
{nombre:"Proyectil Mágico",nivel:1,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"36m",componentes:"V,S",duracion:"Instantáneo",descripcion:"3 dardos impactan automáticamente.",superior:"+1 dardo por nivel superior."},
{nombre:"Bola de Fuego",nivel:3,tipo:"salvacion",escuela:"Evocación",tiempo:"1 acción",rango:"45m",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Explosión ígnea de 6m.",superior:"+1d6 por nivel superior."},
{nombre:"Salpicadura Ácida",nivel:0,tipo:"salvacion",escuela:"Evocación",tiempo:"1 acción",rango:"18m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Burbuja ácida explota en radio de 1.5m. Criaturas dentro hacen TS Destreza o reciben 1d6 ácido.",superior:"Nivel 5:2d6, 11:3d6, 17:4d6."},

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

{nombre:"Luz Estelar",nivel:0,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"18m",componentes:"V,S",duracion:"Instantáneo",descripcion:"Ataque a distancia que inflige 1d8 radiante e impide invisibilidad hasta tu siguiente turno.",superior:"Nivel 5:2d8, 11:3d8, 17:4d8."},

{nombre:"Taumaturgia",nivel:0,tipo:"utilidad",escuela:"Transmutación",tiempo:"1 acción",rango:"9m",componentes:"V",duracion:"1 min",descripcion:"Pequeños efectos divinos: voz amplificada, abrir puertas, sonidos, temblores o cambiar ojos.",superior:"—"},

{nombre:"Látigo de Espinas",nivel:0,tipo:"ataque",escuela:"Transmutación",tiempo:"1 acción",rango:"9m",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Ataque que inflige 1d6 perforante y atrae al objetivo 3m.",superior:"Nivel 5:2d6, 11:3d6, 17:4d6."},

{nombre:"Trueno",nivel:0,tipo:"salvacion",escuela:"Evocación",tiempo:"1 acción",rango:"Personal",componentes:"S",duracion:"Instantáneo",descripcion:"Criaturas a 1.5m hacen TS Constitución o reciben 1d6 trueno.",superior:"Nivel 5:2d6, 11:3d6, 17:4d6."},

{nombre:"Doblar a los Muertos",nivel:0,tipo:"salvacion",escuela:"Nigromancia",tiempo:"1 acción",rango:"18m",componentes:"V,S",duracion:"Instantáneo",descripcion:"TS Sabiduría o 1d8 necrótico (1d12 si el objetivo ya está herido).",superior:"Nivel 5:2 dados, 11:3 dados, 17:4 dados."},

{nombre:"Golpe Verdadero",nivel:0,tipo:"ataque",escuela:"Adivinación",tiempo:"1 acción",rango:"Personal",componentes:"S,M",duracion:"Instantáneo",descripcion:"Realizas un ataque con arma usando tu característica de conjuro.",superior:"Nivel 5:+1d6 radiante, 11:+2d6, 17:+3d6."},

{nombre:"Burla Viciosa",nivel:0,tipo:"salvacion",escuela:"Encantamiento",tiempo:"1 acción",rango:"18m",componentes:"V",duracion:"Instantáneo",descripcion:"TS Sabiduría o 1d6 psíquico y desventaja en el siguiente ataque.",superior:"Nivel 5:2d6, 11:3d6, 17:4d6."},

{nombre:"Palabra de Resplandor",nivel:0,tipo:"salvacion",escuela:"Evocación",tiempo:"1 acción",rango:"Personal",componentes:"V,M",duracion:"Instantáneo",descripcion:"Criaturas elegidas a 1.5m hacen TS Constitución o reciben 1d6 radiante.",superior:"Nivel 5:2d6, 11:3d6, 17:4d6."},
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
