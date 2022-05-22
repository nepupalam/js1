import {objectA, objectB, objectD} from './object.mjs'

const ObjectArray = [objectA, objectB]
const Output = {
    Array:  {},
    AddVariable: function (a) {
        Output.Array[ObjectKeys[0]] = a ;
    }
}
const ArrayKeys = Object.keys(objectA)
const ObjectKeys = Object.keys(objectA[ArrayKeys[1]])

let count = 0;
ObjectArray.forEach(z => console.log(GetName(z)))


function GetVariables(object, Key) {
        return object[ArrayKeys[1]][ObjectKeys[Key]]
}
function GetName(object) {
    return  object[ArrayKeys[0]]
}
