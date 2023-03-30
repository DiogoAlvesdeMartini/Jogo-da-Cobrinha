const cells = document.querySelectorAll('[data-cell]');
const game = document.querySelector('.game');
const status = document.createElement('div');
status.classList.add('status');
game.appendChild(status);

let currentPlayer = 'X';
let isGameOver = false;
let winner = null;

cells.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
  if (isGameOver) return;
  const cell = e.target;
  cell.textContent = currentPlayer;
  checkForWin();
  checkForDraw();
  switchPlayer();
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `${currentPlayer}'s turn`;
}

function checkForWin() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    const cellA = cells[a];
    const cellB = cells[b];
    const cellC = cells[c];
    if (cellA.textContent === '' || cellB.textContent === '' || cellC.textContent === '') continue;
    if (cellA.textContent === cellB.textContent && cellB.textContent === cellC.textContent) {
      isGameOver = true;
      winner = currentPlayer;
      status.textContent = `${winner} wins!`;
      break;
    }
  }
}

function checkForDraw() {
  if (Array.from(cells).every(cell => cell.textContent !== '') && !isGameOver) {
    isGameOver = true;
    status.textContent = 'It\'s a draw!';
  }
}
