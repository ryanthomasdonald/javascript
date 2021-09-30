// function lvl3exercise1(){
//     // Create a "hello" and a "world", return the concatenation of the two

// }

let lvl3exercise1 = (str)=>str = "Hello" + " world.";

// function lvl3exercise2(){
//     // Create a "hello" and a 12, return the concatenation of the two

// }

let lvl3exercise2 = (stuff)=>stuff = "hello" + 12;

// function lvl3exercise3(){
//     // Create a variable that equals 12 and convert it to a string. Return it.

// }
var num = 12;
let lvl3exercise3 = ()=>num.toString();

// function lvl3exercise4(){
//     // Create a "hello world!" string. Return the length of the string

// }

var str = "Hello world!";
let lvl3exercise4 = ()=>str.length;

// function lvl3exercise5(){
//     // Create a "hello world" string. Return the index of the word "world".

// }


let lvl3exercise5 = ()=>{
    let str = "Hello world";
    let arr = str.split(" ");       // fix
    return arr.indexOf["world"]
}

console.log(lvl3exercise1()); //hello world
console.log(lvl3exercise2()); //hello12
console.log(lvl3exercise3()); //"12"
console.log(lvl3exercise4()); //12
console.log(lvl3exercise5()); //1