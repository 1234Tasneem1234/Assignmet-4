//First Problem:

function seerToMon(seer) {
    if (typeof seer != "number") {
        return("Please enter a number!");
    }
    let mon = seer / 40;
    return mon;
}

let seer = 1000;

const myMon = seerToMon(seer);
console.log(myMon);


// Second Problem

function totalSales(tshirtQuantity, pantQuantity, shoeQuantity) {
    if (typeof tshirtQuantity != "number" || typeof pantQuantity != "number" || typeof shoeQuantity != "number") {
        return "Please enter valid quantity!!";
    }
    let perTshirtPrice = 100;
    let perPantPrice = 200;
    let perShoePrice = 500;
    let totalTshirtPrice = tshirtQuantity * perTshirtPrice;
    let totalPantPrice = pantQuantity * perPantPrice;
    let totalshoePrice = shoeQuantity * perShoePrice;
    let totalItemsPrice = totalTshirtPrice + totalPantPrice + totalshoePrice;
    return totalItemsPrice;
}

let myTshirtQuantity = 21; 
let myPantQuantity = 12; 
let myShoeQuantity = 17; 

const myTotalCosts = totalSales(myTshirtQuantity, myPantQuantity, myShoeQuantity);
console.log(myTotalCosts);

// Third Problem

function deliveryCost(shirtQuantity) {

    if (typeof shirtQuantity != "number") {
        return "Please enter a valid quantity"
    }
    if (shirtQuantity <= 100) {
    let perDeliveryCost = 100;
    let totalDeliveryCosts = shirtQuantity * perDeliveryCost;
    return totalDeliveryCosts;
}
else if (shirtQuantity <= 200 && shirtQuantity > 100) {
    let perDeliveryCost = 80;
    let totalDeliveryCosts = shirtQuantity * perDeliveryCost;
    return totalDeliveryCosts;
}
else if (shirtQuantity > 200) {
    let perDeliveryCost = 50;
    let totalDeliveryCosts = shirtQuantity * perDeliveryCost;
    return totalDeliveryCosts;
}
}


let myShirtQuantity = 150;

const myShirtDeliveryCosts = deliveryCost(myShirtQuantity);

console.log(myShirtDeliveryCosts);


// Problem 4

function perfectFriend(freinds) {
    if (typeof freinds != "object") {
        return "Please enter your freinds array";
    }
    for (let i = 0; i < freinds.length; i++){
        let freind = freinds[i];
        if (freind.length == 5) {
           return (freind);
        }
    }
}
const myPerfectFriend = perfectFriend(["Tasneem", "Abdullah", "Samit", "Jamal", "Kamal"]);
console.log(myPerfectFriend);