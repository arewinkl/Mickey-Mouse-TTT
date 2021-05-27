let userScore = 0;
let computerScore = 0;
//dom variables below and normal variables above//
//labeling by tag type can be useful for easy searching for bugs//
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById("score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const reset_div = document.getElementById("reset-label")

//cached the dom above so that it can be used later//
function resetScore () {
    reset_div.addEventListener('click', function() {
        scoreBoard("reset-label")
        console.log("click")
    })
}
resetScore();
function scoreBoard () {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = userScore;
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}
function convertToWord (letter) {
    if (letter === "r") return "Rock ";
    if (letter === "p") return "paper ";
    return "scissors ";
}

function win (user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = " (user)".fontsize(4).sub().fontcolor("#e2584d");
    const smallCompWord = " (comp)".fontsize(4).sub().fontcolor("#e2584d");
    result_div.innerHTML =  convertToWord(user) + smallUserWord + " beats " + convertToWord(computer) + smallCompWord;
    //!above is es5 style not es6 with `` and no need for + or "" (example below)
    //! `${(convertToWord(user))} beats ${convertToWord(computer)}. you win!`;
    //console.log(user)
    //console.log(computer)
}

function lose (user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = " (user)".fontsize(4).sub().fontcolor("#e2584d");
    const smallCompWord = " (comp)".fontsize(4).sub().fontcolor("#e2584d");
    result_div.innerHTML = convertToWord(user) + smallUserWord + " loses to " + convertToWord(computer) + smallCompWord;
    //console.log("lose")
}

function tie () {
    result_div.innerHTML = "its a tie :| try again!!";
    //console.log("tie")
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
  

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
           // console.log("user wins!!!")
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
          //  console.log("user looses :(")
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
          //  console.log("Its a Tie!!!")
            break;
    }
}

function main(){

    rock_div.addEventListener('click', function(){
        game("r");
    });


    paper_div.addEventListener('click', function(){
        game("p");
    });

    scissor_div.addEventListener('click', function(){
        game("s");
    });

}
main();
