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

    stoneImg: document.querySelector('.js_stone'),
    shankImage: document.querySelector('.js_shank'),

    infoTitle: document.querySelector('.js_info_title'),
    infoText: document.querySelector('.js_info_text'),
    skintones: document.querySelectorAll('.js_skintone'),
    units: document.querySelectorAll('.js_unit'),
    shanks: document.querySelectorAll('.js_info_shank'),
    handImage: document.querySelector('.js_hand_image'),

    infoBlock: document.querySelector('.js_info_block'),

    selectedType: 0,
    selectedStone: 0,
    selectedSizeType: 'ct',
    // selectedSize: '0.40ct',
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
                    '3.00ct'
                ],
                mm: [
                    '4.00mm',
                    '4.50mm',
                    '5.00mm',
                    '5.50mm',
                    '6.00mm',
                    '6.50mm',
                    '7.00mm',
                    '7.50mm',
                    '8.00mm'
                ]
            },
            scale: [
                0.493506,
                0.558442,
                0.623377,
                0.688312,
                0.753247,
                0.805195,
                0.87013,
                0.935065,
                1
            ],
            title: 'Square Emerald Cut Diamond',
            text: 'The square emerald cut diamond is a variation of the Asscher cut. It is step cut, with a square shape and cut corners. This diamond shape produces a similar subtle elegance to the emerald cut, and is a popular shape for vintage styled solitaire rings.'
        },
        {
            size: {
                ct: [
                    '0.25ct',
                    '0.50ct',
                    '0.75ct',
                    '1.00ct',
                    '1.50ct',
                    '2.00ct',
                    '2.50ct',
                    '3.00ct'
                ],
                mm: [
                    '5.00mm',
                    '6.00mm',
                    '6.50mm',
                    '7.00mm',
                    '8.00mm',
                    '8.50mm',
                    '9.00mm',
                    '10.00mm'
                ]
            },
            scale: [
                0.5,
                0.604167,
                0.645833,
                0.697917,
                0.802083,
                0.854167,
                0.895833,
                1
            ],
            title: 'Emerald Cut Diamond',
            text: 'Emerald cut diamonds are rectangular, step cut diamonds with polished corners. Prized for their fire and subtle beauty, the emerald cut has rows of facets and remains popular owing to its clean lines and simple faceting.'
        },
        {
            size: {
                ct: [
                    '0.25ct',
                    '0.50ct',
                    '0.65ct',
                    '0.75ct',
                    '1.00ct',
                    '1.50ct',
                    '2.00ct',
                    '2.50ct',
                    '3.00ct'
                ],
                mm: [
                    '4.00mm',
                    '5.00mm',
                    '5.50mm',
                    '6.00mm',
                    '6.50mm',
                    '7.00mm',
                    '8.00mm',
                    '8.50mm',
                    '9.00mm'
                ]
            },
            scale: [
                0.44186,
                0.55814,
                0.616279,
                0.674419,
                0.72093,
                0.77907,
                0.895349,
                0.953488,
                1
            ],
            title: 'Heart Shape Diamond',
            text: 'The heart shape is a brilliant diamond cut, considered to be the most romantic of diamond shapes. It is important to select a heart shape pleasing to the eye, with a clearly defined outline. '
        },
        {
            size: {
                ct: [
                    '0.30ct',
                    '0.40ct',
                    '0.50ct',
                    '0.65ct',
                    '0.85ct',
                    '1.00ct',
                    '1.25ct',
                    '1.50ct',
                    '1.75ct',
                    '2.00ct',
                    '2.50ct',
                    '3.00ct'
                ],
                mm: [
                    '6.00mm',
                    '7.00mm',
                    '8.00mm',
                    '8.50mm',
                    '9.50mm',
                    '10.00mm',
                    '10.00mm',
                    '11.00mm',
                    '11.00mm',
                    '12.00mm',
                    '13.00mm',
                    '14.00mm'
                ]
            },
            scale: [
                0.432836,
                0.5,
                0.574627,
                0.61194,
                0.679104,
                0.716418,
                0.716418,
                0.791045,
                0.791045,
                0.858209,
                0.932836,
                1
            ],
            title: 'Marquise Cut Diamond',
            text: 'The marquise cut is a boat shaped modified brilliant cut. The elongated shape compliments the finger and a length to width ratio of 1.85 :1 to 2 :1 is generally regarded as most pleasing. '
        },
        {
            size: {
                ct: [
                    '0.25ct',
                    '0.30ct',
                    '0.40ct',
                    '0.50ct',
                    '0.60ct',
                    '0.75ct',
                    '1.00ct',
                    '1.25ct',
                    '1.50ct',
                    '1.75ct',
                    '2.00ct',
                    '2.50ct',
                    '3.00ct'
                ],
                mm: [
                    '4.00mm',
                    '4.20mm',
                    '4.80mm',
                    '5.00mm',
                    '5.40mm',
                    '6.00mm',
                    '6.50mm',
                    '7.00mm',
                    '7.50mm',
                    '7.80mm',
                    '9.00mm',
                    '9.00mm',
                    '9.40mm'
                ]
            },
            scale: [
                0.422222,
                0.444444,
                0.511111,
                0.533333,
                0.577778,
                0.644444,
                0.688889,
                0.744444,
                0.8,
                0.833333,
                0.855556,
                0.955556,
                1
            ],
            title: 'Round Brilliant Cut Diamond',
            text: 'The round brilliant cut is the most popular diamond shape. The proportions and 57 facets of the round brilliant cut ensure maximum light transmission giving that extra bright sparkle.'
        },
        {
            size: {
                ct: [
                    '0.33ct',
                    '0.40ct',
                    '0.50ct',
                    '0.75ct',
                    '1.00ct',
                    '1.25ct',
                    '1.60ct',
                    '2.00ct',
                    '2.40ct',
                    '3.00ct'
                ],
                mm: [
                    '3.75mm',
                    '4.00mm',
                    '4.50mm',
                    '5.00mm',
                    '5.50mm',
                    '6.00mm',
                    '7.00mm',
                    '7.50mm',
                    '8.00mm',
                    '8.50mm'
                ]
            },
            scale: [
                0.439024,
                0.463415,
                0.52439,
                0.585366,
                0.646341,
                0.707317,
                0.817073,
                0.878049,
                0.939024,
                1
            ],
            title: 'Princess Cut Diamond',
            text: 'The princess cut is one of the most popular diamond shapes. This diamond shape has square sides, with sharp uncut corners. The Princess generally has 76 facets which help add fire and brilliance to the stone'
        },
        {
            size: {
                ct: [
                    '0.30ct',
                    '0.50ct',
                    '0.75ct',
                    '1.00ct',
                    '1.50ct',
                    '2.00ct',
                    '2.50ct',
                    '3.00ct'
                ],
                mm: [
                    '5.00mm',
                    '6.00mm',
                    '7.00mm',
                    '8.00mm',
                    '9.00mm',
                    '10.00mm',
                    '12.00mm',
                    '12.00mm'
                ]
            },
            scale: [
                0.417391,
                0.504348,
                0.582609,
                0.669565,
                0.747826,
                0.834783,
                1,
                1
            ],
            title: 'Pear Shape Diamond',
            text: 'The pear shape is a brilliant cut, combining the beauty of the oval and marquise cut. Typically cut with 58 facets, the tear drop shape of this cut make it a perfect shape for pendants and earrings.'
        },
        {
            size: {
                ct: [
                    '0.33ct',
                    '0.40ct',
                    '0.50ct',
                    '0.65ct',
                    '0.75ct',
                    '1.00ct',
                    '1.25ct',
                    '1.50ct',
                    '1.75ct',
                    '2.00ct',
                    '2.50ct',
                    '3.00ct'
                ],
                mm: [
                    '5.00mm',
                    '5.00mm',
                    '6.00mm',
                    '6.50mm',
                    '7.00mm',
                    '7.50mm',
                    '8.00mm',
                    '8.50mm',
                    '9.00mm',
                    '9.00mm',
                    '9.50mm',
                    '10.00mm'
                ]
            },
            scale: [
                0.5,
                0.5,
                0.604167,
                0.645833,
                0.697917,
                0.75,
                0.802083,
                0.854167,
                0.895833,
                0.895833,
                0.947917,
                1
            ],
            title: 'Oval Cut Diamond',
            text: 'Similar to the round brilliant cut, the oval cut exhibits a brilliance and fire that is sure to catch the eye. It\'s elongated shape works well for women with smaller hands as it gives an illusion of length the to finger.'
        },
        {
            size: {
                ct: [
                    '0.25ct',
                    '0.30ct',
                    '0.40ct',
                    '0.50ct',
                    '0.60ct',
                    '0.75ct',
                    '1.00ct',
                    '1.25ct',
                    '1.50ct',
                    '1.75ct',
                    '2.00ct',
                    '2.50ct',
                    '3.00ct'
                ],
                mm: [
                    '3.70mm',
                    '3.95mm',
                    '4.20mm',
                    '4.70mm',
                    '5.00mm',
                    '5.30mm',
                    '5.85mm',
                    '6.30mm',
                    '6.70mm',
                    '7.00mm',
                    '7.35mm',
                    '7.90mm',
                    '8.40mm'
                ]
            },
            scale: [
                0.422222,
                0.444444,
                0.511111,
                0.533333,
                0.577778,
                0.644444,
                0.688889,
                0.744444,
                0.8,
                0.833333,
                0.855556,
                0.955556,
                1
            ],
            title: 'Cushion Cut Diamond',
            text: 'The antique style Cushion cut, known also as Pillow-cut or Candlelight diamond, and most often resembles a cross between the old Mine cut and a modern Oval cut. Not as fiery or brilliant as many of the newer cuts, but it has a romantic and classic long lasting look and inspires difference.'
        },
        {
            size: {
                ct: [
                    '0.30ct',
                    '0.50ct',
                    '0.75ct',
                    '1.00ct',
                    '1.50ct',
                    '2.00ct',
                    '2.50ct',
                    '3.00ct'
                ],
                mm: [
                    '5.00mm',
                    '6.00mm',
                    '6.50mm',
                    '7.00mm',
                    '7.50mm',
                    '8.00mm',
                    '9.00mm',
                    '9.50mm'
                ]
            },
            scale: [
                0.5,
                0.604167,
                0.645833,
                0.697917,
                0.802083,
                0.854167,
                0.895833,
                1
            ],
            title: 'Radiant Cut Diamond',
            text: 'The Radiant cut diamond has 8 edges like the Asscher cut diamond, but is longer in length. The original Radiant cut represents the fusion of the elegant shape emerald cut, with the brilliance of the round stone.'
        }
    ],
};

