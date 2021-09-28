// console.log("Hello world.") // print to console

// `
// Hello
// `

// "Hello" + " " + "there." // (same)

// var a = 4; // declaring variables

// var firstName = "Ryan"; // camelCase

// firstName.length

// var b = 4.1;

// integer and floats = number (not separate things)

// console.log(firstName)
// console.log(firstName.length)
// console.log(firstName.indexOf("y")) // starts with 0 like Python indexing

// c = true // note lowercase

// !   not equal
// &&  and           // boolean operators
// ||  or
// ==  equal to (forgiving)
// === equal to (exacting)

// >=, etc. are all the same

// if (name1 === name2){
//     console.log("same")    // curly brackets overtake indentation, proper code block syntax
// }

// var age = 21;

// if (age >= 21){
//     console.log("You can drink.")
// }
// else if (age < 18){
//     console.log("Get outta here.")                              // note how syntax is different from Python
// }
// else{
//     console.log("You can't drink, but you're allowed in.")
// }

// var z = 4 % 5

// var num = 15;
// if (num % 3 === 0 && num % 5 === 0){
//     console.log("FizzBuzz")
// }
// else if (num % 3 === 0){
//     console.log("Fizz")
// }
// else if (num % 5 === 0){
//     console.log("Buzz")
// }

// SWITCH STATEMENTS (not in Python)

// switch (expression){
//     case value:
//         break                  // syntax
    
//     default:
//         break
// }

// var day = "Wednesday"

// switch (day){
//     case "Wednesday":
//         console.log("It is Wednesday my dudes.")
//         break
//     // etc...
//     default:
//         console.log("Default Statement")
//         break
// }

// var count = 0;

// while(count < 10){
//     console.log(count);
//     count += 1;           // count++; also increments by 1
// }

// for (var count = 0; count < 10; count++){      // note all three expressions
//     console.log(count)
// }

// var arr = [];

// arr.push(23);
// arr.push(13);
// arr.push(5);

// for (var index = 0; index < arr.length; index++){
//     console.log(arr[index])
// }

// console.log(arr[1])

// arr[1] = 14

// console.log(arr)

// var elem = arr.pop() // pops off of end of array
// var elem = arr.shift() // shifts off of beginning of array

// console.log(arr, elem)

// var firstName = "Ryan"
// var lastName = "Donald"

// console.log(`My name is ${firstName} ${lastName}.`) // the two backticks function as the "f-string" from Python, note the dollar sign

// SLICE AND SPLICE

// var nums = [1, 2, 3, 4, 5, 6, 7]

// console.log(nums)
// nums.splice(2, 3)        // cuts 3 elements out at index 2
// console.log(nums)

// var nums = [1, 2, 3, 4, 5, 6, 7]
// var newNums = nums.slice(1, 5)
// console.log(newNums)

// var team = "Green Bay Packers";

// var teamArr = team.split(" ");  // decides what the delimiter is, (" ") <-- splits a phrase into words

// console.log(teamArr);

// for (var wordIndex = 0; wordIndex < teamArr.length; wordIndex++){
//     console.log(teamArr[wordIndex])
// }

// var teamWord = teamArr.join(" ")
// console.log(teamWord)

// var revTeam = team.split(" ").reverse().join(" ")
// console.log(revTeam)

// CASTING TO DIFFERENT DATA TYPES

// var str = "3";

// var strNew = parseInt(str)    // casts to number
// console.log(typeof(strNew))

// var num = 3;

// var numNew = num.toString()   // casts to string
// console.log(numNew)

// OBJECTS IN JAVASCRIPT

// var charSheet = {
//     name: "Tim Berners-Lee",
//     title: "Sir",
//     powers: "Invent the web"
// }

// charSheet["age"] = 30  // adds new key and value (redefines value if key already exists)

// charSheet.age = 30     // also works

// delete charSheet.age   // deletes a value and key

// MORE FOR LOOPS

// for (let key in charSheet){     // use "in" for objects
//     console.log(key);
// }

function add(num1, num2){       // can still use defaults like Python (num1 = 1)
    return num1 + num2
}

var sum = add(4, 6)

console.log(sum)