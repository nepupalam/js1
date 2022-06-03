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

}
function filterResult() {
    const Filter = {}
    Filter[ObjectKeys[0]] = Object.keys(Output.Array[ObjectKeys[filter1.id - 1]])[filter1.count -1]
    Filter[ObjectKeys[1]] = Object.keys(Output.Array[ObjectKeys[filter2.id - 1]])[filter2.count -1]
    Filter[ObjectKeys[2]] = Object.keys(Output.Array[ObjectKeys[filter3.id - 1]])[filter3.count -1]
    Filter[ObjectKeys[3]] = Object.keys(Output.Array[ObjectKeys[filter4.id - 1]])[filter4.count -1]
    Filter[ObjectKeys[4]] = Object.keys(Output.Array[ObjectKeys[filter5.id - 1]])[filter5.count -1]
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

export {filter1,filter2,filter3,filter4,filter5, filterResult}





