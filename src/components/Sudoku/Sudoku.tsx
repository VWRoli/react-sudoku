import { useState } from 'react';
//Components
import Button, { roleType } from '../common/Button/Button';
import ControlButton from '../common/ControlButton/ControlButton';
import PageWrapper from '../common/PageWrapper/PageWrapper';
import GridItem from '../GridItem/GridItem';

const Sudoku: React.FC = (): JSX.Element => {
  //const [userValue, setUserValue] = useState<null | number>(null);
  const [selected, setSelected] = useState('');
  //const [isSolved, setIsSolved] = useState(false);

  const [board, setBoard] = useState([
    0, 5, 1, 3, 6, 2, 7, 0, 0, 0, 4, 0, 0, 5, 8, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0,
    2, 5, 0, 8, 0, 0, 0, 0, 9, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 5, 0, 0,
    0, 0, 8, 0, 1, 2, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 6, 0, 0, 0, 8,
    5, 3, 4, 2, 9, 0,
  ]);

  const handleReset = () => {
    setBoard(Array(81).fill(0));
  };

  const handleSolve = (board: number[][]) => {
    //
  };

  const addUserInput = (selectedIndex: number, value: number) => {
    //todo find better way???
    const newBoard = board.map((item, i) =>
      i === selectedIndex ? (item = value) : item,
    );
    setBoard(newBoard);
  };

  return (
    <PageWrapper>
      <div className="grid-wrapper">
        {board.map((item, i) => (
          <GridItem
            key={i}
            id={`${i}`}
            number={item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <div className="control-btn-container">
        {Array.from(Array(9).keys()).map((number) => (
          <ControlButton
            value={number + 1}
            key={number}
            selected={selected}
            addUserInput={addUserInput}
          />
        ))}
        <button onClick={() => addUserInput(0, 9)}>type</button>
      </div>
      <div className="btn-container">
        <Button
          label="Solve"
          btnRole={roleType.SUCCESS}
          //clickHandler={() => handleSolve(board)}
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
