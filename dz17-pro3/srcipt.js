'use strict';
const nameId = "name";
const textId = "text";
const sendId = "send";
const errorId = "error";

const formElement = document.querySelector('.feedback__form');
const productNameElement = document.querySelector('.feedback__product-name');
const feedbackElement = document.querySelector('.feedback__text');
const addButtonElement = document.querySelector('.feedback__btn_add');
const messageElement = document.querySelector('.feedback__message');
const visitProductsButton = document.querySelector('.feedback__btn_back');

const PRODUCTS_KEY = 'products';

let createNewFeedback = wrapperCreateNewFeedback();
let createNewProduct = wrapperCreateNewProduct();

const initialData = [
    {
        id: 0,
        name: 'product1',
        feedbacks: [
            {
                id: 0,
                text: 'product1 the best',
            },
        ]
    },
    {
        id: 1,
        name: 'product2',
        feedbacks: [
            {
                id: 0,
                text: 'product2 mid',
            },
        ]
    },
];

function findMaxId(data) {
    let maxProductId = Number.MIN_SAFE_INTEGER;
    let maxFeedbackId = Number.MIN_SAFE_INTEGER;
    for (const product of data) {
        if (maxProductId < product.id) {
            maxProductId = product.id;
        }
        for (const feedback of product.feedbacks) {
            if (feedback.id > maxFeedbackId) {
                maxFeedbackId = feedback.id;
            }
        }
    }
    return {
        maxProductId,
        maxFeedbackId
    };
}

const { maxProductId, maxFeedbackId } = findMaxId(initialData);



function addNewFeedback(productName, feedbackText) {
    const products = getProducts();
    const foundProduct = products.find(product => product.name === productName);
    if (foundProduct) {
        const updatedProducts = products.map(product => {
            if (product.name === productName) {
                product.feedbacks.push(createNewFeedback(feedbackText));
            }
            return product;
        });
        setProducts(updatedProducts);
    } else {
        const newProduct = createNewProduct(productName, feedbackText);
        products.push(newProduct);
        setProducts(products);
    }
}

function wrapperCreateNewFeedback(inputId = 0) {
    let id = inputId;
    return function(text) {
        return { id: id++, text };
    };
}

function wrapperCreateNewProduct(inputId = 0) {
    let id = inputId;
    return function(prodName, textForFeedback) {
        const product = {
            id: id++,
            name: prodName,
            feedbacks: [],
        };
        const feedback = createNewFeedback(textForFeedback);
        product.feedbacks.push(feedback);
        return product;
    };
}

function getProducts() {
    const data = localStorage.getItem(PRODUCTS_KEY);
    if (data === null) {
        return [];
    }
    return JSON.parse(data);
}

function setProducts(products) {
    const json = JSON.stringify(products);
    localStorage.setItem(PRODUCTS_KEY, json);
}

function checkProductsData() {
    const result = getProducts();
    return result.length !== 0;
}

function toggleBlocks(firstBlock, secondBlock) {
    //firstBlock.classList.toggle('hide');
   //secondBlock.classList.toggle('hide');
}

function createList() {
    const products = getProducts();
    return `
    <h1 class="products__title">Список наших продуктов</h1>
    <ul class="products__list">
      ${getProductsTemplate(products)}
    </ul>
    `;
}

function getProductTemplate(product, hide = true, initialButtonText = true) {
    return `
    <li class="products__item" data-productid="${product.id}">
        <div class="products__description">
            <h3 class="products__item-title">
                <span>&#10054;</span>
                &nbsp;${product.name}</h3>
            <button class="products__toggle">${initialButtonText ? 'Показать отзывы' : 'Cкрыть отзывы'}</button>
        </div>
        <div class="products__details ${hide ? 'hide' : ''}">
            <ul class="products__feedback-list">
                ${getFeedbacksTemplate(product.feedbacks)}
            </ul>
        </div>
    </li>
    `;
}

function getFeedbackTemplate(review, index) {
    return `
    <li class="products__feedback-item" data-reviewid="${review.id}">
        <p class="products__feedback-text">
        <span>${index + 1})</span>
        ${review.text}
        </p>
        <button class="products__feedback-delete">&#10006;</button>
    </li>
    `;
}

