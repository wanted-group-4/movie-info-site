import { useState, useEffect } from 'react';
import serverApi from './index';
import { AxiosResponse, AxiosError } from 'axios';

interface UseHttpRequestProps {
  url: string;
}

export const useHttpRequest = <T>({ url }: UseHttpRequestProps) => {
  const [data, setData] = useState<AxiosResponse<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      await serverApi
        .get(url)
        .then((response) => {
          setData(response);
          setLoading(false);
        })
        .catch((error) => setError(error));
    }
    getData();
  }, [url]);

  return { data, loading, error };
};
