window.addEventListener('DOMContentLoaded', () => {
    const 
        btnLogo = document.querySelector('[data-main]'),
        blockPromo = document.querySelector('.promo'),
        blockAbout = document.querySelector('.about'),
        blockTestimonials = document.querySelector('.testimonials'),
        blockPrice = document.querySelector('.price'),
        blockConsultation = document.querySelector('.consultation'),
        blockContacts = document.querySelector('.contacts'),
        btnContact = document.querySelector('[data-contacts]');


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
        }
        
    }
    function showBlockTeam () {

    }

    // функция получения данных с сервера 
    const getData = async (url) => {
        const res = await fetch(url);
        return res.json();
    };

    // генерирует верстку . отзывы
    function createTestimonials(data) {
        data.forEach(({img, alt, descr, text}) => {
            const element = document.createElement('div');
            element.classList.add("testimonials__item");
            element.innerHTML = `
            <div class="testimonials__img">
                <img src=${img} alt=${alt}>
            </div>
            <div class="testimonials__descr">${descr}</div>
            <div class="testimonials__text">${text}</div>
            <a class="testimonials__link">Read full testimonial</a>
            `;
            document.querySelector(".testimonials__inner").append(element); 
        });
    }

    getData('http://localhost:3000/testimonials')
    .then(data => createTestimonials(data))
    .catch(() => console.error('error'))  // написать функционал вывода на страницу ошибки
    .then(() => slider());


//slider
    function slider () {
        const slides = document.querySelectorAll('.testimonials__item'),
            slidesField = document.querySelector('.testimonials__inner'),
            btnNext = document.querySelector('.testimonials__slider-next'),
            btnPrev = document.querySelector('.testimonials__slider-prev'),
            widthSlide = window.getComputedStyle(slides[0]).width;
        let offset = 0;

        //удаление у строки букв
        function deleteNotDigits(str) {
            return +str.replace(/\D/g, '');
        }
        //
        btnNext.addEventListener('click', () => {
            if(offset == (deleteNotDigits(widthSlide) + 20) * (slides.length - 4)) {
                offset = 0;
            } else {
                offset += deleteNotDigits(widthSlide) + 20;
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        });

        btnPrev.addEventListener('click', () => {
            if(offset == 0) {
                offset = (deleteNotDigits(widthSlide) + 20) * (slides.length - 4);
            } else {   
                offset -= deleteNotDigits(widthSlide) + 20;
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        });
    }

    // show form

    function  showContacts () {
        const formConsultation = document.querySelector('.consultation__wrapper');

        blockContacts.style.marginTop= '0px';
        blockContacts.style.height = '1100px';
        formConsultation.classList.add('consultation__wrapper-bottom');
        hideBlock();
    }
    
    btnContact.addEventListener('click', () => showContacts());
    btnLogo.addEventListener('click', () => showBlock());
    
   

   

});