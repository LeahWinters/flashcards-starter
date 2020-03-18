const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/turn');
const Round = require('../src/Round');

describe('Round', function() {

  let round;
  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of a Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should start with a deck', function() {
    expect(round.deck.allCards).to.deep.equal([card1, card2, card3]);
  });

  it('should start with the current card being the first card in the deck', function() {
    round.returnCurrentCard();
    expect(round.currentCard).to.equal(round.deck.allCards[0]);
  });

  it('should count each time a guess is made', function() {
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
  });

  it('should evaluate if the incorrect guess\'s id is in the incorrectGuesses array', function() {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should return the correct feedback based on guess', function() {
    const correct = round.takeTurn('sea otter');
    const incorrect = round.takeTurn('pug');
    expect(correct).to.equal('correct!');
    expect(incorrect).to.equal('incorrect!');
  })

});
