import instagramIcon from './icons/instagram.svg';
import phoneIcon from './icons/phone.svg';
import emailIcon from './icons/email.svg';

function createContactButton() {
    const contactButton = document.createElement('button');
    contactButton.id = 'contactButton';
    contactButton.classList.add('tab-links');
    contactButton.textContent = 'Contact';

    return contactButton;
}

function createContactTab() {
    const contactTab = document.createElement('div');
    contactTab.id = 'Contact';
    contactTab.classList.add('tab-content');

    const social = document.createElement('div');
    social.classList.add('social');

    const instagramDiv = document.createElement('div');
    const instagram = document.createElement('img');
    instagram.src = instagramIcon;
    const instagramText = document.createTextNode('@res.');
    instagramDiv.appendChild(instagram);
    instagramDiv.appendChild(instagramText);        

    const phoneDiv = document.createElement('div');
    const phone = document.createElement('img');
    phone.src = phoneIcon;
    const phoneText = document.createTextNode('+447123456789');
    phoneDiv.appendChild(phone);
    phoneDiv.appendChild(phoneText);

    const emailDiv = document.createElement('div');
    const email = document.createElement('img');
    email.src = emailIcon;
    const emailText = document.createTextNode('res@gmail.com');
    emailDiv.appendChild(email);
    emailDiv.appendChild(emailText);

    social.appendChild(instagramDiv);
    social.appendChild(phoneDiv);
    social.appendChild(emailDiv);
    
    const joinTitle = document.createElement('h3');
    const joinInformation = document.createElement('p');
    joinTitle.textContent = 'Join us'
    joinInformation.textContent = 'We don’t just serve food; we create memories. Immerse yourself in a culinary adventure that celebrates the best of Japanese cuisine, crafted with passion and served with elegance. We look forward to welcoming you to res. – where every meal is a journey.';

    const reservationsTitle = document.createElement('h3');
    const reservationsInformation = document.createElement('p');
    reservationsTitle.textContent = 'Reservations and Private Dining';
    reservationsInformation.textContent = 'To ensure an exclusive and intimate experience, we recommend reservations. For special occasions, inquire about our private dining rooms, where you can enjoy personalized menus and services tailored to your event.';

    const openingHours = document.createElement('h3');
    openingHours.textContent = 'Opening Hours';
   
    const mon = document.createElement('p');
    mon.textContent = "Mon: 12pm - 11pm";
    const tue = document.createElement('p');
    tue.textContent = "Tue: 12pm - 11pm";
    const wed = document.createElement('p');
    wed.textContent = "Wed: 12pm - 11pm";
    const thu = document.createElement('p');
    thu.textContent = "Thu: 12pm - 11pm";
    const fri = document.createElement('p');
    fri.textContent = "Fri: 4pm - 1am";
    const sat = document.createElement('p');
    sat.textContent = "Sat: 4pm - 1am";
    const sun = document.createElement('p');
    sun.textContent = "Sun: 9am - 9pm";    //`\r\nWed: 12pm - 11pm \n Thu: 12pm - 11pm \n Fri; 4pm - 1am \n Sat: 4pm - 1am \n Sun: 9am - 10pm`;
    
    contactTab.appendChild(social);
    contactTab.appendChild(joinTitle);
    contactTab.appendChild(joinInformation);
    contactTab.appendChild(reservationsTitle);
    contactTab.appendChild(reservationsInformation);
    contactTab.appendChild(openingHours);
    contactTab.appendChild(mon);
    contactTab.appendChild(tue);
    contactTab.appendChild(wed);
    contactTab.appendChild(thu);
    contactTab.appendChild(fri);
    contactTab.appendChild(sat);
    contactTab.appendChild(sun);

    return contactTab;
}

export {createContactButton, createContactTab};
