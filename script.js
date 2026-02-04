function getComputerChoice(){
    let random= Math.floor(Math.random()*3);
   
    let computerChoice= '';

    if (random === 0){
        computerChoice= "rock";
    }else if (random===1){
        computerChoice= "paper";
    }else{
        computerChoice= "scissors";
    }

    return computerChoice;
}



// function getHumanChoice(){
//     let askHuman= prompt("rock, paper or scissors?");

//     let HumanChoice='';
//     if (askHuman.toLowerCase()=== "rock"){
//         HumanChoice= "rock";
//     }else if(askHuman.toLowerCase()=== "paper"){
//         HumanChoice= "paper";
//     }else if (askHuman.toLowerCase()=== "scissors"){
//         HumanChoice= "scissors";
//     }else{
//         alert("Please enter only either rock, paper or scissors.");
//     }

//     return HumanChoice;
// }




function playGame(){
    let humanScore= 0;
    let computerScore= 0;

    let display = document.querySelector(".result");
    let display2 = document.querySelector(".result2");

    function playRound(HumanChoice,computerChoice){
        if(HumanChoice === "rock" && computerChoice === "paper"){
            display.textContent = "You Lose! Paper beats Rock.";
            computerScore = computerScore + 1;
            display2.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        }else if(HumanChoice === "rock" && computerChoice === "rock"){  
            display.textContent = "Tie.";
            display2.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        }else if (HumanChoice === "rock" && computerChoice === "scissors"){
            display.textContent = "You Won! Rock beats scissors.";
            humanScore = humanScore + 1;
            display2.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        }else if (HumanChoice === "paper" && computerChoice === "paper"){
            display.textContent = "Tie.";
            display2.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        }else if (HumanChoice === "paper" && computerChoice === "scissors"){
            display.textContent = "You Lose! Scissors beats paper.";
            computerScore = computerScore + 1;
            display2.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        }else if (HumanChoice === "paper" && computerChoice === "rock"){
            display.textContent = "You Won! Paper beats rock.";
            humanScore = humanScore + 1;
            display2.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        }else if (HumanChoice === "scissors" && computerChoice === "scissors"){
            display.textContent = "Tie.";
            display2.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        }else if (HumanChoice === "scissors" && computerChoice === "paper"){
            display.textContent = "You Won! Scissors beats paper."
            humanScore = humanScore + 1;
            display2.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        }else if (HumanChoice === "scissors" && computerChoice === "rock"){
            display.textContent = "You Lose! Rock beats scissors."
            computerScore = computerScore + 1;
            display2.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        }else {
            console.log("Please input according to choices provided.");
        }

        
    }
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();
    // playRound(humanSelection,computerSelection);
    
    // const humanSelection2 = getHumanChoice();
    // const computerSelection2 = getComputerChoice();
    // playRound(humanSelection2,computerSelection2);

    // const humanSelection3 = getHumanChoice();
    // const computerSelection3 = getComputerChoice();
    // playRound(humanSelection3,computerSelection3);

    // const humanSelection4 = getHumanChoice();
    // const computerSelection4 = getComputerChoice();
    // playRound(humanSelection4,computerSelection4);

    // const humanSelection5 = getHumanChoice();
    // const computerSelection5 = getComputerChoice();
    // playRound(humanSelection5,computerSelection5);

    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");
    let final = document.querySelector(".final");

    rock.addEventListener('click', () => {
        playRound("rock",getComputerChoice());
    }); 

    paper.addEventListener('click', () => {
        playRound("paper",getComputerChoice());
    });

    scissors.addEventListener('click', () => {
        playRound("scissors",getComputerChoice());
    });

    if(humanScore == 5){

        
    }

}

playGame();






