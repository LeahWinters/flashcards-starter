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
    const correctGuesses = this.turns - this.incorrectGuesses.length;
    const correctGuessesPercent = (correctGuesses / this.turns) * 100;
    return Math.round(correctGuessesPercent);
  }

  endRound() {
    if (this.turns >= this.deck.allCards.length) {
      const score = this.calculatePercentCorrect();
      return `** Round over! ** You answered ${score}% of the questions correctly!`;
    } else {
      return 'Round is not over yet!';
    }
  }
}


module.exports = Round;
