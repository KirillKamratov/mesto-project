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

// код формы "редактировать профиль":
// 1. Открытие формы
document.querySelector('.profile__edit-button').addEventListener('click', () => {
  nameInput.value = document.querySelector('.profile__name').textContent;
  descriptionInput.value = document.querySelector('.profile__description').textContent;
  editForm.classList.add('pop-up_opened');
});
//2. Редактирование информации о себе
editForm.addEventListener('submit', evt => {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = nameInput.value;
  document.querySelector('.profile__description').textContent = descriptionInput.value;
  editForm.classList.remove('pop-up_opened');
});
// 3. Закрытие формы
editForm.querySelector('.pop-up__close-button').addEventListener('click', () => {
  editForm.classList.remove('pop-up_opened');
});

// код "6 карточек из коробки"
function createCard(title, link) {
  const newCard = cardTemplate.querySelector('li').cloneNode(true);
  newCard.querySelector('.photo-grid__photo').src = link;
  newCard.querySelector('.photo-grid__photo').alt = title;
  newCard.querySelector('.photo-grid__name').textContent = title;
  // код лайка карточек
  newCard.querySelector('.photo-grid__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('photo-grid__like-button_liked');
  });
  // код удаления карточек
  newCard.querySelector('.photo-grid__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('li').remove();
  });
  //код открытия поп апа с картинкой
  newCard.querySelector('.photo-grid__photo').addEventListener('click', () => {
    popUpImage.classList.add('pop-up_opened');
    popUpImage.querySelector('.pop-up__image').src = link;
    popUpImage.querySelector('.pop-up__image').alt = title
    popUpImage.querySelector('.pop-up__image-subtitle').textContent = title;
  });
  return newCard;
}

// закрытие поп апа с картинкой
popUpImage.querySelector('.pop-up__close-button').addEventListener('click', () => {
  popUpImage.classList.remove('pop-up_opened')
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
  addForm.classList.add('pop-up_opened');
});
// 2. Добавление карточек
addForm.addEventListener('submit', evt => {
  evt.preventDefault();
  addCard(inputPlaceName.value, inputLink.value);
  addForm.classList.remove('pop-up_opened')
});
// 3. Закрытие формы
addForm.querySelector('.pop-up__close-button').addEventListener('click', () => {
  addForm.classList.remove('pop-up_opened')
});