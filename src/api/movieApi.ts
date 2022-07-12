import { useHttpRequest } from './useHttpRequest';
import serverApi from '.';

export const getMovies = () => {
  const response = useHttpRequest('');
  return response;
};

export const getMovieById = (id: string | undefined) => {
  const response = useHttpRequest(`/${id}`);
  return response;
};
export const getMovieByPage = (page: number) => {
  const response = useHttpRequest(`?_page=${page}&_limit=10`);
  return response;
};

export const getMovieByRating = (rating: number) => {
  const response = useHttpRequest(`?rating_gte=${rating}&rating_lte=10`);
  return response;
};

export const getMovieByGenre = (genre: string) => {
  const response = useHttpRequest(`?genres_like=${genre}`);
  return response;
};

export const getMovieInBookmark = () => {
  const response = useHttpRequest('?like=true');
  return response;
};

export const patchMovieFavorite = (id: number, favorite: boolean) => {
  serverApi
    .patch(`/${id}`, { like: !favorite })
    .catch((error) => console.log(error));
};
export const getMovieByLatest = (page: number) => {
  const response = useHttpRequest(
    `?_sort=date_uploaded&_order=desc&_page=${page}&_limit=10`
  );
  return response;
};

export const getMovieByRanking = (page: number) => {
  const response = useHttpRequest(
    `?_sort=rating&_order=desc&_page=${page}&_limit=10`
  );
  return response;
};
