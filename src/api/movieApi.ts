import { useHttpRequest } from './useHttpRequest';
import serverApi from '.';
import { IMovie } from '../types/Movie';

export const getMovies = () => {
  const response = useHttpRequest<IMovie[]>({ url: '' });
  return response;
};

export const getMovieById = (id: number) => {
  const response = useHttpRequest<IMovie>({ url: `/${id}` });
  return response;
};
export const getMovieByPage = (page: number) => {
  const response = useHttpRequest<IMovie[] | []>({
    url: `?_page=${page}&_limit=10`,
  });
  return response;
};

export const getMovieByRating = (rating: number) => {
  const response = useHttpRequest<IMovie[] | []>({
    url: `?rating_gte=${rating}&rating_lte=10`,
  });
  return response;
};

export const getMovieByGenre = (genre: string) => {
  const response = useHttpRequest<IMovie[] | []>({
    url: `?genres_like=${genre}`,
  });
  return response;
};

export const getMovieInBookmark = () => {
  const response = useHttpRequest<IMovie[] | [] >({ url: '?like=true' });
  return response;
};

export const getMovieByLatestOrder = (page: number) => {
  const response = useHttpRequest<IMovie[] | []>({
    url: `?_sort=date_uploaded&_order=desc&_page=${page}&_limit=10`,
  });
  return response;
};

export const getMovieByRankOrder = (page: number) => {
  const response = useHttpRequest<IMovie[] | []>({
    url: `?_sort=rating&_order=desc&_page=${page}&_limit=10`,
  });
  return response;
};

export const patchMovieFavorite = (id: number, favorite: boolean) => {
  serverApi
    .patch(`/${id}`, { like: !favorite })
    .catch((error) => console.log(error));
};
