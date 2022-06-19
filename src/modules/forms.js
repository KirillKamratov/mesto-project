//общие переменные
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description');

// переменные формы "редактировать профиль"
const editForm = document.querySelector('#edit-form');
const nameInput = editForm.querySelector('[name="name"]');
const descriptionInput = editForm.querySelector('[name="description"]');

// переменные формы добавления карточек
const addForm = document.querySelector('#add-form');
const inputPlaceName = addForm.querySelector('[name = "place-name"]');
const inputLink = addForm.querySelector('[name = "link"]');

// Переменная поп-апа с картинкой
const popUpImage = document.querySelector('#pop-up-image');
const popUpPhoto = popUpImage.querySelector('.pop-up__image');
const popUpSubtitle = popUpImage.querySelector('.pop-up__image-subtitle');

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

//поп-апы
const popUps = {
  editForm,
  addForm,
  popUpImage,
}

export { profileName, profileDescription, popUps, editForm, nameInput,
  descriptionInput, addForm, inputPlaceName, inputLink, popUpPhoto, popUpImage, popUpSubtitle,
  openPopup, closePopup }


