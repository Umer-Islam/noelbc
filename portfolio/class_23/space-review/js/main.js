//Arrays

//Create an array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, c) => acc + c, 0);
console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let multiple = arr.map((n) => n ** 2);
console.log(multiple);

//Create a function that takes string
//Print the reverse of that string to the console
let toReverse = "whatever";
function reversed(str) {
  return str.split("").reverse().join('');
}
console.log(reversed(toReverse));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
let palindrome = (str) => {
    console.log(str +' \n '+ reversed(str))

  if (str === reversed(str)) {
    alert("palindrome");
  }
};
palindrome("caac");
