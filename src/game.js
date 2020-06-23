import Player from './player.js';
import CardDeck from './card.js';
import {updateUI, resetUI} from './ui.js';

//?define somewhere else?
const NUM_OF_PLAYER = 2;
const START_HAND_NUM = 2;

class Game {
    constructor() {
        this._player = [];
    }
    
    init() {
/*Ausgabe*/console.log("let's start");
        //?define somewhere else?
        this._deck = new CardDeck();
        this._deck.generate();
        //later in GUI
        for(let i=0; i<NUM_OF_PLAYER; i++) {
            let name = "player"+i+1;
            this.addPlayer(this._player.length+1, name);
        }
        this.nextMove("reset");  
    }

    addPlayer(id, name){
        this._player.push(new Player(id, name));
    }

    clearRound() {
        //AllPlayer - reset RoundScore & hand
        this._player.forEach(player => {
            player.resetPlayer();   
        })
        //CardDeck - put cards back in Deck & shuffle
        this._deck.resetDeck();
    }

    initNewRound(){
        this._deck.shuffle();

        // Game - SetActivePlayer
        this._activePlayer = this._player[0];
        console.log("Game -> initNewRound -> this._activePlayer", this._activePlayer);
 
        for(let i=0; i<START_HAND_NUM; i++) {
            this._player.forEach(player => {
                if (player === this._player[this._player.length-1] && player._hand.length === 0){
                    let receivedCard = player.receiveCard(this._deck.playCard());
                    receivedCard._faceup = false;
                }
                else {
                    player.receiveCard(this._deck.playCard());
                }
                    updateUI(this.getActivePlayer()); 
                    this.changeActivePlayer();         
            })
        }

        console.log("Game -> initNewRound -> _activePlayer", this._activePlayer);
        console.log(this._player[0]._hand);
        console.log(this._player[1]._hand);
    }

    getActivePlayer() {
        return this._activePlayer;
    }

    changeActivePlayer() {
        let nextPlayerIndex;
        //checks if there is a next player, otherwise Player 1 is next
        if(this._player[this._player.indexOf(this._activePlayer)+1]) {
            nextPlayerIndex = this._player.indexOf(this._activePlayer)+1;
        }
        else{
            nextPlayerIndex = 0;
        }
        this._activePlayer = this._player[nextPlayerIndex];
    }

    nextMove(choice){
        if(choice === "reset"){

            //start last move --> show card
            if (this._player[this._player.length-1]._hand[0]) {
                let showCard = this._player[this._player.length-1]._hand[0]._faceup = true;
                console.log("show Card: " + showCard);
            }
            //end last move --> show card

            this.clearRound();
            resetUI();
            this.initNewRound();
        }
        else{
            if(choice === "stand"){
                this.changeActivePlayer();   
            }
            this._activePlayer.receiveCard(this._deck.playCard());
            updateUI(this.getActivePlayer());
             
        }
        console.log('Player' + this._activePlayer._id);
        console.log(this._activePlayer._hand);
        
       
    }

  }
  
  export default Game;


