const subclases = {
    artificiero: ["Artificiero 1", "Artificiero 2", "Artificiero 3"],
    barbaro: ["Bárbaro 1", "Bárbaro 2"],
    bardo: ["Bardo 1", "Bardo 2", "Bardo 3"],
    clerigo: ["Clérigo 1", "Clérigo 2"],
    druida: ["Druida 1", "Druida 2"],
    luchador: ["Luchador 1", "Luchador 2", "Luchador 3"],
    monje: ["Monje 1", "Monje 2"],
    paladin: ["Paladín 1", "Paladín 2"],
    explorador: ["Explorador 1", "Explorador 2"],
    picaro: ["Pícaro 1", "Pícaro 2"],
    hechicero: ["Hechicero 1", "Hechicero 2"],
    brujo: ["Brujo 1", "Brujo 2"],
    mago: ["Mago 1", "Mago 2", "Mago 3"],
    cazador_sangre: ["Cazador 1", "Cazador 2"],
    psionico: ["Psiónico 1", "Psiónico 2"]
};

const claseSelect = document.getElementById("clase");
const subclaseSelect = document.getElementById("subclase");

claseSelect.addEventListener("change", function() {

    const claseSeleccionada = this.value;

    // Reiniciar subclases
    subclaseSelect.innerHTML = '<option value="">-- Selecciona una subclase --</option>';

    if (subclases[claseSeleccionada]) {
        subclases[claseSeleccionada].forEach(function(sub) {
            const option = document.createElement("option");
            option.value = sub;
            option.textContent = sub;
            subclaseSelect.appendChild(option);
        });
    }

});
