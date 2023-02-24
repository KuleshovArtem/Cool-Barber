// import { getData } from "../services/services";

// function promo () {

//     class Poster {
//         constructor (title, descr, text, parentSelector, ...classes) {
//             this.title = title;
//             this.descr = descr;
//             this.text = text;
//             this.parent = document.querySelector(parentSelector);
//         }
//         render () {
//             const element = document.createElement('section');
//             element.classList.add('promo');
//             element.innerHTML = `
//                 <div class="container">
//                     <div class="poster">
//                         <div class="poster__wrapper">
//                             <h1 class="poster__title">${this.title}</h1>
//                             <div class="poster__content">
//                                 <div class="poster__descr">${this.descr}</div>
//                                 <div class="poster__text">${this.text}</div>
//                             </div>
//                         </div>
//                         <a class="button" data-promoBtn >Book now</a>
//                     </div>
//                 </div>
//                 <div class="features">
//                     <div class="container">
//                         <div class="features__wrapper">
                            
//                         </div>   
//                     </div> 
//                 </div>
//             `;
//             this.parent.insertAdjacentElement("afterend", element);
//         }
//     }

//     // getData('http://localhost:3000/promo')
//     //     .then(data => {
//     //         const {title, descr, text} = data.poster;
//     //         new Poster(title, descr, text, 'header').render();
//     //     })
//     //     .catch(() => console.error('error'));

 
//     function showPoster(data) {
//         const {title, descr, text} = data.poster;  
//         const element = document.createElement('section');
//         element.classList.add('promo');
//         element.innerHTML = `
//             <div class="container">
//                 <div class="poster">
//                     <div class="poster__wrapper">
//                         <h1 class="poster__title">${title}</h1>
//                         <div class="poster__content">
//                             <div class="poster__descr">${descr}</div>
//                             <div class="poster__text">${text}</div>
//                         </div>
//                     </div>
//                     <a class="button" data-promoBtn >Book now</a>
//                 </div>
//             </div>
//             <div class="features">
//                 <div class="container">
//                     <div class="features__wrapper">
                        
//                     </div>   
//                 </div> 
//             </div>
//         `;
//         //document.querySelector('header').after(element); настроить асинхроность и запустить
//          document.querySelector('header').insertAdjacentElement("afterend", element);        
//     }

    
//     function showFeatures (data) {
//         const {features} = data;
//         features.forEach(({img, altImg, descr, text}) => {
//             const element = document.createElement('div');
//             element.classList.add('features__item');
//             element.innerHTML = `
//                 <div class="features__img">
//                     <img src=${img} alt=${altImg}>
//                 </div>
//                 <div class="features__descr">${descr}</div>
//                 <div class="features__text">${text}</div>
//             `;
//             document.querySelector('.features__wrapper').append(element);  
//         }); 
//     }

//     getData('http://localhost:3000')
//     .then(data => {
//         showPoster(data);
//         showFeatures(data);
//     })
//     .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки

// }

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
    //document.querySelector('header').after(element); настроить асинхроность и запустить
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

export {showPoster, showFeatures};





