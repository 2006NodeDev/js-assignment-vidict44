/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//Creates an object using 3 different methods.

//create an object using an object literal
let person1 = {
    name: "John Smith",
    age: 67
}

//create an object using a constructor function
function person2(name, age){
    this.name = name;
    this.age = age;
}

let mySelf = new person2("Tony Vidal", 45);

//create an object using an es6 class
class Person3 {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
}

let anotherPerson = new Person3("Mary Smith", 90);
