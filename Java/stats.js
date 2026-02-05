document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("caracteristicas");

    const datos = {
        Fuerza: ["Atletismo"],
        Destreza: ["Acrobacias", "Juego de Manos", "Sigilo"],
        Constitucion: [],
        Sabiduria: ["T. con Animales", "Medicina", "Percepción", "Perspicacia", "Supervivencia"],
        Carisma: ["Engaño", "Interpretación", "Intimidación", "Persuasión"]
    };

    const formato = n => n >= 0 ? "+"+n : n;
    const calcularMod = v => Math.floor((v - 10)/2);

    function crearStat(nombre, habilidades){

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${nombre}</h3>
            Valor:
            <input type="number" value="10" min="1" max="30"
                   class="stat" data-stat="${nombre}">
            Mod:
            <span class="mod">+0</span>
            <br><br>
        `;

        habilidades.forEach(hab=>{
            div.innerHTML += `
                <div class="skill-row" data-skill="${hab}">
                    ${hab}
                    <input type="checkbox" class="skill-prof"> C
                    <input type="checkbox" class="skill-exp"> E
                    <span class="skill-total">+0</span>
                </div>
            `;
        });

        contenedor.appendChild(div);
    }

    Object.entries(datos).forEach(([stat, hab])=>{
        crearStat(stat, hab);
    });

    function actualizar(){

        const competencia = parseInt(
            document.getElementById("competencia").value.replace("+","")
        ) || 0;

        document.querySelectorAll(".stat").forEach(input=>{

            let valor = parseInt(input.value) || 10;
            valor = Math.min(30, Math.max(1, valor));
            input.value = valor;

            const mod = calcularMod(valor);
            input.nextElementSibling.textContent = formato(mod);

            const bloque = input.parentElement;

            bloque.querySelectorAll(".skill-row").forEach(row=>{

                let total = mod;

                if(row.querySelector(".skill-prof").checked)
                    total += competencia;

                if(row.querySelector(".skill-exp").checked)
                    total += competencia;

                row.querySelector(".skill-total").textContent =
                    formato(total);
            });
        });
    }

    document.addEventListener("input", actualizar);
    document.addEventListener("change", actualizar);

    actualizar();
});
