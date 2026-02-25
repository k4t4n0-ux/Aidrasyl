const dotesDB = {

    "Iniciado Mágico": {
        descripcion: "Aprendes dos trucos de una clase a tu elección y un conjuro de nivel 1 que puedes lanzar una vez por descanso largo sin gastar espacio de conjuro."
    },

    "Resistente": {
        descripcion: "Aumenta una característica en 1 y obtienes competencia en las tiradas de salvación de esa característica."
    },

    "Alerta": {
        descripcion: "+5 a iniciativa, no puedes ser sorprendido mientras estés consciente y criaturas ocultas no obtienen ventaja contra ti por estar ocultas."
    }

};

const bloque = document.getElementById("bloqueDoteTransfondo");

if (bloque) {

    bloque.innerHTML = `
        <div class="dote-container">

            <div class="dote-header">
                <strong>Dote de Transfondo</strong>
                <button class="toggleDote">▼</button>
            </div>

            <div class="dote-body">
                <select class="doteSelect">
                    <option value="">Seleccionar Dote</option>
                    ${Object.keys(dotesDB)
                        .map(d => `<option value="${d}">${d}</option>`)
                        .join("")}
                </select>

                <div class="doteInfo"></div>
            </div>

        </div>
    `;

    const toggle = bloque.querySelector(".toggleDote");
    const body = bloque.querySelector(".dote-body");
    const select = bloque.querySelector(".doteSelect");
    const info = bloque.querySelector(".doteInfo");

    // Empieza cerrada
    body.style.display = "none";

    toggle.addEventListener("click", () => {
        const abierta = body.style.display === "block";
        body.style.display = abierta ? "none" : "block";
        toggle.textContent = abierta ? "▼" : "▲";
    });

    select.addEventListener("change", () => {

        const dote = dotesDB[select.value];

        if (!dote) {
            info.innerHTML = "";
            return;
        }

        info.innerHTML = `
            <hr>
            <p>${dote.descripcion}</p>
        `;
    });
}