fetch('https://raw.githubusercontent.com/manhweird20112000/pokemon/master/pokedex.json')
    .then(response => response.json())
    .then(function(data) {
        let dataType = data.map((item) => {
            return item.type;
        })
        return dataType;
    })
    .then(function(data) {
        getTypePokemon(data)
    })

function getTypePokemon(arr) {
    let type = arr.map((item) => {
        let typeHandle = [];
        for (let i = 0; i < item.length; i++) {

            switch (true) {
                case ['Stile', 'Dark', 'Rock'].includes(item[i]):
                    typeHandle.push(`<span style="color: #A1A1A1">${item[i]}<span>`);
                    break;
                case ['Grass', 'Bug'].includes(item[i]):
                    typeHandle.push(`<span style="color: #70A83B">${item[i]}<span>`);
                    break;
                case ['Ice', 'Water'].includes(item[i]):
                    typeHandle.push(`<span style="color: #A2CFF0">${item[i]}<span>`);
                    break;
                case ['Fire', 'Fighting', 'Dragon'].includes(item[i]):
                    typeHandle.push(`<span style="color: #F76545">${item[i]}<span>`);
                    break;
                case ['Normal', 'Gosth'].includes(item[i]):
                    typeHandle.push(`<span style="color: #76AADB">${item[i]}<span>`);
                    break;
                case ['Poison', 'Psychic', 'Fairy', 'Ghost'].includes(item[i]):
                    typeHandle.push(`<span style="color: #A974BC">${item[i]}<span>`);
                    break;
                case ['Ground'].includes(item[i]):
                    typeHandle.push(`<span style="color: #9B897B">${item[i]}<span>`);
                    break;
                case ['Electric'].includes(item[i]):
                    typeHandle.push(`<span style="color: #F7C545">${item[i]}<span>`);
                    break;
                default:
                    typeHandle.push(`<span style="color: #3dc7ef">${item[i]}<span>`);
                    break;

            }

        }
        return typeHandle;

    })
    return type;





}