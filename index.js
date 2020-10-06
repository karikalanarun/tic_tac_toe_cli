let readLine = require("readline-sync")
let chalk = require("chalk")

function newBoard() {
    return [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
}

/*
    if cell contains 0 - E
    if cell contains 1 - X
    if cell contains -1 - O
*/
function printBoard(board) {
    let i = 0;
    while (i < board.length) {

        let rowString = ""
        let j = 0;
        while (j < board[i].length) {
            if (board[i][j] === 0) {
                rowString += " " + chalk.whiteBright("E")
            } else if (board[i][j] === 1) {
                rowString += " " + chalk.yellow("X")
            } else if (board[i][j] === -1) {
                rowString += " " + chalk.blue("O")
            }
            j++;
        }
        console.log(rowString)
        i++;
    }
}


function playGame() {
    let board = newBoard()
    let playerSymbol = 1
    while (true) {
        printBoard(board)
        let row = readLine.question("give me the row :")
        let col = readLine.question("give me the col :")
        board[row][col] = playerSymbol
        if (playerSymbol === 1) {
            playerSymbol = -1
        } else {
            playerSymbol = 1
        }
    }

}

while (true) {
    let option = readLine.question(`
What will I do for you?
    give 1 --> playing game
    give 2 --> List previous games
    give 3 --> Print winning statistics
    `)


    if (option === "1") {
        playGame()
    } else {
        console.log("Invalid Option, Try Again!!!")
    }

}



