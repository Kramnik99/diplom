import React from 'react';
import { useGetMoviesQuery } from '../../api/kinopoiskApi';
import { MovieCard } from '../../components/MovieCard';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const { data, isLoading, isError } = useGetMoviesQuery(1);

  if (isLoading) return <div className="status">Загрузка...</div>;
  if (isError) return <div className="status">Ошибка загрузки данных</div>;

  return (
    <div className="home-page">
      <h1 className="home-page__title">Популярные</h1>
      <div className="home-page__grid">
        {data?.items?.map((movie: any) => (
          <MovieCard
            key={movie.kinopoiskId}
            title={movie.nameRu || movie.nameEn}
            poster={movie.posterUrlPreview}
            year={movie.year}
            genre={movie.genres[0]?.genre}
            onClick={() => console.log('Movie ID:', movie.kinopoiskId)}
          />
        ))}
      </div>
    </div>
  );
};