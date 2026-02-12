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
    contenido.innerHTML = `
        <label>Tipo</label>
        <select id="tipoArma">
            <option value="">-- Seleccionar --</option>
            <option value="simple">Simple</option>
            <option value="marcial">Marcial</option>
        </select>

        <div id="armaSelector"></div>
        <div id="armaDetalle"></div>
    `;

    document.getElementById("tipoArma").addEventListener("change", function() {
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

    document.getElementById("armaElegida").addEventListener("change", function() {
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
            <div>Daño: ${arma.dano}</div>
            <div>Distancia: ${arma.distancia}</div>
            <div>Propiedades: ${arma.propiedad}</div>
            <div>${resolverModificador(arma.caracteristica)}</div>
        </div>
    `;
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

function mostrarDesarmado() {
    contenido.innerHTML = `
        <div class="combate-grid">
            <div>
                <label>Dado</label>
                <select>
                    <option>1d4</option>
                    <option>1d6</option>
                    <option>1d8</option>
                </select>
            </div>

            <div>
                <label>Característica</label>
                <select>
                    <option>Fuerza</option>
                    <option>Destreza</option>
                </select>
            </div>

            <div>Distancia: Toque</div>
        </div>
    `;
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
            </div>
        `;
    });
}
