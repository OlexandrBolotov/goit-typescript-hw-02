import axios from 'axios';
import type { ApiImage, ApiResponse } from '../types/api';

const ACCESS_KEY = 'IRS9DkEuzGWatYY-n837IBUepc6T_l34aXGsOsmfr9Q';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<ApiResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return {
    results: response.data.results as ApiImage[],
    totalPages: response.data.total_pages,
  };
};
