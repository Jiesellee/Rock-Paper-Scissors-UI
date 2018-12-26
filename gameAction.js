
        var plyslec = 0;
        var compsle = 0;
        var counter = 0;
   
      

          rock.addEventListener('click', function(){
            const computerSelection = computerPlay();
            const result = playRound('rock',computerSelection);
            document.getElementById('gamePlay').innerHTML =  'Player selection is Rock'+ "<br />" 
            +'PC selection is '+ computerSelection;
            document.getElementById('roundWinner').innerHTML = result;
          });

           
           paper.addEventListener('click', function(){ 
             const computerSelection = computerPlay();
             const result =  playRound('paper',computerSelection);
             document.getElementById('gamePlay').innerHTML =  'Player selection is Paper'+ "<br />" 
             +'PC selection is '+ computerSelection;
             document.getElementById("roundWinner").innerHTML = result;
           });

         
          scissors.addEventListener('click', function(){
             const computerSelection = computerPlay();
             const result =  playRound('scissors',computerSelection);
             document.getElementById('gamePlay').innerHTML =  'Player selection is Scissors'+ "<br />" 
             +'PC selection is '+ computerSelection;
             document.getElementById("roundWinner").innerHTML = result;
          });
    
        function computerPlay() {
         /*   num = Math.floor(Math.random() * 3);
            switch (num) {
                case 0:
                    return "Rock";
                case 1:
                    return "Paper";
                case 2:
                    return "Scissors";
            }*/
  num = Math.floor(Math.random() * 3);
            return {
                0: "Rock",
                1: "Paper",
                2: "Scissor"

            }[num]

        }

        function playRound(playerSelection, computerSelection) {
   
          //Rock
            if (playerSelection == 'rock' && computerSelection == 'Scissors') {
                plyslec++;

                return "You Win! Rock beats Scissors";
            }
            
            else if (playerSelection == 'rock' && computerSelection == "Paper") {
               compsle++;
                return "You Loose! Rock beats Paper";
            }
            
             else if (playerSelection == 'rock' && computerSelection == 'Rock') {
                return "You have both chosen Rock, Please try again ";
            }

            //Paper
            else if (playerSelection == 'paper' && computerSelection == 'Rock') {
                plyslec++;
                return "You Win! Paper beats Rock";
            }

            else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
                  compsle++;
                return "You Loose! Scissors beats Paper";
            }

            else if (playerSelection == 'paper' && computerSelection == 'Paper') {
                return "You have both chosen Paper, Please try again";
            }

            //Scissors    
            else if (playerSelection == "scissors" && computerSelection == "Paper") {
                plyslec++;
                return "You Win! Scissors beats Paper ";
            }
        
             else if (playerSelection == "scissors" && computerSelection == "Rock") {
                compsle++;
                return "You Loose! Scissors beats Rock";
            }

            else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
                 return "You have both chosen Scissors, Please try again";
            }
 
        }


        /*playRound("rock",computerSelection));
            while (counter <= 4) {
                var playerSelection = prompt("Please enter your selection rock, paper or scissors")
                const computerSelection = computerPlay()
                console.log(playRound(playerSelection, computerSelection))
                counter++;
            }

            if (plyslec==compsle){
                 console.log("Its a tie. Please play again")
            }
            else if (plyslec > compsle) {
                console.log("Congratulations, you are the winner after 5 rounds")
            }
            else{
                console.log("Bad luck, the PC has won after after 5 rounds. ")
            }
            */