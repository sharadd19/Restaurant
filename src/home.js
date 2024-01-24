function createHomeButton(){
    const homeButton = document.createElement('button');
    homeButton.id = 'homeButton';
    homeButton.classList.add('tab-links');
    homeButton.textContent = 'Home';

    return homeButton;
}

function createHomeTab() {
    const homeTab = document.createElement('div');
    homeTab.id = 'Home';
    homeTab.classList.add('tab-content');

    const aboutTitle = document.createElement('h3');
    const aboutInformation = document.createElement('p');
    aboutTitle.textContent = 'About';
    aboutInformation.textContent = 'At res. we believe that dining is not just about food; it’s an experience. Nestled in the heart of the city, res. presents a chic and contemporary take on traditional Japanese gastronomy. As you step into our elegantly designed space, you embark on a culinary journey that transcends the ordinary.'

    const philosophyTitle = document.createElement('h3');
    const philosophyInformation = document.createElement('p');
    philosophyTitle.textContent = 'Our Philosophy: Harmony in Flavour and Aesthetics';
    philosophyInformation.textContent = 'Inspired by the Japanese principle of Wa, which stands for harmony, Res. offers a balance of taste, texture, and visual artistry. Each dish is a masterpiece, crafted with attention to the smallest detail, blending modern culinary techniques with age-old traditions.'

    const ingredientsTitle = document.createElement('h3');
    const ingredientsInformation = document.createElement('p');
    ingredientsTitle.textContent = 'Sourcing the Finest Ingredients';
    ingredientsInformation.textContent = 'We believe the soul of great Japanese cuisine lies in its ingredients. We are committed to using only the finest, sustainably sourced ingredients. Our seafood, a cornerstone of our menu, is flown in fresh from the renowned Tsukiji Market in Tokyo. Our vegetables and herbs are handpicked from organic farms, ensuring freshness and purity.'
    
    const restaurantDesignTitle = document.createElement('h3');
    const restaurantDesignInformation = document.createElement('p');
    restaurantDesignTitle.textContent = 'A Space that Breathes Elegance';
    restaurantDesignInformation.textContent = 'Our restaurant\'s design reflects the elegance of Japanese aesthetics. The minimalist decor, ambient lighting, and soothing music create an atmosphere that is both relaxing and enchanting. Whether it\'s a romantic dinner, a business meeting, or a family gathering, res. offers the perfect setting.';

    homeTab.appendChild(aboutTitle);
    homeTab.appendChild(aboutInformation);
    homeTab.appendChild(philosophyTitle);
    homeTab.appendChild(philosophyInformation);
    homeTab.appendChild(ingredientsTitle);
    homeTab.appendChild(ingredientsInformation);
    homeTab.appendChild(restaurantDesignTitle);
    homeTab.appendChild(restaurantDesignInformation);

    return homeTab;
}

export {createHomeButton, createHomeTab};