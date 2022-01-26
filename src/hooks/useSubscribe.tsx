import { useState } from 'react';
import { DataType } from '../components/Subscription/Subscription';

const useSubscribe = (url: string, formData: DataType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState<null | boolean>(null);

  const subscribe = async () => {
    try {
      setIsLoading(true);
      setIsSubmitted(null);
      const res = await fetch(url, {
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

  return { isLoading, isSubmitted, subscribe };
};

export default useSubscribe;
