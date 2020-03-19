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
    if(this.turns > this.deck.allCards.length) {
      this.endRound();
      return
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
      return `** Round over! ** You answered ${score}% of the questions correctly!`;
  }
}


module.exports = Round;
