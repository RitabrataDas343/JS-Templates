let str = "This is a new Robot."
str = str.replace("Robot", "Era");
console.log(str);

let str1 = "This is a new ROBOT."
str = str1.replace(/Robot/i, "Era");
console.log(str);

let str2 = "This is a new Robot, Robot, Robot and Robot."
str = str2.replace(/Robot/g, "Era");
console.log(str);

let str3 = "This is a new Robot, ROBOT, RoBoT and rOBOT."
str = str3.replace(/Robot/ig, "Era");
console.log(str);

let str_1 = "This Is A New String."
str = str_1.toLowerCase();
console.log(str);
str = str_1.toUpperCase();
console.log(str);

let a = "I am";
a = a.concat(" Ritabrata");
console.log(a);

a = a.concat(" ", a);
console.log(a);

let b = " Hello                     World                            ";
console.log(b.trim());

let c = "Hello";
c = c.padStart(5, "0");
console.log(c);

c = c.padEnd(5, "x");
console.log(c);

let new_str = "NITDurgapur";
console.log(new_str.charAt(5));
console.log(new_str.charCodeAt(5));
console.log(new_str[5]);

let the_string = "Hello, I am Ritabrata."
let arr1 = the_string.split("");
let arr2 = the_string.split(" ");
let arr3 = the_string.split(",");

console.log(arr1);
console.log(arr2);
console.log(arr3);
