
// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console.
let fav_holiday= "sunday";
fav_holiday.toLowerCase();
console.log(fav_holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
// 😊comeback to it
let last3Words = "whatever";
console.log("last 3 chars: "+last3Words.slice(-3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function nums5(num1,num2,num3,num4,num5){
    return Math.abs((num1+num2+num2+num3) -100);

}
console.log(nums5(1,2,3,4,5));

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function num3(num1,num2,num3){
let arr = [num1,num2,num3];
return Math.max(...arr)


}

console.log(num3(122,2,3));
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headOrTail (){
    let randomNum = Math.random();
    if(randomNum < .5){
        return "head";
    }else{
        return "tail";
    }

}
console.log(headOrTail());
console.log("---------------------")
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function num (times){

for(let i = 0; i < times; i++){
    console.log(headOrTail())



}
}

num(4)