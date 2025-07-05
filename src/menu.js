import placeholder from './imgs/placeholder.png';
import coeds from './imgs/sweeden_ya.png';
import service from './imgs/service.png'

const menu = [
    {
        name:"Hector the Well Endive'd",
        desc:'',
        image: placeholder,
        price:'$69.99'
    },
    {
        name:'Fist Full of Meatballs',
        desc:'A sharable plate of spaghetti with hand crafted artisinal paintba--MEAT BALLS...Enjoy a taste of a good ole spaghetti western!',
        image: placeholder,
        price:'$100'
    },
    {
        name:'7 Layer Human Bean-ing Dip',
        desc:'A savory and spicy layered dip made by the sweaty person in the white morph suit we all know and love. He gets paid 0.001% of each dip we sell.',
        image: placeholder,
        price:'$12.99'
    },
    {
        name:'CoEd Oil Wrestling Sundae',
        desc:'A hearty double scoop of vanilla ice cream slathered in a heavy coating of chocolate sauce and your choice of toppings. All proceeds go to saving the pelwicans, I wuv dem uwu.',
        image: placeholder,
        price:'$800.85'
    },
    {
        name:'Market Price Fish',
        desc:'The perfect meal to close out a birthday where you got a REAL conversation with your idol...Not what you thought it would be huh? Oh well, we got this fish from space or whatever.',
        image: placeholder,
        price:'1 solid gold bar'
    },
    {
        name:'Intro to Anthropolo-pea Soup',
        desc:'Created using only the tools found in our boxes, this split-pea soup goes perfectly with an order of our complimentary garlic spear heads. Side of your own urine not included',
        image: placeholder,
        price:'$24.99'
    }
]
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

    
    // page head
        // menu pun + photo of annie and britta
    // menu container
        // menu item container 
            // item image (left)
            // item description (middle)
            // item price (right)
        // menu item container 
            // item image (left)
            // item description (middle)
            // item price (right)
        // menu item container 
            // item image (left)
            // item description (middle)
            // item price (right)
    
    // optionally add image inspect that shows a larger photo of each meal
}