import { postData } from "../services/services";

function consultation () {

    function showConsultation () {
        const element = document.createElement('div');
        element.classList.add('consultation__box');
        element.innerHTML = `
            <div class="container">
                <div class="consultation__wrapper">
                    <h2 class="consultation__title">Get in consultation with our expert barbers</h2>
                    <div class="consultation__descr">Expand Call-to-Action Details</div>
                    <form action="#" class="consultation__form">
                        <div class="consultation__form-wrapper">
                            <input required type="phone" name="phone" class="consultation__input" placeholder="+1 (___) ___-__-__" >
                            <input required type="email" name="email" class="consultation__input" placeholder="Email" >
                            <button class="button button-black">Book now</button>
                        </div>
                        <div class="consultation__approval">
                            <label for="">
                                <input required type="checkbox" name="checkbox" checked class="consultation__checkbox">
                                <div class="consultation__approval-text">By clicking on the button, you agree to the <a href="#">terms of processing personal data</a></div>
                            </label>
                            
                        </div>
                    </form>
                </div>
            </div>
        `;
        document.querySelector('.consultation').append(element);
    }

    showConsultation();

    const form = document.querySelector('form');

    postDataConsultation ();

    function postDataConsultation () { 
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(e);

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });       

            postData('http://localhost:3000/requests', JSON.stringify(object))
                .finally(() => {
                    form.reset();
                });
        });
    }
    
}

export default consultation;