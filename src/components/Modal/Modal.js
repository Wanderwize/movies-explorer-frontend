import closeButton from '../../images/close-button.svg';
import menuButton from '../../images/menu-button.svg';
import React, { useState } from 'react';
function Modal() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const currentUrl =
    window.location.pathname === '/movies' ||
    window.location.pathname === '/saved-movies' ||
    window.location.pathname === '/profile'
      ? true
      : false;

  return (
    <section className="modal modal__sidebar">
      <div className={!modalIsOpen ? 'modal__overlay' : 'modal__off'}>
        <div className="modal__container">
          <div className="modal__container-link">
            <a className="modal__link" href="/">
              Главная
            </a>
            <a className="modal__link" href="/movies">
              Фильмы
            </a>
            <a className="modal__link" href="/saved-movies">
              Сохраненные фильмы
            </a>
          </div>
          <div className="modal__container-account">
            <a className="modal__link-account" href="/profile">
              Аккаунт
            </a>
            <a className="header__nav-icon" href=""></a>
          </div>
          <img
            className="modal__close-button"
            src={closeButton}
            onClick={() => setModalIsOpen(true)}
            alt=""
          />
        </div>
      </div>
      {currentUrl ? (
        <img
          className="modal__menu-button"
          onClick={() => setModalIsOpen(false)}
          src={menuButton}
          alt=""
        />
      ) : (
        ''
      )}
    </section>
  );
}

export default Modal;
