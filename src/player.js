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
    }

    addRoundScore(receivedCard) {
        this._roundScore += receivedCard._value;
    }s
}


export default Player;