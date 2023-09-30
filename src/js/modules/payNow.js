const pay = () => {
    const checkbox = document.querySelector("#pay");
    const button = document.querySelector(".amount__order-btn");
    const totalPrice = document.querySelector('.amount__item-pay').textContent;

    function updateButtonText() {
        !checkbox.checked 
        ? button.textContent = "Оплатить сейчас"
        : button.textContent = `Оплатить ${totalPrice}`;
    }

    checkbox.addEventListener("change", updateButtonText);

    updateButtonText();
}

export default pay;