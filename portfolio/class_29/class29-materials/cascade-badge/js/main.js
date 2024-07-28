//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let pokemonList = [1,2,3,4,5,6]
function listReverse (arr){
    return pokemonList.reverse()

}
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let a = [1,2,3]
let b = [1,2,3]

function sumVsCube(a,b){
let first = a.reduce((acc,cur)=>acc+cur**2,0);
let second = b.reduce((acc,cur)=>acc+Math.cbrt(cur),0)
console.log(first)
console.log(second)
   return first > second 


}
console.log(sumVsCube([2,2,2],[2,2,2]))

console.log('-----------------------')
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function multiple(arr){
    return arr.filter((element,index)=> element % index ===0)
}
console.log(multiple([1,2,3,34,23,45,67]));
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
console.log('______________')
function sum (arr){
    console.log(arr)


return arr.reduce((acc,curr)=> acc+Number(curr),0)
}

console.log(sum([1,'1',1]))
