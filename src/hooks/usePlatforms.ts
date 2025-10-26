import platforms from '@/data/platforms';
import { useQuery } from '@tanstack/react-query';
import type { FetchDataResponse } from './useData';
import apiClient from '@/services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const fetchPlatforms = () =>
  apiClient
    .get<FetchDataResponse<Platform>>('/platforms/lists/parents')
    .then((res) => res.data);

const usePlatforms = () =>
  useQuery<FetchDataResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
