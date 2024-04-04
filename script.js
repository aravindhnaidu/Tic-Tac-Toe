
    const cells = document.querySelectorAll('.cell');
    const winnerPopup = document.getElementById('winner-popup');
    const winnerText = document.getElementById('winner-text');
    let currentPlayer = 'X';
    let gameActive = true;
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    function checkWinner() {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
            }
        }

        if (!gameBoard.includes('')) return 'T'; // Tie

        return null;
    }

    function placeMark(cellIndex) {
        if (!gameActive || gameBoard[cellIndex] !== '') return;

        gameBoard[cellIndex] = currentPlayer;
        cells[cellIndex].innerText = currentPlayer;

        const winner = checkWinner();

        if (winner) {
            gameActive = false;
            if (winner === 'T') {
                winnerText.innerText = "It's a Tie!";
            } else {
                winnerText.innerText = `Player ${winner} wins!`;
            }
            winnerPopup.style.display = 'block';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function restartGame() {
        gameActive = true;
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        winnerPopup.style.display = 'none';
        cells.forEach(cell => cell.innerText = '');
    }
