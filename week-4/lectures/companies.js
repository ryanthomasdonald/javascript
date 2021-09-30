const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// for (let index = 0; index < ages.length; index ++) {
//     console.log(ages[index]);
// }

// for (let index = 0; index < companies.length; index ++) {
//     console.log(companies[index].name);
// }

// ages.forEach(age=>{
//     console.log(age);
// });

// companies.forEach(company=>{
//     console.log(company.name);
//     console.log(company.category);
//     console.log(company.start);
//     console.log(company.end);
// });

// let newAges = ages.map((num) =>{
//     return num + 5
// })

// console.log(newAges)
// console.log(ages)

// let newEnd = companies.map(company => {
//     let companiesObj = {...company}
//     if (company.category == "Finance"){
//         companiesObj.end = 2021;
//     }
//     return companiesObj
// })

// console.log(newEnd);

// let evenAges = ages.filter(age =>{
//     if (age % 2 === 0){
//         return age
//     }
// })

// console.log(evenAges)

// let filteredAges = ages.filter(age => {
//     return age > 35
// })

// console.log(filteredAges)

// let newerComps = companies.filter(company => {
//     let companiesObj = {...company}
//     if (companiesObj.start <= 1990){
//         return company
//     }
// })

// console.log(newerComps)

let is20 = ages.some(num => num === 21)

console.log(is20)

let less14 = ages.some(num => num < 14)

console.log(less14)

let oldComp = companies.some(company => company.start < 1990)

console.log(oldComp)