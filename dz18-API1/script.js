
const LESSONS_KEY = "lessonsList";
const SAVE_KEY = "lessonsSaveID";
const selectorSubUp = ".recording-up"
const selectorSubCancel = ".recording-down"
const selectorDataContainer = ".datatable"

let dataSet = [];
let demoData = [
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 14
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 10
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
]

async function fetchData() {
    
    document.querySelectorAll(selectorSubUp).forEach(button => {
        button.addEventListener('click', function(e){
            const id = e.currentTarget.dataset.id; 
            demoData.forEach((item) => {
                if (item.id === Number(id) && item.maxParticipants > item.currentParticipants)
                {   
                    dataSet.push(Number(id))
                    item.currentParticipants++
                    console.log(item.currentParticipants)
                    saveToLocalStorage()
                    viewTable(demoData)
                }
            })
        })
    })

    document.querySelectorAll(selectorSubCancel).forEach(button => {
        button.addEventListener('click', function(e){
            const id = e.currentTarget.dataset.id; 
            demoData.forEach((item) => {
                if (item.id === Number(id) && item.currentParticipants > 0)
                {   
                    let index = dataSet.indexOf(Number(id));
                    if (index !== -1) {
                        dataSet.splice(index, 1);
                        item.currentParticipants--
                        saveToLocalStorage()
                    }
                    viewTable(demoData)
                }
            })
        })
    })
};

function viewTable(data){
    const lessonsBox = document.querySelector(selectorDataContainer);
    lessonsBox.innerHTML="";
    data.forEach((item) => {
        let isRecord = false;
        dataSet.forEach((sub) => {
            if (item.id === Number(sub))
            {
                isRecord = true;
            }             
        })

        let record = `
            <tr id="${item.id}">
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.time}</td>
                <td>${item.maxParticipants}</td>
                <td class="current">${item.currentParticipants}</td>
                <td>
                    <button data-id="${item.id}" class="recording-${!isRecord?"up":"down"}" 
                    ${(item.maxParticipants <= item.currentParticipants)&&!isRecord?"disabled":""} >
                    ${!isRecord?"Записаться":"Отменить запись"}
                    </button>
                </td>
            </tr>`

        lessonsBox.insertAdjacentHTML('beforeend', record)
    })

    fetchData();
}

function saveToLocalStorage(){
    localStorage.setItem(LESSONS_KEY, JSON.stringify(demoData));
    localStorage.setItem(SAVE_KEY, JSON.stringify(dataSet));
}

function loadToLocalStorage(){
    if (localStorage.getItem(LESSONS_KEY) !== null){      
        demoData = JSON.parse(localStorage.getItem(LESSONS_KEY))
    }

    if (localStorage.getItem(SAVE_KEY) !== null){      
        dataSet = JSON.parse(localStorage.getItem(SAVE_KEY))
    }
}

loadToLocalStorage()
viewTable(demoData)