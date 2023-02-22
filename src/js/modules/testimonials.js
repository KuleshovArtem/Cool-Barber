import { getData } from "../services/services"; 
import slider from "./slider";

 // генерирует верстку . отзывы

    function testimonials () {
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
    }

    export default testimonials;
        