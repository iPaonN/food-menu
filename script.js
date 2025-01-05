function displayMenu(data) {
    const container = document.querySelector('.row');

    if (!container) {
        console.error('Container element not found');
        return;
    }

    for (const item of data) {
        const box = document.createElement('div');
        box.className = 'col-sm-3';

        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const img = document.createElement('img');
        img.className = 'img-rounded';
        img.src = item.imgSrc;
        img.alt = item.title;

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = item.price;

        const description = document.createElement('p');
        description.textContent = item.description;

        if (Math.random() < 0.2) {
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.textContent = 'Top Selected – creato per l’eccellenza.';
            menuItem.appendChild(badge);
        }

        menuItem.appendChild(title);
        menuItem.appendChild(img);
        menuItem.appendChild(price);
        menuItem.appendChild(description);

        box.appendChild(menuItem);

        container.appendChild(box);
    }
}

fetch('menu.json')
    .then(response => response.json())
    .then(data => displayMenu(data))
    .catch(error => console.log('Error loading menu:', error));