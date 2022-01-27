import { useState } from 'react';
import { emptyBoard, testSudoku } from '../../assets/boards';
import useSolver from '../../hooks/useSolver';
//Components
import Button, { roleType } from '../common/Button/Button';
import ControlButton from '../common/ControlButton/ControlButton';
import Message from '../common/Message/Message';
import PageWrapper from '../common/PageWrapper/PageWrapper';
import GridItem from '../GridItem/GridItem';

const Sudoku: React.FC = (): JSX.Element => {
  const [selected, setSelected] = useState('');
  const [isSolvable, setIsSolvable] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [isSolved, setIsSolved] = useState(false);
  const [computerOutput, setComputerOutput] = useState<boolean[] | null>(null);

  const localBoard = JSON.parse(localStorage.getItem('sudoku-board') || '{}');

  const [board, setBoard] = useState<number[]>(localBoard.board || emptyBoard);

  const handleReset = () => {
    //Clear selections
    setSelected('');
    //Clear board
    setBoard(emptyBoard);
    //Remove error messages
    setIsSolvable(true);
    setIsValid(true);
    setIsSolved(false);
    //Remove solved cell colors
    setComputerOutput(null);
    //Remove board locally
    localStorage.removeItem('sudoku-board');
  };

  const handleTest = () => {
    setIsSolved(false);
    setIsValid(true);
    setComputerOutput(null);
    setBoard(testSudoku);
  };

  //Check if Sudoku is valid (valid means it has at least 17 numbers)
  const checkValidSudoku = (board: number[]) =>
    board.filter((el) => el !== 0).length >= 17 ? true : false;

  const handleSolve = (board: number[]) => {
    //check for valid sudoku, give error message
    if (!checkValidSudoku(board)) {
      setIsValid(false);
      return;
    }

    //Clear selections
    setSelected('');

    //To color the computer generated cells after puzzle is solved
    setComputerOutput(board.map((cell) => (cell !== 0 ? false : true)));
    //Set the board to the solved puzzle
    setBoard(useSolver(board, setIsSolvable));
    setIsSolved(true);
  };

  const addUserInput = (selectedIndex: number, value: number) => {
    //Needed so we don't change the first number on control button click
    if (!selected) return;

    const newBoard = board?.map((item: number, i: number) =>
      i === selectedIndex ? (item = value) : item,
    );

    setBoard(newBoard);
    //Clear selections
    setSelected('');
    //Save board locally
    localStorage.setItem('sudoku-board', JSON.stringify({ board: newBoard }));
  };

  return (
    <PageWrapper>
      <div className="grid-wrapper">
        {board?.map((item: number, i: number) => {
          return (
            <GridItem
              key={i}
              id={`${i}`}
              number={item}
              selected={selected}
              setSelected={setSelected}
              disabled={isSolved}
              computerOutput={
                computerOutput && isSolvable ? computerOutput[i] : false
              }
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
      {isValid || (
        <Message
          msg="A Sudoku Puzzle neeeds at least 17 numbers!"
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
            disabled={isSolved}
          />
        ))}
      </div>
      <div className="btn-container">
        <Button
          label="Solve"
          btnRole={roleType.SUCCESS}
          clickHandler={() => handleSolve(board)}
          disabled={isSolved}
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
