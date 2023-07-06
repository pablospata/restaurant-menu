
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
    displayBtns(menu);
    displayMenuItems(menu);
    addListeners();
});

// PARTE UNO - Mostrar los items de data.
function displayMenuItems(menuItems) {

    let displayMenu = menuItems.map(function (item) {

        return `
                <article class="menu-item">
                    <img src=${item.img} class="photo" alt=${item.title}>
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                            <p class="item-text"> ${item.desc}</p>
                    </div>
                </article>
            `;
    });

    sectionCenter.innerHTML = displayMenu.join(' ');;
}

// PARTE DOS - Filtrar elementos con botones
function addListeners() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;

            const menuCategory = menu.filter(function (menuItem) {
                return menuItem.category === category

            });

            if (category === 'all')
                displayMenuItems(menu);
            else
                displayMenuItems(menuCategory);
        });
    });
}

// PARTE TRES - Mostrar solo botones de categorias que existen
function displayBtns(menu) {
    let categoriesAll = menu.map(function (item) {
        return item.category;
    });

    let categories = ['all', ... new Set(categoriesAll)];

    let createBtns = categories.map(function (cat) {

        return `    
                <button class="filter-btn" type="button" data-id="${cat}">${cat}</button>
            `;
    });

    btnContainer.innerHTML = createBtns.join('');
}

