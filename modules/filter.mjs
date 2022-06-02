import {Output, ObjectKeys} from "./main.mjs";
class filter {
   constructor() {
       this.count = 0
       this.lenght = Object.keys(Output.Array[ObjectKeys[0]]).length+1
   }
   countUP() {
       if (this.count === this.lenght) {
           this.count = 0
       }

       this.count++
   }
     net() {

         document.getElementById(`pa`).innerHTML = Object.keys(Output.Array[ObjectKeys[0]])[this.count-1]
        document.getElementById(`za`).innerHTML = Output.GetString(Output.key[0], this.count-1) +" " + this.count
        filter1.countUP()
    }
}
const filter1 = new filter()

export {filter1}





