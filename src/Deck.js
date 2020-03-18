class Deck {
  constructor(allCards) {
    this.allCards = allCards || [];
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
