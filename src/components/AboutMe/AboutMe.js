import vitaly from '../../images/vitaly.svg';

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__about">Студент</h2>

      <div className="aboutme__info">
        <div className="aboutme__container">
          <h2 className="aboutme__name">Виталий</h2>
          <h3 className="aboutme__title">Фронтенд-разработчик, 30 лет</h3>
          <p className="aboutme__subtitle">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="aboutme__link" href="https://github.com/wanderwize">
            Github
          </a>
        </div>
        <img className="aboutme__image" src={vitaly} alt="" />
      </div>
    </section>
  );
}

export default AboutMe;
