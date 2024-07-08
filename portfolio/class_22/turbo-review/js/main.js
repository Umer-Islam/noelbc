// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let fav_drink = '                    Coca  Cola';
fav_drink = fav_drink.trim();
console.log(fav_drink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let findIt ="whatever the hell it is ";
console.log(findIt.search('hell'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let game = ['rock','paper','scissors'];
let rand = Math.floor(Math.random()*3);
console.log(game[rand])
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let choice = 1;

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