/*
* functions dummy calls
* */
appendTypeIcon();
appendStoneIcon();
appendStoneSize();
setStoneImage(0,0);
setShankImage(0);
setInfo(0);

/*
* main functions
* */
rings.tabType.addEventListener('click', () => {
    rings.typeContainer.classList.remove('hide')
});

rings.tabStone.addEventListener('click', () => {
    rings.stoneContainer.classList.remove('hide')
});

rings.tabSize.addEventListener('click', () => {
    rings.sizeContainer.classList.remove('hide')
});

rings.skintones.forEach(item => {
    item.addEventListener('click', () => {
        for (let el of rings.skintones) el.classList.remove('active');
        item.classList.add('active');
        rings.handImage.style.backgroundImage = `url(img/skintone/${item.dataset.index}.jpg)`
    });
});

rings.units.forEach(item => {
    item.addEventListener('click', () => {
        for (let el of rings.units) el.classList.remove('active');
        item.classList.add('active');
        if(+item.dataset.index === 0){
            rings.selectedSizeType = 'ct';
            rings.selectedSize = '0.40ct';
        } else {
            rings.selectedSizeType = 'mm';
            rings.selectedSize = '4.00mm';
        }
        appendStoneSize();
    });
});

rings.shanks.forEach(item => {
    item.addEventListener('click', () => {
        for (let el of rings.shanks) el.classList.remove('active');
        item.classList.add('active');

        setShankImage(item.dataset.index)
    });
});

