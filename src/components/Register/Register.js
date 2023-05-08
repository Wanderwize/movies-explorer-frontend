import headerCircle from '../../images/header_circle.svg';
import Header from '../Header/Header';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <a href="/" target="_blank">
          <img src={headerCircle} alt="" />
        </a>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" action="">
          <div className="register__input-container">
            <p className="register__input-title">Имя</p>
            <input className="register__input" type="text" />
            <span className="register__error"></span>
          </div>

          <div className="register__input-container">
            <p className="register__input-title">E-mail</p>
            <input className="register__input" type="email" />
            <span className="register__error"></span>
          </div>

          <div className="register__input-container">
            <p className="register__input-title">Пароль</p>
            <input
              style={{ color: 'red' }}
              className="register__input register__input-last"
              type="password"
            />
            <span className="register__error">Что-то пошло не так...</span>
          </div>
          <button className="register__button-register">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__form-footer">
          <p>Уже зарегистрированы?</p>
          <a href="/sign-in" target="_blank">
            Войти
          </a>
        </div>
      </div>
    </section>
  );
}

export default Register;
