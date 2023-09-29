const accordion = (selectorButtons, selectorContent) => {
    const closeButton = document.querySelectorAll(selectorButtons);
    const elems = document.querySelectorAll(selectorContent);

    closeButton.forEach((btn, i) => {
        btn.addEventListener('click', function () {
            elems[i].classList.toggle('hide');

            const image = btn.querySelector('img');
            if (elems[i].classList.contains('hide')) {
                image.src = './src/icons/open.svg';
            } else {
                image.src = './src/icons/close.svg';
            }
        });
    })

}
export default accordion;