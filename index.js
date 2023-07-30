let name = 'mohammed'; //String Literal
console.log(name);

let isApproved = false; //Boolean Literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

person.age = 23;

let selectedColors = ['red','blue',"green"];
selectedColors[2] = 3;
console.log(selectedColors.length); //3

//performing a task
function green(name){
    console.log("I am Green "+ name);
}

green('ahmed');
green('rashid');

//calculating a value
function square(number){
    return number*number;
}

let number = square(3);
console.log(number);
