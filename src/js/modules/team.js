import { getData } from "../services/services";
import { hideBlock } from "./actionsBlocks";

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
}

export default team;