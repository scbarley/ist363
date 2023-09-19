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
//document.body.appendChild(coffeeHeadline);

// objects
const coffee = {
    name: "Mochaaaaa", 
    price: 3.99, 
    description: "This is deliciosu"
};
console.log(coffee);
const coffeeObjHeadline = document.createElement("h2");
coffeeObjHeadline.textContent = coffee.name;
//document.body.appendChild(coffeeObjHeadline);



//basic array
// const basicCoffees = ["mocha","latte","espresso"];
// basicCoffees.forEach(function(basicCoffee) {
//     console.log({basicCoffee});
// });//end of basicCoffees loop

// arrays

// const coffees = [
//     {
//         name: "Mocha",
//         price: "3.99",
//         description: "deliciso",
//         image: {
//             fileName: "coffee.jpg",
//             width: 630,
//             height:630,
//             altText: "A cup of coffee" 
//         }
//     },
//     {
//         name: "Latte",
//         price: "5.00",
//         description: "good",
//         image: {
//             fileName: "coffee.jpg",
//             width: 630,
//             height:630,
//             altText: "A cup of coffee" 
//         }
//     },
//     {
//         name: "Espresso",
//         price: "20.00",
//         description: "punches like a step daddy",
//         image: {
//             fileName: "coffee.jpg",
//             width: 630,
//             height:630,
//             altText: "A cup of coffee" 
//         }
//     }

// ];

function buildTextElement(element, className, content) {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}

coffees.forEach(function(coffee) {
    //1. deconstruct the coffee object
    const { title, price, description, image } = coffee;

    //2. create the html elements
    const coffeeArticle = document.createElement("article");
    coffeeArticle.classList.add("coffee-item");

    const coffeeImage = document.createElement("img");
    // coffeeImage.src = `images/${image.fileName}`;
    coffeeImage.width = image.width;
    coffeeImage.height = image.height;
    coffeeImage.alt = image.altText;

    // const coffeeTitle = document.createElement("h2");
    // coffeeTitle.classList.add("coffee-title");
    // coffeeTitle.textContent = title;

    const coffeeTitle = buildTextElement("h2", "coffee-title", title);

    // const coffeePrice = document.createElement("h3");
    // coffeePrice.classList.add("coffee-price");
    // coffeePrice.textContent = `$${price}`;

    const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);

    const coffeeDescription = document.createElement("p");
    coffeeDescription.classList.add("coffee-description");
    coffeeDescription.textContent = description;

    //3. append the elements to the parent article
    // coffeeArticle.appendChild(coffeeImage);
    coffeeArticle.appendChild(coffeeTitle);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDescription);

    //4. append article to the html document
    document.body.appendChild(coffeeArticle);
}); //end of coffees forEach method
