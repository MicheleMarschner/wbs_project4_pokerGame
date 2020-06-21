class Player {
    constructor(id, name, active = false, hand = [], gameScore = 0) {
        this._id = id;
        this._name = name;
        this._gameScore = gameScore;
        this._roundScore = 0;
        this._hand = hand;
        /*this._active = active;*/
    }

    receiveCard(receivedCard) {
       this._hand.push(receivedCard);
       this.addRoundScore(receivedCard);
       return this.checkFor21();
    }

    addRoundScore(receivedCard) {
        this._roundScore += receivedCard._value;
    }
    
    resetPlayer() {
        this._hand = [];
        this._roundScore = 0;
    }

    checkFor21() {
        if(this._roundScore > 21) {
            return "Lost";
        }
    }
    
}


export default Player;