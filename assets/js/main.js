window.addEventListener('load', function() {
    let pokedex = document.querySelector('.pokemon-slide-wrapper');
    const legendaries = [{
            id: 1,
            name: 'Raikou',
            imfomation: 'Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.',
            image: 'https://cdn.bulbagarden.net/upload/thumb/c/c1/243Raikou.png/1200px-243Raikou.png',
            maxbase: {
                HP: 384,
                Attack: 295,
                Defense: 273,
                SpAttack: 361,
                SpDefense: 328,
                Speed: 361
            },
            base: {
                HP: 90,
                Attack: 85,
                Defense: 75,
                SpAttack: 115,
                SpDefense: 110,
                Speed: 115
            },
            type: [
                'Electric'
            ]

        },
        // {
        //     id: 2,
        //     name: 'Entei',
        //     imfomation: 'Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.',
        //     image: 'https://i.pinimg.com/originals/c5/6a/4c/c56a4c54379e0cabfc70899594ad691b.png',
        //     maxbase: {
        //         HP: 434,
        //         Attack: 361,
        //         Defense: 295,
        //         SpAttack: 306,
        //         SpDefense: 273,
        //         Speed: 328
        //     },
        //     base: {
        //         HP: 115,
        //         Attack: 115,
        //         Defense: 85,
        //         SpAttack: 90,
        //         SpDefense: 75,
        //         Speed: 100
        //     },
        //     type: [
        //         'Fire'
        //     ]

        // },
        {
            id: 3,
            name: 'Entei',
            imfomation: 'Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png',
            maxbase: {
                HP: 404,
                Attack: 273,
                Defense: 361,
                SpAttack: 306,
                SpDefense: 361,
                Speed: 295
            },
            base: {
                HP: 100,
                Attack: 75,
                Defense: 115,
                SpAttack: 90,
                SpDefense: 115,
                Speed: 85
            },
            type: [
                'Fire'
            ]

        },
        {
            id: 4,
            name: 'Lugia',
            imfomation: 'Lugia’s wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png',
            maxbase: {
                HP: 416,
                Attack: 360,
                Defense: 394,
                SpAttack: 306,
                SpDefense: 447,
                Speed: 350
            },
            base: {
                HP: 106,
                Attack: 90,
                Defense: 130,
                SpAttack: 190,
                SpDefense: 154,
                Speed: 110
            },
            type: [
                'Psychic'
            ]

        },
        {
            id: 5,
            name: 'Kyogre',
            imfomation: 'Through Primal Reversion and with nature’s full power, it will take back its true form. It can summon storms that cause the sea levels to rise.',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png',
            maxbase: {
                HP: 404,
                Attack: 328,
                Defense: 306,
                SpAttack: 438,
                SpDefense: 416,
                Speed: 306
            },
            base: {
                HP: 100,
                Attack: 100,
                Defense: 90,
                SpAttack: 150,
                SpDefense: 140,
                Speed: 90
            },
            type: [
                'Water'
            ]

        },
        {
            id: 6,
            name: 'Darkrai',
            imfomation: 'It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/491.png',
            maxbase: {
                HP: 344,
                Attack: 306,
                Defense: 306,
                SpAttack: 405,
                SpDefense: 306,
                Speed: 383
            },
            base: {
                HP: 70,
                Attack: 90,
                Defense: 90,
                SpAttack: 135,
                SpDefense: 90,
                Speed: 152
            },
            type: [
                'Dark'
            ]

        },
        {
            id: 7,
            name: 'Virizion',
            imfomation: 'A legend tells of this Pokémon working together with Cobalion and Terrakion to protect the Pokémon of the Unova region.',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/640.png',
            maxbase: {
                HP: 386,
                Attack: 306,
                Defense: 267,
                SpAttack: 306,
                SpDefense: 392,
                Speed: 346
            },
            base: {
                HP: 91,
                Attack: 90,
                Defense: 72,
                SpAttack: 90,
                SpDefense: 129,
                Speed: 108
            },
            type: [
                'Grass'
            ]

        },
        // {
        //     id: 8,
        //     name: 'Dialga',
        //     imfomation: 'A Pokémon spoken of in legend. It is said that time began moving when Dialga was born.',
        //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/483.png',
        //     maxbase: {
        //         HP: 404,
        //         Attack: 372,
        //         Defense: 372,
        //         SpAttack: 438,
        //         SpDefense: 328,
        //         Speed: 306
        //     },
        //     base: {
        //         HP: 100,
        //         Attack: 120,
        //         Defense: 120,
        //         SpAttack: 150,
        //         SpDefense: 100,
        //         Speed: 90
        //     },
        //     type: [
        //         'Steel', 'Dragon'
        //     ]

        // },
        // {
        //     id: 9,
        //     name: 'Uxie',
        //     imfomation: 'Known as “The Being of Knowledge.” It is said that it can wipe out the memory of those who see its eyes.',
        //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/480.png',
        //     maxbase: {
        //         HP: 35,
        //         Attack: 273,
        //         Defense: 394,
        //         SpAttack: 273,
        //         SpDefense: 394,
        //         Speed: 317
        //     },
        //     base: {
        //         HP: 75,
        //         Attack: 75,
        //         Defense: 130,
        //         SpAttack: 75,
        //         SpDefense: 130,
        //         Speed: 95
        //     },
        //     type: [
        //         'Psychic'
        //     ]

        // },
    ]



})