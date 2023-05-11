import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useFormWithValidation } from '../UseForm/UseForm';

function SearchForm({ handleSubmit }) {
  const [searchQuery, setSearchQuery] = useState(false);

  const formWithValidation = useFormWithValidation();
  const { query } = formWithValidation.values;
  const { handleChange, resetForm, errors } = formWithValidation;
  const currentUrl = window.location.pathname === '/movies' ? true : false;

  function Submit(evt) {
    evt.preventDefault();
    console.log(localStorage.getItem('query'), 'тест локального запроса');
    handleSubmit(query || localStorage.getItem('query'));
    setSearchQuery(query);
  }

  const defaultValue = currentUrl ? localStorage.getItem('query') : '';

  return (
    <section className="search-form">
      <form onSubmit={Submit} className="search-form__container">
        <input
          name="query"
          onChange={handleChange}
          placeholder="Фильм"
          type="text"
          defaultValue={defaultValue}
          required
          value={query}
          suppressContentEditableWarning
        />

        <button>Найти</button>
      </form>
      <span
        style={{ color: 'red', alignItems: 'center', marginTop: '10px' }}
        className="search-form__input-error"
      >
        {errors.query}
      </span>
    </section>
  );
}

export default SearchForm;
