// console.log("js has been loaded");

// variables, methods, and functions

// 1. Variables
const myName = "Simon Barley";
console.log(myName);

const myAge = 22;
const myCity = "Ithaca";

const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`;

//console.log(introduction);


// 2. methods
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById ("overlay");
//console.log(menuBtn);

// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked")
    overlay.classList.add("active");
}); // end of menuBtn click event

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
}); //end of close Btn click event


// arrays and objects 

// basic variable
const coffeeName = "Mocha";
const coffeeHeadline = document.createElement("h2");
coffeeHeadline.textContent = coffeeName;
document.body.appendChild(coffeeHeadline);

// objects
const coffee = {
    name: "Mocha", 
    price: 3.99, 
    description: "This is deliciosu"
};
console.log(coffee);
const coffeeObjHeadline = document.createElement("h2");
coffeeObjHeadline.textContent = coffee.name;
document.body.appendChild(coffeeObjHeadline);


// arrays

const coffees = ["Mocha","Latte","Espresso"];
//console.log(coffees[2]);
coffees.forEach(function(coffee) {
    console.log(coffee);
});