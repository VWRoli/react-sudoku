//Components
import PageWrapper from '../common/PageWrapper/PageWrapper';
import Button, { buttonType } from '../common/Button/Button';

const Subscription: React.FC = (): JSX.Element => {
  return (
    <PageWrapper>
      <form>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="difficulty"></label>
          <select name="difficulty" id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <Button label="Submit" btnRole={buttonType.SUCCESS} />
      </form>
    </PageWrapper>
  );
};

export default Subscription;
