const animeImgEl = document.querySelector

document.addEventListener("DOMContentLoaded", () => {
    const loadImageButton = document.getElementById("loadImage");
    const randomImage = document.getElementById("randomImage");

    loadImageButton.addEventListener("click", () => {
        fetch("https://pic.re/image")
            .then((response) => response.json())
            .then((data) => {
                const imageAttributes = {
                    image_id: data.image_id,
                    image_source: data.image_source,
                    image_tags: data.image_tags.join(", "),
                };
                
                randomImage.src = data.image_source;
                sendToDatabase(imageAttributes);
            })
    });

    function sendToDatabase(attributes) {
        console.log("Atributos da imagem enviados para a database:", attributes);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const loadImageButton = document.getElementById("loadImage");
    const randomImage = document.getElementById("randomImage");
    const balloon = document.getElementById("balloon");
    let balloonTimer; // Variável para armazenar o temporizador do balão

    loadImageButton.addEventListener("click", () => {
        // Gere um texto aleatório para o balão
        const randomText = generateRandomText();

        // Cancele o temporizador atual do balão (se houver)
        clearTimeout(balloonTimer);

        // Crie o balão de texto
        createBalloon(randomText);
    });

  /*  loadImageButton.addEventListener("click", () => {
        fetch("https://pic.re/image")
            .then((response) => response.json())
            .then((data) => {
                randomImage.src = data.image_source; // Define a URL da imagem na tag <img>
                randomImage.alt = "Imagem aleatória"; // Define um atributo alt para a imagem (opcional)
                sendToDatabase(imageAttributes);
            })
    });  */

    function generateRandomText() {
        const texts = [
            "TESTE!",
            "FUNCIONA!"
        ];
        const randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    }

    function createBalloon(text) {
        // Limpe o conteúdo do balão
        balloon.innerHTML = "";

        // Crie o elemento de balão de texto
        const balloonText = document.createElement("div");
        balloonText.classList.add("balloon-text");
        balloonText.textContent = text;

        // Adicione o elemento de balão de texto ao balão
        balloon.appendChild(balloonText);

        // Exiba o balão
        balloon.style.display = "block";

        // Defina um temporizador para ocultar o balão após alguns segundos (opcional)
        balloonTimer = setTimeout(() => {
            balloon.style.display = "none";
        }, 5000); // O balão desaparecerá após 5 segundos (5000 milissegundos)

    }
});