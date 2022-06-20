const addPopUp = document.querySelector('#add-pop-up');
const editPopUp = document.querySelector('#edit-pop-up');
const popUpImage = document.querySelector('#pop-up-image');
const popUpPhoto = popUpImage.querySelector('.pop-up__image');
const popUpSubtitle = popUpImage.querySelector('.pop-up__image-subtitle');

//поп-апы
const popUps = {
  popUpImage,
  addPopUp,
  editPopUp
}

export { popUps, addPopUp, editPopUp, popUpImage, popUpSubtitle, popUpPhoto }


