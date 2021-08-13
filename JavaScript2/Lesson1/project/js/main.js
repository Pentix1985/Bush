const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (product) => {
    return `<div class="products__product-item">
                <h3 class="products__product-name">${product.title}</h3>
                <p class="products__product-price">${product.price}</p>
                <button class="products__buy-btn">Купить</button>
            </div>`
};
const renderPage = products => {
    document.querySelector('.products').innerHTML = products.map(product => renderProduct(product)).join('');
};

renderPage(products);