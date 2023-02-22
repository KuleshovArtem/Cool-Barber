window.addEventListener('DOMContentLoaded', () => {
    const 
        btnLogo = document.querySelector('[data-main]'), //объеденить одним дата атрибутом main сделать 1 обработчик
        blockPromo = document.querySelector('.promo'),
        btnPromo = document.querySelector('[data-promoBtn]'),
        blockAbout = document.querySelector('.about'),
        btnAbout = document.querySelector('[data-about]'),   //объеденить одним дата атрибутом main сделать 1 обработчик
        blockTestimonials = document.querySelector('.testimonials'),
        btnTestimonials = document.querySelector('[data-testimonials]'), //объеденить одним дата атрибутом main сделать 1 обработчик
        blockPrice = document.querySelector('.price'),
        blockConsultation = document.querySelector('.consultation'),
        formConsultation = document.querySelector('.consultation__wrapper'),
        blockContacts = document.querySelector('.contacts'),
        btnContact = document.querySelector('[data-contacts]'),
        blockTeam = document.querySelector('.team'),
        btnTeam = document.querySelectorAll('[data-team]'),
        btnShowPortfolio = document.querySelectorAll('.button-team');



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
            formConsultation.classList.remove('consultation__wrapper-below');
        }
    }
    //button menu 
    btnLogo.addEventListener('click', (e) => {
        showBlock();
        document.querySelectorAll('.team__item').forEach(i => i.remove());
        

    });
    btnAbout.addEventListener('click', () => showBlock());
    btnTestimonials.addEventListener('click', () => showBlock());

    btnPromo.addEventListener('click', () => {
        document.documentElement.scrollTop = '4490';
    });

    btnContact.addEventListener('click', () => showContacts());

    // show form
    function  showContacts () {
        blockContacts.classList.add('contacts-show-consultation');
        formConsultation.classList.add('consultation__wrapper-below');
        hideBlock();
        blockTeam.classList.add('hide');
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

    getData('http://localhost:3000/testimonials')
        .then(data => createTestimonials(data))
        .catch(() => console.error('error'))  // написать функционал вывода на страницу ошибки
        .then(() => slider());
        

    function createTeam(data) {
        data.forEach(({avatar, name, descrMaster, descrStyle, works }, i) => {
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
                <div class="team__gallery" data-gallery=${i}></div>
                <button class="button button-team" data-buttonTeam>See all works</button> 
            `;
            document.querySelector('.team__masters').append(element); 
        });
    }

    function showGalleryItem (data, key) {
        if(key) {
            data[key].works.forEach((item, e) => {
                if(e >= 8) {
                    const gallaryItem = document.createElement('div');
                    gallaryItem.classList.add("team__gallery-item");
                    gallaryItem.innerHTML = `
                        <img src=${item} alt="work">
                    `;
                    document.querySelectorAll('.team__gallery')[key].append(gallaryItem);
                }
            }); 
        } else {
            for( let i = 0; i < data.length; i++) {
                data[i].works.forEach((item, e) => {
                    if(e < 8) {
                        const gallaryItem = document.createElement('div');
                        gallaryItem.classList.add("team__gallery-item");
                        gallaryItem.innerHTML = `
                            <img src=${item} alt="work">
                        `;
                        document.querySelectorAll('.team__gallery')[i].append(gallaryItem);
                    }
                });              
            }
        }
    }

    function showBlockTeam () {
        getData('http://localhost:3000/team')
            .then(data => {  
                if(!document.querySelector('.team__item')) {
                    createTeam(data);
                    showGalleryItem(data);
                }
            })
            .then(()=> {
                hideBlock();
                blockTeam.classList.remove('hide');
                window.scrollTo(0, 0);
            })
            .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки
    }

    btnTeam.forEach(i => {
        i.addEventListener('click', () => showBlockTeam());
    });


    blockTeam.addEventListener('click', (e) => {
        let key = e.target.parentElement.children[1].attributes[1].nodeValue;

        if(e.target.tagName == "BUTTON") {
            
            getData('http://localhost:3000/team')
            .then(data => { 
                showGalleryItem(data, key);
            })
            .then(e.target.remove())
            .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки
        }
        
    });

    //about

    function showAbout (data) {
        data.forEach(({title, descr, picturesBig, picturesSmall}) => {
            const element = document.createElement('div');
            element.classList.add('about__box');
            element.innerHTML = `
                <div class="container">
                    <h2 class="title">${title}</h2>
                    <h3 class="subtitle">${descr}</h3>
                    <div class="about__wrapper">
                        <div class="about__column">
                            <div class="about__big-img">
                                <img src=${picturesBig[0]} alt="barber">
                            </div>
                            <div class="about__small-group">
                                <div class="about__small-img">
                                    <img src=${picturesSmall[0]} alt="barber">
                                </div>
                                <div class="about__small-img">
                                    <img src=${picturesSmall[1]} alt="barber">
                                </div>
                            </div>
                        </div>
                        <div class="about__column">
                            <div class="about__small-group">
                                <div class="about__small-img">
                                    <img src=${picturesSmall[2]} alt="barber">
                                </div>
                                <div class="about__small-img">
                                    <img src=${picturesSmall[3]} alt="barber">
                                </div>
                            </div>
                            <div class="about__big-img">
                                <img src=${picturesBig[1]} alt="barber">
                            </div>
                        </div>
                    </div>
                    <div class="about__buttons">
                        <a class="button button-big">Our masters and their masterpieces</a>
                        <a class="button button-transparent">Our Instagram</a>
                    </div>
                </div>
            `;
            document.querySelector('.about').append(element);
        });
    }
    
    getData('http://localhost:3000/about')
        .then(data => showAbout(data))
        .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки

    

});


