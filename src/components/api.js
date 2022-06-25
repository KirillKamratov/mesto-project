function someFunc () {
  return fetch('https://nomoreparties.co/v1/plus-cohort-13/cards', {
    headers: {
      authorization: '04133e24-2d24-41c7-9c81-c0a879d407ce'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });
}

function authorization () {
  return fetch('https://nomoreparties.co/v1/plus-cohort-13/users/me', {
    headers: {
      authorization: '04133e24-2d24-41c7-9c81-c0a879d407ce'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(`Что-то пошло не так: ${err}`)
    })
}

export const initialCards = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-13/cards', {
    headers: {
      authorization: '04133e24-2d24-41c7-9c81-c0a879d407ce'
    }
  })
}
