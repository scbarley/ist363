const cars = [
    {
        name: "Ford",
        price: 20000
    },
    {
        name: "Chevy",
        price: 25000
    },
    {
        name: "BMW",
        price: 30000
    },
    {
        name: "Audi",
        price: 35000
    },
    {
        name: "Ferrari",
        price: 400000
    },
]; // end of cars array

const filteredCars = cars.filter((car) => {
    return car.price > 30000;
}); //end of filteredCars method
console.log({filteredCars});