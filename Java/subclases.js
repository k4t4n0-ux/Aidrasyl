document.addEventListener("DOMContentLoaded", function () {

    const clase1 = document.getElementById("clase");
    const subclase1 = document.getElementById("subclase");

    const clase2 = document.getElementById("clase2");
    const subclase2 = document.getElementById("subclase2");

    const subclasesPorClase = {

        barbaro: ["Camino del Berserker", "Camino del Tótem"],
        bardo: ["Colegio del Saber", "Colegio del Valor"],
        clerigo: ["Dominio de la Vida", "Dominio de la Guerra"],
        druida: ["Círculo de la Luna", "Círculo de la Tierra"],
        luchador: ["Campeón", "Maestro de Batalla"],
        paladin: ["Juramento de Devoción", "Juramento de Venganza"],
        picaro: ["Ladrón", "Asesino"],
        hechicero: ["Linaje Dracónico", "Magia Salvaje"],
        mago: ["Evocación", "Ilusión"],
        monje: ["Camino de la Mano Abierta", "Camino de la Sombra"],
        explorador: ["Cazador", "Maestro de Bestias"],
        brujo: ["El Archifey", "El Infernal"],
        artificiero: ["Alquimista", "Armero"],
        cazador_sangre: ["Orden del Fantasma", "Orden del Profano"],
        psionico: ["Telepata", "Telequinético"]
    };

    function actualizarSubclases(selectClase, selectSubclase) {

        const claseSeleccionada = selectClase.value;

        selectSubclase.innerHTML = '<option value="">-- Subclase --</option>';

        if (subclasesPorClase[claseSeleccionada]) {

            subclasesPorClase[claseSeleccionada].forEach(nombre => {

                const option = document.createElement("option");
                option.value = nombre.toLowerCase().replace(/\s+/g, "_");
                option.textContent = nombre;

                selectSubclase.appendChild(option);
            });
        }
    }

    clase1.addEventListener("change", function () {
        actualizarSubclases(clase1, subclase1);
    });

    clase2.addEventListener("change", function () {
        actualizarSubclases(clase2, subclase2);
    });

});
