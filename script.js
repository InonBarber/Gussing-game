'use strict';

let secretNumber = Math.trunc(Math.random()*20 +1);
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess,typeof guess);

  //When guess is no input
  if(!guess){
    displayMessage('No Number');
  }
  else if(guess !== secretNumber){
      if(score > 1){
       // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too Low';
        displayMessage(guess > secretNumber ? 'Too high' : 'Too Low');
        score--;
        document.querySelector('.score').textContent =score
      }
  }
  // When player wins
  else if(guess === secretNumber){
    displayMessage('Correct Number');
    ;
    document.querySelector('.number').textContent = secretNumber;
   
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

  if(score > highScore)
  {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
    document.querySelector('.again').addEventListener('click',function(){
        score =20;
        secretNumber = Math.trunc(Math.random()*20 +1);

        displayMessage('Start guessing...');
        
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('number').style.width ='15rem';
});
