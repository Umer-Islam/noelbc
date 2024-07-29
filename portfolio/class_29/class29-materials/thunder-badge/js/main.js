//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes
class Pokemon{
    constructor(name,color,power){
        this.name = name;
        this.color = color;
        this.power = power;
    }
    intro = _=>{
        console.log(`color of ${this.name} is ${this.color} and its power is ${this.power}`)
    }
}
let firstChar = new Pokemon("picachu","yellow","⚡ ")
console.log(firstChar)
console.log(firstChar.intro())