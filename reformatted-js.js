//create button to stand
const standBtn = document.getElementById('stand');
//create button to hit
const hitBtn = document.getElementById('hit');
//create playBlackJack object so that we can call the methods we need to play the game
const playBlackJack = (function() {

  //declare const variable of cards (A-K)
  const cardOptions = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

  //declare display variable which will be updated with our cards array
  let gameResult = document.querySelector('.game-result');
  let figure = document.querySelector('figure');

  //create empty array of player's cards which will hold all of our cards throughout the game
  let playerCards = [];

  //create random card creator to cut-down on repeated code
  function delayedReload() {
    setTimeout(location.reload.bind(location), 1500);
  }

  function randomCard() {
     let randomCard = Math.floor(Math.random() * cardOptions.length);
     return randomCard;
  }

  function check21() {
    if (newTotal === 21) {
      gameResult.innerHTML = "You have " + " " + newTotal + ". " + " You win!"
      delayedReload();
    }
  }

  function displayIndCard() {
    figure.innerHTML = " ";
    for (let i =0; i<playerCards.length; i++){
      let newElement = document.createElement('div');
      newElement.className = "card";
      newElement.innerHTML = playerCards[i];
      figure.prepend(newElement);
    }
  }



  //create start method which will call 2 randomcards and push them to the player's array of cards
  function start() {
    let card = cardOptions[randomCard()]; //make sure it creates random # and gets array index value
    playerCards.push(card); //push new card to array
    card = cardOptions[randomCard()]; //make sure it creates random # and gets array index value
    playerCards.push(card); //push new card to array

    console.log(playerCards);
    displayIndCard();
    cardValueTotal();
    check21();

  }

  //find the sum of all our cards using cardValueSum with a function


  function cardValueTotal() {

    let cardValueSum = 0;
    for (let i = 0; i < playerCards.length; i++) {
        if ((playerCards[i] === 'J') || (playerCards[i] === 'Q')  || (playerCards[i] === 'K')){
          cardValueSum = cardValueSum + 10;
        } else if (playerCards[i] === 'A') {
          cardValueSum = cardValueSum + 11;
        } else {
          cardValueSum += playerCards[i];
        }
      };
    newTotal = cardValueSum;
    console.log(newTotal);
  }




  function hit() {
      //add 1 randomcard to playerCards array
      let newCard = cardOptions[randomCard()]; //make sure it creates random # and gets array index value
      playerCards.push(newCard); //push new card to array

      displayIndCard();
      cardValueTotal();

      if (newTotal === 21) {
        gameResult.innerHTML = "You have " + " " + newTotal + ". " + " You win!"
        delayedReload();
      } else if (newTotal > 21) {
        gameResult.innerHTML = "You have " + " " + newTotal + ". " + " You bust!"
        delayedReload();
      }


  }

  function stand() {
      cardValueTotal();
      if (newTotal < 16) {
          gameResult.innerHTML = "You have " + " " + newTotal + ". " + " Dealer wins."
          delayedReload();
      } else if (newTotal < 19) {
          gameResult.innerHTML = "You have " + " " + newTotal + ". " + " Game is a push."
          delayedReload();
      } else if (newTotal > 21) {
          gameResult.innerHTML = "You have " + " " + newTotal + ". " + " You bust!"
          delayedReload();
      } else if (newTotal > 18 || newTotal < 22) {
          gameResult.innerHTML = "You have " + " " + newTotal + ". " + " You win!"
          delayedReload();
      }
    }

  return {
    start: start,
    hit: hit,
    stand: stand
  };

})();

playBlackJack.start();

standBtn.addEventListener('click', function() {
  playBlackJack.stand();
});
hitBtn.addEventListener('click',function(){
  playBlackJack.hit();
});
