document.addEventListener("DOMContentLoaded", function () {

    const clase1 = document.getElementById("clase");
    const subclase1 = document.getElementById("subclase");

    const clase2 = document.getElementById("clase2");
    const subclase2 = document.getElementById("subclase2");

    const subclasesPorClase = {

        barbaro: ["Camino del Berserker", "Camino del corazón salvaje", "Camino Del Árbol Mundo", "Camino del fanático"],
        bardo: ["Colegio de la Danza", "Colegio del Glamour", "Colegio del Saber", "Colegio del Valor","Colegio de la Luna"],
        clerigo: ["Dominio del Conocimiento", "Dominio de la Vida","Dominio de la Luz", "Dominio del Engaño","Dominio de la Guerra"],
        druida: ["Círculo de la Luna", "Círculo de la Tierra", "Círculo de el Mar", "Círculo de las Estrellas"],
        luchador: ["Banneret", "Campeón", "Caballero Arcano", "Maestro de Batalla", "Guerrero Psi"],
        paladin: ["Juramento de Devoción", "Juramento de Gloria", "Juramento de Venganza", "Juramento de los Ancestros", "Juramento de Genios Nobles"],
        picaro: ["Asesino", "Embaucador Arcano", "Descendiente de los Tres","Ladrón","Cuchillos de Alma"],
        hechicero: ["Hechicería Aberrante", "Hechicería de Relojería", "Hechicería Dracónica", "Hechicería de Fuego Mágico", "Hechicería de Magia Salvaje"],
        mago: ["Abjurador", "Cantante de Espadas", "Adivino", "Evocador", "Ilusionista"],
        monje: ["Guerrero de las Sombra", "Guerrero de la Mano Abierta", "Guerrero de los Elementos", "Guerrero de la Misericordia"],
        explorador: ["Cazador", "Maestro de Bestias", "Vagabundo Feérico", "Acechador de la Penumbra","Caminante de Invierno"],
        brujo: ["Patron Archfey", "Patron Celestial", "Patrón Demoníaco", "Patrón del Gran Antiguo"],
        artificiero: ["Alquimista", "Armero", "Artillero", "Batalla Smith", "Cartógrafo"],        
        cazador_sangre: ["Orden del Alma Profana", "Orden del Mutante", "Orden del Licántropo", "Orden de los Matafantasmas"],

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
        subclase1.dispatchEvent(new Event("change"));
    });

    clase2.addEventListener("change", function () {
        actualizarSubclases(clase2, subclase2);
        subclase2.dispatchEvent(new Event("change"));
    });

});
