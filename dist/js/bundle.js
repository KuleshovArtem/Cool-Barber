/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/about.js":
/*!*********************************!*\
  !*** ./src/js/modules/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showAbout": () => (/* binding */ showAbout)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


// function about () {
//     //about

    function showAbout (data) {
        data.forEach(({title, descr, picturesBig, picturesSmall}) => {
            const element = document.createElement('section');
            element.classList.add('about');
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
            document.querySelector('header').after(element);
        });
    // }
    
    // getData('http://localhost:3000/about')
    //     .then(data => showAbout(data))
    //     .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки
}

// export default about;


/***/ }),

/***/ "./src/js/modules/actionsBlocks.js":
/*!*****************************************!*\
  !*** ./src/js/modules/actionsBlocks.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "hideBlock": () => (/* binding */ hideBlock),
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "showBlock": () => (/* binding */ showBlock)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _promo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo */ "./src/js/modules/promo.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/js/modules/about.js");




// getData('http://localhost:3000')
//     .then(data => {
//         const promo = data.promo;   
//         console.dir(data);
//         // showPoster(data);
//         // showFeatures(data);
//     })
//     .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки
function loadScript (data) {
    return new Promise ((resolve, reject) => {
        let src = data;
        resolve(src);
    });
}
loadScript('http://localhost:3000')
    .then(data => {
        let promo = data + '/promo';
        console.log(promo);
        (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getData)(promo)
            .then(data => {
                (0,_promo__WEBPACK_IMPORTED_MODULE_1__.showPoster)(data);
                (0,_promo__WEBPACK_IMPORTED_MODULE_1__.showFeatures)(data);
            })
            .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки
        return data;
    })
    .then(data => {
        let about = data + '/about';
        console.log(about);
        (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getData)(about)
            .then(data => (0,_about__WEBPACK_IMPORTED_MODULE_2__.showAbout)(data))
            .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки
    });






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




/***/ }),

/***/ "./src/js/modules/consultation.js":
/*!****************************************!*\
  !*** ./src/js/modules/consultation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function consultation () {

    function showConsultation () {
        const element = document.createElement('div');
        element.classList.add('consultation__box');
        element.innerHTML = `
            <div class="container">
                <div class="consultation__wrapper">
                    <h2 class="consultation__title">Get in consultation with our expert barbers</h2>
                    <div class="consultation__descr">Expand Call-to-Action Details</div>
                    <form action="#" class="consultation__form">
                        <div class="consultation__form-wrapper">
                            <input required type="phone" name="phone" class="consultation__input" placeholder="+1 (___) ___-__-__" >
                            <input required type="email" name="email" class="consultation__input" placeholder="Email" >
                            <button class="button button-black">Book now</button>
                        </div>
                        <div class="consultation__approval">
                            <label for="">
                                <input required type="checkbox" name="checkbox" checked class="consultation__checkbox">
                                <div class="consultation__approval-text">By clicking on the button, you agree to the <a href="#">terms of processing personal data</a></div>
                            </label>
                            
                        </div>
                    </form>
                </div>
            </div>
        `;
        document.querySelector('.consultation').append(element);
    }

    showConsultation();

    const form = document.querySelector('form');

    postDataConsultation ();

    function postDataConsultation () { 
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(e);

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });       

            (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/requests', JSON.stringify(object))
                .finally(() => {
                    form.reset();
                });
        });
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (consultation);

/***/ }),

/***/ "./src/js/modules/promo.js":
/*!*********************************!*\
  !*** ./src/js/modules/promo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showFeatures": () => (/* binding */ showFeatures),
/* harmony export */   "showPoster": () => (/* binding */ showPoster)
/* harmony export */ });
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









/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/modules/team.js":
/*!********************************!*\
  !*** ./src/js/modules/team.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _actionsBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionsBlocks */ "./src/js/modules/actionsBlocks.js");



function team () {

    const btnTeam = document.querySelectorAll('[data-team]');
    const blockTeam = document.querySelector('.team');
    // btnShowPortfolio = document.querySelectorAll('.button-team');

    function createTeam(data) {
        data.forEach(({avatar, name, descrMaster, descrStyle}, i) => {
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
        (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/team')
            .then(data => {  
                if(!document.querySelector('.team__item')) {
                    createTeam(data);
                    showGalleryItem(data);
                }
            })
            .then(()=> {
                (0,_actionsBlocks__WEBPACK_IMPORTED_MODULE_1__.hideBlock)();
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
            (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/team')
            .then(data => { 
                showGalleryItem(data, key);
            })
            .then(e.target.remove())
            .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки
        }
        
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (team);

/***/ }),

/***/ "./src/js/modules/testimonials.js":
/*!****************************************!*\
  !*** ./src/js/modules/testimonials.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider.js");
 


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
    
    
        (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/testimonials')
            .then(data => createTestimonials(data))
            .catch(() => console.error('error'))  // написать функционал вывода на страницу ошибки
            .then(() => (0,_slider__WEBPACK_IMPORTED_MODULE_1__["default"])()); 
    }

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testimonials);
        

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });

// функция получения данных с сервера 
const getData = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};

//отправка данных
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_testimonials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/testimonials */ "./src/js/modules/testimonials.js");
/* harmony import */ var _modules_team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/team */ "./src/js/modules/team.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about */ "./src/js/modules/about.js");
/* harmony import */ var _modules_actionsBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/actionsBlocks */ "./src/js/modules/actionsBlocks.js");
/* harmony import */ var _modules_consultation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/consultation */ "./src/js/modules/consultation.js");
/* harmony import */ var _modules_promo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/promo */ "./src/js/modules/promo.js");









window.addEventListener('DOMContentLoaded', () => {

    // promo();
    (0,_modules_actionsBlocks__WEBPACK_IMPORTED_MODULE_3__.form)();
    (0,_modules_actionsBlocks__WEBPACK_IMPORTED_MODULE_3__.menu)();
   // testimonials();
    (0,_modules_team__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_consultation__WEBPACK_IMPORTED_MODULE_4__["default"])();
    
    //about();
    
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map