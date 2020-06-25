class Player {
    constructor(id, name, hand = [], gameScore = 0) {
        this._id = id;
        this._name = name;
        this._gameScore = gameScore;
        this._roundScore = 0;
        this._hand = hand;
    }

    receiveCard(receivedCard) {
//Ausgabe
        for (const el in receivedCard) {
            console.log(`${el} : ${receivedCard[el]}`);
        }
        console.log("receive Card: " + receivedCard);
//Ausgabe

       this._hand.push(receivedCard);

       if (this.checkForOver21(receivedCard) === true) console.log("lost");
        return receivedCard;
    }

    addRoundScore(receivedCard) {
        this._roundScore += receivedCard._value;
    }
    
    resetPlayer() {
        this._hand = [];
        this._roundScore = 0;
    }

    checkForAce(receivedCard) {
        console.log("check forAce " + receivedCard._id);
        
        if (String(receivedCard._id).indexOf("A")) this._numOfAces += 1;
    }


    checkForOver21(receivedCard) {

        for (const el in receivedCard) {
            console.log(`checkfor21: ${el} : ${receivedCard[el]}`);
        }
        console.log("I am checking for over 21" + receivedCard);
        this.addRoundScore(receivedCard);
        this.checkForAce(receivedCard);
        console.log("Number of Aces: " + this._numOfAces)

        if (this._roundScore > 21) {
                let Ace = this._hand.find(card => card._id.contains("A"));
                console.log("Game -> Ace", Ace);
                Ace._value = 1;
                console.log("Game ->  Ace._value",  Ace._value);
        }

        /*
        if (this._roundScore > 21 && this._numOfAces) {
            for(let i=0; i<this._numOfAces; i++){
                let Ace = this._hand.find(card => card._id.contains("A"));
                console.log("Game -> Ace", Ace);
                Ace._value = 1;
                console.log("Game ->  Ace._value",  Ace._value);
            }
        }*/
        console.log(this._hand);
        /*let activePlayer = this._activePlayer;
        
        console.log("I am checking for over 21");
        console.log("Game -> activePlayer", activePlayer);
        if(activePlayer._hasAce === true && activePlayer._roundScore > 21){
            console.log("Game -> activePlayer._hasAce", activePlayer._hasAce);
            let Ace = activePlayer._hand.find(card => card._id.contains("A"));
            console.log("Game -> Ace", Ace);
            Ace._value = 1;
            console.log("Game ->  Ace._value",  Ace._value);
            
        }*/
        return this._roundScore > 21 ? true : false;
    }

}


export default Player;