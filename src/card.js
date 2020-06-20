
const ACE_VALUE = 11;


class CardDeck{
  constructor() {
    this._cards = [];
    this._playedCards = [];
  }


  generate(){

    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = ["c", "h", "d", "s"];

    for(let i=0; i<suits.length; i++) {
      for(let j=0; j<values.length; j++){
         this._cards.push(new Card(values[j],suits[i]));
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

/*Ausgabe*/console.log("CardDeck -> shuffle -> this._cards", this._cards);
  }

  playCard(){
    this._playedCards.push(this._cards.pop());

/*Ausgabe*/console.log("CardDeck -> playCard -> this._playedCards", this._playedCards);

    return this._playedCards[this._playedCards.length-1];
    //?mark card as played?
  }
  /*
  resetDeck() {
    this._cards += this._playedCards;
    this._playedCards = [];
    //this.shuffle();
  }
  */
}



class Card {
    constructor(value, suit, played = false) {
      this._id = value + suit;
      this._suit = suit;
      this._value = this.assignValue(value);
      /*this._played = played; ?vl vl nicht? */
      /*?this._faceUp = faceUp;?*/
    }

    assignValue(value){

      if(value === "A") {
        value = ACE_VALUE; 
      }
      else if(value === "J" || value === "Q" || value === "K"){
        value = 10; 
      }
      else {
       value = parseInt(value);
      }
      return value;

    }
    
    
    


  }





export default CardDeck;