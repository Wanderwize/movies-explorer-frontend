function AboutProject() {
  const asd = () => {
    if (-[1]) {
      if (document.body.offsetWidth > window.innerWidth) {
        alert('Скролл есть');
      } else {
        alert('Скролла нет');
      }
    } else {
      if (document.body.offsetHeight > document.documentElement.clientHeight) {
        alert('Скролл есть');
      } else {
        alert('Скролла нет');
      }
    }
  };

  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>

      <div className="about-project__subtitles">
        <div>
          <h3>Дипломный проект включал 5 этапов</h3>
          <p>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3>На выполнение диплома ушло 5 недель</h3>
          <p>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__roadmap">
        <div className="about-project__roadmap-1">
          {' '}
          <p>1 неделя</p>{' '}
        </div>
        <div className="about-project__roadmap-4">
          {' '}
          <p>4 недели</p>{' '}
        </div>
      </div>

      <div className="about-project__sides">
        <div className="about-project__back">
          {' '}
          <p>Back-end</p>{' '}
        </div>
        <div className="about-project__front">
          {' '}
          <p>Front-end</p>{' '}
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
