//Create a stopwatch object that has four properties and three methods
let stopwatch = {};
stopwatch.time = 4;
stopwatch.brand = "whatever";
stopwatch.color = "black";
stopwatch.shape = "round";


stopwatch.func1 = function (time){
    console.log(`the time is ${time}sec`);
}


stopwatch.func2 = function (color){
    console.log(`the time is ${color}`);
}

stopwatch.func1(stopwatch.time)

stopwatch.func2(stopwatch.color)