const STORAGE_KEY = "aidrasyl_hechizos";

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

/* =========================================================
   📚 BASE DE CONJUROS
========================================================= */

const baseConjuros = {
  "Misil Mágico": {
    nivel: 1,
    escuela: "Evocación",
    tipo: "ataque",
    tiempo: "1 acción",
    rango: "36m",
    componentes: "V, S",
    duracion: "Instantáneo",
    efecto: [
      "Creas tres dardos de fuerza que impactan automáticamente.",
      "Cada dardo inflige 1d4 + 1 de daño de fuerza."
    ],
    escalado: {
      tipo: "espacio",
      efecto: "Creas un dardo adicional por nivel superior."
    }
  },

  "Curar Heridas": {
    nivel: 1,
    escuela: "Abjuración",
    tipo: "curacion",
    tiempo: "1 acción",
    rango: "Toque",
    componentes: "V, S",
    duracion: "Instantáneo",
    efecto: [
      "Una criatura recupera 2d8 + modificador."
    ]
  }
};

/* =========================================================
   🧠 UTILIDADES
========================================================= */

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

function actualizarEspacios(){

    titulo.textContent = "Conjuros";
    zonaEspacios.innerHTML = "";

    const nivel = calcularNivelLanzador();
    if(nivel > 0){

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

    const nivelBrujo = obtenerNivelBrujoTotal();
    if(nivelBrujo > 0){

        const data = tablaBrujo[nivelBrujo];
        if(!data) return;

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

/* =========================================================
   ➕ BOTÓN
========================================================= */

botonAgregar.onclick = () => {
    crearConjuro();
    guardarHechizos();
};

/* =========================================================
   🔄 REACTIVIDAD GLOBAL
========================================================= */

[
"clase","nivel1","subclase",
"clase2","nivel2","subclase2"
].forEach(id=>{
    const el = document.getElementById(id);
    if(el){
        el.addEventListener("change", actualizarEspacios);
    }
});

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

/* =========================================================
   🚀 INIT
========================================================= */

actualizarEspacios();
cargarHechizos();

});