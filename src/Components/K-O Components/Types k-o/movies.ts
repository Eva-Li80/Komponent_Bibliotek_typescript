
export type Movie = {
    title: string;
    year: string;
    genre: string;
    director: string;
    img: string;
  };
  
  export type MovieTableProps = {
    data: Movie[];
  };
