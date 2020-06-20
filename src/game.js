import Player from './player.js';
import CardDeck from './card.js';

//?define somewhere else?
const NUM_OF_PLAYER = 2;

class Game {
    constructor() {
        this._player = [];
    }
    
    init() {
/*Ausgabe*/console.log("let's start");
        //?define somewhere else?
        this._deck = new CardDeck();
        
        //later in GUI
        for(let i=0; i<NUM_OF_PLAYER; i++) {
            let name = "player"+i+1;
            this.addPlayer(this._player.length+1, name);
        }
        this.initNewRound();  
    }

    addPlayer(id, name){
        this._player.push(new Player(id, name));
    }

    initNewRound(){
        // Game - SetActivePlayer
        this._activePlayer = this._player[0];
        console.log("Game -> initNewRound -> this._activePlayer", this._activePlayer);
        
        //AllPlayer - reset RoundScore & hand
        for(let i=0; i<NUM_OF_PLAYER; i++) {
            this._player[i].resetPlayer();
        }
        
        //CardDeck - put cards back in Deck & shuffle
        //this._deck.resetDeck();
        this._deck.generate();
        this._deck.shuffle();
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
            this.initNewRound();
        }
        else{
            if(choice === "stand"){
                this.changeActivePlayer();   
            }
            this._activePlayer.receiveCard(this._deck.playCard());
        }
        console.log('Player' + this._activePlayer._id);
        console.log(this._activePlayer._hand);

        return this.getActivePlayer();
    }

    endRound()  {

    }


  }
  
  export default Game;


