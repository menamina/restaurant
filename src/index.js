import {loadHome} from './home.js';
import {loadMenu} from "./menu.js";
import {loadContact} from "./contact.js";
import './restaurant.css';

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

function clearContent(){
    content.textContent = "";
}

loadHome();

home.addEventListener('click', () => {
    clearContent();
    loadHome();
});

menu.addEventListener('click', () => {
    clearContent();
    loadMenu();
});

contact.addEventListener('click', () => {
    clearContent();
    loadContact();
});