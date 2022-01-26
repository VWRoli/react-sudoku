//Components
import PageWrapper from '../common/PageWrapper/PageWrapper';
import Button, { roleType } from '../common/Button/Button';

const Home: React.FC = (): JSX.Element => {
  return (
    <PageWrapper>
      <section className="home">
        <div className="left">
          <p>
            This is a Sudoku solver application, which is optimized for both
            mobile and desktop devices.
          </p>
          <p>
            If you are stuck with a puzzle just type in your numbers, the
            application can solve it in seconds. Or if the puzzle is not
            solvable you get an error message.
          </p>
          <h3>It can solve any Sudoku Puzzle!</h3>
          <p>Laborum dolores minima officia quam voluptate</p>
        </div>
        <div className="right">
          <Button
            label="Solve Sudoku"
            btnRole={roleType.WARNING}
            route="/sudoku"
          />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
