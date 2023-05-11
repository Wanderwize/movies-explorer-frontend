import headerCircle from '../../images/header_circle.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../../auth';
import { useFormWithValidation } from '../UseForm/UseForm';

function Login({ handleLogin, moviesRequest, setLoggedIn, onLogin }) {
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const { values, errors, isValid, handleChange, setValues } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    onLogin({ email, password });
  };

  return (
    <section className="register">
      <div className="register__container">
        <a href="/">
          <img src={headerCircle} alt="" />
        </a>
        <h2 className="register__title">Рады видеть!</h2>
        <form onSubmit={handleSubmit} className="register__form" action="">
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
            />
            <span id="profile__input-error" className="profile__input-error">
              {errors.password}
            </span>
          </div>
          <button
            disabled={!isValid}
            className={
              !isValid
                ? 'register__button-register register__button-disabled'
                : 'register__button-register'
            }
          >
            Войти
          </button>
        </form>
        <div className="register__form-footer">
          <p>Ещё не зарегистрированы?</p>
          <a href="/sign-up">Регистрация</a>
        </div>
      </div>
    </section>
  );
}

export default Login;
