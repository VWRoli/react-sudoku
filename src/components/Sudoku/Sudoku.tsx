//Components
import Button, { roleType } from '../common/Button/Button';
import GridWrapper from '../GridWrapper/GridWrapper';
import PageWrapper from '../common/PageWrapper/PageWrapper';

const Sudoku: React.FC = (): JSX.Element => {
  return (
    <PageWrapper>
      <GridWrapper />
      <div className="btn-container">
        <Button label="Solve" btnRole={roleType.SUCCESS} />
        <Button label="Reset" btnRole={roleType.ERROR} />
      </div>
    </PageWrapper>
  );
};

export default Sudoku;