function burgerSwitcher(type) {
    if(type === 0){
        rings.infoBlock.style.left = '-100%';
    }
    if(type === 1){
        rings.infoBlock.style.left = '0';
    }
}

function appendTypeIcon() {
    for (let i = 0; i < rings.type.length; i++) {
        if (i === 0) {
            rings.typeContainer.insertAdjacentHTML('beforeend', `
                <div data-index="${i}" class="item active js_type_item">
                    <img src="${rings.type[i]}" alt="">
                </div>
            `)
        } else {
            rings.typeContainer.insertAdjacentHTML('beforeend', `
            <div data-index="${i}" class="item js_type_item">
                <img src="${rings.type[i]}" alt="">
            </div>
        `)
        }

    }
    typeIconSwitcher();
}

function appendStoneIcon() {
    for (let i = 0; i < rings.stone.length; i++) {
        if (i === 0) {
            rings.stoneContainer.insertAdjacentHTML('beforeend', `
                <div data-index="${i}" class="item active js_stone_item">
                    <img src="img/stone/${i}/icon.png" alt="">
                </div>
            `)
        } else {
            rings.stoneContainer.insertAdjacentHTML('beforeend', `
                <div data-index="${i}" class="item js_stone_item">
                    <img src="img/stone/${i}/icon.png" alt="">
                </div>
            `)
        }
    }
    stoneIconSwitcher();
}

