//Components
import PageWrapper from '../common/PageWrapper/PageWrapper';
import Button from '../common/Button/Button';

const Home: React.FC = (): JSX.Element => {
  return (
    <PageWrapper>
      <div className="left">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          commodi a suscipit perspiciatis quaerat nam at aspernatur eius,
          delectus ducimus voluptates.
        </p>
        <p>Laborum dolores minima officia quam voluptate</p>
        <p>
          cupiditate totam magnam corporis suscipit, maxime, beatae quas
          temporibus repudiandae eaque dicta blanditiis quos incidunt, quis
          nihil nostrum.
        </p>
      </div>
      <div className="right">
        <Button label="Solve Sudoku" />
      </div>
    </PageWrapper>
  );
};

export default Home;
