// Confirmation about leap year....
 "use strict";
 var ps = require("prompt-sync")
 var prompt = ps();

// var year = prompt("Enter the year: ");
// console.log("The entered year is: " +year);

var year = Math.round(Math.random() * 1000 + 1900);
console.log("The year is: "+year);
if (year % 4 == 0) {
    console.log(year + " is a leap year.")
} else {
    console.log(year + " is not a leap year.")
}