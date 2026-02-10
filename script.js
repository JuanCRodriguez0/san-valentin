const botonSi = document.getElementById("boton1");
const botonNo = document.getElementById("boton2");
const imagen = document.getElementById("imagen");
const mensajeFinal = document.getElementById("mensajeFinal");
const contenedorBotones = document.getElementById("contenedorBotones");

let escala = 1;

botonNo.addEventListener("click", function() {
    escala += 0.6;
    botonSi.style.transform = "scale(" + escala + ")";
});

botonSi.addEventListener("click", function() {
    imagen.src = "gatito2.jpg";
    contenedorBotones.style.display = "none";
    mensajeFinal.style.display = "block";
});