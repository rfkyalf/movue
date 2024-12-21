export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

export interface TV {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

export interface Person {
  id: number;
  name: string;
  profile_path: string;
}

export interface SearchResult {
  id: number;
  title: string;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  profile_path: string;
  media_type: string;
}
