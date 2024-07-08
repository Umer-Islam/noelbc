//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 3];
let sum = 0;
arr.forEach((n) => {
  return (sum += n);
});
console.log(sum);
let acc= arr.reduce((acc,c)=> acc+c,0)
console.log(acc)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function array1(arr) {
  console.log(`orignal array:${arr}`);

  let newarr = arr.map(n=> n *2)
  return newarr
}
console.log(array1([1, 2, 3, 4, 5]));
//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
