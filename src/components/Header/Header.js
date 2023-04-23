import headerCircle from '../../images/header_circle.svg';

function Header() {
  const currentUrl = window.location.pathname === '/' ? true : false;

  return (
    <header className={currentUrl ? 'header ' : 'header header__white'}>
      <div className="header__circle">
        <a href="/movies" target="_blank"><img src={headerCircle} alt="" /></a>
      </div>
      {currentUrl ? (
        <div className="header__nav header__nav-main">
          <a className="header__nav-link" href="/sign-up" target="_blank">
            Регистрация
          </a>

          <a className="header__nav-button" href="/sign-in" target="_blank">
            Войти
          </a>
        </div>
      ) : (
        <div className="header__nav-login">
          <div className="header__nav-film">
            <a className="header__nav-films" href="/movies" target="_blank">
              Фильмы
            </a>
            <a className="header__nav-saved" href="/saved-movies" target="_blank">
              Сохраненные фильмы
            </a>
          </div>
          <div className="header__nav-accounts">
            <a className="header__nav-accounts" href="/profile" target="_blank">
              Аккаунт
            </a>
            <a className="header__nav-icon" href="profile" target="_blank"></a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
