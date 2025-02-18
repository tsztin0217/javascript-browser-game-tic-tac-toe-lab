//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/
const winningCombox = [
    [],
    [],
    []
]


/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');


/*-------------------------------- Functions --------------------------------*/
const render = () => {
    updateBoard();
    updateMessage();
}

const init = () => {
    board = [
        '', 'O', 'X',
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
        messageEl.innerText = 'Congratulations! You won!';
    }
}
/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", init);


