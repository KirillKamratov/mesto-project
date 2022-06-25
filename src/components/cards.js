import { popUpPhoto, popUpSubtitle, popUpImage } from "./modals";
import { openPopup } from "./utils";
import { closePopup } from "./utils";
import { initialCards } from "./api";

const cardTemplate = document.querySelector('#card-template').content;
const photoGridList = document.querySelector('.photo-grid__list');

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
initialCards ()
  .then((data) => {
    data.forEach((card) =>{
      addCard(card.name, card.link)
    })
  })



export { cardTemplate, photoGridList, addCard }
