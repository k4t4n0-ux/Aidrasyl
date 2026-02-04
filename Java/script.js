// 1. Obtener el textarea
const textarea = document.getElementById("miHoja");

// 2. Cargar datos al abrir la página
window.addEventListener("DOMContentLoaded", () => {
    const datosGuardados = localStorage.getItem("miHojaDatos");

    if (datosGuardados !== null) {
        textarea.value = datosGuardados;
    }
});

// 3. Guardar automáticamente cuando el usuario escriba
textarea.addEventListener("input", () => {
    localStorage.setItem("miHojaDatos", textarea.value);
});
