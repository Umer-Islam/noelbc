//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class Espresso {
  constructor(contains_sugar, is_cold, is_instant, name) {
    this.contains_sugar = contains_sugar;
    this.is_cold = is_cold;
    this.is_instant = is_instant;
    this.name = name;
  }
intro =_ =>{
    console.log(`this is a ${this.name}, is it served cold ${this.is_cold}, is it instant ${this.is_instant} and contains sugar? ${this.contains_sugar}`)

}
served = _=> {
    console.log('your order is coming your way.')
}


}


let firstCup = new Espresso(true,false,false,"home grown")