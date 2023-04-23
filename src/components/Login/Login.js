import headerCircle from '../../images/header_circle.svg';
import Header from '../Header/Header';

function Login() {
  return (
    <section className="register">
      <div className="register__container">
        <img src={headerCircle} alt="" />
        <h2 className="register__title">Рады видеть!</h2>
        <form className="register__form" action="">
          <div className="register__input-container">
            <p className="register__input-title">E-mail</p>
            <input className="register__input" type="email" />
            <span className="register__error"></span>
          </div>

          <div className="register__input-container">
            <p className="register__input-title">Пароль</p>
            <input className="register__input " type="password" />
            <span className="register__error"></span>
          </div>
          <button className="register__button-login">Войти</button>
        </form>
        <div className="register__form-footer">
          <p>Ещё не зарегистрированы?</p>
          <a href="/sign-up" target="_blank">Регистрация</a>
        </div>
      </div>
    </section>
  );
}

export default Login;
