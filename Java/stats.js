document.addEventListener("DOMContentLoaded", function() {

    const nivelInput = document.getElementById("nivel");
    const competenciaInput = document.getElementById("competencia");
    const contenedor = document.getElementById("caracteristicas");

    const datos = {
        Fuerza: ["Atletismo"],
        Destreza: ["Acrobacias", "Juego de Manos", "Sigilo"],
        Constitucion: [],
        Sabiduria: ["T. con Animales", "Medicina", "Percepción", "Perspicacia", "Supervivencia"],
        Carisma: ["Engaño", "Interpretación", "Intimidación", "Persuasión"]
    };

    function crearSeccion(nombre, habilidades) {

        const div = document.createElement("div");
        div.style.marginBottom = "20px";

        div.innerHTML = `
            <h3>${nombre}</h3>
            Valor: <input type="number" value="10" min="1" max="30" class="stat" data-stat="${nombre}">
            Mod: <span class="mod" data-mod="${nombre}">0</span>
            Salvación:
            <input type="checkbox" class="save-prof" data-save="${nombre}">
            <span class="save-total" data-save-total="${nombre}">0</span>
            <br><br>
        `;

        habilidades.forEach(hab => {
            div.innerHTML += `
                ${hab} 
                <input type="checkbox" class="skill-prof" data-skill="${hab}" data-base="${nombre}">
                C
                <input type="checkbox" class="skill-exp" data-exp="${hab}" data-base="${nombre}">
                E
                <span class="skill-total" data-skill-total="${hab}">0</span>
                <br>
            `;
        });

        contenedor.appendChild(div);
    }

    Object.entries(datos).forEach(([stat, habilidades]) => {
        crearSeccion(stat, habilidades);
    });

    function getCompetencia() {
        return parseInt(competenciaInput.value.replace("+", "")) || 0;
    }

    function calcularMod(valor) {
        return Math.floor((valor - 10) / 2);
    }

    function actualizarTodo() {

        const competencia = getCompetencia();

        document.querySelectorAll(".stat").forEach(input => {

            const stat = input.dataset.stat;

            let valor = parseInt(input.value) || 10;

            // Limitar entre 1 y 30
            if (valor < 1) valor = 1;
            if (valor > 30) valor = 30;

            input.value = valor;

            const mod = calcularMod(valor);

            document.querySelector(`[data-mod="${stat}"]`).textContent =
                mod >= 0 ? "+" + mod : mod;

            // Salvación
            const saveCheck = document.querySelector(`[data-save="${stat}"]`);
            let saveTotal = mod;

            if (saveCheck.checked) {
                saveTotal += competencia;
            }

            document.querySelector(`[data-save-total="${stat}"]`).textContent =
                saveTotal >= 0 ? "+" + saveTotal : saveTotal;
        });

        // Habilidades
        document.querySelectorAll(".skill-total").forEach(span => {

            const skill = span.dataset.skillTotal;

            const profCheck = document.querySelector(`[data-skill="${skill}"]`);
            const base = profCheck.dataset.base;

            const statInput = document.querySelector(`[data-stat="${base}"]`);
            const mod = calcularMod(parseInt(statInput.value) || 10);

            const expCheck = document.querySelector(`[data-exp="${skill}"]`);

            let total = mod;

            if (profCheck.checked) total += competencia;
            if (expCheck.checked) total += competencia;

            span.textContent = total >= 0 ? "+" + total : total;
        });
    }

    document.addEventListener("input", actualizarTodo);
    document.addEventListener("change", actualizarTodo);

    actualizarTodo();
});
