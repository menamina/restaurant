export function loadContact() {
const content = document.querySelector("#content");

const bold = document.createElement("h2");
const address = document.createElement("div");
const addressDiv1 = document.createElement("div");
const addressDiv2 = document.createElement("div");
const email = document.createElement("div");
const phone = document.createElement("div");

bold.textContent = "Contact us!"

addressDiv1.textContent = "We are located at";
addressDiv2.textContent = "555 E Wacker Drive, Chicago, IL";

address.appendChild(addressDiv1);
address.appendChild(addressDiv2);

email.textContent = "dulcedeleche@email.com"
phone.textContent = "000-111-2222"

content.appendChild(bold);
content.appendChild(address);
content.appendChild(email);
content.appendChild(phone);
}