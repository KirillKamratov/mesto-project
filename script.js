const editForm = document.querySelector('#edit-form');
const nameInput = editForm.querySelector('[name="name"]');
const descriptionInput = editForm.querySelector('[name="description"]');
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


document.querySelector('.profile__edit-button').addEventListener('click', () => {
  nameInput.value = document.querySelector('.profile__name').textContent;
  descriptionInput.value = document.querySelector('.profile__description').textContent;
  editForm.classList.add('pop-up_opened');
});

editForm.addEventListener('submit', evt => {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = nameInput.value;
  document.querySelector('.profile__description').textContent = descriptionInput.value;
  editForm.classList.remove('pop-up_opened');
})



editForm.querySelector('.pop-up__close-button').addEventListener('click', () => {
  editForm.classList.remove('pop-up_opened')
});


function createCard(title, link) {
  const newCard = cardTemplate.querySelector('li').cloneNode(true);
  newCard.querySelector('.photo-grid__photo').src = link;
  newCard.querySelector('.photo-grid__photo').alt = title;
  newCard.querySelector('.photo-grid__name').textContent = title;
  return newCard;
}

function addCard(title, link) {
  const card = createCard(title, link);
  photoGridList.prepend(card);
}

initialCards.forEach(item => addCard(item.name, item.link));


