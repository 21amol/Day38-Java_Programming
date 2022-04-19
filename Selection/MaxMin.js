 // Finding max and min from five random numbers....

 var num1 = Math.round(Math.random() * 899 + 100);
 console.log("First random num is: "+num1);
 var num2 = Math.round(Math.random() * 899 + 100);
 console.log("Second random num is: "+num2);
 var num3 = Math.round(Math.random() * 899 + 100);
 console.log("Third random num is: "+num3);
 var num4 = Math.round(Math.random() * 899 + 100);
 console.log("Fourth random num is: "+num4);
 var num5 = Math.round(Math.random() * 899 + 100);
 console.log("Fifth random num is: "+num5);

if(num1>num2 && num1>num3 && num1>num4 && num1>num5) {
    console.log("Max number is: "+num1);
} else if (num1<num2 && num1<num3 && num1<num4 && num1<num5) {
    console.log("Min number is: "+num1);

} else if (num2>num3 && num2>num4 && num2>num5) {
    console.log("Max number is: "+num2);
}  else if (num2<num3 && num2<num4 && num2<num5) {
    console.log("Min number is: "+num2);

} else if (num3>num4 && num3>num5) {
    console.log("Max number is: "+num3);
} else if (num3<num4 && num3<num5) {
    console.log("Min num is: "+num3);


} else if (num4>num5) {
    console.log("Max number is: "+num4);
} else if (num4<num5) {
    console.log("Min num is: "+num4);

} else {
    console.log("Max number is: "+num5);
    console.log("Min num is: "+num5);
}
