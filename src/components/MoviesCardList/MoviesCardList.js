import React, { useState, useEffect, Suspense, lazy } from 'react';
import Api from '../../utils/Api';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  isFavorite,
  setIsFavorite,
  handleClickLike,
  handleClickDislike,
  handleChangeLikeStatus,
  favoriteMoves,
  filteredMovies,
  renderCards,
  isChecked,
  handleLike,
  isSavedMoviesChecked,
  setIsSavedMoviesChecked
}) {
  const [displayedProductCount, setDisplayedProductCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [allCards, setAllCards] = useState([]);

  const currentUrl = window.location.pathname === '/movies' ? true : false;

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    let initialProductCount;

    if (screenWidth <= 768) {
      initialProductCount = 5;
    }
    if (!currentUrl) {
      initialProductCount = 1000000;
    } else if (screenWidth < 1024) {
      initialProductCount = 8;
    } else {
      initialProductCount = 12;
    }

    setDisplayedProductCount(initialProductCount);
    setAllCards(filteredMovies || favoriteMoves);
  }, [filteredMovies || favoriteMoves]);

  const handleShowMore = () => {
    if (screenWidth > 768) {
      console.log('тест кнопки еще');
      setDisplayedProductCount(displayedProductCount + 3);
    } else if (screenWidth > 320) {
      setDisplayedProductCount(displayedProductCount + 2);
    } else {
      setDisplayedProductCount(displayedProductCount + 2);
    }
  };

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container0">
        <div className="movies-card-list__container">
          {renderCards.length === 0 ? (
            <p className="movies-card-list__empty">Ничего не найдено</p>
          ) : (
            renderCards
              .filter((movie) => (isChecked || isSavedMoviesChecked ? movie.duration < 40 : true))
              .slice(0, displayedProductCount)
              .map((movie, key) => (
                <MoviesCard
                  key={key}
                  isFavorite={isFavorite}
                  favoriteMoves={favoriteMoves}
                  setIsFavorite={setIsFavorite}
                  movies={movie}
                  handleClickLike={handleClickLike}
                  handleClickDislike={handleClickDislike}
                  handleChangeLikeStatus={handleChangeLikeStatus}
                  handleLike={handleLike}
                />
              ))
          )}
        </div>
        {currentUrl && (
          <div>
            {' '}
            {displayedProductCount <
              renderCards.filter((movie) =>
                isChecked && currentUrl ? movie.duration < 40 : true
              ).length && (
              <button
                className="movies-card-list__button"
                onClick={handleShowMore}
              >
                Еще
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MoviesCardList;
