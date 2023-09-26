// 1. Learn how to write an arrow function
// arrow function syntax
const calculateAverage = (a,b) => {
    return (a + b) / 2;
};
console.log(calculateAverage(4,27));

//arrow function syntax, more advanced
const addTen = num => num + 10;//don't love this way, 
console.log(addTen(36));       //will do explicit way

// 2. review forEach array method
// const beatles = ['Paul', 'George', 'Ringo', 'John'];
// //console.log({beatles});
// // beatles.forEach((beatle) => {
// //     console.log({beatle});
// // });

// // 3. Review sort array method
// const sortedBeatles = [...beatles].sort((a,b) => {
//     console.log({a,b});
//     //-1,0,1
//     if (a > b) {
//         return -1
//     };
// });//sort method end
// console.log({sortedBeatles});

const beatles = [
    {
        name: "Paul",
        age: 78
    },
    {
        name: "George",
        age: 75
    },
    {
        name: "Ringo",
        age: 80
    },
    {
        name: "John",
        age: 40
    }
];

const sortBeatlesByAge = [...beatles].sort((a,b) => {
    if (a.age > b.age) {
        return -1;
    }
});
console.log({sortBeatlesByAge});

// 4. finish the sort functionality