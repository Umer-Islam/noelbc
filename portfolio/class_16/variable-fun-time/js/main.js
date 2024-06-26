//--- Easy
//create a variable and assign it a number
let num1 = 4;

//minus 10 from that number
let subtract = num1+10
//print that number to the console
console.log(num1)
//--- Medium
//create a variable that holds a value from the input
//add 25 to that number

//alert that number

//--- Hard
//create a variable that holds the h1
let h1 =  document.querySelector('h1')
h1.addEventListener('click',run)
//add an event listener to that element that console logs the sum of the two previous variables
function run(num1,subtract){
    console.log(num1+subtract)
}