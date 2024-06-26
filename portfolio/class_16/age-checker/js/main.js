//Create a conditonal that checks their age
//If under 16, tell them they can not drive


//--- Harder
//On click of the h1
let h1Holder = document.querySelector('h1').addEventListener('click',run)
//Take the value from the input

//Place the result of the conditional in the paragraph

let age = 19
function run (){
    

    if (age < 16){
        console.log('you cannot drive')
    }
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    else if (age < 18){
        console.log("you cannot get in a club");
    }
    //If under 21, tell them they can not drink
    else if (age < 21){
        console.log("you cannot drink");
    }
    //If under 25, tell them they can not rent cars affordably
    else if (age < 35){
        console.log("you cannot rent cars affordably");
    }
    //If under 30, tell them they can not rent fancy cars affordably
    else if (age < 30){
        console.log("you cannot rent fancy cars");
    }
    //If under over 30, tell them there is nothing left to look forward too
    else {
        console.log("nothing to look forward to except become the president");
    }

    }