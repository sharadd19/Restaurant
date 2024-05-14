import { createHomeButton, createHomeTab } from "./home";
import { createContactButton, createContactTab } from "./contact";
import { createMenuButton, createMenuTab } from "./menu";
import './style.css'
console.log('sharad');

document.title = "res."

function component() {
    const container = document.createElement('div');
    container.id = 'container';

    const header = document.createElement('div');
    header.classList.add('header');
    const resTitle = document.createElement('div');
    resTitle.classList.add('res-title');
    resTitle.textContent = 'res.'
    const slogan = document.createElement('SPAN');
    slogan.classList.add('slogan');
    slogan.textContent = 'Redefining Japanese Cuisine'
    resTitle.appendChild(slogan);
    header.appendChild(resTitle);
    

    const tabbedMenu = document.createElement('div');
    tabbedMenu.classList.add('tab');

    const homeButton = createHomeButton();
    const menuButton = createMenuButton();
    const contactButton = createContactButton();

    const homeTab = createHomeTab();
    const menuTab = createMenuTab();
    const contactTab = createContactTab();

    tabbedMenu.appendChild(homeButton);
    tabbedMenu.appendChild(menuButton);
    tabbedMenu.appendChild(contactButton);

    container.appendChild(header);
    container.appendChild(tabbedMenu);
    container.appendChild(homeTab);
    container.appendChild(menuTab);
    container.appendChild(contactTab);
    
    // Shows the home tab by default
    console.log(homeButton.click()); //NOT WORKING
    homeButton.click();

    homeButton.addEventListener('click', (e) => {
        openCity(e, homeTab)
    });
    menuButton.addEventListener('click', (e) => {
        openCity(e, menuTab)
    });
    contactButton.addEventListener('click', (e) => {
        openCity(e, contactTab)
    });
    
    

    return container;
}

document.body.appendChild(component());
    
    



// When we click on a tab we want to hide the other tabs' information and show the current tab.
function openCity(evt, tab) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

    }

    tablinks = document.getElementsByClassName("tab-links");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }

    tab.style.display = "block"; 
    evt.currentTarget.className += " active";
}


