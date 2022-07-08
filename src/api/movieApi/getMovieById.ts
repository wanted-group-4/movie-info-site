import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import serverApi from '..';

export const getMovieById = (movieId: number) => {
  const [data, setData] = useState<AxiosResponse | void | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await serverApi
        .get(`/movies?id=${movieId}`)
        .catch((error) => setError(error));
      setData(response);
      setLoading(false);
    }
    fetchData();
  }, [movieId]);

  return { data, loading, error };
};
