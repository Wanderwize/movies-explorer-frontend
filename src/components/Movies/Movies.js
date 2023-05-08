import Footer from '../Footer/Footer';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

function Movies({
  setIsChecked,
  isChecked,
  favoriteMoves,
  filteredMovies,
  handleSubmit,
  handleLike,
}) {
  const [renderCards, setRenderCards] = useState([]);

  useEffect(() => {
    const cardsToRender = JSON.parse(localStorage.getItem('filteredMovies'));
    if (cardsToRender) {
      setRenderCards(cardsToRender);
      console.log('локальное');
    } else {
      setRenderCards(filteredMovies);
      console.log('не локальное');
      console.log(cardsToRender);
    }
  }, [filteredMovies]);

  const MoviesCardList = lazy(() => {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(import('../MoviesCardList/MoviesCardList')),
        1000
      )
    );
  });

  return (
    <section className="movies">
      <Header />
      <SearchForm handleSubmit={handleSubmit} />
      <FilterCheckbox setIsChecked={setIsChecked} isChecked={isChecked} />

      <Suspense fallback={<Preloader />}>
        {!renderCards ? null : (
          <MoviesCardList
            isChecked={isChecked}
            favoriteMoves={favoriteMoves}
            filteredMovies={filteredMovies}
            renderCards={renderCards}
            handleLike={handleLike}
          />
        )}
      </Suspense>
      <Footer />
    </section>
  );
}

export default Movies;
