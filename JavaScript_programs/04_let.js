let x = 5;
console.log(x);

//Cannot be Redeclared

{
    let y = 51;
    console.log(y);
}

// console.log(y); error due to Block Scope

// Block Scope

{
    let x = 12;
    console.log(x); 
}

//Redeclaration in specific scope
console.log(x);

// j = 5;
// let j; 

// Hoisting is not possible