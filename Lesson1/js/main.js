const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (good) => {
    return `<div class="product-item">
    <img class="foto" src="images/foto.jpg" alt="foto.jpg" width="370" height="274">
                <h3 class="product-h3">${good.title}</h3>
                <p class="product-p">${good.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);