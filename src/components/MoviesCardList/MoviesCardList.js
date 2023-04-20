import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const currentUrl = window.location.pathname === '/movies' ? true : false;
  return (
    <div className="movies-card-list">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      {currentUrl ? (
        <button className="movies-card-list__button">Еще</button>
      ) : (
        ''
      )}
    </div>
  );
}

export default MoviesCardList;
