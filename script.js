function displayMenu(data) {
    const container = document.querySelector('.container');

    if (!container) {
        console.error('Container element not found');
        return;
    }

    for (const item of data) {
        const box = document.createElement('div');
        box.className = 'box';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const img = document.createElement('img');
        img.className = 'img';
        img.src = item.imgSrc;
        img.alt = item.title;

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = item.price;

        const description = document.createElement('p');
        description.textContent = item.description;

        box.appendChild(title);
        box.appendChild(img);
        box.appendChild(price);
        box.appendChild(description);

        container.appendChild(box);
    };
}

fetch('menu.json')
    .then(response => response.json())
    .then(data => displayMenu(data))
    .catch(error => console.log('Error loading menu:', error));
