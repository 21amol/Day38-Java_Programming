// Table for power of 2...

var power = Math.floor(Math.random()*10);
console.log("Power of 2 is: " +power);

console.log("Table is: ")
for(var i = 0; i <= power; i++) {
    var ans =  Math.pow(2, i);;
    console.log(ans);
}