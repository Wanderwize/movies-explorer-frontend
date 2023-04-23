import image1 from '../../images/image1.svg';
import image2 from '../../images/delete-card.svg';
import React, { useState } from 'react';

function MoviesCard(props) {
  const currentUrl = window.location.pathname === '/movies' ? true : false;
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="movies__card">
      <img src={image1} alt="" />
      <div className="movies__list_card-name">
        <h2>{props.text}</h2>
        {!currentUrl ? (
          <button
            onClick={handleClick}
            className="movies__card_button-delete"
          ></button>
        ) : (
          <button
            onClick={handleClick}
            className={`movies__card_button-like ${
              !liked ? 'movies__card_button-unlike' : ''
            }`}
          ></button>
        )}
      </div>
      <p className="movies__list_duration">1ч42м</p>
    </div>
  );
}

export default MoviesCard;
