// 1. create variables for the buttons(ascend & descend)
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById ("overlay");
//const ascendingBtn = document.getElementById("ascendingBtn");
//const descendingBtn = document.getElementById("descendingBtn");
const sortBtn = document.getElementById("sortBtn")
//const sortBtnIcon = document.getElementById("sortBtnIcon")
const coffeeList = document.getElementById("coffeeList");
const priceRanges = document.getElementById("priceRanges");

let filteredCoffees = [...coffees];
let sortDirection = "descending";


//2. functions
const buildTextElement = (element, className, content) => {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
};
const displayList = (arr) => {
    purgeList();
    arr.forEach((coffee) => {
        //1. deconstruct the coffee object
        const { title, price, description, image } = coffee;
    
        //2. create the html elements
        const coffeeArticle = document.createElement("article");
        coffeeArticle.classList.add("collection__item");
    
        const coffeeImage = document.createElement("img");
        coffeeImage.classList.add("collection__item__image");
        coffeeImage.src = `images/${image.fileName}`;
        coffeeImage.width = image.width;
        coffeeImage.height = image.height;
        coffeeImage.alt = image.altText;
    
        const coffeeTitle = buildTextElement("h3", "collection__item__title", title);
    
        // const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);
    
        // const coffeeDescription = document.createElement("p");
        // coffeeDescription.classList.add("coffee-description");
        // coffeeDescription.textContent = description;
        // const coffeeDescription = buildTextElement("p","coffee-description", description);
    
        //3. append the elements to the parent article
        coffeeArticle.appendChild(coffeeImage);
        coffeeArticle.appendChild(coffeeTitle);
        // coffeeArticle.appendChild(coffeePrice);
        // coffeeArticle.appendChild(coffeeDescription);
    
        //4. append article to the html document
        coffeeList.appendChild(coffeeArticle);
    }); //end of coffees forEach method
};//displayList funcgion end
const getFilteredCoffees = (minValue, maxValue) => {
    const filteredArr = coffees.filter((coffee) => {
        const {price} = coffee;
        return price >= minValue && price <= maxValue;
    });
    console.log(filteredArr);
    return filteredArr;
};
const purgeList = () => {
    coffeeList.innerHTML = "";
};
const sortListByDirection = (direction, arr) => {
    // console.log({direction});
    sortDirection = direction; 
    const sortedListArr = [...arr].sort((a,b) => {
        if (direction === "descending") {
            if (a.title < b.title) {
                return -1;
            }
        } else {
            if (a.title > b.title) {
                return -1;
            }
        }
    });
    return sortedListArr;
};





// 3. create event listeners for the buttons
// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked")
    overlay.classList.add("active");
}); // end of menuBtn click event

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
}); //end of close Btn click event


let isDescending = true;

sortBtn.addEventListener("click", () => {
    //bang operator (!) flips boolean value
    isDescending = !isDescending;

    //ternary statement
    let direction = isDescending ? "descending" : "ascending";
    const sortedList = sortListByDirection(direction, filteredCoffees);
    displayList(sortedList);

    sortBtn.innerHTML = "";
    
    const sortBtnIcon = document.createElement("img");
    sortBtnIcon.src = `images/arrow-${direction}.svg`;
    //sortBtnIcon.attr("src", `images/arrow-${direction}.svg`);

    sortBtn.appendChild(sortBtnIcon);
    //sortBtnIcon.attributes("src", "")
    //sortBtnIcon.attr("src", `images/arrow-${direction}.svg`)
});


// ascendingBtn.addEventListener("click", function() {
//     //console.log("ascedning clicked");
//     //purgeList();
//     const sortedList = sortListByDirection("ascending", filteredCoffees);
//     //console.log(sortedList);
//     displayList(sortedList);
// }); // end of ascending  button click event

// descendingBtn.addEventListener("click", function() {
//     //console.log("descending clicked");
//     //purgeList();
//     const sortedList = sortListByDirection("descending", filteredCoffees);
//     //console.log(sortedList);
//     displayList(sortedList);
// }); //end of descending button click event

priceRanges.addEventListener("change", (event) => {
    console.log("price range changed");
    console.log(event.target.value);
    const selectedRange = event.target.value;

    if (selectedRange === "all") {
        //purgeList();
        // displayList(coffees);
        filteredCoffees = sortListByDirection(sortDirection, [...coffees]);
    } else {
        //make "2-3" into [2,3]
        const [minValue,maxValue] = selectedRange.split("-");

        const tempFilteredCoffees = getFilteredCoffees(minValue,maxValue);
        filteredCoffees = sortListByDirection(sortDirection, tempFilteredCoffees);
        //purgeList();
    };//end of conditional
    displayList(filteredCoffees);
}); // end of priceRanges change event


// 4. initializations
const sortedStarterList = sortListByDirection(sortDirection, filteredCoffees);
displayList(sortedStarterList);