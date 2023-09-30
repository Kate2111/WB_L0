import {getTotalValue, getTotalSale } from './amount';
import pay from './payNow';

const  getCountProduct = () => {
    const countItems = document.querySelectorAll('.count__item');
    const totalElements = document.querySelectorAll('.total-count');
    const oldPrices = document.querySelectorAll('.total [data-sale]');
    const currentPrices = document.querySelectorAll('.total [data-price]');

    countItems.forEach((item, i) => {
        const input = item.querySelector('input');
        const balanceValue = parseInt(input.getAttribute('data-limit'));
        const plusButton = item.querySelector('button[data-direction="plus"]');
        const minusButton = item.querySelector('button[data-direction="minus"]');
        const price = parseInt(currentPrices[i].getAttribute('data-price'));
        const oldPrice = parseInt(oldPrices[i].getAttribute('data-sale'));


        let count = parseInt(input.value);
        
        plusButton.addEventListener('click', () => {
            changeCount(1);
        });

        minusButton.addEventListener('click', () => {
            changeCount(-1);
        });
        
        updateButtonsState(count, balanceValue, plusButton, minusButton);
        updateTotalValue();

        function changeCount(value) {
            const newCount = count + value;
            if (newCount >= 1 && newCount <= balanceValue) {
                count = newCount;
                input.value = count;
                
                updatePrice(i, price, oldPrice, count);

                updateTotalValue();
            }
            updateButtonsState(count, balanceValue, plusButton, minusButton);
            getTotalValue ('#total_price', '.total [data-price]','data-price');
            getTotalValue ('#old_price', '.total [data-sale]', 'data-sale');
            getTotalSale('#total_price', '#old_price', '#sale');
            pay();
        }
    });

    function updateButtonsState(count, balanceValue, plusButton, minusButton) {
        count === balanceValue ? plusButton.disabled = true : plusButton.disabled = false;
        count === 1 ? minusButton.disabled = true : minusButton.disabled = false
    }  

    function updatePrice(id, price, oldPrice, count) {
        const priceNew = document.querySelectorAll('.total__item-new');
        const priceOld = document.querySelectorAll('.total__item-old');
        priceNew[id].textContent = price * count;
        priceOld[id].textContent = oldPrice * count;
    }

    function updateTotalValue() {
        const counts = document.querySelectorAll('.count__item input');
        let totalValue = 0;

        counts.forEach(input => {
            totalValue += parseInt(input.value);
        });
        totalElements.forEach(elem => elem.textContent = totalValue)
       
    };

}

export default getCountProduct;