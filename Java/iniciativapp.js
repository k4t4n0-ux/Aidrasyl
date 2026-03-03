document.addEventListener("input", actualizarCombate);
document.addEventListener("change", actualizarCombate);

function calcularMod(valor){
    return Math.floor((valor - 10) / 2);
}

function actualizarCombate(){

    const competencia = parseInt(
        document.getElementById("competencia").value.replace("+","")
    ) || 0;

    // ===== INICIATIVA =====
    const destreza = document.querySelector('[data-stat="Destreza"]');

    if (destreza) {

        const modDes = calcularMod(parseInt(destreza.value) || 10);

        const bonificadorExtra = parseInt(
            document.getElementById("bonificadorIniciativa")?.value
        ) || 0;

        const totalIniciativa = modDes + bonificadorExtra;

        document.getElementById("iniciativa").textContent =
            totalIniciativa >= 0 ? "+" + totalIniciativa : totalIniciativa;
    }

    // ===== PERCEPCIÓN PASIVA =====
    const sabiduria = document.querySelector('[data-stat="Sabiduria"]');
    if(!sabiduria) return;

    const modSab = calcularMod(parseInt(sabiduria.value) || 10);

    let bonus = modSab;

    // buscar skill Percepción correctamente
    const skills = document.querySelectorAll(".skill-row");

    skills.forEach(row=>{
        if(row.dataset.skill === "Percepción"){
            const prof = row.querySelector(".skill-prof").checked;
            const exp = row.querySelector(".skill-exp").checked;

            if(prof) bonus += competencia;
            if(exp) bonus += competencia;
        }
    });

    document.getElementById("percepcionPasiva").textContent =
        10 + bonus;
}

actualizarCombate();