const addPopUp = document.querySelector('#add-pop-up');
const editPopUp = document.querySelector('#edit-pop-up');
const popUpImage = document.querySelector('#pop-up-image');
const popUpPhoto = popUpImage.querySelector('.pop-up__image');
const popUpSubtitle = popUpImage.querySelector('.pop-up__image-subtitle');
const popUpAvatar = document.querySelector('#edit-avatar-pop-up');

//поп-апы
const popUps = {
  popUpImage,
  addPopUp,
  editPopUp,
  popUpAvatar
}

export { popUps, addPopUp, editPopUp, popUpImage, popUpSubtitle, popUpPhoto, popUpAvatar }


