document.addEventListener("DOMContentLoaded", () => {

const bloque = document.getElementById("bloquehechizos");
if (!bloque) return;

/* =====================================================
   CONFIGURACIÓN DE CLASES
===================================================== */

const clasesCompletas = ["bardo","clerigo","druida","hechicero","mago","psionico"];
const clasesMedias = ["artificiero","paladin","explorador"];
const clasesTercio = ["luchador","picaro"];
const clasesBrujo = ["brujo"];
const clasesEspeciales = ["cazador_sangre"];    

/* Subclases tercio lanzadoras */
const subclasesTercioValidas = ["asesino"]; // añade aquí las reales

/* Subclase cazador tipo brujo */
const subclasesCazadorBrujo = ["orden_del_profano"];

/* =====================================================
   BASE CONJUROS (estructura preparada)
===================================================== */

const baseConjuros = [
{
nombre:"Proyectil Mágico",
nivel:1,
tipo:"ataque",
escuela:"Evocación",
tiempo:"1 acción",
rango:"36m",
componentes:"V,S",
duracion:"Instantáneo",
descripcion:"3 dardos impactan automáticamente.",
superior:"+1 dardo por nivel superior."
},
{
nombre:"Bola de Fuego",
nivel:3,
tipo:"salvacion",
escuela:"Evocación",
tiempo:"1 acción",
rango:"45m",
componentes:"V,S,M",
duracion:"Instantáneo",
descripcion:"Explosión ígnea 6m radio.",
superior:"+1d6 por nivel superior."
},
{
nombre:"Luz",
nivel:0,
tipo:"utilidad",
escuela:"Evocación",
tiempo:"1 acción",
rango:"Toque",
componentes:"V,M",
duracion:"1 hora",
descripcion:"Objeto brilla.",
superior:"—"
}
];

/* =====================================================
   UTILIDADES
===================================================== */

function competencia(){
return parseInt(document.getElementById("competencia")?.value.replace("+",""))||0;
}

function mod(stat){
const input=document.querySelector(`[data-stat="${stat}"]`);
if(!input) return 0;
return Math.floor(((parseInt(input.value)||10)-10)/2);
}

/* =====================================================
   NIVEL LANZADOR MULTICLASE REAL
===================================================== */

function calcularNivelLanzador(){

let total = 0;

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

if(clasesCompletas.includes(c.clase)){
total += c.nivel;
}
else if(clasesMedias.includes(c.clase)){
total += c.nivel * 0.5;
}
else if(clasesTercio.includes(c.clase)){
if(subclasesTercioValidas.includes(c.sub)){
total += c.nivel * (1/3);
}
}
});

return Math.floor(total);
}

/* =====================================================
   BLOQUE PRINCIPAL (NO SE RECONSTRUYE)
===================================================== */

const contenedorPrincipal = document.createElement("div");
bloque.appendChild(contenedorPrincipal);

const tituloNivel = document.createElement("h3");
contenedorPrincipal.appendChild(tituloNivel);

const zonaEspacios = document.createElement("div");
contenedorPrincipal.appendChild(zonaEspacios);

const botonAgregar = document.createElement("button");
botonAgregar.textContent="Añadir Conjuro";
botonAgregar.type="button";
contenedorPrincipal.appendChild(botonAgregar);

const listaConjuros = document.createElement("div");
contenedorPrincipal.appendChild(listaConjuros);

/* =====================================================
   ACTUALIZAR ESPACIOS (SIN BORRAR CONJUROS)
===================================================== */

function actualizarEspacios(){

const nivel = calcularNivelLanzador();
tituloNivel.textContent = "Nivel Lanzador Total: " + nivel;

zonaEspacios.innerHTML="";

}

/* =====================================================
   CREAR CONJURO
===================================================== */

function crearConjuro(){

const wrapper = document.createElement("div");
wrapper.className="conjuro";

const header = document.createElement("button");
header.textContent="Conjuro";
header.type="button";

const body = document.createElement("div");
body.style.display="none";

header.onclick=()=>{
body.style.display = body.style.display==="none"?"block":"none";
};

const selectClase = document.createElement("select");
["Inteligencia","Sabiduria","Carisma"].forEach(stat=>{
const o=document.createElement("option");
o.textContent=stat;
selectClase.appendChild(o);
});
body.appendChild(selectClase);

const selectNivel = document.createElement("select");
for(let i=0;i<=9;i++){
const o=document.createElement("option");
o.value=i;
o.textContent=i===0?"Truco":"Nivel "+i;
selectNivel.appendChild(o);
}
body.appendChild(selectNivel);

const selectConjuro = document.createElement("select");
body.appendChild(selectConjuro);

const descripcion = document.createElement("div");
body.appendChild(descripcion);

function actualizarLista(){

const nivel=parseInt(selectNivel.value);
selectConjuro.innerHTML="";

baseConjuros
.filter(c=>c.nivel===nivel)
.forEach(c=>{
const o=document.createElement("option");
o.value=c.nombre;
o.textContent=c.nombre;
selectConjuro.appendChild(o);
});

}

selectNivel.addEventListener("change",actualizarLista);

selectConjuro.addEventListener("change",()=>{

const data=baseConjuros.find(c=>c.nombre===selectConjuro.value);
if(!data) return;

header.textContent="Conjuro ("+data.nombre+")";

let extra="";

if(data.tipo==="ataque"){
extra="<p><strong>Ataque:</strong> "+
((competencia()+mod(selectClase.value))>=0?"+":"")+
(competencia()+mod(selectClase.value))+"</p>";
}

if(data.tipo==="salvacion"){
extra="<p><strong>CD:</strong> "+
(8+competencia()+mod(selectClase.value))+"</p>";
}

descripcion.innerHTML=
"<p><strong>Escuela:</strong> "+data.escuela+"</p>"+
"<p><strong>Tiempo:</strong> "+data.tiempo+"</p>"+
"<p><strong>Rango:</strong> "+data.rango+"</p>"+
"<p><strong>Componentes:</strong> "+data.componentes+"</p>"+
"<p><strong>Duración:</strong> "+data.duracion+"</p>"+
extra+
"<p>"+data.descripcion+"</p>"+
"<p><em>"+data.superior+"</em></p>";

});

actualizarLista();

const eliminar=document.createElement("button");
eliminar.textContent="Quitar";
eliminar.type="button";
eliminar.onclick=()=>wrapper.remove();

body.appendChild(eliminar);

wrapper.appendChild(header);
wrapper.appendChild(body);
listaConjuros.appendChild(wrapper);
}

botonAgregar.onclick=crearConjuro;

/* ===================================================== */

document.addEventListener("input",actualizarEspacios);
document.addEventListener("change",actualizarEspacios);

actualizarEspacios();

});