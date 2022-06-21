import {ObjArray} from "./Object.mjs";

const FilterArray = {}

for (let i=0; i<ObjArray.length; i++) {
    FilterArray[ObjArray[i].type] = []

}
console.log(FilterArray)

function AddObject(object) {
    for (let i=0; i<Object.keys(FilterArray).length; i++) {
        if (object.type == Object.keys(FilterArray)[i]) {
            FilterArray[Object.keys(FilterArray)[i]].push(object)
        }
    }
}
ObjArray.forEach(z => AddObject(z))
console.log(FilterArray["Бакалавриат"].length)



const body = document.body;
const listButton = [];


function generateButton() {
 const Button = document.createElement('button')
    Button.oneclick = alert1
    let text = document.createTextNode(Object.keys(FilterArray)[listButton.length])
    listButton.push(Button)
    Button.appendChild(text)
    body.appendChild(Button)
}

for (let i=0; i<Object.keys(FilterArray).length; i++) {
generateButton()
}

function alert1() {
    alert("12")
}
