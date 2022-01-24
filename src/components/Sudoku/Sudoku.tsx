import { useEffect, useState } from 'react';
//Components
import Button, { roleType } from '../common/Button/Button';
import ControlButton from '../common/ControlButton/ControlButton';
import PageWrapper from '../common/PageWrapper/PageWrapper';
import GridItem from '../GridItem/GridItem';

const Sudoku: React.FC = (): JSX.Element => {
  const [userValue, setUserValue] = useState<null | number>(null);
  const [userSelected, setUserSelected] = useState('');
  const [isSolved, setIsSolved] = useState(false);

  const [board, setBoard] = useState([
    [0, 5, 1, 3, 6, 2, 7, 0, 0],
    [0, 4, 0, 0, 5, 8, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 2, 5],
    [0, 8, 0, 0, 0, 0, 9, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 5, 0, 0, 0, 0, 8, 0],
    [1, 2, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 2, 8, 0, 0, 6, 0],
    [0, 0, 8, 5, 3, 4, 2, 9, 0],
  ]);

  const handleReset = () => {
    setBoard(Array(9).fill(Array(9).fill(0)));
  };

  const handleSolve = (board: number[][]) => {
    const emptySpot = nextEmptySpot(board);
    const row = emptySpot[0];
    const col = emptySpot[1];

    // there is no more empty spots
    if (row === -1) {
      setIsSolved(true);
      return board;
    }

    for (let num = 1; num <= 9; num++) {
      if (checkValue(board, row, col, num)) {
        board[row][col] = num;
        handleSolve(board);
      }
    }

    if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;

    setBoard(board);

    function checkValue(
      board: number[][],
      row: number,
      column: number,
      value: number,
    ) {
      //console.log(checkColumn(board, column, value));
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
      //console.log(value);
      // return board.some((row) => row.some((item) => item !== value));
      for (let i = 0; i < board.length; i++) {
        if (board[i][column] === value) {
          return false;
        }
      }

      return true;
    }

    function checkRow(board: number[][], row: number, value: number) {
      //return board.some((row) => row.some((item) => item === value));

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
  };

  useEffect(() => {
    setBoard(board);
  }, [isSolved]);

  const addUserInput = (selectedIndex: number, value: number) => {
    //Get row number
    const rowNr = Math.floor(selectedIndex / 9);
    //get index of number in that row
    const rowIndex = Math.floor(((selectedIndex / 9) % 1) * 10);

    //Replace number in row to user selected number
    const newRow = board[rowNr].map((nr, i) =>
      i === rowIndex ? (nr = value) : nr,
    );

    //Replace row in the board
    const newBoard = board.map((row, i) =>
      i === rowNr ? (row = newRow) : row,
    );
    setBoard(newBoard);
  };
  console.log(userSelected);
  console.log(userValue);

  return (
    <PageWrapper>
      <div className="grid-wrapper">
        {board.map((rows, rowIndex) => {
          return (
            <div
              className={`grid-row ${
                rowIndex === 3 || rowIndex === 4 || rowIndex === 5
                  ? 'grid-row-pattern-reverse'
                  : 'grid-row-pattern'
              }`}
              key={rowIndex}
            >
              {rows.map((item, i) => {
                return (
                  <GridItem
                    key={i}
                    id={`${i}`}
                    number={item}
                    setUserSelected={setUserSelected}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="control-btn-container">
        {Array.from(Array(9).keys()).map((number) => (
          <ControlButton
            value={number + 1}
            key={number}
            setUserValue={setUserValue}
            userSelected={userSelected}
            addUserInput={addUserInput}
          />
        ))}
      </div>
      <div className="btn-container">
        <Button
          label="Solve"
          btnRole={roleType.SUCCESS}
          clickHandler={() => handleSolve(board)}
        />
        <Button
          label="Reset"
          btnRole={roleType.ERROR}
          clickHandler={handleReset}
        />
      </div>
    </PageWrapper>
  );
};

export default Sudoku;
