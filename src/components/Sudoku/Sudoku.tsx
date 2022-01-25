import { useState } from 'react';
//Components
import Button, { roleType } from '../common/Button/Button';
import ControlButton from '../common/ControlButton/ControlButton';
import Message from '../common/Message/Message';
import PageWrapper from '../common/PageWrapper/PageWrapper';
import GridItem from '../GridItem/GridItem';

const Sudoku: React.FC = (): JSX.Element => {
  const [selected, setSelected] = useState('');
  const [isSolvable, setIsSolvable] = useState(true);
  const [computerOutput, setComputerOutput] = useState<boolean[] | null>(null);

  const emptyBoard: number[] = Array(81).fill(0);

  const testSudoku = [
    0, 5, 1, 3, 6, 2, 7, 0, 0, 0, 4, 0, 0, 5, 8, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0,
    2, 5, 0, 8, 0, 0, 0, 0, 9, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 5, 0, 0,
    0, 0, 8, 0, 1, 2, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 6, 0, 0, 0, 8,
    5, 3, 4, 2, 9, 0,
  ];

  const localBoard = JSON.parse(localStorage.getItem('sudoku-board') || '{}');

  const [board, setBoard] = useState<number[]>(localBoard.board || emptyBoard);

  const handleReset = () => {
    setBoard(emptyBoard);
    setIsSolvable(true);
    setComputerOutput(null);
    localStorage.removeItem('sudoku-board');
  };

  const handleTest = () => {
    setComputerOutput(null);
    setBoard(testSudoku);
  };

  const handleSolve = (board: number[]) => {
    //Convert array to two dimensions for algorithm to handle
    const twoDimensionalBoard = [];
    for (let i = 0; i < board.length; i = i + 9) {
      twoDimensionalBoard.push(board.slice(i, i + 9));
    }

    //To color the computer generated cells
    console.log(board.map((cell) => (cell !== 0 ? false : true)));
    setComputerOutput(board.map((cell) => (cell !== 0 ? false : true)));

    function solve(board: number[][]) {
      const emptySpot = nextEmptySpot(board);
      const row = emptySpot[0];
      const col = emptySpot[1];

      // there is no more empty spots
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

    setBoard(solve(twoDimensionalBoard).flat());

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
  };

  const addUserInput = (selectedIndex: number, value: number) => {
    //Needed not to change the first number on control button click
    if (!selected) return;

    const newBoard = board?.map((item: number, i: number) =>
      i === selectedIndex ? (item = value) : item,
    );

    setBoard(newBoard);
    setSelected('');
    localStorage.setItem('sudoku-board', JSON.stringify({ board: newBoard }));
  };

  return (
    <PageWrapper>
      <div className="grid-wrapper">
        {board?.map((item: number, i: number) => {
          //computerOutput[i] === true
          return (
            <GridItem
              key={i}
              id={`${i}`}
              number={item}
              selected={selected}
              setSelected={setSelected}
              computerOutput={computerOutput ? computerOutput[i] : false}
            />
          );
        })}
      </div>
      {isSolvable || (
        <Message
          msg="This Sudoku Puzzle is not solvable!"
          msgRole={roleType.ERROR}
        />
      )}

      <div className="control-btn-container">
        {Array.from(Array(10).keys()).map((number) => (
          <ControlButton
            value={number}
            key={number}
            selected={selected}
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
          label="Test"
          btnRole={roleType.WARNING}
          clickHandler={handleTest}
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
