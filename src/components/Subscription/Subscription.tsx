import { useState } from 'react';
//Components
import PageWrapper from '../common/PageWrapper/PageWrapper';
import Button, { roleType } from '../common/Button/Button';
import Message from '../common/Message/Message';
import FormGroup from './FormGroup';

type DataType = {
  fullName: string;
  email: string;
  difficulty: string;
};

const Subscription: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<DataType>({
    fullName: '',
    email: '',
    difficulty: 'easy',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState<null | boolean>(null);

  const subscribe = async (formData: DataType) => {
    try {
      setIsLoading(true);
      setIsSubmitted(null);
      const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Something went wrong...');

      setIsSubmitted(true);
      setIsLoading(false);
      return res;
    } catch (err) {
      setIsLoading(false);
      setIsSubmitted(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    subscribe(formData);
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
        {isSubmitted === null ? null : (
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
