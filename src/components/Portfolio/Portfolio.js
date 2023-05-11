import arrow from '../../images/portfolio-arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Портфолио</h2>
      <div>
        <a
          className="portfolio__link"
          href="https://github.com/Wanderwize/russian-travel"
        >
          <p
            href="https://github.com/Wanderwize/how-to-learn"
            className="portfolio__item"
          >
            Статичный сайт
          </p>
          <img className="portfolio__arrow" src={arrow} alt="" />
        </a>
      </div>
      <div>
        <a
          className="portfolio__link"
          href="https://github.com/Wanderwize/russian-travel"
        >
          <p
            href="https://github.com/Wanderwize/russian-travel"
            className="portfolio__item"
          >
            Адаптивный сайт
          </p>
          <img className="portfolio__arrow" src={arrow} alt="" />
        </a>
      </div>
      <div>
        <a
          className="portfolio__link"
          href="https://github.com/Wanderwize/russian-travel"
        >
          <p className="portfolio__item">Одностраничное приложение</p>
          <img className="portfolio__arrow" src={arrow} alt="" />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
