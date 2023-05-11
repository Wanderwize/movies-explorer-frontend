import headerCircle from '../../images/header_circle.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../../auth';
import { useFormWithValidation } from '../UseForm/UseForm';

const Register = ({ onUpdateUser, setLoggedIn, onRegister }) => {
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  const { values, errors, isValid, handleChange, setValues } =
    useFormWithValidation();

  function handleChangeName(evt) {
    evt.preventDefault();
    setName(evt.target.value || '');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password, name } = values;
    onRegister({ email, password, name });
    console.log(email, password, name);
  }

  return (
    <section className="register">
      <div className="register__container">
        <a href="/">
          <img src={headerCircle} alt="" />
        </a>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form onSubmit={handleSubmit} className="register__form" action="">
          <div className="register__input-container">
            <p className="register__input-title">Имя</p>
            <input
              minLength="2"
              maxLength="30"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              className="register__input"
              type="text"
              required
            />
            <span id="profile__input-error" className="profile__input-error">
              {errors.name}
            </span>
          </div>
          <div className="register__input-container">
            <p className="register__input-title">E-mail</p>
            <input
              id="email"
              value={values.email || ''}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
              onChange={handleChange}
              name="email"
              className="register__input"
              type="email"
              required
            />
            <span id="profile__input-error" className="profile__input-error">
              {errors.email}
            </span>
          </div>
          <div className="register__input-container">
            <p className="register__input-title">Пароль</p>
            <input
              id="password"
              value={values.password || ''}
              onChange={handleChange}
              className="register__input register__input-last"
              type="password"
              minLength="8"
              name="password"
              required
            />
            <span id="profile__input-error" className="profile__input-error">
              {errors.password}
            </span>
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className={
              !isValid
                ? 'register__button-register register__button-disabled'
                : 'register__button-register'
            }
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="register__form-footer">
          <p>Уже зарегистрированы?</p>
          <a href="/sign-in">Войти</a>
        </div>
      </div>
    </section>
  );
};

export default Register;
