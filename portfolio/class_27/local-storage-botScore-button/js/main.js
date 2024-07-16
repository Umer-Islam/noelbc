//Create a button that adds 1 to a botScore stored in localStorage 
if(localStorage.getItem('count')===null){
    localStorage.setItem('count',0)

}else{


}


document.querySelector('h2').innerText = localStorage.getItem('count')
document.querySelector('button').addEventListener('click',addAnotherOne);

function addAnotherOne(){
   let countVal =  localStorage.getItem('count') 
   countVal = Number(countVal)
   console.log(typeof(countVal))
   countVal +=1 ;
   localStorage.setItem('count',countVal)
   document.querySelector('h2').innerText = localStorage.getItem('count')


}
