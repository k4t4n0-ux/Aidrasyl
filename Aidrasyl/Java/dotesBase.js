function crearSistemaDotes({
    contenedorId,
    titulo,
    tipoTexto,
    db,
    storageKey
}) {
    const bloque = document.getElementById(contenedorId);
    if (!bloque) return;

    bloque.innerHTML = `
        <div class="dote-bloque-unico">
            <div class="dote-bloque-header">
                <strong>${titulo}</strong>
            </div>

            <div class="listaDotes"></div>

            <div class="dote-bloque-footer">
                <button class="btnAgregarDote">
                    + Añadir ${tipoTexto}
                </button>
            </div>
        </div>
    `;

    const lista = bloque.querySelector(".listaDotes");
    const btnAgregar = bloque.querySelector(".btnAgregarDote");

    /* ==========================
       GUARDAR
    ========================== */

    function guardar() {
        const datos = [];

        lista.querySelectorAll(".dote-item").forEach(item => {
            const select = item.querySelector(".doteSelect");

            datos.push({
                valor: select.value
            });
        });

        localStorage.setItem(storageKey, JSON.stringify(datos));
    }

    /* ==========================
       CREAR ITEM
    ========================== */

    function crearItem(data = {}) {

        const contenedor = document.createElement("div");
        contenedor.classList.add("dote-item");

        contenedor.innerHTML = `
            <div class="dote-header">
                <strong class="tituloDote">${tipoTexto}</strong>

                <div class="dote-header-botones">
                    <button class="toggleDote">▼</button>
                    <button class="btnEliminarDote">✖</button>
                </div>
            </div>

            <div class="dote-body" style="display: none;">
                <select class="doteSelect">
                    <option value="">Seleccionar ${tipoTexto}</option>
                    ${Object.keys(db)
                        .sort((a, b) => a.localeCompare(b))
                        .map(d => `<option value="${d}">${d}</option>`)
                        .join("")}
                </select>

                <div class="doteInfo"></div>
            </div>
        `;

        const toggle = contenedor.querySelector(".toggleDote");
        const body = contenedor.querySelector(".dote-body");
        const select = contenedor.querySelector(".doteSelect");
        const info = contenedor.querySelector(".doteInfo");
        const btnEliminar = contenedor.querySelector(".btnEliminarDote");
        const titulo = contenedor.querySelector(".tituloDote");

        /* ===== TOGGLE ===== */
        toggle.addEventListener("click", () => {
            const abierta = body.style.display === "block";
            body.style.display = abierta ? "none" : "block";
            toggle.textContent = abierta ? "▼" : "▲";
        });

        /* ===== CAMBIO ===== */
        function actualizarVista() {
            const nombre = select.value;
            const dote = db[nombre];

            titulo.textContent = nombre
                ? `${tipoTexto} (${nombre})`
                : tipoTexto;

            if (!dote) {
                info.innerHTML = "";
                return;
            }

            info.innerHTML = `
                <hr>
                <p class="dote-descripcion">${dote.descripcion}</p>
            `;
        }

        select.addEventListener("change", () => {
            actualizarVista();
            guardar();
        });

        /* ===== ELIMINAR ===== */
        btnEliminar.addEventListener("click", () => {
            contenedor.remove();
            guardar();
        });

        /* ===== CARGAR DATA ===== */
        if (data.valor) {
            select.value = data.valor;
            actualizarVista();
        }

        lista.appendChild(contenedor);
    }

    /* ==========================
       CARGAR
    ========================== */

    function cargar() {
        const data = localStorage.getItem(storageKey);

        if (!data) {
            crearItem(); // uno por defecto
            return;
        }

        try {
            const listaDatos = JSON.parse(data);

            if (listaDatos.length === 0) {
                return;
            }

            listaDatos.forEach(d => crearItem(d));

        } catch (e) {
            console.error("Error cargando dotes:", e);
            crearItem();
        }
    }

    /* ==========================
       INIT
    ========================== */

    btnAgregar.addEventListener("click", () => {
        crearItem();
        guardar();
    });

    cargar();
}