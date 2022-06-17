import { enableValidation } from "./validate.js";
// переменные формы "редактировать профиль"
const editForm = document.querySelector('#edit-form');
const nameInput = editForm.querySelector('[name="name"]');
const descriptionInput = editForm.querySelector('[name="description"]');

//  переменные "6 карточек из коробки
const cardTemplate = document.querySelector('#card-template').content;
const photoGridList = document.querySelector('.photo-grid__list');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// переменные формы добавления карточек
const addForm = document.querySelector('#add-form');
const inputPlaceName = addForm.querySelector('[name = "place-name"]');
const inputLink = addForm.querySelector('[name = "link"]');

// Переменная поп-апа с картинкой
const popUpImage = document.querySelector('#pop-up-image');
const popUpPhoto = popUpImage.querySelector('.pop-up__image');
const popUpSubtitle = popUpImage.querySelector('.pop-up__image-subtitle');

//общие переменные
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description');

//функция открытия поп-апов
function openPopup (popup) {
  popup.classList.add('pop-up_opened');
}

//функция закрытия поп-апов
function closePopup (popup) {
  popup.classList.remove('pop-up_opened');
}


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

// закрытие поп апа с картинкой
popUpImage.querySelector('.pop-up__close-button').addEventListener('click', () => {
  closePopup(popUpImage);
});

// функция добавления карточек(из коробки+новых)
function addCard(title, link) {
  const card = createCard(title, link);
  photoGridList.prepend(card);
}

//добавление карточек из коробки
initialCards.forEach(item => addCard(item.name, item.link));

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
