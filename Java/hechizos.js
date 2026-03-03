// ===============================
// BLOQUE HECHIZOS DINÁMICO
// ===============================

document.addEventListener("DOMContentLoaded", iniciarHechizos);

function iniciarHechizos() {
    const contenedor = document.getElementById("bloquehechizos");
    if (!contenedor) return;

    contenedor.appendChild(crearBloqueHechizos(1));
    contenedor.appendChild(crearBloqueHechizos(2));
}

// ===============================
// CREAR BLOQUE PRINCIPAL
// ===============================

function crearBloqueHechizos(indice) {

    const bloque = document.createElement("div");
    bloque.className = "bloque-hechizos";

    bloque.innerHTML = `
        <div class="hechizos-header">
            <h3 class="hechizos-titulo">Conjuros</h3>
            <button class="toggle-hechizos">▼</button>
        </div>

        <div class="hechizos-contenido" style="display:none;">

            <div class="fila-hechizos">

                <div>
                    <label>Clase</label>
                    <select class="clase-hechizo">
                        <option value="">-- Clase --</option>
                        <option>Mago</option>
                        <option>Clérigo</option>
                        <option>Druida</option>
                        <option>Bardo</option>
                        <option>Brujo</option>
                        <option>Paladín</option>
                        <option>Explorador</option>
                        <option>Hechicero</option>
                    </select>
                </div>

                <div>
                    <label>Nivel</label>
                    <input type="number" class="nivel-hechizo" min="1" max="30" value="1">
                </div>

                <div>
                    <label>Característica</label>
                    <select class="stat-hechizo">
                        <option>Fuerza</option>
                        <option>Destreza</option>
                        <option>Constitucion</option>
                        <option>Inteligencia</option>
                        <option>Sabiduria</option>
                        <option>Carisma</option>
                    </select>
                </div>

            </div>

            <div class="fila-calculos">

                <div class="mini-calc">
                    <label>CD Salvación</label>
                    <span class="cd-salvacion">8</span>
                </div>

                <div class="mini-calc">
                    <label>Bonif. Ataque</label>
                    <span class="ataque-hechizo">+0</span>
                </div>

            </div>

            <div class="espacios-container"></div>

            <div class="lista-conjuros"></div>

            <button class="btn-add-conjuro">+ Añadir Conjuro</button>

        </div>
    `;

    // Eventos
    const toggle = bloque.querySelector(".toggle-hechizos");
    const contenido = bloque.querySelector(".hechizos-contenido");
    const claseSelect = bloque.querySelector(".clase-hechizo");
    const nivelInput = bloque.querySelector(".nivel-hechizo");
    const statSelect = bloque.querySelector(".stat-hechizo");

    toggle.addEventListener("click", () => {
        contenido.style.display =
            contenido.style.display === "none" ? "block" : "none";
    });

    claseSelect.addEventListener("change", () => {
        const titulo = bloque.querySelector(".hechizos-titulo");
        const clase = claseSelect.value;
        titulo.textContent = clase ? `Conjuros (${clase})` : "Conjuros";
    });

    nivelInput.addEventListener("input", () => {
        generarEspacios(bloque);
        actualizarCalculosHechizo(bloque);
    });

    statSelect.addEventListener("change", () => {
        actualizarCalculosHechizo(bloque);
    });

    bloque.querySelector(".btn-add-conjuro")
        .addEventListener("click", () => agregarConjuro(bloque));

    generarEspacios(bloque);
    actualizarCalculosHechizo(bloque);

    return bloque;
}

// ===============================
// CÁLCULOS
// ===============================

function actualizarCalculosHechizo(bloque) {

    const competencia = parseInt(
        document.getElementById("competencia")?.value.replace("+","")
    ) || 0;

    const statSeleccionada = bloque.querySelector(".stat-hechizo").value;
    const statInput = document.querySelector(`[data-stat="${statSeleccionada}"]`);

    const valorStat = parseInt(statInput?.value) || 10;
    const mod = Math.floor((valorStat - 10) / 2);

    const cd = 8 + competencia + mod;
    const ataque = competencia + mod;

    bloque.querySelector(".cd-salvacion").textContent = cd;
    bloque.querySelector(".ataque-hechizo").textContent =
        ataque >= 0 ? "+" + ataque : ataque;
}

// ===============================
// ESPACIOS DE CONJURO (Simplificado PHB)
// ===============================

function generarEspacios(bloque) {

    const nivel = parseInt(
        bloque.querySelector(".nivel-hechizo").value
    ) || 1;

    const contenedor = bloque.querySelector(".espacios-container");
    contenedor.innerHTML = "";

    const tabla = {
        1: [2],
        2: [3],
        3: [4,2],
        4: [4,3],
        5: [4,3,2],
        6: [4,3,3],
        7: [4,3,3,1],
        8: [4,3,3,2],
        9: [4,3,3,3,1]
    };

    const niveles = tabla[Math.min(nivel,9)] || [4,3,3,3,2,1];

    niveles.forEach((cantidad, i) => {

        const fila = document.createElement("div");
        fila.className = "fila-espacio";

        fila.innerHTML = `
            <span>Nivel ${i+1} (${cantidad})</span>
            <div class="marcadores"></div>
        `;

        const marcadores = fila.querySelector(".marcadores");

        for (let j=0; j<cantidad; j++){
            const box = document.createElement("input");
            box.type = "checkbox";
            marcadores.appendChild(box);
        }

        contenedor.appendChild(fila);
    });
}

// ===============================
// CONJUROS DINÁMICOS
// ===============================

function agregarConjuro(bloque){

    const lista = bloque.querySelector(".lista-conjuros");

    const conjuro = document.createElement("div");
    conjuro.className = "conjuro-item";

    conjuro.innerHTML = `
        <div class="conjuro-header">
            <span>Conjuro</span>
            <button class="toggle-conjuro">▼</button>
            <button class="eliminar-conjuro">X</button>
        </div>

        <div class="conjuro-body" style="display:none;">
            <label>Nivel</label>
            <select class="nivel-conjuro">
                <option value="0">Truco</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>

            <div class="descripcion-conjuro">
                <p><strong>Escuela:</strong></p>
                <p><strong>Tiempo:</strong></p>
                <p><strong>Rango:</strong></p>
                <p><strong>Componentes:</strong></p>
                <p><strong>Duración:</strong></p>
                <p><strong>Descripción:</strong></p>
                <p><strong>Superior:</strong></p>
            </div>
        </div>
    `;

    conjuro.querySelector(".toggle-conjuro")
        .addEventListener("click", () => {
            const body = conjuro.querySelector(".conjuro-body");
            body.style.display =
                body.style.display === "none" ? "block" : "none";
        });

    conjuro.querySelector(".eliminar-conjuro")
        .addEventListener("click", () => conjuro.remove());

    lista.appendChild(conjuro);
}