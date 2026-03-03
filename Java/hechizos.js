document.addEventListener("DOMContentLoaded", () => {

const contenedor = document.getElementById("bloquehechizos");
if (!contenedor) return;

/* =====================================================
   CONFIGURACIÓN DE CLASES
===================================================== */

const tipoClase = {
    barbaro: "tercio",
    luchador: "tercio",
    monje: "tercio",
    picaro: "tercio",

    artificiero: "medio",
    paladin: "medio",
    explorador: "medio",

    bardo: "completo",
    clerigo: "completo",
    druida: "completo",
    hechicero: "completo",
    mago: "completo",
    psionico: "completo"
};

const clasesEspeciales = ["brujo", "cazador_sangre"];

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
   BASE DE DATOS DE EJEMPLO
   (luego la ampliamos)
===================================================== */

const baseConjuros = [
{
nombre:"Proyectil Mágico",
nivel:1,
escuela:"Evocación",
tiempo:"1 acción",
rango:"36 m",
componentes:"V, S",
duracion:"Instantáneo",
descripcion:"Creas 3 dardos de energía mágica.",
superior:"+1 dardo por nivel superior."
},
{
nombre:"Bola de Fuego",
nivel:3,
escuela:"Evocación",
tiempo:"1 acción",
rango:"45 m",
componentes:"V, S, M (azufre)",
duracion:"Instantáneo",
descripcion:"Explosión ígnea de 6m radio.",
superior:"+1d6 por nivel superior."
},
{
nombre:"Luz",
nivel:0,
escuela:"Evocación",
tiempo:"1 acción",
rango:"Toque",
componentes:"V, M",
duracion:"1 hora",
descripcion:"Objeto brilla 6m.",
superior:"No aplica."
}
];

/* =====================================================
   UTILIDADES
===================================================== */

function getCompetencia(){
const el=document.getElementById("competencia");
return el?parseInt(el.value.replace("+",""))||0:0;
}

function getMod(stat){
const input=document.querySelector(`[data-stat="${stat}"]`);
if(!input) return 0;
const v=parseInt(input.value)||10;
return Math.floor((v-10)/2);
}

function calcularNivelLanzador(){

let total=0;

[
{clase:document.getElementById("clase")?.value,
nivel:parseInt(document.getElementById("nivel1")?.value)||0},
{clase:document.getElementById("clase2")?.value,
nivel:parseInt(document.getElementById("nivel2")?.value)||0}
].forEach(c=>{

if(!c.clase || !c.nivel) return;
if(clasesEspeciales.includes(c.clase)) return;

switch(tipoClase[c.clase]){
case "tercio":
total+=Math.floor(c.nivel/3);
break;
case "medio":
total+=Math.floor(c.nivel/2);
break;
case "completo":
total+=c.nivel;
break;
}
});

return total;
}

/* =====================================================
   ESPACIOS
===================================================== */

function generarEspacios(nivel){

const zona=document.createElement("div");
zona.innerHTML="<h3>Espacios de Conjuro</h3>";

if(nivel<1||!tablaEspacios[nivel]){
zona.innerHTML+="<p>No tiene espacios.</p>";
contenedor.innerHTML="";
contenedor.appendChild(zona);
return;
}

tablaEspacios[nivel].forEach((cant,i)=>{

const fila=document.createElement("div");
fila.textContent=`Nivel ${i+1}: `;

for(let j=0;j<cant;j++){
const c=document.createElement("input");
c.type="checkbox";
fila.appendChild(c);
}

zona.appendChild(fila);
});

contenedor.innerHTML="";
contenedor.appendChild(zona);
}

/* =====================================================
   CD Y ATAQUE
===================================================== */

function generarPanelCD(){

const panel=document.createElement("div");

panel.innerHTML=`
<hr>
<label>Característica Lanzamiento</label>
<select id="statHechizos">
<option>Inteligencia</option>
<option>Sabiduria</option>
<option>Carisma</option>
</select>
<div>CD Salvación: <span id="cdHechizos">10</span></div>
<div>Bonif. Ataque: <span id="ataqueHechizos">+0</span></div>
`;

contenedor.appendChild(panel);
}

function actualizarCD(){

const stat=document.getElementById("statHechizos")?.value;
if(!stat) return;

const mod=getMod(stat);
const comp=getCompetencia();

document.getElementById("cdHechizos").textContent=8+comp+mod;
const atk=comp+mod;
document.getElementById("ataqueHechizos").textContent=
atk>=0?`+${atk}`:atk;
}

/* =====================================================
   SISTEMA AÑADIR CONJUROS
===================================================== */

function generarBotonAgregar(){

const btn=document.createElement("button");
btn.textContent="Añadir Conjuro";
btn.type="button";

btn.addEventListener("click",()=>crearConjuro());

contenedor.appendChild(btn);
}

function crearConjuro(){

const wrapper=document.createElement("div");
wrapper.className="conjuro";

const header=document.createElement("div");
header.textContent="Conjuro (sin nombre)";
header.style.cursor="pointer";

const cuerpo=document.createElement("div");
cuerpo.style.display="none";

header.addEventListener("click",()=>{
cuerpo.style.display=
cuerpo.style.display==="none"?"block":"none";
});

const selectNivel=document.createElement("select");
for(let i=0;i<=9;i++){
const op=document.createElement("option");
op.value=i;
op.textContent=i===0?"Truco":`Nivel ${i}`;
selectNivel.appendChild(op);
}

const selectConjuro=document.createElement("select");

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
selectConjuro.addEventListener("change",()=>{
const data=baseConjuros.find(c=>c.nombre===selectConjuro.value);
if(!data) return;

header.textContent=`Conjuro (${data.nombre})`;

descripcion.innerHTML=`
<p><strong>Escuela:</strong> ${data.escuela}</p>
<p><strong>Tiempo:</strong> ${data.tiempo}</p>
<p><strong>Rango:</strong> ${data.rango}</p>
<p><strong>Componentes:</strong> ${data.componentes}</p>
<p><strong>Duración:</strong> ${data.duracion}</p>
<p>${data.descripcion}</p>
<p><em>${data.superior}</em></p>
`;
});

actualizarLista();

const descripcion=document.createElement("div");

const eliminar=document.createElement("button");
eliminar.textContent="Eliminar";
eliminar.type="button";
eliminar.addEventListener("click",()=>wrapper.remove());

cuerpo.appendChild(selectNivel);
cuerpo.appendChild(selectConjuro);
cuerpo.appendChild(descripcion);
cuerpo.appendChild(eliminar);

wrapper.appendChild(header);
wrapper.appendChild(cuerpo);

contenedor.appendChild(wrapper);
}

/* =====================================================
   ACTUALIZACIÓN GLOBAL
===================================================== */

function actualizarTodo(){
const nivel=calcularNivelLanzador();
generarEspacios(nivel);
generarPanelCD();
generarBotonAgregar();
actualizarCD();
}

document.addEventListener("input",actualizarTodo);
document.addEventListener("change",actualizarTodo);

actualizarTodo();

});