const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(function() {
    deck = new Deck();
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of a Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should start with an empty deck', function() {
    expect(deck.allCards).to.deep.equal([]);
  });

  it('should contain all cards in deck array', function() {
    deck.createDeck(card1);
    deck.createDeck(card2);
    deck.createDeck(card3);
    expect(deck.allCards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in deck', function() {
    deck.createDeck(card1);
    deck.createDeck(card2);
    deck.createDeck(card3);
    expect(deck.countCards()).to.equal(3);
  })

});
