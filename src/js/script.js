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
        document.querySelector(".testimonials__wrapper").append(element);
    });
}
// функция получения данных с сервера 
const getData = async (url) => {
    const res = await fetch(url);
    console.log(res);

    return res.json();
};

getData('http://localhost:3000/menu')
    .then(data => createTestimonials(data));

    
