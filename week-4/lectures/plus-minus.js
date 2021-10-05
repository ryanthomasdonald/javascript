let arr = [1, 2, -7, 4, -5, 3, -7, 0, -4, 2, -3]

// function sumPlusMinus(arr){
//     for (let index = 0; index < arr.length; index++){
//         let posSum = 0;
//         let negSum = 0;
//         if (arr[index] > 0){
//             posSum += arr[index]           // doesn't work
//         }
//         if (arr[index] < 0){
//             negSum -= arr[index]
//         }
//     return posSum, negSum
//     }
// }

let result = arr.reduce((acc, val) => {
    if (val >= 0){
        acc.plus += val
    }
    if (val < 0){
        acc.minus += val
    }
    return acc
}, {plus: 0, minus: 0})

console.log(result)