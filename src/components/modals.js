import { editForm, addForm, popUpImage } from "./forms";

const nameInput = editForm.querySelector('[name="name"]');
const descriptionInput = editForm.querySelector('[name="description"]');

const inputPlaceName = addForm.querySelector('[name = "place-name"]');
const inputLink = addForm.querySelector('[name = "link"]');

const popUpPhoto = popUpImage.querySelector('.pop-up__image');
const popUpSubtitle = popUpImage.querySelector('.pop-up__image-subtitle');


export { nameInput, descriptionInput, inputPlaceName, inputLink, popUpPhoto, popUpSubtitle }
