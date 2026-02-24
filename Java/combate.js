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

function renderArmas(container) {

    container.innerHTML = `
        <div class="fila-lineal">

            <label>Tipo</label>
            <select class="tipoArma">
                <option value="">--</option>
                <option value="simple">Simple</option>
                <option value="marcial">Marcial</option>
                <option value="personalizada">Personalizada</option>
            </select>

            <label>Arma</label>
            <select class="armaSelect">
                <option value="">--</option>
            </select>

        </div>

        <div class="detalleArma"></div>
    `;

    const tipoSelect = container.querySelector(".tipoArma");
    const armaSelect = container.querySelector(".armaSelect");
    const detalleDiv = container.querySelector(".detalleArma");

    tipoSelect.addEventListener("change", () => {

        armaSelect.innerHTML = `<option value="">--</option>`;
        detalleDiv.innerHTML = "";

        if (tipoSelect.value === "personalizada") {
            renderArmaPersonalizada(detalleDiv);
            return;
        }

        const armas = armasDB[tipoSelect.value];
        if (!armas) return;

        for (let nombre in armas) {
            armaSelect.innerHTML += `<option value="${nombre}">${nombre}</option>`;
        }
    });

    armaSelect.addEventListener("change", () => {

        detalleDiv.innerHTML = "";

        const tipo = tipoSelect.value;
        const nombre = armaSelect.value;
        if (!tipo || !nombre) return;

        const arma = armasDB[tipo][nombre];

        detalleDiv.innerHTML = `
            <div class="fila-lineal encabezado-ataque">
                <strong>${nombre}</strong>
                <span>${arma.dano}</span>
                <span>${arma.distancia}</span>
                <span>${arma.propiedad}</span>
            </div>

            <div class="fila-lineal">

                <div class="selectorStat"></div>

                <label>
                    <input type="checkbox" class="competenteCheck">
                    Competente
                </label>

                <div>
                    Ataque: <strong class="totalAtaque">+0</strong>
                </div>

                <div>
                    Daño: <strong class="totalDanio">${arma.dano} +0</strong>
                </div>

            </div>
        `;

        configurarCalculoArma(detalleDiv, arma);
    });
}

function renderArmaPersonalizada(container) {

    container.innerHTML = `
        <div class="fila-lineal">

            <input type="text" class="nombreCustom" placeholder="Nombre">

            <input type="text" class="dadoCustom" placeholder="1d8">

            <input type="text" class="distanciaCustom" placeholder="Toque / 30ft">

            <input type="text" class="propiedadCustom" placeholder="Propiedades">

        </div>

        <div class="fila-lineal">

            <label>Característica</label>
            <select class="statCustom">
                <option value="Fuerza">Fuerza</option>
                <option value="Destreza">Destreza</option>
                <option value="Constitucion">Constitucion</option>
                <option value="Inteligencia">Inteligencia</option>
                <option value="Sabiduria">Sabiduria</option>
                <option value="Carisma">Carisma</option>
            </select>

            <label>Bono mágico</label>
            <input type="number" class="bonusCustom" value="0" min="0">

            <label>
                <input type="checkbox" class="competenteCheck">
                Competente
            </label>

            <div>
                Ataque: <strong class="totalAtaque">+0</strong>
            </div>

            <div>
                Daño: <strong class="totalDanio">1d8 +0</strong>
            </div>

        </div>
    `;

    configurarCalculoPersonalizado(container);
}

function configurarCalculoPersonalizado(container) {

    const statSelect = container.querySelector(".statCustom");
    const bonusInput = container.querySelector(".bonusCustom");
    const check = container.querySelector(".competenteCheck");
    const dadoInput = container.querySelector(".dadoCustom");

    const totalSpan = container.querySelector(".totalAtaque");
    const danioSpan = container.querySelector(".totalDanio");

    function actualizar() {

        const mod = obtenerMod(statSelect.value);
        const competencia = check.checked ? obtenerCompetencia() : 0;
        const bonusMagico = parseInt(bonusInput.value) || 0;

        const totalAtaque = mod + competencia + bonusMagico;

        totalSpan.textContent = formatear(totalAtaque);

        danioSpan.textContent =
            `${dadoInput.value || "1d8"} ${formatear(mod + bonusMagico)}`;
    }

    statSelect.addEventListener("change", actualizar);
    bonusInput.addEventListener("input", actualizar);
    check.addEventListener("change", actualizar);
    dadoInput.addEventListener("input", actualizar);

    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
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