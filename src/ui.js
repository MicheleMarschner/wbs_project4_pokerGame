


import Game from './game.js';

//? other solution ?
let blackjack = new Game();



window.onload = function(event) {
  document.querySelector(".deck").style.backgroundImage = "url('./src/img/card_back.jpg')";
  blackjack.init();
};

/*                   Events                             */

document.querySelector(".choice").addEventListener("click", e => {
  blackjack.nextMove(e.target.id);
  e.preventDefault();
});


  function updateUI(activePlayer) {
  let receivedCard = activePlayer._hand[activePlayer._hand.length-1];
  renderUI(activePlayer._id, activePlayer._roundScore, blackjack._deck._cards.length, receivedCard);
  }

  function resetUI() {
  for(let i=0; i<blackjack._player.length; i++){
    renderUI(blackjack._player[i]._id, blackjack._player[i]._roundScore, blackjack._deck._cards.length);
  }

  }


  function renderUI(PlayerId, score, deckLength, receivedCard = null) {
    let Player = document.getElementById(`player${PlayerId}`);
    // update remaining Cards in Deck
    document.querySelector(".deck p").innerHTML = `${deckLength}`;

    if(receivedCard){
      // show received Card
      Player.querySelector(".cards").innerHTML += `<div class="card"></div>`;
      if(receivedCard._faceup === false){
        Player.querySelector(".cards").lastChild.style.backgroundImage = "url('./src/img/card_back.jpg')";
      }
      else {
        Player.querySelector(".cards").lastChild.style.backgroundImage = "url('./src/img/" + receivedCard._id + ".svg')";
      }
    }
    else{
      Player.querySelector(".cards").innerHTML = "";
    }

    // update Score
    Player.querySelector(".score span").innerHTML = `${score}`;
  }


  export {updateUI, resetUI};