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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function about () {
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
    
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/about')
        .then(data => showAbout(data))
        .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

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


const 
    blockPromo = document.querySelector('.promo'), 
    blockAbout = document.querySelector('.about'),
    blockTestimonials = document.querySelector('.testimonials'),
    blockPrice = document.querySelector('.price'),
    //blockConsultation = document.querySelector('.consultation'),
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
        formConsultation.classList.remove('consultation__wrapper-below');
    }
}
    // show form

function form () {
    const btnContact = document.querySelector('[data-contacts]');

    function  showContacts () {
        blockContacts.classList.add('contacts-show-consultation');
        formConsultation.classList.add('consultation__wrapper-below');
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

    btnPromo.addEventListener('click', () => {
        document.documentElement.scrollTop = '4490';
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
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });

// функция получения данных с сервера 
const getData = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return res.json();
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







window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_actionsBlocks__WEBPACK_IMPORTED_MODULE_3__.form)();
    (0,_modules_actionsBlocks__WEBPACK_IMPORTED_MODULE_3__.menu)();
    (0,_modules_testimonials__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_team__WEBPACK_IMPORTED_MODULE_1__["default"])();
    
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map