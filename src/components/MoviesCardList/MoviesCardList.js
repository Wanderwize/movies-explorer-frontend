import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const currentUrl = window.location.pathname === '/movies' ? true : false;
  return (
    <div className="movies-card-list">
      {currentUrl ? (
        <div className="movies-card-list__container ">
          <MoviesCard text="33 слова о дизайне" />
          <MoviesCard text="Киноальманах «100 лет дизайна»" />
          <MoviesCard text="В погоне за Бенкси" />
          <MoviesCard text="Баския: Взрыв реальности" />
          <MoviesCard text="Бег это свобода" />
          <MoviesCard text="Книготорговцы" />
          <MoviesCard text="Когда я думаю о Германии ночью" />
          <MoviesCard text="Gimme Danger: История Игги и The Stooges" />
          {/* <MoviesCard text="Дженис: Маленькая девочка грустит" />
          <MoviesCard text="Соберись перед прыжком" />
          <MoviesCard text="Пи Джей Харви: A dog called money" />
          <MoviesCard text="По волнам: Искусство звука в кино" />
          <MoviesCard text="Рудбой" />
          <MoviesCard text="Скейт — кухня" />
          <MoviesCard text="Война искусств" />
          <MoviesCard text="Зона" /> */}
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
          <MoviesCard text="В погоне за Бенкси" />
          
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
