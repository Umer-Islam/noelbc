//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function CharacterMaker (charName,charPower,charWeakness,charSpeed){
    this.charName = charName;
    this.charPower = charPower;
    this.charSpeed = charSpeed;
    this.charWeakness = charWeakness;

    this.charNameCall = function(){
        alert(`i'm ${this.charName}`)
    }


}
let firstchar  = new CharacterMaker('ironman','ironsuit','thinks to much', 'very high')

console.log(firstchar)


let secondchar  = new CharacterMaker('hulk','expands','bipolar', 'normal')
console.log(secondchar.charNameCall())
