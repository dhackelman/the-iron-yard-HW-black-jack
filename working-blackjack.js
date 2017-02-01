
function runGame() {

    let display = document.getElementById('cards');
    const cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    let playerCards = [];
    let cardValue = 0;
    // checkResult(true, false);

    function hit() {
      let newCard = Math.floor(Math.random() * cards.length) + 1;
      playerCards.push(newCard);
      display.innerHTML = playerCards;
    }


    let card1 = Math.floor(Math.random() * cards.length) + 1;
    playerCards.push(card1);
    let card2 = Math.floor(Math.random() * cards.length) + 1;
    playerCards.push(card2);
    display.innerHTML = playerCards;




    /**
     * Check the result of the current cards and alert the game result
     *
     * @param  {Boolean} standing  Whether or not the player is standing
     * @param  {Boolean} hitting   Whether or not the player is hitting
     * @return {void}
     */
    function checkResult(standing, hitting) {
        hand = display.innerHTML.split(' ');

        var cardValue = 0;

        hand.forEach(function (card, i) {
            if (Number(card)) {
                cardValue = cardValue + card;
            } else if (card === 'J' || card == 'Q' || card === 'J') {
                cardValue = cardValue + 10;
            } else if (cards[i] = 'A') {
              cardValue = cardValue += 11;
            }
        });
        console.log(cardValue);

        if (cardValue < 16 && standing) {
            alert('Dealer wins.');
        }
        if (cardValue < 19 && standing) {
            alert('Push!');
        }
        if (cardValue > 18 & hitting || cardValue === 21) {
            alert('You win!');
        }
        if (cardValue > 21) {
            alert('You Bust.');
        }

    }

    document.getElementById('stand').addEventListener('click', function() {
      checkResult(true, false);
    });

    document.getElementById('hit').addEventListener('click',function(){
      hitMe();
      checkResult(false, true);
    });
}

runGame();
