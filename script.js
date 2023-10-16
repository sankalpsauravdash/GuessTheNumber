
// 'use strict';
// // document.querySelector('.message').textContent='hello checkers';
// // document.querySelector('.number').textContent=13;
// // document.querySelector('.score').textContent=77;
// // document.querySelector('.guess').Value=56;
// // console.log(document.querySelector('.guess').Value);

const x= Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
document.querySelector('.number').textContent=x;



document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

if(!guess){
    document.querySelector('.message').textContent='NO NUMBER';

}
else if(guess===x)
{
    document.querySelector('.message').textContent='correct number';
    document.querySelector('body').style.backgroundColor='red';
    if(score>highscore)
    {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
}

else if(guess > x)
{
    if(score > 1)
    {
        document.querySelector('.message').textContent='too high';
    score--;
    document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent='you lost the game';
        document.querySelector('.score').textContent=0;

    }
    
}

else if(guess < x)
{
    if(score > 1)
    {
        document.querySelector('.message').textContent='too loo';
    score--;
    document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent='you lost the game';
        document.querySelector('.score').textContent=0;

    }
}
}
);
