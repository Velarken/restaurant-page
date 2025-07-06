import './menu.css'
// photo imports
import coeds from './imgs/sweeden_ya.png';
import service from './imgs/service.png'
import fish from './imgs/fish.png';
import meatballs from './imgs/meatballs.png';
import dip from './imgs/dip.png';
import endive from './imgs/endive.png';
import peas from './imgs/peas.png';
import sundae from './imgs/sundae.png';

const menu = [
    {
        name:"Hector the Well Endive'd",
        desc:'Roasted Belgian endives covered in a melody of veggies and covered in a savory sauce.',
        image: endive,
        price:'$69.99'
    },
    {
        name:'Fist Full of Meatballs',
        desc:'A sharable plate of spaghetti with hand crafted artisinal paintba--MEAT BALLS...Enjoy a taste of a good ole spaghetti western!',
        image: meatballs,
        price:'$100'
    },
    {
        name:'7 Layer Human Bean-ing Dip',
        desc:'A savory and spicy layered dip made by the sweaty person in the white morph suit we all know and love. He gets paid 0.001% of each dip we sell.',
        image: dip,
        price:'$12.99'
    },
    {
        name:'CoEd Oil Wrestling Sundae',
        desc:'A hearty double scoop of vanilla ice cream slathered in a heavy coating of chocolate sauce and your choice of toppings. All proceeds go to saving the pelwicans, I wuv dem uwu.',
        image: sundae,
        price:'$800.85'
    },
    {
        name:'Market Price Fish',
        desc:'The perfect meal to close out a birthday where you got a REAL conversation with your idol...Not what you thought it would be huh? Oh well, we got this fish from space or whatever.',
        image: fish,
        price:'1 solid gold bar'
    },
    {
        name:'Intro to Anthropolo-pea Soup',
        desc:'Created using only the tools found in our boxes, this split-pea soup goes perfectly with an order of our complimentary garlic spear heads. Side of your own urine not included',
        image: peas,
        price:'$24.99'
    }
];
export function renderMenuPage() {
    const content = document.querySelector('.content');
    content.id = 'menuContent'
    const contentContainer = document.getElementById('menuContent')
    const imgBackground = document.createElement('div');
    imgBackground.id = 'menuPhotoBackground';
    imgBackground.classList.add('menu-photo-background');
    // add banner photo to page
    const pageBanner = document.createElement('img');
    const pageImage = document.createElement('img');
    pageBanner.id = 'menuBanner';
    pageBanner.src = service;
    pageImage.id = 'menuPhoto'
    pageImage.src = coeds;
    imgBackground.appendChild(pageBanner);
    imgBackground.appendChild(pageImage);
    contentContainer.appendChild(imgBackground);
    // add menu and sub elements to page
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    contentContainer.appendChild(menuContainer);
    for (let item of menu) {
        let menuItemContainer = document.createElement('div');
        let itemImage = document.createElement('img');
        let itemInfo = document.createElement('div');
        let itemName = document.createElement('div');
        let itemDesc = document.createElement('div');
        let itemPrice = document.createElement('div');

        menuItemContainer.id = `${item.name}-container`;
        menuItemContainer.classList.add('menu-item');
        // add item image + selectors
        itemImage.src = item.image;
        itemImage.id=`${item.name}Img`;
        itemImage.classList.add('item-image','placeholder-item');
        // create container for item name and description
        itemInfo.id = `${item.name}Info`
        itemInfo.classList.add('item-info');
        // add info selectors
        itemName.id = `${item.name}Name`
        itemName.classList.add('item-name')
        itemDesc.id = `${item.name}Desc`;
        itemDesc.classList.add('item-desc');
        itemPrice.id = `${item.name}Price`;
        itemPrice.classList.add('item-price');
        // set text content for display elements
        itemName.innerHTML = item.name;
        itemDesc.innerHTML = item.desc;
        itemPrice.innerHTML = item.price;
        // add content to menu container
        menuContainer.appendChild(menuItemContainer);
        menuItemContainer.appendChild(itemImage);
        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemDesc);
        menuItemContainer.appendChild(itemInfo);
        menuItemContainer.appendChild(itemPrice);
        
    }
};