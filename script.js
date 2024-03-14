let Score={
  draw:0,
  player_Wins:0,
  computer_Wins:0,
};


function loadScore(){
  Score=JSON.parse(localStorage.getItem(('Score')));
}


function updateScore(){
  localStorage.setItem('Score',JSON.stringify(Score));
}


function resetScore(){
  Score.draw=0;
  Score.player_Wins=0;
  Score.computer_Wins=0;
  localStorage.setItem('Score',JSON.stringify(Score));
  alert("Score is Reset");
  clearResult();
  displayScore();
}


function displayScore(){
  let scoreDisplayElement=document.querySelector("#scoreDisplay");
  scoreDisplayElement.innerHTML=`
  <h3 id="js-ScoreHeading">Score</h3>
  <div id="js-Score">
  <span class="js-Score">Win : ${Score.player_Wins}<span>
  <span class="js-Score">Lose : ${Score.computer_Wins}<span>
  <span class="js-Score">Draw : ${Score.draw}<span>
 </div>
  `
}


function displayResult(computerTurn,result){
  let resultDisplayElement=document.querySelector("#resultDisplay");
  resultDisplayElement.innerHTML=`
  <p class="result">Computer Choose ${computerTurn}</p>
  <p class="result">${result}</p>
  `
}


function clearResult(){
  let resultDisplayElement=document.querySelector("#resultDisplay");
  resultDisplayElement.innerHTML=``
}


function computerTurn(){
  
  randTurn=Math.round(Math.random()*2);
  
  if(randTurn===0){
    return 'Bat'
  }
  else if(randTurn===1){
    return 'Ball'
  }
  else if(randTurn===2){
    return 'Stump'
  }
  
}


function match(playerTurn,computerTurn){
  
  loadScore();
  let result='';

  if(playerTurn==='Bat'){
    if(computerTurn==='Bat'){ 
      result='Draw';
      Score.draw++;
    }
    else if (computerTurn=='Ball'){
      result='Player Wins'
      Score.player_Wins++;
    } 
    else if (computerTurn=='Stump'){
      result='Computer Wins'
      Score.computer_Wins++;
    }
  }
  else if(playerTurn==='Ball'){
    if(computerTurn==='Ball'){ 
      result='Draw';
      Score.draw++;
    }
    else if (computerTurn=='Stump'){
      result='Player Wins'
      Score.player_Wins++;
    } 
    else if (computerTurn=='Bat'){
      result='Computer Wins'
      Score.computer_Wins++;
    }
  }
  else if(playerTurn==='Stump'){
    if(computerTurn==='Stump'){ 
      result='Draw';
      Score.draw++;
    }
    else if (computerTurn=='Bat'){
      result='Player Wins'
      Score.player_Wins++;
    } 
    else if (computerTurn=='Ball'){
      result='Computer Wins'
      Score.computer_Wins++;
    }
  }

  displayResult(computerTurn,result);
  displayScore();
  updateScore();

}





{

  loadScore();
displayScore();

}