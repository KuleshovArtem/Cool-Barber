

const 
    blockPromo = document.querySelector('.promo'), 
    blockAbout = document.querySelector('.about'),
    blockTestimonials = document.querySelector('.testimonials'),
    blockPrice = document.querySelector('.price'),
    
    formConsultation = document.querySelector('.consultation__wrapper'),
    blockContacts = document.querySelector('.contacts'),
    
    blockTeam = document.querySelector('.team');

function hideBlock() {
    if(!blockPromo.classList.contains('hide')){
        blockPromo.classList.add('hide');
        blockAbout.classList.add('hide');
        blockTestimonials.classList.add('hide');
        blockPrice.classList.add('hide');
    } 
}

function showBlock () {
    if(blockPromo.classList.contains('hide')){
        blockPromo.classList.remove('hide');
        blockAbout.classList.remove('hide');
        blockTestimonials.classList.remove('hide');
        blockPrice.classList.remove('hide');
        blockTeam.classList.add('hide');
        blockContacts.classList.remove('contacts-show-consultation');
        //formConsultation.classList.remove('consultation__wrapper-below'); // генерация верстки в функции ошибка
    }
}
    // show form

function form () {
    const btnContact = document.querySelector('[data-contacts]');

    function  showContacts () {
        blockContacts.classList.add('contacts-show-consultation');
        //formConsultation.classList.add('consultation__wrapper-below'); не работает 
        hideBlock();
        blockTeam.classList.add('hide');
    } 

    btnContact.addEventListener('click', () => showContacts());
}

function menu () {
    const btnLogo = document.querySelectorAll('[data-main]');
    const btnPromo = document.querySelector('[data-promoBtn]');

    btnLogo.forEach(i => {
        i.addEventListener('click', (e) => {
            showBlock();
            document.querySelectorAll('.team__item').forEach(i => i.remove());
        });
    });

    // btnPromo.addEventListener('click', () => {
    //     document.documentElement.scrollTop = '4490';
    // });
    // в блоке promo
}


export {hideBlock, showBlock, form, menu};