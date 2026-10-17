// 1. Evento CLICK sobre la foto: muestra un mensaje al hacer clic
const foto = document.getElementById("foto-perfil");
foto.addEventListener("click", function () {
    alert("¡Hola! Esta es la foto de Miguel Alejandro Loreto.");
});

// 2. Evento MOUSEOVER sobre el encabezado: cambia el color de fondo al pasar el mouse
const encabezado = document.querySelector("header");
encabezado.addEventListener("mouseover", function () {
    encabezado.style.backgroundColor = "#34495e";
    setTimeout(function () {
        encabezado.style.backgroundColor = "#2c3e50";
    }, 1000);
});

// 3. Evento SCROLL en la ventana: muestra/oculta un botón de "volver arriba"
const botonArriba = document.getElementById("btn-arriba");
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
});

botonArriba.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 4. Evento KEYDOWN en el documento: detecta cuando el usuario presiona una tecla
document.addEventListener("keydown", function (evento) {
    console.log("Tecla presionada: " + evento.key);
});

// 5. Evento DBLCLICK en el pie de página: cambia el texto del footer
const pie = document.querySelector("footer p");
pie.addEventListener("dblclick", function () {
    pie.textContent = "Gracias por visitar mi página 😊";
});

// 6. Evento LOAD en la imagen: hace un efecto de aparición suave (fade-in)
foto.addEventListener("load", function () {
    foto.classList.add("cargada");
});
// Si la imagen ya estaba en caché del navegador, el evento "load" podría no disparase:
if (foto.complete) {
    foto.classList.add("cargada");
}

// 7. Evento DBLCLICK en la imagen: alterna entre color y blanco y negro
foto.addEventListener("dblclick", function () {
    foto.classList.toggle("escala-de-grises");
});

// 8. Evento MOUSEENTER en el párrafo del contenido: lo resalta con un color
const parrafo = document.querySelector("main p");
parrafo.addEventListener("mouseenter", function () {
    parrafo.classList.add("resaltado");
});

// 9. Evento MOUSELEAVE en el párrafo del contenido: quita el resaltado
parrafo.addEventListener("mouseleave", function () {
    parrafo.classList.remove("resaltado");
});

// 10. Evento CONTEXTMENU (clic derecho) en toda la página: muestra un mensaje flotante personalizado
const mensajeFlotante = document.getElementById("mensaje-flotante");
document.addEventListener("contextmenu", function (evento) {
    evento.preventDefault();
    mensajeFlotante.textContent = "✨ Página creada por Miguel Alejandro Loreto";
    mensajeFlotante.style.display = "block";
    setTimeout(function () {
        mensajeFlotante.style.display = "none";
    }, 2000);
});
