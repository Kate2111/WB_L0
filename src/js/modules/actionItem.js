export const getBalanceStoke = () => {
    const countRedElements = document.querySelectorAll('[data-balance]');

    countRedElements.forEach(elem => {
        const balanceValue = parseInt(elem.getAttribute('data-balance')); 
        if (balanceValue > 5) {
            elem.classList.add('hide');
        }
    });
}

export const getPrice = () => {
    const priceElements = document.querySelectorAll('[data-price]');
    
    priceElements.forEach(elem => {
        const priceValue = elem.getAttribute('data-price'); 
        
        if (priceValue.length > 6) {
            elem.classList.remove('title__20');
            elem.classList.add('title__16-bold');
        }
    });
}

export const addFavorite = () => {
    const likes = document.querySelectorAll('.count__favorite');

    likes.forEach(item => {
        const like = item.querySelector('svg');

        item.addEventListener('click', () => {
            if(!like.classList.contains('active-like')){
                alert('Товар добавлен в избранное');
                like.classList.add('active-like');
            } else {
                like.classList.remove('active-like')
            }
        })
    })
}

export const deleteItem = () => {
    const delBtns = document.querySelectorAll('.count__remove');

    delBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const basketItem = btn.closest('.basket__item');
            basketItem.remove();
        });
    });
}