const useSolver = (
  board: number[],
  setIsSolvable: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  //Convert array to two dimensions for algorithm to handle
  const twoDimensionalBoard = [];
  for (let i = 0; i < board.length; i = i + 9) {
    twoDimensionalBoard.push(board.slice(i, i + 9));
  }

  function solve(board: number[][]) {
    const emptySpot = nextEmptySpot(board);
    const row = emptySpot[0];
    const col = emptySpot[1];

    // Check if the board is solvable
    if (row === -1) {
      setIsSolvable(true);
      return board;
    } else {
      setIsSolvable(false);
    }

    for (let num = 1; num <= 9; num++) {
      if (checkValue(board, row, col, num)) {
        board[row][col] = num;
        solve(board);
      }
    }

    if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;
    return board;
  }

  function checkValue(
    board: number[][],
    row: number,
    column: number,
    value: number,
  ) {
    if (
      checkRow(board, row, value) &&
      checkColumn(board, column, value) &&
      checkSquare(board, row, column, value)
    ) {
      return true;
    }

    return false;
  }

  function checkSquare(
    board: number[][],
    row: number,
    column: number,
    value: number,
  ) {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(column / 3) * 3;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[boxRow + r][boxCol + c] === value) return false;
      }
    }

    return true;
  }

  function checkColumn(board: number[][], column: number, value: number) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][column] === value) {
        return false;
      }
    }

    return true;
  }

  function checkRow(board: number[][], row: number, value: number) {
    for (let i = 0; i < board[row].length; i++) {
      if (board[row][i] === value) {
        return false;
      }
    }

    return true;
  }

  function nextEmptySpot(board: number[][]) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) return [i, j];
      }
    }
    return [-1, -1];
  }
  return solve(twoDimensionalBoard).flat();
};

export default useSolver;
