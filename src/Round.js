const Turn = require('./turn');

class Round {
  constructor(deck, startTime) {
    this.deck = deck;
    this.currentCard = null;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = startTime;
  }

  returnCurrentCard() {
    this.currentCard = this.deck.allCards[0];
    return this.currentCard;
  }

  takeTurn(guess) {
    let card = this.returnCurrentCard();
    this.turns++;
    let turn = new Turn(guess, card);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    if (this.deck.allCards.length === 0) {
      return this.endRound();
    }
    this.deck.allCards.shift();
    this.returnCurrentCard();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const correctGuesses = this.turns - this.incorrectGuesses.length;
    const correctGuessesPercent = (correctGuesses / this.turns) * 100;
    return Math.round(correctGuessesPercent);
  }

  endRound() {
    const score = this.calculatePercentCorrect();
    console.log('endRound fn')
    console.log(`** Round over! ** You answered ${score}% ofthe questions correctly!`);
    let stopTime = Date.now();
    this.calculateGameTime(stopTime);
  }

  calculateGameTime(stopTime) {
    let totalGameSeconds = Math.floor((stopTime - this.startTime) / 1000);
    let minutes = Math.floor((totalGameSeconds / 60) % 60);
    let seconds = Math.floor((totalGameSeconds) % 60);
    console.log(`** You completed the game in ${minutes} and ${seconds}!! **`);
  }
}


module.exports = Round;
