// image imports
import deanImg from "./imgs/dean-welcome.png";
import welcomeBannerLeft from "./imgs/welcome-banner-1.png";
import welcomeBannerRight from "./imgs/welcome-banner-2.png";
import restaurantPhoto from "./imgs/restaurant.jpg";

// NEED TO HAVE THE RESTAURANT PHOTO BE THE BACKGROUND IMAGE OF A DIV
    // SET TESITIMONIAL WINDOW TO APPEAR IN CENTER OF THAT DIV


// renders content for the home page
export function renderHomePage() {
    // create elements
    const welcomeDean = document.createElement("img");
    const welcomeTextLeft = document.createElement("img");
    const welcomeTextRight = document.createElement("img")    
    const restuarantMain = document.createElement("img");
    const lowerContainer = document.createElement("div");
    const testimonial = document.createElement('div');
    // select elements
    const content = document.querySelector('.content');
    content.id = 'homeContent'
    const contentContainer = document.getElementById('homeContent')
    // add content to DOM elements
    welcomeDean.src = deanImg
    welcomeTextLeft.src = welcomeBannerLeft;
    welcomeTextRight.src = welcomeBannerRight;
    restuarantMain.src = restaurantPhoto;
    testimonial.innerHTML = "Gaaaaayyyy marrriiaaaggggeee!<br><br>-- Satan"
    // add classes
    lowerContainer.classList.add("main-content");
    // add id's
    welcomeDean.id = 'deanWelcome';
    welcomeTextLeft.id = 'welcomeLeft'
    welcomeTextRight.id = 'welcomeRight'
    restuarantMain.id = 'mainPhoto';
    testimonial.id = 'testimonial'
    // add generated content to the DOM
    
    lowerContainer.appendChild(restuarantMain);

    contentContainer.appendChild(welcomeTextLeft)
    contentContainer.appendChild(welcomeDean);
    contentContainer.appendChild(welcomeTextRight);
    contentContainer.append(lowerContainer);
    lowerContainer.appendChild(testimonial);
}
