const fetchConfig = {
  baseURL: 'https://mesto.nomoreparties.co/v1/plus-cohort-13',
  configs: {
    headers: {
      authorization: '04133e24-2d24-41c7-9c81-c0a879d407ce',
      'Content-Type': 'application/json'
    }
  }
}


const isOk = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`)
}

const initialCards = () => {
  return fetch(`${fetchConfig.baseURL}/cards`,
    fetchConfig.configs)
    .then(isOk)
}

const editProfile = (data) => {
  return fetch(`${fetchConfig.baseURL}/users/me`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    ...fetchConfig.configs
  })
    .then(isOk)
}

const newCard = (card) => {
  return fetch(`${fetchConfig.baseURL}/cards`, {
    method: 'POST',
    body: JSON.stringify(card),
    ...fetchConfig.configs
  })
    .then(isOk)
}

const like = (cardId) => {
  return fetch(`${fetchConfig.baseURL}/cards/likes/${cardId}`, {
    method: 'PUT',
    ...fetchConfig.configs
  })
    .then(isOk)
}

const disLike = (cardId) => {
  return fetch(`${fetchConfig.baseURL}/cards/likes/${cardId}`, {
    method: 'DELETE',
    ...fetchConfig.configs
  })
    .then(isOk)
}

const getUser = () => {
  return fetch(`${fetchConfig.baseURL}/users/me`,
    fetchConfig.configs)
    .then(isOk)
}

const deleteCard = (cardId) => {
  return fetch(`${fetchConfig.baseURL}/cards/${cardId}`, {
    method: 'DELETE',
    ...fetchConfig.configs
  })
    .then(isOk)
}

const editAvatar = (avatar) => {
  return fetch(`${fetchConfig.baseURL}/users/me/avatar`, {
    method: 'PATCH',
    body: JSON.stringify({avatar}),
    ...fetchConfig.configs
  })
    .then(isOk)
}

export { initialCards, editProfile, newCard, like, disLike, getUser, deleteCard, editAvatar }

