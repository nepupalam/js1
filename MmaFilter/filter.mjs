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




function generateButton() {
 const Button = document.createElement('button')
    Button.onclick = alert1
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
    label.appendChild(text)
    Checkbox.appendChild(label)
    body.appendChild(Checkbox)
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



function alert1() {
    alert("12")
}
console.log(DurationArray);
