import { getData } from "../services/services";

function promo () {

    function showPoster(data) {
        const {title, descr, text} = data.poster;  
        const element = document.createElement('section');
        element.classList.add('promo');
        element.innerHTML = `
            <div class="container">
                <div class="poster">
                    <div class="poster__wrapper">
                        <h1 class="poster__title">${title}</h1>
                        <div class="poster__content">
                            <div class="poster__descr">${descr}</div>
                            <div class="poster__text">${text}</div>
                        </div>
                    </div>
                    <a class="button" data-promoBtn >Book now</a>
                </div>
            </div>
            <div class="features">
                <div class="container">
                    <div class="features__wrapper">
                        
                    </div>   
                </div> 
            </div>
        `;
        document.querySelector('header').insertAdjacentElement("afterend", element);        
    }

    
    function showFeatures (data) {
        const {features} = data;
        features.forEach(({img, altImg, descr, text}) => {
            const element = document.createElement('div');
            element.classList.add('features__item');
            element.innerHTML = `
                <div class="features__img">
                    <img src=${img} alt=${altImg}>
                </div>
                <div class="features__descr">${descr}</div>
                <div class="features__text">${text}</div>
            `;
            document.querySelector('.features__wrapper').append(element);  
        }); 
    }

    getData('http://localhost:3000/promo')
    .then(data => {
        showPoster(data);
        showFeatures(data);
    })
    .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки


}

export default promo;


                    // <div class="features__item">
                    //     <div class="features__img">
                    //         <img src="icons/promo/barber-shop.svg" alt="barber-shop">
                    //     </div>
                    //     <div class="features__descr">Briefly describe the benefit</div>
                    //     <div class="features__text">Long text, in two lines, for clarity and detail</div>
                    // </div>
                    // <div class="features__item">
                    //     <div class="features__img">
                    //         <img src="icons/promo/hair-gel.svg" alt="hair-gel">
                    //     </div>
                    //     <div class="features__descr">Briefly describe the benefit</div>
                    //     <div class="features__text">Long text, in two lines, for clarity and detail</div>
                    // </div>
                    // <div class="features__item">
                    //     <div class="features__img">
                    //         <img src="icons/promo/beard.svg" alt="beard">
                    //     </div>
                    //     <div class="features__descr">Briefly describe the benefit</div>
                    //     <div class="features__text">Long text, in two lines, for clarity and detail</div>
                    // </div> 
      