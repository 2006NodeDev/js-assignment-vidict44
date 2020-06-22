/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

//This function defines object properties and prints the properties and their values.
function objectProperties(someObj) {

    for(human in someObj){
        let name = someObj.name
        let age = someObj.age
        return console.log(`My name is ${name} and my age is ${age}.`);
    }

}

let human = {name: "Luna Lovegood", age: 18};
(objectProperties(human));