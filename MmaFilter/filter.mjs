import {ObjArray} from "./Object.mjs";


const FilterArray = {}

for (let i=0; i<ObjArray.length; i++) {
    FilterArray[ObjArray[i].type] = []

}


function AddObject(object) {
    for (let i=0; i<Object.keys(FilterArray).length; i++) {
        if (object.type == Object.keys(FilterArray)[i]) {
            FilterArray[Object.keys(FilterArray)[i]].push(object)
        }
    }
}


ObjArray.forEach(z => AddObject(z))





const PriceArray = {}
for (let i=0; i<ObjArray.length; i++) {
    PriceArray[ObjArray[i].type] = []
}

function AddPrice(object) {
    for (let i=0; i<Object.keys(FilterArray).length; i++) {
        if (object.type == Object.keys(FilterArray)[i]) {
        if (PriceArray[Object.keys(PriceArray)[i]].indexOf(object.features.price) == -1) {
            PriceArray[Object.keys(PriceArray)[i]].push(object.features.price)
        }
        }
    }
}
ObjArray.forEach(z => AddPrice(z))





const DurationArray = {}
for (let i=0; i<ObjArray.length; i++) {
    DurationArray[ObjArray[i].type] = []
}

function AddDuration(object) {
    for (let i=0; i<Object.keys(FilterArray).length; i++) {
        if (object.type == Object.keys(FilterArray)[i]) {
            if (DurationArray[Object.keys(DurationArray)[i]].indexOf(object.features.duration) == -1) {
                DurationArray[Object.keys(DurationArray)[i]].push(object.features.duration)
            }
        }
    }
}
ObjArray.forEach(z => AddDuration(z))





const body = document.body;
const listButton = [];
const listCheckbox = [];
const listSelectsPrice = [];
const listSelectsDuration = [];
const result = document.createElement("h4")
result.id ="result"
body.appendChild(result)
let resultArray = []
const lestSubtypeButton =[];
const subButtonArea =document.createElement("div")
body.appendChild(subButtonArea)
subButtonArea.id = "subButtonArea"






function generateButton() {
 const Button = document.createElement('button')

    Button.onclick = generateResult
    Button.value = Object.keys(FilterArray)[listButton.length]
    Button.className = "btn btn-primary"
    Button.count = listButton.length
    Button.id = "Button" +`${listButton.length}`
        let text = document.createTextNode(Object.keys(FilterArray)[listButton.length])
    listButton.push(Button)
    Button.appendChild(text)
    body.appendChild(Button)
}

function generateCheckbox() {
    const Checkbox = document.createElement('input')
    Checkbox.type = "checkbox"
         Checkbox.value = FilterArray['Бакалавриат'][0].features[Object.keys(FilterArray['Бакалавриат'][0].features)[1]]
    const label = document.createElement('label')
    const text = document.createTextNode(Object.keys(FilterArray['Бакалавриат'][0].features)[listCheckbox.length])

    label.appendChild(Checkbox)
    label.appendChild(text)
    listCheckbox.push(Checkbox)
    body.appendChild(label)
}

function generateSelect(type) {
    const listOption = eval(type+`Array`)[Object.keys(PriceArray)[[eval('listSelects' + type).length]]]
    const select = document.createElement("select");

    select.className

    select.name = `selectName`;
    body.appendChild(select);
    eval('listSelects' + type).push(select)
    for (let i = 0; i < listOption.length+1; i++) {
        const option = document.createElement("option");

        if (listOption[i-1] !== undefined) {
            option.value = listOption[i - 1];
            option.text = listOption[i - 1];
            select.add(option);

        }
        else {
            option.value = undefined;
            option.text = "";
            select.add(option);

        }
    }
}


for (let i=0; i<Object.keys(FilterArray).length; i++) {
generateButton()
}
generateCheckbox()
generateCheckbox()
generateCheckbox()

generateSelect(`Duration`)
generateSelect(`Duration`)
generateSelect(`Duration`)





function generateResult() {
    resultArray = Object.assign([], FilterArray[Object.keys(FilterArray)[this.count]])

    generateSubTypeButton()
    printResult()

}
function generateSubTypeButton() {
let subtype = []

    for (let i=0; i<resultArray.length; i++) {
        if (subtype.indexOf(resultArray[i].features.subtype) == -1) {
            subtype.push(resultArray[i].features.subtype)

        }
    }
    document.getElementById('subButtonArea').innerHTML = "";
    if (subtype[0] != undefined) {
        for (let i = 0; i < subtype.length; i++) {
            const Button = document.createElement("button")
            Button.onclick = SubButtonResult
            Button.value = subtype[i]
            Button.className = "btn btn-secondary"
            Button.count = i
            Button.id = "SubButton" + `${i}`
            let text = document.createTextNode(subtype[i])
            listButton.push(Button)
            Button.appendChild(text)
            subButtonArea.appendChild(Button)
        }
    }
}

function SubButtonResult() {
    const buffer = Object.assign([], resultArray)
    for (let i = 0; i< resultArray.length; i++) {
        if (resultArray[i].features.subtype != this.value) {
            delete resultArray[i]
        }

    }
    console.log(buffer)
    printResult()
    resultArray = Object.assign([] ,buffer)
}

function printResult() {
    document.getElementById('result').innerHTML = "";

    let massege = ""
    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] != undefined) {
            massege += resultArray[i].name + `\n` + " "
        }
    }
    const text = document.createTextNode(massege)
    result.appendChild(text)
    body.appendChild(result)



}
