// 1 Hello

function hello(name){
    console.log(`Hello, ${name}!`);
}

hello("Ryan");
console.log();


// 2 Hello w/Default

function hello(name = "Steve"){
    console.log(`Hello, ${name}!`);
}

hello("Ryan");
hello();
console.log();

// 3 Madlib

function madlib(name, subject){
    return `${name}'s favorite subject in school is ${subject}.`;
}

console.log(madlib("Ryan", "music"));
console.log();

// 4 Tip Calc. 1

function tipAmount(cost, service){
    if (service.toLowerCase() === "good"){
        tip = cost * .2;
        ((tip * 100) / 100).toFixed(2);
    }
    else if (service.toLowerCase() === "fair"){
        tip = cost * .15;
        ((tip * 100) / 100).toFixed(2);
    }
    else if (service.toLowerCase() === "bad"){
        tip = cost * .1;
        ((tip * 100) / 100).toFixed(2);
    }
    console.log(`Tip amount: $${tip}`);
}

tipAmount(73, "fair");
console.log();

// 5 Tip Calc. 2

function totalAmount(cost, service){
    if (service.toLowerCase() === "good"){
        tip = cost * .2;
        ((tip * 100) / 100).toFixed(2);
    }
    else if (service.toLowerCase() === "fair"){
        tip = cost * .15;
        ((tip * 100) / 100).toFixed(2);
    }
    else if (service.toLowerCase() === "bad"){
        tip = cost * .1;
        ((tip * 100) / 100).toFixed(2);
    }
    var total = tip + cost;
    console.log(`Total cost: $${total.toFixed(2)}`);
}

totalAmount(72, "fair");
console.log();

// Tip Calc. 3

function splitAmount(cost, service, people){
    if (service.toLowerCase() === "good"){
        tip = cost * .2;
        ((tip * 100) / 100).toFixed(2);
    }
    else if (service.toLowerCase() === "fair"){
        tip = cost * .15;
        ((tip * 100) / 100).toFixed(2);
    }
    else if (service.toLowerCase() === "bad"){
        tip = cost * .1;
        ((tip * 100) / 100).toFixed(2);
    }
    var total = (tip + cost) / people;
    console.log(`Total cost per person: $${total.toFixed(2)}`);
}

splitAmount(71, "fair", 5);
console.log();