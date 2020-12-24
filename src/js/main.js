/*
* variables
*/
let rings = {
    tabType: document.querySelector('.js_tab_type'),
    typeContainer: document.querySelector('.js_type_container'),
    tabStone: document.querySelector('.js_tab_stone'),
    stoneContainer: document.querySelector('.js_stone_container'),


    type: [
        'img/i_r_1.png',
        'img/i_r_2.png',
        'img/i_r_3.png'
    ],
    stone: [
        {
            icon: 'img/i_1.png',
            size: {
                ct: [
                    '0.40ct',
                    '0.60ct',
                    '0.70ct',
                    '1.00ct',
                    '1.25ct',
                    '1.60ct',
                    '2.00ct',
                    '2.40ct',
                    '3.00ct',
                ]
            },
            title: 'Square Emerald Cut Diamond',
            text: 'The square emerald cut diamond is a variation of the Asscher cut. It is step cut, with a square shape and cut corners. This diamond shape produces a similar subtle elegance to the emerald cut, and is a popular shape for vintage styled solitaire rings.'
        },
        {
            icon: 'img/i_2.png',
            size: [
                '11',
                '12',
            ]
        },
        {
            icon: 'img/i_3.png',
            size: [
                '11',
                '12',
            ]
        },
        {
            icon: 'img/i_4.png',
            size: [
                '11',
                '12',
            ]
        },
        {
            icon: 'img/i_5.png',
            size: [
                '11',
                '12',
            ]
        },
        {
            icon: 'img/i_6.png',
            size: [
                '11',
                '12',
            ]
        },
        {
            icon: 'img/i_7.png',
            size: [
                '11',
                '12',
            ]
        },
        {
            icon: 'img/i_8.png',
            size: [
                '11',
                '12',
            ]
        },
        {
            icon: 'img/i_9.png',
            size: [
                '11',
                '12',
            ]
        },
        {
            icon: 'img/i_10.png',
            size: [
                '11',
                '12',
            ]
        }
    ],
};

/*
* functions dummy calls
* */
appendType();
appendStone();

/*
* main functions
* */
function appendType(){
    for( let i = 0; i < rings.type.length; i++){
        rings.typeContainer.insertAdjacentHTML('beforeend', `
            <div data-index="${i}" class="item js_type_item">
                <img src="${rings.type[i]}" alt="">
            </div>
        `)
    }
    selectType();
}

rings.tabType.addEventListener('click', () => {
    rings.typeContainer.classList.remove('hide')
});

function selectType() {
    rings.typeContainer.querySelectorAll('.js_type_item')
        .forEach(item => {
            item.addEventListener('click', () => {
                let thisIndex = item.dataset.index;

                rings.typeContainer.classList.add('hide');

                rings.tabType.querySelector('img')
                    .setAttribute('src', rings.type[thisIndex])
            })
    })
}

function appendStone(){
    for( let i = 0; i < rings.stone.length; i++){
        rings.stoneContainer.insertAdjacentHTML('beforeend', `
            <div data-index="${i}" class="item js_stone_item">
                <img src="${rings.stone[i].icon}" alt="">
            </div>
        `)
    }
    selectStone();
}

rings.tabStone.addEventListener('click', ()=>{
    rings.stoneContainer.classList.remove('hide')
});

function selectStone() {
    rings.stoneContainer.querySelectorAll('.js_stone_item')
        .forEach(item => {
            item.addEventListener('click', () => {
                let thisIndex = item.dataset.index;

                rings.stoneContainer.classList.add('hide');

                rings.tabStone.querySelector('img')
                    .setAttribute('src', rings.stone[thisIndex].icon)
            })
    })
}