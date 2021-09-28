// 1

function printNumbers(num1, num2){
    while (num1 != num2){
        if (num1 < num2){
            console.log(num1);
            num1++;
        }
        if (num1 > num2){
            console.log(num1);
            num1--;
        }
    }
    console.log(num2);
}

printNumbers(1, 10);
console.log();

// 2

function printSquare(num){
    var width = 0;
    var height = 0;
    var line = [];
    while (height < num){
        while (width < num){
            line.push("*");
            width++;
        }
        console.log(line.join(" "));
        height++;
    }
}

printSquare(10);
console.log();

// 3

function printBox(num1, num2){
    // TOP
    var topWidth = 0;
    var line = [];
    while (topWidth < num1){
        line.push("*");
        topWidth++;
    }
    var line = line.join(" ");
    console.log(line);
    // MIDDLE
    var width = 0;
    var height = 0;
    var lineGap = [];
    while ((height + 2) < num2){
        while ((width + 2) < num1){
            lineGap.push("  ");
            width++;
        }
        console.log(`* ${lineGap.join("")}*`);
        height++;
    }
    // BOTTOM
    console.log(line);
}

printBox(10, 10);
console.log();

// 4

function printBanner(phrase){
    var topWidth = 0;
    var line = [];
    while (topWidth < (phrase.length + 4)){
        line.push("*");
        topWidth++;
    }
    var line = line.join("");
    console.log(line);
    console.log(`* ${phrase} *`);
    console.log(line);
}

printBanner("Welcome to DigitalCrafts");
console.log();

// 5

function factors(numToFactor){
    num = 0;
    while (num <= numToFactor){
        if (numToFactor % num === 0){
            console.log(num);
            num++;
        }
        else{
            num++;
        }
    }
}

factors(126);
console.log();

// 6

// 7

// 8

function leetSpeak(phrase){
    var splitPhrase = phrase.split("")
    var newPhrase = []
    for (letter of splitPhrase){
        var leet = letter;
        if (leet.toLowerCase() === "a"){
            leet = "4";
        }
        else if (leet.toLowerCase() === "e"){
            leet = "3";
        }
        else if (leet.toLowerCase() === "g"){
            leet = "6";
        }
        else if (leet.toLowerCase() === "i"){
            leet = "1";
        }
        else if (leet.toLowerCase() === "o"){
            leet = "0";
        }
        else if (leet.toLowerCase() === "s"){
            leet = "5";
        }
        else if (leet.toLowerCase() === "t"){
            leet = "7";
        }
        newPhrase.push(leet);
    }
    console.log(newPhrase.join(""));
}

leetSpeak("Dogs and such");
console.log();

// 9

function longLongVowels(word){
    word = word.toLowerCase();

    word = word.replace("aa", "aaaaa");
    word = word.replace("ee", "eeeee");
    word = word.replace("ii", "iiiii");
    word = word.replace("oo", "ooooo");
    word = word.replace("uu", "uuuuu");
    word = word.replace("yy", "yyyyy");

    console.log(word);
}

longLongVowels("good");
console.log();

// 10

function sumNumbers(arr){
    var sum = 0;
    for (num of arr){
        sum = sum + num;
    }
    console.log(sum);
}

sumNumbers([1, 5, 3, 8]);
console.log();

// 11

function positiveNumbers(arr){
    newArr = [];
    for (num of arr){
        if (num > 0){
            newArr.push(num)
        }
    }
    console.log(newArr)
}

positiveNumbers([1, -2, 5, 0, 3, -6]);
console.log();