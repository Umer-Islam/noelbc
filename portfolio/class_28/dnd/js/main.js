//Example fetch using DnD5eAPI - place subclasses in ul
console.clear();
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      data.classes.forEach((obj) => {
        console.log(obj.name);

        let li = document.createElement("li");
        li.textContent = obj.name;
        document.querySelector('ul').appendChild(li);
      });

      document.querySelector("p").innerText = data.desc[0];
      document.querySelector("h2").innerText = data.name;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
