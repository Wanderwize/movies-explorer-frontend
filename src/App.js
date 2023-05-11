import './App.css';
import React from 'react';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Modal from './components/Modal/Modal';
import ErrorPage from './components/ErrorPage/ErrorPage.js';
import api from './utils/Api';
import CurrentUserContext from './components/contexts/CurrentUserContext';
import * as auth from './auth';
import MoviesApi from './utils/MoviesApi';
import ProtectedRouteElement from './components/ProtectedRoute/ProtectedRoute';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});
  const [currentName, setCurrentName] = React.useState('');
  const [currentEmail, setCurrentEmail] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [inputValue, setInputValue] = useState('');
  const [localQuery, setLocalQuery] = useState('');
  const [savedMovieQuery, setSavedMoviesQuery] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [favoriteMoves, setFavoriteMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [formError, setFormError] = useState('');
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem('isChecked') === 'true'
  );
  const [isSavedMoviesChecked, setIsSavedMoviesChecked] = useState(false);

  useEffect(() => {
    if (loggedIn in localStorage) {
      setLoggedIn(localStorage.getItem('loggedIn'));
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth
        .tokenCheck(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser({ name: res.name, email: res.email });

          console.log(loggedIn, 'токен ок');
        })
        .catch((err) => {
          localStorage.removeItem('jwt');
          navigate('/sign-in', { replace: true });
          console.log(err, 'токен не ок');
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setFavoriteMovies(data);
        localStorage.setItem('favoriteMovies', JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });

    MoviesApi()
      .then((data) => {
        setMovies(data);
        localStorage.setItem('movies', JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });

    if (filteredMovies) {
      setMovies(filteredMovies);
    }
  }, [loggedIn, filteredMovies]);

  function onRegister({ email, password, name }) {
    auth
      .register(email, password, name)
      .then((res) => {
        if (!res.err) {
          onLogin({ email, password });
        } else {
          setFormError('Почта уже существует');
        }
      })
      .catch((res, err) => {
        setFormError('Некорректный логин или пароль');
      });
  }

  function onLogin({ email, password }) {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          handleLogin();
          setLoggedIn(true);
          localStorage.setItem('loggedIn', loggedIn);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        setFormError('Некорректный логин или пароль');
      });
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handleSubmit = (query) => {
    setInputValue(query);
    localStorage.setItem('query', query);
    const localMoviesData = JSON.parse(localStorage.getItem('movies'));
    const filteredMovies = localMoviesData.filter((movie) =>
      movie.nameRU.toLowerCase().includes(query.toLowerCase())
    );
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    setFilteredMovies(filteredMovies);
    setEmptyMessage(true);
    setSavedMoviesQuery(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleSubmitSavedPage = (query) => {
    setInputValue(query);
    const localMoviesData = JSON.parse(localStorage.getItem('movies'));
    const filteredMovies = localMoviesData.filter((movie) =>
      movie.nameRU.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
    setSavedMoviesQuery(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleLogin = (e) => {
    setLoggedIn(true);
  };

  function handleUpdateUser(data) {
    api
      .pushUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleClickLike = (movie) => {
    const isMovieSaved = favoriteMoves.some(
      (item) => item.movieId === movie.id
    );
    if (!isMovieSaved) {
      api
        .pushNewCard({
          movieId: movie.id,
          nameRU: movie.nameRU,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailerLink: movie.trailerLink,
          duration: movie.duration,
          country: movie.country,
          director: movie.director,
          year: movie.year,
          description: movie.description,
          thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
          owner: movie.owner,
          nameEN: movie.nameEN,
        })
        .then((data) => {
          setFavoriteMovies([data, ...favoriteMoves]);
          console.log('лайк');
          localStorage.setItem(
            'savedMovies',
            JSON.stringify([data, ...favoriteMoves])
          );
        })
        .catch((err) => console.log(err, err.status, err.message));
    } else {
      const savedMovieId = favoriteMoves.find(
        (item) => item.movieId === movie.id
      )._id;
      api
        .deleteCard(savedMovieId)
        .then(() => {
          setFavoriteMovies((state) =>
            state.filter((item) => item.movieId !== movie.id)
          );
        })
        .catch((err) => console.log(err, err.status, err.message));
    }
  };

  const handleClickDislike = (movie) => {
    api
      .deleteCard(movie._id)
      .then(() => {
        setFavoriteMovies((state) =>
          state.filter((item) => item.movieId !== movie.movieId)
        );
        localStorage.removeItem('favoriteMovies');
      })
      .catch((err) => console.log(err, err.status, err.message));
  };

  const handleLike = (movie) => {
    const isLiked = favoriteMoves.some((item) => item.movieId === movie.id);

    if (isLiked) {
      handleClickDislike(movie);
    } else {
      handleClickLike(movie);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Modal />
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                component={Movies}
                loggedIn={localStorage.getItem('loggedIn')}
                movies={movies}
                setIsChecked={setIsChecked}
                isChecked={isChecked}
                isSavedMoviesChecked={isSavedMoviesChecked}
                setIsSavedMoviesChecked={setIsSavedMoviesChecked}
                favoriteMoves={favoriteMoves}
                filteredMovies={filteredMovies}
                handleSubmit={handleSubmit}
                handleLike={handleClickLike}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                emptyMessage={emptyMessage}
                inputValue = {inputValue}
                setEmptyMessage = {setEmptyMessage}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                component={SavedMovies}
                loggedIn={localStorage.getItem('loggedIn')}
                movies={movies}
                setIsChecked={setIsChecked}
                isChecked={isChecked}
                isSavedMoviesChecked={isSavedMoviesChecked}
                setIsSavedMoviesChecked={setIsSavedMoviesChecked}
                favoriteMoves={favoriteMoves}
                filteredMovies={favoriteMoves}
                setFavoriteMovies={setFavoriteMovies}
                handleClickDislike={handleClickDislike}
                handleLike={handleLike}
                handleSubmit={handleSubmitSavedPage}
                savedMovieQuery={savedMovieQuery}
                setSavedMoviesQuery={setSavedMoviesQuery}
                inputValue={inputValue}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                emptyMessage={emptyMessage}
                setEmptyMessage = {setEmptyMessage}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                exact
                loggedIn={localStorage.getItem('loggedIn')}
                component={Profile}
                currentEmail={currentEmail}
                currentName={currentName}
                setLoggedIn={setLoggedIn}
                setEmptyMessage={setEmptyMessage}
              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Login
                onLogin={onLogin}
                handleLogin={handleLogin}
                setLoggedIn={setLoggedIn}
                formError={formError}
              />
            }
          />
          <Route
            path="/sign-up"
            element={
              <Register
                formError={formError}
                onRegister={onRegister}
                onUpdateUser={handleUpdateUser}
                setCurrentName={setCurrentName}
                setCurrentEmail={setCurrentEmail}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
