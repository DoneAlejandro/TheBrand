'use strict';

const pathToImages = 'image';
const pathToProductsImages = `${pathToImages}/fetured`;
const featuredItemsEl = document.querySelector('.fetured__item');


/**
 * Эта функция принимает один из объектов из массива products в файле products.js.
 * @param {ProductDTO} product объект с информацией о продукте
 * @returns {string} html-разметка карточки товара
 */

function getProductMarkup(product) {
	return `
		<div class="fetured__card">
			<a href="product.html" class="fetured__link">
				<img class="fetured__image" src="${pathToProductsImages}/${product.image}" alt="${product.name}">
				<div class="fetured__text">
					<div class="fetured__mintitle">
						${product.name}
					</div>
					<p class="fetured__info">
						${product.description}
					</p>
					<p class="fetured__price">
						$${product.price}
					</p>
				</div>
			</a>
			<div class="fetured__add">
				<button class="fetured__btn" data-productId="${product.id}">
					<img src="${pathToImages}/menu/cart.svg" alt="#" class="fetured__cart">
					<p>Add to Cart</p>
				</button>
			</div>
		</div>
	`;
}


/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла products.js
 * @param {HTMLDivElement} featured__itemtemsEl элемент с классом .featured__item
 */
function insertProductsIntoPage(products, featuredItemsEl) {
	let productsMarkup = '';
	for (let product of products) {
		productsMarkup += getProductMarkup(product);
	}
	featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}
/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventListenersForAddToCartButtons() {
	const addToCartBtns = document.querySelectorAll('button[data-productId]');
	addToCartBtns.forEach(function (button) {
		button.addEventListener('click', addedProductHandler);
	});
}
/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
	const productId = event.currentTarget.getAttribute('data-productId');
	addProductIntoBasket(productId);
}



insertProductsIntoPage(products, featuredItemsEl);
addEventListenersForAddToCartButtons();