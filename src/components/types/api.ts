export interface ApiImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
    regular?: string;
  };
  user?: {
    name: string;
  };
  likes?: number;
}

export interface ApiResponse {
  results: ApiImage[];
  totalPages: number;
}
