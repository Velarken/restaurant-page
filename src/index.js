import "./styles.css";
import {renderHomePage} from "./home.js";
import {renderMenuPage} from "./menu.js";
import { renderAboutPage } from "./about.js";
import {clearDOM} from "./clear.js"

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => loadMenuPage())
window.onload = renderHomePage();

const homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => loadHomePage())

// when Home button is clicked
function loadHomePage() {
    clearDOM();
    renderHomePage();
}
// when Menu button is clicked, render
function loadMenuPage() {
    clearDOM();
    renderMenuPage()
}
// when About button is clicked, render
function loadAboutPage() {
    clearDOM();
    renderAboutPage();
}