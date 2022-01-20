//Components
import PageWrapper from '../common/PageWrapper/PageWrapper';
import Button from '../common/Button/Button';

const Subscription: React.FC = (): JSX.Element => {
  return (
    <PageWrapper>
      <h1>Subscription</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input type="text" name="name" placeholder="Enter your name..." />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" name="email" placeholder="Enter your email..." />
        </div>
        <Button label="submit" />
      </form>
    </PageWrapper>
  );
};

export default Subscription;
