
const myself = {
    name : "Ritabrata",
    surname : "Das",
    age : 20, 
    birthyear: 2002,

    fullname : function(){
        return this.name + " " + this.surname;
    }
}

console.log(myself.name);
console.log(myself["name"]);
console.log(myself.fullname());