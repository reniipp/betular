document.getElementById("enviar").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje");

    if (email.trim() === "") {
        mensaje.textContent = "Por favor, ingresá tu mail";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "¡Gracias por suscribirte!";
        mensaje.style.color = "#4d0915";
        document.getElementById("email").value = "";
    }
});





