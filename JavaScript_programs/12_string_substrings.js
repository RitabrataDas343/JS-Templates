let str = "0123456789";
console.log(str.length);

let m = str.slice(1);
console.log(m);

m = str.slice(-4);
console.log(m);

m = str.slice(1, 4);
console.log(m);

m = str.slice(-4, -1);
console.log(m);

m = str.substring(2, 7);
console.log(m);

m = str.substring(2);
console.log(m);

m = str.substr(2, 7);
console.log(m);

m = str.substr(3);
console.log(m);

m = str.substr(-4, 2);
console.log(m);
