import {ObjArray} from "./Object.mjs";


const resultObj = {}
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
let bufferArray = []
const lestSubtypeButton =[];
const subButtonArea =document.createElement("div")
body.appendChild(subButtonArea)
const FilterBlock = document.createElement("div")
FilterBlock.className = "container row"
const ButtonGroup = document.createElement("div")
ButtonGroup.className = "btn-group btn-group-lg"
ButtonGroup.role = "Basic example"

const SubButtonGroup = document.createElement("div")
SubButtonGroup.className = "btn-group gy-4"
SubButtonGroup.id = "subButtonArea"

FilterBlock.appendChild(ButtonGroup)
FilterBlock.appendChild(SubButtonGroup)
body.appendChild(FilterBlock)





function generateButton() {
 const Button = document.createElement('button')

    Button.onclick = generateResult
    Button.type = "button"
    Button.value = Object.keys(FilterArray)[listButton.length]
    Button.className = "btn btn-outline-primary btn-block btn-lg col "
    Button.count = listButton.length
    Button.id = "Button" +`${listButton.length}`
        let text = document.createTextNode(Object.keys(FilterArray)[listButton.length])
    listButton.push(Button)
    Button.appendChild(text)
    ButtonGroup.appendChild(Button)
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





function generateSelect(type, count) {
    const listOption = eval(type+`Array`)[Object.keys(PriceArray)[count]]
    const select = document.createElement("select");
    select.id =  `${type}select`
    select.className
    select.onchange = SelectResult
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





function generateResult() {
        resultArray = Object.assign([], FilterArray[Object.keys(FilterArray)[this.count]])
        bufferArray = Object.assign([], resultArray)
    for (let i =0; i<listButton.length; i++) {
        if (i == this.count) {
            this.className = "btn btn-primary btn-block btn-lg col "
        }
        else {
            listButton[i].className ="btn btn-outline-primary btn-block btn-lg "
        }
    }


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
        for (let i = 0; i < subtype.length+1; i++) {
            const Button = document.createElement("button")
            Button.onclick = SubButtonResult
            Button.className = "btn btn-secondary btn-sm font-weight-bold col"

            Button.value = subtype[i]
            if (Button.value != "undefined") {
                Button.count = i
                Button.id = "SubButton" + `${i}`
                let text = document.createTextNode(subtype[i])
                listButton.push(Button)
                Button.appendChild(text)
            }
            else {
                Button.count = i
                Button.id = "SubButton" + `${i}`
                let text = document.createTextNode("Все факультеты")
                listButton.push(Button)
                Button.appendChild(text)
            }
            SubButtonGroup.appendChild(Button)
        }
    }
}






function SubButtonResult() {
    const buffer = Object.assign([], resultArray)
    if (this.value != 'undefined') {
        for (let i = 0; i < resultArray.length; i++) {
            if (resultArray[i].features.subtype != this.value) {
                delete resultArray[i]
            }

        }
    }
    else {
        resultArray = Object.assign([] ,buffer)

    }

    printResult()
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


    resultArray = Object.assign([] ,bufferArray)

}





function SelectResult() {
    const Filter = [];

    Filter[0] = StringUndefined(Priceselect.value)

    Filter[1] = StringUndefined(Durationselect.value)

        if (Filter[0] != undefined) {
            for (let i = 0; i < resultArray.length; i++) {
                if (resultArray[i].features.price != Filter[0]) {
                    delete resultArray[i]
                }
            }
        }
    if (Filter[1] != undefined) {
        for (let i = 0; i < resultArray.length; i++) {
            if (resultArray[i].features.duration != Filter[1]) {
                delete resultArray[i]
            }
        }
    }
    printResult()

}
function StringUndefined(a) {
    if (a === "undefined") {
        return undefined
    }

    return  a
}