document.addEventListener("DOMContentLoaded", function() {
    // Guardamos los elementos del HTML en variables
    const sobre = document.getElementById("pantalla-sobre");
    const carta = document.getElementById("carta");

    // Añadimos un evento: "cuando le den clic al sobre..."
    sobre.addEventListener("click", function() {
        
        // 1. Ocultamos el sobre
        sobre.classList.add("oculto");
        
        // 2. Le quitamos la clase "oculto" a la carta para que aparezca
        carta.classList.remove("oculto");
        
        // 3. Usamos un pequeño retraso (setTimeout) para que el CSS 
        // haga la animación de "aparecer" suavemente
        setTimeout(() => {
            carta.classList.add("mostrar");
        }, 50); // 50 milisegundos es casi instantáneo

        // Opcional: Si quieres que suene una canción al abrir la carta, 
        // puedes descomentar estas líneas:
        // const musica = new Audio('tu_cancion.mp3');
        // musica.play();
    });
});