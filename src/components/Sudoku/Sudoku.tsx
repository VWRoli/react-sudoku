//Components
import Button from '../common/Button/Button';
import GridWrapper from '../GridWrapper/GridWrapper';
import PageWrapper from '../common/PageWrapper/PageWrapper';

const Sudoku: React.FC = (): JSX.Element => {
  return (
    <PageWrapper>
      <GridWrapper />
      <Button label="Solve" />
      <Button label="Reset" />
    </PageWrapper>
  );
};

export default Sudoku;
