console.log("Sum of all numbers till n")

var n = 10
//find the sum of all numebr till n -> 5
var sum = 0
while(n > 0){
    sum = sum + n
    console.log(sum)
    n = n-1
    //n--
}

console.log("Sum of all numbers till " + n)
console.log(sum);

/* use prompt to capture n
use for loop instead of while loop
DO NOT SAVE THE CODE, YOU MIGHT INTO AN INFINITE LOOP*/

var i = prompt("Input number only for n: ")

for (var sum = 0; i > 0; i--) {
    sum = sum + i
    console.log(sum)
}

/*asyraf
console.log("using FOR loop...")
var sum = 0
for(var j=10; j>0; j=j-1){
    sum  = sum + j
    console.log("Sum of all numbers till " + (sum))
}

//zolah
console.log("Sum of all numbers till n");

var m = prompt("Input the value of n: ")
//n = 10
console.log(typeof m)
n = parseInt(m)
console.log(typeof n)

for (var sum = 0; n>0; n=n-1){
    sum = sum + n
    console.log(sum)
}

console.log("Sum: " + sum)
054321*/
