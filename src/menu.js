export function loadMenu() {
    const content = document.querySelector("#content");

    const brunch = document.createElement("h2");
    brunch.textContent = "Brunch";

    const dinner = document.createElement("h2");
    dinner.textContent = "Dinner";

    const spirits = document.createElement("h2");
    spirits.textContent = "Spirits";

    const nonAlc = document.createElement("h2");
    nonAlc.textContent = "Non Alcoholic Drinks";

    content.appendChild(brunch);
    content.appendChild(dinner);
    content.appendChild(spirits);
    content.appendChild(nonAlc);
}