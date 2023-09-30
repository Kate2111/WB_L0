function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector); 
    modal.classList.add('hide');
    modal.classList.remove('show');
}

function openModal(modalSelector) {
    
    const modal = document.querySelector(modalSelector); 
    console.log(modal);
    modal.classList.add('show');
    modal.classList.remove('hide');
}

function modal(triggerSelector, modalSelector) {
    const modalTrigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector); 

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector));
    }); 

    modal.addEventListener('click', (e) => {
        console.log(e.target.tagName);
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector); 
        }
    });
   
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) { 
            closeModal(modalSelector);
        }
    }); 
}


export default modal;
export {closeModal};
export {openModal};