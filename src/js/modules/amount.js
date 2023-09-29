export const getTotalValue = (selectorTotal, selectorItem, selectorAttribute) => {
    const totalPrice = document.querySelector(selectorTotal);
    const currentPriceItems = document.querySelectorAll(selectorItem);

    let sum = 0;

    currentPriceItems.forEach(element => {
        const priceValue = parseFloat(element.textContent);
        sum += priceValue;
      
    });

    totalPrice.textContent = sum;
}

export const getTotalSale = (selectorCurrent, selectorOld, selectorSale) => {
    const price = document.querySelector(selectorCurrent);
    const oldPrice = document.querySelector(selectorOld);
    const sale = document.querySelector(selectorSale);
    
    sale.textContent = parseInt(price.textContent) - parseInt(oldPrice.textContent);
   
}