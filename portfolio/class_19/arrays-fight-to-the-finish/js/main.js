//Create an array of movie titles. Loop through the array and each
// element to the h2.

let movies = ["alien","predator","robot"]

let h2Holder = document.querySelector('h2')
movies.forEach((x,i)=>{
    h2Holder.innerText += " ."
    h2Holder.innerText += `${x}  `


})
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let arrayNum = [1,2,3,4,5];
console.log(arrayNum)
arrayNum.forEach((element,index)=>{


    arrayNum[index] = element +3
    console.log(arrayNum[index])

}

)
console.log(arrayNum)
console.log('________')


//Find the average of all the numbers from question two
let numbers = [1,2,3]
let sum = 0;
numbers.forEach((element)=>{
    sum += element;
     let average = sum / numbers.length;

})
console.log(sum)