function appendStoneSize() {
    rings.tabSize.innerText = rings.selectedSize;

    rings.sizeContainer.innerHTML = '';

    for (let i = 0; i < rings.stone[rings.selectedStone].size[rings.selectedSizeType].length; i++) {
        rings.sizeContainer.insertAdjacentHTML('beforeend', `
            <div data-index="${i}" class="item js_size_item">
                ${rings.stone[rings.selectedStone].size[rings.selectedSizeType][i]}
            </div>
        `)
    }

    sizeSwitcher();
}

function typeIconSwitcher() {
    let $typeItems = rings.typeContainer.querySelectorAll('.js_type_item');

    $typeItems.forEach(item => {
        item.addEventListener('click', () => {
            let thisIndex = +item.dataset.index;

            if (!item.classList.contains('active')) {
                for (let el of $typeItems) el.classList.remove('active');
                item.classList.add('active');

                rings.selectedType = thisIndex;

                rings.tabType.querySelector('img')
                    .setAttribute('src', rings.type[thisIndex]);

                setStoneImage(rings.selectedStone, rings.selectedType);
            } else {
                rings.typeContainer.classList.add('hide');
            }
        })
    })
}

function stoneIconSwitcher() {
    let $stoneItems = rings.stoneContainer.querySelectorAll('.js_stone_item');

    $stoneItems.forEach(item => {
        item.addEventListener('click', () => {
            let thisIndex = +item.dataset.index;


            if (!item.classList.contains('active')) {

                for (let el of $stoneItems) el.classList.remove('active');
                item.classList.add('active');

                rings.selectedStone = thisIndex;
                rings.selectedSize = rings.stone[thisIndex].size[rings.selectedSizeType][0];

                rings.tabStone.querySelector('img')
                    .setAttribute('src', `img/stone/${thisIndex}/icon.png`);

                setStoneImage(rings.selectedStone, rings.selectedType);
                setInfo(thisIndex);

            } else {
                rings.stoneContainer.classList.add('hide');
            }

            appendStoneSize();
        })
    })
}

function sizeSwitcher() {
    let $sizeItems = rings.sizeContainer.querySelectorAll('.js_size_item');
    $sizeItems.forEach(item => {
        item.addEventListener('click', () => {
            let thisIndex = item.dataset.index;

            if (!item.classList.contains('active')) {
                for (let el of $sizeItems) el.classList.remove('active');
                item.classList.add('active');
                rings.selectedSize = rings.stone[rings.selectedStone].size[rings.selectedSizeType][thisIndex];
                rings.tabSize.innerText = rings.stone[rings.selectedStone].size[rings.selectedSizeType][thisIndex];
                rings.stoneImg.style.transform = `scale(${rings.stone[rings.selectedStone].scale[thisIndex]})`;
            } else {
                rings.sizeContainer.classList.add('hide');
            }
        })
    })
}

function setStoneImage(stoneIndex, stoneType) {
    rings.stoneImg.setAttribute('src', `img/stone/${stoneIndex}/${stoneType}.png`);
}

function setShankImage(type) {
    rings.shankImage.setAttribute('src', `img/shank/${type}.png`);
}

function setInfo(thisIndex) {
    rings.infoTitle.innerText = rings.stone[thisIndex].title;
    rings.infoText.innerText = rings.stone[thisIndex].text;
}
