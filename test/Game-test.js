const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be an instance of a Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start with a current round set to an object', function() {
    expect(game.currentRound).to.deep.equal({});
  });
});
