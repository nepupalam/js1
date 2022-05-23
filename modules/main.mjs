import {objectA, objectB, objectD} from './object.mjs'

const ObjectArray = [objectA, objectB]

const Output = {
    Array:  {},
    AddKey: function (key) {
        Output.Array[key] = {};
    },
    AddVariables: function (key,name , value) {
        if  (Output.Array[key][name] === undefined) {
            Output.Array[key][name] = [value];
        }
        else {
            Output.Array[key][name].push(value)
        }
    }
}

const ArrayKeys = Object.keys(objectA)
const ObjectKeys = Object.keys(objectA[ArrayKeys[1]])


//ObjectArray.forEach(z => console.log(GetVariables(z, 0)))

function GetVariables(object, Key) {
        return object[ArrayKeys[1]][ObjectKeys[Key]]
}
function GetName(object) {
    return  object[ArrayKeys[0]]
}

ObjectKeys.forEach(key => Output.AddKey(key))
console.log(Output.Array)


    for (let i = 0; i < ObjectKeys.length; i++) {

        for (let j = 0; j < ObjectArray.length; j++) {

            Output.AddVariables(ObjectKeys[i],GetVariables(ObjectArray[j], i)   ,GetName(ObjectArray[j]) )
        }
    }
console.log(GetName(ObjectArray[0]))
console.log(Output.Array)


