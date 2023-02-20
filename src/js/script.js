window.addEventListener('DOMContentLoaded', () => {
    const 
        btnLogo = document.querySelector('[data-main]'),
        blockPromo = document.querySelector('.promo'),
        blockAbout = document.querySelector('.about'),
        blockTestimonials = document.querySelector('.testimonials'),
        blockPrice = document.querySelector('.price'),
        blockConsultation = document.querySelector('.consultation'),
        blockContacts = document.querySelector('.contacts'),
        btnContact = document.querySelector('[data-contacts]'),
        blockTeam = document.querySelector('.team'),
        btnTeam = document.querySelectorAll('[data-team]');


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
        }
        
    }
    
    btnLogo.addEventListener('click', () => showBlock());

    // show form
    function  showContacts () {
        const formConsultation = document.querySelector('.consultation__wrapper');

        blockContacts.style.marginTop= '0px';
        blockContacts.style.height = '1100px';
        formConsultation.classList.add('consultation__wrapper-bottom');
        hideBlock();
    }
    
    btnContact.addEventListener('click', () => showContacts());

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
   
    function createTeam(data) {
        data.forEach(({avatar, name, descrMaster, descrStyle, work1, work2, work3, work4, work5, work6, work7, work8 }) => {
            const element = document.createElement('div');
            element.classList.add('team__item');
            element.innerHTML = `
            <div class="team__header">
                <div class="team__avatar">
                    <img src=${avatar} alt="avatar">
                </div>
                <div class="team__name">${name}</div>
                <div class="team__descr">${descrMaster}</div>
                <div class="team__descr">${descrStyle}</div>
            </div>
            <div class="team__gallery">
                <div class="team__gallery-item"><img src=${work1} alt="work"></div>
                <div class="team__gallery-item"><img src=${work2} alt="work"></div>
                <div class="team__gallery-item"><img src=${work3} alt="work"></div>
                <div class="team__gallery-item"><img src=${work4} alt="work"></div>
                <div class="team__gallery-item"><img src=${work5} alt="work"></div>
                <div class="team__gallery-item"><img src=${work6} alt="work"></div>
                <div class="team__gallery-item"><img src=${work7} alt="work"></div>
                <div class="team__gallery-item"><img src=${work8} alt="work"></div>
            </div>
            <button class="button button-team">See all works</button>
            `;
            document.querySelector('.team__masters').append(element);
        });
    }

    getData('http://localhost:3000/testimonials')
        .then(data => createTestimonials(data))
        .catch(() => console.error('error'))  // написать функционал вывода на страницу ошибки
        .then(() => slider());


    getData('http://localhost:3000/team')
        .then(data => createTeam(data))
        .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки

    function showBlockTeam () {
        getData('http://localhost:3000/team')
            .then(()=> {
                //hideBlock();
                //blockTeam.classList.remove('hide');
               // window.scrollTo(0, 0);
            })
            //.then(data => createTeam(data))
            .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки
    }

    btnTeam.forEach(i => {
        i.addEventListener('click', () => showBlockTeam());
    });


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

    
   

   

});
