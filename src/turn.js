class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.card = currentCard;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.guess !== this.card.correctAnswer ? 'incorrect!' : 'correct!';
  }
}


module.exports = Turn
