import React, { useState, useEffect } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import serverApi from './index';

export const useHttpRequest = <FetchProps>(url: string) => {
  const [data, setData] = useState<FetchProps[] | any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await serverApi
        .get(url)
        .catch((error) => setError(error));
      setData(response);
      setLoading(false);
    }
    getData();
  }, [url]);

  return { data, loading, error };
};
