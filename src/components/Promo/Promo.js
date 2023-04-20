import promoImage from '../../images/promo_image.svg';

function Promo() {
  return (
    <section className="promo">
      <h2>Учебный проект студента факультета Веб-разработки.</h2>
      <img src={promoImage} alt="" />
    </section>
  );
}

export default Promo;
