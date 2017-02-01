function runGame() {

    const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let display = document.getElementById('cards');
    let cardValue = 0;
    function hit() {
        let card = (Math.floor(Math.random() * cards.length));
        display.innerHTML = display.innerHTML + ' ' + cards[card];
        checkResult(false);
    }
    /**
     * Check the result of the current cards and alert the game result
     *
     * @param  {Boolean} standing  Whether or not the player is standing
     * @param  {Boolean} hitting   Whether or not the player is hitting
     * @return {void}
     */


    function cardTotalValue() {
      let cardValue = 0;
      let hand = display.innerHTML.split(' ');


      hand.forEach(function(pickle, i) {
          if (Number(pickle)) {
              cardValue = cardValue + Number(card);
          }
          if (pickle === 'J' || pickle === 'Q' || pickle === 'K') {
              cardValue = cardValue + 10;
          }
          if (pickle === 'A') {
              cardValue = cardValue + 11;
          }
      });
      console.log(cardValue);
      if (cardValue === 21) {
        alert("You're a Winner!")
      } else if (cardValue > 21) {
        alert('You Bust.');
      }
    }

    function checkResult(standing) {

        if (cardValue <= 15 && standing) {
            alert('Dealer wins.');
        } else if (cardValue <= 18 && standing) {
            alert('Push!');
        }
        if (cardValue > 21) {
            alert('You Bust.');
        } else if (cardValue > 18 && standing || cardValue === 21) {
            alert('You win!');
        }


        display.innerHTML = display.innerHTML;
        card = (Math.round(Math.random() * cards.length));
    }


    document.getElementById('stand').addEventListener('click', () => {
        checkResult(true);
    });

    document.getElementById('hit').addEventListener('click', () => {
        hit();
        cardTotalValue();
    });

    // checkResult(false); // checks the first two card's value


    card = (Math.floor(Math.random() * cards.length));
    display.innerHTML = cards[card];

    card = (Math.floor(Math.random() * cards.length));
    display.innerHTML = display.innerHTML + ' ' + cards[card];

    cardTotalValue();
}
runGame();
