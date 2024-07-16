//Example fetch using pokemonapi.co
const API_KEY = '';
// document.querySelector("iframe").style.display = "none";
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  let choice = document.querySelector("input").value;

  console.log(choice);

  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (data.msg == undefined) {
      } else {
        alert(data.msg);
      }

      if (data.media_type === "image") {
        document.querySelector("img").src = data.url;
        // document.querySelector("iframe").style.display = "none";
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        // document.querySelector('img').style.display = 'none';
      }
      document.querySelector("h1").innerText = data.title;
      document.querySelector("h3").innerText = data.explanation;
      document.querySelector("h2").innerText = `date: ${data.date}`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
