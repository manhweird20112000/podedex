"use strict";
window.addEventListener('load', function() {

    let mainMenu = document.querySelector('.menu__list');
    let tabs = document.querySelectorAll('.container__item');
    mainMenu.querySelectorAll('li a').forEach((tab, index) => {
        tab.addEventListener('click', function(event) {
            let activeContainer = document.querySelector('.container__item.active-container');
            let activeTab = document.querySelector('.active-tab');

            activeContainer.classList.remove('active-container');
            tabs[index].classList.add('active-container');

            activeTab.classList.remove('active-tab')
            tab.classList.add('active-tab');

            event.preventDefault();
        })

    })

    let menu = document.querySelector('.overlay-mobile');
    let menuMobile = document.querySelector('.menu-mobile');
    menuMobile.onclick = function(e) {

            let mainMenu = document.querySelector('.mobile');


            menu.classList.add('active-menu');
            setTimeout(() => {
                mainMenu.classList.add('active-menu-mobile');
            }, 50);
            e.preventDefault();


        }
        // Call api type

    let urlType = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json';
    fetch(urlType)
        .then(response => response.json())
        .then(function(data) {
            data.forEach((item) => {
                let temp = `<div class="filter-type__item">
                <div class="filter-type__check ">

                </div>
                <span>
                    ${item.english}
                </span>
            </div>`;

                let listType = document.querySelector('.filter-type__list');
                listType.insertAdjacentHTML('beforeend', temp);
            })
        })

    let mobileMenu = document.querySelector('.mobile')
    mobileMenu.addEventListener('click', function(event) {
        if (event.target.closest('.close__menu-mobile')) {
            let activeMenu = document.querySelector('.active-menu-mobile');
            let activeOverlay = document.querySelector('.active-menu');

            activeMenu.classList.remove('active-menu-mobile');
            activeOverlay.classList.remove('active-menu');
        }
    })

    let filterMobile = document.querySelector('.filter-mobile');
    let filterPokedex = document.querySelector('.filter-pokedex');

    filterMobile.addEventListener('click', function() {


        menu.classList.add('active-menu');
        filterPokedex.classList.add('active-filter');
    })
    filterPokedex.addEventListener('click', function(event) {
        if (event.target.closest('.close__filter')) {
            menu.classList.remove('active-menu');
            filterPokedex.classList.remove('active-filter');
        }
    })

})