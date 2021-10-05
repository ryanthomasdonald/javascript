let zero = document.querySelector('#zero')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let period = document.querySelector('#period')
let clear = document.querySelector('#clear')
let add = document.querySelector('#add')
let subtract = document.querySelector('#subtract')
let multiply = document.querySelector('#multiply')
let divide = document.querySelector('#divide')
let result = document.querySelector('#equal')
let input = document.querySelector('#input')


// toCalculate = []

// `${firstInput} ${secondInput} ${result}`

zero.addEventListener('click',(e)=>{
    input.append(0)

    console.log(e); 
})
one.addEventListener('click',(e)=>{
    input.append(1)
    console.log(e); 
})
two.addEventListener('click',(e)=>{
    input.append(2)
    console.log(e); 
})
three.addEventListener('click',(e)=>{
    input.append(3)
    console.log(e); 
})
four.addEventListener('click',(e)=>{
    input.append(4)
    console.log(e); 
})
five.addEventListener('click',(e)=>{
    input.append(5)
    console.log(e); 
})
six.addEventListener('click',(e)=>{
    input.append(6)
    console.log(e); 
})
seven.addEventListener('click',(e)=>{
    input.append(7)
    console.log(e); 
})
eight.addEventListener('click',(e)=>{
    input.append(8)
    console.log(e); 
})
nine.addEventListener('click',(e)=>{
    input.append(9)
    console.log(e); 
})

period.addEventListener('click',(e)=>{
    let period = '.'
    input.append(period)
    console.log(e); 
})
add.addEventListener('click',(e)=>{
    let add = '+'
    input.append(add)
    console.log(e); 
})
subtract.addEventListener('click',(e)=>{
    let subtract = '-'
    input.append(subtract)
    console.log(e); 
})
multiply.addEventListener('click',(e)=>{
    let multiply = '*'
    input.append(multiply)
    console.log(e); 
})
divide.addEventListener('click',(e)=>{
    let divide = '/'
    input.append(divide)
    console.log(e); 
})
clear.addEventListener('click',(e)=>{
    input.innerText = ''
    
})

equal.addEventListener('click',(e)=>{
    var inputString = input.innerText
    
})





//slice
//split
//parseInt()

// let add = function(num1, num2){
//     return num1 + num2
// }
// let subtract = function(num1, num2){
//     return num1 - num2
// }
// let divide = function(num1, num2){
//     return num1 / num2
// }
// let multiply = function(num1, num2){
//     return num1 * num2
// }
// let calc = function(num1, num2, callback){ // using other functions inside parameter
//     return callback(num1, num2)
// }