

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

export default slider;