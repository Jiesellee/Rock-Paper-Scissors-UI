
let plyerScore = 0;
let compScore = 0;
const gameScores = [];

window.onload = function what() {
  document.getElementById('player1Score').innerHTML = plyerScore;
  document.getElementById('player2Score').innerHTML = compScore;

  function computerPlay() {
    const num = Math.floor(Math.random() * 3);
    return {
      0: 'Rock',
      1: 'Paper',
      2: 'Scissors',

    }[num];
  }

  function displaysAllGameScores(result) {
    gameScores.push(result);
    document.getElementById('allScores').innerHTML = `<pre>${gameScores.join('\n')}</pre>`;
    // console.log(arr.join('\r\n'));;
  }

  function overallGameWinner() {
    if (plyerScore >= 5) {
      gameResultReset('Congratulations, you have won this game after 5 rounds!!');
    } else if (compScore >= 5) {
      gameResultReset('Bad luck, the PC has won this game after 5 rounds');
    }
  }

  function disablingButtons(buttonChoice) {
    document.getElementById(buttonChoice).classList.add('nohover');
    document.getElementById(buttonChoice).disabled = true;
    document.getElementById(buttonChoice).style.cursor = 'default';
  }

  function enablingButtons(buttonChoice) {
    document.getElementById(buttonChoice).classList.remove('nohover');
    document.getElementById(buttonChoice).disabled = false;
    document.getElementById(buttonChoice).style.cursor = 'grab';
  }

  function resetGameScore() {
    document.getElementById('resetGame').innerHTML = 'Click here to reset the game';

    document.getElementById('resetGame').style.visibility = 'visible';
    document.getElementById('gameResult').style.visibility = 'visible';

    resetGame.addEventListener('click', () => {
      document.getElementById('resetGame').style.visibility = 'hidden';
      document.getElementById('gameResult').style.visibility = 'hidden';

      plyerScore = 0;
      compScore = 0;

      document.getElementById('player1Score').innerHTML = plyerScore;
      document.getElementById('player2Score').innerHTML = compScore;

      enablingButtons('rock');
      enablingButtons('scissors');
      enablingButtons('paper');
    });
  }
  function playRound(playerSelection, computerSelection) {
    // Rock
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
      plyerScore++;
      document.getElementById('player1Score').innerHTML = plyerScore;
      return 'You Win! Rock beats Scissors';
    } if (playerSelection == 'rock' && computerSelection == 'Paper') {
      compScore++;
      document.getElementById('player2Score').innerHTML = compScore;
      return 'You Loose! Rock beats Paper';
    } if (playerSelection == 'rock' && computerSelection == 'Rock') {
      return 'You have both chosen Rock, Please try again ';
    }

    // Paper
    if (playerSelection == 'paper' && computerSelection == 'Rock') {
      plyerScore++;
      document.getElementById('player1Score').innerHTML = plyerScore;
      return 'You Win! Paper beats Rock';
    } if (playerSelection == 'paper' && computerSelection == 'Scissors') {
      compScore++;
      document.getElementById('player2Score').innerHTML = compScore;
      return 'You Loose! Scissors beats Paper';
    } if (playerSelection == 'paper' && computerSelection == 'Paper') {
      return 'You have both chosen Paper, Please try again';
    }

    // Scissors
    if (playerSelection == 'scissors' && computerSelection == 'Paper') {
      plyerScore++;
      document.getElementById('player1Score').innerHTML = plyerScore;
      return 'You Win! Scissors beats Paper ';
    } if (playerSelection == 'scissors' && computerSelection == 'Rock') {
      compScore++;
      document.getElementById('player2Score').innerHTML = compScore;
      return 'You Loose! Scissors beats Rock';
    } if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
      return 'You have both chosen Scissors, Please try again';
    }
  }

  function roundWinner(gameChoice) {
    const computerSelection = computerPlay();
    const result = playRound(gameChoice, computerSelection);
    document.getElementById('gamePlay').innerHTML = `Player selection is ${gameChoice}<br />`
            + `PC selection is ${computerSelection}`;
    document.getElementById('roundWinner').innerHTML = result;
    overallGameWinner();
    displaysAllGameScores(result);
  }

  rock.addEventListener('click', () => {
    roundWinner('rock');
  });

  paper.addEventListener('click', () => {
    roundWinner('paper');
  });

  scissors.addEventListener('click', () => {
    roundWinner('scissors');
  });


  function gameResultReset(displayResult) {
    document.getElementById('gameResult').innerHTML = displayResult;
    disablingButtons('rock');
    disablingButtons('scissors');
    disablingButtons('paper');
    resetGameScore();
  }
};
