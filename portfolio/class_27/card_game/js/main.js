
let deckId = '';

let url1 = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
fetch(url1)
.then(res=>res.json())
.then(data=>{
console.log(data)
deckId = data.deck_id;

})
.catch(err => console.log(`error: ${err}`))

document.querySelector("button").addEventListener("click", drawTwoCards);

function drawTwoCards() {
const url2 = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
fetch(url2)
.then(res=>res.json())
.then(data=>{
console.log(data)
deckId = data.deck_id;
document.querySelector('#player1-img').src = data.cards[0].image;

document.querySelector('#player2-img').src = data.cards[1].image;

})
.catch(err => console.log(`error: ${err}`))

}
