// import photos
import happyDean from "./imgs/dean-celebrate.png"
import map from "./imgs/map.png"

export function renderAboutPage() {
    // create elements
    const happyDeanPhoto = document.createElement('img');
    const mapPhoto = document.createElement('img');
    const aboutBanner = document.createElement('div');
    const spacer = document.createElement('div');
    const lowerContainer = document.createElement('div');
    // selectors 
    const pageContent = document.querySelector('.content');
    // add ids and classes
    pageContent.id = 'aboutContent';
    lowerContainer.id = 'aboutLowerContainer'
    happyDeanPhoto.id = 'happyDeanPhoto';
    happyDeanPhoto.classList.add('center-photo');
    spacer.classList.add('spacer');
    // assign images
    happyDeanPhoto.src = happyDean;
    mapPhoto.src = map;
    // assign text content

    // add elements to dom
    pageContent.appendChild(aboutBanner);
    aboutBanner.appendChild(spacer);
    aboutBanner.appendChild(happyDeanPhoto);
    aboutBanner.appendChild(spacer);
    pageContent.appendChild(lowerContainer);
    lowerContainer.appendChild(mapPhoto)
}