// image imports
import deanImg from "./imgs/dean-welcome.png";
import welcomeBannerLeft from "./imgs/welcome-banner-1.png";
import welcomeBannerRight from "./imgs/welcome-banner-2.png";
import restaurantPhoto from "./imgs/restaurant.jpg";

// renders content for the home page
export function renderHomePage() {
    // create elements
    const welcomeDean = document.createElement("img");
    const welcomeTextLeft = document.createElement("img");
    const welcomeTextRight = document.createElement("img")    
    const restuarantMain = document.createElement("img");
    const lowerContainer = document.createElement("div");
    // select elements
    const content = document.getElementById('content');
    // set DOM element to contain images
    welcomeDean.src = deanImg
    welcomeTextLeft.src = welcomeBannerLeft;
    welcomeTextRight.src = welcomeBannerRight;
    restuarantMain.src = restaurantPhoto;
    // add classes
    lowerContainer.classList.add("main-content");
    // add id's
    welcomeDean.id = 'deanWelcome';
    welcomeTextLeft.id = 'welcomeLeft'
    welcomeTextRight.id = 'welcomeRight'
    restuarantMain.id = 'mainPhoto';
    // add generated content to the DOM
    content.append(lowerContainer);
    lowerContainer.appendChild(restuarantMain);

    content.appendChild(welcomeTextLeft)
    content.appendChild(welcomeDean);
    content.appendChild(welcomeTextRight);
}
