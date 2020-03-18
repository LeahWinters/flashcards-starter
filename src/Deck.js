class Deck {
  constructor(cardCount) {
    this.cardCount = cardCount;
    this.allCards = [];
  }

  createDeck(card) {
    this.allCards.push(card);
    this.countCards();
  }

  countCards() {
    return this.allCards.length;
  }
}


module.exports = Deck
