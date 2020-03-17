const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a name to represent the current guess', function() {
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should be a card object for the current card being played', function() {
    const sampleCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', sampleCard);
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return the users guess of the card', function() {
    const sampleCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', sampleCard);
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return the selected card', function() {
    const sampleCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', sampleCard);
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should return a boolean indicating if the user’s guess matches the correct answer on the card', function() {
    const sampleCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', sampleCard);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
    const sampleCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', sampleCard);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  })
});
