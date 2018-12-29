
var plyerScore = 0
var compScore = 0
var gameScores = []

document.getElementById('player1Score').innerHTML = plyerScore
document.getElementById('player2Score').innerHTML = compScore


rock.addEventListener('click', function () {
  roundWinner('rock');
})

paper.addEventListener('click', function () {
  roundWinner('paper');
})

scissors.addEventListener('click', function () {
  roundWinner('scissors');
})


function roundWinner(gameChoice){
    const computerSelection = computerPlay()
  const result = playRound(gameChoice, computerSelection)
  document.getElementById('gamePlay').innerHTML = 'Player selection is '+gameChoice + '<br />' +
            'PC selection is ' + computerSelection
  document.getElementById('roundWinner').innerHTML = result
  overallGameWinner();
  displaysAllGameScores(result);
}

function displaysAllGameScores(result){
      gameScores.push(result);
      gameScores.toString();
      document.getElementById('allScores').innerHTML = gameScores;
    } 

function overallGameWinner () {
  if (plyerScore >= 5) {
    document.getElementById('gameResult').innerHTML = 'Congratulations, you have won this game after 5 rounds!!'
    resetGameScore()
  } else if (compScore >= 5) {
    document.getElementById('gameResult').innerHTML = 'Bad luck, the PC has won this game after 5 rounds'
    resetGameScore()
  }
}

function resetGameScore () {
  document.getElementById('resetGame').innerHTML = 'Click here to reset the game'

    document.getElementById('resetGame').style.visibility = 'visible'
    document.getElementById('gameResult').style.visibility = 'visible'

    resetGame.addEventListener('click', function () {
   
    document.getElementById('resetGame').style.visibility = 'hidden'
    document.getElementById('gameResult').style.visibility = 'hidden'

    plyerScore = 0
    compScore = 0

    document.getElementById('player1Score').innerHTML = plyerScore
    document.getElementById('player2Score').innerHTML = compScore
  })
}

function computerPlay () {
  num = Math.floor(Math.random() * 3)
  return {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissors'

  }[num]
}

function playRound (playerSelection, computerSelection) {
  // Rock
  if (playerSelection == 'rock' && computerSelection == 'Scissors') {
    plyerScore++
    document.getElementById('player1Score').innerHTML = plyerScore
    return 'You Win! Rock beats Scissors'
  } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
    compScore++
    document.getElementById('player2Score').innerHTML = compScore
    return 'You Loose! Rock beats Paper'
  } else if (playerSelection == 'rock' && computerSelection == 'Rock') {
    return 'You have both chosen Rock, Please try again '
  }

  // Paper
  else if (playerSelection == 'paper' && computerSelection == 'Rock') {
    plyerScore++
    document.getElementById('player1Score').innerHTML = plyerScore
    return 'You Win! Paper beats Rock'
  } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
    compScore++
    document.getElementById('player2Score').innerHTML = compScore
    return 'You Loose! Scissors beats Paper'
  } else if (playerSelection == 'paper' && computerSelection == 'Paper') {
    return 'You have both chosen Paper, Please try again'
  }

  // Scissors
  else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
    plyerScore++
    document.getElementById('player1Score').innerHTML = plyerScore
    return 'You Win! Scissors beats Paper '
  } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
    compScore++
    document.getElementById('player2Score').innerHTML = compScore
    return 'You Loose! Scissors beats Rock'
  } else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
    return 'You have both chosen Scissors, Please try again'
  }
}
