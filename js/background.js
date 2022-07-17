const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgoundImage = document.createElement("img");

backgoundImage.src = `img/${chosenImage}`;

document.body.appendChild(backgoundImage);