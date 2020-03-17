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
    return this.guess === this.card.guess ? true : false;
  }

  giveFeedback() {
    if (this.guess !== this.card.guess) {
      return 'incorrect!';
    } else {
      return 'correct!';
    }
    // returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
  }
}


module.exports = Turn
