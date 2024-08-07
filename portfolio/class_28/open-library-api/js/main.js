//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        console.log(data.title)
        document.querySelector('h2').textContent = data.title;
        document.querySelector('p').textContent = data.title;


        })
       
    
      .catch(err => {
          console.log(`error ${err}`)
      });
}

