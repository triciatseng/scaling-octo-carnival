// 1) Create a list of at least 5 different words. DONE
//
// 2) At the start of the game, select a single word from the list randomly. DONE
//
// 3) The user must guess a letter each turn. If the user correctly guesses a letter then the letter appears in all of the correct locations in the word. DONE
//
// 4) If the user guesses all of the letters then the user wins.
//
// 5) If the user makes 6 wrong guesses then the user loses. DONE
//
//
let words = ['friend','guts','dog','rubicon','lies'];

let x = Math.floor(Math.random() * words.length);

let randomWord = words[x];

let theWord = randomWord.split('');

let guessAWord=[];
let turns=0;
let usedLetters=[];

Array.prototype.contains = function(obj) {
      let i = this.length;
      while (i--) {
          if (this[i] == obj) {
              return true;
          }
      }
      return false;
  };

function displaySpaces(){
    let spaces = "";
    for (let i=0; i <theWord.length; i++){
      spaces+= " _";
    }
    guessWord();
    document.getElementById('results').innerHTML=spaces;
}

function guessWord(){
  for (let i=0; i <theWord.length;i++){
    guessAWord.push(" _");
  }
}

function checkLetter(){
  let userLetter = (<HTMLInputElement>document.getElementById('userLetter')).value;
  usedLetters.push(userLetter);
  let y = theWord.indexOf(userLetter);
  if(y === -1){
    turns+=1;
    let left = 6 - turns;
    document.getElementById('letters').innerHTML=usedLetters;
    if(turns<6){
    hangMan();
    alert('Try again! You have ' + left + ' more guesses.');
    document.getElementById('userLetter').value = "";
    }
    else{
    alert('You lose, game over!');
    location.reload();
    }
  }else{
    let z = theWord[y];
    guessAWord[y]=z;
    let xx = guessAWord.toString();
    xx = xx.replace( /,/g, "");
    document.getElementById('results').innerHTML=xx;
    document.getElementById('letters').innerHTML=usedLetters;
    document.getElementById('userLetter').value = "";
    youWin();
  }
}

function hangMan(){
  if(turns===1){
    var body="Boo, you lost a head!";
    document.getElementById('head').innerHTML = body;
  }else if(turns ===2){
    var arm='Whoa, you lost an arm!';
    document.getElementById('arm1').innerHTML = arm;
  }else if(turns ===3){
    var arm2="There goes your other arm!";
    document.getElementById('arm2').innerHTML = arm2;
  }else if(turns===4){
    var torso="And now the torso!";
    document.getElementById('torso').innerHTML = torso;
  }else if(turns===5){
    var leg="Oh my goodness, you lost a leg!";
    document.getElementById('leg1').innerHTML = leg;
  }else if(turns===6){
    var leg2="Last leg, you're totally dead now.";
    document.getElementById('leg2').innerHTML = leg2;

  }

}

function youWin(){
    if (theWord.length !== guessAWord.length) return;
    for (var i = 0; i < theWord.length; i++){
        if (theWord[i] !== guessAWord[i]){
            return;
        }
    }
    alert("You win!");
    location.reload();
}
