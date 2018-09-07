console.log("Up and running!");

// let cardOne   = "queen"
// let cardTwo   = "queen"
// let cardThree = "king"
// let cardFour  = "king"

// console.log("User flipped " + cardOne);

cards = ["queen", "queen", "king", "king"]

cardsInPlay = []

function flipCard(cardId){

  if (cardsInPlay.length === 2){
    console.log("Yes it is");
  }

  if (cardsInPlay[0] === cardsInPlay[1]){
    console.log("Nice match");
  } else {
    console.log("Try again");
  }

// cardOne = cards[0]

// cardsInPlay.push(cardOne)
// console.log(cardsInPlay);
//
// cardTwo = cards[2]
//
// cardsInPlay.push(cardTwo)
// console.log(cardsInPlay);
//
// console.log("User flipped " + cardTwo);

// if (cardsInPlay.length === 2){
//   console.log("Yes it is");
// }
//
// if (cardsInPlay[0] === cardsInPlay[1]){
//   console.log("Nice match");
// } else {
//   console.log("Try again");
// }
