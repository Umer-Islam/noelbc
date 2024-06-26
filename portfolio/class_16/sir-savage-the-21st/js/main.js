//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function savage(){

    for (let i = 0 ; i <21;i+=1){
        console.log('21')
        let h2Holder = document.querySelector('h2').innerText+= ' 21'
    
    
}}
let h1Holder = document.querySelector('h1').addEventListener('click',savage)