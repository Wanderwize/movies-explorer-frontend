import React, { useEffect, useState } from 'react';

function FilterCheckbox({ setIsChecked, isChecked, isLoading, setIsLoading, isSavedMoviesChecked, setIsSavedMoviesChecked }) {
  const currentUrl = window.location.pathname === '/movies' ? true : false;



  useEffect(() => {
    if (currentUrl) {
      localStorage.setItem('isChecked', isChecked);
    }
  }, [isChecked, currentUrl]);

  const checkboxToggle = () => {
    if(currentUrl) {
      setIsChecked((prevIsChecked) => !prevIsChecked)
    } else {
      setIsSavedMoviesChecked((prevIsSavedMoviesChecked) => !prevIsSavedMoviesChecked)
    }
   
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="filter-checkbox">
      <div className="filter-checkbox__container">
        <div className="filter-checkbox__switch">
          <input
            onChange={checkboxToggle}
            checked={currentUrl ? isChecked : isSavedMoviesChecked}
            id="toggle"
            type="checkbox"
          />
          <label htmlFor="toggle"></label>
        </div>
        <p>Короткометражки</p>
      </div>
    </section>
  );
}

export default FilterCheckbox;
