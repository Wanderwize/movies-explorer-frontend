import headerCircle from '../../images/header_circle.svg';
import Header from '../Header/Header';

function Profile() {
  return (
    <section className="profile">
      <Header />
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий</h2>
        <div className="profile__name-container">
          <p>Имя</p>
          <p>Виталий</p>
        </div>
        <div className="profile__email-container">
          <p>E-mail</p>
          <p>pochta@yandex.ru</p>
        </div>
        <div className="profile__buttons">
          <button className="profile__button-edit" href="" target="_blank">
            Редактировать
          </button>
          <button className="profile__button-logout" href="" target="_blank">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
