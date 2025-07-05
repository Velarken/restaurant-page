import "./styles.css";
import {renderHomePage} from "./home.js";
import {renderMenuPage} from "./menu.js";
import { renderAboutPage } from "./about.js";
import {clearDOM} from "./clear.js"

window.onload = renderHomePage();
// Home Button
const homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => loadHomePage())
// Menu Button
const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => loadMenuPage())
// About Button
const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', () => loadAboutPage())

// when Home button is clicked
function loadHomePage() {
    clearDOM();
    renderHomePage();
    // add file for loadNav()
        // add nav to DOM last
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