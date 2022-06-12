import {Output, ObjectKeys, ObjectArray} from "./main.mjs";
//import {objectOne} from "./object.mjs";
class filter {
   constructor(id) {
       this.id = id
       this.count = 0
       this.lenght = Object.keys(Output.Array[ObjectKeys[this.id-1]]).length+1

   }
   countUP() {

       if (this.count === this.lenght-1) {
           this.count = 0
       }
       else {
           this.count++
       }
   }
     net() {
if (Object.keys(Output.Array[ObjectKeys[this.id - 1]])[this.count] != undefined) {
        document.getElementById(`button` + `${this.id}`).innerHTML = Object.keys(Output.Array[ObjectKeys[this.id - 1]])[this.count]
            //document.getElementById(`text` + `${this.id}`).innerHTML = Output.GetString(Output.key[this.id - 1], this.count) + " " + this.count
             this.countUP()
             filterResult()


         }
else {
   document.getElementById(`button` + `${this.id}`).innerHTML = `~`
  // document.getElementById(`text` + `${this.id}`).innerHTML = ``
    this.countUP()
    filterResult()
}



}
    setValue(value) {
       this.value = value
    }


}
function filterResult() {
    const Filter = {}

        Filter[ObjectKeys[0]] = StringUndefined(select_1.value)
    Filter[ObjectKeys[1]] = StringUndefined(select_2.value)
    Filter[ObjectKeys[2]] =  StringUndefined(select_3.value)
    Filter[ObjectKeys[3]] =  StringUndefined(select_4.value)
    Filter[ObjectKeys[4]] = StringUndefined(select_5.value)
    console.log(Filter)
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
    console.log(result)
     document.getElementById("result").innerHTML = result


}






const filter1 = new filter(1)
const filter2 = new filter(2)
const filter3 = new filter(3)
const filter4 = new filter(4)
const filter5 = new filter(5)

const body = document.body;
const listSelects = [];
const filterBlock = document.createElement('div')
filterBlock.id = "filterBlock"
body.appendChild(filterBlock);


function createSelect() {
    const selectBlock = document.createElement('div')
    const listOptions = Object.keys(Output.Array[Object.keys(Output.Array)[listSelects.length]])

    const blockName = document.createElement("b")
    blockName.id = `blockName${listSelects.length}`
    const elemText = document.createTextNode(Object.keys(Output.Array)[listSelects.length])
    blockName.appendChild(elemText)
    const select = document.createElement("select");
    listSelects.push(select);
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
            filterBlock.appendChild(blockName)
            filterBlock.appendChild(select)
        }
        else {
            option.value = undefined;
            option.text = "";
            select.add(option);
            filterBlock.appendChild(blockName)
            filterBlock.appendChild(select)
        }
    }
  //  filterBlock.appendChild(selectBlock)
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

export {filter1,filter2,filter3,filter4,filter5, filterResult }





