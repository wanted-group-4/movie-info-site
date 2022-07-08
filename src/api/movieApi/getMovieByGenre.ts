import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import serverApi from '..';

export const getMovieByGenre = (genre?: string) => {
  const [data, setData] = useState<AxiosResponse | void | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await serverApi
        .get(`/movies/?genres_like=${genre}`)
        .catch((error) => setError(error));
      setData(response);
      setLoading(false);
    }
    fetchData();
  }, [genre]);

  return { data, loading, error };
};
