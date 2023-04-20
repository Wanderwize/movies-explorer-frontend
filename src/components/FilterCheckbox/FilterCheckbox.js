function FilterCheckbox() {
  return (
    <section className="filter-checkbox">
      <div className="filter-checkbox__container">
        <div className="filter-checkbox__switch">
          <input id="toggle" type="checkbox" />
          <label for="toggle"></label>
        </div>
        <p>Короткометражки</p>
      </div>
    </section>
  );
}

export default FilterCheckbox;
