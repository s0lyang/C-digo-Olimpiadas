const items = [
    { name: 'Balón de Fútbol', category: 'Fútbol', image: 'balon-futbol.jpg' },
    { name: 'Raqueta de Tenis', category: 'Tenis', image: 'raqueta-tenis.jpg' },
    { name: 'Casco de Ciclismo', category: 'Ciclismo', image: 'casco-ciclismo.jpg' },
    { name: 'Guantes de Boxeo', category: 'Boxeo', image: 'guantes-boxeo.jpg' },
    { name: 'Pesas', category: 'Fitness', image: 'pesas.jpg' },
];

function searchItems() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const itemsSection = document.getElementById('itemsSection');
    itemsSection.innerHTML = '';

    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(searchInput) || 
        item.category.toLowerCase().includes(searchInput)
    );

    if (filteredItems.length === 0) {
        itemsSection.innerHTML = '<p>No se encontraron ítems.</p>';
        return;
    }

    filteredItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemCategory = document.createElement('p');
        itemCategory.textContent = item.category;

        itemCard.appendChild(itemImage);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemCategory);

        itemsSection.appendChild(itemCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    searchItems();
});


function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
