document.addEventListener("DOMContentLoaded", () => {

const bloque = document.getElementById("bloquehechizos");
if (!bloque) return;

/* =====================================================
   CONFIGURACIÓN CLASES
===================================================== */

const clasesCompletas = ["bardo","clerigo","druida","hechicero","mago","psionico"];
const clasesMedias = ["artificiero","paladin","explorador"];
const clasesTercio = ["luchador","picaro"]; // SOLO si subclase válida

const subclasesTercioValidas = [
    "maestro_de_batalla",  // ejemplo futuro si quieres
    "asesino"              // ejemplo editable
];

const clasesEspeciales = ["brujo","cazador_sangre"];

/* =====================================================
   TABLA ESPACIOS
===================================================== */

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

/* =====================================================
   BASE CONJUROS (estructura correcta)
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
descripcion:"3 dardos mágicos impactan automáticamente.",
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

let total=0;

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

if(!c.clase||!c.nivel) return;
if(clasesEspeciales.includes(c.clase)) return;

if(clasesCompletas.includes(c.clase)){
total+=c.nivel;
}

else if(clasesMedias.includes(c.clase)){
total+=Math.floor(c.nivel/2);
}

else if(clasesTercio.includes(c.clase)){
if(subclasesTercioValidas.includes(c.sub)){
total+=Math.floor(c.nivel/3);
}
}

});

return total;
}

/* =====================================================
   RENDER BLOQUE PRINCIPAL
===================================================== */

function render(){

bloque.innerHTML="";

const botonToggle=document.createElement("button");
botonToggle.textContent="Mostrar / Ocultar Conjuros";
botonToggle.type="button";

const contenedor=document.createElement("div");
contenedor.style.display="none";

botonToggle.onclick=()=>{
contenedor.style.display=
contenedor.style.display==="none"?"block":"none";
};

bloque.appendChild(botonToggle);
bloque.appendChild(contenedor);

/* ===== ESPACIOS ===== */

const nivel=calcularNivelLanzador();

const titulo=document.createElement("h3");
titulo.textContent=`Nivel Lanzador Total: ${nivel}`;
contenedor.appendChild(titulo);

if(tablaEspacios[nivel]){
tablaEspacios[nivel].forEach((cant,i)=>{
const fila=document.createElement("div");
fila.textContent=`Nivel ${i+1}: `;
for(let x=0;x<cant;x++){
const c=document.createElement("input");
c.type="checkbox";
fila.appendChild(c);
}
contenedor.appendChild(fila);
});
}

/* ===== CARACTERÍSTICA ===== */

const selectStat=document.createElement("select");
["Inteligencia","Sabiduria","Carisma"].forEach(s=>{
const o=document.createElement("option");
o.textContent=s;
selectStat.appendChild(o);
});
contenedor.appendChild(selectStat);

/* ===== AÑADIR CONJURO ===== */

const btnAdd=document.createElement("button");
btnAdd.textContent="Añadir Conjuro";
btnAdd.type="button";
contenedor.appendChild(btnAdd);

btnAdd.onclick=()=>crearConjuro(contenedor,selectStat);

}

/* =====================================================
   CREAR CONJURO
===================================================== */

function crearConjuro(parent,selectStat){

const wrapper=document.createElement("div");
wrapper.className="conjuro";

const header=document.createElement("button");
header.textContent="Conjuro";
header.type="button";

const body=document.createElement("div");
body.style.display="none";

header.onclick=()=>{
body.style.display=body.style.display==="none"?"block":"none";
};

/* NIVEL */

const selectNivel=document.createElement("select");
for(let i=0;i<=9;i++){
const op=document.createElement("option");
op.value=i;
op.textContent=i===0?"Truco":`Nivel ${i}`;
selectNivel.appendChild(op);
}
body.appendChild(selectNivel);

/* LISTA */

const selectConjuro=document.createElement("select");
body.appendChild(selectConjuro);

function actualizarLista(){

const nivel=parseInt(selectNivel.value);
selectConjuro.innerHTML="";

baseConjuros
.filter(c=>c.nivel===nivel)
.forEach(c=>{
const op=document.createElement("option");
op.value=c.nombre;
op.textContent=c.nombre;
selectConjuro.appendChild(op);
});
}

selectNivel.addEventListener("change",actualizarLista);
actualizarLista();

/* DESCRIPCIÓN */

const desc=document.createElement("div");
body.appendChild(desc);

selectConjuro.addEventListener("change",()=>{

const data=baseConjuros.find(c=>c.nombre===selectConjuro.value);
if(!data) return;

header.textContent=`Conjuro (${data.nombre})`;

let extra="";

if(data.tipo==="ataque"){
extra=`<p><strong>Bonificador Ataque:</strong> ${
(competencia()+mod(selectStat.value)>=0?"+":"")
+(competencia()+mod(selectStat.value))
}</p>`;
}

if(data.tipo==="salvacion"){
extra=`<p><strong>CD Salvación:</strong> ${
8+competencia()+mod(selectStat.value)
}</p>`;
}

desc.innerHTML=`
<p><strong>Escuela:</strong> ${data.escuela}</p>
<p><strong>Tiempo:</strong> ${data.tiempo}</p>
<p><strong>Rango:</strong> ${data.rango}</p>
<p><strong>Componentes:</strong> ${data.componentes}</p>
<p><strong>Duración:</strong> ${data.duracion}</p>
${extra}
<p>${data.descripcion}</p>
<p><em>${data.superior}</em></p>
`;

});

/* ELIMINAR */

const eliminar=document.createElement("button");
eliminar.textContent="Eliminar";
eliminar.type="button";
eliminar.onclick=()=>wrapper.remove();
body.appendChild(eliminar);

wrapper.appendChild(header);
wrapper.appendChild(body);
parent.appendChild(wrapper);
}

/* ===================================================== */

document.addEventListener("input",render);
document.addEventListener("change",render);

render();

});