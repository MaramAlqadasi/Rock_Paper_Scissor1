function computerChoice(){
    const choice=["Rock","Paper","Scissors"];
    let randomChoice=Math.floor(Math.random()*choice.length);
    return choice[randomChoice];
}
//console.log(computerChoice());
function playRound(computerSelection,playerSelection){
    let playerScore=0;
    let computerScore=0;
    if(computerSelection===playerSelection){
        console.log ("it is a tie" + " "+`Computer :${computerSelection}+ " "+ You: ${playerSelection}`);
        console.log(`Computer Score : ${computerScore} + "  " + Your Score : ${playerScore}`);
    }
    else if(computerSelection==="Rock"){
        if(playerSelection==="Paper"){
            playerScore+=1;
            console.log ("You have a point " + " "+`Computer :${computerSelection}+ " "+ You: ${playerSelection}`);
            console.log(`Computer Score : ${computerScore} + "  " + Your Score : ${playerScore}`);

        }
        else{
            computerScore+=1;
            console.log ("You have a point " + " "+`Computer :${computerSelection}+ " "+ You: ${playerSelection}`);
            console.log(`Computer Score : ${computerScore} + "  " + Your Score : ${playerScore}`);

        }
    }
    else if (computerSelection==="Paper"){
        if(playerSelection==="Scissors"){
            playerScore+=1;
            console.log ("You have a point " + " "+`Computer :${computerSelection}+ " "+ You: ${playerSelection}`);
            console.log(`Computer Score : ${computerScore} + "  " + Your Score : ${playerScore}`);

        }
        else{
            computerScore+=1;
            console.log ("You have a point " + " "+`Computer :${computerSelection}+ " "+ You: ${playerSelection}`);
            console.log(`Computer Score : ${computerScore} + "  " + Your Score : ${playerScore}`);

        }

    }
    else if (computerSelection==="Scissors"){
        if(playerSelection==="Rock"){
            playerScore+=1;
            console.log ("You have a point " + " "+`Computer :${computerSelection}+ " "+ You: ${playerSelection}`);
            console.log(`Computer Score : ${computerScore} + "  " + Your Score : ${playerScore}`);

        }
        else{
            computerScore+=1;
            console.log ("You have a point " + " "+`Computer :${computerSelection}+ " "+ You: ${playerSelection}`);
            console.log(`Computer Score : ${computerScore} + "  " + Your Score : ${playerScore}`);

        }
        
    }
  

}
playRound(computerChoice(),"Rock");