function getFeedbacksTemplate(reviews) {
    let resultTemplate = '';
    reviews.map((review, index) => {
        resultTemplate += getFeedbackTemplate(review, index);
    });
    return resultTemplate;
}

function getProductsTemplate(inputProducts) {
    let resultTemplate = '';
    inputProducts.map(product => {
        resultTemplate += getProductTemplate(product);
    });
    return resultTemplate;
}

function toggleBlock(block) {
    block.classList.toggle('hide');
}

function toggleName(button) {
    if (button.textContent === 'Показать отзывы') {
        button.textContent = 'Скрыть отзывы';
    } else {
        button.textContent = 'Показать отзывы';
    }
}

function deleteFeedbackItem(productId, reviewId, firstElement, secondElement, partialListElement) {
    let products = getProducts();
    const foundProduct = products.find(product => product.id === productId);
    const feedbacks = foundProduct.feedbacks;
    const newFeedbacks = feedbacks.filter(feedback => feedback.id !== reviewId);
    if (newFeedbacks.length === 0) {
        products = products.filter(product => product.id !== productId);
        const childElement = secondElement.querySelector('.products__item[data-productid="' + productId + '"]');
        const parentElement = childElement.closest('.products__list');
        parentElement.removeChild(childElement);
    } else {
        products = products.map((product, index) => {
            if (product.id == productId) {
                product.feedbacks = newFeedbacks;
                partialListElement.innerHTML = getProductTemplate(product, false, false);
            }
            return product;
        });
    }

    if (products.length === 0) {
        toggleBlocks(firstElement, secondElement);
    }

    setProducts(products);
}

const toFeedbackButtonElement = document.querySelector('.products__btn_to-feedback');
const initialElement = document.querySelector('.products__initial');
const listElement = document.querySelector('.products__list-block');
const productsElement = document.querySelector('.products');

if (checkProductsData()) {
    toggleBlocks(initialElement, listElement);
}

/*
toFeedbackButtonElement.addEventListener('click', () => {
    window.location.href = '1.html';
});
*/

listElement.innerHTML = createList();

listElement.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('products__toggle')) {
        const itemElement = target.closest('.products__item');
        const detailsElement = itemElement.querySelector('.products__details');
        toggleName(target);
        toggleBlock(detailsElement);
    }
    if (target.classList.contains('products__feedback-delete')) {
        const feedbackItemElement = target.closest('.products__feedback-item');
        const productItemElement = target.closest('.products__item');
        const feedbackId = Number(feedbackItemElement.dataset.reviewid);
        const productId = Number(productItemElement.dataset.productid);
        deleteFeedbackItem(productId, feedbackId, initialElement, listElement, productItemElement);
    }
})


document.getElementById(sendId).addEventListener('click', event =>{  
    event.preventDefault();  
    try {
        let nameVal = document.getElementById(nameId).value.trim();
        if (!nameVal) {
            console.log('---> не заполнено название продукта');
            throw new Error('Заполните название продукта')
        }
        let textValue = document.getElementById(textId).value.trim();
        if (!textValue) {
            console.log('---> не заполнен отзыв продукта');
            throw new Error('Заполните отзыв продукта')
        }
        addNewFeedback(nameVal, textValue)
    } catch (error) {
        document.getElementById(errorId).textContent = error.message;
    }
});

/*
formEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.tagName === 'BUTTON') {
        messageEl.textContent = '';
        try {
            const nameValue = productNameEl.value.trim();
            const feedbackValue = feedbackEl.value.trim();
            if (!nameValue) {
                throw new Error('Поле "Наименование товара" не должно быть пустым!')
            }
            if (!feedbackValue) {
                throw new Error('Поле "Ваш отзыв" не должно быть пустым!')
            }
            addFeedback(nameValue, feedbackValue);
            productNameEl.value = '';
            feedbackEl.value = '';
        } catch (error) {
            messageEl.textContent = error.message;
        }

    }
})
*/

visitProductsButton.addEventListener('click', () => {
    window.location.href = '2.html';
});