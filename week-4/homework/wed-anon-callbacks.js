// 1

let arr1 = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

let evenNums = arr1.filter(num => {
    if (num > 0){
        return num;
    };
});

console.log(evenNums);
console.log();

// 2

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let posNums = arr2.filter(num => {
    if (num % 2 === 0){
        return num;
    };
});

console.log(posNums);
console.log();

// 3

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let squareNums = arr3.map(num => {
    let square = num * num;
    return square;
});

console.log(squareNums);
console.log();

// 4

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

let coolCities = cities.filter(city =>{
    if (city.temperature < 70.0){
        return city;
    };
});

console.log(coolCities);
console.log();

// 5

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

let cityNames = cities.map(city => {
    return city.name;
});

console.log(cityNames);
console.log();

// 6

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

let greeting = people.forEach(person => console.log(`Good job, ${person}!`));


console.log(greeting);
console.log();

// 7

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

let peopleAlpha = people.sort();

console.log(peopleAlpha);
console.log();

// 8

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

let peopleNameLength = people.sort((name1, name2) => name1.length - name2.length);

console.log(peopleNameLength);
console.log();

// 9

var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];

function sum(array){
    let sum = 0;
    for (let index = 0; index < array.length; index++){
        sum += array[index];
    };
    return sum;
};

let arrSumVal = arr.sort((num1, num2) => sum(num1) - sum(num2));

console.log(arrSumVal);
console.log();

// 10

function call3Times(fun){
    fun(); fun(); fun();
};

function fun(){
    console.log("Hello, world!");
};

call3Times(fun);
console.log();

// 11

function callNTimes(num, fun){
    for (let index = 0; index < num; index++){
        fun();
    };
};

callNTimes(5, fun);
console.log();

// 12

const numArr = [1, 2, 3, 4, 5];

let arrSum = numArr.reduce((num1, num2) => num1 + num2);

console.log(arrSum);
console.log();

// 13

// function acronym(words){

// }