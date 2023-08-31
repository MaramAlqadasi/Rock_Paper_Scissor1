function computerChoice(){
    const choice=["Rock","Paper","scissor"];
    let randomChoice=Math.floor(Math.random()*choice.length);
    return choice[randomChoice];
}
console.log(computerChoice());