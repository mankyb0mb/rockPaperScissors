const hands = ["ROCK", "PAPER", "SCISSORS"]
var playerScore = 0
var computerScore = 0
var ties = 0

const domScore = document.querySelector("p.playerScore")
const domCpu = document.querySelector("p.cpuScore")
const domTie = document.querySelector("p.ties")
const domLog = document.querySelector("p.log")
const domWin = document.querySelector("p.winner")

domScoreHeld = domScore.innerHTML
domScore.innerHTML = domScoreHeld + playerScore

domCpuHeld = domCpu.innerHTML
domCpu.innerHTML = domCpuHeld + computerScore

domTieHeld = domTie.innerHTML
domTie.innerHTML = domTieHeld + ties


const btnRock = document.querySelector("button.rock")
const btnPaper = document.querySelector("button.paper")
const btnScissors = document.querySelector("button.scissors")
const btnReset = document.querySelector("button.reset")

choiceiguess = ""

function resetter(){
    playerScore = 0
    computerScore = 0
    ties = 0
    domScore.innerHTML = domScoreHeld + playerScore 
    domCpu.innerHTML = domCpuHeld + computerScore
    domTie.innerHTML = domTieHeld + ties
    domLog.innerHTML = ""
    domWin.innerHTML = ""
}

const neededWins = 8

btnRock.addEventListener("click", function(){
    choiceiguess = btnRock.textContent.toUpperCase()
    console.log("Rock Pressed")
    if (playerScore == neededWins || computerScore == neededWins) {
        resetter()
    }
    else if (playerScore != neededWins || computerScore != neededWins) {
        playRound()
        if (playerScore == neededWins) {
            domWin.innerHTML = "YOU WON!!!!"
        }
        else if (computerScore == 5) {
            domWin.innerHTML = "YOU LOST!!!!"
        }
    }
})
btnPaper.addEventListener("click", function(){
    choiceiguess = btnPaper.textContent.toUpperCase()
    console.log("Paper Pressed")
    if (playerScore == 5 || computerScore == 5) {
        resetter()
    }
    else if (playerScore != 5 || computerScore != 5) {
        playRound()
        if (playerScore == 5) {
            domWin.innerHTML = "YOU WON!!!!"
        }
        else if (computerScore == 5) {
            domWin.innerHTML = "YOU LOST!!!!"
        }
    }
})
btnScissors.addEventListener("click", function(){
    choiceiguess = btnScissors.textContent.toUpperCase()
    console.log("Scissors Pressed")
    if (playerScore == 5 || computerScore == 5) {
        resetter()
    }
    else if (playerScore != 5 || computerScore != 5) {
        playRound()
        if (playerScore == 5) {
            domWin.innerHTML = "YOU WON!!!!"
        }
        else if (computerScore == 5) {
            domWin.innerHTML = "YOU LOST!!!!"
        }
    }
})
btnReset.addEventListener("click", function(){resetter()})



function getComputerChoice() {
    var choice = (Math.random() * 10)
    if (choice < 4) {
        choice = hands[0]
    }
    else if (choice < 7) {
        choice = hands[1]
    }
    else {
        choice = hands[2]
    }
    return choice
}

function getHumanChoice(button = true) {
    if (!button) {
        var bruh
        while (bruh != true) {
            var userChoice = prompt("Rock, Paper, or Scissors?")
            userChoice = userChoice.toUpperCase()
            for (let i = 0; i < hands.length; i++) {
                if (userChoice == hands[i]) {
                    bruh = true
                }
            }
            if (bruh != true) {
            console.log("Invalid Hand. Try Again!")
            }
        }
        return userChoice
    }
    else {
        return choiceiguess
    }

}

// plays the round
function playRound(button = false) {
    function winMsg() {
        console.log(human + " beats " + comp + ". You win!")
        domLog.innerHTML = human + "{YOU}" + " beats " + comp + "{COMP}" + ". You win!"
        playerScore++
        domScore.innerHTML = domScoreHeld + playerScore
    }
    function loseMsg() {
        console.log(comp + " beats " + human + ". You lose!")
        domLog.innerHTML = comp + "{COMP}" + " beats " + human + "{YOU}" + ". You lose!"
        computerScore++
        domCpu.innerHTML = domCpuHeld + computerScore
    }
    var comp = getComputerChoice()
    var human = getHumanChoice()


    console.log("Computer choice: " + comp)
    console.log("Human choice: " + human)
    if (human == comp) {
        console.log("Tie!")
        domLog.innerHTML = "Tie!"
        ties++
        domTie.innerHTML = domTieHeld + ties
    }
    else if ((human == hands[0]) && (comp == hands[2])) {
        winMsg()
    }
    else if ((human == hands[1]) && (comp == hands[0])) {
        winMsg()
    }
    else if ((human == hands[2]) && (comp == hands[1])) {
        winMsg()
    }
    else {
        loseMsg()
    }
    console.log(`Player : ${playerScore}
Computer : ${computerScore}
Ties : ${ties}`)
}

// main function, playgame(rounds), automatically set to 1 if () empty
function playGame(rounds = 1) {
    for (let games = 0; games < rounds; games++) {
        playRound()
    }
}



