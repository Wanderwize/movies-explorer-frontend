import React, { useEffect } from 'react';

function FilterCheckbox({ setIsChecked, isChecked }) {
  useEffect(() => {
    localStorage.setItem('isChecked', isChecked);
  }, [isChecked]);

  const checkboxToggle = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  return (
    <section className="filter-checkbox">
      <div className="filter-checkbox__container">
        <div className="filter-checkbox__switch">
          <input
            onChange={checkboxToggle}
            checked={isChecked}
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
