// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let fav_food= "everything savory"
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let aString = "abcdef";
alert(aString[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function product (a,b,c){
    alert((a/b)*c);
}
product (5,10,5)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function singleNum(num1){
    console.log(Math.pow(num1,3))
}
singleNum(3)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function foo(monthNumber){
    if(monthNumber>3 && monthNumber<10){
        alert ("YAY😀")
    }else{
        alert("Booo☹️")
    }

}
foo(4)

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function boo(num1){
    for(let i = 1; i<=num1; i++){
        if (i %5 ===0){

        }else{
            console.log(i)
        }
    }
}
boo(11)