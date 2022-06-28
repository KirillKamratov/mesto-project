import {popUpPhoto, popUpSubtitle, popUpImage} from "./modals";
import {openPopup, closePopup} from "./utils";
import {like, disLike, deleteCard} from "./api";

const setLike = (likeContainer, id, quantity) => {
  if (likeContainer.classList.contains('photo-grid__like-button_liked')) {
    disLike(id)
      .then((data) => {
        likeContainer.classList.remove('photo-grid__like-button_liked')
        quantity.textContent = data.likes.length
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    like(id)
      .then((data) => {
        likeContainer.classList.add('photo-grid__like-button_liked')
        quantity.textContent = data.likes.length
      })
      .catch(err => console.log(err))
  }
}

const cardTemplate = document.querySelector('#card-template').content;
const photoGridList = document.querySelector('.photo-grid__list');


// код "6 карточек из коробки"
function createCard(title, link, id, likesQuantity, selfId, ownerId) {
  const newCard = cardTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const photoGridPhoto = newCard.querySelector('.photo-grid__photo');
  const likeButton = newCard.querySelector('.photo-grid__like-button');
  const likeQuantity = newCard.querySelector('.photo-grid__like-quantity');
  const deleteButton = newCard.querySelector('.photo-grid__delete-button')
  if (likesQuantity.find(elem => elem._id === selfId)) {
    likeButton.classList.add('photo-grid__like-button_liked')
  }
  if (ownerId !== selfId) {
    deleteButton.classList.add('photo-grid__delete-button_disabled')
  }
  newCard.dataset.id = id;
  photoGridPhoto.src = link;
  photoGridPhoto.alt = title;
  likeQuantity.textContent = likesQuantity.length;
  newCard.querySelector('.photo-grid__name').textContent = title;
  // код лайка карточек
  likeButton.addEventListener('click', () => {
    setLike(likeButton, newCard.dataset.id, likeQuantity)
  })
  // код удаления карточек
  deleteButton.addEventListener('click', (evt) => {
    deleteCard(newCard.dataset.id)
      .then((data) => {
        evt.target.closest('.photo-grid__item').remove();
      })
      .catch(err => console.log(err))
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
function addCard(title, link, id, likesQuantity, selfId, ownerId) {
  const card = createCard(title, link, id, likesQuantity, selfId, ownerId);
  photoGridList.prepend(card);
}

//добавление карточек из коробки



export {cardTemplate, photoGridList, addCard}
