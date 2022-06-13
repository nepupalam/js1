import {Output, ObjectKeys, ObjectArray} from "./main.mjs";

function filterResult() {
    const Filter = {}

        Filter[ObjectKeys[0]] = StringUndefined(select_1.value)
    Filter[ObjectKeys[1]] = StringUndefined(select_2.value)
    Filter[ObjectKeys[2]] =  StringUndefined(select_3.value)
    Filter[ObjectKeys[3]] =  StringUndefined(select_4.value)
    Filter[ObjectKeys[4]] = StringUndefined(select_5.value)

let result= ""
    let keys = Object.keys(Filter)
    let buffer = JSON.parse(JSON.stringify(ObjectArray))
     for (let i=0; i<keys.length; i++) {
         if (Filter[keys[i]] == undefined) {
             delete Filter[[keys[i]]]
             for (let j=0; j<buffer.length; j++) {
                 delete buffer[j].features[keys[i]]
             }
         }
     }

    keys = Object.keys(Filter)
    for (let i = 0; i<buffer.length; i++) {
        for (let j=0; j<keys.length; j++) {
            buffer[i].features[keys[j]] = String(buffer[i].features[keys[j]])
        }
    }



    for (let j=0; j<buffer.length; j++) {

        if (JSON.stringify(Filter) == JSON.stringify(buffer[j].features)) {
            result += buffer[j].name +" "
        }
    }
    if (result != "") {
        document.getElementById("result").innerHTML = result
    }
    else {
        document.getElementById("result").innerHTML = `нет такого яблока`

    }

}







const body = document.body;
const listSelects = [];
const container = document.createElement('div')
container.className= "container-fluid"
const filterBlock = document.createElement('div')
filterBlock.id = "filterBlock"
filterBlock.className = "row flex-grow-1 bg-info"
body.appendChild(filterBlock);
const result = document.createElement('h6')
result.id = "result"

function createSelect() {
    const selectBlock = document.createElement('div')
    const listOptions = Object.keys(Output.Array[Object.keys(Output.Array)[listSelects.length]])
    selectBlock.className =`col-auto`
    const blockName = document.createElement("h5")
    blockName.id = `blockName${listSelects.length}`
    const elemText = document.createTextNode(Object.keys(Output.Array)[listSelects.length])
    blockName.appendChild(elemText)
    const select = document.createElement("select");
    listSelects.push(select);
    select.className ="form-select-sm bg-light"
    select.onchange = filterResult
    select.id = `select_${listSelects.length}`;
    select.name = `selectName`;

    body.appendChild(select);
    for (let i = 0; i < listOptions.length+1; i++) {
        const option = document.createElement("option");

        if (listOptions[i-1] != undefined) {
            option.value = listOptions[i - 1];
            option.text = listOptions[i - 1];
            select.add(option);
            selectBlock.appendChild(blockName)
            selectBlock.appendChild(select)
        }
        else {
            option.value = undefined;
            option.text = "";
            select.add(option);
            selectBlock.appendChild(blockName)
            selectBlock.appendChild(select)
        }
    }
    filterBlock.appendChild(selectBlock)
    container.appendChild(filterBlock)
    body.appendChild(container)
    filterBlock.appendChild(result)

}

createSelect()
createSelect()
createSelect()
createSelect()
createSelect()

function StringUndefined(a) {
    if (a === "undefined") {
        return undefined
    }

        return  a
}

export {filterResult }





