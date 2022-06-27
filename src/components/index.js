import '../pages/index.css';
import {enableValidation} from "./validate.js";
import {openPopup, closePopup} from "./utils.js";
import {nameInput, descriptionInput, inputPlaceName, inputLink, editForm, addForm} from "./forms";
import {addCard} from "./cards";
import {addPopUp, editPopUp, popUps} from "./modals";
import {editProfile, getUser, newCard, initialCards} from "./api";

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description');
let myId;

Promise.all([getUser(), initialCards()])
  .then((results) => {
    myId = results[0]._id
    results[1].forEach((card) =>{
      addCard(card.name, card.link, card._id, card.likes, myId, card.owner._id)
    })
    console.log(results)
  })
// код формы "редактировать профиль":
// 1. Открытие формы
document.querySelector('.profile__edit-button').addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(editPopUp)
});
//2. Редактирование информации о себе
editForm.addEventListener('submit', evt => {
  evt.preventDefault();
  editProfile({
    name: nameInput.value,
    about: descriptionInput.value
  })
    .then((data) => {
      profileName.textContent = data.name
      profileDescription.textContent = data.about
      closePopup(editPopUp);
    })
    .catch(err => console.log(err))
});
// 3. Закрытие формы
editPopUp.querySelector('.pop-up__close-button').addEventListener('click', () => {
  closePopup(editPopUp)
});

// код формы добавления карточек:
// 1. Открытие формы
document.querySelector('.profile__add-button').addEventListener('click', () => {
  openPopup(addPopUp)
});
// 2. Добавление карточек
addForm.addEventListener('submit', evt => {
  evt.preventDefault();
  newCard({
    name: inputPlaceName.value,
    link: inputLink.value
  })
    .then((data) => {
      addCard(data.name, data.link, data._id, data.likes, id);
      addForm.reset();
      closePopup(addPopUp);
    })
    .catch(err => console.log(err))
});
// 3. Закрытие формы
addPopUp.querySelector('.pop-up__close-button').addEventListener('click', () => {
  closePopup(addPopUp)
});

// Закрытие поп-апа кликом на оверлей
Array.from(Object.values(popUps)).forEach(object => {
  object.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('pop-up_opened')) {
      closePopup(object)
    }
  })
});

// включение валидации вызовом enableValidation
// все настройки передаются при вызове
enableValidation({
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__text',
  submitButtonSelector: '.pop-up__save-button',
  inactiveButtonClass: 'pop-up__save-button_disabled',
  inputErrorClass: 'pop-up__text_type_error',
  errorClass: 'pop-up__error_active'
});


export {profileName, profileDescription, myId}
