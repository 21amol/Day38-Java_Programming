// Printing Harmonic numbers...

var random = Math.floor(Math.random()*10);
console.log("Harmonic value till: "+random);
console.log("Harmonic values are: ");
for(var i = 1; i <= random; i++) {
    console.log("1/"+i);
    var ans = 1/i;
    console.log(ans)
}