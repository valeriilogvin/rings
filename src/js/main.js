/*
* variables
*/
let rings = {
    tabType: document.querySelector('.js_tab_type'),
    typeContainer: document.querySelector('.js_type_container'),
    tabStone: document.querySelector('.js_tab_stone'),
    stoneContainer: document.querySelector('.js_stone_container'),
    tabSize: document.querySelector('.js_tab_size'),
    sizeContainer: document.querySelector('.js_size_container'),

    selectedType: 0,
    selectedStone: 0,
    selectedSizeType: 'ct',
    selectedSize: '0.40ct',

    type: [
        'img/type/0.png',
        'img/type/1.png',
        'img/type/2.png'
    ],

    stone: [
        {
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
        }
    ],
};

/*
* functions dummy calls
* */
appendTypeIcon();
appendStoneIcon();
appendStoneSize();

/*
* main functions
* */
function appendTypeIcon(){
    for( let i = 0; i < rings.type.length; i++){
        rings.typeContainer.insertAdjacentHTML('beforeend', `
            <div data-index="${i}" class="item js_type_item">
                <img src="${rings.type[i]}" alt="">
            </div>
        `)
    }
    typeIconSwitcher();
}

rings.tabType.addEventListener('click', () => {
    rings.typeContainer.classList.remove('hide')
});

function typeIconSwitcher() {
    rings.typeContainer.querySelectorAll('.js_type_item')
        .forEach(item => {
            item.addEventListener('click', () => {
                let thisIndex = item.dataset.index;

                rings.selectedType = +thisIndex;

                rings.typeContainer.classList.add('hide');

                rings.tabType.querySelector('img')
                    .setAttribute('src', rings.type[thisIndex])
            })
    })
}

function appendStoneIcon(){
    for( let i = 0; i < rings.stone.length; i++){
        rings.stoneContainer.insertAdjacentHTML('beforeend', `
            <div data-index="${i}" class="item js_stone_item">
                <img src="img/stone/${i}/icon.png" alt="">
            </div>
        `)
    }
    stoneIconSwitcher();
}

rings.tabStone.addEventListener('click', ()=>{
    rings.stoneContainer.classList.remove('hide')
});

function stoneIconSwitcher() {
    rings.stoneContainer.querySelectorAll('.js_stone_item')
        .forEach(item => {
            item.addEventListener('click', () => {
                let thisIndex = item.dataset.index;

                rings.stoneContainer.classList.add('hide');

                rings.tabStone.querySelector('img')
                    .setAttribute('src', `img/stone/${thisIndex}/icon.png`)
            })
    })
}

function appendStoneSize() {
    rings.tabSize.innerText = rings.selectedSize;

    for( let i = 0; i < rings.stone[rings.selectedStone].size[rings.selectedSizeType].length; i++){
        rings.sizeContainer.insertAdjacentHTML('beforeend', `
            <div data-index="${i}" class="item js_size_item">
                ${rings.stone[rings.selectedStone].size[rings.selectedSizeType][i]}
            </div>
        `)
    }
    sizeSwitcher();
}

rings.tabSize.addEventListener('click', ()=>{
    rings.sizeContainer.classList.remove('hide')
});


function sizeSwitcher() {
    rings.sizeContainer.querySelectorAll('.js_size_item')
        .forEach(item => {
            item.addEventListener('click', () => {
                let thisIndex = item.dataset.index;

                rings.selectedSize = rings.stone[rings.selectedStone].size[rings.selectedSizeType][thisIndex];

                rings.sizeContainer.classList.add('hide');

                rings.tabSize.innerText = rings.stone[rings.selectedStone].size[rings.selectedSizeType][thisIndex];

            })
        })
}