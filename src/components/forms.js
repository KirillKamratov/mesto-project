const editForm = document.forms['edit-form'];
const addForm = document.forms['add-form'];

const nameInput = editForm.querySelector('[name="name"]');
const descriptionInput = editForm.querySelector('[name="description"]');

const inputPlaceName = addForm.querySelector('[name = "place-name"]');
const inputLink = addForm.querySelector('[name = "link"]');

export { editForm, addForm, nameInput, descriptionInput, inputPlaceName, inputLink }
