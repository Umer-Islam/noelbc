// *Variables*
// Create a variable and console log the value
let var1 = 'whatever';
console.log(var1);
// Create a variable, add 10 to it, and alert the value
let num1 = 1;
num1 +=10
console.log(num1)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(a,b,c,d){
    alert(a-b-c-d)
}
subtract(100,10,10,10)
// Create a function that divides one number by another and returns the remainder
function divide ( a,b){
    return a%b
}
console.log(divide(10,10))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b){
    if ( a+b>50){
        alert("jumanji")
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mulitple(a,b,c){
    let rem = (a*b*c)%3
    if (rem ==0){
        alert("zebra")

    }
}
mulitple(3,3,3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
