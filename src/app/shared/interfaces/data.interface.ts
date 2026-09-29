interface origin {
  name: string;
}

interface location {
  name: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin?: origin;
  location?: location;
  image: string;
  isFavorite?: boolean;
}

export interface Episode {
  id: number;
  name: string;
  episode: string;
}

export interface ApiResponse<T> {
  results: T;
}

export interface DataResponse {
  characters: ApiResponse<Character[]>;
  episodes: ApiResponse<Episode[]>;
}
