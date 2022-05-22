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


Output.AddVariable(3)
console.log(Output.Array)
console.log(GetVariables(0, 0,))
console.log(GetName(0))


function GetVariables(object, Key) {
        return ObjectArray[object][ArrayKeys[1]][ObjectKeys[Key]]
}
function GetName(object) {
    return  ObjectArray[object][ArrayKeys[0]]
}
