// Read single digit number and print numbers.

var singleNumber = Math.floor(Math.random()*10)%10;
console.log("Number is: " +singleNumber)
switch(singleNumber) {

    case 0:
        console.log("Number is: ZERO")
        break;

    case 1:
        console.log("Number is: ONE")
        break;

    case 2:
        console.log("Number is: TWO")
        break;

    case 3:
        console.log("Number is: THREE")
        break;

    case 4:
        console.log("Number is: FOUR")
        break;
    
    case 5:
        console.log("Number is: FIVE")
        break;
    
    case 6:
        console.log("Number is: SIX")
        break;    
    
    case 7: 
        console.log("Number is: SEVEN")
        break;
    
    case 8:
        console.log("Number is: EIGHT")
        break;
    
    case 9:
        console.log("Number is: NINE")
        break;
    
     default:
        console.log("INVALID!!!!")
        break;   
}