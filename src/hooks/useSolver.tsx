const useSolver = (
  board: number[],
  setIsSolvable: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  //create copy of the array so we don't modify the original
  const newBoard = [...board];

  // Get position coordinates based on index
  const getPosition = (index: number) => [Math.floor(index / 9), index % 9];

  // Get index based on position coordinates
  const getIndex = (position: number[]) => position[0] * 9 + position[1];

  //Find next empty cell
  const nextEmptyCell = (board: number[]) => board.findIndex((el) => el === 0);

  //Take a board and an index number and return a row in an array
  const getRow = (board: number[], index: number) => {
    //index of first in row
    const firstInRow = Math.floor(index / 9) * 9 - 1;
    //get last in row
    const lastInRow = firstInRow + 10;
    //return an array of that row
    return board.filter((_, i) => i > firstInRow && i < lastInRow);
  };

  //Take a board and an index number and return a column in an array
  const getColumn = (board: number[], index: number) => {
    //index of first in Column
    const firstInColumn = Math.floor(index % 9);
    //return an array of that Column
    return board.filter((_, i) => i % 9 === firstInColumn);
  };

  //Take a board and an index number and return a square in an array
  const getSquare = (board: number[], index: number) => {
    const boxRow = Math.floor(getPosition(index)[0] / 3) * 3;
    const boxCol = Math.floor(getPosition(index)[1] / 3) * 3;
    const square: number[] = [];

    for (let r = boxRow; r < boxRow + 3; ++r) {
      for (let c = boxCol; c < boxCol + 3; ++c) {
        square.push(board[getIndex([r, c])]);
      }
    }
    return square;
  };

  //Check if the row or col or square array is invalid
  const checkIfInvalid = (arr: number[], value: number) =>
    arr.some((el) => el === value);

  //Solving function
  const solve = (board: number[]) => {
    const emptySpot = nextEmptyCell(board);

    // Check if the board is solvable
    if (emptySpot === -1) {
      setIsSolvable(true);
      return board;
    } else {
      setIsSolvable(false);
    }

    //Go through numbers and check for validity
    for (let num = 1; num <= 9; num++) {
      if (
        !checkIfInvalid(
          [
            ...getRow(board, emptySpot),
            ...getColumn(board, emptySpot),
            ...getSquare(board, emptySpot),
          ],
          num,
        )
      ) {
        board[emptySpot] = num;
        solve(board);
      }
    }
    if (nextEmptyCell(board) !== -1) board[emptySpot] = 0;

    return board;
  };
  return solve(newBoard);
};

export default useSolver;
