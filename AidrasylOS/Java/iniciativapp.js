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
    const destreza = document.getElementById("stat-Destreza");

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
    const sabiduria = document.getElementById("stat-Sabiduria");
    if(!sabiduria) return;

    const modSab = calcularMod(parseInt(sabiduria.value) || 10);

    let bonus = modSab;

    // buscar skill Percepción correctamente
    const prof = document.getElementById("prof-Sabiduria-Percepción")?.checked;
    const exp = document.getElementById("exp-Sabiduria-Percepción")?.checked;

    if (exp) {
        bonus += competencia * 2;
    } else if (prof) {
        bonus += competencia;
    }

    document.getElementById("percepcionPasiva").textContent =
        10 + bonus;
}