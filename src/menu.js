function createMenuButton() {
    const menuButton = document.createElement('button');
    menuButton.id = 'menuButton';
    menuButton.classList.add('tab-links');
    menuButton.textContent = 'Menu';

    return menuButton;
    
}

function createMenuTab() {
    const menuTab = document.createElement('div');
    menuTab.id = 'Menu';
    menuTab.classList.add('tab-content');


    const exquisiteDining = document.createElement('h3');
    exquisiteDining.textContent = 'Exquisite Dining Experiences';
    const exquisiteDiningContent = document.createElement('div');
    exquisiteDiningContent.classList.add('exquisite-dining-content');
    
    const teppanyaki = document.createElement('div');
    teppanyaki.classList.add('teppanyaki');
    const teppanyakiTitle = document.createElement('h4');
    teppanyakiTitle.textContent = "1. Tantalising Teppanyaki";
    const teppanyakiInformation = document.createElement('p');
    teppanyakiInformation.textContent = 'Watch in awe as our chefs perform culinary magic right before your eyes. Our teppanyaki tables are not just about dining; they are stages where the art of cooking is performed. Each sizzling dish is a symphony of flavors, tailored to your preferences.';
    teppanyaki.appendChild(teppanyakiTitle);
    teppanyaki.appendChild(teppanyakiInformation);

    const bbq = document.createElement('div');
    bbq.classList.add('bbq');
    const bbqTitle = document.createElement('h4');
    bbqTitle.textContent = "2. Authentic BBQ Experience";
    const bbqInformation = document.createElement('p');
    bbqInformation.textContent = 'Indulge in a unique Japanese BBQ experience. At our yakiniku tables, you have the joy of grilling premium cuts of meat to your liking, accompanied by an assortment of sauces and sides. It’s a perfect blend of interactive dining and delectable flavors.';
    bbq.appendChild(bbqTitle);
    bbq.appendChild(bbqInformation);

    const sushi = document.createElement('div');
    sushi.classList.add('sushi');
    const sushiTitle = document.createElement('h4');
    sushiTitle.textContent = "3. Sushi and Sashimi - The Art of Seafood";
    const sushiInformation = document.createElement('p');
    sushiInformation.textContent = 'Experience the delicate art of sushi and sashimi as our sushi masters use age-old techniques to create pieces that are both visually stunning and delicious. Paired with our selection of premium sake, each bite takes you closer to the heart of Japan.';
    sushi.appendChild(sushiTitle);
    sushi.appendChild(sushiInformation);

    exquisiteDiningContent.appendChild(teppanyaki);
    exquisiteDiningContent.appendChild(bbq);
    exquisiteDiningContent.appendChild(sushi);
    menuTab.appendChild(exquisiteDining);
    menuTab.appendChild(exquisiteDiningContent);

    return menuTab;
}

export {createMenuButton, createMenuTab};

