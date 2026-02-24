const tipoCombate = document.getElementById("tipoCombate");
const contenido = document.getElementById("combateContenido");

/* ================================
   UTILIDADES
================================ */

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

function formatear(num) {
    return num >= 0 ? `+${num}` : num;
}

/* ================================
   INICIAR SISTEMA
================================ */

tipoCombate.addEventListener("change", () => {

    contenido.innerHTML = `
        <div id="listaAtaques"></div>
        <button id="agregarAtaqueBtn">+ Añadir Ataque</button>
    `;

    document.getElementById("agregarAtaqueBtn")
        .addEventListener("click", agregarBloqueVacio);

    agregarBloqueVacio(); // Primer bloque automático
});

/* ================================
   CREAR BLOQUE INDEPENDIENTE
================================ */

function agregarBloqueVacio() {

    const lista = document.getElementById("listaAtaques");

    const wrapper = document.createElement("div");
    wrapper.classList.add("bloque-wrapper");

    wrapper.innerHTML = `
        <div class="fila-lineal selector-tipo-bloque">
            <label>Tipo</label>
            <select class="tipoBloque">
                <option value="">--</option>
                <option value="armas">Armas</option>
                <option value="desarmado">Desarmado</option>
                <option value="trucos">Trucos</option>
            </select>
        </div>

        <div class="contenidoBloque"></div>
        <hr>
    `;

    lista.appendChild(wrapper);

    const tipoSelect = wrapper.querySelector(".tipoBloque");
    const contenidoBloque = wrapper.querySelector(".contenidoBloque");
    const contenidoInline = wrapper.querySelector(".contenidoInline");

    tipoSelect.addEventListener("change", () => {

        contenidoBloque.innerHTML = "";
        contenidoInline.innerHTML = "";

        if (tipoSelect.value === "armas")
            renderArmas(contenidoBloque, contenidoInline);

        if (tipoSelect.value === "desarmado")
            renderDesarmado(contenidoBloque);

        if (tipoSelect.value === "trucos")
            renderTrucos(contenidoBloque, contenidoInline);
    });
}

/* ================================
   ARMAS
================================ */

function renderArmas(container, inlineContainer) {

    inlineContainer.innerHTML = `
        <select class="tipoArma">
            <option value="">Tipo arma</option>
            <option value="simple">Simple</option>
            <option value="marcial">Marcial</option>
        </select>

        <select class="armaSelect">
            <option value="">Arma</option>
        </select>
    `;

    const tipoSelect = container.querySelector(".tipoArma");
    const armaSelect = container.querySelector(".armaSelect");
    const detalleDiv = container.querySelector(".detalleArma");

    tipoSelect.addEventListener("change", () => {

        armaSelect.innerHTML = `<option value="">--</option>`;
        detalleDiv.innerHTML = "";

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
        `;

        configurarCalculoArma(detalleDiv, arma);
    });
}

function configurarCalculoArma(detalleDiv, arma) {

    const statDiv = detalleDiv.querySelector(".selectorStat");
    const check = detalleDiv.querySelector(".competenteCheck");
    const totalSpan = detalleDiv.querySelector(".totalAtaque");
    const danioSpan = detalleDiv.querySelector(".totalDanio");

    let statActual;

    if (arma.caracteristica === "fuerza_dest") {

        statDiv.innerHTML = `
            <select class="statSelect">
                <option value="Fuerza">Fuerza</option>
                <option value="Destreza">Destreza</option>
            </select>
        `;

        statActual = "Fuerza";

    } else {

        statActual = arma.caracteristica === "fuerza" ? "Fuerza" : "Destreza";
        statDiv.innerHTML = `<span>${statActual}</span>`;
    }

    const statSelect = detalleDiv.querySelector(".statSelect");

    function actualizar() {

        if (statSelect) statActual = statSelect.value;

        const mod = obtenerMod(statActual);
        const competencia = check.checked ? obtenerCompetencia() : 0;

        totalSpan.textContent = formatear(mod + competencia);
        danioSpan.textContent = `${arma.dano} ${formatear(mod)}`;
    }

    if (statSelect) statSelect.addEventListener("change", actualizar);
    check.addEventListener("change", actualizar);

    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
}

/* ================================
   DESARMADO
================================ */

function renderDesarmado(container) {

    container.innerHTML = `
        <div class="fila-lineal encabezado-ataque">
            <strong>Golpe Desarmado</strong>
            <span>Distancia: Toque</span>
        </div>

        <div class="fila-lineal">

            <select class="dadoSelect">
                <option>1d4</option>
                <option>1d6</option>
                <option>1d8</option>
            </select>

            <select class="statSelect">
                <option value="Fuerza">Fuerza</option>
                <option value="Destreza">Destreza</option>
            </select>

            <label>
                <input type="checkbox" class="competenteCheck">
                Competente
            </label>

            <div>
                Ataque: <strong class="totalAtaque">+0</strong>
            </div>

            <div>
                Daño: <strong class="totalDanio">1d4 +0</strong>
            </div>

        </div>
    `;

    const dado = container.querySelector(".dadoSelect");
    const stat = container.querySelector(".statSelect");
    const check = container.querySelector(".competenteCheck");
    const total = container.querySelector(".totalAtaque");
    const danio = container.querySelector(".totalDanio");

    function actualizar() {

        const mod = obtenerMod(stat.value);
        const competencia = check.checked ? obtenerCompetencia() : 0;

        total.textContent = formatear(mod + competencia);
        danio.textContent = `${dado.value} ${formatear(mod)}`;
    }

    dado.addEventListener("change", actualizar);
    stat.addEventListener("change", actualizar);
    check.addEventListener("change", actualizar);

    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
}

/* ================================
   TRUCOS
================================ */

function renderTrucos(container) {

    container.innerHTML = `
        <div class="fila-lineal">
            <label>Truco</label>
            <select class="trucoSelect">
                <option value="">--</option>
            </select>
        </div>

        <div class="detalleTruco"></div>
    `;

    const select = container.querySelector(".trucoSelect");
    const detalle = container.querySelector(".detalleTruco");

    for (let t in trucosDB) {
        select.innerHTML += `<option value="${t}">${t}</option>`;
    }

    select.addEventListener("change", () => {

        detalle.innerHTML = "";

        const truco = trucosDB[select.value];
        if (!truco) return;

        detalle.innerHTML = `
            <div class="fila-lineal encabezado-ataque">
                <strong>${select.value}</strong>
                <span>${truco.componentes}</span>
                <span>${truco.distancia}</span>
                <span>${truco.tipo}</span>
            </div>

            <div class="fila-lineal">

                <select class="statSelect">
                    <option value="Inteligencia">Inteligencia</option>
                    <option value="Sabiduria">Sabiduria</option>
                    <option value="Carisma">Carisma</option>
                </select>

                <div class="resultado"></div>

            </div>
        `;

        configurarTruco(detalle, truco);
    });
}

function configurarTruco(detalle, truco) {

    const statSelect = detalle.querySelector(".statSelect");
    const resultado = detalle.querySelector(".resultado");

    function actualizar() {

        const mod = obtenerMod(statSelect.value);
        const competencia = obtenerCompetencia();

        if (truco.tipo === "ataque") {
            resultado.textContent = `Ataque: ${formatear(mod + competencia)}`;
        }

        if (truco.tipo === "salvacion") {
            resultado.textContent = `CD: ${8 + competencia + mod}`;
        }
    }

    statSelect.addEventListener("change", actualizar);
    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
}