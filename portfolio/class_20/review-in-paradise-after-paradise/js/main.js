
// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function paradise(x){
    if(x[0] < x[x.length-1]){
        alert("HI👋")

    }else if(x[0] > x[x.length-1]){
        alert("bye🙋‍♂️")
    }else if(x[1] === x[x.length-1]){
        alert("\"We close in an hour\"")


    }
}
paradise([1,3])
paradise([3,1])
paradise([3,3])
