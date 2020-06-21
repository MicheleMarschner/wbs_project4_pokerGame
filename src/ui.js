import Game from './game.js';

//? other solution ?
let blackjack = new Game();



window.onload = function(event) {
    blackjack.init();
    document.querySelector(".deck").style.backgroundImage = "url('./src/img/card_back.jpg')";
};


 /*                   Events                              */
  
 document.querySelector(".choice").addEventListener("click", e => {
     let choice;
    
    if (e.target.id === "hit") {
        choice = "hit";
    } else if (e.target.id === "stand") {
        choice = "stand";
    } else if (e.target.id === "reset") {
        choice = "reset";
    }
    
    let activePlayer = blackjack.nextMove(choice);
    updateUI(choice, activePlayer);
    e.preventDefault();
  });

  function updateUI(choice, activePlayer) {
    if(choice === "reset") {
      for(let i=0; i<blackjack._player.length; i++){
        renderUI(blackjack._player[i]._id, blackjack._player[i]._roundScore, blackjack._deck._cards.length);
      }
    }
    else {
      let receivedCard = activePlayer._hand[activePlayer._hand.length-1]._id;
      renderUI(activePlayer._id, activePlayer._roundScore, blackjack._deck._cards.length, receivedCard);
    }
  }

  function renderUI(PlayerId, score, deckLength, receivedCard = null) {
    let Player = document.getElementById(`player${PlayerId}`);
    // update remaining Cards in Deck
    document.querySelector(".deck p").innerHTML = `${deckLength}`;
    if(receivedCard){
      // show received Card
      Player.querySelector(".cards").innerHTML += `<div class="card"></div>`;
      Player.querySelector(".cards").lastChild.style.backgroundImage = "url('./src/img/" + receivedCard + ".svg')";
    }
    else{
      Player.querySelector(".cards").innerHTML = "";
    }
    // update Score
    Player.querySelector(".score span").innerHTML = `${score}`;
  }
