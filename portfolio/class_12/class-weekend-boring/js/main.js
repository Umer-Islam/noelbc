document.querySelector("#check").addEventListener("click", check);

function check() {
  let day = document.querySelector("#day").value;
  day =day.toLowerCase();

  //Conditionals go here
  if (day == "tuesday" || day == "thursday") {
    console.log("ClassDay👍");
    document.querySelector("#placeToSee").innerText = "ClassDay👍";
  } else if (day == "saturday" || day == "sunday") {
    console.log("Weekend😊");

    document.querySelector("#placeToSee").innerText = "Weekend😊";
    document.querySelector("#placeToSee").style.color = 'green';
  } else {
    console.log("Boooooooooooooooring😡");
    document.querySelector("#placeToSee").innerText = "Boooooooooooooooring😡";
  }
}
