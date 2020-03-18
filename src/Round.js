const Turn = require('./turn');

class Round {
  constructor(deck, currentCard) {
    this.deck = deck;
    this.currentCard = currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.allCards[0];
    return this.currentCard;
  }

  takeTurn(guess) {
    this.returnCurrentCard();
    this.turns++;
    let turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    // calculates and returns the percentage of correct guesses
  }

  endRound() {
    // prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
  }
}


module.exports = Round;
