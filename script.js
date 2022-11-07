// question 1
let results = [];
let yesCount = 0;
let noCount = 0;
let maybeCount = 0;
for (let i = 0; i < results.length; i++) {
    if (results[i] === "yes") {
        yesCount++;
    } else if (results[i] === "no") {
        noCount++;
    } else if (results[i] === "maybe") {
        maybeCount++;
    }
}

// question 2
let ages = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 44, 44, 44, 44, 44, 44, 44, 44, 1];
let under18 = 0;
let eighteenPlus = 0;
for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        under18++;
    } else {
        eighteenPlus++;
    }
}

// question 3
let prices = [];
let under20 = 0;
let twentyTo49 = 0;
let fiftyPlus = 0;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] < 20) {
        under20++;
    } else if (prices[i] < 50) {
        twentyTo49++;
    } else {
        fiftyPlus++;
    }
}