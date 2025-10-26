import apiClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import type { FetchDataResponse } from './useData';
import genres from '@/data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const fetchGenres = () =>
  apiClient.get<FetchDataResponse<Genre>>('/genres').then((res) => res.data);

const useGenres = () =>
  useQuery<FetchDataResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
