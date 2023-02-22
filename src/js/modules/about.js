import { getData } from "../services/services";

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
    
    getData('http://localhost:3000/about')
        .then(data => showAbout(data))
        .catch(() => console.error('error'));  // написать функционал вывода на страницу ошибки
}

export default about;