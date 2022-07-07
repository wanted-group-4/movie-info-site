import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import serverApi from '.';

export const movieApi = (movieId?: string, page = 1) => {
  const [data, setData] = useState<AxiosResponse | void | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getMovies = async (page: number) => {
    setLoading(true);
    const response = await serverApi
      .get(`/movies?_page=${page}&_limit=10`)
      .catch((error) => setError(error));
    setData(response);
    setLoading(false);
  };

  const getMovieById = async (movieId: string) => {
    setLoading(true);
    const response = await serverApi
      .get(`/movies?id=${movieId}`)
      .catch((error) => setError(error));
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    movieId ? getMovieById(movieId) : getMovies(page);
  }, [movieId]);

  return { data, loading, error };
};
