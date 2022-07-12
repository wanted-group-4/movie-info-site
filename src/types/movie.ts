export interface MovieDetail {
  id: number;
  title: string;
  year: number;
  like: boolean;
  runtime: number;
  genres: string[];
  description_full: string;
  background_image: string;
  medium_cover_image: string;
}