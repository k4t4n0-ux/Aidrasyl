const contenido = document.getElementById("combateContenido");

/* ==========================
   UTILIDADES
========================== */

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
                <option value="">Ataque</option>
                <option value="armas">Armas</option>
                <option value="desarmado">Desarmado</option>
                <option value="trucos">Trucos</option>
            </select>

            <div class="inlineExtra"></div>

        </div>

        <div class="detalleAtaque"></div>
    `;

    lista.appendChild(bloque);

    const tipoGeneral = bloque.querySelector(".tipoGeneral");
    const inlineExtra = bloque.querySelector(".inlineExtra");
    const detalle = bloque.querySelector(".detalleAtaque");

    tipoGeneral.addEventListener("change", () => {

        inlineExtra.innerHTML = "";
        detalle.innerHTML = "";

        if (tipoGeneral.value === "armas")
            renderArmas(bloque, inlineExtra, detalle);

        if (tipoGeneral.value === "desarmado")
            renderDesarmado(detalle);

        if (tipoGeneral.value === "trucos")
            renderTrucos(bloque, inlineExtra, detalle);
    });
}

/* ==========================
   ARMAS
========================== */

function renderArmas(bloque, inlineExtra, detalle) {

    inlineExtra.innerHTML = `
        <select class="tipoArma">
            <option value="">Tipo</option>
            <option value="simple">Simple</option>
            <option value="marcial">Marcial</option>
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

                <select class="statSelect">
                    ${arma.caracteristica === "fuerza_dest"
                        ? `<option value="Fuerza">Fuerza</option>
                           <option value="Destreza">Destreza</option>`
                        : `<option value="${arma.caracteristica === "fuerza" ? "Fuerza" : "Destreza"}">
                           ${arma.caracteristica === "fuerza" ? "Fuerza" : "Destreza"}
                           </option>`
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

        configurarCalculo(detalle, arma.dano);
    });
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

    configurarCalculo(detalle, "1d4", true);
}

/* ==========================
   TRUCOS
========================== */

function renderTrucos(bloque, inlineExtra, detalle) {

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
                <span>${truco.tipo}</span>

                <select class="statSelect">
                    <option value="Inteligencia">Inteligencia</option>
                    <option value="Sabiduria">Sabiduria</option>
                    <option value="Carisma">Carisma</option>
                </select>

                <span class="resultado"></span>

            </div>
        `;

        configurarTruco(detalle, truco);
    });
}

/* ==========================
   CÁLCULOS
========================== */

function configurarCalculo(detalle, danoBase, esDesarmado = false) {

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

function configurarTruco(detalle, truco) {

    const stat = detalle.querySelector(".statSelect");
    const resultado = detalle.querySelector(".resultado");

    function actualizar() {

        const mod = obtenerMod(stat.value);
        const comp = obtenerCompetencia();

        if (truco.tipo === "ataque")
            resultado.textContent = `Ataque: ${f(mod + comp)}`;

        if (truco.tipo === "salvacion")
            resultado.textContent = `CD: ${8 + comp + mod}`;
    }

    stat.addEventListener("change", actualizar);
    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
}