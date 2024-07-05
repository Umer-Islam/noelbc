//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let arr = ["sherlock","stranger things","vikings"];
arr.forEach((element) => {
    console.log(element)
})
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let arrNum = [1,2,3,4,5,6,7,8,9];
arrNum.forEach((element) => {
    if(element %2==0){
        console.log(element)
    }
})
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sum(arrayNum){
    let sorted = arrayNum.sort((a,b) => b-a);
    console.log(sorted)
    alert(arrayNum[1] + arrayNum[arrayNum.length-2])
}

sum([1,3,4,5,2,4,6,7,2,3,65,])