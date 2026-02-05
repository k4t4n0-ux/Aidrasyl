document.addEventListener("DOMContentLoaded", () => {

    const competenciaInput = document.getElementById("competencia");
    const contenedor = document.getElementById("caracteristicas");

    const datos = {
        Fuerza: ["Atletismo"],
        Destreza: ["Acrobacias", "Juego de Manos", "Sigilo"],
        Constitucion: [],
        Sabiduria: ["T. con Animales", "Medicina", "Percepción", "Perspicacia", "Supervivencia"],
        Carisma: ["Engaño", "Interpretación", "Intimidación", "Persuasión"]
    };

    const formato = n => n >= 0 ? "+" + n : n;
    const calcularMod = v => Math.floor((v - 10) / 2);
    const getCompetencia = () => parseInt(competenciaInput.value.replace("+", "")) || 0;

    function crearSeccion(nombre, habilidades) {

        const div = document.createElement("div");
        div.style.marginBottom = "20px";

        div.innerHTML = `
            <h3>${nombre}</h3>
            Valor: <input type="number" value="10" min="1" max="30" class="stat" data-stat="${nombre}">
            Mod: <span class="mod" data-mod="${nombre}">+0</span>
            Salvación:
            <input type="checkbox" class="save-prof" data-save="${nombre}">
            <span class="save-total" data-save-total="${nombre}">+0</span>
            <br><br>
        `;

        habilidades.forEach(hab => {
            div.innerHTML += `
                ${hab}
                <input type="checkbox" class="skill-prof" data-base="${nombre}">
                C
                <input type="checkbox" class="skill-exp">
                E
                <span class="skill-total">+0</span>
                <br>
            `;
        });

        contenedor.appendChild(div);
    }

    Object.entries(datos).forEach(([stat, habilidades]) =>
        crearSeccion(stat, habilidades)
    );

    function actualizarTodo() {

        const competencia = getCompetencia();

        // ===== CARACTERÍSTICAS Y SALVACIONES =====
        document.querySelectorAll(".stat").forEach(input => {

            let valor = parseInt(input.value) || 10;
            valor = Math.min(30, Math.max(1, valor));
            input.value = valor;

            const stat = input.dataset.stat;
            const mod = calcularMod(valor);

            document.querySelector(`[data-mod="${stat}"]`).textContent = formato(mod);

            const saveCheck = document.querySelector(`[data-save="${stat}"]`);
            const saveTotal = mod + (saveCheck.checked ? competencia : 0);

            document.querySelector(`[data-save-total="${stat}"]`)
                .textContent = formato(saveTotal);
        });

        // ===== HABILIDADES =====
        document.querySelectorAll(".skill-total").forEach(span => {

            const bloque = span.parentElement;
            const prof = bloque.querySelector(".skill-prof");
            const exp = bloque.querySelector(".skill-exp");

            const baseStat = prof.dataset.base;
            const statInput = document.querySelector(`[data-stat="${baseStat}"]`);

            const mod = calcularMod(parseInt(statInput.value) || 10);

            let total = mod;
            if (prof.checked) total += competencia;
            if (exp.checked) total += competencia;

            span.textContent = formato(total);
        });

        // ===== INICIATIVA =====
        const modDes = calcularMod(
            parseInt(document.querySelector('[data-stat="Destreza"]').value) || 10
        );
        document.getElementById("iniciativa").textContent = formato(modDes);

        // ===== VELOCIDAD =====
        const velocidadInput = document.getElementById("velocidad");
        velocidadInput.value = Math.max(1, parseInt(velocidadInput.value) || 1);

        // ===== PERCEPCIÓN PASIVA =====
        const modSab = calcularMod(
            parseInt(document.querySelector('[data-stat="Sabiduria"]').value) || 10
        );

        const percepcionBloque = [...document.querySelectorAll(".skill-total")]
            .find(span => span.previousSibling?.textContent?.includes("Percepción"));

        let percepcionBonus = modSab;

        if (percepcionBloque) {
            const bloque = percepcionBloque.parentElement;
            const prof = bloque.querySelector(".skill-prof");
            const exp = bloque.querySelector(".skill-exp");

            if (prof.checked) percepcionBonus += competencia;
            if (exp.checked) percepcionBonus += competencia;
        }

        document.getElementById("percepcionPasiva").textContent =
            10 + percepcionBonus;
    }

    document.addEventListener("input", actualizarTodo);
    document.addEventListener("change", actualizarTodo);

    actualizarTodo();
});
