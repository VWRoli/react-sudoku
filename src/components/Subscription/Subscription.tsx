import { useState } from 'react';
//Components
import PageWrapper from '../common/PageWrapper/PageWrapper';
import Button, { roleType } from '../common/Button/Button';
import Message from '../common/Message/Message';
import FormGroup from './FormGroup';
import useSubscribe from '../../hooks/useSubscribe';

export type DataType = {
  fullName: string;
  email: string;
  difficulty: string;
};

//WE can send data and get a response but nothing happens
const FAKE_URL = 'http://jsonplaceholder.typicode.com/posts';

const Subscription: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<DataType>({
    fullName: '',
    email: '',
    difficulty: 'easy',
  });

  const { isLoading, isSubmitted, subscribe } = useSubscribe(
    FAKE_URL,
    formData,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    subscribe();
  };

  return (
    <PageWrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup
          label="fullName"
          type="text"
          value={formData.fullName}
          handleChange={handleChange}
          disabled={isLoading}
          placeholder="Enter your name..."
        />
        <FormGroup
          label="email"
          type="email"
          value={formData.email}
          handleChange={handleChange}
          disabled={isLoading}
          placeholder="Enter your email..."
        />
        <div className="form-group">
          <label htmlFor="difficulty"></label>
          <select
            name="difficulty"
            id="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        {isLoading && <Message msgRole={roleType.INFO} msg="Loading..." />}
        {isSubmitted !== null && (
          <Message
            msgRole={isSubmitted ? roleType.SUCCESS : roleType.ERROR}
            msg={
              isSubmitted
                ? 'Your subscription was successfull!'
                : 'Your subscription was not successfull!'
            }
          />
        )}
        <Button
          label="Submit"
          btnRole={roleType.SUCCESS}
          disabled={isLoading}
        />
      </form>
    </PageWrapper>
  );
};

export default Subscription;
