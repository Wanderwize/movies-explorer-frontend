import Footer from '../Footer/Footer';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import api, { Api } from '../../utils/Api';

function SavedMovies({
  movies,
  setIsChecked,
  isChecked,
  loggedIn,
  filteredMovies,
  setFavoriteMovies,
  favoriteMoves,
  handleClickDislike,
  handleLike,
  handleSubmit,
  inputValue,
  savedMovieQuery,
  setSavedMoviesQuery,
  isLoading,
  setIsLoading,
  isSavedMoviesChecked,
  setIsSavedMoviesChecked,
}) {
  const [test, setTest] = useState([]);

  useEffect(() => {
    setSavedMoviesQuery(false);
  }, []);

  useEffect(() => {
    if (savedMovieQuery === true) {
      setTest(filteredSavedMovies);
    } else {
      setTest(favoriteMoves);
    }
  }, [favoriteMoves]);

  React.useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setFavoriteMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  useEffect(() => {
    const onloadFavoritesMovies = JSON.parse(
      localStorage.getItem('favoriteMovies')
    );
    if (onloadFavoritesMovies) {
      setFavoriteMovies(onloadFavoritesMovies);
    } else {
      favoriteMoviesRequest();
    }
  }, []);

  const filteredSavedMovies = favoriteMoves.filter((movie) =>
    movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
  );

  const favoriteMoviesRequest = () => {
    api
      .getCards()
      .then((data) => {
        setFavoriteMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="movies">
      <Header />
      <SearchForm
        handleSubmit={handleSubmit}
        movies={movies}
        filteredMovies={filteredMovies}
      />
      <FilterCheckbox
        setIsChecked={setIsChecked}
        isChecked={isChecked}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isSavedMoviesChecked={isSavedMoviesChecked}
        setIsSavedMoviesChecked={setIsSavedMoviesChecked}
      />
      {isLoading && <Preloader />}
      {isLoading || !test ? null : (
        <MoviesCardList
          filteredMovies={favoriteMoves}
          favoriteMoves={favoriteMoves}
          handleClickDislike={handleClickDislike}
          renderCards={test}
          handleLike={handleLike}
          isSavedMoviesChecked={isSavedMoviesChecked}
          setIsSavedMoviesChecked={setIsSavedMoviesChecked}
        />
      )}

      <Footer />
    </section>
  );
}

export default SavedMovies;
