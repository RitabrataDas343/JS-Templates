let name = "Rito";
console.log(typeof name); //string

let hi;
console.log(typeof hi); // undefined

let bool = true;
console.log(typeof bool); // boolean

let i = 5;
console.log(typeof i); // number

let id = Symbol("id");
console.log(typeof id); // symbol

let x = null;
console.log(typeof x); // object - null

let y = [0,1,2]; 
console.log(typeof y) // object - array

const b = {
    "name" : "John",
    "hello" : "Doe"
}
console.log(typeof(b)); // object - JSON