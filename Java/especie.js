function toggleEspecie() {
    const contenido = document.getElementById("contenidoEspecie");
    const icono = document.getElementById("iconoEspecie");

    if (contenido.style.display === "none" || contenido.style.display === "") {
        contenido.style.display = "block";
        icono.textContent = "▲";
    } else {
        contenido.style.display = "none";
        icono.textContent = "▼";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contenidoEspecie").style.display = "none";
});