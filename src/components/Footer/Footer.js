
function Footer() {
  return (
    <section className="footer">
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__year'>© 2020</p>
        <div className='footer__subtitles'>
          <a href="https://practicum.yandex.ru/" target="_blank" className='footer__praktikum'>Яндекс.Практикум</a>
          <a href="https://github.com/Wanderwize" target="_blank" className='footer__github'>Github</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
