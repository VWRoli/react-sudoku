import { useState } from 'react';
//Components
import PageWrapper from '../common/PageWrapper/PageWrapper';
import Button, { roleType } from '../common/Button/Button';
import Message from '../common/Message/Message';

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

  const [isSubmitted, setIsSubmitted] = useState<null | boolean>(null);

  const subscribe = async (formData: DataType) => {
    try {
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

      return res;
    } catch (err) {
      setIsSubmitted(false);
      console.warn(err);
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
        <div className="form-group">
          <label htmlFor="fullName"></label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            placeholder="Enter your name..."
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Enter your email..."
            onChange={handleChange}
          />
        </div>
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
        <Button label="Submit" btnRole={roleType.SUCCESS} />
      </form>
    </PageWrapper>
  );
};

export default Subscription;
