const game = () =>{
    pScore = 0;
    cScore = 0;

    //start game button
    const startGame = () =>{
        const playBtn = document.querySelector(".start-game button");
        const introScreen = document.querySelector(".start-game");
        const gameScreen = document.querySelector(".game");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            gameScreen.classList.add("fadeIn");
        });
    };

    //play game
    const playGame = () =>{
        const choices = document.querySelectorAll(".choices button");
        const playerHand = document.querySelector(".player-hand img");
        const computerHand = document.querySelector(".computer-hand img");
        const hands = document.querySelectorAll(".hand");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
              this.style.animation = "";
            });
          });

        //computer play
        const computerOptions = ["rock", "paper", "scissors"];

        choices.forEach(choice=>{
            choice.addEventListener('click', function(){

                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(()=>{
                    //here we call compareHands
                compareHands(this.textContent, computerChoice);

                //update hand images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)

                //Animation
        playerHand.style.animation = "playerShake 2s ease";
        computerHand.style.animation = "computerShake 2s ease";
            });
        });

    
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
      };

    const compareHands = (playerChoice, computerChoice)=>{
        const winner = document.querySelector('.winner');

        //checking for a tie
        if(playerChoice === computerChoice){
            winner.innerText = 'it is a tie!';
            return;
        }

        // checking for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = 'you win!';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }

        //checking for paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "computer wins!";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'you win!';
                pScore++;
                updateScore();
                return;
            }
        }

        //checking for scissor
        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                winner.textContent = 'you win!';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }
    };

    

    
    //Execute all functions
    startGame();
    playGame();
};


//start game function
game();