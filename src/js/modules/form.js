/* function valideForms(form) {
    $(form).validate({
        rules: {
            name: 'required',
            phone: 'required',
            email: {
                    required: true,
                    email: true
            }
        },
        messages: {
            name: 'Пожалуйста, введите свое имя',
            phone: 'Пожалуйста, введите свой номер телефона',
            email: {
                required: 'Пожалуйста, введите свою почту',
                email: 'Неправильно введен адрес почты'
            }
        }
    });
};

async function forms(formSelector, selectorConsultation, selectorOrder, selectorOverlay, selectorThanks) {
    const forms = document.querySelectorAll(formSelector);
    const consultation = document.getElementById(selectorConsultation);
    const order = document.getElementById(selectorOrder);
    const overlay = document.querySelector(selectorOverlay);
    const thanks = document.getElementById(selectorThanks);

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    forms.forEach(item => {
        bindPostData(item);
    });

    async function bindPostData(form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            
            if ($(form).valid()) {
                const formData = new FormData(form);
                const formDataForAuth = Object.fromEntries(formData.entries());
                const json = JSON.stringify(formDataForAuth);

                try {
                    await postData('users', json);
                    form.reset();
                    consultation.style.display = 'none';
                    order.style.display = 'none';
                    overlay.style.display = 'block';
                    thanks.style.display = 'block';
                } catch (error) {
                    console.error('Ошибка при отправке данных:', error);
                }
            }
        });
    }

}

export default forms;
 */
//import cartItem from './modules/cartItem';


document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('.addressee');
    form.addEventListener('submit', formSend);

    function formSend(e) {
        e.preventDefault();

        const error = formValidate(form);
    }

    const formValidate = (form) => {
        let error = 0;
        const inputRequer = document.querySelectorAll(required);
        console.log(inputRequer);

        for(let i=0; i<inputRequer.length; i++){
            const input = inputRequer[i];
            formRemoveError(input);
        }
    }

    const formRemoveError = (input) => {
        input.nextElementSibling.classList.add('.show')
    }
})

