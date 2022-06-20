//закрытие поп-апа на эскейп
function escapePopUP(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.pop-up_opened'))
  }
}

//функция открытия поп-апов
function openPopup(popup) {
  popup.classList.add('pop-up_opened');
  document.addEventListener('keydown', escapePopUP)
}

//функция закрытия поп-апов
function closePopup(popup) {
  popup.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', escapePopUP)
}

export { openPopup, closePopup}
