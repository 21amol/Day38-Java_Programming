// Read numbers and display the units....
var max = 10000;
var number = Math.floor(Math.random() * max) + 1;
console.log(number)

switch(number) {
case 1:
    console.log("Units place is: Ones")
    break;

case 10:
    console.log("Units place is: Tens")
    break;

case 100:
    console.log("Units place is: Hundreds")
    break;

case 1000:
    console.log("Units place is: Thousands")
    break;    

default:
    console.log("TRY AGAIN!!!")
    break;
}