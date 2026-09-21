const audio = new Audio('Bad Bunny (ft. Bomba Estéreo) - Ojitos Lindos.mp3');
audio.loop = true;

function reproducirAudio() {
    audio.play()
        .then(() => {
            console.log("Reproducción iniciada");
        })
        .catch((error) => {
            console.error("Error al reproducir el audio:", error);
        });
}

window.onload = () => {
    // Quita clase container si existe (lógica original para FLORES.html)
    if (document.body.classList.contains("container")) {
        document.body.classList.remove("container");
    }

    // Intenta reproducir automáticamente (como estaba originalmente)
    reproducirAudio();

    // Efecto de máquina de escribir
    const textElement = document.getElementById("typewriter-text");
    if (textElement) {
        const textToType = "Dicen que quien te regala flores amarillas quiere quedarse a tu lado para siempre.\n\nY yo quiero una vida entera contigo, mi Pinguicolochita ❤️";
        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                if (textToType.charAt(i) === '\n') {
                    textElement.innerHTML += '<br>';
                } else {
                    textElement.innerHTML += textToType.charAt(i);
                }
                i++;
                setTimeout(typeWriter, 50); // Velocidad de escritura
            }
        }
        // Iniciar un poco después de que cargue la página
        setTimeout(typeWriter, 500);
    }

    // Sistema de partículas (Corazones flotantes)
    const heartsContainer = document.getElementById("hearts-container");
    if (heartsContainer) {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart-particle");
            heart.innerText = "❤️";

            // Posición horizontal aleatoria
            heart.style.left = Math.random() * 100 + "vw";
            // Tamaño aleatorio para variar
            heart.style.fontSize = (Math.random() * 1.5 + 0.5) + "rem";
            // Duración de animación aleatoria para que no suban todos igual
            heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // entre 4s y 7s

            heartsContainer.appendChild(heart);

            // Eliminar el corazón del HTML cuando termine su animación para no saturar la memoria
            setTimeout(() => {
                heart.remove();
            }, 7000);
        }, 400); // Genera un corazón cada 400ms
    }
};
