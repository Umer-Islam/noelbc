let redBox = document.querySelector(".red").addEventListener("click", redFunc);
let greenBox = document.querySelector('.green').addEventListener('click',greenFunc)
let blueBox = document.querySelector('.blue').addEventListener('click',blueFunc)

function redFunc() {
  document.querySelector("body").style.backgroundColor = "red";
  console.log("redbox");
}

function greenFunc() {
  document.querySelector("body").style.backgroundColor = "green";
  console.log("redbox");
}

function blueFunc() {
  document.querySelector("body").style.backgroundColor = "blue";
  console.log("redbox");
}
