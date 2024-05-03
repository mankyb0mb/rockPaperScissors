const hands = ["ROCK", "PAPER", "SCISSORS"]
var playerScore = 0
var computerScore = 0
var ties = 0

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

function getHumanChoice() {
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

function playRound() {
    function winMsg() {
        console.log(human + " beats " + comp + ". You win!")
        playerScore++
    }
    var comp = getComputerChoice()
    var human = getHumanChoice()
    console.log("Computer choice: " + comp)
    console.log("Human choice: " + human)
    if (human == comp) {
        console.log("Tie!")
        ties++
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
        console.log(comp + " beats " + human + ". You lose!")
        computerScore++
    }
    console.log(`Player : ${playerScore}
Computer : ${computerScore}
Ties : ${ties}`)
}

function ulti() {
    console.log("AAAARG")
}

function playGame(rounds = 1) {
    for (let games = 0; games < rounds; games++) {
        playRound()
    }
}


