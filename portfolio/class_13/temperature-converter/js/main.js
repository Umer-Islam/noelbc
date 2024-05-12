//Write your pseduo code first!
// 1. input value
document.querySelector('button').addEventListener('click',convert)

function convert (){
    initial_temp = document.querySelector('#tempC').value;
    final_temp = (initial_temp * 9/5) +32
    document.querySelector('h2').innerText  = final_temp



}

// 2. convert and display