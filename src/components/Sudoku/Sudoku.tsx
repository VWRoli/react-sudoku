import { useState } from 'react';
//Components
import Button, { roleType } from '../common/Button/Button';
import PageWrapper from '../common/PageWrapper/PageWrapper';
import GridItem from '../GridItem/GridItem';

const Sudoku: React.FC = (): JSX.Element => {
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

  return (
    <PageWrapper>
      <div className="grid-wrapper">
        {board.map((rows, i) => {
          return (
            <div
              className={`grid-row ${
                i === 3 || i === 4 || i === 5
                  ? 'grid-row-pattern-reverse'
                  : 'grid-row-pattern'
              }`}
              key={i}
            >
              {rows.map((item, i) => {
                return <GridItem key={i} number={item} />;
              })}
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <Button label="Solve" btnRole={roleType.SUCCESS} />
        <Button label="Reset" btnRole={roleType.ERROR} />
      </div>
    </PageWrapper>
  );
};

export default Sudoku;
