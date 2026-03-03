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
{nombre:"Truco",nivel:0,tipo:"",escuela:"",tiempo:"",rango:"",componentes:"",duracion:"",descripcion:"",superior:""},
{nombre:"Luz",nivel:0,tipo:"utilidad",escuela:"Evocación",tiempo:"1 acción",rango:"Toque",componentes:"V,M",duracion:"1 hora",descripcion:"Objeto brilla.",superior:"—"},
{nombre:"Proyectil Mágico",nivel:1,tipo:"ataque",escuela:"Evocación",tiempo:"1 acción",rango:"36m",componentes:"V,S",duracion:"Instantáneo",descripcion:"3 dardos impactan automáticamente.",superior:"+1 dardo por nivel superior."},
{nombre:"Bola de Fuego",nivel:3,tipo:"salvacion",escuela:"Evocación",tiempo:"1 acción",rango:"45m",componentes:"V,S,M",duracion:"Instantáneo",descripcion:"Explosión ígnea de 6m.",superior:"+1d6 por nivel superior."},
];

function competencia(){return parseInt(document.getElementById("competencia")?.value.replace("+",""))||0;}
function mod(stat){const input=document.querySelector(`[data-stat="${stat}"]`);if(!input)return 0;return Math.floor(((parseInt(input.value)||10)-10)/2);}

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
let total=0;
[{clase:document.getElementById("clase")?.value,nivel:parseInt(document.getElementById("nivel1")?.value)||0,sub:document.getElementById("subclase")?.value},{clase:document.getElementById("clase2")?.value,nivel:parseInt(document.getElementById("nivel2")?.value)||0,sub:document.getElementById("subclase2")?.value}].forEach(c=>{
if(c.clase==="brujo")total+=c.nivel;
else if(c.clase==="cazador_sangre"&&subclasesCazadorBrujo.includes(c.sub))total+=c.nivel;
});
return total;
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
bloqueBrujo.innerHTML="<h3>Pact Magic / Ritual Profano</h3>";
const fila=document.createElement("div");
fila.textContent="Nivel "+data.nivel+" ("+data.espacios+" espacios): ";
for(let i=0;i<data.espacios;i++){const check=document.createElement("input");check.type="checkbox";fila.appendChild(check);}
bloqueBrujo.appendChild(fila);
zonaEspacios.appendChild(bloqueBrujo);
}

function actualizarEspacios(){
tituloNivel.textContent="Nivel Lanzador Total: "+calcularNivelLanzador();
zonaEspacios.innerHTML="";
renderEspaciosNormales();
renderBrujo();
}

function crearConjuro(){
const wrapper=document.createElement("div");
wrapper.className="conjuro";
wrapper.style.display="flex";
wrapper.style.alignItems="center";
wrapper.style.gap="8px";

const toggle=document.createElement("button");
toggle.type="button";
toggle.textContent="▼";
toggle.style.width="24px";
toggle.style.padding="4px";

const body=document.createElement("div");
body.style.display="none";
body.style.flex="1";

toggle.onclick=()=>{
const isOpen=body.style.display!=="none";
body.style.display=isOpen?"none":"block";
toggle.textContent=isOpen?"▼":"▲";
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

const selectStat=document.createElement("select");
["Inteligencia","Sabiduria","Carisma"].forEach(stat=>{const o=document.createElement("option");o.value=stat;o.textContent=stat;selectStat.appendChild(o);});
body.appendChild(selectStat);

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
const nombre=selectNombre.value;
const data=baseConjuros.find(c=>c.nombre===nombre);
if(!data||!nombre){
descripcion.innerHTML="";
return;
}
const bonus=competencia()+mod(selectStat.value);
let extra="";
if(data.tipo==="ataque")extra="<p><strong>Ataque:</strong> "+(bonus>=0?"+":"")+bonus+"</p>";
if(data.tipo==="salvacion"){const cd=8+bonus;extra="<p><strong>CD:</strong> "+cd+"</p>";}
descripcion.innerHTML="<p><strong>Escuela:</strong> "+data.escuela+"</p><p><strong>Tiempo:</strong> "+data.tiempo+"</p><p><strong>Rango:</strong> "+data.rango+"</p><p><strong>Componentes:</strong> "+data.componentes+"</p><p><strong>Duración:</strong> "+data.duracion+"</p>"+extra+"<p>"+data.descripcion+"</p><p><em>"+data.superior+"</em></p>";
}

selectNivel.addEventListener("change",actualizarLista);
selectNombre.addEventListener("change",actualizarDescripcion);
selectStat.addEventListener("change",actualizarDescripcion);
actualizarLista();

wrapper.appendChild(toggle);
wrapper.appendChild(body);
wrapper.appendChild(eliminar);
listaConjuros.appendChild(wrapper);
}

botonAgregar.onclick=crearConjuro;

document.addEventListener("input",actualizarEspacios);
document.addEventListener("change",actualizarEspacios);

actualizarEspacios();

});
