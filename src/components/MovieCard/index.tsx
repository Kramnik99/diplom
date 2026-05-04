import React from 'react';
import './MovieCard.css';

interface MovieCardProps {
    title: string;
    poster: string;
    year: number | string;
    genre: string;
    onClick?: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
    title,
    poster,
    year,
    genre,
    onClick
}) => {
    return (
        <div className="movie-card" onClick={onClick}>
            <div className="movie-card__poster-wrapper">
                <img
                    className="movie-card__poster"
                    src={poster}
                    alt={title}
                    loading="lazy"
                />
            </div>
            <h3 className="movie-card__title" title={title}>{title}</h3>
            <div className="movie-card__info">
                <span className="movie-card__year">{year}</span>
                <span className="movie-card__genre">{genre}</span>
            </div>
        </div>
    );
};