import Header from '../Header/Header';
import CurrentUserContext from '../contexts/CurrentUserContext';
import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/Api';

import { useFormWithValidation } from '../UseForm/UseForm';

function Profile({ setLoggedIn }) {
  const context = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [isFocus, setIsFocus] = useState(true);
  const [profileName, setProfileName] = useState(context.name);
  const [profileEmail, setProfileEmail] = useState(context.email);
  const [uniqueName, setUniqueName] = useState(true);
  const [isChangeValue, setIsChangeValue] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const { values, errors, isValid, handleChange, setValues } =
    useFormWithValidation();

  useEffect(() => {
    setValues({
      name: context.name,
      email: context.email,
    });
    setIsChangeValue(false);
  }, [context.name, context.email, setValues]);

  function handleUpdateProfile(evt) {
    evt.preventDefault();
    const { name, email } = values;
    api
      .pushUserInfo({ name, email })
      .then(() => {
        setProfileName(name);
        setProfileEmail(email);
        setIsFocus(true);
        showSuccessMessage();
      })
      .catch((err) => {
        console.log(err, err.status, err.code, err.message);
        if (err) {
          setErrorMessage('Пользователь уже существует!');
          console.log(err.code);
          setErrorStatus(true);
        } else {
          setErrorMessage('Что-то пошло не так');
        }
      });
  }

  function showSuccessMessage() {
    setShowMessage(true);
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }

  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('inputValue');
    localStorage.removeItem('movies');
    localStorage.removeItem('isChecked');
    localStorage.removeItem('query');
    localStorage.removeItem('query');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('favoriteMovies');
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
    navigate('/sign-in');
  }

  useEffect(() => {
    setIsFocus(!isValid);
  }, [isValid]);

  useEffect(() => {
    console.log(values.name);
  });

  useEffect(() => {
    setProfileName(context.name);
  }, [context.name]);

  useEffect(() => {
    setProfileEmail(context.email);
  }, [context.email]);

  return (
    <section className="profile">
      <Header style={{ marginTop: '30px' }} />
      <form className="profile__container" onSubmit={handleUpdateProfile}>
        <h2 className="profile__title">Привет, {profileName}!</h2>

        <div className="profile__name-container">
          <p>Имя</p>
          <input
            className="profile__input-name"
            type="text"
            minLength="2"
            maxLength="30"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            placeholder={context.name}
            unique
          />
        </div>
        <span id="profile__input-error" className="profile__input-error">
          {errors.name}
        </span>
        <div className="profile__email-container">
          <p>E-mail</p>
          <input
            className="profile__input-email"
            type="text"
            value={values.email || ''}
            pattern="^.+@.+\..+$"
            onChange={handleChange}
            name="email"
            unique
          />
        </div>
        {showMessage ? (
          <span className={'profile__success-message'}>Данные изменены!</span>
        ) : null}
        {errorMessage ? (
          <span className={'profile__success-message'}>{errorMessage}</span>
        ) : null}
        <span id="profile__input-error" className="profile__input-error">
          {errors.email}
        </span>
        <div className="profile__buttons">
          <button
            disabled={!isValid}
            className={
              values.name === profileName || values.email === profileEmail
                ? 'profile__button-edit profile__button-edit-disbled'
                : 'profile__button-edit'
            }
            type="submit"
          >
            Редактировать
          </button>
          <button onClick={signOut} className="profile__button-logout">
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
