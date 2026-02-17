const tipoCombate = document.getElementById("tipoCombate");
const contenido = document.getElementById("combateContenido");

tipoCombate.addEventListener("change", () => {
    contenido.innerHTML = "";

    if (tipoCombate.value === "armas") {
        mostrarSelectorArmas();
    }

    if (tipoCombate.value === "desarmado") {
        mostrarDesarmado();
    }

    if (tipoCombate.value === "trucos") {
        mostrarTrucos();
    }
});
function mostrarSelectorArmas() {
    document.getElementById("contenedorSelectoresDinamicos").innerHTML = `
        <div class="selector-box">
            <label>Tipo</label>
            <select id="tipoArma">
                <option value="">-- Seleccionar --</option>
                <option value="simple">Simple</option>
                <option value="marcial">Marcial</option>
            </select>
        </div>

        <div class="selector-box" id="armaSelector"></div>
    `;

    document.getElementById("tipoArma")
        .addEventListener("change", function() {
            mostrarSelectorIndividual(this.value);
        });
}

function mostrarSelectorIndividual(tipo) {

    const selectorDiv = document.getElementById("armaSelector");
    const detalleDiv = document.getElementById("armaDetalle");

    detalleDiv.innerHTML = "";
    selectorDiv.innerHTML = "";

    if (!tipo) return;

    const armas = armasDB[tipo];

    let html = `
        <label>Arma</label>
        <select id="armaElegida">
            <option value="">-- Seleccionar arma --</option>
    `;

    for (let nombre in armas) {
        html += `<option value="${nombre}">${nombre}</option>`;
    }

    html += `</select>`;

    selectorDiv.innerHTML = html;

    document.getElementById("armaElegida")
        .addEventListener("change", function() {
            mostrarDetalleArma(tipo, this.value);
        });
}

function mostrarDetalleArma(tipo, nombre) {
    const detalleDiv = document.getElementById("armaDetalle");
    detalleDiv.innerHTML = "";

    if (!nombre) return;

    const arma = armasDB[tipo][nombre];

    detalleDiv.innerHTML = `
        <div class="combate-grid">
            <div><strong>${nombre}</strong></div>
            <div>Daño Base: ${arma.dano}</div>
            <div>Distancia: ${arma.distancia}</div>
            <div>Propiedades: ${arma.propiedad}</div>

            <div id="modificadorArma"></div>

            <label>
                <input type="checkbox" id="competenteArma">
                Competente
            </label>

            <div>
                Total Ataque: <span id="totalAtaque">+0</span>
            </div>

            <div>
                Daño Total: <span id="danioTotalArma">${arma.dano} +0</span>
            </div>
        </div>
    `;

    configurarCalculoAtaque(arma.caracteristica, arma.dano);
}



function resolverModificador(tipo) {

    function obtenerMod(statNombre) {
        const input = document.querySelector(`.stat[data-stat="${statNombre}"]`);
        if (!input) return 0;

        const modSpan = input.nextElementSibling;
        return parseInt(modSpan.textContent.replace("+","")) || 0;
    }

    const modFue = obtenerMod("Fuerza");
    const modDes = obtenerMod("Destreza");

    if (tipo === "fuerza") {
        return `Fue ${modFue >= 0 ? "+" : ""}${modFue}`;
    }

    if (tipo === "destreza") {
        return `Des ${modDes >= 0 ? "+" : ""}${modDes}`;
    }

    if (tipo === "fuerza_dest") {
        return `
            <label>Característica</label>
            <select id="selectorCaracteristica">
                <option value="fuerza">Fue ${modFue >= 0 ? "+" : ""}${modFue}</option>
                <option value="destreza">Des ${modDes >= 0 ? "+" : ""}${modDes}</option>
            </select>
        `;
    }

    return "";
}

function configurarCalculoAtaque(tipoCar, danoBase) {

    const check = document.getElementById("competenteArma");
    const totalSpan = document.getElementById("totalAtaque");
    const modDiv = document.getElementById("modificadorArma");
    const danioTotalSpan = document.getElementById("danioTotalArma");

    function obtenerMod(statNombre) {
        const input = document.querySelector(`.stat[data-stat="${statNombre}"]`);
        if (!input) return 0;

        const modSpan = input.nextElementSibling;
        return parseInt(modSpan.textContent.replace("+","")) || 0;
    }

    let selectorCar = null;

    if (tipoCar === "fuerza_dest") {
        modDiv.innerHTML = `
            <label>Característica</label>
            <select id="selectorCaracteristica">
                <option value="Fuerza">Fuerza</option>
                <option value="Destreza">Destreza</option>
            </select>
            <div id="modBaseTexto"></div>
        `;
        selectorCar = document.getElementById("selectorCaracteristica");
    } else {
        modDiv.innerHTML = `<div id="modBaseTexto"></div>`;
    }

    const modBaseTexto = document.getElementById("modBaseTexto");

    function actualizar() {

        let statElegida;

        if (tipoCar === "fuerza") statElegida = "Fuerza";
        if (tipoCar === "destreza") statElegida = "Destreza";
        if (tipoCar === "fuerza_dest") statElegida = selectorCar.value;

        const modBase = obtenerMod(statElegida);

        const competencia = parseInt(
            document.getElementById("competencia").value.replace("+","")
        ) || 0;

        let totalAtaque = modBase;

        if (check.checked) {
            totalAtaque += competencia;
        }

        // Texto modificador
        modBaseTexto.textContent =
            `Modificador Base: ${modBase >= 0 ? "+" : ""}${modBase}`;

        // Total ataque
        totalSpan.textContent =
            `${totalAtaque >= 0 ? "+" : ""}${totalAtaque}`;

        // Daño total (NO suma competencia)
        danioTotalSpan.textContent =
            `${danoBase} ${modBase >= 0 ? "+" : ""}${modBase}`;
    }

    check.addEventListener("change", actualizar);

    if (selectorCar) {
        selectorCar.addEventListener("change", actualizar);
    }

    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
}


