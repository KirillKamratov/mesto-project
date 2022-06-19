import { initialCards, cardTemplate, photoGridList } from "./cards.js";
import { enableValidation } from "./validate.js";
import { profileName, profileDescription, popUps, editForm, nameInput, descriptionInput, addForm,
  inputPlaceName, inputLink, popUpPhoto, popUpImage, popUpSubtitle, openPopup, closePopup } from "./forms.js";

// код "6 карточек из коробки"
function createCard(title, link) {
  const newCard = cardTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const photoGridPhoto = newCard.querySelector('.photo-grid__photo');
  photoGridPhoto.src = link;
  photoGridPhoto.alt = title;
  newCard.querySelector('.photo-grid__name').textContent = title;
  // код лайка карточек
  newCard.querySelector('.photo-grid__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('photo-grid__like-button_liked');
  });
  // код удаления карточек
  newCard.querySelector('.photo-grid__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('.photo-grid__item').remove();
  });
  //код открытия поп апа с картинкой
  photoGridPhoto.addEventListener('click', () => {
    openPopup(popUpImage);
    popUpPhoto.src = link;
    popUpPhoto.alt = title
    popUpSubtitle.textContent = title;
  });
  return newCard;
}
// функция добавления карточек(из коробки+новых)
function addCard(title, link) {
  const card = createCard(title, link);
  photoGridList.prepend(card);
}
//добавление карточек из коробки
initialCards.forEach(item => addCard(item.name, item.link));

// код формы "редактировать профиль":
// 1. Открытие формы
document.querySelector('.profile__edit-button').addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(editForm)
});
//2. Редактирование информации о себе
editForm.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(editForm);
});
// 3. Закрытие формы
editForm.querySelector('.pop-up__close-button').addEventListener('click', () => {
  closePopup(editForm)
});

// закрытие поп апа с картинкой
popUpImage.querySelector('.pop-up__close-button').addEventListener('click', () => {
  closePopup(popUpImage);
});

// код формы добавления карточек:
// 1. Открытие формы
document.querySelector('.profile__add-button').addEventListener('click', () => {
  openPopup(addForm)
});
// 2. Добавление карточек
addForm.addEventListener('submit', evt => {
  evt.preventDefault();
  addCard(inputPlaceName.value, inputLink.value);
  closePopup(addForm);
});
// 3. Закрытие формы
addForm.querySelector('.pop-up__close-button').addEventListener('click', () => {
  closePopup(addForm)
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
