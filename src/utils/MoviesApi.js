import React, { useState } from 'react';
function MoviesApi() {
  return fetch('https://api.nomoreparties.co/beatfilm-movies').then((res) =>
    res.json()
  );
}

export default MoviesApi;
