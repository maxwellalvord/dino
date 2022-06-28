export default class guessChecker{
  constructor(secretWord, lastGuess){
  this.secretWord = secretWord;
  this.lastGuess = lastGuess;
  }
  checkAnswer(secretWord, lastGuess) {
    let guessArray = [];
    for (let i = 0; i < secretWord.length; i++) {
      for (let j = 0; j < lastGuess.length; j++)
      if (lastGuess[j] === secretWord[i]){
        guessArray.push(secretWord[i]);
        
      } else {
      console.log('no');
      }
    }
  }
}

