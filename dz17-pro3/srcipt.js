'use strict';
const nameId = "name";
const textId = "text";
const sendId = "send";
const errorId = "error";

saveFeedback(nameV, textV)
{
    alert('ура')
}

document.getElementById(sendId).addEventListener('click', function(){    
    if (this.tagName === 'BUTTON')
    {
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
           saveFeedback(nameVal, textValue)
        } catch (error) {
            document.getElementById(errorId).textContent = error.message;
        }
    }
    event.preventDefault();
});

