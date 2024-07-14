//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let userinput = document.querySelector('input').value
console.log(userinput)
fetch(`https://www.cocktaildb.com/api/json/v1/1/search.php?s=margarita`)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('img').src = data.get
})
.catch(err => console.log(`error: ${err}`))
