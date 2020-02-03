let pyschicGame = {
  letters: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ],
  wins: 0,
  losses: 0,
  chance: 9,
  entryArr: [],
  getRandomInteger: function() {
    return this.letters[Math.floor(Math.random() * this.letters.length)];
  },

  getViewPort: function() {
    document.querySelector("#header").innerHTML = "The Pyschic Game";
    document.querySelector("#paragraph").innerHTML =
      "Guess what letter i'm thinking of";
    document.querySelector("#winss").innerHTML = `Wins: ${this.wins}`;
    document.querySelector("#lossess").innerHTML = `Losses: ${this.losses}`;
    document.querySelector("#chances").innerHTML = `Chance: ${this.chance}`;
    document.querySelector(
      "#wrong_letters"
    ).innerHTML = `Wrong guesses: ${this.entryArr}`;
  },
  playGame: function(userInput) {
    let compGuess = this.getRandomInteger();
    if (this.letters.indexOf(userInput) > -1) {
      if (this.chance > 0) {
        if (userInput === compGuess) {
          this.wins++;
        } else {
          this.entryArr.push(userInput);
          this.chance--;
        }
      } else {
        this.resetGame();
      }
    }
  },
  resetGame: function() {
    if (this.chance === 0) {
      this.chance = 9;
      this.entryArr = [];
      this.losses++;
    }
  }
};

window.onkeyup = function(event) {
  let userInput = event.key;
  pyschicGame.playGame(userInput);
  pyschicGame.getViewPort();
};
pyschicGame.getViewPort();
