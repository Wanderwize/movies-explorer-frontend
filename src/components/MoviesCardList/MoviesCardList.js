import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const currentUrl = window.location.pathname === '/movies' ? true : false;
  return (
    <div className="movies-card-list">
      {currentUrl ? (
        <div className="movies-card-list__container0">
          <div className="movies-card-list__container">
            <MoviesCard text="33 слова о дизайне" />
            <MoviesCard text="Киноальманах «100 лет дизайна»" />
            <MoviesCard text="В погоне за Бенкси" />
            <MoviesCard text="В погоне за Бенкси" />
            <MoviesCard text="33 слова о дизайне" />
            <MoviesCard text="Киноальманах «100 лет дизайна»" />
            <MoviesCard text="В погоне за Бенкси" />
            <MoviesCard text="В погоне за Бенкси" />
            <MoviesCard text="33 слова о дизайне" />
            <MoviesCard text="Киноальманах «100 лет дизайна»" />
            <MoviesCard text="В погоне за Бенкси" />
            <MoviesCard text="В погоне за Бенкси" />
            <MoviesCard text="33 слова о дизайне" />
            <MoviesCard text="Киноальманах «100 лет дизайна»" />
            <MoviesCard text="В погоне за Бенкси" />
            <MoviesCard text="В погоне за Бенкси" />
            
            {/*
            
           */}
            {/* />
          <MoviesCard text="Соберись перед прыжком" />
          <MoviesCard text="Пи Джей Харви: A dog called money" />
          <MoviesCard text="По волнам: Искусство звука в кино" />
          <MoviesCard text="Рудбой" />
          <MoviesCard text="Скейт — кухня" />
          <MoviesCard text="Война искусств" />
          <MoviesCard text="Зона" /> */}
          </div>
          {currentUrl ? (
            <button className="movies-card-list__button">Еще</button>
          ) : (
            ''
          )}
        </div>
      ) : (
        <div className="movies-card-list__container movies-card-list__container1">
          <MoviesCard text="33 слова о дизайне" />
          <MoviesCard text="Киноальманах «100 лет дизайна»" />
          <MoviesCard text="Киноальманах «100 лет дизайна»" />

          {currentUrl ? (
            <button className="movies-card-list__button">Еще</button>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
}

export default MoviesCardList;
