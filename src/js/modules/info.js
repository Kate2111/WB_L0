const getInfo = () => {
    const prices = document.querySelectorAll('.total-old');
    const modalTest = document.getElementById('modal-info');

    prices.forEach(price => {
        price.addEventListener('mouseover', showDiscount);
        price.addEventListener('mouseout', hideDiscount);
    });

    function showDiscount(e) {
        const oldPrice = Number(this.firstElementChild.textContent);
        const discountInfo = Number(this.getAttribute('data-discount'));
        const discountUser = Number(this.getAttribute('data-user'));

        const discountAmountInfo = Math.floor(oldPrice * (discountInfo / 100));
        const discountAmountUser = Math.floor(oldPrice * (discountUser / 100));

        modalTest.innerHTML = `
            <div class="modal-info__content title__13">
                <p class="color-grey">Скидка <span>${discountInfo}%</span></p>
                <p>-${discountAmountInfo} com</p>
            </div>
            <div class="modal-info__content title__13">
                <p class="color-grey">Скидка покупателя <span>${discountUser}%</span></p>
                <p>-${discountAmountUser} com</p>
            </div>
        `;
        modalTest.style.top = `${e.clientY + 10}px`;
        modalTest.style.left = `${e.clientX - modalTest.offsetWidth / 2}px`;
        modalTest.style.display = 'flex';
    
    }

    function hideDiscount() {
        modalTest.style.display = 'none';
    }
}

const getInfoDelivery = () => {
    const prices = document.querySelectorAll('.delivery-free');
    const modalTest = document.getElementById('modal-info');
  

    prices.forEach(price => {
        price.addEventListener('mouseover', showDiscount);
        price.addEventListener('mouseout', hideDiscount);
    });

    function showDiscount(e) {
        modalTest.innerHTML = `
            <p class="title__13">
                Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно
            </p>
        `;
        modalTest.style.top = `${e.clientY + 10}px`;
        modalTest.style.left = `${e.clientX - modalTest.offsetWidth / 2}px`;
        modalTest.style.display = 'flex';
    
    }

    function hideDiscount() {
        modalTest.style.display = 'none';
    }
}

const getInfoStock = () => {
    const prices = document.querySelectorAll('.info__stock-img');
    const modalTest = document.getElementById('modal-info');
  

    prices.forEach(price => {
        price.addEventListener('mouseover', showDiscount);
        price.addEventListener('mouseout', hideDiscount);
    });

    function showDiscount(e) {
        const nameCompany = this.parentElement.textContent;
        modalTest.innerHTML = `
            <div>
                <p class="title__13-bold"> ${nameCompany}</p>
                <p class="title__13">ОГРН: 5167746237148</p>
                <p class="title__13">129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</p>
            </div>
            
        `;
        modalTest.style.top = `${e.clientY + 10}px`;
        modalTest.style.left = `${e.clientX - modalTest.offsetWidth / 2}px`;
        modalTest.style.display = 'flex';
    
    }

    function hideDiscount() {
        modalTest.style.display = 'none';
    }
}


export {getInfo, getInfoDelivery, getInfoStock};
