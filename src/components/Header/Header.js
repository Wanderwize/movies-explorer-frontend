import headerCircle from '../../images/header_circle.svg';

function Header({ loggedIn }) {
  const currentUrl = window.location.pathname === '/' ? true : false;

  return (
    <header
      className={currentUrl && !loggedIn ? 'header ' : 'header header__white'}
    >
      <div
        className={
          currentUrl && !loggedIn ? 'header__circle-main' : 'header__circle'
        }
      >
        <a href="/" target="_blank">
          <img src={headerCircle} alt="" />
        </a>
      </div>
      {currentUrl && !loggedIn ? (
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
            <a
              className="header__nav-saved"
              href="/saved-movies"
              target="_blank"
            >
              Сохраненные фильмы
            </a>
          </div>
          <div className="header__nav-accounts">
            <a className="header__nav-accounts" href="/profile" >
              Аккаунт
            </a>
            <a className="header__nav-icon" href="profile" ></a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
