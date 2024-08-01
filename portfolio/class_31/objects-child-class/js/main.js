//Create an a class and extend it - Can be anything you would like it to be!

class FarmAnimals {
  constructor(name,sound) {
    this.name = name;
    this.sound = sound;

  }

  intro=_=>{
    console.log(`${this.name} names this sound ${this.sound}`)



  }
}


class Birds extends FarmAnimals{
constructor(canFly){
    super(name);
    super(sound);
    this.canFly = canFly;
}


}

let cat1 = new FarmAnimals('catte','mewo')