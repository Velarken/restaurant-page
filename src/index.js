import "./styles.css";
import {renderHomePage} from "./home.js";


// when Home button is clicked, render
const homeButton = document.getElementById('home');
homeButton.addEventListener('click', renderHomePage())
window.onload = renderHomePage();
// when Menu button is clicked, render

// when About button is clicked, render