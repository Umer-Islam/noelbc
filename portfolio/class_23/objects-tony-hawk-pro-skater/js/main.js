//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function ProScatter(name, power, isPro, supermove) {
  this.name = name;
  this.power = power;
  this.isPro = isPro;
  this.supermove = supermove;
  this.supermove = function () {
    alert(`this is ${name}s  supermove................ ${supermove}🔥🔥`);
  };
}

let player1 = new ProScatter("jojo", 89, true, "spits fire");

console.log(player1);
