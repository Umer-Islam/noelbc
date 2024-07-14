//Create a constructor with 4 properties and 3 methods
function  PizzaConstructor (name,crust,toppings,cheese){
    this.name = name;
    this.crust = crust;
    this.toppings = toppings;
    this.cheese = cheese;

    this.toppingAlert = function (){
        alert(`your pizza contains the following toppings: ${toppings}`)
    }

}

let pizza1 = new PizzaConstructor('thinCrust','filled',['pepperoni','peppers','olives'],'goat cheese')
console.log(pizza1)