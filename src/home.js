// image imports
import deanImg from "./imgs/dean-welcome.png";
import welcomeBannerLeft from "./imgs/welcome-banner-1.png";
import welcomeBannerRight from "./imgs/welcome-banner-2.png";
import restaurantPhoto from "./imgs/restaurant.jpg";
import './home.css'

// NEED TO HAVE THE RESTAURANT PHOTO BE THE BACKGROUND IMAGE OF A DIV
    // SET TESITIMONIAL WINDOW TO APPEAR IN CENTER OF THAT DIV


// renders content for the home page
export function renderHomePage() {
    // create elements
    const welcomeDean = document.createElement("img");
    const welcomeTextLeft = document.createElement("img");
    const welcomeTextRight = document.createElement("img")    
    const lowerContainer = document.createElement("div");
    const testimonial = document.createElement('div');
    const upperContainer = document.createElement('div');
    const leftDiv = document.createElement('div');
    const middleDiv = document.createElement('div');
    const rightDiv = document.createElement('div');
    // select elements
    const content = document.querySelector('.content');
    content.id = 'homeContent'
    const contentContainer = document.getElementById('homeContent')
    // add content to DOM elements
    welcomeDean.src = deanImg
    welcomeTextLeft.src = welcomeBannerLeft;
    welcomeTextRight.src = welcomeBannerRight;
    testimonial.innerHTML = "Gaaaaayyyy marrriiaaaggggeee!<br><br>-- Satan"
    // add classes
    lowerContainer.classList.add("main-content");
    upperContainer.classList.add('welcome');
    // add id's
    welcomeDean.id = 'deanWelcome';
    welcomeTextLeft.id = 'welcomeLeft'
    welcomeTextRight.id = 'welcomeRight'
    testimonial.id = 'testimonial'
    leftDiv.classList.add('bannerCard');
    leftDiv.id = 'left';
    middleDiv.classList.add('bannerCard');
    middleDiv.id = 'middle';
    rightDiv.classList.add('bannerCard');
    rightDiv.id = 'right';
    // add generated content to the DOM

    contentContainer.appendChild(upperContainer)
    leftDiv.appendChild(welcomeTextLeft)
    middleDiv.appendChild(welcomeDean);
    rightDiv.appendChild(welcomeTextRight);
    upperContainer.appendChild(leftDiv);
    upperContainer.appendChild(middleDiv);
    upperContainer.appendChild(rightDiv);
    contentContainer.append(lowerContainer);
    lowerContainer.appendChild(testimonial);
}
