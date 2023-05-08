export class Api {
  constructor(setting) {
    this._url = setting.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getUserInfo() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  getCards() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._url}/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  pushNewCard(card) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card),
    }).then(this._checkResponse);
  }

  pushUserInfo(data) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: data.name, email: data.email }),
    }).then(this._checkResponse);
  }

  deleteCard(id) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  changeLikeCardStatus = (id, isLiked) => {
    const token = localStorage.getItem('jwt');

    return fetch(`${this._url}/cards/${id}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  };

  setUserAvatar(data) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkResponse);
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }
}

export const tokenCheck = () => {
  const token = localStorage.getItem('jwt');
  fetch(`${this._url}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).catch((error) => {
    console.error(error);
  });
};

const api = new Api({
  baseUrl: 'https://api.moviesexplorer.wander.nomoredomains.monster',
});

export default api;
