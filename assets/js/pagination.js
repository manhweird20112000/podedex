let url = 'https://raw.githubusercontent.com/manhweird20112000/pokemon/master/pokedex.json';
let currentPage = 1;
let perPage = 9;
let start = 0;
let end = perPage;

window.addEventListener('scroll', function() {
    window.pageYOffset = 0
})

let next = document.querySelector('.pokedex-next');
let prev = document.querySelector('.pokedex-prev')

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

        })
    })
    .catch(function(err) {
        console.log(err);
    })

function render(arr) {

    let listPokedex = document.querySelector('.pokemon-wrapper');
    let htmls = '';
    arr.map((item, index) => {
        if (index >= start && index < end) {
            htmls += `<div class="pokemon__item">
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