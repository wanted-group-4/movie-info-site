import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import serverApi from '..';

export const getMovie = (page = 1) => {
  const [data, setData] = useState<AxiosResponse | void | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await serverApi
        .get(`/movies?_page=${page}&_limit=10`)
        .catch((error) => setError(error));
      setData(response);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return { data, loading, error };
};

//장르 []
