// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 


let candies_bulbasaur = 11;
let candies_caterpie = 6;
let candies_weedle = 6;
let totalCandies = candies_bulbasaur+ candies_caterpie+ candies_weedle;

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
function charmanderTempCheck(tempInF){
    tempInC = (tempInF - 32) * 5/9;
    console.log(`temp in f : ${tempInF}`)
    console.log(`temp in c : ${tempInC}`)
    if(tempInC>0){
        return "charmader will fight"
    }else{
        return "charmander cannot fight"
    }


}
console.log(charmanderTempCheck(35))

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function noOfPikachu(x){
    for(let i = 0; i <=x; i++){
        console.log("Pikachu I choose you")
    }
}
console.log(noOfPikachu(4))