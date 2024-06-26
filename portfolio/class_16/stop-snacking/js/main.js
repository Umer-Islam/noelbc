//Create a function that grabs the number of snacks from the input and tells you to stop that many times






document.querySelector('#help').addEventListener('click',run);


function run (){
    let inputValue =Number(document.querySelector('input').value);

    console.log(inputValue)
    document.querySelector('#stops').innerText = ' '
    
    for (let i =0; i<= inputValue-1; i++ ){

        document.querySelector('#stops').innerText += ' stop! '

    }
        
}