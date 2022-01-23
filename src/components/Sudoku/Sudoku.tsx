//Components
import Button, { buttonType } from '../common/Button/Button';
import GridWrapper from '../GridWrapper/GridWrapper';
import PageWrapper from '../common/PageWrapper/PageWrapper';

const Sudoku: React.FC = (): JSX.Element => {
  return (
    <PageWrapper>
      <GridWrapper />
      <div className="btn-container">
        <Button label="Solve" btnRole={buttonType.SUCCESS} />
        <Button label="Reset" btnRole={buttonType.ERROR} />
      </div>
    </PageWrapper>
  );
};

export default Sudoku;
