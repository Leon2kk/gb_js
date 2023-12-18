const prevFrame = document.querySelector(".slidePrev")
const nextFrame = document.querySelector(".slideNext")
const frameContent = document.querySelector('.content')
const pointsBloc = document.querySelector(".points")
let btnPoints = 0

let demoData = [
    {
        "id": 1,
        "name": "Slide 1",
        "url": "demoimage/s1.jpg"
    },
    {
        "id": 2,
        "name": "Slide 2",
        "url": "demoimage/s2.jpg"
    },
    {
        "id": 3,
        "name": "Slide 3",
        "url": "demoimage/s3.jpg"
    },
    {
        "id": 4,
        "name": "Slide 4",
        "url": "demoimage/s4.jpg"
    }
]
frameContent.innerHTML=""
pointsBloc.innerHTML=""

demoData.forEach(function callback(item, index, demoData){
    let record = `<div id="${item.id}"><img src="${item.url}" alt="${item.name}"></div>`
    frameContent.insertAdjacentHTML('beforeend', record)

    record = `<button class="btn-points" id="point-${item.id}" data-i="${index}"></button>`
    pointsBloc.insertAdjacentHTML('beforeend', record)
})

btnPoints = document.getElementsByClassName('btn-points')


let currencySlide = 0;
let countSlide = demoData.length;

function switchFrame(indexItem){
    
    if (indexItem >= countSlide)
    {
        indexItem = 0;
    }

    if (indexItem < 0)
    {
        indexItem = countSlide - 1;
    }

    if (demoData.length > 0)
    {
        let id = demoData[indexItem].id
        let newItem =  document.getElementById(id)

        let findEnabledFrameContent = document.querySelector('.enabledFrame')
        if (findEnabledFrameContent){
            findEnabledFrameContent.classList.remove('enabledFrame')
        }

        newItem.classList.add('enabledFrame');
    }
    currencySlide = indexItem;

}

for (let i = 0; i < btnPoints.length; i++) {
    btnPoints[i].addEventListener('click', function() {
        switchFrame(btnPoints[i].dataset.i);
    });
  }

prevFrame.addEventListener('click', () => {
    switchFrame(--currencySlide)
});

nextFrame.addEventListener('click', () => {
    switchFrame(++currencySlide)
});

switchFrame(currencySlide);
