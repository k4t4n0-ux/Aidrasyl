document.addEventListener("DOMContentLoaded", () => {

    const STORAGE_KEY = "nida2_data";

    // 🔹 GUARDAR
    function guardarDatos() {
        const data = {};

        document.querySelectorAll("input, select, textarea").forEach(el => {

            // ignorar botones
            if (el.type === "button") return;

            const key = el.id || el.name;
            if (!key) return;

            if (el.type === "checkbox") {
                data[key] = el.checked;
            } else {
                data[key] = el.value;
            }
        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    // 🔹 CARGAR
    function cargarDatos() {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (!data) return;

        document.querySelectorAll("input, select, textarea").forEach(el => {

            const key = el.id || el.name;
            if (!key) return;
            if (!(key in data)) return;

            if (el.type === "checkbox") {
                el.checked = data[key];
            } else {
                el.value = data[key];
            }

            // 🔥 importante: disparar eventos para que se actualicen cálculos
            el.dispatchEvent(new Event("change"));
        });
    }

    // 🔹 AUTO-GUARDADO
    document.addEventListener("input", guardarDatos);
    document.addEventListener("change", guardarDatos);

    // 🔹 CARGAR AL INICIO
    cargarDatos();
});

cargarDatos();
document.dispatchEvent(new Event("change"));