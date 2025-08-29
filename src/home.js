import dulceImg from "./dulce.jpg"

export function loadHome() {
const content = document.querySelector("#content");
const image = document.createElement("img");
const headline = document.createElement("h3");
const someText = document.createElement("div");

headline.textContent = "Welcome to Dulce de Leche Cafe";
someText.textContent = "These are words that are just words about words";
image.src = dulceImg;
image.alt = "Description of image";

content.appendChild(headline);
content.appendChild(image);
content.appendChild(someText);
}