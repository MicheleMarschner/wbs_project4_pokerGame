import Game from './game.js';

//? other solution ?
let blackjack = new Game();



window.onload = function(event) {
    blackjack.init();
    resetUI();
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
    blackjack.nextMove(choice);
   
    /*      Update UI       */
    let activePlayer = blackjack.getActivePlayer();
    let receivedCard = activePlayer._hand[activePlayer._hand.length-1]._id;
    updateUI(activePlayer._id, receivedCard, activePlayer._roundScore, blackjack._deck._cards.length);

    e.preventDefault();
  });

  function resetUI() {
    document.querySelector(".deck").style.backgroundImage = "url('./src/img/card_back.jpg')";
  }

  function updateUI(activePlayerId, receivedCard, score, deckLength) {
    let activePlayer = document.getElementById(`player${activePlayerId}`);
    // update remaining Cards in Deck
    document.querySelector(".deck p").innerHTML = `${deckLength}`;
    // show received Card
    activePlayer.querySelector(".cards").innerHTML += `<div class="card"></div>`;
    activePlayer.querySelector(".cards").lastChild.style.backgroundImage = "url('./src/img/" + receivedCard + ".svg')";
    // update Score
    activePlayer.querySelector(".score span").innerHTML = `${score}`;
    
    

  }


  function addCard(){

  }

  function showRoundScore(){

  }
