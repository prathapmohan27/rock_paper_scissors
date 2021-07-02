
let humanCount = 0;
let systemCount = 0;


    const value = document.querySelectorAll(".things");
    const playerScore=document.querySelector("#playerScore");
    const computerScore=document.querySelector("#computerScore");
    const finalResult=document.querySelector("#finalResult");



    function computerPlay() {
        let things = ["rock", "paper", "scissor"]
        things = things[Math.floor(Math.random() * things.length)];
        return things;
    }
    
    function playRound(playerSelection) {
        const computerSelection =computerPlay();
      
    
        if (playerSelection === computerSelection) {
            finalResult.textContent="Game tie";
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            systemCount++;
            computerScore.textContent=systemCount;
            finalResult.textContent="You Lose! Paper beats Rock";
        }
        else if (playerSelection === "rock" && computerSelection === "scissor") {
            humanCount++;
            playerScore.innerText=humanCount;
            finalResult.textContent= "You Win! Rock beats Scissor";
        }
        else if (playerSelection === "paper" && computerSelection === "scissor") {
            systemCount++;
            computerScore.textContent=systemCount;
            finalResult.textContent="You Lose! Scissor beats Paper";
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            humanCount++;
            playerScore.innerText=humanCount;
            finalResult.textContent="You Win! Paper beats Rock";
        }
        else if (playerSelection === "scissor" && computerSelection === "paper") {
            humanCount++;
            playerScore.innerText=humanCount;
            finalResult.textContent="You Win! Scissor beats Paper";
        }
    
        else {
            systemCount++;
            computerScore.textContent=systemCount;
            finalResult.textContent="You Lose! Rock beats Scissors";
        }
        
    }

value.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(humanCount>=5||systemCount>=5){
            final();
        }
        else{

        playRound(button.dataset.rps);
        }
    });
    });

    function final(){
             
    if (humanCount > systemCount) {
        finalResult.textContent="You win";
    }
    else if(humanCount<systemCount){
        finalResult.textContent="You lose";
    }
    else{
        finalResult.textContent="Game tie";
    }
    }

   
        
        
       
  