function mostrarDesarmado() {
    contenido.innerHTML = `
        <div class="combate-grid">

            <div>
                <label>Dado</label>
                <select id="dadoDesarmado">
                    <option value="1d4">1d4</option>
                    <option value="1d6">1d6</option>
                    <option value="1d8">1d8</option>
                </select>
            </div>

            <div>
                <label>Característica</label>
                <select id="caracteristicaDesarmado">
                    <option value="Fuerza">Fuerza</option>
                    <option value="Destreza">Destreza</option>
                </select>
            </div>

            <label>
                <input type="checkbox" id="competenteDesarmado">
                Competente
            </label>

            <div>Distancia: Toque</div>

            <div id="modBaseDesarmado"></div>

            <div>
                Total Ataque: <span id="totalAtaqueDesarmado">+0</span>
            </div>

            <div>
                Daño Total: <span id="danioTotalDesarmado">1d4 +0</span>
            </div>

        </div>
    `;

    configurarDesarmado();
}

function mostrarTrucos() {

    let html = `
        <label>Seleccionar Truco</label>
        <select id="trucoSelect">
            <option value="">-- Seleccionar --</option>
    `;

    for (let t in trucosDB) {
        html += `<option value="${t}">${t}</option>`;
    }

    html += `</select><div id="trucoDetalle"></div>`;

    contenido.innerHTML = html;

    document.getElementById("trucoSelect").addEventListener("change", function() {

        const truco = trucosDB[this.value];
        const detalle = document.getElementById("trucoDetalle");

        if (!truco) return;

        detalle.innerHTML = `
            <div class="combate-grid">

                <div>Componentes: ${truco.componentes}</div>
                <div>Distancia: ${truco.distancia}</div>
                <div>Tipo: ${truco.tipo}</div>
                <div>${truco.dano || truco.efecto}</div>

                <div>
                    <label>Característica</label>
                    <select id="statTruco">
                        <option value="Inteligencia">Inteligencia</option>
                        <option value="Sabiduria">Sabiduria</option>
                        <option value="Carisma">Carisma</option>
                    </select>
                </div>

                <div id="resultadoTruco"></div>

            </div>
        `;

        configurarCalculoTruco(truco.tipo);
    });
}

function configurarCalculoTruco(tipoTruco) {

    const statSelect = document.getElementById("statTruco");
    const resultado = document.getElementById("resultadoTruco");

    function obtenerMod(statNombre) {

        const input = document.querySelector(`.stat[data-stat="${statNombre}"]`);
        if (!input) return 0;

        const modSpan = input.nextElementSibling;
        return parseInt(modSpan.textContent.replace("+","")) || 0;
    }

    function actualizar() {

        const statElegida = statSelect.value;

        const mod = obtenerMod(statElegida);

        const competencia = parseInt(
            document.getElementById("competencia").value.replace("+","")
        ) || 0;

        if (tipoTruco === "ataque") {

            const total = mod + competencia;

            resultado.innerHTML =
                `Bonificador Ataque: ${total >= 0 ? "+" : ""}${total}`;

        }

        if (tipoTruco === "salvacion") {

            const cd = 8 + competencia + mod;

            resultado.innerHTML =
                `CD Salvación: ${cd}`;

        }
    }

    statSelect.addEventListener("change", actualizar);
    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
}


function configurarDesarmado() {

    const dadoSelect = document.getElementById("dadoDesarmado");
    const statSelect = document.getElementById("caracteristicaDesarmado");
    const check = document.getElementById("competenteDesarmado");

    const modBaseTexto = document.getElementById("modBaseDesarmado");
    const totalAtaqueSpan = document.getElementById("totalAtaqueDesarmado");
    const danioTotalSpan = document.getElementById("danioTotalDesarmado");

    function obtenerMod(statNombre) {
        const input = document.querySelector(`.stat[data-stat="${statNombre}"]`);
        if (!input) return 0;

        const modSpan = input.nextElementSibling;
        return parseInt(modSpan.textContent.replace("+","")) || 0;
    }

    function actualizar() {

        const statElegida = statSelect.value;
        const modBase = obtenerMod(statElegida);

        const competencia = parseInt(
            document.getElementById("competencia").value.replace("+","")
        ) || 0;

        let totalAtaque = modBase;

        if (check.checked) {
            totalAtaque += competencia;
        }

        const dado = dadoSelect.value;

        modBaseTexto.textContent =
            `Modificador Base: ${modBase >= 0 ? "+" : ""}${modBase}`;

        totalAtaqueSpan.textContent =
            `${totalAtaque >= 0 ? "+" : ""}${totalAtaque}`;

        danioTotalSpan.textContent =
            `${dado} ${modBase >= 0 ? "+" : ""}${modBase}`;
    }

    dadoSelect.addEventListener("change", actualizar);
    statSelect.addEventListener("change", actualizar);
    check.addEventListener("change", actualizar);

    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
}
