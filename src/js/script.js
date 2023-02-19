window.addEventListener('DOMContentLoaded', () => {

// // функция получения данных с сервера 
// const getData = async (url) => {
//     const res = await fetch(url);
//     return res.json();
// };

// // генерирует верстку . отзывы
// function createTestimonials(data) {
//     data.forEach(({img, alt, descr, text}) => {
//         const element = document.createElement('div');
//         element.classList.add("testimonials__item");
//         element.innerHTML = `
//         <div class="testimonials__img">
//             <img src=${img} alt=${alt}>
//         </div>
//         <div class="testimonials__descr">${descr}</div>
//         <div class="testimonials__text">${text}</div>
//         <a class="testimonials__link">Read full testimonial</a>
//         `;
//         document.querySelector(".testimonials__inner").append(element); 
//     });
// }

// getData('http://localhost:3000/menu')
//     .then(data => createTestimonials(data));
});

const slides = document.querySelectorAll('.testimonials__item'),
//slider = document.querySelector('.testimonials'),
//slidesWrapper = document.querySelector('.testimonials__wrapper'),
slidesField = document.querySelector('.testimonials__inner'),
btnNext = document.querySelector('.testimonials__slider-next'),
btnPrev = document.querySelector('.testimonials__slider-prev'),
//width = window.getComputedStyle(slidesWrapper).width,
widthSlide = window.getComputedStyle(slides[2]).width;

let offset = 0;

//удаление у строки букв
function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
}
//;
btnNext.addEventListener('click', () => {
    
    if(offset == (deleteNotDigits(widthSlide) + 20) * (slides.length - 4)) {
        offset = 0;
    } else {
        offset += deleteNotDigits(widthSlide) + 20;
    }
    console.log(offset);
    slidesField.style.transform = `translateX(-${offset}px)`;
});

btnPrev.addEventListener('click', () => {
    console.log(slides.length);
    if(offset == 0) {
        offset = (deleteNotDigits(widthSlide) + 20) * (slides.length - 4);
    } else {   
        offset -= deleteNotDigits(widthSlide) + 20;
    }
    console.log(offset);

    slidesField.style.transform = `translateX(-${offset}px)`;

});