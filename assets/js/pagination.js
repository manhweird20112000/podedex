window.addEventListener('DOMContentLoaded', function() {
    let url = 'https://raw.githubusercontent.com/manhweird20112000/pokemon/master/pokedex.json';
    let currentPage = 1;
    let perPage = 9;
    let start = 0;
    let end = perPage;


    let next = document.querySelector('.pokedex-next');
    let prev = document.querySelector('.pokedex-prev');
    let listPokedex = document.querySelector('.pokemon-wrapper');





    fetch(url)
        .then(response => response.json())
        .then(function(data) {
            let totalPage = Math.ceil(data.length / perPage);
            render(data);

            next.addEventListener('click', function() {
                currentPage++;
                if (currentPage > totalPage) {
                    currentPage = totalPage;
                }
                start = (currentPage - 1) * perPage;
                end = currentPage * perPage;
                window.scrollTo({ top: 0, behavior: 'smooth' });
                render(data);
                getCards(data);
            })
            prev.addEventListener('click', function() {
                currentPage--;
                if (currentPage <= 1) {
                    currentPage = 1;
                }
                start = (currentPage - 1) * perPage;
                end = currentPage * perPage;
                render(data);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                getCards(data);
            })
            return data;
        })
        .then(function(data) {
            getCards(data);
        })
        .catch(function(err) {


        })

    function render(arr) {


        let htmls = '';
        arr.map((item, index) => {
            if (index >= start && index < end) {
                htmls += `<div class="pokemon__item" pokedex="${item.id}" >
        <div class="pokemon__info">
           
            <h5 class="pokemon__heading">
                ${item.name.english}
            </h5>
            
            <div class="pokemon__fight">
                <div class="pokemon-fight__item">
                    <section>

                        ${item.base.Attack}

                    </section>
                    <span>
                        Attack
                    </span>
                </div>
                <div class="pokemon-fight__item">
                    <section>

                    ${item.base.Defense}

                    </section>
                    <span>
                        Defense
                    </span>
                </div>
            </div>
            
            <div class="pokemon-type">
                <span class="pokemon-type__item">
                    ${item.type[0]}
                </span>

            </div>
            </div>
            <div class="pokemon__image">
                <img src="${item.image}" alt="">
            </div>
        </div>`;
                return htmls;
            }
        })
        listPokedex.innerHTML = htmls;
    }


})

function getCards(arr) {
    let cards = document.querySelectorAll('.pokemon__item');
    cards.forEach((card) => {
        card.addEventListener('click', function() {
            let overlayPokemon = document.querySelector('.overlay');
            let indexPokedex = card.getAttribute('pokedex') - 1;

            overlayPokemon.classList.add('active-overlay');
            popupPokemon(arr[indexPokedex]);
            console.log(arr[indexPokedex]);



        })
    })
}
const mainPopup = document.querySelector('.card-pokemon');

function popupPokemon(item) {

    if (mainPopup) {
        let toast = document.createElement('div');
        mainPopup.addEventListener('click', function(event) {
            if (event.target.closest('.close-model')) {
                overlayPokemon.classList.remove('active-overlay');
                mainPopup.removeChild(toast);
                clearTimeout()
            }
        })

        let overlayPokemon = document.querySelector('.overlay');
        toast.classList.add('wrapper-card-pokemon');



        toast.innerHTML = `
        <div class="close-model">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="35.4683" height="9.21254" rx="3" transform="matrix(0.705326 0.708883 -0.705326 0.708883 6.5 0.328125)" fill="#212121"/>
                <rect width="35.4683" height="9.21254" rx="3" transform="matrix(-0.705326 0.708883 -0.705326 -0.708883 31.5156 6.53125)" fill="#212121"/>
            </svg>
        </div>
        <div class="card-pokemon__model">
            <div class="card-pokemon__img">
                <img src="${item.image}" alt="">
                <div class="card-pokemon__type">
                    <span class="pokemon-type__item">
                       ${item.type[0]}
                    </span>
                </div>
            </div>
            <div class="card-pokemon__info">
                <h5 class="card-pokemon__name">
                    ${item.name.english}
                </h5>
                <div class="card-pokemon__abilities">
                    <span class="pokemon-abilities__title">
                        Abilities
                    </span>
                    <p class="pokemon-abilities__content">
                        Justified
                    </p>
                </div>
                <div class="card-pokemon__index">
                <div class="pokemon-index__item">
                    <p class="pokemon-index__title">
                                            Healthy Points
                                        </p>
                                        <span>
                                        ${item.base.HP}
                                        </span>
                                        <div class="pokemon-index__bar">
                                            <div class="bar" style="background-color: #6aa039;">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="pokemon-index__item">
                                        <p class="pokemon-index__title">
                                            Experience
                                        </p>
                                        <span>
                                        106
                                        </span>
                                        <div class="pokemon-index__bar">
                                            <div class="bar" style="background-color: #f2b807;">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-pokemon__fight">
                                    <div class="pokemon-fight__item">
                                        <div class="pokemon-fight__circle">
                                            ${item.base.Attack}
                                        </div>
                                        <span class="pokemon-fight__title">
                                        Attack
                                    </span>
                                    </div>
                                    <div class="pokemon-fight__item">
                                        <div class="pokemon-fight__circle">
                                        ${item.base.Defense}
                                        </div>
                                        <span class="pokemon-fight__title">
                                        Defense
                                    </span>
                                    </div>
                                    <div class="pokemon-fight__item">
                                        <div class="pokemon-fight__circle">
                                        ${item.base.SpAttack}
                                        </div>
                                        <span class="pokemon-fight__title">
                                        Sp.Attack
                                    </span>
                                    </div>
                                    <div class="pokemon-fight__item">
                                        <div class="pokemon-fight__circle">
                                        ${item.base.SpDefense}
                                        </div>
                                        <span class="pokemon-fight__title">
                                        Sp.Defense
                                    </span>
                                    </div>
                                </div>
                            </div>

        </div>`;

        mainPopup.appendChild(toast);

    }
}