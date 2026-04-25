const contenido = document.getElementById("combateContenido");

/* ==========================
   UTILIDADES
========================== */

function obtenerMod(statNombre) {
    const input = document.getElementById(`stat-${statNombre}`);
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

/* ==========================
   INICIO
========================== */

contenido.innerHTML = `
    <div id="listaAtaques"></div>
    <button id="addAtaque">+ Añadir Ataque</button>
`;

document.getElementById("addAtaque")
    .addEventListener("click", crearBloque);

/* ==========================
   CREAR BLOQUE
========================== */

function crearBloque() {

    const lista = document.getElementById("listaAtaques");

    const bloque = document.createElement("div");
    bloque.classList.add("bloque-ataque");

    bloque.innerHTML = `
        <div class="fila-lineal">

            <select class="tipoGeneral">
                <option value="">Tipo</option>
                <option value="armas">Armas</option>
                <option value="desarmado">Desarmado</option>
                <option value="trucos">Trucos</option>
            </select>

            <div class="inlineExtra"></div>

            <button type="button" class="btnEliminar">✖</button>

        </div>

        <div class="detalleAtaque"></div>
    `;

    lista.appendChild(bloque);

    const tipoGeneral = bloque.querySelector(".tipoGeneral");
    const inlineExtra = bloque.querySelector(".inlineExtra");
    const detalle = bloque.querySelector(".detalleAtaque");

    const btnEliminar = bloque.querySelector(".btnEliminar");

    btnEliminar.addEventListener("click", () => {
        bloque.remove();
    });

    tipoGeneral.addEventListener("change", () => {

        inlineExtra.innerHTML = "";
        detalle.innerHTML = "";

        if (tipoGeneral.value === "armas")
            renderArmas(inlineExtra, detalle);

        if (tipoGeneral.value === "desarmado")
            renderDesarmado(detalle);

        if (tipoGeneral.value === "trucos")
            renderTrucos(inlineExtra, detalle);
    });
}

/* ==========================
   ARMAS
========================== */

function renderArmas(inlineExtra, detalle) {

    inlineExtra.innerHTML = `
        <select class="tipoArma">
            <option value="">Tipo</option>
            <option value="simple">Simple</option>
            <option value="marcial">Marcial</option>
            <option value="personalizada">Personalizada</option>
        </select>

        <select class="armaSelect">
            <option value="">Arma</option>
        </select>
    `;

    const tipoArma = inlineExtra.querySelector(".tipoArma");
    const armaSelect = inlineExtra.querySelector(".armaSelect");

    tipoArma.addEventListener("change", () => {

        armaSelect.innerHTML = `<option value="">Arma</option>`;
        detalle.innerHTML = "";

        if (tipoArma.value === "personalizada") {
            renderPersonalizada(detalle);
            return;
        }

        const armas = armasDB[tipoArma.value];
        if (!armas) return;

        for (let nombre in armas) {
            armaSelect.innerHTML += `<option value="${nombre}">${nombre}</option>`;
        }
    });

    armaSelect.addEventListener("change", () => {

        detalle.innerHTML = "";

        if (!tipoArma.value || !armaSelect.value) return;

        const arma = armasDB[tipoArma.value][armaSelect.value];

        detalle.innerHTML = `
            <div class="fila-lineal ataque-detalle">

                <strong>${armaSelect.value}</strong>
                <span>${arma.dano}</span>
                <span>${arma.distancia}</span>
                <span>${arma.propiedad}</span>

                <span class="maestria-box">
                    Maestría:
                    <a href="#" class="maestriaLink">${arma.maestria || "—"}</a>

                    <label>
                        <input type="checkbox" class="checkMaestria">
                        Activa
                    </label>
                </span>

                <select class="statSelect">
                    ${
                        arma.caracteristica === "fuerza_dest"
                        ? `
                        <option value="Fuerza">Fuerza</option>
                        <option value="Destreza">Destreza</option>
                        `
                        : `
                        <option value="${arma.caracteristica === "fuerza" ? "Fuerza" : "Destreza"}">
                        ${arma.caracteristica === "fuerza" ? "Fuerza" : "Destreza"}
                        </option>
                        `
                    }
                </select>

                <label>
                    <input type="checkbox" class="competente">
                    Competente
                </label>

                <span>Ataque: <strong class="totalAtaque">+0</strong></span>
                <span>Daño: <strong class="totalDanio">${arma.dano} +0</strong></span>

            </div>
        `;

        configurarCalculoArma(detalle, arma.dano);
    });
}



/* ==========================
   ARMA PERSONALIZADA
========================== */

function renderPersonalizada(detalle) {

    detalle.innerHTML = `
        <div class="fila-lineal ataque-detalle">

            <input type="text" class="nombreCustom" placeholder="Nombre">

            <input type="text" class="dadoCustom" placeholder="1d8">

            <input type="text" class="distanciaCustom" placeholder="Distancia">

            <input type="text" class="propiedadCustom" placeholder="Propiedades">

            <select class="maestriaSelect">
                <option value="">Maestría</option>
                ${Object.keys(maestriasDB)
                    .map(m => `<option value="${m}">${m}</option>`)
                    .join("")}
            </select>

            <a href="#" class="maestriaLink infoIcon" style="display:none;">ⓘ</a>

            <label>
                <input type="checkbox" class="checkMaestria">
                Activa
            </label>

            <select class="statSelect">
                <option value="Fuerza">Fuerza</option>
                <option value="Destreza">Destreza</option>
                <option value="Constitucion">Constitucion</option>
                <option value="Inteligencia">Inteligencia</option>
                <option value="Sabiduria">Sabiduria</option>
                <option value="Carisma">Carisma</option>
            </select>

            <input type="number" class="bonusMagico" value="0" min="0">

            <label>
                <input type="checkbox" class="competente">
                Competente
            </label>

            <span>Ataque: <strong class="totalAtaque">+0</strong></span>
            <span>Daño: <strong class="totalDanio">1d8 +0</strong></span>

        </div>
    `;

    const selectMaestria = detalle.querySelector(".maestriaSelect");
    const infoIcon = detalle.querySelector(".infoIcon");

    selectMaestria.addEventListener("change", () => {
        if (selectMaestria.value) {
            infoIcon.style.display = "inline";
            infoIcon.textContent = "ⓘ";
            infoIcon.dataset.maestria = selectMaestria.value;
        } else {
            infoIcon.style.display = "none";
        }
    });

    configurarCalculoPersonalizado(detalle);
}

/* ==========================
   DESARMADO
========================== */

function renderDesarmado(detalle) {

    detalle.innerHTML = `
        <div class="fila-lineal ataque-detalle">

            <strong>Desarmado</strong>
            <span>Toque</span>

            <select class="dado">
                <option>1d4</option>
                <option>1d6</option>
                <option>1d8</option>
                <option>1d10</option>
                <option>1d12</option>
            </select>

            <select class="statSelect">
                <option value="Fuerza">Fuerza</option>
                <option value="Destreza">Destreza</option>
            </select>

            <label>
                <input type="checkbox" class="competente">
                Competente
            </label>

            <span>Ataque: <strong class="totalAtaque">+0</strong></span>
            <span>Daño: <strong class="totalDanio">1d4 +0</strong></span>

        </div>
    `;

    configurarCalculoArma(detalle, "1d4", true);
}

/* ==========================
   TRUCOS
========================== */

function renderTrucos(inlineExtra, detalle) {

    inlineExtra.innerHTML = `
        <select class="trucoSelect">
            <option value="">Truco</option>
        </select>
    `;

    const select = inlineExtra.querySelector(".trucoSelect");

    for (let t in trucosDB) {
        select.innerHTML += `<option value="${t}">${t}</option>`;
    }

    select.addEventListener("change", () => {

        detalle.innerHTML = "";
        const truco = trucosDB[select.value];
        if (!truco) return;

        detalle.innerHTML = `
            <div class="fila-lineal ataque-detalle">

                <strong>${select.value}</strong>

                <span>${truco.distancia}</span>

                <span>Componentes: ${truco.componentes}</span>

                <select class="statSelect">
                    <option value="Inteligencia">Inteligencia</option>
                    <option value="Sabiduria">Sabiduria</option>
                    <option value="Carisma">Carisma</option>
                </select>

                <select class="nivelTruco">
                    <option value="1">Nivel 1</option>
                    <option value="5">Nivel 5</option>
                    <option value="11">Nivel 11</option>
                    <option value="17">Nivel 17</option>
                </select>

                <span class="resultado"></span>

                <span class="danoFinal"></span>

            </div>
        `;

        configurarTruco(detalle, truco);
    });
}

/* ==========================
   CÁLCULOS
========================== */

function configurarCalculoArma(detalle, danoBase, esDesarmado = false) {

    const stat = detalle.querySelector(".statSelect");
    const check = detalle.querySelector(".competente");
    const total = detalle.querySelector(".totalAtaque");
    const danio = detalle.querySelector(".totalDanio");
    const dado = detalle.querySelector(".dado");

    function actualizar() {

        const mod = obtenerMod(stat.value);
        const comp = check?.checked ? obtenerCompetencia() : 0;

        total.textContent = f(mod + comp);

        const base = esDesarmado && dado ? dado.value : danoBase;
        danio.textContent = `${base} ${f(mod)}`;
    }

    stat?.addEventListener("change", actualizar);
    check?.addEventListener("change", actualizar);
    dado?.addEventListener("change", actualizar);

    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
}

function configurarCalculoPersonalizado(detalle) {

    const stat = detalle.querySelector(".statSelect");
    const check = detalle.querySelector(".competente");
    const total = detalle.querySelector(".totalAtaque");
    const danio = detalle.querySelector(".totalDanio");
    const dado = detalle.querySelector(".dadoCustom");
    const bonus = detalle.querySelector(".bonusMagico");

    function actualizar() {

        const mod = obtenerMod(stat.value);
        const comp = check?.checked ? obtenerCompetencia() : 0;
        const magico = parseInt(bonus.value) || 0;

        total.textContent = f(mod + comp + magico);
        danio.textContent = `${dado.value || "1d8"} ${f(mod + magico)}`;
    }

    stat.addEventListener("change", actualizar);
    check.addEventListener("change", actualizar);
    bonus.addEventListener("input", actualizar);
    dado.addEventListener("input", actualizar);
    
    // Agregar estos listeners para disparar guardado
    const nombreCustom = detalle.querySelector(".nombreCustom");
    const distanciaCustom = detalle.querySelector(".distanciaCustom");
    const propiedadCustom = detalle.querySelector(".propiedadCustom");
    const maestriaSelect = detalle.querySelector(".maestriaSelect");
    
    nombreCustom?.addEventListener("input", guardarCombate);
    distanciaCustom?.addEventListener("input", guardarCombate);
    propiedadCustom?.addEventListener("input", guardarCombate);
    maestriaSelect?.addEventListener("change", guardarCombate);

    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
}


function configurarTruco(detalle, truco) {

    const stat = detalle.querySelector(".statSelect");
    const nivel = detalle.querySelector(".nivelTruco");
    const resultado = detalle.querySelector(".resultado");
    const danoFinal = detalle.querySelector(".danoFinal");

    function obtenerDanoPorNivel() {
        const nivelActual = parseInt(nivel.value);

        let danoSeleccionado = truco.dano[1];

        for (let n in truco.dano) {
            if (nivelActual >= n) {
                danoSeleccionado = truco.dano[n];
            }
        }

        return danoSeleccionado;
    }

    function actualizar() {

        const mod = obtenerMod(stat.value);
        const comp = obtenerCompetencia();
        const dano = obtenerDanoPorNivel();

        danoFinal.textContent = dano;

        if (truco.tipo === "ataque") {
            resultado.textContent = `Ataque: ${f(mod + comp)}`;
        }

        if (truco.tipo === "salvacion") {
            const cd = 8 + comp + mod;
            const ts = truco.ts || "";
            resultado.textContent = `CD ${cd} TS ${ts}`;
        }
    }

    stat.addEventListener("change", actualizar);
    nivel.addEventListener("change", actualizar);

    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
}

function renderArmas(inlineExtra, detalle) {

    inlineExtra.innerHTML = `
        <select class="tipoArma">
            <option value="">Tipo</option>
            <option value="simple">Simple</option>
            <option value="marcial">Marcial</option>
            <option value="personalizada">Personalizada</option>
        </select>

        <select class="armaSelect" style="display:none;">
            <option value="">Arma</option>
        </select>
    `;

    const tipoArma = inlineExtra.querySelector(".tipoArma");
    const armaSelect = inlineExtra.querySelector(".armaSelect");

    tipoArma.addEventListener("change", () => {

        armaSelect.innerHTML = `<option value="">Arma</option>`;
        detalle.innerHTML = "";

        if (tipoArma.value === "personalizada") {
            armaSelect.style.display = "none";
            renderPersonalizada(detalle);
            return;
        }

        armaSelect.style.display = "inline-block";
        const armas = armasDB[tipoArma.value];
        if (!armas) return;

        for (let nombre in armas) {
            armaSelect.innerHTML += `<option value="${nombre}">${nombre}</option>`;
        }
    });

    armaSelect.addEventListener("change", () => {

        detalle.innerHTML = "";

        if (!tipoArma.value || !armaSelect.value) return;

        const arma = armasDB[tipoArma.value][armaSelect.value];

        detalle.innerHTML = `
            <div class="fila-lineal ataque-detalle">

                <strong>${armaSelect.value}</strong>
                <span>${arma.dano}</span>
                <span>${arma.distancia}</span>
                <span>${arma.propiedad}</span>

                <span class="maestria-box">
                    Maestría:
                    <a href="#" class="maestriaLink">${arma.maestria || "—"}</a>

                    <label>
                        <input type="checkbox" class="checkMaestria">
                        Activa
                    </label>
                </span>

                <select class="statSelect">
                    ${
                        arma.caracteristica === "fuerza_dest"
                        ? `
                        <option value="Fuerza">Fuerza</option>
                        <option value="Destreza">Destreza</option>
                        `
                        : `
                        <option value="${arma.caracteristica === "fuerza" ? "Fuerza" : "Destreza"}">
                        ${arma.caracteristica === "fuerza" ? "Fuerza" : "Destreza"}
                        </option>
                        `
                    }
                </select>

                <label>
                    <input type="checkbox" class="competente">
                    Competente
                </label>

                <span>Ataque: <strong class="totalAtaque">+0</strong></span>
                <span>Daño: <strong class="totalDanio">${arma.dano} +0</strong></span>

            </div>
        `;

        configurarCalculoArma(detalle, arma.dano);
    });
}

//Guardado//
document.addEventListener("click", function(e) {

    if (e.target.classList.contains("maestriaLink")) {

        e.preventDefault();

        const nombre = e.target.dataset.maestria || e.target.textContent;

        if (!maestriasDB[nombre]) return;

        const anterior = document.querySelector(".tooltipMaestria");
        if (anterior) anterior.remove();

        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltipMaestria");

        tooltip.innerHTML = `
            <strong>${nombre}</strong>
            <p>${maestriasDB[nombre].descripcion}</p>
        `;

        document.body.appendChild(tooltip);

        const rect = e.target.getBoundingClientRect();

        tooltip.style.top = rect.bottom + window.scrollY + 8 + "px";
        tooltip.style.left = rect.left + window.scrollX + "px";

        setTimeout(() => {
            document.addEventListener("click", function cerrar(ev){
                if (!tooltip.contains(ev.target)) {
                    tooltip.remove();
                    document.removeEventListener("click", cerrar);
                }
            });
        }, 10);
    }
});

const STORAGE_COMBATE = "aidrasylos_combate";

function guardarCombate() {
    const bloques = document.querySelectorAll(".bloque-ataque");
    const datos = [];

    bloques.forEach(bloque => {
        const tipo = bloque.querySelector(".tipoGeneral").value;

        if (!tipo) return;

        const ataque = { tipo };

        if (tipo === "armas") {
            const tipoArma = bloque.querySelector(".tipoArma")?.value;
            ataque.tipoArma = tipoArma;

            if (tipoArma === "personalizada") {
                ataque.personalizada = true;
                ataque.nombre = bloque.querySelector(".nombreCustom")?.value;
                ataque.dado = bloque.querySelector(".dadoCustom")?.value;
                ataque.distancia = bloque.querySelector(".distanciaCustom")?.value;
                ataque.propiedad = bloque.querySelector(".propiedadCustom")?.value;
                ataque.maestria = bloque.querySelector(".maestriaSelect")?.value;
                ataque.checkMaestria = bloque.querySelector(".checkMaestria")?.checked;
                ataque.stat = bloque.querySelector(".statSelect")?.value;
                ataque.bonusMagico = bloque.querySelector(".bonusMagico")?.value;
                ataque.competente = bloque.querySelector(".competente")?.checked;
            } else {
                ataque.arma = bloque.querySelector(".armaSelect")?.value;
                ataque.stat = bloque.querySelector(".statSelect")?.value;
                ataque.competente = bloque.querySelector(".competente")?.checked;
                ataque.maestria = bloque.querySelector(".checkMaestria")?.checked;
            }
        } else if (tipo === "desarmado") {
            ataque.dado = bloque.querySelector(".dado")?.value;
            ataque.stat = bloque.querySelector(".statSelect")?.value;
            ataque.competente = bloque.querySelector(".competente")?.checked;
        } else if (tipo === "trucos") {
            ataque.truco = bloque.querySelector(".trucoSelect")?.value;
            ataque.stat = bloque.querySelector(".statSelect")?.value;
            ataque.nivel = bloque.querySelector(".nivelTruco")?.value;
        }

        datos.push(ataque);
    });

    localStorage.setItem(STORAGE_COMBATE, JSON.stringify(datos));
}

function cargarCombate() {
    const data = localStorage.getItem(STORAGE_COMBATE);
    if (!data) return;

    try {
        const ataques = JSON.parse(data);
        ataques.forEach(ataque => reconstruirAtaque(ataque));
    } catch (e) {
        console.error("Error al cargar combate:", e);
    }
}

function reconstruirAtaque(ataque) {
    crearBloque();
    const lista = document.getElementById("listaAtaques");
    const bloque = lista.lastElementChild;
    const tipoGeneral = bloque.querySelector(".tipoGeneral");

    tipoGeneral.value = ataque.tipo;
    tipoGeneral.dispatchEvent(new Event("change"));

    const waitForElement = (selector, timeout = 500) => {
        return new Promise((resolve) => {
            const startTime = Date.now();
            const checkElement = () => {
                const element = bloque.querySelector(selector);
                if (element) {
                    resolve(element);
                } else if (Date.now() - startTime < timeout) {
                    requestAnimationFrame(checkElement);
                } else {
                    resolve(null);
                }
            };
            checkElement();
        });
    };

    (async () => {
        if (ataque.tipo === "armas") {
            const tipoArma = await waitForElement(".tipoArma");
            if (tipoArma) {
                tipoArma.value = ataque.tipoArma;
                tipoArma.dispatchEvent(new Event("change"));

                if (ataque.tipoArma === "personalizada") {
                    const nombreCustom = await waitForElement(".nombreCustom");
                    const dadoCustom = await waitForElement(".dadoCustom");
                    const distanciaCustom = await waitForElement(".distanciaCustom");
                    const propiedadCustom = await waitForElement(".propiedadCustom");
                    const maestriaSelect = await waitForElement(".maestriaSelect");
                    const statSelect = await waitForElement(".statSelect");
                    const bonusMagico = await waitForElement(".bonusMagico");

                    if (nombreCustom) {
                        nombreCustom.value = ataque.nombre || "";
                        dadoCustom.value = ataque.dado || "1d8";
                        distanciaCustom.value = ataque.distancia || "";
                        propiedadCustom.value = ataque.propiedad || "";
                        maestriaSelect.value = ataque.maestria || "";
                        statSelect.value = ataque.stat || "Fuerza";
                        bonusMagico.value = ataque.bonusMagico || "0";

                        bloque.querySelector(".checkMaestria").checked = ataque.checkMaestria || false;
                        bloque.querySelector(".competente").checked = ataque.competente || false;

                        dadoCustom.dispatchEvent(new Event("input"));
                    }
                } else {
                    const armaSelect = await waitForElement(".armaSelect");
                    if (armaSelect) {
                        armaSelect.value = ataque.arma;
                        armaSelect.dispatchEvent(new Event("change"));
                    }

                    const statSelect = await waitForElement(".statSelect");
                    if (statSelect) {
                        statSelect.value = ataque.stat;
                        bloque.querySelector(".competente").checked = ataque.competente;
                        bloque.querySelector(".checkMaestria").checked = ataque.maestria;
                    }
                }
            }
        } else if (ataque.tipo === "desarmado") {
            const dado = await waitForElement(".dado");
            const statSelect = await waitForElement(".statSelect");
            if (dado && statSelect) {
                dado.value = ataque.dado;
                statSelect.value = ataque.stat;
                bloque.querySelector(".competente").checked = ataque.competente;
            }
        } else if (ataque.tipo === "trucos") {
            const trucoSelect = await waitForElement(".trucoSelect");
            if (trucoSelect) {
                trucoSelect.value = ataque.truco;
                trucoSelect.dispatchEvent(new Event("change"));

                const statSelect = await waitForElement(".statSelect");
                const nivelTruco = await waitForElement(".nivelTruco");
                if (statSelect && nivelTruco) {
                    statSelect.value = ataque.stat;
                    nivelTruco.value = ataque.nivel;
                    nivelTruco.dispatchEvent(new Event("change"));
                }
            }
        }
    })();
}

document.addEventListener("input", guardarCombate);
document.addEventListener("change", guardarCombate);
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnEliminar")) {
        guardarCombate();
    }
});
document.addEventListener("DOMContentLoaded", cargarCombate);