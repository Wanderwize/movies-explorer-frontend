import Footer from '../Footer/Footer';
import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

function SavedMovies() {
  return (
    <section className="saved-movies">
      <Header />
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default SavedMovies;
