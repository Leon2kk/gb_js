/*
fetch('https://raw.githubusercontent.com/Leon2kk/gb_js/main/dz10/data.json')
      .then(response => response.json())
      .then(data => {
        const productsContainer = document.getElementById("featuredItems");
        console.log(data.food_products);
        data.products.forEach((product) => {

			let item = '<div class="featuredItem" data-id="1" data-name="ELLERY X M'O CAPSULE" data-price="52">' +
                '<div class="featuredImgWrap">' +
                    '<img src="images/featured/1.jpg" alt="">' +
                    '<div class="featuredImgDark">' +
                        '<button class="addToCart">' +
                            '<img src="images/cart.svg" alt="">' +
                            'Add to Cart' +
                        '</button>' +
                    '</div>' +
                '</div>' +
                '<div class="featuredData">' +
                    '<div class="featuredName">' +
                        'ELLERY CAPSULE' +
                    '</div>' +
                    '<div class="featuredText">' +
                        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool' +
                    '</div>' +
                    '<div class="featuredPrice">' +
                        '$52.00' +
                    '</div>' +
                '</div>' +
            '</div>' +

        product.image;
        product.name;
		product.description
		product.price
          productsContainer.appendChild(item);
        });
      });
*/


const bstCountItem = document.querySelector('.cartIconWrap span');
const bstAllItem = document.querySelector('.basketTotal');
const bstValItem = document.querySelector('.basketTotalValue');
const bstItem = document.querySelector('.basket');
document.querySelector('.cartIconWrap').addEventListener('click', () => {
  bstItem.classList.toggle('hidden');
});
const basket = {};
document.querySelector('.featuredItems').addEventListener('click', event => {
  if (!event.target.closest('.addToCart')) {
    return;
  }
  const featuredItemEl = event.target.closest('.featuredItem');
  const id = +featuredItemEl.dataset.id;
  const name = featuredItemEl.dataset.name;
  const price = +featuredItemEl.dataset.price;
  addToCart(id, name, price);
});
function addToCart(id, name, price) {
  if (!(id in basket)) {
    basket[id] = {id: id, name: name, price: price, count: 0};
  }
  basket[id].count++;
  bstCountItem.textContent = getTotalBasketCount().toString();
   bstValItem.textContent = getTotalBasketPrice().toFixed(2);
   renderProductInBasket(id);
}
function getTotalBasketCount() {
  return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}
function getTotalBasketPrice() {
  return Object
    .values(basket)
    .reduce((acc, product) => acc + product.price * product.count, 0);
}
function renderProductInBasket(productId) {
  const basketRowEl = bstItem
    .querySelector(`.basketRow[data-id="${productId}"]`);
  if (!basketRowEl) {
    renderNewProductInBasket(productId);
    return;
  }
  const product = basket[productId];
  basketRowEl.querySelector('.productCount').textContent = product.count;
  basketRowEl
    .querySelector('.productTotalRow')
    .textContent = (product.price * product.count).toFixed(2);
}
function renderNewProductInBasket(productId) {
  const productRow = `
    <div class="basketRow" data-id="${productId}">
      <div>${basket[productId].name}</div>
      <div>
        <span class="productCount">${basket[productId].count}</span> шт.
      </div>
      <div>$${basket[productId].price}</div>
      <div>
        $<span class="productTotalRow">${(basket[productId].price * basket[productId].count).toFixed(2)}</span>
      </div>
    </div>
    `;
  bstAllItem.insertAdjacentHTML("beforebegin", productRow);
}