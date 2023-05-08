import image1 from '../../images/image1.svg';
import image2 from '../../images/delete-card.svg';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Api from '../../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function MoviesCard({
  movies,
  setIsFavorite,
  isFavorite,
  setMovies,
  handleClickLike,
  handleClickDislike,
  handleChangeLikeStatus,
  favoriteMoves,
  handleLike,
}) {
  const currentUrl = window.location.pathname === '/movies' ? true : false;
  const [liked, setLiked] = useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  const isLiked = favoriteMoves
    ? favoriteMoves.some((item) => item.movieId === movies.id)
    : false;

  const cardLikeButtonClassName = `card__like ${
    isLiked && 'card__like_active'
  }`;

  function Time(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    const formattedHours = hours < 10 ? `${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `${minutes}` : minutes;
    const result = `${formattedHours}ч ${formattedMinutes}м`;
    return result;
  }

  return (
    <div className="movies__card">
      <a href={movies.trailerLink}>
        {' '}
        <img className='movies__card-img'
          src={
            currentUrl
              ? `https://api.nomoreparties.co${movies.image.url}`
              : movies.image
          }
          alt=""
        />
      </a>

      <div className="movies__card-list-name" title={movies.nameRU}>
        <h2>{movies.nameRU}</h2>
        {!currentUrl ? (
          <button
            onClick={() => handleClickDislike(movies)}
            className="movies__card_button-delete"
          ></button>
        ) : (
          <button
            onClick={() => handleLike(movies)}
            className={
              isLiked
                ? 'movies__card_button-like'
                : 'movies__card_button-unlike'
            }
          ></button>
        )}
      </div>
      <p className="movies__list_duration">{Time(movies.duration)}</p>
    </div>
  );
}

export default MoviesCard;
