const editForm = document.forms['edit-form'];
const addForm = document.forms['add-form'];
const avatarForm = document.forms['avatar-form']

const nameInput = editForm.querySelector('[name="name"]');
const descriptionInput = editForm.querySelector('[name="description"]');

const inputPlaceName = addForm.querySelector('[name = "place-name"]');
const inputLink = addForm.querySelector('[name = "link"]');

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description');


export { editForm, addForm, nameInput, descriptionInput, inputPlaceName, inputLink, avatarForm,
  profileName, profileDescription }
