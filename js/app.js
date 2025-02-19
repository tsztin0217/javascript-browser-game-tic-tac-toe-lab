//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const boardEl = document.querySelector('.board')
const resetBtnEl = document.querySelector('#reset');
/*-------------------------------- Functions --------------------------------*/
const render = () => {
    updateBoard();
    updateMessage();
}

const init = () => {
    board = [
        '', '', '',
        '', '', '', 
        '', '', '']
    turn = 'X';
    winner = false;
    tie = false;

    render();
}

const updateBoard = () => {
    board.forEach((square, index) => {
        squareEls[index].innerText = square;
    })
    // alternative:
    // for (let i =0; i<board.length; i++) {
    //     squareEls[i].textContent = board[i];
    // }
    
}

const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.innerText = `It's now ${turn}'s turn!`;
    } else if (winner === false && tie === true) {
        messageEl.innerText = 'You are tied!';
    } else {
        messageEl.innerText = `Congratulations! ${turn} won!`;
    }
}


const handleClick = (event) => {
    // console.dir(event.target.id) confirming that these are indexes
    // console.dir(event.target);
    const squareIndex = event.target.id;
    if (event.target.className !== 'sqr' || board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner === true) {
        return;
    }

    placePiece(squareIndex);
    checkForWinner();
    // console.log(winner);
    checkForTie();
    switchPlayerTurn();
    render();

}

const placePiece = (index) => {
    board[index] = turn;
    // console.log(board) making sure that each click did add X into the array
}


const checkForWinner = () => {
    for (let combo of winningCombos) {
        if (board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = true; // Set the winner to the current player's turn
            return; // Exit once we find a winner
        }
    }
}


const checkForTie = () => {
    if (winner === true ) {
        return;
    }

    if (board.includes('')) {
        tie = false;
    } else {
        tie = true;
    }
    console.log(tie);
}

const switchPlayerTurn = () => {
    if (winner === true) {
        return;
    } else if (winner === false) {
        if (turn === 'X') {
            turn = 'O';
        } else if (turn === 'O') {
            turn = 'X';
        }
    }
    console.log(turn);
}
/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", init);
boardEl.addEventListener('click', handleClick); // for bubble event
resetBtnEl.addEventListener('click', init);

