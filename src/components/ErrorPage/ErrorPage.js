import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  return (
    <section className="error-page">
      <h2 className="error-page__title">404</h2>
      <p className="error-page__subtitle">Страница не найдена</p>
      <a className="error-page__link" href="/" target="_blank">
        Назад
      </a>
    </section>
  );
}

export default ErrorPage;
