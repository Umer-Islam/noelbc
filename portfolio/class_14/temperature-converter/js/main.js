document.querySelector("#button").addEventListener("click", convert);
// event.preventDefault();

function convert() {

  const initial_temp = document.querySelector("#initialTemp").value;
  console.log(initial_temp);
  final_temp = 9/5 *( initial_temp)+32;
  document.querySelector('#showInitialTemp').innerText = `initial temperature: ${initial_temp}`;
  document.querySelector('#showFinalTemp').innerText = `final temperature: ${final_temp}`;
  event.preventDefault()
}
