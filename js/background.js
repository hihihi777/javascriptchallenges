const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector(".body");

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

function background() {
    document.body.style.background = chosenImage;
}

body.addEventListener("submit", background);