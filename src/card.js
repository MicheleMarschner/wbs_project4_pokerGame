
const ACE_VALUE = 11;


class CardDeck{
  constructor() {
    this._cards = [];
    this._playedCards = [];
  }

  assignValue(rank){
    let value;
    if(rank === "A") {
      value = ACE_VALUE; 
    }
    else if(rank === "J" || rank === "Q" || rank === "K"){
      value = 10; 
    }
    else {
     value = parseInt(rank);
    }
    return value;

  }

  generate(){
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = ["c", "h", "d", "s"];

    for(let i=0; i<suits.length; i++) {
      for(let j=0; j<ranks.length; j++){
        let value = this.assignValue(ranks[j]); 
        this._cards.push(new Card(ranks[j],suits[i], value));
      }
    }
  }
  
  shuffle() {
    let tmp;
    let randomIdx;

    /*my solution
    do{
      randomIdx = Math.floor(Math.random()*this._cards.length);
      tmpDeck.push(this._cards[randomIdx]);
      this._cards.splice(randomIdx, 1);
    } while(this._cards.length>0)

    this._cards = tmpDeck;*/

    //official Yates-Fisher algorithm to shuffle arrays
    for(let i = this._cards.length-1; i>0; i--){
      randomIdx = Math.floor(Math.random() * i);
      tmp = this._cards[i];
      this._cards[i] = this._cards[randomIdx];
      this._cards[randomIdx] = tmp;
    }
  }

  playCard(){
    this._playedCards.push(this._cards.pop());
    return this._playedCards[this._playedCards.length-1];
  }
  
  resetDeck() {
    this._cards = this._cards.concat(this._playedCards);
    this._playedCards = [];
  }
  
}



class Card {
    constructor(rank, suit, value, played = false) {
      this._id = rank + suit;
      this._suit = suit;
      this._value = value;
    }
  }



export default CardDeck;