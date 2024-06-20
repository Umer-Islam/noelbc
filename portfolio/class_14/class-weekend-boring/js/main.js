//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector("#check").addEventListener("click", check);
function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "tuesday" || day === "thursday") {
    document.querySelector("h2").innerText = "You have class today!";
  } else if (day === "saturday" || day === "sunday") {
    document.querySelector("h2").innerText = "WeekEnd";
  } else if (day === "wednesday") {
    document.querySelector("h2").innerText = "humpDay";
  } else {

    document.querySelector('h2').innerText = "whatever"
  }
}
