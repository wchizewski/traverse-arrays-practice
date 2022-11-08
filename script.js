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
  } else {
    maybeCount++;
  }
}

// question 2
let ages = [];
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
let prices = [2, 2, 2, 2, 21, 21, 21, 21, 12, 21, 55, 55, 55, 55, 100];
let under20 = 0;
let twentyTo49 = 0;
let fiftyPlus = 0;
// 3a
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < 20) {
    under20++;
  } else if (prices[i] < 50) {
    twentyTo49++;
  } else {
    fiftyPlus++;
  }
}
// 3b
for (let i = 0; i < prices.length; i++) {
  prices[i] += 2;
}
// 3c
for (let i = 0; i < prices.length; i++) {
  prices[i] += prices[i] * 0.05;
}
// 3d
for (let i = 0; i < prices.length; i++) {
  prices[i] -= prices[i] * 0.2;
}
