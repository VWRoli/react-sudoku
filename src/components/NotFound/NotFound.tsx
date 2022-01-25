//Components
import Button, { roleType } from '../common/Button/Button';
import PageWrapper from '../common/PageWrapper/PageWrapper';

const NotFound = () => {
  return (
    <PageWrapper>
      <h2>404</h2>
      <p>Not Found</p>
      <Button label="Back home" btnRole={roleType.WARNING} route="/" />
    </PageWrapper>
  );
};

export default NotFound;
