import arrow from '../../images/portfolio-arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Портфолио</h2>
      <div>
        <p className="portfolio__item">Статичный сайт</p>
        <img src={arrow} alt="" />
      </div>
      <div>
        <p className="portfolio__item">Адаптивный сайт</p>
        <img src={arrow} alt="" />
      </div>
      <div>
        <p  className="portfolio__item">Одностраничное приложение</p>
        <img src={arrow} alt="" />
      </div>
    </section>
  );
}

export default Portfolio;
