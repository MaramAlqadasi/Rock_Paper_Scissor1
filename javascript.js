const playAgainbutton=document.querySelector(".playAgain");
function computerChoice(){
    const choice=["Rock","Paper","Scissors"];
    let randomChoice=Math.floor(Math.random()*choice.length);
    const current_selection =document.querySelector(`.${choice[randomChoice]}`);
    current_selection.style="scale:1.1;background-color:rgb(190 46 46);"
    setTimeout(() => {
        current_selection.style="background-color:white;"
    }, 1000);
    
    return choice[randomChoice];
}
//console.log(computerChoice());
 function playAgain(){
    console.log("kkkkkkkkkkk");
    location.reload();

 }

 
function showResult(massage,computerSelection,playerSelection,computerScore,playerScore){
    const computerScoreElement=document.querySelector(".computer");
    const playerScoreElement=document.querySelector(".player");
    const resultMassage=document.querySelector(".resultMassage");
    
   
    if(computerScore==5){
        massage+=" \n"+"  You Wins";
        playAgainbutton.style="display:block";
        mainContainer.style="display:none";
        
    }
    else if(playerScore==5){
        massage+=" \n "+"Computer Wins";
        playAgainbutton.style="display:block";
        mainContainer.style="display:none";
        
    }
    computerScoreElement.textContent=computerScore;
    playerScoreElement.textContent=playerScore;
    resultMassage.textContent=massage;
   
  

    // console.log (`${massage}\nComputer :${computerSelection}  You: ${playerSelection}\n`);
    // console.log(`Computer Score : ${computerScore}\nYour Score : ${playerScore}`);

}
function playRound(computerSelection,playerSelection){
   // console.log (`Computer :${computerSelection}  You: ${playerSelection}\n`);
    
    if(computerSelection===playerSelection){
        showResult("it is a tie",computerSelection,playerSelection,computerScore,playerScore);
    }
    else if(computerSelection==="Rock"){
        if(playerSelection==="Paper"){
            playerScore+=1;
            showResult("You have a point " ,computerSelection,playerSelection,computerScore,playerScore);

        }
        else{
            computerScore+=1;
            showResult("Computer have a point " ,computerSelection,playerSelection,computerScore,playerScore);

        }
    }
    else if (computerSelection==="Paper"){
        if(playerSelection==="Scissors"){
            playerScore+=1;
            showResult("You have a point " ,computerSelection,playerSelection,computerScore,playerScore);
        }
        else{
            computerScore+=1;
            showResult("Computer have a point " ,computerSelection,playerSelection,computerScore,playerScore);

        }

    }
    else if (computerSelection==="Scissors"){
        if(playerSelection==="Rock"){
            playerScore+=1;
            // console.log (`You have a point \nComputer :${computerSelection}  You: ${playerSelection}`);
            // console.log(`Computer Score : ${computerScore}    Your Score : ${playerScore}`);
            showResult("You have a point " ,computerSelection,playerSelection,computerScore,playerScore);

        }
        else{
            computerScore+=1;
            // console.log (`You have a point \nComputer : ${computerSelection}   You: ${playerSelection}`);
            // console.log(`Computer Score : ${computerScore}    Your Score : ${playerScore}`);
            showResult("Computer have a point " ,computerSelection,playerSelection,computerScore,playerScore);
            

        }
        
    }
  

}



let playerScore=0;
let computerScore=0;
const playerselections=document.querySelectorAll(".selection");
const mainContainer= document.querySelector(".container");
playAgainbutton.addEventListener("click",playAgain);
// console.log(playerselections);
playerselections.forEach(selection => { selection.addEventListener("click", function (e){
    
    if(selection.classList.contains ("paper"))
    {
        //console.log("paper");
        playRound(computerChoice(),"Paper");
       return "Paper";}
   else if(selection.classList.contains("rock"))
    {
        //console.log("Rock");
        playRound(computerChoice(),"Rock");
        return "Rock";}
   else if(selection.classList.contains("scissors"))
   {
   // console.log("Scissors");
    playRound(computerChoice(),"Scissors");
    return "Scissors"}
});
    
});
//playerselections.forEach(selction) => Selction.addEventListener("onclick",)
    // if(selction.classList==="Paper")
    //  {
    //     return "Paper";}
    // else if(selction.classList==="Rock")
    //  {return "Rock";}
    // else if(selction.classList==="scissors")
    // {return "Paper"}
//    console.log(selction);
// let playerSelection=prompt("Enter your choice please( Rock,Scissors,or Paper): ");
// const computerSelection=computerChoice();

// playRound(computerSelection,playerSelection);


//game();
