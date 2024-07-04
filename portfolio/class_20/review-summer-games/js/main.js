
//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
let product =1;

function foo(arrayOfNumber){

    arrayOfNumber.forEach((element,i) => {

        product = product * element;

    })
    alert(product)

}

foo([1,2,3,4])