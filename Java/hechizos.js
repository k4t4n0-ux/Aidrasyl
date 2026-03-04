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

const wrapper = document.createElement("div");
wrapper.className = "conjuro-card";

/* ---------- HEADER ---------- */

const header = document.createElement("div");
header.className = "conjuro-header";

const toggle = document.createElement("button");
toggle.type="button";
toggle.textContent="▼";

const selectNivel=document.createElement("select");
for(let i=0;i<=9;i++){
    const o=document.createElement("option");
    o.value=i;
    o.textContent=i===0?"Trucos":"Nivel "+i;
    selectNivel.appendChild(o);
}

const selectNombre=document.createElement("select");

const eliminar=document.createElement("button");
eliminar.type="button";
eliminar.textContent="✕";
eliminar.onclick=()=>wrapper.remove();

header.appendChild(toggle);
header.appendChild(selectNivel);
header.appendChild(selectNombre);
header.appendChild(eliminar);

/* ---------- BODY ---------- */

const body=document.createElement("div");
body.className="conjuro-body";
body.style.display="none";

const descripcion=document.createElement("div");
body.appendChild(descripcion);

/* ---------- TOGGLE ---------- */

toggle.onclick=()=>{
    const abierto = body.style.display==="block";
    body.style.display = abierto?"none":"block";
    toggle.textContent = abierto?"▼":"▲";
};

/* ---------- FUNCIONES ---------- */

function actualizarLista(){
    const nivel=parseInt(selectNivel.value);
    selectNombre.innerHTML="";

    const baseOption=document.createElement("option");
    baseOption.value="";
    baseOption.textContent=nivel===0?"Truco":"Conjuro";
    selectNombre.appendChild(baseOption);

    baseConjuros
        .filter(c=>c.nivel===nivel)
        .forEach(c=>{
            const o=document.createElement("option");
            o.value=c.nombre;
            o.textContent=c.nombre;
            selectNombre.appendChild(o);
        });

    actualizarDescripcion();
}

function actualizarDescripcion(){

    const nombre = selectNombre.value;
    const data = baseConjuros.find(c=>c.nombre===nombre);

    if(!data){
        descripcion.innerHTML="";
        return;
    }

    const mod = obtenerMod("Inteligencia");
    const comp = obtenerCompetencia();

    let extra="";
    if(data.tipo==="ataque"){
        extra = `<span><strong>${f(mod+comp)}</strong></span>`;
    }
    if(data.tipo==="salvacion"){
        extra = `<span>CD ${8+mod+comp}</span>`;
    }

    descripcion.innerHTML=`
        <div class="fila-lineal">
            <strong>${data.nombre}</strong>
            <span>${data.rango}</span>
            <span>${data.componentes}</span>
            <span>${data.duracion}</span>
            ${extra}
        </div>

        <div class="descripcionHechizo">
            <p><strong>Escuela:</strong> ${data.escuela}</p>
            <p><strong>Tiempo:</strong> ${data.tiempo}</p>
            <p>${data.descripcion}</p>
            <p><em>${data.superior}</em></p>
        </div>
    `;
}

selectNivel.addEventListener("change",actualizarLista);
selectNombre.addEventListener("change",actualizarDescripcion);

actualizarLista();

/* ---------- MONTAJE ---------- */

wrapper.appendChild(header);
wrapper.appendChild(body);
listaConjuros.appendChild(wrapper);
}

botonAgregar.onclick=crearConjuro;


actualizarEspacios();

});
