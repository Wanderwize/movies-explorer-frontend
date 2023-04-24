import arrow from '../../images/portfolio-arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Портфолио</h2>
      <div>
        
        <a target='_blank' href='https://github.com/Wanderwize/how-to-learn' className="portfolio__item">Статичный сайт</a>
        <img className='portfolio__arrow' src={arrow} alt="" />
      </div>
      <div>
        <a target='_blank' href='https://github.com/Wanderwize/russian-travel' className="portfolio__item">Адаптивный сайт</a>
        <img className='portfolio__arrow' src={arrow} alt="" />
      </div>
      <div>
        <a target='_blank' href='https://github.com/Wanderwize/russian-travel' className="portfolio__item">Одностраничное приложение</a>
        <img className='portfolio__arrow' src={arrow} alt="" />
      </div>
    </section>
  );
}

export default Portfolio;
